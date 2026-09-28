// 보스 '석상 수호자': 잠든 석상 → 깨어남 → 패턴 1 내려찍기 / 패턴 2 돌진 휩쓸기 → 체력 절반 이하에서 포효 후
// 패턴 3 룬 폭풍(방사형 룬 탄 3파)과 내려찍기 충격파가 더해진다. 공격 뒤 회복 구간에는 가슴 불집이 드러나 더 아프게 맞는다.
import * as THREE from 'three';
import { FX, type Telegraph } from '../render/fx.ts';
import type { SheetAsset } from '../render/sprites.ts';
import type { CircleCollider } from '../world/terrain.ts';
import type { Emitter } from '../world/props.ts';
import { type Ctx, debris, dustPuff, type Hit, Projectile, sparks } from './combat.ts';
import { Enemy } from './enemies.ts';

const R = Math.random;

export const GUARD = {
  hp: 72,
  radius: 1.9,
  walk: 2.4,
  slamWind: 0.64,
  slamImpact: 0.06,
  slamR: 2.8,
  slamReach: 2.7,
  sweepWind: 0.56,
  sweepSpeed: 17,
  sweepTime: 0.5,
  /** 휩쓸기 판정·예고 반폭 */
  sweepHalf: 2.1,
  waves: 3,
  bolts: 14,
};

type Pattern = 'slam' | 'sweep' | 'barrage';

export class Guardian extends Enemy {
  readonly kind = 'boss' as const;
  phase = 1;
  private tele: Telegraph | null = null;
  private slamAt = new THREE.Vector2();
  private sweepDir = new THREE.Vector2();
  private slammed = false;
  private sweepHit = false;
  private wave = 0;
  private waveT = 0;
  private sinceBarrage = 0;
  private history: Pattern[] = [];
  private idleFor = 0.8;
  private shock: { x: number; z: number; r: number; hit: boolean } | null = null;
  private stepT = 0;
  /** 확장 충격파 (자동 조종 회피용으로 읽기만) */
  get shockwave(): { x: number; z: number; r: number } | null {
    return this.shock;
  }
  readonly arena: { x: number; z: number; r: number };
  readonly coreLight: Emitter;
  readonly collider: CircleCollider;
  /** 게임에 알리는 이벤트 */
  onPhase2: (() => void) | null = null;
  onDefeated: (() => void) | null = null;
  recoverWeak = false;

  constructor(asset: SheetAsset, x: number, z: number, arena: { x: number; z: number; r: number }) {
    super(asset, x, z, 99, GUARD.hp, GUARD.radius, 3.2, [4.4, 1.9]);
    this.arena = arena;
    this.actor.u.uDepthBias.value = 1.4;
    this.actor.u.uEmissive.value = 1.8;
    this.actor.play('awaken');
    this.actor.setFrame(0);
    this.state = 'dormant';
    this.coreLight = { pos: new THREE.Vector3(), color: new THREE.Color(0x5ab4ff), intensity: 0, distance: 9, flicker: 0.15, on: 1, target: 1, tag: 'boss' };
    this.collider = { kind: 'circle', x, z, r: 1.55, y0: -10, y1: 10 };
  }

  get awake(): boolean {
    return this.state !== 'dormant' && this.state !== 'awaken';
  }

  /** 진입 연출에서 호출 */
  awaken(ctx: Ctx): void {
    this.setState('awaken');
    this.actor.play('awaken', true);
    ctx.sfx.play('bossRoar', { vol: 0.8 });
  }

  takeHit(h: Hit, ctx: Ctx): boolean {
    if (!this.awake || !this.alive) return false;
    const weak = this.state === 'recover' && this.recoverWeak;
    const dmg = weak ? Math.ceil(h.dmg * 1.5) : h.dmg;
    const ok = super.takeHit({ ...h, dmg }, ctx);
    if (!ok) return false;
    // 거대한 석상은 짧고 옅게만 번쩍인다 (계속 맞아도 형체가 하얗게 날아가지 않게)
    this.flash = weak ? 0.6 : 0.4;
    this.actor.u.uFlashColor.value.setRGB(0.8, 0.92, 1.0);
    if (this.alive && this.phase === 1 && this.hp <= this.maxHp / 2) this.enterPhase2(ctx);
    return true;
  }

