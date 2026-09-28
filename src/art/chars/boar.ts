// 일반 적 '이끼 멧돼지' — 등에 이끼와 고사리, 작은 버섯이 자란 숲 멧돼지. 앞발로 땅을 긁다가 일직선으로 돌진한다.
// 리그 공간: 몸 길이 방향이 z(머리가 +z), 발 중심 원점, 캐릭터의 오른쪽 = -x.
import { P } from '../palette.ts';
import type { FrameImage, Mat, PixelRig } from '../rig.ts';
import { DIRS, type Dir, type SheetData } from '../sheet.ts';
import { type V3, add, ik2, mApply, mAxes, mMul, mRotX, mRotY, mRotZ } from '../vec.ts';
import { buildCharSheet, type CharAnim, type FrameSpec, renderFrame } from './util.ts';

export const BOAR_FRAME: FrameSpec = { w: 64, h: 48, ox: 32, oy: 44 };

const moss: Mat = { ramp: P.moss, tones: [1, 2, 3, 4] };
const M: Record<string, Mat> = {
  hide: {
    ramp: P.hide,
    tones: [1, 2, 3, 4],
    alt: { mat: moss, scale: 0.34, threshold: 0.46, upOnly: 0.3, seed: 11 },
    speckle: { seed: 4, scale: 0.8, amount: 0.12 },
  },
  hideDark: { ramp: P.hide, tones: [0, 1, 2, 3] },
  moss,
  mossHi: { ramp: P.moss, tones: [2, 3, 4, 5] },
  snout: { ramp: P.rose, tones: [1, 2, 3, 3] },
  tusk: { ramp: P.bone, tones: [2, 3, 4, 5] },
  eye: { ramp: P.ember, tones: [3, 4, 4, 4], emissive: 0.9, flat: true, inner: false, receive: false },
  eyeDim: { ramp: P.ember, tones: [1, 1, 1, 1], flat: true, inner: false },
  hoof: { ramp: P.ink, tones: [0, 1, 2, 2] },
  mane: { ramp: P.hair, tones: [0, 1, 2, 3] },
  cap: { ramp: P.danger, tones: [2, 3, 4, 4] },
  stem: { ramp: P.bone, tones: [2, 3, 3, 4] },
};

export interface BoarPose {
  body: V3;
  pitch: number;
  head: number;
  headYaw: number;
  /** 발굽 위치: 앞왼, 앞오, 뒤왼, 뒤오 */
  legs: [V3, V3, V3, V3];
  tail: number;
  phase: number;
  dim?: boolean;
  roll?: number;
}

const HOOF0: [V3, V3, V3, V3] = [
  [3.6, 1.0, 5.8],
  [-3.6, 1.0, 5.8],
  [3.8, 1.0, -6.8],
  [-3.8, 1.0, -6.8],
];

function base(): BoarPose {
  return { body: [0, 10.6, -0.4], pitch: 0, head: 0.05, headYaw: 0, legs: HOOF0.map((v) => [...v]) as [V3, V3, V3, V3], tail: 0, phase: 0 };
}

