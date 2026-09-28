// 전투 공용: 타격 정보, 적·보스가 공유하는 게임 문맥, 타격감 연출 도우미(방향성 스파크·섬광·먼지·예고 표시).
import * as THREE from 'three';
import type { SfxName } from '../audio/sfx.ts';
import { FX, type FxSystem } from '../render/fx.ts';
import type { Particles } from '../render/particles.ts';
import type { Terrain } from '../world/terrain.ts';
import type { Emitter } from '../world/props.ts';
import type { CameraRig } from './camera.ts';
import type { Player } from './player.ts';

export interface Hit {
  dmg: number;
  dirX: number;
  dirZ: number;
  knock: number;
  heavy: boolean;
}

export interface SfxOut {
  play(name: SfxName, opts?: { vol?: number; pitch?: number; x?: number }): void;
}

export interface Ctx {
  time: number;
  terrain: Terrain;
  player: Player;
  fx: FxSystem;
  dust: Particles;
  glow: Particles;
  add: Particles;
  rig: CameraRig;
  sfx: SfxOut;
  lights: Emitter[];
  projectiles: Projectile[];
  hitstop(t: number): void;
  /** 플레이어가 맞았을 때 공통 반응(화면 붉은 테두리 등) */
  onPlayerHurt(dmg: number): void;
  dropEmber(x: number, y: number, z: number): void;
}

const R = Math.random;

/** 방향성 스파크: 타격 방향으로 원뿔 모양으로 튄다 */
export function sparks(ctx: Ctx, x: number, y: number, z: number, dx: number, dz: number, n: number, colors: number[], speed = 7): void {
  const base = Math.atan2(dz, dx);
  for (let i = 0; i < n; i++) {
    const a = base + (R() - 0.5) * 1.3;
    const s = speed * (0.45 + R() * 0.75);
    ctx.add.emit({
      x,
      y,
      z,
      vx: Math.cos(a) * s,
      vy: 1.5 + R() * 3.5,
      vz: Math.sin(a) * s,
      life: 0.18 + R() * 0.22,
      size: 0.07 + R() * 0.05,
      color: colors[Math.floor(R() * colors.length)],
      gravity: 16,
      drag: 3,
      shrink: true,
    });
  }
}

export function impactFlash(ctx: Ctx, x: number, y: number, z: number, size = 1.1, color: THREE.ColorRepresentation = 0xffffff): void {
  ctx.fx.spawn(FX.impact, { x, y, z, size, rot: R() * Math.PI, glow: 1.6, color });
}

export function dustPuff(ctx: Ctx, x: number, y: number, z: number, n = 4, spread = 0.5, size = 0.9): void {
  for (let i = 0; i < n; i++) {
    ctx.fx.spawn(FX.dust, {
      x: x + (R() - 0.5) * spread,
      y: y + 0.12 + R() * 0.15,
      z: z + (R() - 0.5) * spread,
      // 8텍셀 프레임: 0.34유닛보다 작으면 텍셀이 월드 격자보다 잘게 부서져 보인다
      size: Math.max(0.34, size * 0.6 * (0.85 + R() * 0.35)),
      vx: (R() - 0.5) * 1.2,
      vy: 0.35 + R() * 0.35,
      vz: (R() - 0.5) * 0.6,
      frameDur: 0.07 + R() * 0.04,
      alpha: 0.55,
      fade: true,
      color: 0xb8aa98,
    });
  }
}

/** 돌 파편: 무거운 충격(보스 내려찍기, 벽 충돌) */
export function debris(ctx: Ctx, x: number, y: number, z: number, n: number, colors = [0x787486, 0x565166, 0x9f9ba7, 0x3e6240]): void {
  for (let i = 0; i < n; i++) {
    const a = R() * Math.PI * 2;
    const s = 2 + R() * 5;
    ctx.dust.emit({ x, y: y + 0.2, z, vx: Math.cos(a) * s, vy: 3 + R() * 5, vz: Math.sin(a) * s * 0.7, life: 0.6 + R() * 0.5, size: 0.1 + R() * 0.08, color: colors[Math.floor(R() * colors.length)], gravity: 18, drag: 1 });
  }
}

export function alertMark(ctx: Ctx, x: number, y: number, z: number): void {
  ctx.fx.spawn(FX.alert, { x, y, z, size: 0.62, life: 0.55, vy: 0.9, fade: true, glow: 1.3 });
}

// ─────────────────────────────── 투사체 ───────────────────────────────

export class Projectile {
  readonly pos = new THREE.Vector3();
  readonly vel = new THREE.Vector3();
  radius: number;
  dmg: number;
  life: number;
  alive = true;
  kind: 'mist' | 'rune';
  homing: number;
  homingT: number;
  light: Emitter;
  private trail = 0;

