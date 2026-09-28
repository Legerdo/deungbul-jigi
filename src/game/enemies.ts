// 일반 적: 이끼 멧돼지(예고 후 일직선 돌진, 벽에 부딪히면 기절)와 물안개 망령(거리 유지, 안개 구슬 사격, 맞으면 순간이동).
import * as THREE from 'three';
import type { Dir } from '../art/sheet.ts';
import { FX, type Telegraph } from '../render/fx.ts';
import { SpriteActor, type SheetAsset } from '../render/sprites.ts';
import { alertMark, type Ctx, dustPuff, type Hit, Projectile, sparks } from './combat.ts';

const R = Math.random;

export abstract class Enemy {
  private static seq = 1;
  readonly id = Enemy.seq++;
  abstract readonly kind: 'boar' | 'wisp' | 'boss';
  readonly actor: SpriteActor;
  readonly pos = new THREE.Vector3();
  readonly vel = new THREE.Vector3();
  readonly home = new THREE.Vector3();
  readonly facing = new THREE.Vector2(0, 1);
  hp: number;
  maxHp: number;
  radius: number;
  /** 스파크·숫자를 띄울 높이 */
  hitHeight: number;
  state = 'idle';
  stateT = 0;
  alive = true;
  removed = false;
  group: number;
  flash = 0;
  protected dir: Dir = 'down';
  protected flip = false;
  displayY = 0;

  constructor(asset: SheetAsset, x: number, z: number, group: number, hp: number, radius: number, hitHeight: number, shadow: [number, number]) {
    this.actor = new SpriteActor(asset, { shadowSize: shadow, emissive: 1.3, depthBias: 0.4 });
    this.pos.set(x, 0, z);
    this.home.set(x, 0, z);
    this.group = group;
    this.hp = hp;
    this.maxHp = hp;
    this.radius = radius;
    this.hitHeight = hitHeight;
  }

  place(y: number): void {
    this.pos.y = y;
    this.home.y = y;
    this.displayY = y;
    // 멀리 있어 아직 갱신되지 않은 적도 제자리·첫 프레임으로 보이게
    this.actor.root.position.set(this.pos.x, y, this.pos.z);
    this.actor.setDir(this.dir, this.flip);
    this.actor.apply();
  }

  setState(s: string): void {
    this.state = s;
    this.stateT = 0;
  }

  protected face(dx: number, dz: number): void {
    const l = Math.hypot(dx, dz);
    if (l < 1e-4) return;
    this.facing.set(dx / l, dz / l);
    const ax = Math.abs(dx);
    const az = Math.abs(dz);
    const bias = 0.15;
    if (this.dir === 'side') this.dir = ax + bias > az ? 'side' : dz < 0 ? 'up' : 'down';
    else this.dir = ax > az + bias ? 'side' : dz < 0 ? 'up' : 'down';
    if (this.dir === 'side' && ax > 0.05) this.flip = dx < 0;
  }

  /** 타격 적용. 실제로 피해가 들어갔으면 true */
  takeHit(h: Hit, ctx: Ctx): boolean {
    if (!this.alive) return false;
    this.hp -= h.dmg;
    this.flash = 1;
    this.actor.u.uFlashColor.value.setRGB(1, 0.97, 0.9);
    if (this.hp <= 0) {
      this.hp = 0;
      this.die(ctx);
    }
    return true;
  }

  protected die(ctx: Ctx): void {
    this.alive = false;
    this.setState('dead');
    this.actor.play('death', true);
    ctx.sfx.play('enemyDie');
    if (R() < 0.55) ctx.dropEmber(this.pos.x, this.pos.y + 0.6, this.pos.z);
  }

  abstract update(dt: number, ctx: Ctx): void;

  /** 공통 이동 + 표시 갱신 */
  protected move(dt: number, ctx: Ctx, step = 0.45): boolean {
    const hit = ctx.terrain.move(this.pos, this.vel.x * dt, this.vel.z * dt, this.radius, step);
    this.displayY += (this.pos.y - this.displayY) * Math.min(1, dt * 18);
    return hit;
  }

  protected present(dt: number): void {
    this.flash = Math.max(0, this.flash - dt * (this.kind === 'boss' ? 9 : 6));
    this.actor.u.uFlash.value = this.flash;
    this.actor.setDir(this.dir, this.flip);
    this.actor.update(dt * 1000);
    this.actor.root.position.set(this.pos.x, this.displayY, this.pos.z);
  }

  /** 사망 후 흩어짐 (디더 소멸) */
  protected fadeOut(dt: number, after: number, dur: number): void {
    if (this.stateT > after) this.actor.u.uDissolve.value = Math.min(1, (this.stateT - after) / dur);
    if (this.stateT > after + dur) this.removed = true;
    void dt;
  }

