// 게임 본체: 로딩 → 타이틀 → 인트로(건너뛰기 가능) → 마을·숲·폐허 탐색과 전투 → 보스 진입 연출 → 보스전 → 큰 등불 점화 엔딩.
// 쓰러지면 마지막으로 밝힌 석등에서 다시 일어선다. 모든 조작은 사람 입력 또는 ?debug 자동 조종(같은 조작 신호)으로 들어온다.
import * as THREE from 'three';
import { CHARACTER_SHEETS } from '../art/index.ts';
import { GameAudio } from '../audio/sfx.ts';
import { FX, FxSystem } from '../render/fx.ts';
import { Post } from '../render/post.ts';
import { loadSheet, type SheetAsset } from '../render/sprites.ts';
import { Hud } from '../ui/hud.ts';
import type { Checkpoint } from '../world/level.ts';
import type { Emitter } from '../world/props.ts';
import type { BoxCollider } from '../world/terrain.ts';
import { ArenaWall, Guardian, RuneCircle } from './boss.ts';
import { Bot, type Control } from './bot.ts';
import { CameraRig, type Shot } from './camera.ts';
import { type Ctx, impactFlash, type Projectile, sparks, dustPuff } from './combat.ts';
import { CAMERA, DEBUG } from './config.ts';
import { Boar, type Enemy, Wisp } from './enemies.ts';
import { Input } from './input.ts';
import { Npc } from './npc.ts';
import { Player } from './player.ts';
import { DEATH_TIPS, ENDING, INTRO, NAMES, OBJ, SOL_AGAIN, SOL_FIRST, TOASTS } from './story.ts';
import { World } from './world.ts';

type Mode = 'loading' | 'title' | 'intro' | 'play' | 'dialog' | 'cutscene' | 'dead' | 'ending' | 'results';

interface Step {
  dur: number;
  start?: () => void;
  tick?: (k: number, t: number) => void;
  end?: () => void;
}

class Timeline {
  private steps: Step[];
  private i = -1;
  private t = 0;
  done = false;
  onDone: (() => void) | null = null;
  constructor(steps: Step[]) {
    this.steps = steps;
  }
  update(dt: number): void {
    if (this.done) return;
    if (this.i < 0) this.next();
    while (!this.done) {
      const s = this.steps[this.i];
      this.t += dt;
      dt = 0;
      s.tick?.(Math.min(1, this.t / Math.max(1e-4, s.dur)), this.t);
      if (this.t < s.dur) break;
      dt = this.t - s.dur;
      s.end?.();
      this.next();
    }
  }
  private next(): void {
    this.i++;
    this.t = 0;
    if (this.i >= this.steps.length) {
      this.done = true;
      this.onDone?.();
      return;
    }
    this.steps[this.i].start?.();
  }
  /** 남은 단계를 즉시 끝까지 실행 */
  skip(): void {
    let guard = 0;
    while (!this.done && guard++ < 100) {
      const s = this.steps[Math.max(0, this.i)];
      if (this.i < 0) this.next();
      else {
        s.tick?.(1, s.dur);
        s.end?.();
        this.next();
      }
    }
  }
}

interface Interactable {
  x: number;
  y: number;
  z: number;
  r: number;
  h: number;
  label: () => string | null;
  act: () => void;
}

interface Ember {
  x: number;
  y: number;
  z: number;
  t: number;
  alive: boolean;
}

const ease = (k: number) => k * k * (3 - 2 * k);
const tick = () => new Promise<void>((r) => setTimeout(r, 0));
/** 리안 몸을 비추는 등불빛 — 불꽃색보다 조금 희게 해 얼굴이 붉게 타지 않도록 */
const SELF_LIGHT = new THREE.Color(1.0, 0.8, 0.6);

export class Game {
  readonly renderer: THREE.WebGLRenderer;
  readonly rig: CameraRig;
  readonly world: World;
  readonly post: Post;
  readonly input: Input;
  readonly player: Player;
  readonly audio: GameAudio;
  readonly fx: FxSystem;
  readonly hud: Hud;
  readonly npc: Npc;
  readonly enemies: Enemy[] = [];
  readonly boss: Guardian;
  readonly wall: ArenaWall;
  readonly runeCircle: RuneCircle;
  readonly bot = new Bot();
  readonly projectiles: Projectile[] = [];
  private embers: Ember[] = [];
  private ctx: Ctx;
  mode: Mode = 'loading';
  paused = false;
  private helpOpen = false;
  private timeline: Timeline | null = null;
  private last = 0;
  time = 0;
  frameTimes: number[] = [];
  workTimes: number[] = [];
  private readonly occPool = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  private hitstopT = 0;
  private timeScale = 1;
  private gateBlock: BoxCollider;
  private interactables: Interactable[] = [];
  private promptLabel: string | null = null;
  private currentInteract: Interactable | null = null;
  private dialogLines: string[] = [];
  private dialogIdx = 0;
  private dialogName = '';
  private onDialogEnd: (() => void) | null = null;
  private solTalks = 0;
  // 진행 상태
  talked = false;
  bossActive = false;
  bossDefeated = false;
  lanternLit = false;
  private bossSeen = false;
  private zoneShown = [false, false, false];
  private respawnAt = new THREE.Vector3();
  private checkpoints: Checkpoint[];
  private deadT = 0;
  private deathShown = false;
  stats = { time: 0, deaths: 0, kills: 0 };
  private slashSerial = -1;
  private attackSerial = 0;
  private lastStep = 0;
  private controlsShownFor = 0;
  private bossFocus = 0;
  private deathFade = 0;
  private titleT = 0;
  private pendingTimeline: Timeline | null = null;
  events: string[] = [];

  static async create(canvas: HTMLCanvasElement, ui: HTMLDivElement): Promise<Game> {
    const hud = new Hud(ui);
    hud.setLoading(0.05, '지형과 마을을 세우는 중…');
    await tick();
    const world = new World();
    hud.setLoading(0.45, '인물과 짐승을 그리는 중…');
    await tick();
    const sheets: Record<string, SheetAsset> = {};
    const names = Object.keys(CHARACTER_SHEETS);
    for (let i = 0; i < names.length; i++) {
      sheets[names[i]] = loadSheet(CHARACTER_SHEETS[names[i]]());
      hud.setLoading(0.45 + (0.45 * (i + 1)) / names.length, '인물과 짐승을 그리는 중…');
      await tick();
    }
    hud.setLoading(0.95, '등불을 켜는 중…');
    await tick();
    return new Game(canvas, hud, world, sheets);
  }

