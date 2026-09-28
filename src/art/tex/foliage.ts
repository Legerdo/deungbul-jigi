// 식생 덩어리(알파) 아틀라스: 32x32 칸, 8열 × 3행. 잎 덩어리를 픽셀 단위 잎 조각으로 쌓아 명암과 외곽선을 준다.

import { P, type Ramp } from '../palette.ts';
import { Rng } from '../rng.ts';
import { Tex, outlineAlpha } from './tex.ts';

export const FOLIAGE_CELL = 32;
export const FOLIAGE_COLS = 8;
export const FOLIAGE_ROWS = 3;

export const FOLIAGE = {
  mapleA: 0,
  mapleB: 1,
  mapleC: 2,
  bushA: 3,
  bushB: 4,
  pineA: 5,
  pineB: 6,
  dead: 7,
  tuftA: 8,
  tuftB: 9,
  flowersA: 10,
  flowersB: 11,
  reeds: 12,
  fern: 13,
  mushroom: 14,
  vine: 15,
  pineDark: 16,
  mossClump: 17,
  lotus: 18,
  pebbleClump: 19,
  crop: 20,
  cropB: 21,
} as const;

function leafBlob(t: Tex, x: number, y: number, c: (typeof P.grass.colors)[number], w: number, h: number): void {
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) t.put(x + i, y + j, c);
}

/** 둥근 잎 덩어리. outline=false면 나무 수관 안쪽에서 덩어리 경계선이 격자처럼 보이지 않게 외곽선 대신 가장자리를 어둡게 */
function roundClump(
  ramp: Ramp,
  seed: number,
  opts: { r?: number; count?: number; lo?: number; hi?: number; flat?: number; outline?: boolean; cy?: number } = {},
): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  const R = opts.r ?? 12.5;
  const count = opts.count ?? 150;
  const lo = opts.lo ?? 1;
  const hi = opts.hi ?? ramp.colors.length - 2;
  const cy0 = opts.cy ?? 16;
  const blobs: Array<{ x: number; y: number; tone: number; w: number; h: number }> = [];
  for (let i = 0; i < count; i++) {
    const a = rng.float() * Math.PI * 2;
    const rr = Math.sqrt(rng.float()) * R;
    const x = 16 + Math.cos(a) * rr;
    const y = cy0 + Math.sin(a) * rr * (opts.flat ?? 0.85);
    const dx = (x - 16) / R;
    const dy = (y - 16) / R;
    // 왼쪽 위 광원 + 가장자리 어둡게
    let l = -dx * 0.45 - dy * 0.75 + (1 - Math.hypot(dx, dy)) * 0.35 + (rng.float() - 0.5) * 0.35;
    l = (l + 0.8) / 1.6;
    const tone = Math.max(lo, Math.min(hi, lo + Math.floor(l * (hi - lo + 1))));
    blobs.push({ x, y, tone, w: rng.chance(0.6) ? 2 : 3, h: 2 });
  }
  blobs.sort((a, b) => a.tone - b.tone);
  for (const b of blobs) {
    leafBlob(t, Math.floor(b.x), Math.floor(b.y), ramp.colors[b.tone], b.w, b.h);
    // 잎 끝 하이라이트
    if (b.tone === hi && rng.chance(0.3)) t.put(Math.floor(b.x), Math.floor(b.y) - 1, ramp.colors[Math.min(ramp.colors.length - 1, hi + 1)]);
  }
  if (opts.outline === false) {
    // 가장자리 픽셀 한 톤 어둡게
    const src = t.clone();
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        if (!src.alpha(x, y)) continue;
        if (!src.alpha(x, y + 1) || !src.alpha(x + 1, y)) t.put(x, y, ramp.colors[Math.max(0, lo - 1)]);
      }
    }
  } else outlineAlpha(t, ramp.outline);
  return t;
}

