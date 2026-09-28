// 원경: 산 능선 레이어와 노을 구름 (알파). 셰이더에서 구역 하늘색으로 물들인다.

import { P, type RGBA } from '../palette.ts';
import { Rng, valueNoise } from '../rng.ts';
import { Tex, bayer } from './tex.ts';

function ridge(x: number, w: number, seed: number, freqs: number[], amps: number[]): number {
  let h = 0;
  for (let i = 0; i < freqs.length; i++) h += valueNoise((x / w) * freqs[i], 0.5 + i * 3.1, seed + i * 11, freqs[i], 0) * amps[i];
  return h;
}

/**
 * 산 레이어. near가 클수록 진하고 디테일이 많다.
 * 햇빛은 왼쪽(서쪽)에서 비춰 왼쪽 비탈 능선에 노을빛 테두리를 준다.
 */
export function texMountains(layer: 0 | 1 | 2, seed = 401): Tex {
  const W = 512;
  const H = 128;
  const t = new Tex(W, H);
  const cfg = [
    { base: 34, freqs: [3, 7, 17], amps: [40, 18, 6], ramp: P.dusk, tones: [2, 3, 4], rim: P.rose.colors[4] },
    { base: 52, freqs: [4, 11, 29], amps: [34, 14, 5], ramp: P.dusk, tones: [1, 2, 3], rim: P.rose.colors[3] },
    { base: 70, freqs: [5, 13, 37], amps: [30, 12, 6], ramp: P.ink, tones: [1, 2, 2], rim: P.plum.colors[3] },
  ][layer];
  const heights: number[] = [];
  for (let x = 0; x < W; x++) heights.push(cfg.base + ridge(x, W, seed + layer * 97, cfg.freqs, cfg.amps));
  for (let x = 0; x < W; x++) {
    const top = H - heights[x];
    const slope = heights[(x + 1) % W] - heights[(x - 1 + W) % W];
    for (let y = Math.max(0, Math.floor(top)); y < H; y++) {
      const depth = y - top;
      let c: RGBA;
      if (depth < 1.5 && slope > 0.3) c = cfg.rim;
      else if (depth < 3 && slope > 0.9) c = cfg.ramp.colors[cfg.tones[2]];
      else {
        // 아래로 갈수록 대기 원근으로 옅게 (디더)
        const k = depth / (H - top + 1);
        const n = valueNoise((x / W) * 40, (y / H) * 10, seed + 5 + layer, 40, 0);
        const v = 0.55 - k * 0.5 + (n - 0.5) * 0.4 + (slope > 0 ? 0.12 : -0.08);
        c = cfg.ramp.colors[v + (bayer(x, y) - 0.5) * 0.2 > 0.45 ? cfg.tones[1] : cfg.tones[0]];
      }
      t.set(x, y, c);
    }
  }
  return t;
}

/** 길게 누운 노을 구름 (아랫면이 햇빛을 받는다) */
export function texClouds(seed = 431): Tex {
  const W = 256;
  const H = 64;
  const t = new Tex(W, H);
  const rng = new Rng(seed);
  for (let i = 0; i < 9; i++) {
    const cx = rng.float() * W;
    const cy = 10 + rng.float() * 42;
    const len = 40 + rng.float() * 70;
    const thick = 3 + rng.float() * 5;
    for (let y = Math.floor(cy - thick - 3); y <= cy + thick + 2; y++) {
      for (let dx = -len / 2 - 4; dx <= len / 2 + 4; dx++) {
        const x = cx + dx;
        const k = dx / (len / 2);
        const prof = Math.sqrt(Math.max(0, 1 - k * k)) * thick;
        const n = valueNoise(x / 9, y / 4, seed + i, W / 9, 0) * 3;
        const top = cy - prof * 0.8 - n;
        const bottom = cy + prof * 0.35 + n * 0.3;
        if (y < top || y > bottom) continue;
        const rel = (y - top) / Math.max(1, bottom - top);
        let c: RGBA;
        if (rel > 0.72) c = P.amber.colors[4];
        else if (rel > 0.5) c = P.rose.colors[4];
        else if (rel > 0.25) c = P.rose.colors[3];
        else c = P.dusk.colors[3];
        t.set(x, y, c);
      }
    }
  }
  return t;
}