  private constructor(canvas: HTMLCanvasElement, hud: Hud, world: World, sheets: Record<string, SheetAsset>) {
    this.hud = hud;
    this.world = world;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.rig = new CameraRig(window.innerWidth / window.innerHeight);
    this.post = new Post(this.renderer, world.scene, this.rig.camera);
    this.input = new Input(canvas);
    this.audio = new GameAudio();
    this.fx = new FxSystem();
    world.scene.add(this.fx.group);
    const L = world.level;

    this.player = new Player(sheets.hero);
    world.scene.add(this.player.actor.root);
    this.player.spawn(L.spawn, L.terrain);
    this.respawnAt.copy(L.spawn);
    this.checkpoints = L.checkpoints;

    this.npc = new Npc(sheets.sol, L.npc, L.terrain);
    world.scene.add(this.npc.actor.root);

    for (const s of L.enemies) {
      const e = s.kind === 'boar' ? new Boar(sheets.boar, s.x, s.z, s.group) : new Wisp(sheets.wisp, s.x, s.z, s.group);
      e.place(L.terrain.heightAt(s.x, s.z));
      this.enemies.push(e);
      world.scene.add(e.actor.root);
    }
    this.boss = new Guardian(sheets.guardian, L.boss.x, L.boss.z, { x: L.arena.x, z: L.arena.z, r: L.arena.r + 1.2 });
    this.boss.place(L.terrain.heightAt(L.boss.x, L.boss.z));
    world.scene.add(this.boss.actor.root);
    L.terrain.dynamic.push(this.boss.collider);
    this.boss.onPhase2 = () => this.onBossPhase2();
    this.boss.onDefeated = () => this.onBossDefeated();
    this.wall = new ArenaWall(L.arena.x, L.terrain.heightAt(L.arena.x, L.arena.z), L.arena.z, L.arena.r + 1.2);
    world.scene.add(this.wall.mesh);
    this.runeCircle = new RuneCircle(L.arena.x, L.terrain.heightAt(L.arena.x, L.arena.z), L.arena.z, 3.4);
    world.scene.add(this.runeCircle.mesh);

    const g = L.gateBlock;
    this.gateBlock = { kind: 'box', x0: g.x0, z0: g.z0, x1: g.x1, z1: g.z1, y0: -10, y1: 10 };
    L.terrain.dynamic.push(this.gateBlock);

    const game = this;
    this.ctx = {
      get time() {
        return game.time;
      },
      terrain: L.terrain,
      player: this.player,
      fx: this.fx,
      dust: world.dust,
      glow: world.glow,
      add: world.additive,
      rig: this.rig,
      sfx: { play: (n, o) => this.audio.play(n, o) },
      lights: world.dynamicEmitters,
      projectiles: this.projectiles,
      hitstop: (t) => {
        this.hitstopT = Math.max(this.hitstopT, t);
      },
      onPlayerHurt: (d) => this.onPlayerHurt(d),
      dropEmber: (x, y, z) => this.embers.push({ x, y, z, t: 0, alive: true }),
    };

    this.buildInteractables();
    this.hud.onTextTick = () => this.audio.play('text');
    this.hud.buildMenu([
      { label: () => '계속하기', action: () => this.setPaused(false) },
      { label: () => (this.helpOpen ? '조작법 닫기' : '조작법 보기'), action: () => this.toggleHelp() },
      { label: () => `소리: ${this.audio.muted ? '꺼짐' : '켜짐'}`, action: () => this.audio.toggleMute() },
      { label: () => `화면 효과: ${this.post.enabled ? '켜짐' : '꺼짐'}`, action: () => (this.post.enabled = !this.post.enabled) },
      { label: () => '처음부터 다시', action: () => location.reload() },
    ]);
    this.wireButtons();

    // 첫 입력에서 오디오 활성화
    const unlock = () => this.audio.unlock();
    window.addEventListener('keydown', unlock);
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && (this.mode === 'play' || this.mode === 'dialog')) this.setPaused(true);
    });
    this.resize();
    this.exposeDebug();
    if (DEBUG.enabled && new URLSearchParams(location.search).has('bot')) this.bot.enabled = true;
  }

  // ─────────────────────────────── 기본 ───────────────────────────────

  resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.rig.camera.aspect = w / h;
    this.rig.camera.updateProjectionMatrix();
    const db = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.post.setSize(db.x, db.y);
    this.world.setViewport(db.x, db.y, this.rig.camera.fov);
  }

  start(): void {
    this.hud.show('loading', false);
    this.enterTitle();
    this.last = performance.now();
    // 후처리 패스마다 초기화되지 않도록 프레임 단위로 통계를 모은다
    this.renderer.info.autoReset = false;
    const loop = (now: number) => {
      const raw = now - this.last;
      this.last = now;
      this.frameTimes.push(raw);
      if (this.frameTimes.length > 8000) this.frameTimes.splice(0, 4000);
      const dt = Math.min(0.05, raw / 1000);
      const w0 = performance.now();
      this.update(dt);
      this.renderer.info.reset();
      this.post.render();
      // CPU 쪽 프레임 작업 시간(갱신 + 렌더 명령 제출). rAF 간격이 화면 주사율에 묶일 때 여유를 가늠한다
      this.workTimes.push(performance.now() - w0);
      if (this.workTimes.length > 8000) this.workTimes.splice(0, 4000);
      this.captureFrame();
      this.input.endFrame();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  // ── 연속 프레임 캡처(검증용): 렌더 직후 같은 작업 안에서 캔버스 일부를 복사한다
  private cap: { n: number; i: number; w: number; h: number; cols: number; canvas: HTMLCanvasElement; resolve: (url: string) => void; every: number; skip: number } | null = null;

  captureFrames(n: number, w: number, h: number, cols: number, every = 1): Promise<string> {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = w * cols;
      canvas.height = h * Math.ceil(n / cols);
      this.cap = { n, i: 0, w, h, cols, canvas, resolve, every, skip: 0 };
    });
  }

  private captureFrame(): void {
    const c = this.cap;
    if (!c) return;
    if (c.skip > 0) {
      c.skip--;
      return;
    }
    c.skip = c.every - 1;
    const src = this.renderer.domElement;
    const sp = this.rig.project(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1, this.player.pos.z), src.width, src.height);
    const sx = Math.round(Math.max(0, Math.min(src.width - c.w, sp.x - c.w / 2)));
    const sy = Math.round(Math.max(0, Math.min(src.height - c.h, sp.y - c.h / 2)));
    const g = c.canvas.getContext('2d')!;
    g.imageSmoothingEnabled = false;
    g.drawImage(src, sx, sy, c.w, c.h, (c.i % c.cols) * c.w, Math.floor(c.i / c.cols) * c.h, c.w, c.h);
    g.fillStyle = 'rgba(0,0,0,0.6)';
    g.fillRect((c.i % c.cols) * c.w, Math.floor(c.i / c.cols) * c.h, 150, 22);
    g.fillStyle = '#fff';
    g.font = '14px monospace';
    g.fillText(`#${c.i} ${this.player.actor.anim}:${this.player.actor.frame}`, (c.i % c.cols) * c.w + 6, Math.floor(c.i / c.cols) * c.h + 16);
    c.i++;
    if (c.i >= c.n) {
      this.cap = null;
      c.resolve(c.canvas.toDataURL('image/png'));
    }
  }

  private wireButtons(): void {
    const on = (sel: string, fn: () => void) => this.hud.root.querySelector(sel)?.addEventListener('click', () => {
      this.audio.unlock();
      fn();
    });
    on('.t-start', () => this.mode === 'title' && this.startIntro());
    on('.d-retry', () => this.mode === 'dead' && this.deathShown && this.respawn());
    on('.e-again', () => location.reload());
  }

  private setPaused(p: boolean): void {
    if (p === this.paused) return;
    this.paused = p;
    this.hud.show('pause', p);
    if (!p) {
      this.helpOpen = false;
      this.hud.setHelp(false);
    } else {
      this.hud.selectMenu(0);
      this.hud.refreshMenu();
    }
    this.audio.play(p ? 'uiSelect' : 'uiMove');
  }

  private toggleHelp(): void {
    this.helpOpen = !this.helpOpen;
    this.hud.setHelp(this.helpOpen);
  }

  /** 이번 프레임 조작 신호 (사람 또는 자동 조종) */
  private readControl(dt: number): Control {
    if (this.bot.enabled) {
      const c = this.bot.control(
        {
          player: this.player,
          enemies: this.enemies,
          boss: this.boss,
          projectiles: this.projectiles,
          mode: this.mode,
          prompt: this.promptLabel,
          bossActive: this.bossActive,
          bossDefeated: this.bossDefeated,
          talked: this.talked,
          checkpointsLit: this.checkpoints.map((c) => c.lit),
        },
        dt,
      );
      this.input.consumeClick();
      return c;
    }
    const click = this.input.consumeClick();
    return {
      move: this.input.moveVector(),
      aim: null,
      attack: click,
      dodge: this.input.wasPressed('Space'),
      interact: this.input.wasPressed('KeyE'),
      confirm: this.input.wasPressed('Enter') || this.input.wasPressed('Space') || this.input.wasPressed('NumpadEnter') || click,
    };
  }

  // ─────────────────────────────── 갱신 ───────────────────────────────

  update(dt: number): void {
    this.audio.update();
    if (this.input.wasPressed('KeyM')) {
      this.audio.unlock();
      const m = this.audio.toggleMute();
      this.hud.toast(m ? '소리를 껐습니다 (M)' : '소리를 켰습니다 (M)', 1.6);
      this.hud.refreshMenu();
    }
    if (this.input.wasPressed('KeyP')) this.post.enabled = !this.post.enabled;
    if (this.input.wasPressed('Escape') && (this.mode === 'play' || this.mode === 'dialog' || this.paused)) this.setPaused(!this.paused);
    if (this.paused) {
      if (this.input.wasPressed('KeyW') || this.input.wasPressed('ArrowUp')) {
        this.hud.selectMenu(this.hud.menuIndex - 1);
        this.audio.play('uiMove');
      }
      if (this.input.wasPressed('KeyS') || this.input.wasPressed('ArrowDown')) {
        this.hud.selectMenu(this.hud.menuIndex + 1);
        this.audio.play('uiMove');
      }
      if (this.input.wasPressed('Enter') || this.input.wasPressed('Space') || this.input.wasPressed('KeyE')) {
        this.audio.play('uiSelect');
        this.hud.activateMenu();
      }
      this.input.consumeClick();
      this.hud.update(dt);
      return;
    }
    const ctl = this.readControl(dt);
    switch (this.mode) {
      case 'title':
        this.updateTitle(dt, ctl);
        break;
      case 'intro':
        if (ctl.confirm) this.timeline?.skip();
        else this.timeline?.update(dt);
        this.simulate(dt, null);
        break;
      case 'play':
        this.stats.time += dt;
        this.simulate(dt, ctl);
        this.updatePlay(dt, ctl);
        break;
      case 'dialog':
        this.simulate(dt, null);
        if (ctl.interact || ctl.confirm) this.advanceDialog();
        break;
      case 'cutscene':
      case 'ending':
        this.timeline?.update(dt);
        this.simulate(dt, null);
        break;
      case 'dead':
        this.simulate(dt, null);
        this.updateDead(dt, ctl);
        break;
      case 'results':
        this.simulate(dt, null);
        if (ctl.confirm && this.bot.enabled) this.events.push('results-confirm');
        break;
    }
    this.hud.update(dt);
    this.updateHud(dt);
  }

  /** 월드·인물·전투 한 걸음. ctl이 없으면 플레이어는 입력 없이(연출·대화 중) 서 있는다 */
  private simulate(dt: number, ctl: Control | null): void {
    const sdt = this.hitstopT > 0 ? 0 : dt * this.timeScale;
    this.hitstopT = Math.max(0, this.hitstopT - dt);
    if (this.timeScale < 1) this.timeScale = Math.min(1, this.timeScale + dt * 0.55);
    this.time += sdt;
    const L = this.world.level;
    const p = this.player;

    // ── 플레이어
    if (ctl) {
      if (ctl.aim) p.aim.set(ctl.aim[0], ctl.aim[1]);
      else this.aimFromMouse();
    }
    p.update(sdt, ctl ? { move: ctl.move, attack: ctl.attack, dodge: ctl.dodge } : { move: [0, 0], attack: false, dodge: false }, L.terrain);
    for (const ev of p.events) this.onPlayerEvent(ev);
    // 보스전 결계 안에 가둔다
    if (this.bossActive) {
      const a = this.boss.arena;
      const dx = p.pos.x - a.x;
      const dz = p.pos.z - a.z;
      const d = Math.hypot(dx, dz);
      const m = a.r - 0.6;
      if (d > m) {
        p.pos.x = a.x + (dx / d) * m;
        p.pos.z = a.z + (dz / d) * m;
        p.pos.y = L.terrain.heightAt(p.pos.x, p.pos.z);
      }
    }
    if (sdt > 0) this.resolveAttacks();

    // ── 적·보스·투사체
    for (const e of this.enemies) {
      if (e.removed) {
        e.actor.root.visible = false;
        continue;
      }
      if (Math.abs(e.pos.x - p.pos.x) > 34 && e.state === 'idle') continue;
      e.update(sdt, this.ctx);
    }
    this.boss.update(sdt, this.ctx);
    this.separate();
    for (const pr of this.projectiles) if (pr.alive) pr.update(sdt, this.ctx);
    for (let i = this.projectiles.length - 1; i >= 0; i--) if (!this.projectiles[i].alive) this.projectiles.splice(i, 1);
    this.updateEmbers(sdt);
    this.npc.update(sdt, p.pos);

    // ── 동적 광원 목록
    const dyn = this.world.dynamicEmitters;
    dyn.length = 0;
    dyn.push(p.lantern, this.npc.lantern, this.boss.coreLight);
    for (const e of this.enemies) if (e instanceof Wisp && !e.removed) dyn.push(e.light as Emitter);
    for (const pr of this.projectiles) if (pr.alive && pr.light.on > 0) dyn.push(pr.light);

    this.updateBraziers(sdt);
    this.wall.update(dt, this.time);
    this.runeCircle.glowTarget = this.bossActive ? (this.boss.state === 'barrage' || this.boss.state === 'hop' ? 1 : 0.42) : this.lanternLit ? 0.85 : this.bossDefeated ? 0.1 : 0.18;
    this.runeCircle.warm = this.world.victory;
    this.runeCircle.update(dt, this.time);
    this.fx.update(sdt, this.time);

    // ── 카메라
    let focus = p.pos;
    if (this.bossActive && this.boss.alive) {
      this.bossFocus = Math.min(1, this.bossFocus + dt * 1.5);
    } else this.bossFocus = Math.max(0, this.bossFocus - dt * 1.2);
    if (this.bossFocus > 0) {
      const f = new THREE.Vector3().copy(p.pos).lerp(this.boss.pos, 0.32 * ease(this.bossFocus));
      focus = f;
    }
    this.rig.distance = CAMERA.distance + 3 * ease(this.bossFocus);
    this.rig.follow(focus, dt, p.vel.x * 0.25, p.vel.z * 0.15);
    this.rig.update(dt, this.time);
    const yaw = this.rig.yaw;
    p.actor.sync(yaw, L.terrain.heightAt(p.pos.x, p.pos.z));
    // 리안의 등불이 자기 몸을 따뜻하게 비춘다 (어두운 숲·폐허에서도 캐릭터가 읽히도록)
    p.actor.setSelfLight(p.lantern.pos, this.rig.camera, SELF_LIGHT, 0.62 * p.lantern.on, 1.7);
    this.npc.actor.sync(yaw, this.npc.pos.y);
    for (const e of this.enemies) if (!e.removed) e.actor.sync(yaw, L.terrain.heightAt(e.pos.x, e.pos.z));
    this.boss.actor.sync(yaw, L.terrain.heightAt(this.boss.pos.x, this.boss.pos.z));

    // ── 월드(분위기·조명·입자)
    const shotT = this.rig.shot?.target;
    const wfocus = shotT && this.mode !== 'play' ? new THREE.Vector3(shotT.x, shotT.y - 1, shotT.z) : p.pos;
    const atmoX = shotT && this.mode !== 'play' ? shotT.x : p.pos.x;
    // 싸우고 있는 가까운 적 3마리까지는 앞의 수관을 비워 돌진·시전 동작이 가려지지 않게
    {
      const occ = this.world.occTargets;
      occ.length = 0;
      const near = this.enemies
        .filter((e) => e.alive && e.state !== 'idle' && e.distTo(p.pos.x, p.pos.z) < 11)
        .sort((a, b) => a.distTo(p.pos.x, p.pos.z) - b.distTo(p.pos.x, p.pos.z))
        .slice(0, 3);
      near.forEach((e, i) => occ.push(this.occPool[i].set(e.pos.x, e.pos.y + e.hitHeight * 0.6, e.pos.z)));
    }
    this.world.update(sdt, this.time, wfocus, this.rig.camera, atmoX);
    this.post.apply(this.world.atmo);
    this.renderer.toneMappingExposure = this.world.atmo.exposure;
  }

  private aimFromMouse(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const p = this.rig.unproject(this.input.mouseX, this.input.mouseY, w, h, this.player.pos.y + 0.8);
    if (p) {
      const dx = p.x - this.player.pos.x;
      const dz = p.z - this.player.pos.z;
      const l = Math.hypot(dx, dz);
      if (l > 0.05) this.player.aim.set(dx / l, dz / l);
    }
  }

  private onPlayerEvent(ev: string): void {
    const p = this.player;
    if (ev === 'windup' || ev === 'windup-heavy') {
      this.attackSerial++;
      this.audio.play(ev === 'windup' ? 'swing' : 'swingHeavy');
    } else if (ev === 'dodge') {
      this.audio.play('dodge');
      dustPuff(this.ctx, p.pos.x, p.pos.y, p.pos.z, 3, 0.5, 0.8);
    } else if (ev === 'death') {
      this.audio.play('death');
    }
  }

  /** 플레이어 베기 판정: 사거리·호 안의 적과 투사체 */
  private resolveAttacks(): void {
    const p = this.player;
    const a = p.currentAttack();
    if (!a || !p.attackActive()) return;
    const heavy = p.combo === 2;
    // 바닥 베기 궤적 (공격마다 한 번)
    if (this.slashSerial !== this.attackSerial) {
      this.slashSerial = this.attackSerial;
      const ang = Math.atan2(p.facing.x, p.facing.y);
      this.fx.spawn(FX.slash, {
        x: p.pos.x + p.facing.x * 0.75,
        y: p.pos.y + 0.06,
        z: p.pos.z + p.facing.y * 0.75,
        size: heavy ? 1.35 : 1.05,
        ground: true,
        rot: ang,
        glow: 1.25,
        color: heavy ? 0xc8f0ff : 0xffffff,
        alpha: 0.9,
      });
    }
    const targets: Enemy[] = [...this.enemies, this.boss];
    for (const e of targets) {
      if (!e.alive || e.removed || p.hitIds.has(e.id)) continue;
      if (e === this.boss && !this.boss.awake) continue;
      if (Math.abs(e.pos.y - p.pos.y) > 1.6) continue;
      const dx = e.pos.x - p.pos.x;
      const dz = e.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz) || 1e-3;
      if (d > a.reach + e.radius) continue;
      const cos = (dx * p.facing.x + dz * p.facing.y) / d;
      if (d > e.radius + 0.35 && cos < Math.cos(a.arc / 2)) continue;
      p.hitIds.add(e.id);
      const nx = dx / d;
      const nz = dz / d;
      if (!e.takeHit({ dmg: a.dmg, dirX: nx, dirZ: nz, knock: a.knock, heavy }, this.ctx)) continue;
      const hx = e.pos.x - nx * e.radius * 0.7;
      const hz = e.pos.z - nz * e.radius * 0.7 + 0.1;
      const hy = e.pos.y + (e.kind === 'boss' ? 1.6 : e.hitHeight);
      this.hitstopT = Math.max(this.hitstopT, a.hitstop + (e.alive ? 0 : 0.05));
      this.rig.shake(heavy ? 0.26 : 0.13, nx, 0.15, heavy ? 0.22 : 0.15);
      const cols = e.kind === 'boss' ? [0xa0e0ff, 0xd8f8ff, 0x9f9ba7, 0x787486] : e.kind === 'wisp' ? [0xd8f4ff, 0x9ad8f0, 0xffffff] : [0xffe29a, 0xffffff, 0xf7b85a, 0x8aa856];
      sparks(this.ctx, hx, hy, hz, nx, nz, heavy ? 16 : 10, cols, heavy ? 9 : 7);
      impactFlash(this.ctx, hx, hy, hz, heavy ? 1.5 : 1.1, e.kind === 'boss' ? 0xd8f0ff : 0xffffff);
      this.audio.play(e.kind === 'boss' ? 'bossHit' : heavy ? 'hitHeavy' : 'hit');
      if (!e.alive && e.kind !== 'boss') this.stats.kills++;
    }
    // 투사체 베어 흩기
    for (const pr of this.projectiles) {
      if (!pr.alive) continue;
      const dx = pr.pos.x - p.pos.x;
      const dz = pr.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz) || 1e-3;
      if (d > a.reach + 0.35) continue;
      if ((dx * p.facing.x + dz * p.facing.y) / d < Math.cos(a.arc / 2) && d > 0.6) continue;
      pr.pop(this.ctx, true);
      this.hitstopT = Math.max(this.hitstopT, 0.035);
      sparks(this.ctx, pr.pos.x, pr.pos.y, pr.pos.z, dx / d, dz / d, 6, [0xd8f4ff, 0xffffff]);
    }
  }

  private onPlayerHurt(dmg: number): void {
    this.events.push(`hurt:${this.bossActive ? `boss-${this.boss.state}` : 'enemy'}:${dmg}`);
    this.hitstopT = Math.max(this.hitstopT, 0.09);
    this.rig.shake(0.3 + dmg * 0.05, 0, 0.6, 0.22);
    this.audio.play('hurt');
    const p = this.player;
    sparks(this.ctx, p.pos.x, p.pos.y + 1.0, p.pos.z + 0.1, 0, 1, 8, [0xff7a4a, 0xffc090, 0xffffff], 5);
  }

  /** 적끼리 겹치지 않게 밀어낸다 */
  private separate(): void {
    const list = this.enemies.filter((e) => e.alive && !e.removed);
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];
        const dx = b.pos.x - a.pos.x;
        const dz = b.pos.z - a.pos.z;
        const d = Math.hypot(dx, dz);
        const m = a.radius + b.radius;
        if (d > 1e-4 && d < m) {
          const push = (m - d) * 0.5;
          const nx = dx / d;
          const nz = dz / d;
          if (this.world.level.terrain.walkable(a.pos.x - nx * push, a.pos.z - nz * push)) {
            a.pos.x -= nx * push;
            a.pos.z -= nz * push;
          }
          if (this.world.level.terrain.walkable(b.pos.x + nx * push, b.pos.z + nz * push)) {
            b.pos.x += nx * push;
            b.pos.z += nz * push;
          }
        }
      }
    }
  }

  private updateEmbers(dt: number): void {
    const p = this.player;
    for (const e of this.embers) {
      if (!e.alive) continue;
      e.t += dt;
      const dx = p.pos.x - e.x;
      const dz = p.pos.z - e.z;
      const d = Math.hypot(dx, dz);
      if (e.t > 0.6 && d < 2.4 && p.alive) {
        e.x += (dx / d) * dt * 6;
        e.z += (dz / d) * dt * 6;
      }
      const y = e.y + Math.sin(e.t * 3) * 0.12;
      if (d < 0.6 && e.t > 0.4 && p.alive) {
        e.alive = false;
        if (p.hp < p.maxHp) {
          p.heal(1);
          this.hud.toast(TOASTS.heal, 1.4);
        }
        this.audio.play('pickup');
        for (let i = 0; i < 10; i++) this.world.glow.emit({ x: e.x, y, z: e.z, vx: (Math.random() - 0.5) * 2, vy: 1 + Math.random() * 1.5, vz: (Math.random() - 0.5) * 2, life: 0.6, size: 0.1, color: 0xffc060, alpha: 1, fade: 1 });
        continue;
      }
      if (e.t > 24) e.alive = false;
      this.fx.spawn(FX.orbEmber, { x: e.x, y, z: e.z, size: 0.42, life: Math.max(0.016, dt * 1.01), glow: 1.7 });
      if (Math.random() < 0.3) this.world.glow.emit({ x: e.x, y, z: e.z, vx: 0, vy: 0.6, vz: 0, life: 0.6, size: 0.08, color: 0xffb050, alpha: 0.9, fade: 1 });
    }
    this.embers = this.embers.filter((e) => e.alive);
  }

  private updateBraziers(dt: number): void {
    const L = this.world.level;
    const warm = this.world.victory > 0.5;
    for (const b of L.arenaBraziers) {
      if (b.on <= 0.01) continue;
      if (Math.random() < dt * 22 * b.on) {
        this.world.glow.emit({
          x: b.pos.x + (Math.random() - 0.5) * 0.3,
          y: b.pos.y - 0.2,
          z: b.pos.z - 0.35 + (Math.random() - 0.5) * 0.3,
          vx: 0,
          vy: 1.2 + Math.random(),
          vz: 0,
          life: 0.6,
          size: 0.14,
          color: warm ? (Math.random() < 0.5 ? 0xffb050 : 0xffe0a0) : Math.random() < 0.5 ? 0x7ad8ff : 0xd8f8ff,
          alpha: 1,
          fade: 1,
          wander: 0.5,
        });
      }
    }
    if (this.lanternLit) {
      const f = L.greatLantern.flame;
      for (let i = 0; i < 2; i++) this.world.glow.emit({ x: f.x + (Math.random() - 0.5) * 0.4, y: f.y - 1.0, z: f.z + 0.3, vx: (Math.random() - 0.5) * 0.3, vy: 1.4 + Math.random(), vz: 0, life: 0.9, size: 0.16, color: Math.random() < 0.5 ? 0xffb050 : 0xfff0c8, alpha: 1, fade: 1, wander: 0.6 });
    }
  }

  // ─────────────────────────────── 타이틀·인트로 ───────────────────────────────

  private enterTitle(): void {
    this.mode = 'title';
    this.hud.show('title', true);
    this.hud.setHudVisible(false);
    this.player.lock();
    this.rig.shot = { target: new THREE.Vector3(-30, 1.8, -3), pitch: 0.44, distance: 25, yaw: 0, fov: 30 };
  }

  private updateTitle(dt: number, ctl: Control): void {
    this.titleT += dt;
    const s = this.rig.shot!;
    s.target.set(-31 + Math.sin(this.titleT * 0.06) * 7, 1.8, -3.2 + Math.sin(this.titleT * 0.045) * 1.2);
    this.simulate(dt, null);
    if (ctl.confirm) {
      this.audio.unlock();
      this.startIntro();
    }
  }

  private startIntro(): void {
    if (this.mode !== 'title') return;
    this.audio.play('uiSelect');
    this.hud.show('title', false);
    this.mode = 'intro';
    this.hud.setBars(true);
    this.hud.setSkip(true);
    const s = this.rig.shot!;
    const p = this.player.pos;
    const lerpShot = (a: Shot, b: Shot, k: number) => {
      s.target.copy(a.target).lerp(b.target, k);
      s.pitch = a.pitch + (b.pitch - a.pitch) * k;
      s.distance = a.distance + (b.distance - a.distance) * k;
      s.fov = a.fov + (b.fov - a.fov) * k;
    };
    const mk = (x: number, y: number, z: number, pitch: number, distance: number): Shot => ({ target: new THREE.Vector3(x, y, z), pitch, distance, yaw: 0, fov: 30 });
    const followPitch = (CAMERA.pitchDeg * Math.PI) / 180;
    const A = [
      mk(73, 5.5, -13, 0.52, 27),
      mk(70, 4.5, -8.5, 0.5, 22),
      mk(38, 1.6, -2.5, 0.46, 24),
      mk(10, 1.5, -3.5, 0.46, 24),
      mk(-24, 2.2, -3, 0.46, 24),
      mk(p.x, p.y + CAMERA.targetLift, p.z, followPitch, CAMERA.distance),
    ];
    this.timeline = new Timeline([
      { dur: 4.6, start: () => this.hud.setCaption(INTRO[0]), tick: (k) => lerpShot(A[0], A[1], ease(k)) },
      { dur: 4.6, start: () => this.hud.setCaption(INTRO[1]), tick: (k) => lerpShot(A[2], A[3], ease(k)) },
      { dur: 5.2, start: () => this.hud.setCaption(INTRO[2]), tick: (k) => lerpShot(A[4], A[5], ease(k)) },
    ]);
    this.timeline.onDone = () => this.beginPlay();
  }

  private beginPlay(): void {
    this.hud.setCaption('');
    this.hud.setBars(false);
    this.hud.setSkip(false);
    this.rig.shot = null;
    this.rig.snap(this.player.pos);
    this.player.unlock();
    this.mode = 'play';
    this.hud.setHudVisible(true);
    this.hud.setControls(true);
    this.controlsShownFor = 0;
    this.hud.setObjective(OBJ.talk);
    this.showZone(0);
  }

  private showZone(i: number): void {
    if (this.zoneShown[i]) return;
    this.zoneShown[i] = true;
    const z = this.world.level.zoneTitles[i];
    this.hud.zoneTitle(z.title, z.sub);
  }

  // ─────────────────────────────── 탐색 ───────────────────────────────

  private buildInteractables(): void {
    const L = this.world.level;
    this.interactables.push({
      x: this.npc.pos.x,
      y: this.npc.pos.y,
      z: this.npc.pos.z,
      r: 2.1,
      h: 2.6,
      label: () => '대화하기',
      act: () => this.talkToSol(),
    });
    this.checkpoints.forEach((cp) => {
      const y = L.terrain.heightAt(cp.x, cp.z);
      this.interactables.push({ x: cp.x, y, z: cp.z, r: 1.9, h: 2.5, label: () => (cp.lit ? null : '석등 밝히기'), act: () => this.lightCheckpoint(cp) });
    });
    const gl = L.greatLantern;
    this.interactables.push({ x: gl.pos.x, y: gl.pos.y, z: gl.pos.z, r: 2.6, h: 4.4, label: () => (this.bossDefeated && !this.lanternLit ? '큰 등불 밝히기' : null), act: () => this.startEnding() });
  }

  private updatePlay(dt: number, ctl: Control): void {
    const p = this.player;
    // 가장 가까운 상호작용 대상
    let best: Interactable | null = null;
    let bd = 1e9;
    if (p.alive && p.state === 'move') {
      for (const it of this.interactables) {
        if (!it.label()) continue;
        const d = Math.hypot(it.x - p.pos.x, it.z - p.pos.z);
        if (d < it.r && d < bd && Math.abs(it.y - p.pos.y) < 2.2) {
          bd = d;
          best = it;
        }
      }
    }
    this.currentInteract = best;
    this.promptLabel = best ? best.label() : null;
    if (best && ctl.interact) {
      this.audio.play('uiSelect');
      best.act();
    }
    // 걸음 소리
    if (p.state === 'move' && p.moving) {
      const s = Math.floor(p.stepPhase * 1000 / 280);
      if (s !== this.lastStep) {
        this.lastStep = s;
        this.audio.play('step', { pitch: s % 2 ? 1 : 0.85 });
      }
    }
    // 마을 문 막힘 안내
    if (!this.talked && p.pos.x > -5.2 && p.pos.x < -4 && p.pos.z > -8.4 && p.pos.z < -3.9 && ctl.move[0] > 0.3) {
      if (!this.hud.root.querySelector('.toast.on')) {
        this.hud.toast(TOASTS.gateBlocked, 2.2);
        this.audio.play('gateBlock');
      }
    }
    // 구역과 목표
    const x = p.pos.x;
    if (x > 1) this.showZone(1);
    if (x > 47) this.showZone(2);
    if (!this.bossActive && !this.bossDefeated) {
      if (!this.talked) this.hud.setObjective(OBJ.talk);
      else if (x < -3) this.hud.setObjective(OBJ.gate);
      else if (x < 30 && !this.checkpoints[0].lit) this.hud.setObjective(OBJ.forest);
      else this.hud.setObjective(OBJ.ruins);
    }
    // 보스 광장 진입
    const a = this.boss.arena;
    if (!this.bossActive && !this.bossDefeated && p.alive && Math.hypot(p.pos.x - a.x, p.pos.z - a.z) < a.r - 1.8 && p.pos.y > 2) this.startBossIntro();
    // 조작 안내는 잠시 뒤 접는다
    this.controlsShownFor += dt;
    if (this.controlsShownFor > 45 || x > -2) this.hud.setControls(false);
    // 사망
    if (!p.alive) {
      this.mode = 'dead';
      this.deadT = 0;
      this.deathShown = false;
      this.stats.deaths++;
      this.hud.setPrompt(null);
    }
    // 오디오 구역 비중
    const village = 1 - THREE.MathUtils.smoothstep(x, -8, 0);
    const ruins = THREE.MathUtils.smoothstep(x, 40, 48);
    const forest = Math.max(0, 1 - village - ruins);
    const river = 1 - THREE.MathUtils.smoothstep(Math.abs(x - 23), 3, 14);
    this.audio.setZone(village, forest, ruins, river);
  }

  private talkToSol(): void {
    this.npc.talking = true;
    this.player.lock();
    const dx = this.npc.pos.x - this.player.pos.x;
    const dz = this.npc.pos.z - this.player.pos.z;
    this.player.setDirTo(dx, dz);
    const first = !this.talked;
    const lines = first ? SOL_FIRST : SOL_AGAIN[this.solTalks++ % SOL_AGAIN.length];
    this.openDialog(NAMES.sol, lines, () => {
      this.npc.talking = false;
      this.player.unlock();
      if (first) {
        this.talked = true;
        const i = this.world.level.terrain.dynamic.indexOf(this.gateBlock);
        if (i >= 0) this.world.level.terrain.dynamic.splice(i, 1);
        this.hud.setObjective(OBJ.gate);
      }
    });
  }

  private openDialog(name: string, lines: string[], onEnd: () => void): void {
    this.mode = 'dialog';
    this.dialogLines = lines;
    this.dialogIdx = 0;
    this.dialogName = name;
    this.onDialogEnd = onEnd;
    this.hud.setPrompt(null);
    this.hud.openDialog(name, lines[0]);
  }

  private advanceDialog(): void {
    if (!this.hud.dialogDone) {
      this.hud.completeDialog();
      return;
    }
    this.dialogIdx++;
    this.audio.play('uiMove');
    if (this.dialogIdx >= this.dialogLines.length) {
      this.hud.closeDialog();
      this.mode = 'play';
      this.onDialogEnd?.();
      return;
    }
    this.hud.openDialog(this.dialogName, this.dialogLines[this.dialogIdx]);
  }

  private lightCheckpoint(cp: Checkpoint): void {
    if (cp.lit) return;
    cp.lit = true;
    cp.emitter.on = 1;
    cp.emitter.color.set(0xffa048);
    if (cp.mat) {
      cp.mat.emissive.set(0xffa050);
      cp.mat.emissiveIntensity = 1.8;
      cp.mat.color.set(0x6a4028);
    }
    const y = this.world.level.terrain.heightAt(cp.x, cp.z);
    this.respawnAt.set(cp.respawn.x, 0, cp.respawn.z);
    this.player.heal(this.player.maxHp);
    this.audio.play('checkpoint');
    this.audio.play('lanternLight', { vol: 0.6 });
    this.hud.toast(TOASTS.checkpoint(cp.name), 3.2);
    for (let i = 0; i < 30; i++) {
      const a = Math.random() * Math.PI * 2;
      this.world.glow.emit({ x: cp.x, y: y + 1.7, z: cp.z + 0.1, vx: Math.cos(a) * 1.6, vy: 1 + Math.random() * 2, vz: Math.sin(a) * 1, life: 0.9 + Math.random() * 0.5, size: 0.12, color: Math.random() < 0.6 ? 0xffb050 : 0xfff0c8, alpha: 1, fade: 1, drag: 1.5 });
    }
    this.fx.spawn(FX.ringEmber, { x: cp.x, y: y + 0.08, z: cp.z, size: 1, ground: true, grow: 4, life: 0.5, fade: true, glow: 1.6 });
  }

  // ─────────────────────────────── 보스 ───────────────────────────────

  private startBossIntro(): void {
    const again = this.bossSeen;
    this.bossSeen = true;
    this.mode = 'cutscene';
    this.player.lock();
    this.hud.setPrompt(null);
    this.hud.setBars(true);
    this.hud.setHudVisible(false);
    this.wall.target = 1;
    this.audio.play('barrier');
    const L = this.world.level;
    const b = this.boss;
    const follow = (): Shot => ({ target: this.rig.target.clone(), pitch: this.rig.pitch, distance: this.rig.distance, yaw: this.rig.yaw, fov: this.rig.fov });
    const from = follow();
    this.rig.shot = { target: from.target.clone(), pitch: from.pitch, distance: from.distance, yaw: 0, fov: from.fov };
    const bossShot: Shot = { target: new THREE.Vector3(b.pos.x, b.pos.y + 2.8, b.pos.z), pitch: 0.46, distance: 19, yaw: 0, fov: 30 };
    const s = this.rig.shot;
    const lerp = (a: Shot, c: Shot, k: number) => {
      s.target.copy(a.target).lerp(c.target, k);
      s.pitch = a.pitch + (c.pitch - a.pitch) * k;
      s.distance = a.distance + (c.distance - a.distance) * k;
    };
    const braziers = L.arenaBraziers;
    this.timeline = new Timeline([
      { dur: again ? 0.5 : 1.3, tick: (k) => lerp(from, bossShot, ease(k)) },
      {
        dur: again ? 1.6 : 2.2,
        start: () => {
          b.awaken(this.ctx);
          this.audio.setBoss(true);
        },
        tick: (k, t) => {
          this.world.bossDark = ease(k);
          braziers.forEach((br, i) => {
            const on = k > i / braziers.length ? 1 : 0;
            if (on && br.on < 1) {
              br.on = 1;
              br.intensity = 6;
              br.color.set(0x6ad8ff);
              this.audio.play('orbPop', { vol: 0.5 });
            }
          });
          if (Math.random() < 0.4) this.world.dust.emit({ x: b.pos.x + (Math.random() - 0.5) * 4, y: b.pos.y + 5 + Math.random(), z: b.pos.z + 0.5, vx: 0, vy: -2, vz: 0, life: 1.2, size: 0.1, color: 0x9f9ba7, gravity: 4 });
          if (t > 0.5 && t < 0.55) this.rig.shake(0.35, 0, 1, 0.4);
          s.distance = bossShot.distance - 1.5 * k;
        },
        end: () => {
          if (!again) this.hud.bossBanner(NAMES.boss, NAMES.bossSub);
        },
      },
      { dur: again ? 0.2 : 1.4 },
      {
        dur: 0.8,
        tick: (k) => {
          const to = follow();
          const mid = { ...bossShot, distance: bossShot.distance - 1.5 };
          lerp(mid, to, ease(k));
        },
      },
    ]);
    this.timeline.onDone = () => {
      this.rig.shot = null;
      this.hud.setBars(false);
      this.hud.setHudVisible(true);
      this.player.unlock();
      this.bossActive = true;
      this.mode = 'play';
      this.hud.setObjective(OBJ.boss);
    };
  }

  private onBossPhase2(): void {
    this.hud.toast('수호자의 불집이 차갑게 타오른다!', 2.4);
    for (const br of this.world.level.arenaBraziers) br.intensity = 9;
  }

  private onBossDefeated(): void {
    this.timeScale = 0.25;
    this.hitstopT = Math.max(this.hitstopT, 0.18);
    this.rig.shake(0.8, 0, 1, 0.6);
    this.audio.setBoss(false);
    this.bossDefeated = true;
    const b = this.boss;
    for (let i = 0; i < 40; i++) {
      const a = Math.random() * Math.PI * 2;
      this.world.glow.emit({ x: b.pos.x, y: b.pos.y + 2.4, z: b.pos.z + 1, vx: Math.cos(a) * 4, vy: 1 + Math.random() * 3, vz: Math.sin(a) * 2, life: 1.2 + Math.random(), size: 0.13, color: Math.random() < 0.5 ? 0x7ad8ff : 0xd8f8ff, alpha: 1, fade: 1, drag: 1.2 });
    }
    // 잠시 뒤 결계가 걷힌다 (플레이를 멈추지 않고 흘러가는 연출)
    this.pendingTimeline = new Timeline([
      { dur: 2.6 },
      {
        dur: 0.1,
        end: () => {
          this.bossActive = false;
          this.wall.target = 0;
          this.hud.toast(TOASTS.bossDown, 3.2);
          this.hud.setObjective(OBJ.lantern);
          this.audio.play('barrier', { vol: 0.6 });
          for (const br of this.world.level.arenaBraziers) br.intensity = 2.5;
        },
      },
    ]);
  }

  private updateHud(dt: number): void {
    // 플레이 중에도 흘러가는 짧은 연출
    if (this.pendingTimeline && this.mode !== 'cutscene') {
      this.pendingTimeline.update(dt);
      if (this.pendingTimeline.done) this.pendingTimeline = null;
    }
    const p = this.player;
    this.hud.setHp(p.hp, p.maxHp);
    this.world.bossDark += ((this.bossActive || this.mode === 'cutscene' ? 1 : this.bossDefeated ? 0.25 : 0) - this.world.bossDark) * Math.min(1, dt * 1.5);
    if (this.bossActive || (this.bossDefeated && this.boss.stateT < 2.5 && this.mode === 'play')) {
      this.hud.setBoss(NAMES.boss, this.boss.hp / this.boss.maxHp, this.boss.phase === 2);
    } else this.hud.setBoss(null);
    // 상호작용 안내 위치
    if (this.mode === 'play' && this.currentInteract && this.promptLabel) {
      const it = this.currentInteract;
      const sp = this.rig.project(new THREE.Vector3(it.x, it.y + it.h, it.z), window.innerWidth, window.innerHeight);
      this.hud.setPrompt(this.promptLabel, sp.x, sp.y);
    } else this.hud.setPrompt(null);
    if (DEBUG.enabled) {
      const ft = this.frameTimes.slice(-120);
      const avg = ft.reduce((s, v) => s + v, 0) / Math.max(1, ft.length);
      const info = this.renderer.info.render;
      this.hud.setDebug(`${(1000 / avg).toFixed(0)} fps  ${info.calls} calls  ${(info.triangles / 1000).toFixed(0)}k tri\n${this.mode}  x ${p.pos.x.toFixed(1)} z ${p.pos.z.toFixed(1)}${this.bot.enabled ? '  [자동]' : ''}`);
    }
  }

  // ─────────────────────────────── 사망·재시작 ───────────────────────────────

  private updateDead(dt: number, ctl: Control): void {
    this.deadT += dt;
    if (this.deadT > 1.7 && !this.deathShown) {
      this.deathShown = true;
      this.hud.setDeathTip(DEATH_TIPS[Math.floor(Math.random() * DEATH_TIPS.length)]);
      this.hud.show('death', true);
      this.hud.setHudVisible(false);
    }
    this.deathFade = Math.min(0.55, this.deadT * 0.35);
    this.hud.setFade(this.deathFade);
    if (this.deathShown && this.deadT > 2.2 && ctl.confirm) this.respawn();
  }

  respawn(): void {
    const L = this.world.level;
    this.hud.show('death', false);
    this.hud.setHudVisible(true);
    this.hud.setFade(0);
    this.audio.play('lanternLight', { vol: 0.5 });
    // 보스전이었다면 수호자를 다시 잠재운다
    if (this.bossActive || (this.bossSeen && !this.bossDefeated)) {
      this.bossActive = false;
      this.boss.resetTo();
      this.boss.place(L.terrain.heightAt(L.boss.x, L.boss.z));
      this.wall.target = 0;
      this.wall.level = 0;
      this.audio.setBoss(false);
      for (const br of L.arenaBraziers) br.on = 0;
    }
    for (const e of this.enemies) if (e.alive) e.resetTo();
    for (const pr of this.projectiles) pr.alive = false;
    this.projectiles.length = 0;
    this.fx.clear();
    const at = this.respawnAt;
    this.player.spawn(new THREE.Vector3(at.x, 0, at.z), L.terrain);
    this.player.iframes = 1.2;
    this.rig.snap(this.player.pos);
    this.mode = 'play';
    this.bot.resyncTo(at.x);
    this.events.push('respawn');
  }

  // ─────────────────────────────── 엔딩 ───────────────────────────────

  private startEnding(): void {
    if (!this.bossDefeated || this.lanternLit) return;
    this.mode = 'ending';
    const L = this.world.level;
    const p = this.player;
    const gl = L.greatLantern;
    p.lock();
    p.setDirTo(0, -1);
    p.actor.play('raise', true);
    this.hud.setPrompt(null);
    this.hud.setHudVisible(false);
    this.hud.setBars(true);
    const start = new THREE.Vector3(p.pos.x, p.pos.y + 2.2, p.pos.z);
    const end = gl.flame.clone();
    const mid = start.clone().lerp(end, 0.5);
    mid.y += 2.5;
    const shotA: Shot = { target: new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2), pitch: 0.5, distance: 15, yaw: 0, fov: 30 };
    const shotB: Shot = { target: new THREE.Vector3(72, 3.5, -10), pitch: 0.72, distance: 34, yaw: 0, fov: 30 };
    this.rig.shot = { target: this.rig.target.clone(), pitch: this.rig.pitch, distance: this.rig.distance, yaw: 0, fov: 30 };
    const s = this.rig.shot;
    const from: Shot = { target: this.rig.target.clone(), pitch: this.rig.pitch, distance: this.rig.distance, yaw: 0, fov: 30 };
    const lerp = (a: Shot, c: Shot, k: number) => {
      s.target.copy(a.target).lerp(c.target, k);
      s.pitch = a.pitch + (c.pitch - a.pitch) * k;
      s.distance = a.distance + (c.distance - a.distance) * k;
    };
    const orb = new THREE.Vector3();
    this.timeline = new Timeline([
      { dur: 1.0, tick: (k) => lerp(from, shotA, ease(k)), start: () => this.audio.play('lanternLight', { vol: 0.4 }) },
      {
        dur: 1.5,
        tick: (k) => {
          // 등불 불씨가 포물선을 그리며 큰 등불로
          const e = ease(k);
          orb.set(
            (1 - e) * (1 - e) * start.x + 2 * (1 - e) * e * mid.x + e * e * end.x,
            (1 - e) * (1 - e) * start.y + 2 * (1 - e) * e * mid.y + e * e * end.y,
            (1 - e) * (1 - e) * start.z + 2 * (1 - e) * e * mid.z + e * e * end.z,
          );
          this.fx.spawn(FX.orbEmber, { x: orb.x, y: orb.y, z: orb.z, size: 0.7, life: 0.03, glow: 2 });
          for (let i = 0; i < 3; i++) this.world.glow.emit({ x: orb.x, y: orb.y, z: orb.z, vx: (Math.random() - 0.5), vy: Math.random() * 0.6, vz: (Math.random() - 0.5), life: 0.7, size: 0.12, color: Math.random() < 0.5 ? 0xffb050 : 0xfff0c8, alpha: 1, fade: 1 });
        },
        end: () => this.igniteGreatLantern(),
      },
      {
        dur: 5.2,
        start: () => this.hud.setCaption(ENDING[0]),
        tick: (k, t) => {
          lerp(shotA, shotB, ease(k));
          this.world.victory = ease(Math.min(1, k * 1.1));
          this.audio.setVictory(true);
          const warmK = ease(k);
          L.props.kit.coldGlow.emissive.setRGB(0.3 + 0.7 * warmK, 0.75 - 0.1 * warmK, 1 - 0.7 * warmK);
          L.props.kit.coldGlow.emissiveIntensity = 1.4 * warmK;
          // 기둥과 벽의 룬도 차가운 푸른빛에서 등불 빛으로
          L.props.kit.rune.emissive.setRGB(0.25 + 0.75 * warmK, 0.6 - 0.05 * warmK, 1 - 0.72 * warmK);
          L.props.kit.rune.emissiveIntensity = 0.25 + 0.35 * warmK;
          L.arenaBraziers.forEach((br, i) => {
            if (k > i / L.arenaBraziers.length) {
              br.on = 1;
              br.intensity = 7;
              br.color.set(0xffa050);
            }
          });
          if (t > 2.6 && t < 2.7) this.hud.setCaption(ENDING[1]);
        },
      },
      { dur: 1.2 },
    ]);
    this.timeline.onDone = () => this.showResults();
  }

  private igniteGreatLantern(): void {
    const L = this.world.level;
    const gl = L.greatLantern;
    this.lanternLit = true;
    gl.emitter.on = 1;
    gl.emitter.color.set(0xffb060);
    gl.emitter.intensity = 16;
    gl.emitter.distance = 16;
    if (gl.mat) {
      gl.mat.emissive.set(0xffa850);
      gl.mat.emissiveIntensity = 2.4;
      gl.mat.color.set(0x7a4a28);
    }
    // 폐허의 꺼진 석등도 함께 켠다
    for (const cp of this.checkpoints) if (!cp.lit) this.lightCheckpoint(cp);
    this.audio.play('lanternLight');
    this.audio.play('victory');
    this.rig.shake(0.3, 0, 0.5, 0.4);
    const f = gl.flame;
    for (let i = 0; i < 80; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 5;
      this.world.glow.emit({ x: f.x, y: f.y - 0.6, z: f.z + 0.4, vx: Math.cos(a) * sp, vy: 1 + Math.random() * 4, vz: Math.sin(a) * sp * 0.6, life: 1.2 + Math.random() * 1.2, size: 0.14, color: Math.random() < 0.6 ? 0xffb050 : 0xfff0c8, alpha: 1, fade: 1, drag: 1.2 });
    }
    this.fx.spawn(FX.ringEmber, { x: f.x, y: L.greatLantern.pos.y + 0.1, z: f.z, size: 2, ground: true, grow: 7, life: 0.9, fade: true, glow: 1.8 });
  }

  private showResults(): void {
    this.mode = 'results';
    this.hud.setCaption('');
    this.hud.setBars(false);
    const t = Math.round(this.stats.time);
    const mm = Math.floor(t / 60);
    const ss = String(t % 60).padStart(2, '0');
    this.hud.setEndingStats(
      `<div>걸린 시간</div><div class="v">${mm}분 ${ss}초</div><div>쓰러진 횟수</div><div class="v">${this.stats.deaths}번</div><div>잠재운 적</div><div class="v">${this.stats.kills}</div>`,
    );
    this.hud.show('ending', true);
    this.events.push('ending');
  }

  // ─────────────────────────────── 디버그 ───────────────────────────────

  private exposeDebug(): void {
    const g = this;
    const api = {
      get state() {
        return {
          mode: g.mode,
          paused: g.paused,
          x: g.player.pos.x,
          y: g.player.pos.y,
          z: g.player.pos.z,
          hp: g.player.hp,
          pstate: g.player.state,
          talked: g.talked,
          bossActive: g.bossActive,
          bossDefeated: g.bossDefeated,
          bossHp: g.boss.hp,
          bossPhase: g.boss.phase,
          bossState: g.boss.state,
          lanternLit: g.lanternLit,
          checkpoints: g.checkpoints.map((c) => c.lit),
          enemiesAlive: g.enemies.filter((e) => e.alive).length,
          enemiesNear: g.enemies.filter((e) => e.alive && e.distTo(g.player.pos.x, g.player.pos.z) < 10).map((e) => `${e.kind}:${e.state}`),
          /** 5유닛 안에서 싸우고 있는 적 (스크린샷 시점 판단용) */
          enemiesClose: g.enemies.filter((e) => e.alive && e.distTo(g.player.pos.x, g.player.pos.z) < 5).map((e) => `${e.kind}:${e.state}`),
          projectiles: g.projectiles.length,
          stats: { ...g.stats },
          events: g.events.slice(-20),
        };
      },
      frameTimes: () => g.frameTimes.slice(),
      workTimes: () => g.workTimes.slice(),
      clearFrameTimes: () => {
        g.frameTimes.length = 0;
        g.workTimes.length = 0;
      },
      renderer: () => ({ calls: g.renderer.info.render.calls, triangles: g.renderer.info.render.triangles, textures: g.renderer.info.memory.textures, geometries: g.renderer.info.memory.geometries }),
      bot(on: boolean, passive = false) {
        g.bot.enabled = on;
        g.bot.passive = passive;
      },
      botLog: () => g.bot.log.slice(-30),
      teleport(x: number, z: number) {
        g.player.pos.set(x, g.world.level.terrain.heightAt(x, z), z);
        g.rig.snap(g.player.pos);
        g.bot.resyncTo(x);
      },
      setPost(on: boolean) {
        g.post.enabled = on;
      },
      setHp(n: number) {
        g.player.hp = n;
      },
      skipTitle() {
        if (g.mode === 'title') g.startIntro();
        g.timeline?.skip();
      },
      /** 플레이어 주변을 n프레임 연속 캡처해 한 장의 PNG data URL로 */
      captureFrames: (n: number, w: number, h: number, cols: number, every = 1) => g.captureFrames(n, w, h, cols, every),
    };
    (window as unknown as { __GAME__: unknown }).__GAME__ = api;
  }
}