export function drawBoar(rig: PixelRig, p: BoarPose): void {
  const U = mRotX(p.pitch);
  const UA = mAxes(U);
  const bp = (r: V3): V3 => add(p.body, mApply(U, r));

  // ── 다리 (앞다리 무릎은 앞, 뒷다리 뒤꿈치는 뒤로)
  const hips: V3[] = [bp([4.2, -2.6, 5.6]), bp([-4.2, -2.6, 5.6]), bp([4.4, -2.2, -6.8]), bp([-4.4, -2.2, -6.8])];
  for (let i = 0; i < 4; i++) {
    const hoof: V3 = [p.legs[i][0] * 1.16, p.legs[i][1], p.legs[i][2]];
    const knee = ik2(hips[i], hoof, 4.4, 4.2, i < 2 ? [0, 0, 1] : [0, 0, -1]);
    rig.capsule(hips[i], knee, 2.1, 1.6, M.hide);
    rig.capsule(knee, hoof, 1.5, 1.2, M.hideDark);
    rig.ellipsoid(add(hoof, [0, -0.2, 0.4]), [1.3, 0.9, 1.5], M.hoof);
  }

  // ── 몸통과 어깨 혹 (이끼가 윗면에 핀다)
  rig.ellipsoid(bp([0, 0, 0]), [7.2, 6.0, 10.6], M.hide, { axes: UA });
  rig.ellipsoid(bp([0, 2.6, 4.6]), [6.6, 4.8, 5.2], M.hide, { axes: UA });
  // 꼬리
  rig.capsule(bp([0, 2.4, -10.2]), bp([Math.sin(p.tail) * 1.3, 0.6 + Math.cos(p.tail) * 0.4, -12.2]), 0.85, 0.5, M.hideDark);

  // ── 갈기: 머리 뒤에서 혹까지 뻣뻣한 털
  for (let k = 0; k < 7; k++) {
    const b = bp([0, 5.3 + (k < 3 ? 1.6 : 0.6) - k * 0.1, 8.2 - k * 1.5]);
    rig.line(b, add(b, mApply(U, [((k % 2) - 0.5) * 0.8, 2.0, -1.1])), M.mane, { tone: k % 2 });
  }

  // ── 등 위 이끼 덩어리, 고사리, 버섯
  rig.ellipsoid(bp([1.3, 5.6, 1.4]), [2.6, 1.3, 2.6], M.moss, { axes: UA });
  rig.ellipsoid(bp([-1.8, 5.2, -3.2]), [2.2, 1.2, 2.4], M.moss, { axes: UA });
  rig.ellipsoid(bp([0.2, 6.6, 5.2]), [3.0, 1.4, 2.6], M.moss, { axes: UA });
  const fern = bp([0.8, 7.4, 3.6]);
  for (const [dx, dz] of [
    [-1.4, -1.2],
    [0.3, -2.2],
    [1.6, -0.9],
  ]) {
    const tip = add(fern, mApply(U, [dx, 3.2, dz]));
    rig.line(fern, tip, M.mossHi, { tone: 2 });
    rig.dot(add(tip, [0, -0.6, 0.3]), M.mossHi, { tone: 3, surface: false });
  }
  const mush = bp([-2.6, 6.2, -5.2]);
  rig.line(mush, add(mush, [0, 1.6, 0]), M.stem, { tone: 2 });
  rig.ellipsoid(add(mush, [0, 2.0, 0]), [1.5, 0.8, 1.5], M.cap);

  // ── 머리
  const neck = bp([0, 1.0, 8.4]);
  const H = mMul(U, mMul(mRotY(p.headYaw), mRotX(p.head)));
  const HA = mAxes(H);
  const hp = (r: V3): V3 => add(neck, mApply(H, r));
  const HR: V3 = [5.4, 4.6, 4.8];
  const HC: V3 = [0, 0, 2.8];
  rig.ellipsoid(hp(HC), HR, M.hide, { axes: HA });
  rig.capsule(hp([0, -1.3, 5.6]), hp([0, -1.9, 9.0]), 3.0, 2.5, M.hide);
  rig.ellipsoid(hp([0, -2.0, 9.6]), [2.4, 2.05, 0.8], M.snout, { axes: HA });
  for (const s of [1, -1]) rig.dot(hp([s * 0.9 - 0.5, -2.1, 10.3]), M.hoof, { tone: 0, tol: 2 });
  for (const s of [1, -1]) rig.capsule(hp([s * 2.5, -2.8, 7.4]), hp([s * 3.9, 0.9, 9.2]), 1.0, 0.45, M.tusk);
  // 눈: 머리 타원체 표면 위 (측면·정면 모두에서 보이도록)
  for (const s of [1, -1]) {
    const d: V3 = [s * 0.62, 0.28, 0.73];
    const l = Math.hypot(d[0], d[1], d[2]);
    const ep: V3 = [HC[0] + (d[0] / l) * HR[0], HC[1] + (d[1] / l) * HR[1], HC[2] + (d[2] / l) * HR[2]];
    rig.dot(hp(ep), p.dim ? M.eyeDim : M.eye, { size: [2, 1], tol: 2.6 });
  }
  for (const s of [1, -1]) {
    const ea = mAxes(mMul(H, mRotZ(-s * 0.55)));
    rig.ellipsoid(hp([s * 3.9, 4.0, 1.3]), [1.4, 2.2, 0.9], M.hideDark, { axes: ea });
  }
}

// ─────────────────────────────── 애니메이션 ───────────────────────────────

function stepCycle(q: number, S: number, lift: number): [number, number] {
  q = ((q % 1) + 1) % 1;
  if (q < 0.5) return [S - 4 * S * q, 0];
  const u = (q - 0.5) / 0.5;
  return [-S + 2 * S * (0.5 - 0.5 * Math.cos(Math.PI * u)), lift * Math.sin(Math.PI * u)];
}

function idle(f: number): BoarPose {
  const p = base();
  const b = [0, 0.3, 0.55, 0.3][f];
  p.body = [0, 10.6 - b, -0.4];
  p.head = 0.05 + b * 0.12;
  p.tail = [0, 0.8, 0, -0.8][f];
  p.phase = f;
  return p;
}

function walk(f: number): BoarPose {
  const p = base();
  const t = f / 6;
  const ph = [0, 0.5, 0.5, 0];
  p.legs = HOOF0.map((h, i) => {
    const [dz, dy] = stepCycle(t + ph[i], 2.6, 1.7);
    return [h[0], h[1] + dy, h[2] + dz] as V3;
  }) as [V3, V3, V3, V3];
  p.body = [0, 10.6 + 0.4 * Math.cos(t * Math.PI * 4), -0.4];
  p.head = 0.08 + 0.06 * Math.sin(t * Math.PI * 4);
  p.tail = Math.sin(t * Math.PI * 2) * 0.7;
  return p;
}