/** 침엽수 한 단: 아래로 퍼지는 톱니 삼각형 */
function pineTier(ramp: Ramp, seed: number, dark = false): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  const top = 3;
  const bottom = 27;
  // 좌우 가장자리를 가지 끝처럼 들쭉날쭉하게
  const jagL: number[] = [];
  const jagR: number[] = [];
  for (let y = 0; y < 32; y++) {
    const period = (y + seed) % 6;
    jagL.push(period < 2 ? 1.5 : period < 4 ? 0 : -1 + rng.float());
    jagR.push(((y + seed + 3) % 6) < 2 ? 1.5 : ((y + seed + 3) % 6) < 4 ? 0 : -1 + rng.float());
  }
  for (let y = top; y <= bottom; y++) {
    const k = (y - top) / (bottom - top);
    const half = 2 + k * 12.5;
    for (let x = 0; x < 32; x++) {
      const dx = x + 0.5 - 16;
      if (dx < 0 && -dx > half + jagL[y] * k) continue;
      if (dx >= 0 && dx > half + jagR[y] * k) continue;
      // 아래 가장자리 톱니
      const tooth = (x * 7 + seed) % 5;
      if (y > bottom - 3 && tooth > 1 + (bottom - y)) continue;
      let l = -dx / 16 * 0.55 - (k - 0.5) * 0.7 + (rng.float() - 0.5) * 0.25;
      // 잎맥(아래로 흐르는 가지 줄)
      if ((x + y * 2 + seed) % 7 === 0) l -= 0.35;
      l = (l + 0.7) / 1.4;
      const lo = dark ? 0 : 1;
      const hi = dark ? 3 : 4;
      const tone = Math.max(lo, Math.min(hi, lo + Math.floor(l * (hi - lo + 1))));
      t.put(x, y, ramp.colors[tone]);
    }
  }
  outlineAlpha(t, ramp.outline);
  return t;
}

function tuft(ramp: Ramp, seed: number, flowers: boolean): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  const n = 12;
  for (let i = 0; i < n; i++) {
    const bx = 16 + (rng.float() - 0.5) * 11;
    const lean = (bx - 16) * 0.3 + (rng.float() - 0.5) * 2.5;
    const hgt = rng.int(5, 10);
    const tone = rng.int(2, 4);
    for (let s = 0; s < hgt; s++) {
      const k = s / hgt;
      const x = bx + lean * k * k;
      const y = 30 - s;
      t.put(x, y, ramp.colors[s > hgt - 3 ? Math.min(5, tone + 1) : tone]);
    }
  }
  if (flowers) {
    for (let i = 0; i < 4; i++) {
      const x = rng.int(10, 21);
      const y = rng.int(20, 25);
      const c = rng.pick([P.amber.colors[4], P.rose.colors[4], P.linen.colors[5], P.mustard.colors[4]]);
      t.put(x, y, c);
      t.put(x + 1, y, c);
      t.put(x, y - 1, c);
      t.put(x + 1, y + 1, P.grass.colors[1]);
    }
  }
  outlineAlpha(t, ramp.outline);
  return t;
}

function reeds(seed: number): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  for (let i = 0; i < 9; i++) {
    const bx = 8 + rng.float() * 16;
    const lean = (rng.float() - 0.5) * 4;
    const hgt = rng.int(16, 27);
    for (let s = 0; s < hgt; s++) {
      const k = s / hgt;
      t.put(bx + lean * k, 31 - s, P.moss.colors[s < 4 ? 1 : 3]);
    }
    if (rng.chance(0.5)) {
      const tx = bx + lean;
      const ty = 31 - hgt;
      for (let j = 0; j < 4; j++) t.put(tx, ty + j, P.wood.colors[j === 0 ? 4 : 3]);
    }
  }
  outlineAlpha(t, P.moss.outline);
  return t;
}

function fern(seed: number): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  for (let f = 0; f < 6; f++) {
    const a = -Math.PI / 2 + (f - 2.5) * 0.45 + (rng.float() - 0.5) * 0.2;
    const L = rng.int(10, 14);
    for (let s = 0; s < L; s++) {
      const x = 16 + Math.cos(a) * s;
      const y = 29 + Math.sin(a) * s + (s * s) / 40;
      t.put(x, y, P.moss.colors[3]);
      if (s % 2 === 0 && s > 2) {
        t.put(x - 1, y + 1, P.moss.colors[s > L - 4 ? 4 : 2]);
        t.put(x + 1, y + 1, P.moss.colors[2]);
      }
    }
  }
  outlineAlpha(t, P.moss.outline);
  return t;
}

/** 차가운 빛을 내는 버섯 무리 (발광 마스크 동시 작성) */
function mushrooms(seed: number, glow: Tex, ox: number, oy: number): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  for (let i = 0; i < 5; i++) {
    const x = rng.int(8, 22);
    const h = rng.int(3, 7);
    const w = rng.int(2, 3);
    for (let s = 0; s < h; s++) t.put(x, 30 - s, P.bone.colors[2]);
    for (let j = -w; j <= w; j++) {
      const cy = 30 - h - (Math.abs(j) === w ? 0 : 1);
      t.put(x + j, cy, P.cold.colors[j < 0 ? 4 : 3]);
      t.put(x + j, cy + 1, P.cold.colors[2]);
      glow.put(ox + x + j, oy + cy, [255, 255, 255, 255]);
      glow.put(ox + x + j, oy + cy + 1, [200, 200, 200, 255]);
    }
  }
  outlineAlpha(t, P.cold.outline);
  return t;
}

