// 지면(윗면) 타일 텍스처: 64x64 = 4x4 유닛, 가장자리 이음. 이미지 위쪽 = 북쪽(화면 위).

import { P, type RGBA } from '../palette.ts';
import { Rng, hash2, valueNoise, voronoi } from '../rng.ts';
import { Tex, bayer, quant } from './tex.ts';

const S = 64;

function tn(x: number, y: number, freq: number, seed: number): number {
  return valueNoise((x / S) * freq, (y / S) * freq, seed, freq, freq);
}

function fbmT(x: number, y: number, freq: number, seed: number, oct = 3): number {
  let s = 0;
  let a = 0.5;
  let n = 0;
  let f = freq;
  for (let i = 0; i < oct; i++) {
    s += a * tn(x, y, f, seed + i * 17);
    n += a;
    a *= 0.5;
    f *= 2;
  }
  return s / n;
}

/** 작은 풀잎 한 가닥: 위로 밝은 끝, 아래 그림자 */
function blade(t: Tex, x: number, y: number, h: number, base: RGBA, tip: RGBA, shadow: RGBA): void {
  for (let i = 0; i < h; i++) t.set(x, y - i, i === h - 1 ? tip : base);
  t.set(x, y + 1, shadow);
}

function pebble(t: Tex, x: number, y: number, w: number, h: number, r: typeof P.stoneWarm, rng: Rng): void {
  const tone = rng.int(2, 3);
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      const corner = (i === 0 || i === w - 1) && (j === 0 || j === h - 1);
      if (corner && w > 2 && h > 2) continue;
      let c = r.colors[tone];
      if (j === 0 || i === 0) c = r.colors[tone + 1];
      if (j === h - 1) c = r.colors[tone - 1];
      t.set(x + i, y + j, c);
    }
  }
  t.set(x + 1, y + h, r.colors[Math.max(0, tone - 2)]);
}

export function texGrass(seed = 11): Tex {
  const t = new Tex(S, S);
  const g = P.grass;
  t.each((x, y) => {
    const n = fbmT(x, y, 4, seed, 2);
    return quant(g, n * 1.1 - 0.05, 2, 4, x, y, 0.04);
  });
  const rng = new Rng(seed);
  // 풀 포기: 3~5가닥이 모인 덩어리와 발치 그림자
  for (let i = 0; i < 48; i++) {
    const cx = rng.int(0, S - 1);
    const cy = rng.int(0, S - 1);
    const light = tn(cx, cy, 4, seed) > 0.45;
    const n = rng.int(3, 5);
    for (let k = 0; k < n; k++) {
      const x = cx + k - (n >> 1);
      blade(t, x, cy - (k % 2), rng.int(2, 3), g.colors[light ? 4 : 3], g.colors[light ? 5 : 4], g.colors[1]);
    }
  }
  for (let i = 0; i < 40; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    t.set(x, y, g.colors[1]);
    t.set(x + 1, y, g.colors[1]);
  }
  // 드문 꽃
  for (let i = 0; i < 9; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    const c = rng.pick([P.amber.colors[4], P.rose.colors[4], P.linen.colors[5], P.mustard.colors[4]]);
    t.set(x, y, c);
    t.set(x, y + 1, g.colors[1]);
  }
  return t;
}

export function texForestFloor(seed = 23): Tex {
  const t = new Tex(S, S);
  const pi = P.pine;
  const m = P.moss;
  t.each((x, y) => {
    const n = fbmT(x, y, 4, seed);
    const k = tn(x, y, 6, seed + 9);
    if (k > 0.66) return quant(m, (k - 0.66) * 3, 1, 3, x, y, 0.06);
    return quant(pi, n, 1, 3, x, y, 0.06);
  });
  const rng = new Rng(seed);
  // 솔잎 (짧은 사선)
  for (let i = 0; i < 90; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    const d = rng.chance(0.5) ? 1 : -1;
    const c = rng.chance(0.5) ? P.earth.colors[3] : P.earth.colors[2];
    t.set(x, y, c);
    t.set(x + d, y + 1, c);
  }
  for (let i = 0; i < 80; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    blade(t, x, y, rng.int(1, 2), m.colors[3], m.colors[4], pi.colors[0]);
  }
  return t;
}

export function texDirt(seed = 31): Tex {
  const t = new Tex(S, S);
  const e = P.earth;
  const s = P.sand;
  t.each((x, y) => {
    const v = fbmT(x, y, 4, seed, 2) * 0.85 + tn(x, y, 16, seed + 3) * 0.15;
    // 밝은 흙(모래 램프)과 짙은 흙이 섞인 길
    if (v < 0.36) return e.colors[3];
    return quant(s, (v - 0.36) / 0.64, 1, 3, x, y, 0.05);
  });
  const rng = new Rng(seed);
  for (let i = 0; i < 26; i++) {
    const w = rng.int(2, 3);
    pebble(t, rng.int(0, S - 1), rng.int(0, S - 1), w, 2, P.stoneWarm, rng);
  }
  for (let i = 0; i < 50; i++) t.set(rng.int(0, S - 1), rng.int(0, S - 1), rng.chance(0.5) ? e.colors[2] : s.colors[4]);
  return t;
}

