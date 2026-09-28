// 주인공 '리안' — 청록 두건 망토, 호박색 목도리, 허리의 작은 등불, 짧은 단검.
// 리그 공간: 텍셀 단위, 발 중심 원점, +y 위, +z 캐릭터 정면, 캐릭터의 오른쪽 = -x.

import { P } from '../palette.ts';
import { type FrameImage, type Mat, PixelRig } from '../rig.ts';
import { buildSheet, DIR_YAW, DIRS, type Dir, type SheetData, type SheetEntry } from '../sheet.ts';
import {
  type M3,
  type V3,
  add,
  cross,
  ik2,
  len,
  mApply,
  mAxes,
  mIdent,
  mMul,
  mRotX,
  mRotY,
  mRotZ,
  norm,
  scale,
  sub,
} from '../vec.ts';

export const HERO_FRAME = { w: 48, h: 48, ox: 24, oy: 45 } as const;
export const SPRITE_PITCH = 0.38;

const M: Record<string, Mat> = {
  cloak: { ramp: P.teal, tones: [1, 2, 3, 4] },
  lining: { ramp: P.teal, tones: [0, 0, 1, 1] },
  scarf: { ramp: P.amber, tones: [1, 2, 3, 4] },
  tunic: { ramp: P.linen, tones: [2, 3, 4, 4] },
  tunicDark: { ramp: P.linen, tones: [1, 2, 3, 4] },
  leather: { ramp: P.wood, tones: [1, 2, 3, 4] },
  boot: { ramp: P.wood, tones: [0, 1, 2, 3] },
  pants: { ramp: P.indigo, tones: [0, 1, 2, 3] },
  skin: { ramp: P.skin, tones: [1, 2, 3, 4] },
  hair: { ramp: P.hair, tones: [0, 1, 2, 3] },
  eye: { ramp: P.hair, tones: [0, 0, 0, 0], flat: true },
  steel: { ramp: P.steel, tones: [2, 3, 4, 5] },
  brass: { ramp: P.brass, tones: [1, 2, 3, 4] },
  glow: { ramp: P.ember, tones: [3, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false },
  smear: { ramp: P.steel, tones: [4, 4, 4, 4], flat: true, outline: false, inner: false, receive: false, emissive: 0.55 },
  smearCore: { ramp: P.steel, tones: [5, 5, 5, 5], flat: true, outline: false, inner: false, receive: false, emissive: 0.8 },
  smearTail: { ramp: P.cold, tones: [3, 3, 3, 3], flat: true, outline: false, inner: false, receive: false, emissive: 0.45 },
};

export interface HeroPose {
  pelvis: V3;
  lean: number;
  sideLean: number;
  twist: number;
  headPitch: number;
  headYaw: number;
  footL: V3;
  footR: V3;
  handL: V3;
  handR: V3;
  blade: V3;
  wind: V3;
  phase: number;
  squash: number;
  lantern: 'hip' | 'hand';
  lanternSwing: number;
  smear?: Smear;
  roll?: { angle: number; pivot: V3 };
  viewRoll?: number;
  viewShift?: [number, number];
  /** 구르기 중 공 형태의 회전 각 */
  ball?: number;
}

type SwingPlane = 'fore' | 'back' | 'over';

/** 휘두름 잔상: pivot을 중심으로 dir(a) = e1·cos a + e2·sin a 방향의 초승달 */
export interface Smear {
  pivot: V3;
  e1: V3;
  e2: V3;
  a0: number;
  a1: number;
  r0: number;
  r1: number;
}

function planeSmear(plane: SwingPlane, a0: number, a1: number, r0: number, r1: number): Smear {
  // swingDir(a) = cos a * swingDir(0) + sin a * swingDir(π/2)
  return { pivot: PIVOTS[plane], e1: swingDir(plane, 0), e2: swingDir(plane, Math.PI / 2), a0, a1, r0, r1 };
}

function arcSmear(pivot: V3, from: V3, to: V3, r0: number, r1: number): Smear {
  const e1 = norm(from);
  const t = norm(to);
  const c = Math.max(-1, Math.min(1, e1[0] * t[0] + e1[1] * t[1] + e1[2] * t[2]));
  const e2 = norm(sub(t, scale(e1, c)));
  return { pivot, e1, e2, a0: 0, a1: Math.acos(c), r0, r1 };
}

const PIVOTS: Record<SwingPlane, V3> = { fore: [0, 14.6, 0.6], back: [0, 14.4, 0.6], over: [-2.0, 18.2, 0.2] };

// 휘두름 평면: 측면 시점에서 평면이 정확히 옆으로 누워 보이지 않도록 기울기를 정했다
export function swingDir(plane: SwingPlane, a: number): V3 {
  if (plane === 'fore') return mApply(mRotZ(0.22), [Math.sin(a), 0, Math.cos(a)]);
  if (plane === 'back') return mApply(mRotZ(0.42), [Math.sin(a), -0.05, Math.cos(a)]);
  return mApply(mRotY(-0.55), [0, Math.cos(a), Math.sin(a)]);
}

function basePose(): HeroPose {
  return {
    pelvis: [0, 10.6, 0],
    lean: 0,
    sideLean: 0,
    twist: 0,
    headPitch: 0,
    headYaw: 0,
    footL: [2.3, 1.3, 0.3],
    footR: [-2.3, 1.3, 0.3],
    handL: [4.9, 11.9, 1.0],
    handR: [-5.0, 11.8, 1.8],
    blade: norm([-0.12, -0.72, 0.68]),
    wind: [0, -0.4, -0.5],
    phase: 0,
    squash: 1,
    lantern: 'hip',
    lanternSwing: 0,
  };
}

// ─────────────────────────────── 그리기 ───────────────────────────────

export function drawHero(rig: PixelRig, p: HeroPose): void {
  const Gm: M3 = p.roll ? mRotX(p.roll.angle) : mIdent();
  const Gp: V3 = p.roll ? p.roll.pivot : [0, 0, 0];
  const G = (v: V3): V3 => (p.roll ? add(Gp, mApply(Gm, sub(v, Gp))) : v);
  const U = mMul(mRotZ(p.sideLean), mMul(mRotY(p.twist), mRotX(p.lean)));
  const sq = p.squash;
  const isq = 1 / Math.sqrt(sq);
  const up = (rel: V3): V3 => G(add(p.pelvis, mApply(U, [rel[0] * isq, rel[1] * sq, rel[2] * isq])));
  const GU = mMul(Gm, U);
  const UA = mAxes(GU);
  const neckRel: V3 = [0, 8.7, 0.3];
  const H = mMul(mRotY(p.headYaw), mRotX(p.headPitch));
  const headPt = (r: V3): V3 => up(add(neckRel, mApply(H, r)));
  const GUH = mMul(GU, H);
  const HA = mAxes(GUH);
  const windW = mApply(Gm, p.wind);
  const ws = Math.min(1, len(p.wind) / 3.5);

  // ── 망토 (어깨에 걸린 짧은 망토, 안쪽은 어두운 안감)
  {
    const W = p.wind;
    const grid: V3[][] = [];
    const normals: V3[][] = [];
    const rowsDef = [
      { y: 8.3, x: 4.3, z: -2.9, wrap: 0.5 },
      { y: 3.2, x: 5.0, z: -3.6, wrap: 0.5 },
      { y: -2.6, x: 5.7, z: -4.6, wrap: 0.4 },
    ];
    for (let r = 0; r < 3; r++) {
      const row: V3[] = [];
      const nrow: V3[] = [];
      const k = r / 2;
      for (let c = 0; c < 5; c++) {
        const u = (c / 4) * 2 - 1;
        const d = rowsDef[r];
        const fl = Math.sin(p.phase + c * 1.25 + r * 0.7);
        const x = u * d.x + W[0] * k * 1.2 + fl * 0.25 * k;
        const y = d.y + W[1] * k * 1.5 + Math.abs(W[2]) * k * k * 0.85;
        const z = d.z - d.wrap * (1 - u * u) + W[2] * k * 1.35 + fl * 0.55 * k * (0.3 + ws);
        row.push(up([x, y, z]));
        const fold = c % 2 === 0 ? -0.45 : 0.45;
        nrow.push(mApply(GU, norm([fold + u * 0.5, 0.25, -1])));
      }
      grid.push(row);
      normals.push(nrow);
    }
    rig.cloth(grid, M.cloak, { backMat: M.lining, gridNormals: normals });
  }

  // ── 다리
  const hipRot = mRotY(p.twist * 0.4);
  const legs: Array<[V3, V3, number]> = [
    [mApply(hipRot, [2.0, -0.4, 0]), p.footL, 1],
    [mApply(hipRot, [-2.0, -0.4, 0]), p.footR, -1],
  ];
  for (const [hipRel, foot, side] of legs) {
    const hip = G(add(p.pelvis, hipRel));
    const ankle = G(foot);
    const pole = mApply(Gm, mApply(mRotY(p.twist * 0.3), [side * 0.25, 0.1, 1]));
    const knee = ik2(hip, ankle, 5.0, 4.6, pole);
    const fdir = mApply(Gm, mApply(mRotY(p.twist * 0.3), [side * 0.12, -0.15, 1]));
    const toe = add(ankle, scale(norm(fdir), 2.3));
    rig.capsule(hip, knee, 1.75, 1.5, M.pants);
    rig.capsule(knee, ankle, 1.45, 1.35, M.boot);
    rig.capsule(ankle, toe, 1.35, 1.05, M.boot);
  }

  // ── 몸통
  rig.ellipsoid(up([0, -0.9, -0.1]), [4.4, 2.5, 3.3], M.tunicDark, { axes: UA });
  rig.ellipsoid(up([0, 4.0, 0]), [3.9, 4.6, 2.8], M.tunic, { axes: UA });
  rig.ellipsoid(up([0, 1.4, 0]), [4.05, 0.95, 3.0], M.leather, { axes: UA });
  rig.ellipsoid(up([0, 8.7, 0.4]), [3.8, 1.5, 3.1], M.scarf, { axes: UA });
  for (const s of [1, -1]) rig.ellipsoid(up([s * 4.0, 8.1, -0.4]), [2.3, 1.8, 2.4], M.cloak, { axes: UA });

  // ── 머리와 두건
  const headC = headPt([0, 5.0, 1.1]);
  const hoodC = headPt([0, 5.7, -0.6]);
  const hoodR: V3 = [5.8, 5.7, 5.9];
  const opening = (d: V3) => d[2] > 0.2 && d[1] < 0.42 && d[1] > -0.8 && Math.abs(d[0]) < 0.78;
  const rim = (d: V3) => {
    const m = Math.min(d[2] - 0.2, 0.42 - d[1], d[1] + 0.8, 0.78 - Math.abs(d[0]));
    return m < 0 && m > -0.16 && d[2] > 0 ? 1 : 0;
  };
  rig.ellipsoid(hoodC, hoodR, M.cloak, { axes: HA, opening, innerMat: M.lining, rim });
  rig.sphere(headC, 4.6, M.skin, { axes: HA });
  rig.ellipsoid(headPt([0, 7.7, 3.4]), [3.7, 1.7, 2.1], M.hair, { axes: HA });
  for (const s of [1, -1]) rig.ellipsoid(headPt([s * 3.3, 5.1, 2.6]), [1.15, 2.3, 1.3], M.hair, { axes: HA });
  // 두건 꼬리
  const tipBase = headPt([0, 9.0, -4.6]);
  const tipDir = norm(add(mApply(GUH, [0, -0.35, -1]), scale(windW, 0.3)));
  rig.capsule(tipBase, add(tipBase, scale(tipDir, 4.2)), 1.9, 0.6, M.cloak);

  // ── 목도리 꼬리
  for (const [side, off] of [
    [-1, 0],
    [1, 1.7],
  ] as const) {
    let cur = up([side * 1.1, 8.4 - (side > 0 ? 0.6 : 0), -2.7]);
    const len0 = side > 0 ? 1.8 : 2.2;
    for (let k = 0; k < 4; k++) {
      const wave = Math.sin(p.phase + k * 1.4 + off);
      const d = norm([
        windW[0] + wave * 0.35,
        windW[1] - 0.6 - k * 0.12 * ws + Math.cos(p.phase * 1.1 + k * 1.2 + off) * (0.25 + 0.55 * ws),
        windW[2] - 0.15,
      ]);
      const nx = add(cur, scale(d, len0));
      rig.capsule(cur, nx, 1.0 - k * 0.1, 0.9 - k * 0.1, M.scarf);
      cur = nx;
    }
  }

  // ── 팔
  const shoulderL = up([4.0, 7.9, -0.1]);
  const shoulderR = up([-4.0, 7.9, -0.1]);
  const handL = G(p.handL);
  const handR = G(p.handR);
  for (const [sh, hd, side] of [
    [shoulderL, handL, 1],
    [shoulderR, handR, -1],
  ] as const) {
    const pole = mApply(GU, [side * 0.5, -0.2, -1]);
    const elbow = ik2(sh, hd, 3.9, 3.5, pole);
    rig.capsule(sh, elbow, 1.45, 1.3, M.tunic);
    rig.capsule(elbow, hd, 1.3, 1.2, M.leather);
    rig.sphere(hd, 1.3, M.skin);
  }

  // ── 검
  {
    const u = norm(mApply(Gm, p.blade));
    const hand = handR;
    const guard = add(hand, scale(u, 1.3));
    let w = cross(u, [0, 0, 1]);
    if (len(w) < 0.3) w = cross(u, [1, 0, 0]);
    w = norm(w);
    rig.line(add(hand, scale(u, -1.3)), guard, M.leather, { tone: 1 });
    rig.dot(add(hand, scale(u, -1.9)), M.brass, { tone: 4, surface: false });
    // 칼날: 기본 톤 + 광원 쪽 1px 하이라이트
    const b0 = add(guard, scale(u, 0.8));
    const b1 = add(guard, scale(u, 11.2));
    const bv0 = rig.toView(b0);
    const bv1 = rig.toView(b1);
    let px = -(bv1[1] - bv0[1]);
    let py = bv1[0] - bv0[0];
    const pl = Math.hypot(px, py) || 1;
    px /= pl;
    py /= pl;
    // 위/왼쪽을 향하도록
    if (px * -0.6 + py * 0.8 < 0) {
      px = -px;
      py = -py;
    }
    const off = rig.dirFromView([px, py, 0.05]);
    rig.line(b0, b1, M.steel, { tone: 3 });
    rig.line(add(b0, off), add(b1, scale(off, 0.6)), M.steel, { tone: 5 });
    rig.line(add(guard, scale(w, -2.2)), add(guard, scale(w, 2.2)), M.brass, { tone: 3 });
  }

  // ── 등불
  {
    const anchor = p.lantern === 'hip' ? up([3.7, -0.6, 1.4]) : add(handL, [0, -0.8, 0]);
    const sw = p.lanternSwing;
    const hang: V3 = mApply(Gm, [Math.sin(sw) * 2.2, -2.4 * Math.cos(sw), 0]);
    const c = add(anchor, hang);
    const axes = mAxes(mMul(Gm, mRotZ(sw)));
    rig.line(anchor, add(c, scale(axes[1], 1.5)), M.brass, { tone: 2 });
    rig.box(c, [1.25, 1.6, 1.25], axes, M.brass, { bevel: 0.5 });
    rig.box(c, [1.35, 0.85, 1.35], axes, M.glow, { bevel: 0 });
  }

  // ── 얼굴 장식 (보이는 표면일 때만)
  for (const s of [1, -1]) {
    const yaw = s * 0.38;
    const pitch = -0.06;
    const d: V3 = [Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)];
    const ep = add(headC, mApply(GUH, scale(d, 4.6)));
    rig.dot(ep, M.eye, { tone: 0, size: [1, 2], tol: 1.8 });
  }
  rig.dot(up([0, 1.4, 3.05]), M.brass, { tone: 4, tol: 1.5 });

  // ── 휘두름 잔상
  if (p.smear) drawSmear(rig, G, p.smear);
}

