// 주인공: 이동(가속·방향 히스테리시스), 3단 콤보(준비→타격→회수), 즉시 반응하는 구르기(무적 구간), 피격·사망.
import * as THREE from 'three';
import type { Dir } from '../art/sheet.ts';
import { SpriteActor, type SheetAsset } from '../render/sprites.ts';
import type { Terrain } from '../world/terrain.ts';
import type { Emitter } from '../world/props.ts';
import { PLAYER } from './config.ts';

export type PState = 'move' | 'attack' | 'dodge' | 'hurt' | 'dead' | 'locked';

/** 콤보 단계별 타이밍(초): 스프라이트 프레임 길이와 일치 */
export const ATTACKS = [
  { anim: 'attack1', active: [0.118, 0.2], total: 0.365, cancel: 0.24, dmg: 1, knock: 5.5, lunge: 3.2, hitstop: 0.065, reach: 1.75, arc: 2.2 },
  { anim: 'attack2', active: [0.108, 0.19], total: 0.355, cancel: 0.23, dmg: 1, knock: 5.5, lunge: 3.2, hitstop: 0.065, reach: 1.75, arc: 2.2 },
  { anim: 'attack3', active: [0.255, 0.33], total: 0.595, cancel: 0.46, dmg: 2, knock: 10, lunge: 6.5, hitstop: 0.12, reach: 2.05, arc: 2.0 },
] as const;

export class Player {
  readonly actor: SpriteActor;
  readonly pos = new THREE.Vector3();
  readonly vel = new THREE.Vector3();
  private displayY = 0;
  facing = new THREE.Vector2(0, 1);
  aim = new THREE.Vector2(0, 1);
  state: PState = 'move';
  stateT = 0;
  hp = PLAYER.maxHp;
  maxHp = PLAYER.maxHp;
  iframes = 0;
  combo = 0;
  queued = false;
  hitIds = new Set<number>();
  private dodgeDir = new THREE.Vector2();
  private dodgeCd = 0;
  moving = false;
  readonly lantern: Emitter;
  /** 이번 프레임 이벤트 (게임이 효과음/연출에 사용) */
  events: string[] = [];
  private dir: Dir = 'down';
  private flip = false;
  stepPhase = 0;
  afterimage = 0;

  constructor(asset: SheetAsset) {
    this.actor = new SpriteActor(asset, { silhouette: true, shadowSize: [1.0, 0.5], emissive: 1.5 });
    this.actor.play('idle');
    this.lantern = {
      pos: new THREE.Vector3(),
      color: new THREE.Color(0xffb060),
      intensity: 1.9,
      distance: 5.5,
      flicker: 0.12,
      on: 1,
      target: 1,
      tag: 'player',
    };
  }

  spawn(p: THREE.Vector3, terrain: Terrain): void {
    this.pos.copy(p);
    this.pos.y = terrain.heightAt(p.x, p.z);
    this.displayY = this.pos.y;
    this.vel.set(0, 0, 0);
    this.hp = this.maxHp;
    this.state = 'move';
    this.iframes = 0;
    this.facing.set(0, 1);
    this.actor.play('idle', true);
    this.actor.u.uDissolve.value = 0;
    this.actor.u.uFlash.value = 0;
    this.actor.mesh.visible = true;
  }

  get alive(): boolean {
    return this.state !== 'dead';
  }

  /** 적이 노릴 수 있는 상태인지 (대화·연출 중에는 제외) */
  get targetable(): boolean {
    return this.state !== 'dead' && this.state !== 'locked';
  }

  /** 대화·연출 동안 조작을 막는다 */
  lock(): void {
    if (this.state === 'dead') return;
    this.state = 'locked';
    this.stateT = 0;
    this.combo = 0;
    this.actor.play('idle');
    this.actor.speed = 1;
  }

  unlock(): void {
    if (this.state !== 'locked') return;
    this.state = 'move';
    this.stateT = 0;
  }

  get invulnerable(): boolean {
    if (this.iframes > 0) return true;
    if (this.state === 'dodge') return this.stateT >= PLAYER.dodgeIFrameStart && this.stateT <= PLAYER.dodgeIFrameEnd;
    return this.state === 'locked';
  }

