// 소품 키트: 한옥풍 집, 석등, 나무, 돌담, 울타리, 우물, 장독, 다리, 폐허 기둥 등.
// 모두 실제 부피가 있는 3D 도형 + 픽셀 텍스처이며, 충돌체와 광원(발광체) 위치를 함께 등록한다.
import * as THREE from 'three';
import { P } from '../art/palette.ts';
import { FOLIAGE } from '../art/tex/foliage.ts';
import {
  texBark,
  texBeam,
  texCarvedStone,
  texDoor,
  texPlanks,
  texPlaster,
  texRoof,
  texRuinWall,
  texRuneStone,
  texStoneWall,
  texWindow,
} from '../art/tex/walls.ts';
import type { CanopyKind } from '../art/tex/trees.ts';
import type { FoliageInstance } from '../render/foliage.ts';
import { pixelLambert, texFrom } from '../render/pixel.ts';
import { Batch, boxGeo, curvedRoofGeo, cylGeo, gableGeo, quadGeo, trs } from './geom.ts';
import type { Terrain } from './terrain.ts';

export interface Emitter {
  pos: THREE.Vector3;
  color: THREE.Color;
  intensity: number;
  distance: number;
  flicker: number;
  /** 0이면 꺼짐 — 승리 연출 등에서 켠다 */
  on: number;
  target: number;
  tag: string;
}

export class PropKit {
  readonly plaster: THREE.MeshLambertMaterial;
  readonly beam: THREE.MeshLambertMaterial;
  readonly roof: THREE.MeshLambertMaterial;
  readonly planks: THREE.MeshLambertMaterial;
  readonly stone: THREE.MeshLambertMaterial;
  readonly stoneWarm: THREE.MeshLambertMaterial;
  readonly stoneWall: THREE.MeshLambertMaterial;
  readonly ruin: THREE.MeshLambertMaterial;
  readonly rune: THREE.MeshLambertMaterial;
  readonly window: THREE.MeshLambertMaterial;
  readonly lanternGlow: THREE.MeshLambertMaterial;
  readonly coldGlow: THREE.MeshLambertMaterial;
  readonly door: THREE.MeshLambertMaterial;
  readonly bark: THREE.MeshLambertMaterial;
  readonly barkPine: THREE.MeshLambertMaterial;
  readonly jar: THREE.MeshLambertMaterial;
  readonly cloth: THREE.MeshLambertMaterial;

  constructor() {
    const rep = { repeat: true };
    this.plaster = pixelLambert({ map: texFrom(texPlaster(), rep), key: 'plaster' });
    this.beam = pixelLambert({ map: texFrom(texBeam(), rep), key: 'beam' });
    this.roof = pixelLambert({ map: texFrom(texRoof(), rep), key: 'roof', side: THREE.DoubleSide });
    this.planks = pixelLambert({ map: texFrom(texPlanks(), rep), key: 'planks' });
    this.stone = pixelLambert({ map: texFrom(texCarvedStone(201, P.stone), rep), key: 'stone' });
    this.stoneWarm = pixelLambert({ map: texFrom(texCarvedStone(207, P.stoneWarm), rep), key: 'stonewarm' });
    this.stoneWall = pixelLambert({ map: texFrom(texStoneWall(), rep), key: 'stonewall' });
    this.ruin = pixelLambert({ map: texFrom(texRuinWall(), rep), key: 'ruin' });
    const rs = texRuneStone();
    this.rune = pixelLambert({
      map: texFrom(rs.color, rep),
      emissiveMap: texFrom(rs.glow, { ...rep, srgb: false }),
      emissive: new THREE.Color(0.25, 0.6, 1.0),
      emissiveIntensity: 0.25,
      key: 'rune',
    });
    const win = texFrom(texWindow(), rep);
    this.window = pixelLambert({ map: win, emissiveMap: win, emissive: new THREE.Color(1, 0.72, 0.42), emissiveIntensity: 1.25, key: 'window' });
    this.lanternGlow = pixelLambert({ map: win, emissiveMap: win, emissive: new THREE.Color(1, 0.62, 0.3), emissiveIntensity: 1.6, key: 'lglow' });
    this.coldGlow = new THREE.MeshLambertMaterial({ color: 0x1a3a50, emissive: new THREE.Color(0.3, 0.75, 1.0), emissiveIntensity: 0.0 });
    this.door = pixelLambert({ map: texFrom(texDoor(), rep), emissiveMap: texFrom(texDoor(), rep), emissive: new THREE.Color(0.45, 0.28, 0.12), emissiveIntensity: 0.6, key: 'door' });
    this.bark = pixelLambert({ map: texFrom(texBark(), rep), key: 'bark' });
    this.barkPine = pixelLambert({ map: texFrom(texBark(187, P.wood), rep), key: 'barkpine' });
    this.jar = new THREE.MeshLambertMaterial({ color: 0x4a2c22 });
    this.cloth = new THREE.MeshLambertMaterial({ color: 0xc8b8a0 });
  }
}