/** 구르기용 공 형태: 말린 등(망토), 두건, 웅크린 무릎과 손이 회전축(옆) 둘레로 돈다 */
function drawHeroBall(rig: PixelRig, th: number, phase: number): void {
  const C: V3 = [0, 7.0, 0];
  const Rm = mRotX(th);
  const ax = mAxes(Rm);
  const R = (v: V3): V3 => add(C, mApply(Rm, v));
  rig.ellipsoid(C, [5.2, 5.5, 5.5], M.cloak, { axes: ax });
  rig.sphere(R([0, 3.4, 3.2]), 4.2, M.cloak, { axes: ax });
  rig.ellipsoid(R([0, 3.0, 5.6]), [2.6, 1.2, 1.4], M.lining, { axes: ax });
  const tb = R([0, 6.4, 0.6]);
  rig.capsule(tb, add(tb, scale(norm(mApply(Rm, [0, 0.35, -1])), 3.0)), 1.6, 0.5, M.cloak);
  rig.ellipsoid(R([0, -1.0, 3.7]), [3.7, 2.9, 2.3], M.tunic, { axes: ax });
  rig.ellipsoid(R([0, -0.1, 4.3]), [3.9, 0.9, 1.9], M.leather, { axes: ax });
  for (const s of [1, -1]) {
    const knee = R([s * 2.0, -2.7, 4.5]);
    const ankle = R([s * 2.1, -5.1, 2.4]);
    rig.capsule(knee, ankle, 1.6, 1.4, M.pants);
    rig.capsule(ankle, R([s * 2.1, -5.3, 0.2]), 1.4, 1.2, M.boot);
    rig.sphere(R([s * 2.8, -1.2, 5.3]), 1.2, M.skin);
  }
  rig.ellipsoid(R([0, 2.2, 2.4]), [3.4, 1.3, 2.6], M.scarf, { axes: ax });
  // 목도리 꼬리: 회전과 관계없이 뒤로 흩날린다
  let cur = R([0, 3.2, -2.0]);
  for (let k = 0; k < 3; k++) {
    const d = norm([Math.sin(phase + k) * 0.4, 0.25 + Math.cos(phase * 1.3 + k) * 0.35, -1]);
    const nx = add(cur, scale(d, 2.2));
    rig.capsule(cur, nx, 0.95 - k * 0.1, 0.85 - k * 0.1, M.scarf);
    cur = nx;
  }
  // 검은 옆구리에 붙여 회전축 방향으로
  const g0 = add(C, [-4.4, 0.8, 0.6]);
  rig.line(g0, add(C, [-9.8, 1.2, 1.0]), M.steel, { tone: 3 });
  rig.line(add(g0, [0, 1, 0]), add(C, [-9.6, 2.1, 1.0]), M.steel, { tone: 5 });
  rig.line(add(g0, [0.2, -1.6, 0]), add(g0, [0.2, 2.2, 0]), M.brass, { tone: 3 });
  const lc = R([3.6, -2.4, 3.2]);
  rig.box(lc, [1.2, 1.5, 1.2], ax, M.brass, { bevel: 0.5 });
  rig.box(lc, [1.3, 0.8, 1.3], ax, M.glow, { bevel: 0 });
}