  currentAttack() {
    return this.state === 'attack' ? ATTACKS[this.combo] : null;
  }

  /** 현재 타격 판정 구간인지 */
  attackActive(): boolean {
    const a = this.currentAttack();
    return !!a && this.stateT >= a.active[0] && this.stateT <= a.active[1];
  }

  private chooseDir(fx: number, fz: number): void {
    // 방향 전환 히스테리시스: 현재 방향을 약간 선호
    const ax = Math.abs(fx);
    const az = Math.abs(fz);
    const bias = 0.18;
    let d: Dir;
    if (this.dir === 'side') d = ax + bias > az ? 'side' : fz < 0 ? 'up' : 'down';
    else d = ax > az + bias ? 'side' : fz < 0 ? 'up' : 'down';
    this.dir = d;
    if (d === 'side' && Math.abs(fx) > 0.05) this.flip = fx < 0;
  }

  startAttack(): void {
    this.state = 'attack';
    this.stateT = 0;
    this.queued = false;
    this.hitIds.clear();
    const a = ATTACKS[this.combo];
    this.facing.copy(this.aim);
    this.chooseDir(this.aim.x, this.aim.y);
    this.actor.play(a.anim, true);
    this.events.push(this.combo === 2 ? 'windup-heavy' : 'windup');
  }

  hurt(dmg: number, fromX: number, fromZ: number, knock = 6): boolean {
    if (!this.alive || this.invulnerable) return false;
    this.hp = Math.max(0, this.hp - dmg);
    const dx = this.pos.x - fromX;
    const dz = this.pos.z - fromZ;
    const l = Math.hypot(dx, dz) || 1;
    this.vel.set((dx / l) * knock, 0, (dz / l) * knock);
    this.actor.u.uFlash.value = 1;
    this.actor.u.uFlashColor.value.setRGB(1, 0.25, 0.2);
    if (this.hp <= 0) {
      this.state = 'dead';
      this.stateT = 0;
      this.actor.play('death', true);
      this.events.push('death');
    } else {
      this.state = 'hurt';
      this.stateT = 0;
      this.iframes = PLAYER.hurtIFrames;
      this.actor.play('hurt', true);
      this.events.push('hurt');
    }
    return true;
  }

  heal(n: number): void {
    this.hp = Math.min(this.maxHp, this.hp + n);
  }