  constructor(kind: 'mist' | 'rune', x: number, y: number, z: number, vx: number, vz: number, opts: { homing?: number; homingT?: number; life?: number } = {}) {
    this.kind = kind;
    this.pos.set(x, y, z);
    this.vel.set(vx, 0, vz);
    this.radius = kind === 'mist' ? 0.36 : 0.3;
    this.dmg = 1;
    this.life = opts.life ?? (kind === 'mist' ? 3.2 : 2.6);
    this.homing = opts.homing ?? 0;
    this.homingT = opts.homingT ?? 0;
    this.light = {
      pos: this.pos,
      color: new THREE.Color(kind === 'mist' ? 0x8ad8ff : 0x60b0ff),
      intensity: kind === 'mist' ? 2.4 : 1.6,
      distance: 3.2,
      flicker: 0.2,
      on: 1,
      target: 1,
      tag: 'projectile',
    };
  }

  update(dt: number, ctx: Ctx): void {
    this.life -= dt;
    if (this.life <= 0) {
      this.pop(ctx);
      return;
    }
    const p = ctx.player;
    if (this.homingT > 0 && this.homing > 0) {
      this.homingT -= dt;
      const dx = p.pos.x - this.pos.x;
      const dz = p.pos.z - this.pos.z;
      const want = Math.atan2(dz, dx);
      const cur = Math.atan2(this.vel.z, this.vel.x);
      let d = want - cur;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      const turn = THREE.MathUtils.clamp(d, -this.homing * dt, this.homing * dt);
      const sp = Math.hypot(this.vel.x, this.vel.z);
      this.vel.x = Math.cos(cur + turn) * sp;
      this.vel.z = Math.sin(cur + turn) * sp;
    }
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    const gy = ctx.terrain.heightAt(this.pos.x, this.pos.z);
    // 벽·절벽에 닿으면 흩어진다
    if (!ctx.terrain.walkable(this.pos.x, this.pos.z) && !ctx.terrain.isWater(this.pos.x, this.pos.z)) {
      this.pop(ctx);
      return;
    }
    if (gy > this.pos.y - 0.2) {
      this.pop(ctx);
      return;
    }
    // 시각: 핵 + 꼬리 입자
    const sprite = this.kind === 'mist' ? FX.orbCold : FX.bolt;
    ctx.fx.spawn(sprite, { x: this.pos.x, y: this.pos.y, z: this.pos.z, size: this.kind === 'mist' ? 0.62 : 0.55, life: dt * 1.01, glow: 1.5, loop: true, rot: this.kind === 'rune' ? ctx.time * 6 : 0 });
    this.trail += dt * (this.kind === 'mist' ? 40 : 30);
    while (this.trail > 1) {
      this.trail -= 1;
      ctx.glow.emit({
        x: this.pos.x + (R() - 0.5) * 0.15,
        y: this.pos.y + (R() - 0.5) * 0.15,
        z: this.pos.z + (R() - 0.5) * 0.15,
        vx: -this.vel.x * 0.08,
        vy: 0.2,
        vz: -this.vel.z * 0.08,
        life: 0.35,
        size: 0.1,
        color: this.kind === 'mist' ? (R() < 0.5 ? 0xa8e8ff : 0x5ab8e0) : R() < 0.5 ? 0x70c0ff : 0xd8f4ff,
        alpha: 0.9,
        fade: 1,
      });
    }
    // 플레이어 판정 (구르기 무적이면 통과)
    const dx = p.pos.x - this.pos.x;
    const dz = p.pos.z - this.pos.z;
    if (p.alive && Math.hypot(dx, dz) < this.radius + 0.38 && Math.abs(p.pos.y + 0.9 - this.pos.y) < 1.4) {
      if (p.hurt(this.dmg, this.pos.x - this.vel.x, this.pos.z - this.vel.z, 5)) {
        ctx.onPlayerHurt(this.dmg);
        this.pop(ctx);
      }
    }
  }

  /** 베기에 맞거나 수명이 다해 흩어짐 */
  pop(ctx: Ctx, byPlayer = false): void {
    if (!this.alive) return;
    this.alive = false;
    this.light.on = 0;
    ctx.fx.spawn(FX.ringCold, { x: this.pos.x, y: this.pos.y, z: this.pos.z, size: 0.5, grow: 2.4, life: 0.22, fade: true, glow: 1.4 });
    for (let i = 0; i < (byPlayer ? 14 : 8); i++) {
      const a = R() * Math.PI * 2;
      const s = 1 + R() * 2.5;
      ctx.glow.emit({ x: this.pos.x, y: this.pos.y, z: this.pos.z, vx: Math.cos(a) * s, vy: (R() - 0.3) * 2, vz: Math.sin(a) * s, life: 0.4 + R() * 0.3, size: 0.1, color: this.kind === 'mist' ? 0xc8f0ff : 0x80c8ff, alpha: 1, fade: 1, drag: 3 });
    }
    ctx.sfx.play('orbPop', { vol: byPlayer ? 1 : 0.6 });
  }
}