function drawSmear(rig: PixelRig, G: (v: V3) => V3, s: Smear): void {
  const N = 10;
  const pts = (a: number, r: number): V3 =>
    G(add(s.pivot, add(scale(s.e1, Math.cos(a) * r), scale(s.e2, Math.sin(a) * r))));
  for (let i = 0; i < N; i++) {
    const t0 = i / N;
    const t1 = (i + 1) / N;
    const a0 = s.a0 + (s.a1 - s.a0) * t0;
    const a1 = s.a0 + (s.a1 - s.a0) * t1;
    // 앞쪽(끝 각도)으로 갈수록 두꺼워지는 초승달
    const th0 = Math.pow(t0, 0.8);
    const th1 = Math.pow(t1, 0.8);
    const rin0 = s.r1 - (s.r1 - s.r0) * th0;
    const rin1 = s.r1 - (s.r1 - s.r0) * th1;
    const rmid0 = s.r1 - 1.6 - (s.r1 - s.r0) * 0.25 * th0;
    const rmid1 = s.r1 - 1.6 - (s.r1 - s.r0) * 0.25 * th1;
    const rout = s.r1 + 0.6;
    const tail = t1 < 0.35;
    rig.poly([pts(a0, rin0), pts(a1, rin1), pts(a1, Math.max(rin1, rmid1)), pts(a0, Math.max(rin0, rmid0))], tail ? M.smearTail : M.smear);
    rig.poly([pts(a0, Math.max(rin0, rmid0)), pts(a1, Math.max(rin1, rmid1)), pts(a1, rout), pts(a0, rout)], tail ? M.smear : M.smearCore);
  }
}

