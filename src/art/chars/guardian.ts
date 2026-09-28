// 보스 '석상 수호자' — 돌하르방의 얼굴에 석등의 옥개석을 쓴 거대한 석상. 가슴의 화사석(불집)에 빼앗긴 차가운 불씨가 갇혀 있다.
// 잠든 석상 → 깨어남 → 내려찍기·휩쓸기·룬 폭풍(체력 절반 이하) → 무너져 돌무더기가 된다.
import { P } from '../palette.ts';
import type { FrameImage, Mat, PixelRig } from '../rig.ts';
import type { Dir, SheetData } from '../sheet.ts';
import { type V3, add, cross, ik2, len, mApply, mAxes, mMul, mRotX, mRotY, mRotZ, norm, scale, sub } from '../vec.ts';
import { buildCharSheet, type CharAnim, type FrameSpec, renderFrame } from './util.ts';

export const GUARD_FRAME: FrameSpec = { w: 128, h: 128, ox: 64, oy: 124 };

const moss: Mat = { ramp: P.moss, tones: [1, 2, 3, 4] };
const M: Record<string, Mat> = {
  stone: {
    ramp: P.stone,
    tones: [1, 2, 3, 4],
    speckle: { seed: 3, scale: 0.32, amount: 0.12 },
    alt: { mat: moss, scale: 0.13, threshold: 0.56, upOnly: 0.35, seed: 21 },
  },
  stoneWarm: { ramp: P.stoneWarm, tones: [1, 2, 3, 4], speckle: { seed: 9, scale: 0.4, amount: 0.1 } },
  roof: {
    ramp: P.stone,
    tones: [1, 2, 3, 4],
    alt: { mat: moss, scale: 0.2, threshold: 0.42, upOnly: 0.3, seed: 33 },
  },
  stoneDark: { ramp: P.stone, tones: [0, 1, 1, 2] },
  crack: { ramp: P.stone, tones: [0, 0, 0, 0], flat: true },
  moss,
  eyeDormant: { ramp: P.stone, tones: [0, 1, 1, 1] },
  eyeAwake: { ramp: P.rune, tones: [2, 3, 3, 3], emissive: 1, inner: false, receive: false },
  eyeRage: { ramp: P.cold, tones: [4, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false },
  coreDim: { ramp: P.rune, tones: [0, 1, 1, 1], flat: true, inner: false },
  core: { ramp: P.rune, tones: [2, 3, 4, 4], emissive: 0.9, flat: true, inner: false, receive: false },
  coreHot: { ramp: P.cold, tones: [3, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false },
  rune: { ramp: P.rune, tones: [3, 3, 3, 3], emissive: 0.85, flat: true, inner: false, receive: false },
  runeDim: { ramp: P.rune, tones: [1, 1, 1, 1], flat: true, inner: false },
};

export interface GuardPose {
  bob: number;
  lean: number;
  twist: number;
  headPitch: number;
  headYaw: number;
  handL: V3;
  handR: V3;
  footL: V3;
  footR: V3;
  /** 0 잠듦, 1 깨어남, 2 격노 */
  eyes: number;
  /** 가슴 불씨 0..2 */
  core: number;
  sink: number;
  /** 무너짐(돌무더기) 0..1 — 0보다 크면 무더기로 그린다 */
  rubble: number;
  cracks: number;
}

function base(): GuardPose {
  return {
    bob: 0,
    lean: 0,
    twist: 0,
    headPitch: 0,
    headYaw: 0,
    handL: [29.5, 27, 5],
    handR: [-29.5, 27, 5],
    footL: [11, 3, 2],
    footR: [-11, 3, 2],
    eyes: 1,
    core: 1,
    sink: 0,
    rubble: 0,
    cracks: 0,
  };
}

/** 타원체 표면 위 점 (az: 정면 기준 방위, el: 고도) */
function ellPt(C: V3, R: V3, A: [V3, V3, V3], az: number, el: number): V3 {
  const x = Math.sin(az) * Math.cos(el) * R[0];
  const y = Math.sin(el) * R[1];
  const z = Math.cos(az) * Math.cos(el) * R[2];
  return add(C, add(add(scale(A[0], x), scale(A[1], y)), scale(A[2], z)));
}

/** 표면 위 획: 보이는 표면일 때만 점을 찍는다 */
function stroke(rig: PixelRig, pts: V3[], mat: Mat, tone?: number): void {
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const n = Math.max(2, Math.ceil(len(sub(b, a)) * 1.3));
    for (let k = 0; k <= n; k++) {
      const t = k / n;
      rig.dot([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t], mat, { tone, tol: 2.6 });
    }
  }
}

function frameAlong(d: V3): [V3, V3, V3] {
  let x = cross(d, [0, 0, 1]);
  if (len(x) < 0.3) x = cross(d, [1, 0, 0]);
  x = norm(x);
  const z = norm(cross(x, d));
  return [x, d, z];
}

function eyeMat(e: number): Mat {
  return e >= 2 ? M.eyeRage : e >= 1 ? M.eyeAwake : M.eyeDormant;
}

function coreMat(c: number): Mat {
  return c >= 1.5 ? M.coreHot : c >= 0.45 ? M.core : M.coreDim;
}

export function drawGuardian(rig: PixelRig, p: GuardPose): void {
  if (p.rubble > 0) {
    drawRubble(rig, p);
    return;
  }
  const U = mMul(mRotY(p.twist), mRotX(p.lean));
  const UA = mAxes(U);
  const pel: V3 = [0, 23 - p.bob - p.sink, 0];
  const tp = (r: V3): V3 => add(pel, mApply(U, r));
  const glowRune = p.core >= 0.45 ? M.rune : M.runeDim;

  // ── 다리와 발
  for (const s of [1, -1]) {
    const hip = add(pel, mApply(mRotY(p.twist * 0.3), [s * 8.5, -2, 0]));
    const foot = s > 0 ? p.footL : p.footR;
    const ankle = add(foot, [0, 3.4, -1]);
    const knee = ik2(hip, ankle, 9.8, 9.2, [s * 0.2, 0, 1]);
    rig.capsule(hip, knee, 6.3, 5.7, M.stone);
    rig.capsule(knee, ankle, 5.7, 6.1, M.stone);
    rig.box(add(foot, [0, 0.1, 1.6]), [6.3, 3.2, 7.6], [[1, 0, 0], [0, 1, 0], [0, 0, 1]], M.stoneDark, { bevel: 1.5 });
  }

  // ── 허리 받침과 몸통 (이끼는 윗면에만)
  rig.box(tp([0, 1, 0]), [13.8, 5.6, 10.2], mAxes(mMul(mRotY(p.twist * 0.5), mRotX(p.lean * 0.5))), M.stone, { bevel: 2 });
  const TC = tp([0, 17, 0]);
  const TR: V3 = [19, 16.5, 13.5];
  rig.ellipsoid(TC, TR, M.stone, { axes: UA });
  rig.ellipsoid(tp([0, 8.6, 3.2]), [15, 7, 11], M.stone, { axes: UA });

  // ── 가슴의 화사석(불집)과 갇힌 불씨
  const CC = tp([0, 19, 12.6]);
  rig.box(CC, [7.3, 7.7, 2.6], UA, M.stoneDark, { bevel: 1 });
  rig.ellipsoid(add(CC, mApply(U, [0, 0, 1.9])), [5.4, 5.8, 2.4], coreMat(p.core), { axes: UA });
  rig.line(add(CC, mApply(U, [0, 5.8, 4.6])), add(CC, mApply(U, [0, -5.8, 4.6])), M.stoneDark, { tone: 1 });
  rig.line(add(CC, mApply(U, [-5.4, 0, 4.6])), add(CC, mApply(U, [5.4, 0, 4.6])), M.stoneDark, { tone: 1 });
  rig.box(add(CC, mApply(U, [0, 8.7, 0.6])), [9.4, 1.5, 3.6], UA, M.stoneWarm, { bevel: 0.8 });
  rig.box(add(CC, mApply(U, [0, -8.5, 0.4])), [8.6, 1.2, 3.2], UA, M.stoneWarm, { bevel: 0.8 });

  // ── 몸통 룬과 금
  for (const s of [1, -1]) {
    stroke(rig, [ellPt(TC, TR, UA, s * 0.95, 0.5), ellPt(TC, TR, UA, s * 1.02, 0.12), ellPt(TC, TR, UA, s * 0.86, -0.22)], glowRune);
    stroke(rig, [ellPt(TC, TR, UA, s * 1.02, 0.12), ellPt(TC, TR, UA, s * 1.25, 0.2)], glowRune);
  }
  const belt: V3[] = [];
  for (let k = 0; k <= 8; k++) belt.push(ellPt(tp([0, 8.6, 3.2]), [15, 7, 11], UA, -0.9 + k * 0.225, -0.05));
  stroke(rig, belt, glowRune);
  if (p.cracks > 0) {
    stroke(rig, [ellPt(TC, TR, UA, -0.35, 0.62), ellPt(TC, TR, UA, -0.22, 0.4), ellPt(TC, TR, UA, -0.42, 0.22)], M.crack, 0);
    if (p.cracks > 1) stroke(rig, [ellPt(TC, TR, UA, 0.5, -0.1), ellPt(TC, TR, UA, 0.62, -0.42), ellPt(TC, TR, UA, 0.44, -0.6)], M.crack, 0);
  }

  // ── 어깨 받침돌
  for (const s of [1, -1]) rig.ellipsoid(tp([s * 19.6, 27.6, -0.4]), [8.9, 6.8, 8.9], M.stone, { axes: UA });

  // ── 머리: 부리부리한 눈, 긴 코, 다문 입, 옥개석 모자
  const neck = tp([0, 33, 1.6]);
  const H = mMul(U, mMul(mRotY(p.headYaw), mRotX(p.headPitch)));
  const HA = mAxes(H);
  const hp = (r: V3): V3 => add(neck, mApply(H, r));
  rig.ellipsoid(hp([0, 9.6, 1.4]), [10.3, 11.7, 9.3], M.stoneWarm, { axes: HA });
  for (const s of [1, -1]) rig.ellipsoid(hp([s * 10.1, 9.2, 0]), [1.9, 4.7, 3.2], M.stoneWarm, { axes: HA });
  for (const s of [1, -1]) {
    rig.ellipsoid(hp([s * 4.8, 11.5, 8.8]), [3.95, 4.35, 1.7], M.stoneDark, { axes: HA });
    rig.ellipsoid(hp([s * 4.8, 11.5, 9.5]), [3.0, 3.4, 1.45], eyeMat(p.eyes), { axes: HA });
  }
  rig.ellipsoid(hp([0, 6.9, 10.3]), [2.6, 4.9, 2.6], M.stoneWarm, { axes: HA });
  stroke(rig, [hp([-3.4, 1.8, 9.1]), hp([0, 1.2, 9.5]), hp([3.4, 1.8, 9.1])], M.crack, 0);
  if (p.cracks > 0) stroke(rig, [hp([5.5, 19, 5.5]), hp([6.8, 15.5, 6.8]), hp([5.8, 13.8, 7.4])], M.crack, 0);
  // 옥개석 모자: 넓은 지붕돌 + 모서리 반전 + 보주
  rig.ellipsoid(hp([0, 20.6, 0.8]), [15.6, 2.9, 13.6], M.roof, { axes: HA });
  for (const [sx, sz] of [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ]) {
    rig.ellipsoid(hp([sx * 13.4, 21.9, sz * 10.9 + 0.8]), [2.7, 1.3, 2.3], M.roof, { axes: HA });
  }
  rig.ellipsoid(hp([0, 23.4, 0.8]), [7.2, 3.3, 6.6], M.roof, { axes: HA });
  rig.sphere(hp([0, 27.6, 0.8]), 2.7, M.stoneWarm);

  // ── 팔: 쌓은 돌 같은 팔뚝과 네모난 주먹
  for (const s of [1, -1]) {
    const sh = tp([s * 20.2, 25, 0]);
    const hand = s > 0 ? p.handL : p.handR;
    const elbow = ik2(sh, hand, 14, 13.2, mApply(U, [s * 0.8, -0.35, -0.6]));
    rig.capsule(sh, elbow, 5.5, 4.9, M.stone);
    rig.ellipsoid(elbow, [5.4, 5.4, 5.4], M.stoneDark);
    rig.capsule(elbow, hand, 5.0, 5.9, M.stone);
    const fd = norm(sub(hand, elbow));
    const fa = frameAlong(fd);
    const fc = add(hand, scale(fd, 3.2));
    rig.box(fc, [6.5, 6.5, 6.5], fa, M.stone, { bevel: 2 });
    // 팔뚝 룬 고리
    const ring: V3[] = [];
    const mid = add(elbow, scale(sub(hand, elbow), 0.55));
    for (let k = 0; k <= 6; k++) {
      const a = -1.2 + k * 0.4;
      ring.push(add(mid, add(scale(fa[0], Math.sin(a) * 5.4), scale(fa[2], Math.cos(a) * 5.4))));
    }
    stroke(rig, ring, glowRune);
  }
}

/** 무너진 돌무더기: 몸통 조각, 옆으로 누운 머리, 흩어진 주먹 */
function drawRubble(rig: PixelRig, p: GuardPose): void {
  const k = p.rubble;
  const drop = (y: number) => y * (1 - k) + 0;
  rig.ellipsoid([0, drop(14) + 7, 0], [21, 8 + 4 * (1 - k), 15], M.stone);
  rig.ellipsoid([-9, drop(10) + 5, 8], [9, 5, 7], M.stone);
  rig.ellipsoid([11, drop(9) + 4, 6], [8, 4.5, 6], M.stone);
  rig.box([-24, 5, 10], [6.2, 6.2, 6.2], mAxes(mRotY(0.5)), M.stone, { bevel: 2 });
  rig.box([25, 5, 4], [6.2, 6.2, 6.2], mAxes(mMul(mRotY(-0.4), mRotZ(0.3))), M.stone, { bevel: 2 });
  // 옆으로 누운 머리
  const HA = mAxes(mMul(mRotZ(1.3), mRotX(0.2)));
  const hc: V3 = [4, drop(20) + 10, 16];
  rig.ellipsoid(hc, [10, 11.5, 9], M.stoneWarm, { axes: HA });
  for (const s of [1, -1]) {
    const e = add(hc, mApply(mMul(mRotZ(1.3), mRotX(0.2)), [s * 4.7, 2, 8.4]));
    rig.ellipsoid(e, [3.0, 3.3, 1.4], M.eyeDormant, { axes: HA });
  }
  rig.ellipsoid(add(hc, mApply(mMul(mRotZ(1.3), mRotX(0.2)), [0, 11, 0.8])), [15, 2.8, 13], M.roof, { axes: HA });
  // 식어 버린 화사석
  rig.box([-4, drop(12) + 9, 13], [6.6, 6.8, 2.4], mAxes(mRotX(-0.9)), M.stoneDark, { bevel: 1 });
  rig.ellipsoid([-4, drop(12) + 10.4, 14.2], [4.6, 4.8, 1.2], coreMat(p.core), { axes: mAxes(mRotX(-0.9)) });
  for (let i = 0; i < 7; i++) {
    const a = i * 2.4;
    rig.box([Math.cos(a) * (18 + (i % 3) * 5), 1.6, Math.sin(a) * 12 + 4], [2 + (i % 2), 1.6, 2], mAxes(mRotY(a)), M.stone, { bevel: 0.6 });
  }
}

// ─────────────────────────────── 애니메이션 ───────────────────────────────

const mir = (v: V3): V3 => [-v[0], v[1], v[2]];

function idle(f: number): GuardPose {
  const p = base();
  p.bob = [0, 0.6, 1.2, 0.6][f];
  p.handL = [29.5, 27 - p.bob * 0.8, 5];
  p.handR = mir(p.handL);
  p.core = 1 + [0, 0.1, 0.2, 0.1][f];
  return p;
}

function walk(f: number): GuardPose {
  const p = base();
  const t = (f / 6) * Math.PI * 2;
  p.footL = [11, 3 + Math.max(0, Math.sin(t)) * 4.2, 2 + Math.cos(t) * 5.2];
  p.footR = [-11, 3 + Math.max(0, -Math.sin(t)) * 4.2, 2 - Math.cos(t) * 5.2];
  p.bob = Math.abs(Math.cos(t)) * 1.6;
  p.twist = Math.cos(t) * 0.07;
  p.lean = 0.05;
  p.handL = [29.5, 27, 5 - Math.cos(t) * 5];
  p.handR = [-29.5, 27, 5 + Math.cos(t) * 5];
  return p;
}

function awaken(f: number): GuardPose {
  const p = base();
  if (f <= 1) {
    p.handL = [8, 27, 14.5];
    p.handR = [-8, 21, 14.5];
    p.headPitch = 0.28;
    p.eyes = f === 1 ? 1 : 0;
    p.core = f === 1 ? 0.5 : 0.2;
    p.lean = 0.06;
  } else if (f === 2) {
    p.handL = [12, 28, 13];
    p.handR = [-12, 23, 13];
    p.headPitch = 0.12;
    p.core = 0.8;
  } else if (f === 3) {
    p.handL = [22, 31, 12];
    p.handR = [-22, 31, 12];
    p.lean = -0.08;
    p.headPitch = -0.05;
    p.core = 1.1;
  } else {
    p.handL = [33, 36, 6];
    p.handR = [-33, 36, 6];
    p.lean = -0.12;
    p.headPitch = -0.16;
    p.bob = -1;
    p.core = 1.6;
    p.eyes = 2;
  }
  return p;
}

function slamWind(f: number): GuardPose {
  const p = base();
  p.handL = [[18, 50, 8] as V3, [10, 86, 0] as V3, [8, 96, -3] as V3][f];
  p.handR = mir(p.handL);
  p.lean = [-0.05, -0.14, -0.18][f];
  p.bob = [0, -1.5, -2][f];
  p.headPitch = [-0.1, -0.2, -0.25][f];
  p.core = 1.3;
  return p;
}

function slam(f: number): GuardPose {
  const p = base();
  p.handL = [[11, 52, 16] as V3, [11, 7, 23] as V3, [12, 8, 22] as V3][f];
  p.handR = mir(p.handL);
  p.lean = [0.1, 0.36, 0.3][f];
  p.bob = [0, 3.5, 3][f];
  p.headPitch = [0, 0.2, 0.16][f];
  p.core = f === 2 ? 0.9 : 1.3;
  return p;
}

function sweepWind(f: number): GuardPose {
  const p = base();
  p.twist = [0.35, 0.52][f];
  p.handR = [[-34, 38, -16] as V3, [-36, 40, -21] as V3][f];
  p.handL = [24, 30, 16];
  p.lean = -0.05;
  p.bob = [0.5, 1.5][f];
  p.footR = [-12, 3, -1];
  return p;
}

function sweep(f: number): GuardPose {
  const p = base();
  p.twist = [0.1, -0.35, -0.52][f];
  p.handR = [[-28, 32, 20] as V3, [4, 30, 30] as V3, [30, 30, 18] as V3][f];
  p.handL = [26, 26, -4];
  p.lean = 0.18;
  p.bob = 1.5;
  p.footR = [-12, 3, 5];
  p.footL = [11, 3, -1];
  return p;
}

function cast(f: number): GuardPose {
  const p = base();
  p.handL = [40, 56 + (f % 2) * 2, 8];
  p.handR = mir(p.handL);
  p.headPitch = -0.2;
  p.core = 2;
  p.eyes = 2;
  p.bob = [0, 0.8, 1.2, 0.8][f];
  p.lean = -0.06;
  return p;
}

function stagger(f: number): GuardPose {
  const p = base();
  p.lean = [-0.18, -0.26, -0.12][f];
  p.bob = [1.5, 3, 2][f];
  p.handL = [26, 18, -2];
  p.handR = mir(p.handL);
  p.headPitch = [-0.3, -0.35, -0.1][f];
  p.eyes = [2, 1, 2][f];
  p.footR = [-11, 3, -3];
  p.cracks = 1;
  p.core = 1.4;
  return p;
}

function death(f: number): GuardPose {
  const p = base();
  p.cracks = 2;
  if (f === 0) {
    const s = stagger(1);
    s.cracks = 2;
    s.eyes = 1;
    return s;
  }
  if (f <= 3) {
    p.sink = [0, 3, 7, 12][f];
    p.lean = [0, 0.15, 0.3, 0.45][f];
    p.handL = [[0, 0, 0] as V3, [26, 12, 8] as V3, [24, 4, 12] as V3, [22, 3, 14] as V3][f];
    p.handR = mir(p.handL);
    p.headPitch = [0, 0.3, 0.45, 0.6][f];
    p.eyes = f === 1 ? 1 : 0;
    p.core = [1, 0.6, 0.35, 0.15][f];
    return p;
  }
  p.rubble = f === 4 ? 0.55 : 1;
  p.core = 0;
  p.eyes = 0;
  return p;
}

export const GUARD_ANIMS: CharAnim<GuardPose>[] = [
  { name: 'idle', frames: 4, durations: [240, 220, 240, 220], loop: true, pose: (f) => idle(f) },
  { name: 'walk', frames: 6, durations: Array(6).fill(120), loop: true, pose: (f) => walk(f) },
  { name: 'awaken', frames: 5, durations: [500, 260, 240, 240, 600], loop: false, pose: (f) => awaken(f) },
  { name: 'slamWind', frames: 3, durations: [150, 170, 320], loop: false, pose: (f) => slamWind(f) },
  { name: 'slam', frames: 3, durations: [60, 90, 450], loop: false, pose: (f) => slam(f) },
  { name: 'sweepWind', frames: 2, durations: [170, 360], loop: false, pose: (f) => sweepWind(f) },
  { name: 'sweep', frames: 3, durations: [70, 90, 320], loop: false, pose: (f) => sweep(f) },
  { name: 'cast', frames: 4, durations: [140, 140, 140, 140], loop: true, pose: (f) => cast(f) },
  { name: 'stagger', frames: 3, durations: [90, 160, 320], loop: false, pose: (f) => stagger(f) },
  { name: 'death', frames: 6, durations: [160, 170, 190, 230, 300, 2000], loop: false, pose: (f) => death(f) },
];

export const GUARD_DIRS: readonly Dir[] = ['down', 'side'];

export function renderGuardFrame(p: GuardPose, dir: Dir): FrameImage {
  return renderFrame(GUARD_FRAME, dir, (rig) => drawGuardian(rig, p));
}

export function buildGuardianSheet(): SheetData {
  return buildCharSheet('guardian', GUARD_FRAME, GUARD_DIRS, GUARD_ANIMS, renderGuardFrame, 12);
}
