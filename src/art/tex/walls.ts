// 벽면·건축 텍스처. 이미지 위쪽 = 월드 위쪽. 16텍셀 = 1유닛.

import { P, type RGBA } from '../palette.ts';
import { Rng, hash2, valueNoise } from '../rng.ts';
import { Tex, quant } from './tex.ts';

function tn(x: number, y: number, w: number, h: number, fx: number, fy: number, seed: number): number {
  return valueNoise((x / w) * fx, (y / h) * fy, seed, fx, fy);
}

/** 흙 절벽: 불규칙한 지층 띠, 세로 균열, 윗부분 뿌리 */
export function texCliff(seed = 101): Tex {
  const t = new Tex(64, 64);
  const s = P.stoneWarm;
  const e = P.earth;
  t.each((x, y) => {
    const warp = tn(x, y, 64, 64, 4, 2, seed) * 10;
    const band = Math.floor((y + warp) / 7);
    const inBand = ((y + warp) % 7) / 7;
    const hb = hash2(band & 7, 1, seed);
    const r = hb > 0.55 ? s : e;
    let tone = hb > 0.8 ? 3 : 2;
    if (inBand < 0.18) tone += 1;
    if (inBand > 0.85) tone -= 1;
    const n = tn(x, y, 64, 64, 8, 8, seed + 4);
    if (n > 0.72) tone += 1;
    if (n < 0.22) tone -= 1;
    return r.colors[Math.max(0, Math.min(r.colors.length - 1, tone))];
  });
  const rng = new Rng(seed);
  for (let c = 0; c < 6; c++) {
    let x = rng.int(0, 63);
    let y = rng.int(0, 63);
    for (let i = 0; i < rng.int(5, 12); i++) {
      t.set(x, y, P.ink.colors[1]);
      t.set(x + 1, y, s.colors[1]);
      y++;
      if (rng.chance(0.3)) x += rng.int(-1, 1);
    }
  }
  return t;
}

/** 돌담: 둥근 돌을 줄지어 쌓음 */
export function texStoneWall(seed = 111): Tex {
  const t = new Tex(64, 64);
  const r = P.stoneWarm;
  t.fill(P.earth.colors[1]);
  const rng = new Rng(seed);
  let y = 0;
  let row = 0;
  while (y < 64) {
    const hgt = rng.int(6, 8);
    let x = row % 2 === 0 ? 0 : -rng.int(3, 6);
    while (x < 64) {
      const w = rng.int(7, 12);
      const tone = rng.int(2, 4);
      for (let j = 0; j < hgt - 1; j++) {
        for (let i = 0; i < w - 1; i++) {
          const cx = (i + 0.5) / (w - 1) - 0.5;
          const cy = (j + 0.5) / (hgt - 1) - 0.5;
          if (cx * cx * 1.1 + cy * cy * 1.3 > 0.27) continue;
          let tt = tone;
          if (cy < -0.25 || cx < -0.36) tt += 1;
          if (cy > 0.28 || cx > 0.38) tt -= 1;
          if (hash2(x + i, y + j, seed) > 0.93) tt -= 1;
          t.set(x + i, y + j, r.colors[Math.max(1, Math.min(5, tt))]);
        }
      }
      x += w;
    }
    y += hgt;
    row++;
  }
  // 이끼 몇 점
  for (let i = 0; i < 40; i++) {
    const x = rng.int(0, 63);
    const yy = rng.int(0, 63);
    if (valueNoise(x / 8, yy / 8, seed, 8, 8) > 0.6) t.set(x, yy, P.moss.colors[rng.int(2, 3)]);
  }
  return t;
}

/** 폐허 벽: 달리기 쌓기의 큰 마름돌, 모서리 깨짐, 위쪽 이끼 */
export function texRuinWall(seed = 121): Tex {
  const t = new Tex(64, 64);
  const r = P.stone;
  t.each((x, y) => {
    const row = Math.floor(y / 8);
    const ox = row % 2 === 0 ? 0 : 8;
    const lx = (((x + ox) % 16) + 16) % 16;
    const ly = y % 8;
    const id = Math.floor((x + ox) / 16) + row * 5;
    if (lx === 0 || ly === 7) return r.colors[0];
    let tone = 2 + (hash2(id, 9, seed) > 0.5 ? 1 : 0);
    if (ly === 0 || lx === 1) tone += 1;
    if (ly === 6 || lx === 15) tone -= 1;
    const n = tn(x, y, 64, 64, 8, 8, seed);
    if (n < 0.25) tone -= 1;
    const moss = tn(x, y, 64, 64, 4, 4, seed + 2) + (1 - y / 64) * 0.25;
    if (moss > 0.78) return quant(P.moss, (moss - 0.78) * 4, 1, 3, x, y, 0.3);
    return r.colors[Math.max(1, Math.min(4, tone))];
  });
  return t;
}