function vine(seed: number): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  for (let v = 0; v < 4; v++) {
    let x = 6 + v * 6 + rng.int(-1, 1);
    const L = rng.int(14, 30);
    for (let y = 0; y < L; y++) {
      t.put(x, y, P.moss.colors[2]);
      if (y % 3 === 0) {
        t.put(x + 1, y, P.moss.colors[3]);
        t.put(x - 1, y + 1, P.moss.colors[4]);
      }
      if (rng.chance(0.2)) x += rng.int(-1, 1);
    }
  }
  outlineAlpha(t, P.moss.outline);
  return t;
}

function lotus(seed: number): Tex {
  const t = new Tex(32, 32);
  const rng = new Rng(seed);
  // 물 위 연잎(납작 타원)
  for (let y = 18; y < 30; y++) {
    for (let x = 4; x < 28; x++) {
      const dx = (x + 0.5 - 16) / 12;
      const dy = (y + 0.5 - 24) / 5;
      if (dx * dx + dy * dy > 1) continue;
      if (Math.abs(x - 16) < 1 && y < 24) continue;
      t.put(x, y, P.moss.colors[dy < -0.3 ? 4 : dy > 0.4 ? 2 : 3]);
    }
  }
  if (rng.chance(1)) {
    for (let j = 0; j < 4; j++) {
      t.put(15 + (j % 2), 20 - j, P.rose.colors[4 - (j >> 1)]);
      t.put(17 - (j % 2), 20 - j, P.rose.colors[3]);
    }
  }
  outlineAlpha(t, P.moss.outline);
  return t;
}

export interface FoliageAtlas {
  color: Tex;
  glow: Tex;
}

export function buildFoliageAtlas(): FoliageAtlas {
  const W = FOLIAGE_CELL * FOLIAGE_COLS;
  const H = FOLIAGE_CELL * FOLIAGE_ROWS;
  const color = new Tex(W, H);
  const glow = new Tex(W, H);
  glow.fill([0, 0, 0, 255]);
  const place = (i: number, t: Tex) => color.blit(t, (i % FOLIAGE_COLS) * 32, Math.floor(i / FOLIAGE_COLS) * 32);
  const at = (i: number): [number, number] => [(i % FOLIAGE_COLS) * 32, Math.floor(i / FOLIAGE_COLS) * 32];
  place(FOLIAGE.mapleA, roundClump(P.leafWarm, 301, { lo: 1, hi: 4, outline: false }));
  place(FOLIAGE.mapleB, roundClump(P.leafWarm, 302, { lo: 2, hi: 4, r: 11.5, outline: false }));
  place(FOLIAGE.mapleC, roundClump(P.leafWarm, 303, { lo: 1, hi: 3, r: 13, outline: false }));
  place(FOLIAGE.bushA, roundClump(P.grass, 304, { lo: 1, hi: 4, r: 11, flat: 0.72, cy: 21.5 }));
  place(FOLIAGE.bushB, roundClump(P.moss, 305, { lo: 1, hi: 4, r: 10, flat: 0.78, cy: 22 }));
  place(FOLIAGE.pineA, pineTier(P.pine, 306));
  place(FOLIAGE.pineB, pineTier(P.pine, 307));
  place(FOLIAGE.dead, roundClump(P.stoneWarm, 308, { lo: 1, hi: 3, r: 11, count: 90 }));
  place(FOLIAGE.tuftA, tuft(P.grass, 309, false));
  place(FOLIAGE.tuftB, tuft(P.moss, 310, false));
  place(FOLIAGE.flowersA, tuft(P.grass, 311, true));
  place(FOLIAGE.flowersB, tuft(P.moss, 312, true));
  place(FOLIAGE.reeds, reeds(313));
  place(FOLIAGE.fern, fern(314));
  const [mx, my] = at(FOLIAGE.mushroom);
  place(FOLIAGE.mushroom, mushrooms(315, glow, mx, my));
  place(FOLIAGE.vine, vine(316));
  place(FOLIAGE.pineDark, pineTier(P.pine, 317, true));
  place(FOLIAGE.mossClump, roundClump(P.moss, 318, { lo: 1, hi: 4, r: 10, flat: 0.6, count: 110, cy: 24 }));
  place(FOLIAGE.lotus, lotus(319));
  place(FOLIAGE.pebbleClump, roundClump(P.stone, 320, { lo: 2, hi: 4, r: 9, flat: 0.55, count: 40, cy: 25 }));
  place(FOLIAGE.crop, roundClump(P.grass, 321, { lo: 2, hi: 5, r: 6.5, flat: 0.7, count: 60, cy: 26 }));
  place(FOLIAGE.cropB, roundClump(P.moss, 322, { lo: 2, hi: 5, r: 5.5, flat: 0.8, count: 50, cy: 26.5 }));
  return { color, glow };
}