// ─────────────────────────────── 애니메이션 포즈 ───────────────────────────────

function footCycle(q: number, S: number, lift: number): [number, number] {
  q = ((q % 1) + 1) % 1;
  if (q < 0.5) {
    const u = q / 0.5;
    return [S - 2 * S * u, 0];
  }
  const u = (q - 0.5) / 0.5;
  return [-S + 2 * S * (0.5 - 0.5 * Math.cos(Math.PI * u)), lift * Math.sin(Math.PI * u)];
}

function idlePose(f: number): HeroPose {
  const p = basePose();
  const b = [0, 0.35, 0.85, 0.35][f];
  const ph = (f / 4) * Math.PI * 2;
  p.pelvis = [0, 10.6 - b, 0];
  p.handR = [-5.0, 11.8 - b * 0.8, 1.8];
  p.handL = [4.9, 11.9 - b * 0.8, 1.0];
  p.wind = [0.12 * Math.sin(ph), -0.4, -0.55 - 0.25 * Math.cos(ph)];
  p.phase = ph;
  p.lanternSwing = 0.1 * Math.sin(ph);
  return p;
}

export const RUN_STRIDE = 4.2;

function runPose(f: number): HeroPose {
  const p = basePose();
  const t = f / 8;
  const [zl, yl] = footCycle(t, RUN_STRIDE, 2.4);
  const [zr, yr] = footCycle(t + 0.5, RUN_STRIDE, 2.4);
  p.footL = [2.1, 1.3 + yl, zl + 0.6];
  p.footR = [-2.1, 1.3 + yr, zr + 0.6];
  p.pelvis = [0, 10.2 + 0.55 * Math.cos(t * Math.PI * 4), 0.6];
  p.lean = 0.2;
  p.twist = 0.14 * Math.sin(t * Math.PI * 2);
  p.handL = [4.8, 11.6, 1.6 - 2.8 * Math.cos(t * Math.PI * 2)];
  p.handR = [-4.6, 12.4, 1.2 + 1.6 * Math.cos(t * Math.PI * 2)];
  p.blade = norm([-0.25, -0.3, -0.9]);
  p.wind = [0, 0.4, -3.6];
  p.phase = t * Math.PI * 4;
  p.headPitch = 0.08;
  p.lanternSwing = 0.35 * Math.sin(t * Math.PI * 4);
  return p;
}