export class PropBuilder {
  readonly batch = new Batch();
  readonly emitters: Emitter[] = [];
  readonly canopy: FoliageInstance[] = [];
  readonly upright: FoliageInstance[] = [];
  readonly smokeSources: THREE.Vector3[] = [];
  /** 수관 스프라이트 배치 (World가 SpriteActor로 만든다) */
  readonly canopies: Array<{ kind: CanopyKind; variant: number; x: number; y: number; z: number; sway: number }> = [];
  readonly kit: PropKit;
  readonly t: Terrain;
  /** 승리 연출에서 불을 켤 석등 등 */
  readonly lanternChambers: Array<{ pos: THREE.Vector3; emitter: Emitter; mesh?: THREE.Mesh; mat?: THREE.MeshLambertMaterial }> = [];

  constructor(kit: PropKit, terrain: Terrain) {
    this.kit = kit;
    this.t = terrain;
  }

  private add(mat: THREE.Material, geo: THREE.BufferGeometry, m: THREE.Matrix4, cast = true): void {
    this.batch.add(mat, geo, m, cast);
  }

  emitter(x: number, y: number, z: number, color: THREE.ColorRepresentation, intensity: number, distance: number, flicker = 0.1, tag = '', on = 1): Emitter {
    const e: Emitter = { pos: new THREE.Vector3(x, y, z), color: new THREE.Color(color), intensity, distance, flicker, on, target: on, tag };
    this.emitters.push(e);
    return e;
  }

  // ─────────────────────────────── 마을 ───────────────────────────────