function windup(f: number): BoarPose {
  const p = base();
  p.body = [0, 9.4, -1.6];
  p.pitch = 0.1;
  p.head = 0.42;
  p.tail = 1.0;
  const paw = f % 2 === 1;
  p.legs[0] = paw ? [3.6, 2.4, 3.2] : [3.6, 1.0, 6.6];
  p.legs[2] = [3.8, 1.0, -7.8];
  p.legs[3] = [-3.8, 1.0, -7.8];
  p.headYaw = [0.05, -0.05, 0.05, -0.05][f];
  return p;
}

function charge(f: number): BoarPose {
  const p = base();
  // 회전 갤럽: 앞다리 한 쌍과 뒷다리 한 쌍이 번갈아 뻗는다
  const ext = f % 2 === 0;
  p.body = [0, [10.2, 11.4, 10.2, 11.0][f], 0.6];
  p.pitch = [0.14, 0.04, 0.14, 0.06][f];
  p.head = 0.36;
  p.tail = -0.8;
  p.legs = ext
    ? [
        [3.6, 1.6, 9.8],
        [-3.6, 1.0, 8.4],
        [3.8, 1.0, -10.6],
        [-3.8, 1.8, -9.4],
      ]
    : [
        [3.6, 3.0, 2.8],
        [-3.6, 2.6, 3.8],
        [3.8, 3.2, -2.6],
        [-3.8, 2.8, -3.8],
      ];
  if (f >= 2) {
    const [a, b, c, d] = p.legs;
    p.legs = [b.map((v, i) => (i === 0 ? -v : v)) as V3, a.map((v, i) => (i === 0 ? -v : v)) as V3, d.map((v, i) => (i === 0 ? -v : v)) as V3, c.map((v, i) => (i === 0 ? -v : v)) as V3];
  }
  return p;
}

function stun(f: number): BoarPose {
  const p = base();
  p.body = [0, 9.8, -0.4];
  p.head = 0.28;
  p.headYaw = [0.32, 0.1, -0.32, -0.1][f];
  p.pitch = -0.04;
  p.tail = 0;
  p.dim = true;
  p.legs[0] = [4.2, 1.0, 6.4];
  p.legs[1] = [-4.2, 1.0, 5.2];
  return p;
}

function hurt(f: number): BoarPose {
  const p = base();
  p.body = [0, f === 0 ? 10.0 : 10.4, -1.4];
  p.pitch = -0.12;
  p.head = -0.2;
  p.tail = 1.2;
  return p;
}

function death(f: number): BoarPose {
  const p = base();
  p.dim = f >= 2;
  p.head = [0.1, 0.3, 0.35, 0.4, 0.4][f];
  p.body = [0, [10.4, 9.8, 9.4, 9.2, 9.2][f], -0.4];
  p.roll = [0, 0.35, 0.95, 1.38, 1.52][f];
  // 쓰러지며 다리가 뻣뻣하게 뻗는다
  if (f >= 2) {
    p.legs = [
      [4.4, 3.0, 8.2],
      [-3.0, 2.0, 7.6],
      [4.6, 3.0, -9.2],
      [-3.2, 2.0, -8.6],
    ];
  }
  return p;
}

export const BOAR_ANIMS: CharAnim<BoarPose>[] = [
  { name: 'idle', frames: 4, durations: [200, 180, 220, 180], loop: true, pose: (f) => idle(f) },
  { name: 'walk', frames: 6, durations: Array(6).fill(95), loop: true, pose: (f) => walk(f) },
  { name: 'windup', frames: 4, durations: [130, 110, 130, 110], loop: true, pose: (f) => windup(f) },
  { name: 'charge', frames: 4, durations: [60, 60, 60, 60], loop: true, pose: (f) => charge(f) },
  { name: 'stun', frames: 4, durations: [150, 150, 150, 150], loop: true, pose: (f) => stun(f) },
  { name: 'hurt', frames: 2, durations: [80, 160], loop: false, pose: (f) => hurt(f) },
  { name: 'death', frames: 5, durations: [90, 110, 110, 130, 1400], loop: false, pose: (f) => death(f) },
];

export function renderBoarFrame(p: BoarPose, dir: Dir): FrameImage {
  const roll = p.roll ?? 0;
  const sign = dir === 'up' ? -1 : 1;
  return renderFrame(BOAR_FRAME, dir, (rig) => drawBoar(rig, p), {
    roll: roll * sign,
    rollPivot: [0, 4],
    shift: [0, -Math.sin(roll) * 1.5],
  });
}

export function buildBoarSheet(): SheetData {
  return buildCharSheet('boar', BOAR_FRAME, DIRS, BOAR_ANIMS, renderBoarFrame);
}