function swingPose(plane: SwingPlane, a: number, p: HeroPose, reach = 5.4): void {
  const d = swingDir(plane, a);
  p.handR = add(PIVOTS[plane], scale(d, reach));
  p.blade = norm(add(d, [0, -0.1, 0]));
}

function attack1Pose(f: number): HeroPose {
  const p = basePose();
  const ang = [-2.2, -2.45, 0.95, 1.4, 1.15][f];
  const tw = [-0.4, -0.5, 0.32, 0.45, 0.2][f];
  p.twist = tw;
  p.lean = [-0.04, -0.08, 0.16, 0.12, 0.05][f];
  p.pelvis = [0, [10.5, 10.4, 10.0, 10.1, 10.4][f], [0, -0.3, 1.2, 1.5, 1.0][f]];
  if (f >= 2) {
    p.footL = [2.3, 1.3, 2.3];
    p.footR = [-2.3, 1.3, -1.2];
  } else {
    p.footL = [2.3, 1.3, 0.9];
    p.footR = [-2.3, 1.3, -0.6];
  }
  swingPose('fore', ang, p);
  p.handL = f < 2 ? [4.4, 13.8, 3.2] : [5.6, 12.8, -2.0];
  p.wind = f === 2 ? [2.5, 0.3, -1.5] : f === 3 ? [3.0, 0.2, -1.0] : [-0.6, -0.3, -0.8];
  p.phase = f * 1.3;
  p.lanternSwing = [0.1, 0.2, -0.3, -0.4, -0.2][f];
  if (f === 2) p.smear = planeSmear('fore', -1.8, 0.95, 6, 16.5);
  return p;
}