  resetTo(): void {
    this.pos.copy(this.home);
    this.displayY = this.home.y;
    this.vel.set(0, 0, 0);
    this.hp = this.maxHp;
    this.alive = true;
    this.removed = false;
    this.setState('idle');
    this.actor.play('idle', true);
    this.actor.u.uDissolve.value = 0;
    this.flash = 0;
  }

  distTo(x: number, z: number): number {
    return Math.hypot(x - this.pos.x, z - this.pos.z);
  }
}

// ─────────────────────────────── 이끼 멧돼지 ───────────────────────────────

const BOAR = { hp: 5, aggro: 7.5, leash: 15, windup: 0.72, chargeSpeed: 10.5, chargeTime: 1.05, overshoot: 2.6, stun: 1.5, recover: 1.0, skid: 0.45 };

export class Boar extends Enemy {
  readonly kind = 'boar' as const;
  private chargeDir = new THREE.Vector2();
  private tele: Telegraph | null = null;
  private wanderT = 1 + R() * 2;
  private wanderTo = new THREE.Vector2();
  private dustT = 0;
  private hitPlayer = false;
  private starT = 0;
  private chargeFor = BOAR.chargeTime;

  constructor(asset: SheetAsset, x: number, z: number, group: number) {
    super(asset, x, z, group, BOAR.hp, 0.62, 0.7, [1.5, 0.6]);
    this.actor.play('idle');
    this.wanderTo.set(x, z);
  }

  takeHit(h: Hit, ctx: Ctx): boolean {
    const armored = (this.state === 'charge' || this.state === 'windup') && !h.heavy;
    const stunned = this.state === 'stun';
    const ok = super.takeHit({ ...h, dmg: stunned ? h.dmg + 1 : h.dmg }, ctx);
    if (!ok || !this.alive) return ok;
    if (!armored) {
      this.cancelTele();
      this.vel.set(h.dirX * h.knock * 0.9, 0, h.dirZ * h.knock * 0.9);
      this.setState('hurt');
      this.actor.play('hurt', true);
    }
    return ok;
  }

  private cancelTele(): void {
    if (this.tele) {
      this.tele.done = true;
      this.tele = null;
    }
  }

  protected die(ctx: Ctx): void {
    this.cancelTele();
    super.die(ctx);
  }