export function texPaving(seed = 41): Tex {
  const t = new Tex(S, S);
  const r = P.stoneWarm;
  const cells = 5;
  t.each((x, y) => {
    const fx = (x / S) * cells;
    const fy = (y / S) * cells;
    const v = voronoi(fx, fy, cells, seed, 0.8);
    const edge = v.d2 - v.d1;
    if (edge < 0.09) return P.earth.colors[hash2(x, y, seed) > 0.8 ? 2 : 1];
    const base = 3 + (hash2(v.id, 0, seed) > 0.6 ? 1 : 0) - (hash2(v.id, 1, seed) > 0.8 ? 1 : 0);
    // 가장자리 베벨: 셀 중심 기준 위-왼쪽 밝게, 아래-오른쪽 어둡게
    const dx = fx - v.cx;
    const dy = fy - v.cy;
    let tone = base;
    if (edge < 0.2) tone += dx + dy < 0 ? 1 : -1;
    const n = tn(x, y, 16, seed + 7);
    if (n > 0.8) tone -= 1;
    return r.colors[Math.max(1, Math.min(5, tone))];
  });
  const rng = new Rng(seed);
  // 돌 틈 풀
  for (let i = 0; i < 40; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    const fx = (x / S) * cells;
    const fy = (y / S) * cells;
    const v = voronoi(fx, fy, cells, seed, 0.8);
    if (v.d2 - v.d1 < 0.1) blade(t, x, y, 2, P.grass.colors[3], P.grass.colors[4], P.grass.colors[1]);
  }
  return t;
}

export function texRuinTiles(seed = 53): Tex {
  const t = new Tex(S, S);
  const r = P.stone;
  const tile = 16;
  t.each((x, y) => {
    const row = Math.floor(y / tile);
    const ox = row % 2 === 0 ? 0 : 8;
    const lx = (((x + ox) % tile) + tile) % tile;
    const ly = y % tile;
    const id = Math.floor((x + ox) / tile) + row * 7;
    const gap = lx === 0 || ly === 0;
    const mossN = tn(x, y, 6, seed + 3);
    if (gap) return mossN > 0.55 ? P.moss.colors[2] : r.colors[0];
    let tone = 3 + (hash2(id, 3, seed) > 0.65 ? 1 : 0) - (hash2(id, 4, seed) > 0.75 ? 1 : 0);
    if (lx === 1 || ly === 1) tone += 1;
    if (lx === tile - 1 || ly === tile - 1) tone -= 1;
    const n = fbmT(x, y, 8, seed);
    if (n < 0.3) tone -= 1;
    if (mossN > 0.68 && (lx < 3 || ly < 3 || lx > tile - 4 || ly > tile - 4)) return quant(P.moss, (mossN - 0.68) * 3, 2, 4, x, y, 0.08);
    return r.colors[Math.max(1, Math.min(5, tone))];
  });
  // 균열
  const rng = new Rng(seed);
  for (let c = 0; c < 7; c++) {
    let x = rng.int(0, S - 1);
    let y = rng.int(0, S - 1);
    for (let i = 0; i < rng.int(4, 9); i++) {
      t.set(x, y, r.colors[0]);
      t.set(x + 1, y, r.colors[2]);
      x += rng.int(-1, 1);
      y += 1;
    }
  }
  return t;
}

export function texPebbles(seed = 61): Tex {
  const t = new Tex(S, S);
  t.each((x, y) => quant(P.sand, fbmT(x, y, 4, seed), 1, 3, x, y, 0.06));
  const rng = new Rng(seed);
  for (let i = 0; i < 70; i++) {
    const w = rng.int(2, 4);
    const h = rng.int(2, 3);
    pebble(t, rng.int(0, S - 1), rng.int(0, S - 1), w, h, rng.chance(0.5) ? P.stone : P.stoneWarm, rng);
  }
  return t;
}

/** 낙엽이 깔린 마을 흙길 가장자리 등 — 단풍 잎 흩뿌림 */
export function texLeafLitter(seed = 71): Tex {
  const t = texDirt(seed);
  const rng = new Rng(seed + 1);
  for (let i = 0; i < 70; i++) {
    const x = rng.int(0, S - 1);
    const y = rng.int(0, S - 1);
    const c = P.leafWarm.colors[rng.int(2, 5)];
    t.set(x, y, c);
    if (rng.chance(0.6)) t.set(x + 1, y, c);
    t.set(x, y + 1, P.leafWarm.colors[1]);
  }
  return t;
}

export const GROUND_LAYERS = ['grass', 'forest', 'dirt', 'paving', 'ruin', 'pebbles', 'litter'] as const;
export type GroundLayer = (typeof GROUND_LAYERS)[number];

export function buildGroundLayers(): Tex[] {
  return [texGrass(), texForestFloor(), texDirt(), texPaving(), texRuinTiles(), texPebbles(), texLeafLitter()];
}

export { bayer };