function attack2Pose(f: number): HeroPose {
  const p = basePose();
  const ang = [1.8, 2.0, -0.95, -1.45, -1.15][f];
  p.twist = [0.42, 0.52, -0.35, -0.5, -0.22][f];
  p.lean = [-0.04, -0.06, 0.16, 0.12, 0.05][f];
  p.pelvis = [0, [10.5, 10.4, 10.0, 10.1, 10.4][f], [0.8, 0.6, 1.8, 2.0, 1.5][f]];
  if (f >= 2) {
    p.footL = [2.3, 1.3, -0.8];
    p.footR = [-2.3, 1.3, 2.5];
  } else {
    p.footL = [2.3, 1.3, 2.0];
    p.footR = [-2.3, 1.3, -0.8];
  }
  swingPose('back', ang, p);
  p.handL = f < 2 ? [5.2, 12.5, -1.6] : [4.6, 14.0, 3.0];
  p.wind = f === 2 ? [-2.5, 0.3, -1.5] : f === 3 ? [-3.0, 0.2, -1.0] : [0.6, -0.3, -0.8];
  p.phase = f * 1.3 + 2;
  p.lanternSwing = [-0.2, -0.3, 0.3, 0.4, 0.2][f];
  if (f === 2) p.smear = planeSmear('back', 1.75, -0.95, 6, 16.5);
  return p;
}

// 강공격: 오른 어깨 위로 크게 들어 올렸다가(정면에서도 보이도록) 앞쪽 대각선으로 내려친다
const A3_HANDS: V3[] = [
  [-5.3, 19.2, -0.6],
  [-5.6, 20.4, -1.3],
  [-0.4, 12.4, 5.6],
  [0.2, 10.4, 6.0],
  [-3.0, 12.0, 3.4],
];
const A3_BLADES: V3[] = [
  norm([-0.25, 0.85, -0.45]),
  norm([-0.32, 0.8, -0.55]),
  norm([0.28, -0.5, 0.82]),
  norm([0.22, -0.75, 0.62]),
  norm([-0.2, -0.7, 0.6]),
];