  update(dt: number, ctx: Ctx): void {
    this.stateT += dt;
    const p = ctx.player;
    const dx = p.pos.x - this.pos.x;
    const dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const canSee = p.alive && p.targetable && Math.abs(p.pos.y - this.pos.y) < 1.6;
    const k = 1 - Math.exp(-10 * dt);
    switch (this.state) {
      case 'idle': {
        this.wanderT -= dt;
        if (this.wanderT <= 0) {
          this.wanderT = 2 + R() * 2.5;
          const a = R() * Math.PI * 2;
          this.wanderTo.set(this.home.x + Math.cos(a) * 2.2, this.home.z + Math.sin(a) * 1.6);
        }
        const wx = this.wanderTo.x - this.pos.x;
        const wz = this.wanderTo.y - this.pos.z;
        const wl = Math.hypot(wx, wz);
        const sp = wl > 0.3 ? 1.3 : 0;
        this.vel.x += ((wl > 0.3 ? wx / wl : 0) * sp - this.vel.x) * k;
        this.vel.z += ((wl > 0.3 ? wz / wl : 0) * sp - this.vel.z) * k;
        if (sp > 0) this.face(wx, wz);
        this.actor.play(sp > 0 ? 'walk' : 'idle');
        if (canSee && dist < BOAR.aggro) {
          this.setState('alert');
          alertMark(ctx, this.pos.x, this.pos.y + 1.7, this.pos.z);
          ctx.sfx.play('boarAlert');
        }
        break;
      }
      case 'alert': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        this.face(dx, dz);
        this.actor.play('idle');
        if (this.stateT > 0.4) this.beginWindup(ctx);
        break;
      }
      case 'windup': {
        this.vel.multiplyScalar(Math.exp(-12 * dt));
        // 처음 60%는 플레이어를 따라 방향을 튼다
        if (this.stateT < BOAR.windup * 0.6) {
          this.face(dx, dz);
          this.chargeDir.copy(this.facing);
          if (this.tele) this.tele.mesh.rotation.y = Math.atan2(this.chargeDir.x, this.chargeDir.y);
        }
        if (this.tele) this.tele.mesh.position.set(this.pos.x, this.pos.y + 0.04, this.pos.z);
        this.dustT -= dt;
        if (this.dustT <= 0) {
          this.dustT = 0.16;
          dustPuff(ctx, this.pos.x - this.chargeDir.x * 0.4, this.pos.y, this.pos.z - this.chargeDir.y * 0.4, 1, 0.3, 0.6);
        }
        if (this.stateT >= BOAR.windup) {
          this.tele = null;
          this.hitPlayer = false;
          // 목표 지점을 조금 지나쳐 멈춘다 (지나친 뒤 드러나는 옆구리가 반격 기회)
          const along = Math.max(1, dx * this.chargeDir.x + dz * this.chargeDir.y);
          this.chargeFor = Math.min(BOAR.chargeTime, (along + BOAR.overshoot) / BOAR.chargeSpeed);
          this.setState('charge');
          this.actor.play('charge', true);
          ctx.sfx.play('boarCharge');
        }
        break;
      }
      case 'charge': {
        this.vel.x = this.chargeDir.x * BOAR.chargeSpeed;
        this.vel.z = this.chargeDir.y * BOAR.chargeSpeed;
        this.dustT -= dt;
        if (this.dustT <= 0) {
          this.dustT = 0.06;
          dustPuff(ctx, this.pos.x, this.pos.y, this.pos.z, 1, 0.4, 0.7);
        }
        if (!this.hitPlayer && p.alive && dist < this.radius + 0.55 && Math.abs(p.pos.y - this.pos.y) < 1) {
          if (p.hurt(2, this.pos.x - this.chargeDir.x, this.pos.z - this.chargeDir.y, 10)) {
            this.hitPlayer = true;
            ctx.onPlayerHurt(2);
            ctx.rig.shake(0.35, this.chargeDir.x, 0.3);
          }
        }
        break;
      }
      case 'skid': {
        this.vel.multiplyScalar(Math.exp(-7 * dt));
        this.actor.play('walk');
        if (this.stateT > BOAR.skid) this.setState('recover');
        break;
      }
      case 'stun': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        this.actor.play('stun');
        this.starT -= dt;
        if (this.starT <= 0) {
          this.starT = 0.35;
          const a = ctx.time * 4;
          ctx.fx.spawn(FX.star, { x: this.pos.x + Math.cos(a) * 0.4, y: this.pos.y + 1.45, z: this.pos.z + Math.sin(a) * 0.2, size: 0.3, life: 0.5, vy: 0.3, fade: true, glow: 1.3 });
        }
        if (this.stateT > BOAR.stun) this.setState('recover');
        break;
      }
      case 'hurt': {
        this.vel.multiplyScalar(Math.exp(-8 * dt));
        if (this.stateT > 0.32) this.setState('recover');
        break;
      }
      case 'recover': {
        this.vel.multiplyScalar(Math.exp(-10 * dt));
        this.actor.play('idle');
        if (canSee) this.face(dx, dz);
        if (this.stateT > BOAR.recover) {
          if (canSee && dist < BOAR.leash * 0.75) this.beginWindup(ctx);
          else this.setState('idle');
        }
        break;
      }
      case 'dead': {
        this.vel.multiplyScalar(Math.exp(-6 * dt));
        this.fadeOut(dt, 1.2, 0.6);
        break;
      }
    }
    // 집에서 너무 멀어지면 돌아간다
    if (this.state === 'idle' && this.distTo(this.home.x, this.home.z) > BOAR.leash) this.wanderTo.set(this.home.x, this.home.z);

    const before = this.pos.clone();
    const wall = this.move(dt, ctx);
    if (this.state === 'charge') {
      const moved = Math.hypot(this.pos.x - before.x, this.pos.z - before.z);
      if (wall && moved < BOAR.chargeSpeed * dt * 0.5) {
        // 벽 충돌 → 기절
        this.setState('stun');
        this.vel.set(-this.chargeDir.x * 3, 0, -this.chargeDir.y * 3);
        ctx.rig.shake(0.3, this.chargeDir.x, 0.2);
        ctx.sfx.play('wall');
        dustPuff(ctx, this.pos.x + this.chargeDir.x * 0.6, this.pos.y, this.pos.z + this.chargeDir.y * 0.6, 6, 0.8, 1.1);
        sparks(ctx, this.pos.x + this.chargeDir.x * 0.6, this.pos.y + 0.6, this.pos.z + this.chargeDir.y * 0.6, -this.chargeDir.x, -this.chargeDir.y, 8, [0xd8c8b0, 0xa89880]);
        this.starT = 0;
      } else if (this.stateT > this.chargeFor) {
        this.setState('skid');
      }
    }
    this.present(dt);
  }

  private beginWindup(ctx: Ctx): void {
    this.setState('windup');
    this.actor.play('windup', true);
    this.chargeDir.copy(this.facing);
    this.cancelTele();
    this.tele = ctx.fx.telegraph({
      shape: 'line',
      x: this.pos.x,
      y: this.pos.y,
      z: this.pos.z,
      len: BOAR.chargeSpeed * BOAR.chargeTime * 0.82,
      width: 1.3,
      angle: Math.atan2(this.chargeDir.x, this.chargeDir.y),
      dur: BOAR.windup,
      hold: 0.1,
      color: 0xff6a3a,
    });
  }

  resetTo(): void {
    this.cancelTele();
    super.resetTo();
  }
}

