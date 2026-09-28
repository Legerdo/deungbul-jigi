// 일반 적 '물안개 망령' — 두건 속이 텅 빈 안개 혼령. 가슴에 훔친 차가운 불씨를 품고, 아랫단은 디더로 흩어진다.
// 거리를 유지하며 떠다니다 두 팔을 모아 물안개 구슬을 쏜다.
import { P } from '../palette.ts';
import type { FrameImage, Mat, PixelRig } from '../rig.ts';
import { DIRS, type Dir, type SheetData } from '../sheet.ts';
import { type V3, add, mApply, mAxes, mRotX, mRotY, norm, scale, sub } from '../vec.ts';
import { buildCharSheet, type CharAnim, type FrameSpec, renderFrame } from './util.ts';

export const WISP_FRAME: FrameSpec = { w: 48, h: 56, ox: 24, oy: 53 };

export interface WispPose {
  hover: number;
  lean: number;
  /** 0: 늘어뜨림, 1: 앞으로 모음 */
  arms: number;
  /** 가슴 불씨 밝기 0..1 */
  core: number;
  phase: number;
  /** 소멸 진행 0..1 */
  fade: number;
}

function mats(fade: number, hover: number) {
  // 아래로 갈수록(그리고 소멸할수록) 디더로 흩어진다
  const cov = (y0: number, y1: number) => (p: V3) => Math.max(0, Math.min(1, (p[1] - hover - y0) / (y1 - y0))) * (1 - fade);
  const shroud: Mat = { ramp: P.mist, tones: [2, 3, 4, 5], coverage: cov(12, 22) };
  return {
    shroud,
    shroudBody: { ramp: P.mist, tones: [2, 3, 4, 5], coverage: cov(13, 21), speckle: { seed: 8, scale: 0.6, amount: 0.12 } } as Mat,
    lining: { ramp: P.indigo, tones: [0, 1, 1, 2], coverage: cov(12, 22) } as Mat,
    hood: { ramp: P.mist, tones: [2, 3, 4, 5], coverage: () => 1 - fade * 0.95 } as Mat,
    void: { ramp: P.ink, tones: [0, 0, 1, 1], flat: true, coverage: () => 1 - fade } as Mat,
    tail: { ramp: P.mist, tones: [1, 2, 3, 4], coverage: cov(1, 16) } as Mat,
    eye: { ramp: P.cold, tones: [4, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false, coverage: () => 1 - fade } as Mat,
    core: { ramp: P.cold, tones: [2, 3, 4, 4], emissive: 0.85, flat: true, inner: false, receive: false, coverage: () => 1 - fade } as Mat,
    coreHot: { ramp: P.cold, tones: [3, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false, coverage: () => 1 - fade } as Mat,
  };
}

export function drawWisp(rig: PixelRig, p: WispPose): void {
  const h = p.hover;
  const m = mats(p.fade, h);
  const U = mRotX(p.lean);
  const C: V3 = [0, 25 + h, 0];
  const bp = (r: V3): V3 => add(C, mApply(U, r));

  // ── 망토: 어깨에서 아래로 퍼지는 원뿔 천 (안쪽은 어두운 안감)
  const rows = [
    { y: 4.6, r: 4.4 },
    { y: 0.5, r: 6.0 },
    { y: -4.5, r: 7.4 },
    { y: -9.5, r: 8.3 },
    { y: -13, r: 8.8 },
  ];
  const COLS = 12;
  const grid: V3[][] = [];
  const normals: V3[][] = [];
  for (let ri = 0; ri < rows.length; ri++) {
    const row: V3[] = [];
    const nrow: V3[] = [];
    const k = ri / (rows.length - 1);
    for (let c = 0; c <= COLS; c++) {
      // 각도를 음의 방향으로 돌려 바깥면이 앞면(망토 재질)이 되도록 감는다
      const a = -(c / COLS) * Math.PI * 2;
      const wave = Math.sin(p.phase + c * 1.1 + ri * 0.8) * k;
      const rr = rows[ri].r + wave * 0.9;
      const tatter = ri === rows.length - 1 ? (c % 2 === 0 ? 1.6 : -0.6) : 0;
      row.push(bp([Math.sin(a) * rr, rows[ri].y - tatter + wave * 0.6, Math.cos(a) * rr - k * 1.5]));
      const fold = c % 2 === 0 ? 0.25 : -0.25;
      nrow.push(norm(mApply(U, [Math.sin(a + fold), 0.3, Math.cos(a + fold)])));
    }
    grid.push(row);
    normals.push(nrow);
  }
  rig.cloth(grid, m.shroudBody, { backMat: m.lining, gridNormals: normals });

  // ── 꼬리: 망토 아래로 흘러내리는 안개
  let cur = bp([0, -9, -1.2]);
  for (let s = 0; s < 3; s++) {
    const nx = add(cur, [Math.sin(p.phase * 1.2 + s * 1.3) * 1.6, -4.4, -0.8]);
    rig.capsule(cur, nx, 4.2 - s * 1.2, 3.0 - s * 1.0, m.tail);
    cur = nx;
  }

  // ── 소매: 늘어뜨리거나(0) 앞으로 모은다(1)
  for (const s of [1, -1]) {
    const sh = bp([s * 5.0, 3.4, 0.2]);
    const rest: V3 = bp([s * 7.8, -4.2 + Math.sin(p.phase + s) * 0.6, 2.4]);
    const cast: V3 = bp([s * 3.2, 1.2, 8.6]);
    const hand: V3 = [rest[0] + (cast[0] - rest[0]) * p.arms, rest[1] + (cast[1] - rest[1]) * p.arms, rest[2] + (cast[2] - rest[2]) * p.arms];
    const mid = add(scale(add(sh, hand), 0.5), [s * 1.2, 0.6, -0.4]);
    rig.capsule(sh, mid, 2.0, 1.8, m.shroud);
    rig.capsule(mid, hand, 1.8, 1.4, m.shroud);
    // 손끝: 가늘게 흩어지는 안개 손가락
    const d = norm(sub(hand, mid));
    for (let k = -1; k <= 1; k++) rig.line(hand, add(hand, add(scale(d, 2.2), [k * 0.9, -0.6, 0])), m.shroud, { tone: 1 });
  }

  // ── 가슴의 차가운 불씨
  const coreC = bp([0, 0.8, 6.9]);
  rig.sphere(coreC, 1.7 + p.core * 0.8, p.core > 0.6 ? m.coreHot : m.core);

  // ── 두건과 텅 빈 얼굴
  const hoodC = bp([0, 9.2, 0.4]);
  const HA = mAxes(mRotY(0));
  const opening = (d: V3) => d[2] > 0.28 && d[1] < 0.34 && d[1] > -0.72 && Math.abs(d[0]) < 0.66;
  rig.ellipsoid(hoodC, [5.7, 6.2, 5.5], m.hood, { axes: HA, opening, innerMat: m.void });
  const tipB = bp([0, 14.2, -2.4]);
  const tipE = add(tipB, [Math.sin(p.phase) * 1.4, 2.4, -3.6]);
  rig.capsule(tipB, tipE, 2.3, 0.5, m.hood);
  for (const s of [1, -1]) rig.sphere(add(hoodC, [s * 1.8, -0.8, 1.0]), 0.95, m.eye);
}

// ─────────────────────────────── 애니메이션 ───────────────────────────────

function float(f: number): WispPose {
  const t = (f / 6) * Math.PI * 2;
  return { hover: 4 + Math.sin(t) * 1.2, lean: 0.05, arms: 0.05, core: 0.2 + 0.15 * Math.sin(t), phase: t, fade: 0 };
}

function cast(f: number): WispPose {
  const arms = [0.3, 0.7, 1.0, 1.0, 0.6, 0.25][f];
  const core = [0.3, 0.6, 0.9, 1.0, 0.4, 0.2][f];
  return { hover: [4.4, 5.2, 5.8, 4.6, 4.2, 4.1][f], lean: [0, -0.08, -0.12, 0.2, 0.12, 0.05][f], arms, core, phase: f * 1.1, fade: 0 };
}

function hurt(f: number): WispPose {
  return { hover: 4.6, lean: -0.3 + f * 0.12, arms: 0, core: 0.1, phase: f * 2, fade: f === 0 ? 0.25 : 0 };
}

function death(f: number): WispPose {
  return { hover: 4 - f * 0.6, lean: -0.2 + f * 0.08, arms: 0.1, core: Math.max(0, 0.8 - f * 0.2), phase: f * 1.4, fade: [0.1, 0.25, 0.42, 0.6, 0.78, 0.93][f] };
}

export const WISP_ANIMS: CharAnim<WispPose>[] = [
  { name: 'float', frames: 6, durations: Array(6).fill(115), loop: true, pose: (f) => float(f) },
  { name: 'cast', frames: 6, durations: [90, 90, 110, 120, 110, 140], loop: false, pose: (f) => cast(f) },
  { name: 'hurt', frames: 2, durations: [80, 150], loop: false, pose: (f) => hurt(f) },
  { name: 'death', frames: 6, durations: [80, 90, 100, 110, 120, 600], loop: false, pose: (f) => death(f) },
];

export function renderWispFrame(p: WispPose, dir: Dir): FrameImage {
  return renderFrame(WISP_FRAME, dir, (rig) => drawWisp(rig, p));
}

export function buildWispSheet(): SheetData {
  return buildCharSheet('wisp', WISP_FRAME, DIRS, WISP_ANIMS, renderWispFrame);
}