  protected die(ctx: Ctx): void {
    this.alive = false;
    this.cancelTele();
    this.shock = null;
    this.setState('dead');
    this.actor.play('death', true);
    ctx.sfx.play('bossRoar', { vol: 0.9, pitch: 0.8 });
    this.onDefeated?.();
  }

  private cancelTele(): void {
    if (this.tele) this.tele.done = true;
    this.tele = null;
  }

  private enterPhase2(ctx: Ctx): void {
    this.phase = 2;
    this.cancelTele();
    this.shock = null;
    // 금이 간 불집에서 불씨가 몇 개 떨어진다 (회복 기회)
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + R();
      ctx.dropEmber(this.pos.x + Math.cos(a) * 3.2, this.pos.y + 0.6, this.pos.z + Math.sin(a) * 2.6);
    }
    this.setState('stagger');
    this.actor.play('stagger', true);
    ctx.sfx.play('bossRoar');
    ctx.rig.shake(0.55, 0, 0.6, 0.6);
    this.onPhase2?.();
  }

  private choose(dist: number): Pattern | 'walk' {
    const last2 = this.history.slice(-2);
    const ban = (p: Pattern) => last2.length === 2 && last2[0] === p && last2[1] === p;
    if (this.phase === 2 && this.sinceBarrage >= 3) return 'barrage';
    if (dist > 6.5) return !ban('sweep') && R() < 0.72 ? 'sweep' : 'walk';
    if (dist < 4.6) return !ban('slam') && R() < 0.68 ? 'slam' : ban('sweep') ? 'slam' : 'sweep';
    return R() < 0.5 && !ban('sweep') ? 'sweep' : 'walk';
  }

  private start(p: Pattern, ctx: Ctx): void {
    this.history.push(p);
    if (this.history.length > 6) this.history.shift();
    this.sinceBarrage = p === 'barrage' ? 0 : this.sinceBarrage + 1;
    const pl = ctx.player;
    const dx = pl.pos.x - this.pos.x;
    const dz = pl.pos.z - this.pos.z;
    const l = Math.hypot(dx, dz) || 1;
    if (p === 'slam') {
      this.setState('slamWind');
      this.actor.play('slamWind', true);
      const reach = Math.min(GUARD.slamReach, Math.max(1.4, l - 0.4));
      this.slamAt.set(this.pos.x + (dx / l) * reach, this.pos.z + (dz / l) * reach);
      this.slammed = false;
      this.tele = ctx.fx.telegraph({ shape: 'circle', x: this.slamAt.x, y: this.pos.y, z: this.slamAt.y, r: GUARD.slamR, dur: GUARD.slamWind + GUARD.slamImpact, hold: 0.12 });
      ctx.sfx.play('bossSweep', { vol: 0.5, pitch: 0.7 });
    } else if (p === 'sweep') {
      this.setState('sweepWind');
      this.actor.play('sweepWind', true);
      this.sweepDir.set(dx / l, dz / l);
      this.sweepHit = false;
      this.tele = ctx.fx.telegraph({
        shape: 'line',
        x: this.pos.x,
        y: this.pos.y,
        z: this.pos.z,
        len: GUARD.sweepSpeed * GUARD.sweepTime * 0.92 + GUARD.radius,
        width: GUARD.sweepHalf * 2,
        angle: Math.atan2(this.sweepDir.x, this.sweepDir.y),
        dur: GUARD.sweepWind,
        hold: 0.1,
      });
    } else {
      this.setState('hop');
      this.actor.play('walk', true);
    }
  }

  update(dt: number, ctx: Ctx): void {
    this.stateT += dt;
    const pl = ctx.player;
    const dx = pl.pos.x - this.pos.x;
    const dz = pl.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    let faceDir: 'down' | 'side' = 'down';
    switch (this.state) {
      case 'dormant':
        this.actor.setFrame(0);
        break;
      case 'awaken':
        if (this.actor.finished) {
          this.setState('idle');
          this.idleFor = 0.6;
        }
        break;
      case 'idle': {
        this.vel.multiplyScalar(Math.exp(-8 * dt));
        this.actor.play('idle');
        if (this.stateT > this.idleFor && pl.alive) {
          const c = this.choose(dist);
          if (c === 'walk') {
            this.setState('walk');
            this.actor.play('walk', true);
          } else this.start(c, ctx);
        }
        break;
      }
      case 'walk': {
        const l = dist || 1;
        this.vel.x = (dx / l) * GUARD.walk;
        this.vel.z = (dz / l) * GUARD.walk;
        if (Math.abs(dx) > Math.abs(dz) * 1.3) {
          faceDir = 'side';
          this.flip = dx < 0;
        }
        this.stepT -= dt;
        if (this.stepT <= 0) {
          this.stepT = 0.36;
          ctx.rig.shake(0.06, 0, 0.5, 0.1);
          dustPuff(ctx, this.pos.x + (R() - 0.5) * 1.6, this.pos.y, this.pos.z + 0.4, 2, 0.6, 1.0);
          ctx.sfx.play('wall', { vol: 0.25 });
        }
        if (dist < 4.2 || this.stateT > 2.4) this.start(dist < 5.5 ? 'slam' : 'sweep', ctx);
        break;
      }
      case 'slamWind': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        if (this.stateT >= GUARD.slamWind) {
          this.setState('slam');
          this.actor.play('slam', true);
        }
        break;
      }
      case 'slam': {
        if (!this.slammed && this.stateT >= GUARD.slamImpact) {
          this.slammed = true;
          this.tele = null;
          this.impact(ctx);
        }
        if (this.stateT > 0.6) this.toRecover(this.phase === 2 ? 0.7 : 0.85, true);
        break;
      }
      case 'sweepWind': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        // 예고의 앞 60% 동안은 방향을 조금씩 플레이어 쪽으로
        if (this.stateT < GUARD.sweepWind * 0.6 && dist > 0.5) {
          const want = Math.atan2(dz, dx);
          const cur = Math.atan2(this.sweepDir.y, this.sweepDir.x);
          let d = want - cur;
          while (d > Math.PI) d -= Math.PI * 2;
          while (d < -Math.PI) d += Math.PI * 2;
          const a = cur + THREE.MathUtils.clamp(d, -1.6 * dt, 1.6 * dt);
          this.sweepDir.set(Math.cos(a), Math.sin(a));
          if (this.tele) this.tele.mesh.rotation.y = Math.atan2(this.sweepDir.x, this.sweepDir.y);
        }
        if (this.tele) this.tele.mesh.position.set(this.pos.x, this.pos.y + 0.04, this.pos.z);
        if (this.stateT >= GUARD.sweepWind) {
          this.tele = null;
          this.setState('sweep');
          this.actor.play('sweep', true);
          ctx.sfx.play('bossSweep');
        }
        break;
      }
      case 'sweep': {
        const on = this.stateT < GUARD.sweepTime;
        const sp = on ? GUARD.sweepSpeed * (1 - Math.pow(this.stateT / GUARD.sweepTime, 3) * 0.6) : 0;
        this.vel.x = this.sweepDir.x * sp;
        this.vel.z = this.sweepDir.y * sp;
        if (on && R() < 0.6) dustPuff(ctx, this.pos.x, this.pos.y, this.pos.z, 1, 1.2, 1.2);
        // 판정 폭 = 예고 폭 (플레이어 반지름 포함)
        if (on && !this.sweepHit && pl.alive && dist < GUARD.sweepHalf + 0.3) {
          if (pl.hurt(2, this.pos.x - this.sweepDir.x, this.pos.z - this.sweepDir.y, 12)) {
            this.sweepHit = true;
            ctx.onPlayerHurt(2);
            ctx.rig.shake(0.45, this.sweepDir.x, 0.2);
          }
        }
        if (this.stateT > GUARD.sweepTime + 0.25) this.toRecover(this.phase === 2 ? 0.55 : 0.7, true);
        break;
      }
      case 'hop': {
        // 룬 폭풍 전: 광장 중앙으로 성큼 물러난다
        const cx = this.arena.x - this.pos.x;
        const cz = this.arena.z - 1.5 - this.pos.z;
        const l = Math.hypot(cx, cz);
        if (l > 0.4 && this.stateT < 1.6) {
          this.vel.x = (cx / l) * 7;
          this.vel.z = (cz / l) * 7;
        } else {
          this.vel.set(0, 0, 0);
          this.setState('barrage');
          this.actor.play('cast', true);
          this.wave = 0;
          this.waveT = 0.35;
          ctx.sfx.play('barrier', { vol: 0.7 });
        }
        break;
      }
      case 'barrage': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        this.waveT -= dt;
        if (this.waveT <= 0 && this.wave < GUARD.waves) {
          this.fireWave(ctx, this.wave);
          this.wave++;
          this.waveT = 0.78;
        }
        if (this.wave >= GUARD.waves && this.waveT <= 0) this.toRecover(1.25, true);
        // 모이는 룬 입자
        if (R() < 0.8) {
          const a = R() * Math.PI * 2;
          ctx.glow.emit({ x: this.pos.x + Math.cos(a) * 3, y: this.pos.y + 0.3, z: this.pos.z + Math.sin(a) * 2, vx: -Math.cos(a) * 4, vy: 2.4, vz: -Math.sin(a) * 2.6, life: 0.6, size: 0.1, color: 0x80c8ff, alpha: 1, fade: 1 });
        }
        break;
      }
      case 'recover': {
        this.vel.multiplyScalar(Math.exp(-8 * dt));
        if (this.stateT > this.idleFor) {
          this.recoverWeak = false;
          this.setState('idle');
          this.idleFor = this.phase === 2 ? 0.2 + R() * 0.25 : 0.35 + R() * 0.3;
        }
        break;
      }
      case 'stagger': {
        this.vel.multiplyScalar(Math.exp(-8 * dt));
        if (this.stateT > 1.5) {
          this.sinceBarrage = 9;
          this.setState('idle');
          this.idleFor = 0.1;
        }
        break;
      }
      case 'dead': {
        this.vel.multiplyScalar(Math.exp(-5 * dt));
        if (this.stateT < 2.4 && R() < 0.5) debris(ctx, this.pos.x + (R() - 0.5) * 3, this.pos.y + 2.5 * R(), this.pos.z + (R() - 0.5) * 1.5, 2);
        break;
      }
    }

    // 확장 충격파 (2페이즈 내려찍기)
    if (this.shock) {
      const s = this.shock;
      s.r += 7.5 * dt;
      const pd = Math.hypot(pl.pos.x - s.x, pl.pos.z - s.z);
      if (!s.hit && Math.abs(pd - s.r) < 0.45 && pl.alive) {
        if (pl.hurt(1, s.x, s.z, 7)) {
          s.hit = true;
          ctx.onPlayerHurt(1);
        }
      }
      if (s.r > 8) this.shock = null;
    }

    // 이동 (자기 충돌체는 잠시 빼고)
    const dyn = ctx.terrain.dynamic;
    const idx = dyn.indexOf(this.collider);
    if (idx >= 0) dyn.splice(idx, 1);
    const wall = this.move(dt, ctx, 0.6);
    // 광장 밖으로 나가지 않게
    const ax = this.pos.x - this.arena.x;
    const az = this.pos.z - this.arena.z;
    const al = Math.hypot(ax, az);
    const maxR = this.arena.r - 1.6;
    if (al > maxR) {
      this.pos.x = this.arena.x + (ax / al) * maxR;
      this.pos.z = this.arena.z + (az / al) * maxR;
    }
    if (this.state === 'sweep' && wall && this.stateT < GUARD.sweepTime) {
      this.stateT = GUARD.sweepTime;
      ctx.rig.shake(0.3, this.sweepDir.x, 0.2);
      ctx.sfx.play('wall', { vol: 0.8 });
    }
    this.collider.x = this.pos.x;
    this.collider.z = this.pos.z;
    if (idx >= 0) dyn.push(this.collider);

    // 표시: 공격은 정면 시점으로 통일, 걸을 때만 옆모습
    this.dir = faceDir;
    if (faceDir === 'down') this.flip = false;
    const core = this.state === 'dormant' ? 0 : this.state === 'dead' ? Math.max(0, 1 - this.stateT / 1.4) : this.state === 'recover' && this.recoverWeak ? 1.6 : 1;
    this.coreLight.intensity = 3.2 * core * (this.phase === 2 ? 1.3 : 1);
    this.coreLight.pos.set(this.pos.x, this.pos.y + 2.4, this.pos.z + 1.1);
    this.present(dt);
  }

  private toRecover(t: number, weak: boolean): void {
    this.setState('recover');
    this.actor.play('idle', true);
    this.idleFor = t;
    this.recoverWeak = weak;
  }

  private impact(ctx: Ctx): void {
    const x = this.slamAt.x;
    const z = this.slamAt.y;
    const y = this.pos.y;
    const pl = ctx.player;
    ctx.rig.shake(0.75, 0, 1, 0.35);
    ctx.hitstop(0.05);
    ctx.sfx.play('bossSlam');
    debris(ctx, x, y, z, 26);
    dustPuff(ctx, x, y, z, 10, 3.2, 1.6);
    ctx.fx.spawn(FX.ringDanger, { x, y: y + 0.06, z, size: 1.2, ground: true, grow: 5.2, life: 0.35, fade: true, glow: 1.4 });
    sparks(ctx, x, y + 0.3, z, 0, -1, 10, [0xa0e0ff, 0xffffff, 0x9f9ba7], 6);
    if (pl.alive && Math.hypot(pl.pos.x - x, pl.pos.z - z) < GUARD.slamR + 0.2) {
      if (pl.hurt(2, x, z, 9)) ctx.onPlayerHurt(2);
    }
    if (this.phase === 2) {
      this.shock = { x, z, r: GUARD.slamR, hit: false };
      ctx.fx.spawn(FX.ringCold, { x, y: y + 0.08, z, size: GUARD.slamR * 2, ground: true, grow: 8 / GUARD.slamR, life: (8 - GUARD.slamR) / 7.5, glow: 1.6 });
    }
  }

  private fireWave(ctx: Ctx, w: number): void {
    const n = GUARD.bolts;
    const off = (w * Math.PI) / n + (w === 1 ? 0.12 : 0);
    const y = this.pos.y + 1.1;
    ctx.fx.spawn(FX.ringCold, { x: this.pos.x, y: this.pos.y + 0.08, z: this.pos.z, size: 2, ground: true, grow: 3.4, life: 0.3, fade: true, glow: 1.5 });
    for (let i = 0; i < n; i++) {
      const a = off + (i / n) * Math.PI * 2;
      const sp = 6.2 + (w === 2 ? 1.2 : 0);
      const pr = new Projectile('rune', this.pos.x + Math.cos(a) * 1.8, y, this.pos.z + Math.sin(a) * 1.4, Math.cos(a) * sp, Math.sin(a) * sp, { life: 2.4 });
      pr.light.on = i % 4 === 0 ? 1 : 0;
      ctx.projectiles.push(pr);
      if (pr.light.on) ctx.lights.push(pr.light);
    }
    ctx.sfx.play('runeBolt', { vol: 1.2 });
    ctx.rig.shake(0.12, 0, 0.3, 0.12);
  }

  resetTo(): void {
    this.cancelTele();
    this.shock = null;
    super.resetTo();
    this.phase = 1;
    this.history = [];
    this.sinceBarrage = 0;
    this.state = 'dormant';
    this.actor.play('awaken', true);
    this.actor.setFrame(0);
    this.collider.x = this.pos.x;
    this.collider.z = this.pos.z;
  }
}