// ─────────────────────────────── 물안개 망령 ───────────────────────────────

const WISP = { hp: 3, aggro: 9.5, prefer: 5.4, speed: 2.6, castTime: 0.62, release: 0.33 };

export class Wisp extends Enemy {
  readonly kind = 'wisp' as const;
  private cd = 1.2 + R();
  private strafe = R() < 0.5 ? 1 : -1;
  private strafeT = 2;
  private hitsSinceBlink = 0;
  private fired = false;
  private bob = R() * 6;
  private blinkTo = new THREE.Vector3();
  readonly light = { pos: new THREE.Vector3(), color: new THREE.Color(0x7ad0ff), intensity: 1.6, distance: 3.6, flicker: 0.25, on: 1, target: 1, tag: 'wisp' };

  constructor(asset: SheetAsset, x: number, z: number, group: number) {
    super(asset, x, z, group, WISP.hp, 0.5, 1.7, [0.9, 0.45]);
    this.actor.play('float');
    this.actor.shadowBaseOpacity = 0.35;
  }

  takeHit(h: Hit, ctx: Ctx): boolean {
    if (this.state === 'blink') return false;
    const ok = super.takeHit(h, ctx);
    if (!ok || !this.alive) return ok;
    this.vel.set(h.dirX * h.knock * 0.7, 0, h.dirZ * h.knock * 0.7);
    this.hitsSinceBlink++;
    this.setState('hurt');
    this.actor.play('hurt', true);
    return ok;
  }

  protected die(ctx: Ctx): void {
    super.die(ctx);
    for (let i = 0; i < 26; i++) {
      const a = R() * Math.PI * 2;
      ctx.glow.emit({ x: this.pos.x, y: this.pos.y + 1.2 + R() * 0.8, z: this.pos.z, vx: Math.cos(a) * 1.5, vy: 0.5 + R(), vz: Math.sin(a) * 0.8, life: 0.9 + R() * 0.6, size: 0.12, color: R() < 0.5 ? 0xc8e8f4 : 0x7ab8d8, alpha: 0.8, fade: 1, drag: 2 });
    }
  }

