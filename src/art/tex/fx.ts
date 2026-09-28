// 전투·환경 효과용 픽셀 텍스처

import { P, type RGBA } from '../palette.ts';
import { Rng } from '../rng.ts';
import { Tex, bayer } from './tex.ts';

/** 베기 궤적 3프레임 (64x32 각각, 가로로 이어 붙임) */
export function texSlash(): Tex {
  const t = new Tex(64 * 3, 32);
  for (let f = 0; f < 3; f++) {
    const ox = f * 64;
    const cx = 32;
    const cy = 34;
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 64; x++) {
        const dx = x + 0.5 - cx;
        const dy = y + 0.5 - cy;
        const r = Math.hypot(dx, dy);
        const a = Math.atan2(-dy, dx); // 0..π 위쪽 반원
        if (a < 0.12 || a > Math.PI - 0.12) continue;
        // 오른쪽 끝(앞쪽)이 두껍고 왼쪽 꼬리가 얇은 초승달
        const u = 1 - a / Math.PI; // 0(왼쪽) → 1(오른쪽)
        const thick = 2 + u * 7 - f * 1.5;
        const rOut = 29 - f * 0.5;
        const rIn = rOut - thick;
        if (r > rOut || r < rIn) continue;
        const edge = (r - rIn) / Math.max(0.01, rOut - rIn);
        let c: RGBA = edge > 0.62 ? P.steel.colors[5] : edge > 0.3 ? P.cold.colors[4] : P.cold.colors[3];
        if (u < 0.25) c = P.cold.colors[3];
        // 뒤 프레임일수록 디더로 사라짐
        const fade = f === 0 ? 0 : f === 1 ? 0.35 + (1 - u) * 0.3 : 0.7 + (1 - u) * 0.25;
        if (bayer(x, y) < fade) continue;
        t.set(ox + x, y, c);
      }
    }
  }
  return t;
}

/** 충격파 고리 (64x64) */
export function texRing(color: 'danger' | 'cold' | 'ember' = 'danger'): Tex {
  const t = new Tex(64, 64);
  const ramp = color === 'danger' ? P.danger : color === 'cold' ? P.cold : P.ember;
  const rng = new Rng(9);
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const r = Math.hypot(x + 0.5 - 32, y + 0.5 - 32);
      if (r > 31 || r < 26) continue;
      const k = (r - 26) / 5;
      const c = k > 0.6 ? ramp.colors[4] : k > 0.3 ? ramp.colors[3] : ramp.colors[2];
      if (rng.chance(0.06)) continue;
      t.set(x, y, c);
    }
  }
  return t;
}

/** 원형 빛 방울 (16x16) — 반딧불, 불씨, 혼령 구체 */
export function texOrb(ramp: 'cold' | 'ember' | 'rune'): Tex {
  const t = new Tex(16, 16);
  const r = ramp === 'cold' ? P.cold : ramp === 'ember' ? P.ember : P.rune;
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x + 0.5 - 8, y + 0.5 - 8);
      if (d > 7.2) continue;
      const c = d < 2.5 ? r.colors[4] : d < 4.5 ? r.colors[3] : d < 6 ? r.colors[2] : r.colors[1];
      if (d > 6 && bayer(x, y) > 0.5) continue;
      t.set(x, y, c);
    }
  }
  return t;
}

/** 타격 섬광: 4갈래 별 + 방사선, 3프레임 (32x32 × 3) */
export function texImpact(): Tex {
  const t = new Tex(96, 32);
  for (let f = 0; f < 3; f++) {
    const ox = f * 32;
    const L = [13, 15, 11][f];
    const w = [2, 1, 1][f];
    for (let i = -L; i <= L; i++) {
      const k = 1 - Math.abs(i) / L;
      const c = k > 0.6 ? P.steel.colors[5] : k > 0.3 ? P.amber.colors[5] : P.amber.colors[4];
      for (let j = -w; j <= w; j++) {
        if (Math.abs(j) === w && k < 0.5) continue;
        if (f === 2 && bayer(i + 16, j + 16) > k) continue;
        t.set(ox + 16 + i, 16 + j, c);
        t.set(ox + 16 + j, 16 + i, c);
      }
    }
    // 대각선 짧은 광선
    const D = [7, 9, 6][f];
    for (let i = 2; i <= D; i++) {
      const c = i < D - 2 ? P.amber.colors[5] : P.amber.colors[4];
      if (f === 2 && i % 2 === 0) continue;
      t.set(ox + 16 + i, 16 + i, c);
      t.set(ox + 16 - i, 16 + i, c);
      t.set(ox + 16 + i, 16 - i, c);
      t.set(ox + 16 - i, 16 - i, c);
    }
    if (f === 0) for (let y = -3; y <= 3; y++) for (let x = -3; x <= 3; x++) if (x * x + y * y <= 9) t.set(ox + 16 + x, 16 + y, P.steel.colors[5]);
  }
  return t;
}

/** 룬 탄환 (16x16 × 2프레임) */
export function texRuneBolt(): Tex {
  const t = new Tex(32, 16);
  for (let f = 0; f < 2; f++) {
    const ox = f * 16;
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const dx = x + 0.5 - 8;
        const dy = y + 0.5 - 8;
        const d = Math.abs(dx) + Math.abs(dy); // 마름모
        const R = f === 0 ? 7 : 6;
        if (d > R) continue;
        const c = d < 2 ? P.rune.colors[4] : d < 4 ? P.rune.colors[3] : d < R - 1 ? P.rune.colors[2] : P.rune.colors[1];
        t.set(ox + x, y, c);
      }
    }
  }
  return t;
}

/**
 * 먼지 구름 4프레임 (8x8 × 4). 0.35~1유닛 크기로 그려 텍셀이 월드 격자(1유닛 = 16텍셀)만큼 굵게 보이게 한다.
 * 더 촘촘한 텍셀에 베이어 디더로 흩어지게 하면 화면에서 가는 그물 무늬가 되므로,
 * 뭉치 → 부풀기 → 세 덩이로 갈라짐 → 작은 알갱이 순으로 모양 자체가 흩어진다.
 */
export function texDust(): Tex {
  const t = new Tex(32, 8);
  const rng = new Rng(77);
  const frames: Array<Array<[number, number, number]>> = [
    [[3.6, 5.3, 1.9]],
    [
      [2.8, 4.9, 2.1],
      [5.0, 5.1, 1.8],
    ],
    [
      [1.8, 4.3, 1.45],
      [4.2, 3.6, 1.55],
      [6.1, 4.9, 1.15],
    ],
    [
      [1.5, 3.2, 0.95],
      [4.4, 2.6, 1.05],
      [6.4, 4.0, 0.8],
    ],
  ];
  frames.forEach((blobs, f) => {
    const ox = f * 8;
    const bs = blobs.map(([x, y, r]) => [x + (rng.float() - 0.5) * 0.4, y + (rng.float() - 0.5) * 0.4, r]);
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        let inside = false;
        let lit = false;
        for (const [cx, cy, r] of bs) {
          const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
          if (d > r) continue;
          inside = true;
          // 빛 받는 윗면: 덩이 위쪽 안쪽만 밝게
          if (d < r * 0.72 && y + 0.5 < cy - r * 0.15) lit = true;
        }
        if (!inside) continue;
        const c = f === 3 ? P.sand.colors[2] : lit && f < 2 ? P.sand.colors[4] : P.sand.colors[3];
        t.set(ox + x, y, c);
      }
    }
  });
  return t;
}