function attack3Pose(f: number, dir: Dir): HeroPose {
  const p = basePose();
  p.lean = [-0.2, -0.3, 0.3, 0.42, 0.15][f];
  p.pelvis = [0, [10.8, 11.1, 9.8, 9.0, 10.0][f], [0, -0.4, 1.8, 2.3, 1.6][f]];
  p.squash = [1, 1.03, 0.97, 0.92, 1][f];
  p.headPitch = [-0.2, -0.25, 0.15, 0.25, 0.1][f];
  if (f >= 2) {
    p.footL = [2.4, 1.3, 3.2];
    p.footR = [-2.4, 1.3, -1.6];
  } else {
    p.footL = [2.3, 1.3, 1.0];
    p.footR = [-2.3, 1.3, -0.8];
  }
  p.handR = A3_HANDS[f];
  p.blade = A3_BLADES[f];
  const frontal = dir !== 'side';
  if (frontal && f >= 2 && f <= 3) {
    // 정면/후면에서는 시선 방향으로 내려치는 궤적이 납작해지므로, 검을 든 쪽 옆으로 크게 도는 궤적으로 표현
    p.handR = f === 2 ? [-3.6, 12.6, 4.2] : [-2.8, 10.6, 4.8];
    p.blade = f === 2 ? norm([-0.32, -0.9, 0.3]) : norm([-0.2, -0.85, 0.5]);
  }
  // 두 손으로 자루를 잡는다
  p.handL = add(add(p.handR, scale(p.blade, -1.3)), [1.1, -0.2, 0.3]);
  p.wind = f >= 2 ? [0, 1.2, -2.8] : [0, -0.5, 0.6];
  p.phase = f * 1.1;
  p.lanternSwing = [0.2, 0.3, -0.5, -0.6, -0.3][f];
  if (f === 2) {
    if (frontal) {
      const piv: V3 = [-1.0, 15.5, 3.2];
      const tip = add(p.handR, scale(p.blade, 12.5));
      p.smear = arcSmear(piv, [0.12, 1, 0.05], sub(tip, piv), 5.5, 15.5);
    } else {
      p.smear = arcSmear([-2.4, 17.0, 0.6], [-0.3, 0.82, -0.5], A3_BLADES[2], 5.5, 16.5);
    }
  }
  return p;
}

function dodgePose(f: number): HeroPose {
  const p = basePose();
  if (f === 0 || f === 5) {
    const back = f === 5;
    p.pelvis = [0, back ? 9.0 : 8.6, back ? 0 : 0.8];
    p.lean = back ? 0.3 : 0.62;
    p.headPitch = back ? 0.1 : 0.35;
    p.footL = back ? [2.4, 1.3, 1.6] : [2.2, 1.3, 1.8];
    p.footR = back ? [-2.4, 1.3, -1.4] : [-2.2, 1.3, -1.8];
    p.handL = back ? [6.2, 12.5, 0.5] : [3.4, 10.5, 5.0];
    p.handR = back ? [-6.0, 12.0, 1.0] : [-3.4, 10.8, 4.6];
    p.blade = norm([-0.2, -0.2, -1]);
    p.wind = back ? [0, 0.6, 1.2] : [0, 0.5, -2.5];
    p.phase = f;
    return p;
  }
  // 몸을 작은 공처럼 말아 앞으로 구른다 (전용 '공' 형태로 그려 어느 방향에서도 실루엣이 단단하게)
  p.ball = [0.9, 2.45, 4.0, 5.5][f - 1];
  p.phase = f * 1.7;
  return p;
}

function hurtPose(f: number): HeroPose {
  const p = basePose();
  const k = f === 0 ? 1 : 0.45;
  p.lean = -0.36 * k;
  p.headPitch = -0.4 * k;
  p.pelvis = [0, 10.4, -0.8 * k];
  p.handR = [-6.4, 13.5 + 1.5 * k, -1.0];
  p.handL = [6.4, 13.8 + 1.5 * k, -1.0];
  p.blade = norm([-0.6, 0.3, 0.6]);
  p.footL = [2.4, 1.3, 0.8];
  p.footR = [-2.4, 1.3, -0.4];
  p.squash = f === 0 ? 0.95 : 1;
  p.wind = [0, 0.3, 1.2 * k];
  p.phase = f * 2;
  p.lanternSwing = -0.5 * k;
  return p;
}

function deathPose(f: number, dir: Dir): HeroPose {
  const p = basePose();
  const fallSign = dir === 'down' ? -1 : 1;
  if (f === 0) {
    const h = hurtPose(0);
    h.lean = -0.42;
    return h;
  }
  p.pelvis = [0, [0, 8.2, 7.6, 7.2, 6.9, 6.9][f], -0.4];
  p.lean = [0, 0.35, 0.3, 0.25, 0.1, 0.05][f];
  p.headPitch = [0, 0.5, 0.4, 0.3, 0.2, 0.2][f];
  p.footL = [2.4, 1.3, 1.2];
  p.footR = [-2.4, 1.3, -0.4];
  p.handL = [5.2, 7.0, 1.5];
  p.handR = [-5.2, 7.2, 2.0];
  p.blade = norm([-0.4, -0.8, 0.4]);
  p.wind = [0, -1, 0];
  p.phase = f;
  const roll = [0, 0, 0.45, 1.0, 1.42, 1.57][f];
  p.viewRoll = roll * fallSign;
  // 쓰러진 몸이 프레임 중앙에 오도록 이동
  p.viewShift = [fallSign * 10 * (roll / 1.57), 0];
  p.lanternSwing = roll * 0.8 * fallSign;
  return p;
}