/** 강둑 흙: 흙 + 뿌리 + 자갈 */
export function texSoil(seed = 131): Tex {
  const t = new Tex(64, 64);
  t.each((x, y) => quant(P.earth, tn(x, y, 64, 64, 4, 4, seed) * 0.8 + tn(x, y, 64, 64, 16, 16, seed + 1) * 0.2, 1, 3, x, y, 0.25));
  const rng = new Rng(seed);
  for (let c = 0; c < 8; c++) {
    let x = rng.int(0, 63);
    let y = rng.int(0, 20);
    for (let i = 0; i < rng.int(6, 14); i++) {
      t.set(x, y, P.wood.colors[2]);
      x += rng.int(-1, 1);
      y += 1;
    }
  }
  for (let i = 0; i < 30; i++) {
    const x = rng.int(0, 63);
    const y = rng.int(0, 63);
    t.set(x, y, P.stoneWarm.colors[3]);
    t.set(x + 1, y, P.stoneWarm.colors[2]);
  }
  return t;
}

/** 회벽 (한옥 흙벽) */
export function texPlaster(seed = 141): Tex {
  const t = new Tex(64, 64);
  t.each((x, y) => {
    const n = tn(x, y, 64, 64, 3, 3, seed) * 0.8 + tn(x, y, 64, 64, 8, 8, seed + 1) * 0.2;
    return P.plaster.colors[n > 0.56 ? 4 : 3];
  });
  const rng = new Rng(seed);
  // 드문 흙 알갱이와 가는 금
  for (let i = 0; i < 22; i++) t.set(rng.int(0, 63), rng.int(0, 63), P.plaster.colors[2]);
  for (let c = 0; c < 2; c++) {
    let x = rng.int(0, 63);
    let y = rng.int(0, 63);
    for (let i = 0; i < 6; i++) {
      t.set(x, y, P.plaster.colors[2]);
      x += rng.int(0, 1);
      y += 1;
    }
  }
  return t;
}

/** 세로 판자 */
export function texPlanks(seed = 151, ramp = P.wood): Tex {
  const t = new Tex(64, 64);
  const rng = new Rng(seed);
  let x = 0;
  while (x < 64) {
    const w = rng.int(4, 6);
    const tone = rng.int(2, 3);
    const off = rng.int(0, 63);
    for (let i = 0; i < w; i++) {
      for (let y = 0; y < 64; y++) {
        let c: RGBA = ramp.colors[tone];
        if (i === w - 1) c = ramp.colors[0];
        else if (i === 0) c = ramp.colors[tone + 1];
        else if (valueNoise(i * 0.7, (y + off) / 6, seed + x, 0, 0) > 0.72) c = ramp.colors[tone - 1];
        t.set(x + i, y, c);
      }
    }
    // 옹이
    if (rng.chance(0.5)) {
      const ky = rng.int(0, 60);
      t.set(x + 1, ky, ramp.colors[0]);
      t.set(x + 2, ky, ramp.colors[1]);
      t.set(x + 1, ky + 1, ramp.colors[1]);
    }
    // 못
    const ny = rng.int(2, 10);
    t.set(x + 1, ny, P.stone.colors[4]);
    t.set(x + 1, ny + 32, P.stone.colors[4]);
    x += w;
  }
  return t;
}

/** 짙은 목재 (기둥, 들보) */
export function texBeam(seed = 161): Tex {
  const t = new Tex(32, 32);
  const r = P.woodDark;
  t.each((x, y) => {
    const g = valueNoise(x / 2.5, (y / 32) * 3, seed, 0, 3);
    return r.colors[g > 0.66 ? 4 : g > 0.33 ? 3 : 2];
  });
  return t;
}

/** 기와 지붕: 세로 골(암키와/수키와)과 가로 단 */
export function texRoof(seed = 171): Tex {
  const t = new Tex(64, 64);
  const r = P.roof;
  t.each((x, y) => {
    const col = x % 6;
    const row = y % 8;
    let tone: number;
    if (col === 0) tone = 1;
    else if (col === 1) tone = 4;
    else if (col === 2 || col === 3) tone = 3;
    else tone = 2;
    if (row === 7) tone = 0;
    else if (row === 6) tone -= 1;
    else if (row === 0 && col > 0) tone += 1;
    if (hash2(Math.floor(x / 6), Math.floor(y / 8), seed) > 0.85) tone -= 1;
    return r.colors[Math.max(0, Math.min(5, tone))];
  });
  const rng = new Rng(seed);
  for (let i = 0; i < 14; i++) {
    const x = rng.int(0, 63);
    const y = rng.int(0, 63);
    t.set(x, y, P.moss.colors[2]);
    t.set(x + 1, y, P.moss.colors[3]);
  }
  return t;
}

/** 나무껍질 */
export function texBark(seed = 181, ramp = P.woodDark): Tex {
  const t = new Tex(32, 64);
  t.each((x, y) => {
    const f = valueNoise(x / 3, y / 10, seed, 32 / 3, 6.4);
    const g = valueNoise(x / 1.5, y / 22, seed + 3, 0, 0);
    let tone = f > 0.6 ? 3 : f > 0.3 ? 2 : 1;
    if (g > 0.78) tone = 0;
    if (x % 8 === 3 && f > 0.45) tone += 1;
    return ramp.colors[Math.max(0, Math.min(ramp.colors.length - 1, tone))];
  });
  return t;
}