  house(x: number, z: number, w: number, d: number, opts: { h?: number; windows?: number; seed?: number; chimney?: boolean } = {}): void {
    const k = this.kit;
    const y = this.t.groundAt(x, z);
    const h = opts.h ?? 2.1;
    // 기단
    this.add(k.stoneWarm, boxGeo(w + 0.7, 0.45, d + 0.7), trs(x, y + 0.225, z));
    const y0 = y + 0.45;
    // 벽체
    this.add(k.plaster, boxGeo(w - 0.04, h, d - 0.04), trs(x, y0 + h / 2, z));
    // 기둥
    const postX = [-w / 2, -w / 6, w / 6, w / 2];
    for (const px of postX) {
      this.add(k.beam, boxGeo(0.24, h + 0.1, 0.24, 2), trs(x + px, y0 + (h + 0.1) / 2, z + d / 2));
      if (px === -w / 2 || px === w / 2) this.add(k.beam, boxGeo(0.24, h + 0.1, 0.24, 2), trs(x + px, y0 + (h + 0.1) / 2, z - d / 2));
    }
    // 창방(윗 들보)과 하인방
    this.add(k.beam, boxGeo(w + 0.3, 0.22, 0.2, 2), trs(x, y0 + h - 0.05, z + d / 2 + 0.02));
    this.add(k.beam, boxGeo(w + 0.3, 0.22, 0.2, 2), trs(x, y0 + h - 0.05, z - d / 2 - 0.02));
    this.add(k.beam, boxGeo(0.2, 0.22, d + 0.3, 2), trs(x - w / 2 - 0.02, y0 + h - 0.05, z));
    this.add(k.beam, boxGeo(0.2, 0.22, d + 0.3, 2), trs(x + w / 2 + 0.02, y0 + h - 0.05, z));
    this.add(k.beam, boxGeo(w, 0.12, 0.16, 2), trs(x, y0 + 0.62, z + d / 2 + 0.03));
    // 창과 문 (앞면)
    const nWin = opts.windows ?? 2;
    const bays = [-w / 3, 0, w / 3];
    bays.forEach((bx, i) => {
      if (i === 1) {
        this.add(k.door, quadGeo(0.86, 1.3), trs(x + bx, y0 + 0.66, z + d / 2 + 0.03), false);
      } else if (nWin > 0) {
        this.add(k.window, quadGeo(0.9, 0.9), trs(x + bx, y0 + 1.28, z + d / 2 + 0.03), false);
        this.emitter(x + bx, y0 + 1.25, z + d / 2 + 0.9, 0xffa050, 5.5, 5.5, 0.08, 'window');
      }
    });
    // 옆 창 하나
    this.add(k.window, quadGeo(0.7, 0.7), trs(x + w / 2 + 0.03, y0 + 1.3, z, Math.PI / 2), false);
    // 지붕
    const rise = 1.25;
    const roofY = y0 + h + 0.08;
    this.add(k.roof, curvedRoofGeo(w, d, rise, 0.8), trs(x, roofY, z));
    this.add(k.roof, boxGeo(w + 1.9, 0.26, 0.34), trs(x, roofY + rise + 0.08, z));
    this.add(k.plaster, gableGeo(d - 0.1, rise * 0.92), trs(x - w / 2 + 0.02, roofY, z, -Math.PI / 2));
    this.add(k.plaster, gableGeo(d - 0.1, rise * 0.92), trs(x + w / 2 - 0.02, roofY, z, Math.PI / 2));
    // 툇마루
    this.add(k.planks, boxGeo(w - 0.4, 0.14, 0.7, 4), trs(x, y0 - 0.05, z + d / 2 + 0.38));
    if (opts.chimney) {
      this.add(k.stoneWarm, boxGeo(0.4, 1.0, 0.4), trs(x + w / 2 + 0.55, y + 0.5, z - d / 2 + 0.3));
      this.smokeSources.push(new THREE.Vector3(x + w / 2 + 0.55, y + 1.1, z - d / 2 + 0.3));
    }
    this.t.addBox(x - w / 2 - 0.4, z - d / 2 - 0.4, x + w / 2 + 0.4, z + d / 2 + 0.75);
  }