  update(dt: number, input: { move: [number, number]; attack: boolean; dodge: boolean }, terrain: Terrain): void {
    this.events.length = 0;
    this.stateT += dt;
    this.iframes = Math.max(0, this.iframes - dt);
    this.dodgeCd = Math.max(0, this.dodgeCd - dt);
    const [mx, mz] = input.move;
    this.moving = mx !== 0 || mz !== 0;

    // ── 입력 처리 (구르기는 공격 중에도 즉시)
    if (this.state !== 'dead' && this.state !== 'locked') {
      if (input.dodge && this.dodgeCd <= 0 && this.state !== 'dodge' && this.state !== 'hurt') {
        this.state = 'dodge';
        this.stateT = 0;
        const dx = this.moving ? mx : this.facing.x;
        const dz = this.moving ? mz : this.facing.y;
        const l = Math.hypot(dx, dz) || 1;
        this.dodgeDir.set(dx / l, dz / l);
        this.facing.copy(this.dodgeDir);
        this.chooseDir(this.dodgeDir.x, this.dodgeDir.y);
        this.actor.play('dodge', true);
        this.events.push('dodge');
        this.afterimage = 0;
      } else if (input.attack) {
        if (this.state === 'move') {
          this.combo = 0;
          this.startAttack();
        } else if (this.state === 'attack') {
          this.queued = true;
        }
      }
    }

    let speedTarget = 0;
    let tvx = 0;
    let tvz = 0;
    switch (this.state) {
      case 'move': {
        speedTarget = PLAYER.speed;
        tvx = mx * speedTarget;
        tvz = mz * speedTarget;
        const k = 1 - Math.exp(-PLAYER.accel * dt * 0.35);
        this.vel.x += (tvx - this.vel.x) * k;
        this.vel.z += (tvz - this.vel.z) * k;
        if (this.moving) {
          this.facing.set(mx, mz);
          this.chooseDir(mx, mz);
        }
        const sp = Math.hypot(this.vel.x, this.vel.z);
        if (sp > 0.6) {
          this.actor.play('run');
          // 발 미끄러짐 방지: 이동 속도에 애니메이션 속도를 맞춘다
          this.actor.speed = THREE.MathUtils.clamp(sp / PLAYER.speed, 0.55, 1.25);
          this.stepPhase += dt * this.actor.speed;
        } else {
          this.actor.play('idle');
          this.actor.speed = 1;
        }
        break;
      }
      case 'attack': {
        const a = ATTACKS[this.combo];
        this.actor.speed = 1;
        // 타격 순간 앞으로 살짝 내딛음
        const inLunge = this.stateT >= a.active[0] - 0.03 && this.stateT <= a.active[0] + 0.06;
        const k = 1 - Math.exp(-18 * dt);
        const lx = inLunge ? this.facing.x * a.lunge : mx * 0.8;
        const lz = inLunge ? this.facing.y * a.lunge : mz * 0.8;
        this.vel.x += (lx - this.vel.x) * k;
        this.vel.z += (lz - this.vel.z) * k;
        if (this.queued && this.stateT >= a.cancel && this.combo < 2) {
          this.combo++;
          this.startAttack();
        } else if (this.stateT >= a.total) {
          this.state = 'move';
          this.combo = 0;
          this.stateT = 0;
        }
        break;
      }
      case 'dodge': {
        const T = PLAYER.dodgeTime;
        const u = Math.min(1, this.stateT / T);
        const sp = PLAYER.dodgeSpeed * Math.pow(1 - u, 0.55);
        this.vel.x = this.dodgeDir.x * sp;
        this.vel.z = this.dodgeDir.y * sp;
        this.actor.speed = 1;
        this.afterimage += dt;
        if (this.stateT >= T) {
          this.state = 'move';
          this.stateT = 0;
          this.dodgeCd = PLAYER.dodgeCooldown;
          this.vel.multiplyScalar(0.3);
        }
        break;
      }
      case 'hurt': {
        this.vel.multiplyScalar(Math.exp(-9 * dt));
        if (this.stateT > 0.26) {
          this.state = 'move';
          this.stateT = 0;
        }
        break;
      }
      case 'dead': {
        this.vel.multiplyScalar(Math.exp(-8 * dt));
        break;
      }
      case 'locked': {
        this.vel.multiplyScalar(Math.exp(-12 * dt));
        break;
      }
    }

    // ── 이동과 충돌 (보이는 지형과 같은 데이터로)
    terrain.move(this.pos, this.vel.x * dt, this.vel.z * dt, PLAYER.radius, PLAYER.stepHeight);
    this.displayY += (this.pos.y - this.displayY) * Math.min(1, dt * 22);

    // ── 표시
    this.actor.setDir(this.dir, this.flip);
    this.actor.update(dt * 1000);
    this.actor.root.position.set(this.pos.x, this.displayY, this.pos.z);
    this.actor.u.uFlash.value = Math.max(0, this.actor.u.uFlash.value - dt * 7);
    // 무적 깜빡임
    const blink = this.iframes > 0 && this.state !== 'dead' && Math.floor(this.iframes * 18) % 2 === 0;
    this.actor.mesh.visible = !blink;
    // 등불 광원: 허리 쪽
    this.lantern.pos.set(this.pos.x + (this.flip ? -0.35 : 0.35), this.displayY + 0.75, this.pos.z - 0.15);
  }

  setDirTo(fx: number, fz: number): void {
    this.facing.set(fx, fz);
    this.chooseDir(fx, fz);
    this.actor.setDir(this.dir, this.flip);
  }

  get spriteDir(): Dir {
    return this.dir;
  }
  get spriteFlip(): boolean {
    return this.flip;
  }
}