/** 창호지 창: 격자 창살. 발광 맵으로 같은 텍스처를 쓰면 종이 부분만 빛난다 */
export function texWindow(): Tex {
  const t = new Tex(32, 32);
  const paper = P.amber.colors[5];
  const paperDim = P.amber.colors[4];
  const frame = P.woodDark.colors[1];
  const bar = P.woodDark.colors[2];
  t.each((x, y) => {
    if (x < 2 || y < 2 || x > 29 || y > 29) return frame;
    // 띠살 격자 (세로 3칸 × 가로 4칸) + 가운데 가로살 두 줄
    const lx = x - 2;
    const ly = y - 2;
    if (lx % 7 === 0 || ly % 9 === 0 || ly === 13 || ly === 14) return bar;
    const glow = (x + y) % 11 === 0 ? paperDim : paper;
    return glow;
  });
  return t;
}

export function texDoor(): Tex {
  const t = new Tex(32, 48);
  const w = P.woodDark;
  t.each((x, y) => {
    if (x < 2 || y < 2 || x > 29 || y > 45) return w.colors[1];
    if (x === 15 || x === 16) return w.colors[0];
    // 윗부분 창살, 아랫부분 판문
    if (y < 26) {
      const lx = (x - 2) % 5;
      const ly = (y - 2) % 6;
      if (lx === 0 || ly === 0) return w.colors[2];
      return P.amber.colors[3];
    }
    if (y === 26 || y === 27) return w.colors[1];
    return w.colors[(x + (y >> 2)) % 7 === 0 ? 2 : 3];
  });
  return t;
}

/** 절벽 위 풀 가장자리 (알파) — 윗면이 풀인 절벽 위에 걸친다 */
export function texGrassLip(seed = 191): Tex {
  const t = new Tex(64, 16);
  const g = P.grass;
  const rng = new Rng(seed);
  const depth: number[] = [];
  for (let x = 0; x < 64; x++) depth.push(3 + Math.floor(valueNoise(x / 5, 0, seed, 64 / 5, 0) * 5) + (rng.chance(0.2) ? 2 : 0));
  for (let x = 0; x < 64; x++) {
    for (let y = 0; y < depth[x]; y++) {
      const tone = y === 0 ? 4 : y < 2 ? 3 : y === depth[x] - 1 ? 1 : 2;
      t.set(x, y, g.colors[tone]);
    }
    t.put(x, depth[x], g.outline);
  }
  return t;
}

/** 조각된 돌 (석등·기둥): 결이 고운 돌 */
export function texCarvedStone(seed = 201, ramp = P.stone): Tex {
  const t = new Tex(64, 64);
  t.each((x, y) => {
    const n = tn(x, y, 64, 64, 4, 4, seed) * 0.75 + tn(x, y, 64, 64, 16, 8, seed + 1) * 0.25;
    return ramp.colors[n > 0.62 ? 4 : n > 0.36 ? 3 : 2];
  });
  const rng = new Rng(seed);
  for (let i = 0; i < 30; i++) {
    const x = rng.int(0, 63);
    const y = rng.int(0, 63);
    t.set(x, y, ramp.colors[1]);
    if (rng.chance(0.4)) t.set(x + 1, y, ramp.colors[2]);
  }
  return t;
}

/** 룬이 새겨진 폐허 돌: 색 텍스처와 룬 발광 마스크를 함께 반환 */
export function texRuneStone(seed = 211): { color: Tex; glow: Tex } {
  const color = texRuinWall(seed);
  const glow = new Tex(64, 64);
  glow.fill([0, 0, 0, 255]);
  const rng = new Rng(seed);
  // 블록마다 하나씩 룬
  for (let by = 0; by < 8; by += 2) {
    for (let bx = 0; bx < 4; bx++) {
      if (!rng.chance(0.55)) continue;
      const ox = bx * 16 + (by % 4 === 0 ? 4 : 12) - 4;
      const oy = by * 8 + 1;
      const glyph = rng.int(0, 3);
      const strokes = RUNES[glyph];
      for (const [x0, y0, x1, y1] of strokes) {
        color.line(ox + x0, oy + y0, ox + x1, oy + y1, P.stone.colors[0]);
        glow.line(ox + x0, oy + y0, ox + x1, oy + y1, [255, 255, 255, 255]);
      }
    }
  }
  return { color, glow };
}

export const RUNES: Array<Array<[number, number, number, number]>> = [
  [
    [3, 0, 5, 2],
    [5, 2, 3, 4],
    [3, 4, 1, 2],
    [1, 2, 3, 0],
    [3, 4, 3, 5],
  ],
  [
    [1, 0, 1, 5],
    [5, 0, 5, 5],
    [1, 2, 5, 3],
  ],
  [
    [3, 0, 1, 2],
    [3, 0, 5, 2],
    [3, 0, 3, 5],
    [1, 5, 5, 5],
  ],
  [
    [1, 0, 5, 0],
    [3, 0, 3, 3],
    [1, 3, 5, 3],
    [1, 3, 1, 5],
    [5, 3, 5, 5],
  ],
];