  stoneLantern(x: number, z: number, opts: { lit?: boolean; scale?: number; tag?: string; cold?: boolean } = {}): Emitter {
    const k = this.kit;
    const s = opts.scale ?? 1;
    const y = this.t.groundAt(x, z);
    const st = opts.cold ? k.stone : k.stoneWarm;
    this.add(st, cylGeo(0.44 * s, 0.48 * s, 0.2 * s, 8), trs(x, y + 0.1 * s, z));
    this.add(st, cylGeo(0.26 * s, 0.36 * s, 0.22 * s, 8), trs(x, y + 0.31 * s, z));
    this.add(st, cylGeo(0.13 * s, 0.15 * s, 0.8 * s, 8), trs(x, y + 0.82 * s, z));
    this.add(st, cylGeo(0.34 * s, 0.24 * s, 0.16 * s, 8), trs(x, y + 1.3 * s, z));
    // 화사석 (불집): 네 모서리 기둥 + 빛 나는 창
    const cy = y + 1.62 * s;
    for (const [ox, oz] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ]) {
      this.add(st, boxGeo(0.1 * s, 0.46 * s, 0.1 * s, 2), trs(x + ox * 0.2 * s, cy, z + oz * 0.2 * s));
    }
    const lit0 = opts.lit ?? true;
    // 꺼진 석등(쉼터·신전)은 제 몫의 재질을 가져 나중에 따로 불을 켤 수 있다
    const own = !lit0 ? new THREE.MeshLambertMaterial({ color: opts.cold ? 0x1a2a3a : 0x2a2024, emissive: new THREE.Color(opts.cold ? 0x4ab8ff : 0xffa050), emissiveIntensity: 0 }) : null;
    const glowMat = own ?? (opts.cold ? k.coldGlow : k.lanternGlow);
    const glowGeo = boxGeo(0.34 * s, 0.4 * s, 0.34 * s, 1);
    this.add(glowMat, glowGeo, trs(x, cy, z), false);
    // 옥개석 (지붕돌)
    this.add(st, cylGeo(0.05 * s, 0.52 * s, 0.26 * s, 8), trs(x, y + 1.98 * s, z));
    this.add(st, cylGeo(0.08 * s, 0.12 * s, 0.18 * s, 6), trs(x, y + 2.18 * s, z));
    this.t.addCircle(x, z, 0.42 * s);
    const e = this.emitter(x, cy + 0.1, z + 0.35, opts.cold ? 0x60c8ff : 0xffa048, 7 * s, 6.5 * s, 0.14, opts.tag ?? 'lantern', lit0 ? 1 : 0);
    this.lanternChambers.push({ pos: new THREE.Vector3(x, cy, z), emitter: e, mat: own ?? undefined });
    return e;
  }

  stoneWallSeg(x0: number, z0: number, x1: number, z1: number, h = 0.95): void {
    const k = this.kit;
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const len = Math.hypot(x1 - x0, z1 - z0);
    const ang = Math.atan2(-(z1 - z0), x1 - x0);
    const y = this.t.groundAt(cx, cz);
    this.add(k.stoneWall, boxGeo(len, h, 0.5), trs(cx, y + h / 2, cz, ang));
    this.add(k.roof, boxGeo(len + 0.2, 0.16, 0.7), trs(cx, y + h + 0.08, cz, ang));
    this.t.addBox(Math.min(x0, x1) - 0.25, Math.min(z0, z1) - 0.25, Math.max(x0, x1) + 0.25, Math.max(z0, z1) + 0.25);
  }

  fence(x0: number, z0: number, x1: number, z1: number): void {
    const k = this.kit;
    const len = Math.hypot(x1 - x0, z1 - z0);
    const n = Math.max(1, Math.round(len / 1.1));
    const ang = Math.atan2(-(z1 - z0), x1 - x0);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = x0 + (x1 - x0) * t;
      const z = z0 + (z1 - z0) * t;
      const y = this.t.groundAt(x, z);
      this.add(k.beam, boxGeo(0.13, 0.85, 0.13, 2), trs(x, y + 0.42, z));
    }
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const y = this.t.groundAt(cx, cz);
    this.add(k.planks, boxGeo(len, 0.09, 0.06, 4), trs(cx, y + 0.62, cz, ang));
    this.add(k.planks, boxGeo(len, 0.09, 0.06, 4), trs(cx, y + 0.32, cz, ang));
    this.t.addBox(Math.min(x0, x1) - 0.12, Math.min(z0, z1) - 0.12, Math.max(x0, x1) + 0.12, Math.max(z0, z1) + 0.12);
  }

  well(x: number, z: number): void {
    const k = this.kit;
    const y = this.t.groundAt(x, z);
    this.add(k.stoneWarm, cylGeo(0.62, 0.66, 0.72, 10), trs(x, y + 0.36, z));
    this.add(k.beam, cylGeo(0.5, 0.5, 0.05, 10), trs(x, y + 0.7, z), false);
    for (const s of [-1, 1]) this.add(k.beam, boxGeo(0.13, 1.6, 0.13, 2), trs(x + s * 0.72, y + 0.8, z));
    this.add(k.beam, boxGeo(1.6, 0.12, 0.12, 2), trs(x, y + 1.55, z));
    this.add(k.roof, curvedRoofGeo(1.3, 0.7, 0.35, 0.2), trs(x, y + 1.62, z));
    this.add(k.planks, cylGeo(0.14, 0.12, 0.22, 6, 2), trs(x + 0.2, y + 1.15, z));
    this.t.addCircle(x, z, 0.72);
  }

  jars(x: number, z: number, n = 5, seed = 1): void {
    const k = this.kit;
    const y = this.t.groundAt(x, z);
    this.add(k.stoneWarm, boxGeo(1.8, 0.3, 1.1), trs(x, y + 0.15, z));
    let s = seed;
    for (let i = 0; i < n; i++) {
      s = (s * 9301 + 49297) % 233280;
      const r = s / 233280;
      const jx = x - 0.65 + (i % 3) * 0.62 + (i >= 3 ? 0.3 : 0);
      const jz = z + (i >= 3 ? 0.28 : -0.22);
      const hh = 0.45 + r * 0.25;
      this.add(k.jar, cylGeo(0.2, 0.18, hh, 8), trs(jx, y + 0.3 + hh / 2, jz));
      this.add(k.jar, cylGeo(0.13, 0.24, 0.14, 8), trs(jx, y + 0.3 + hh + 0.05, jz));
      this.add(k.jar, cylGeo(0.14, 0.14, 0.05, 8), trs(jx, y + 0.3 + hh + 0.14, jz));
    }
    this.t.addBox(x - 0.95, z - 0.6, x + 0.95, z + 0.6);
  }

  crate(x: number, z: number, s = 0.7, ry = 0): void {
    const y = this.t.groundAt(x, z);
    this.add(this.kit.planks, boxGeo(s, s, s, 4), trs(x, y + s / 2, z, ry));
    this.t.addBox(x - s * 0.6, z - s * 0.6, x + s * 0.6, z + s * 0.6);
  }

  rock(x: number, z: number, s = 0.6, ry = 0, cold = false): void {
    const y = this.t.groundAt(x, z);
    const m = cold ? this.kit.stone : this.kit.stoneWarm;
    this.add(m, boxGeo(s * 1.2, s * 0.7, s, 4), trs(x, y + s * 0.3, z, ry, 0.12, 0.08));
    this.add(m, boxGeo(s * 0.7, s * 0.5, s * 0.6, 4), trs(x + s * 0.35, y + s * 0.62, z - s * 0.1, ry + 0.6, -0.1, 0.15));
    if (s > 0.45) this.t.addCircle(x, z, s * 0.6);
  }

  laundry(x0: number, x1: number, z: number, y: number): void {
    const k = this.kit;
    for (const x of [x0, x1]) {
      const gy = this.t.groundAt(x, z);
      this.add(k.beam, boxGeo(0.1, y - gy + 0.1, 0.1, 2), trs(x, (y + gy) / 2, z));
      this.t.addCircle(x, z, 0.15);
    }
    const n = 4;
    for (let i = 0; i < n; i++) {
      const x = x0 + ((i + 0.6) / (n + 0.2)) * (x1 - x0);
      this.add(k.cloth, quadGeo(0.45, 0.6), trs(x, y - 0.33, z, 0), false);
    }
    this.add(k.beam, boxGeo(Math.abs(x1 - x0), 0.03, 0.03, 2), trs((x0 + x1) / 2, y, z), false);
  }

  // ─────────────────────────────── 나무 ───────────────────────────────

  tree(x: number, z: number, kind: 'maple' | 'pine' | 'dead' | 'zelkova', scale = 1, seed = 1): void {
    const k = this.kit;
    const y = this.t.groundAt(x, z);
    let r = seed * 7919;
    const rnd = () => {
      r = (r * 16807) % 2147483647;
      return r / 2147483647;
    };
    if (kind === 'pine') {
      // 3D 줄기 + 침엽수 수관 스프라이트
      const H = 2.2;
      this.add(k.barkPine, cylGeo(0.14, 0.24, H, 7, 2), trs(x, y + H / 2, z));
      this.canopies.push({ kind: 'pine', variant: seed % 3, x, y: y + 0.95, z, sway: 0.05 });
      this.t.addCircle(x, z, 0.32);
      void scale;
      return;
    }
    if (kind === 'dead') {
      const H = 3.2 * scale;
      this.add(k.bark, cylGeo(0.1 * scale, 0.22 * scale, H, 6, 2), trs(x, y + H / 2, z, 0, 0, 0.08));
      this.add(k.bark, cylGeo(0.05, 0.09, 1.4 * scale, 5, 2), trs(x + 0.45 * scale, y + H * 0.72, z, 0, 0, -0.8));
      this.add(k.bark, cylGeo(0.05, 0.08, 1.1 * scale, 5, 2), trs(x - 0.35 * scale, y + H * 0.6, z, 0, 0, 0.9));
      for (let i = 0; i < 4; i++) {
        this.canopy.push({ x: x + (rnd() - 0.5) * 1.6, y: y + H + (rnd() - 0.3) * 0.8, z: z + (rnd() - 0.5) * 0.8, cell: FOLIAGE.dead, size: 2, tint: [0.9, 0.9, 0.95], sway: 0.05 });
      }
      this.t.addCircle(x, z, 0.28 * scale);
      return;
    }
    // 단풍/느티나무: 굵은 3D 줄기 + 가지 + 수관 스프라이트
    const H = kind === 'zelkova' ? 3.0 : 2.4;
    this.add(k.bark, cylGeo(0.2, 0.36, H, 8, 2), trs(x, y + H / 2, z));
    this.add(k.bark, cylGeo(0.08, 0.14, 1.4, 6, 2), trs(x + 0.5, y + H * 0.82, z, 0, 0, -0.75));
    this.add(k.bark, cylGeo(0.08, 0.13, 1.3, 6, 2), trs(x - 0.45, y + H * 0.78, z + 0.1, 0, 0.2, 0.8));
    this.canopies.push({ kind: kind === 'zelkova' ? 'zelkova' : 'maple', variant: seed % 3, x, y: y + H * 0.62, z: z + 0.05, sway: 0.07 });
    void rnd;
    void scale;
    this.t.addCircle(x, z, 0.4);
  }

  grass(x: number, z: number, cell: number, tint = 1): void {
    const y = this.t.groundAt(x, z);
    this.upright.push({ x, y: y - 0.05, z, cell, size: 2, tint: [tint, tint, tint], normal: [0, 1, 0.5], sway: 0.14 });
  }

  bush(x: number, z: number, cell: number = FOLIAGE.bushA, tint = 1): void {
    const y = this.t.groundAt(x, z);
    this.upright.push({ x, y: y - 0.1, z, cell, size: 2, tint: [tint, tint, tint], normal: [0, 1, 0.7], sway: 0.05 });
  }

  // ─────────────────────────────── 숲·다리 ───────────────────────────────

  /** x0→x1 방향 다리 (강을 가로지름). 상판 높이 deckY, 가운데가 rise만큼 솟음 */
  bridge(x0: number, x1: number, z: number, width: number, deckY: number, rise: number, waterY: number): void {
    const k = this.kit;
    const len = x1 - x0;
    const deckAt = (x: number) => deckY + Math.sin(((x - x0) / len) * Math.PI) * rise;
    const n = Math.round(len / 0.34);
    for (let i = 0; i < n; i++) {
      const x = x0 + (i + 0.5) * (len / n);
      const yy = deckAt(x);
      const tilt = Math.atan2(deckAt(x + 0.05) - deckAt(x - 0.05), 0.1);
      this.add(k.planks, boxGeo(len / n - 0.03, 0.1, width, 4), trs(x, yy - 0.05, z + ((i * 37) % 5) * 0.004, 0, 0, tilt));
    }
    // 들보
    for (const s of [-1, 1]) {
      for (let i = 0; i < 6; i++) {
        const xa = x0 + (i / 6) * len;
        const xb = x0 + ((i + 1) / 6) * len;
        const ya = deckAt(xa) - 0.16;
        const yb = deckAt(xb) - 0.16;
        const tilt = Math.atan2(yb - ya, xb - xa);
        this.add(k.beam, boxGeo(Math.hypot(xb - xa, yb - ya) + 0.02, 0.16, 0.16, 2), trs((xa + xb) / 2, (ya + yb) / 2, z + s * (width / 2 - 0.1), 0, 0, tilt));
      }
    }
    // 교각과 난간
    const postXs = [x0 + 0.1, x0 + len * 0.33, x0 + len * 0.66, x1 - 0.1];
    for (const px of postXs) {
      const top = deckAt(px);
      for (const s of [-1, 1]) {
        const pz = z + s * (width / 2 - 0.05);
        this.add(k.beam, boxGeo(0.18, top - waterY + 1.0, 0.18, 2), trs(px, (top + 0.9 + waterY - 0.1) / 2, pz));
      }
    }
    for (const s of [-1, 1]) {
      const pz = z + s * (width / 2 - 0.05);
      for (let i = 0; i < 8; i++) {
        const xa = x0 + (i / 8) * len;
        const xb = x0 + ((i + 1) / 8) * len;
        const ya = deckAt(xa) + 0.78;
        const yb = deckAt(xb) + 0.78;
        const tilt = Math.atan2(yb - ya, xb - xa);
        this.add(k.planks, boxGeo(Math.hypot(xb - xa, yb - ya) + 0.02, 0.1, 0.1, 4), trs((xa + xb) / 2, (ya + yb) / 2, pz, 0, 0, tilt));
      }
      // 난간 충돌체 (다리 위에서 떨어지지 않도록)
      this.t.addBox(x0 - 0.2, pz - 0.08, x1 + 0.2, pz + 0.08, -5, 10);
    }
    this.t.surfaces.push({ x0: x0 - 0.3, z0: z - width / 2, x1: x1 + 0.3, z1: z + width / 2, height: (x) => deckAt(Math.max(x0, Math.min(x1, x))) });
  }

  // ─────────────────────────────── 폐허 ───────────────────────────────

  pillar(x: number, z: number, h: number, opts: { broken?: boolean; r?: number; rune?: boolean; tilt?: number } = {}): void {
    const k = this.kit;
    const y = this.t.groundAt(x, z);
    const r = opts.r ?? 0.42;
    this.add(k.ruin, boxGeo(r * 2.6, 0.36, r * 2.6), trs(x, y + 0.18, z));
    const shaftMat = opts.rune ? k.rune : k.stone;
    const tilt = opts.tilt ?? 0;
    this.add(shaftMat, cylGeo(r, r * 1.05, h, 10), trs(x, y + 0.36 + h / 2, z, 0, 0, tilt));
    if (!opts.broken) {
      this.add(k.ruin, boxGeo(r * 2.5, 0.3, r * 2.5), trs(x, y + 0.36 + h + 0.15, z));
      this.add(k.ruin, boxGeo(r * 2.9, 0.22, r * 2.9), trs(x, y + 0.36 + h + 0.4, z));
    } else {
      // 부러진 윗단: 기울어진 조각
      this.add(k.stone, cylGeo(r * 0.8, r, 0.35, 10), trs(x + 0.05, y + 0.36 + h + 0.12, z, 0.4, 0.25, 0.2));
    }
    this.t.addCircle(x, z, r + 0.08);
  }

  block(x: number, z: number, w: number, h: number, d: number, ry = 0, mat?: THREE.Material): void {
    const y = this.t.groundAt(x, z);
    this.add(mat ?? this.kit.ruin, boxGeo(w, h, d), trs(x, y + h / 2 - 0.02, z, ry));
    if (h > 0.3) this.t.addBox(x - w / 2, z - d / 2, x + w / 2, z + d / 2);
  }

  /** 누운 기둥 */
  fallenPillar(x: number, z: number, len: number, ry: number, r = 0.4): void {
    const y = this.t.groundAt(x, z);
    this.add(this.kit.stone, cylGeo(r, r, len, 10), trs(x, y + r * 0.85, z, ry, 0, Math.PI / 2));
    const dx = Math.cos(ry) * len * 0.5;
    const dz = -Math.sin(ry) * len * 0.5;
    const steps = 4;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps - 0.5;
      this.t.addCircle(x + dx * t * 2, z + dz * t * 2, r + 0.05);
    }
  }

  build(parent: THREE.Object3D): THREE.Mesh[] {
    return this.batch.build(parent);
  }
}