  update(dt: number, ctx: Ctx): void {
    this.stateT += dt;
    this.bob += dt;
    const p = ctx.player;
    const dx = p.pos.x - this.pos.x;
    const dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const canSee = p.alive && p.targetable && Math.abs(p.pos.y - this.pos.y) < 2.2;
    const k = 1 - Math.exp(-4 * dt);
    this.light.on = this.alive ? 1 : Math.max(0, 1 - this.stateT);
    switch (this.state) {
      case 'idle': {
        this.vel.multiplyScalar(Math.exp(-3 * dt));
        this.actor.play('float');
        if (canSee && dist < WISP.aggro) {
          this.setState('hunt');
          alertMark(ctx, this.pos.x, this.pos.y + 2.9, this.pos.z);
        }
        break;
      }
      case 'hunt': {
        this.actor.play('float');
        this.face(dx, dz);
        this.strafeT -= dt;
        if (this.strafeT <= 0) {
          this.strafeT = 1.6 + R() * 1.6;
          this.strafe *= -1;
        }
        const nx = dist > 1e-3 ? dx / dist : 0;
        const nz = dist > 1e-3 ? dz / dist : 0;
        const radial = THREE.MathUtils.clamp((dist - WISP.prefer) * 0.8, -1, 1);
        const tx = (nx * radial + -nz * this.strafe * 0.6) * WISP.speed;
        const tz = (nz * radial + nx * this.strafe * 0.6) * WISP.speed;
        this.vel.x += (tx - this.vel.x) * k;
        this.vel.z += (tz - this.vel.z) * k;
        this.cd -= dt;
        if (this.cd <= 0 && canSee && dist < WISP.aggro + 1) {
          this.setState('cast');
          this.actor.play('cast', true);
          this.fired = false;
          ctx.sfx.play('wispCast');
        }
        if (!canSee || dist > WISP.aggro * 1.8) this.setState('idle');
        break;
      }
      case 'cast': {
        this.vel.multiplyScalar(Math.exp(-6 * dt));
        this.face(dx, dz);
        // 가슴 불씨로 안개가 모인다
        if (!this.fired) {
          const a = R() * Math.PI * 2;
          const r = 1.1;
          const cx = this.pos.x + this.facing.x * 0.3;
          const cz = this.pos.z + this.facing.y * 0.3;
          ctx.glow.emit({ x: cx + Math.cos(a) * r, y: this.pos.y + 1.6 + Math.sin(a) * r * 0.6, z: cz + 0.2, vx: -Math.cos(a) * r * 2.4, vy: -Math.sin(a) * r * 1.4, vz: 0, life: 0.38, size: 0.09, color: 0xb8ecff, alpha: 0.9, fade: 1 });
        }
        if (!this.fired && this.stateT >= WISP.release) {
          this.fired = true;
          // 약간 앞을 내다보고 쏜다
          const lead = 0.25;
          const tx = p.pos.x + p.vel.x * lead - this.pos.x;
          const tz = p.pos.z + p.vel.z * lead - this.pos.z;
          const l = Math.hypot(tx, tz) || 1;
          const sp = 6.4;
          const pr = new Projectile('mist', this.pos.x + (tx / l) * 0.5, this.pos.y + 1.45, this.pos.z + (tz / l) * 0.5, (tx / l) * sp, (tz / l) * sp, { homing: 0.9, homingT: 0.9 });
          ctx.projectiles.push(pr);
          ctx.lights.push(pr.light);
          ctx.sfx.play('wispShot');
        }
        if (this.stateT >= WISP.castTime) {
          this.cd = 1.8 + R() * 0.9;
          this.setState('hunt');
        }
        break;
      }
      case 'hurt': {
        this.vel.multiplyScalar(Math.exp(-6 * dt));
        if (this.stateT > 0.3) {
          if (this.hitsSinceBlink >= 2) this.beginBlink(ctx);
          else this.setState('hunt');
        }
        break;
      }
      case 'blink': {
        this.vel.set(0, 0, 0);
        const T = 0.28;
        if (this.stateT < T) this.actor.u.uDissolve.value = this.stateT / T;
        else if (this.stateT < T * 2) {
          if (this.blinkTo.lengthSq() > 0) {
            this.pos.copy(this.blinkTo);
            this.displayY = this.pos.y;
            this.blinkTo.set(0, 0, 0);
            dustPuff(ctx, this.pos.x, this.pos.y + 0.8, this.pos.z, 3, 0.8, 1.2);
          }
          this.actor.u.uDissolve.value = 1 - (this.stateT - T) / T;
        } else {
          this.actor.u.uDissolve.value = 0;
          this.hitsSinceBlink = 0;
          this.cd = Math.min(this.cd, 0.6);
          this.setState('hunt');
        }
        break;
      }
      case 'dead': {
        this.vel.multiplyScalar(Math.exp(-4 * dt));
        this.fadeOut(dt, 0.7, 0.5);
        break;
      }
    }
    this.move(dt, ctx, 0.9);
    // 둥실 떠 있는 표시 높이
    this.actor.hover = Math.sin(this.bob * 2.1) * 0.08;
    this.light.pos.set(this.pos.x, this.displayY + 1.5, this.pos.z + 0.2);
    this.present(dt);
  }

  private beginBlink(ctx: Ctx): void {
    const p = ctx.player;
    for (let i = 0; i < 12; i++) {
      const a = R() * Math.PI * 2;
      const r = 3.6 + R() * 1.8;
      const x = p.pos.x + Math.cos(a) * r;
      const z = p.pos.z + Math.sin(a) * r;
      if (!ctx.terrain.walkable(x, z)) continue;
      const y = ctx.terrain.heightAt(x, z);
      if (Math.abs(y - this.pos.y) > 1.2) continue;
      if (!ctx.terrain.canStand(x, z, y, this.radius, 0.5)) continue;
      this.blinkTo.set(x, y, z);
      break;
    }
    if (this.blinkTo.lengthSq() === 0) {
      this.hitsSinceBlink = 0;
      this.setState('hunt');
      return;
    }
    this.setState('blink');
    ctx.sfx.play('wispCast', { vol: 0.6 });
  }

  resetTo(): void {
    super.resetTo();
    this.actor.play('float', true);
    this.hitsSinceBlink = 0;
    this.cd = 1.2 + R();
  }
}