// ─────────────────────────────── 광장 결계 ───────────────────────────────

/** 보스전 동안 광장을 두르는 룬 결계: 반투명 원기둥 벽 + 바닥 고리 */
export class ArenaWall {
  readonly mesh: THREE.Mesh;
  private u: Record<string, THREE.IUniform>;
  level = 0;
  target = 0;

  constructor(x: number, y: number, z: number, r: number) {
    const geo = new THREE.CylinderGeometry(r, r, 3.2, 72, 1, true);
    geo.translate(0, 1.6, 0);
    this.u = { uTime: { value: 0 }, uLevel: { value: 0 }, uR: { value: r } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform float uLevel; uniform float uR; varying vec2 vUv; varying vec3 vW;
        float hh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        void main(){
          float h = vUv.y;
          if (h > uLevel) discard;
          // 8텍셀/유닛 격자: 아래에서 위로 흐르는 빛줄기 + 가운데 높이에 드문드문 룬 글자
          vec2 px = floor(vec2(vUv.x * uR * 6.2832 * 8.0, h * 3.2 * 8.0));
          float fall = 1.0 - h;
          float cr = hh(vec2(px.x, 3.1));
          float period = 18.0 + floor(cr * 14.0);
          float ph = mod(px.y - uTime * (6.0 + cr * 10.0) + cr * 50.0, period);
          float dash = step(cr, 0.3) * step(ph, 2.0 + floor(cr * 5.0));
          vec2 cell = floor(px / vec2(6.0, 8.0));
          vec2 q = px - cell * vec2(6.0, 8.0) - vec2(1.0, 2.0);
          float inG = step(0.0, q.x) * step(q.x, 2.0) * step(0.0, q.y) * step(q.y, 4.0);
          float bit = step(0.45, hh(cell * 7.3 + vec2(min(q.x, 2.0 - q.x), q.y)));
          float glyph = step(0.88, hh(cell + 0.5)) * step(1.0, cell.y) * step(cell.y, 2.0) * inG * bit;
          float gp = 0.55 + 0.45 * sin(uTime * 2.0 + hh(cell) * 6.28);
          float base = step(px.y, 1.0);
          float a = (fall * fall * 0.42 + dash * 0.3 * fall + glyph * 0.42 * gp + base * 0.45) * uLevel;
          vec3 col = mix(vec3(0.25, 0.6, 1.0), vec3(0.78, 0.94, 1.0), max(glyph, dash * 0.6));
          gl_FragColor = vec4(col * 1.3, a);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      // 안쪽 면만: 카메라 쪽 절반은 그리지 않아 광장 위를 뿌옇게 덮지 않는다
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(x, y, z);
    this.mesh.renderOrder = 26;
    this.mesh.visible = false;
  }

  update(dt: number, time: number): void {
    this.level += (this.target - this.level) * (1 - Math.exp(-3 * dt));
    if (Math.abs(this.target - this.level) < 0.002) this.level = this.target;
    this.u.uLevel.value = this.level;
    this.u.uTime.value = time;
    this.mesh.visible = this.level > 0.01;
  }
}

// ─────────────────────────────── 광장 바닥 룬 원 ───────────────────────────────

/** 광장 바닥에 새겨진 룬 원: 평소엔 희미하게, 보스전엔 차갑게 빛나고, 승리 뒤엔 따뜻한 빛으로 바뀐다 */
export class RuneCircle {
  readonly mesh: THREE.Mesh;
  private u: Record<string, THREE.IUniform>;
  glow = 0.15;
  glowTarget = 0.15;
  warm = 0;

  constructor(x: number, y: number, z: number, r: number) {
    const geo = new THREE.PlaneGeometry(r * 2, r * 2);
    geo.rotateX(-Math.PI / 2);
    this.u = { uTime: { value: 0 }, uGlow: { value: 0.15 }, uWarm: { value: 0 }, uR: { value: r } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform float uGlow; uniform float uWarm; uniform float uR; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        void main(){
          float texel = uR * 2.0 * 16.0;
          vec2 p = (floor(vUv * texel) + 0.5) / texel;
          vec2 c = (p - 0.5) * 2.0;
          float r = length(c);
          if (r > 1.0) discard;
          float a = atan(c.y, c.x);
          float px = 2.0 / texel;
          float ring1 = step(abs(r - 0.955), px * 1.1);
          float ring2 = step(abs(r - 0.64), px * 1.1);
          float ring3 = step(abs(r - 0.25), px * 1.1);
          // 두 고리 사이의 룬 칸
          float seg = floor((a + 3.14159) / 6.28318 * 24.0);
          float band = step(0.7, r) * step(r, 0.9);
          vec2 cell = vec2(seg, floor(r * 18.0));
          float glyph = band * step(0.55, h(cell)) * step(0.3, fract((a + 3.14159) / 6.28318 * 24.0)) * step(fract((a + 3.14159) / 6.28318 * 24.0), 0.8);
          float spoke = step(0.25, r) * step(r, 0.64) * step(abs(fract((a + 3.14159) / 6.28318 * 8.0) - 0.5) * r * 6.28 / 8.0 * 2.0, px * 1.2);
          float star = step(r, 0.12) * step(0.5, h(floor(c * 8.0)));
          float line = max(max(max(ring1, ring2), max(ring3, glyph)), max(spoke, star));
          if (line < 0.5) discard;
          float pulse = 0.85 + 0.15 * sin(uTime * 2.2 - r * 6.0);
          vec3 cold = vec3(0.3, 0.72, 1.0);
          vec3 warm = vec3(1.0, 0.62, 0.28);
          vec3 col = mix(cold, warm, uWarm) * (0.35 + uGlow * 1.9) * pulse;
          gl_FragColor = vec4(col, 0.55 + uGlow * 0.45);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(x, y + 0.02, z);
    this.mesh.renderOrder = 2;
  }

  update(dt: number, time: number): void {
    this.glow += (this.glowTarget - this.glow) * (1 - Math.exp(-2.5 * dt));
    this.u.uGlow.value = this.glow;
    this.u.uWarm.value = this.warm;
    this.u.uTime.value = time;
  }
}