function raisePose(f: number): HeroPose {
  const p = basePose();
  p.lean = -0.1;
  p.headPitch = -0.28;
  p.handL = [3.4, 25.0 + f * 0.4, 3.2];
  p.handR = [-5.0, 11.8, 1.8];
  p.lantern = 'hand';
  p.lanternSwing = f === 0 ? 0.08 : -0.08;
  p.wind = [0.2, 0.4, -0.9];
  p.phase = f * 2;
  return p;
}

// ─────────────────────────────── 시트 ───────────────────────────────

interface AnimDef {
  name: string;
  frames: number;
  durations: number[];
  loop: boolean;
  pose: (f: number, dir: Dir) => HeroPose;
}

export const HERO_ANIMS: AnimDef[] = [
  { name: 'idle', frames: 4, durations: [220, 200, 240, 200], loop: true, pose: (f) => idlePose(f) },
  { name: 'run', frames: 8, durations: Array(8).fill(70), loop: true, pose: (f) => runPose(f) },
  { name: 'attack1', frames: 5, durations: [70, 55, 50, 80, 110], loop: false, pose: (f) => attack1Pose(f) },
  { name: 'attack2', frames: 5, durations: [65, 50, 50, 80, 110], loop: false, pose: (f) => attack2Pose(f) },
  { name: 'attack3', frames: 5, durations: [120, 140, 55, 120, 160], loop: false, pose: (f, d) => attack3Pose(f, d) },
  { name: 'dodge', frames: 6, durations: [40, 55, 55, 55, 55, 85], loop: false, pose: (f) => dodgePose(f) },
  { name: 'hurt', frames: 2, durations: [90, 160], loop: false, pose: (f) => hurtPose(f) },
  { name: 'death', frames: 6, durations: [130, 150, 110, 100, 130, 1200], loop: false, pose: (f, d) => deathPose(f, d) },
  { name: 'raise', frames: 2, durations: [320, 320], loop: true, pose: (f) => raisePose(f) },
];

export function renderHeroFrame(pose: HeroPose, dir: Dir): FrameImage {
  const { w, h, ox, oy } = HERO_FRAME;
  if (pose.roll || pose.ball !== undefined) {
    // 구르기: 여유 있는 캔버스에 그린 뒤 가장 낮은 픽셀이 지면선에 닿도록 잘라낸다
    const pad = 24;
    const rig = new PixelRig(w, h + pad * 2, ox, oy + pad);
    rig.setView(DIR_YAW[dir], SPRITE_PITCH);
    if (pose.ball !== undefined) drawHeroBall(rig, pose.ball, pose.phase);
    else drawHero(rig, pose);
    const img = rig.resolve();
    let maxJ = 0;
    for (let j = 0; j < h + pad * 2; j++) for (let i = 0; i < w; i++) if (img.color[(j * w + i) * 4 + 3]) maxJ = j;
    const start = maxJ - (oy - 1);
    return cropRows(img, Math.max(0, Math.min(pad * 2, start)), h);
  }
  const rig = new PixelRig(w, h, ox, oy);
  rig.setView(DIR_YAW[dir], SPRITE_PITCH, pose.viewRoll ?? 0, [0, 5.5], pose.viewShift ?? [0, 0]);
  drawHero(rig, pose);
  return rig.resolve();
}

function cropRows(img: FrameImage, start: number, h: number): FrameImage {
  const w = img.w;
  const color = new Uint8Array(w * h * 4);
  const normal = new Uint8Array(w * h * 4);
  for (let j = 0; j < h; j++) {
    const sj = j + start;
    for (let i = 0; i < w; i++) {
      const d = (j * w + i) * 4;
      if (sj < 0 || sj >= img.h) {
        normal[d] = 128;
        normal[d + 1] = 128;
        normal[d + 2] = 255;
        continue;
      }
      const s = (sj * w + i) * 4;
      for (let c = 0; c < 4; c++) {
        color[d + c] = img.color[s + c];
        normal[d + c] = img.normal[s + c];
      }
    }
  }
  return { w, h, color, normal };
}

export function buildHeroSheet(): SheetData {
  const entries: SheetEntry[] = [];
  for (const a of HERO_ANIMS) {
    for (const dir of DIRS) {
      const frames: FrameImage[] = [];
      for (let f = 0; f < a.frames; f++) frames.push(renderHeroFrame(a.pose(f, dir), dir));
      entries.push({ key: `${a.name}_${dir}`, frames, durations: a.durations, loop: a.loop });
    }
  }
  return buildSheet('hero', HERO_FRAME.w, HERO_FRAME.h, HERO_FRAME.ox, HERO_FRAME.oy, entries, 16);
}
