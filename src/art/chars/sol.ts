// 안내 NPC '솔' — 마을의 늙은 등불지기. 넓은 삿갓, 흰 수염, 자줏빛 두루마기, 지팡이 끝에 매단 청사초롱.
// 리그 공간: 텍셀 단위, 발 중심 원점, +y 위, +z 정면, 캐릭터의 오른쪽 = -x.
import { P } from '../palette.ts';
import type { FrameImage, Mat, PixelRig } from '../rig.ts';
import { DIRS, type Dir, type SheetData } from '../sheet.ts';
import { type V3, add, ik2, mApply, mAxes, mMul, mRotX, mRotY, mRotZ, norm, scale, sub } from '../vec.ts';
import { buildCharSheet, type CharAnim, type FrameSpec, renderFrame } from './util.ts';

export const SOL_FRAME: FrameSpec = { w: 48, h: 56, ox: 24, oy: 53 };

const M: Record<string, Mat> = {
  robe: { ramp: P.plum, tones: [1, 2, 3, 4] },
  robeDark: { ramp: P.plum, tones: [0, 1, 2, 3] },
  inner: { ramp: P.linen, tones: [2, 3, 4, 4] },
  sash: { ramp: P.mustard, tones: [1, 2, 3, 4] },
  skin: { ramp: P.skin, tones: [1, 2, 3, 4] },
  hair: { ramp: P.whiteHair, tones: [1, 2, 3, 4] },
  brow: { ramp: P.whiteHair, tones: [2, 3, 4, 4] },
  eye: { ramp: P.hair, tones: [0, 0, 0, 0], flat: true },
  hat: { ramp: P.sand, tones: [0, 1, 2, 3], speckle: { seed: 5, scale: 0.9, amount: 0.16 } },
  hatBand: { ramp: P.indigo, tones: [1, 2, 3, 4] },
  staff: { ramp: P.wood, tones: [1, 2, 3, 4] },
  shoe: { ramp: P.woodDark, tones: [0, 1, 2, 3] },
  silk: { ramp: P.rose, tones: [2, 3, 4, 4], emissive: 0.55 },
  silkBand: { ramp: P.indigo, tones: [2, 3, 4, 4] },
  tassel: { ramp: P.mustard, tones: [2, 3, 3, 4] },
  glow: { ramp: P.ember, tones: [3, 4, 4, 4], emissive: 1, flat: true, inner: false, receive: false },
};

interface SolPose {
  bob: number;
  lean: number;
  headPitch: number;
  headYaw: number;
  handL: V3;
  handR: V3;
  swing: number;
  phase: number;
}

function base(): SolPose {
  return { bob: 0, lean: 0.22, headPitch: 0.05, headYaw: 0, handL: [5.8, 12.6, 3.4], handR: [-2.2, 10.6, 4.4], swing: 0, phase: 0 };
}

export function drawSol(rig: PixelRig, p: SolPose): void {
  const U = mRotX(p.lean);
  const UA = mAxes(U);
  const waist: V3 = [0, 9.6 - p.bob, 0.2];
  const up = (r: V3): V3 => add(waist, mApply(U, r));

  // ── 두루마기 아랫단과 신발
  rig.ellipsoid([0, 4.4, 0.2], [5.7, 4.8, 4.7], M.robe);
  rig.ellipsoid([0, 8.4 - p.bob * 0.5, 0.3], [5.0, 4.0, 4.0], M.robe);
  rig.line([0.8, 1.2, 4.7], [0.5, 10.5, 4.1], M.robeDark, { tone: 0 });
  for (const s of [1, -1]) rig.capsule([s * 2.0, 0.9, 2.8], [s * 2.1, 0.8, 4.6], 1.25, 1.1, M.shoe);

  // ── 몸통 (앞으로 굽은 등)
  rig.ellipsoid(up([0, 3.4, -0.2]), [4.5, 4.4, 3.6], M.robe, { axes: UA });
  rig.ellipsoid(up([0, 5.2, -2.0]), [3.8, 3.0, 2.6], M.robe, { axes: UA });
  rig.ellipsoid(up([0, 0.6, 0.2]), [4.9, 1.0, 4.0], M.sash, { axes: UA });
  rig.sphere(up([1.7, 0.6, 3.9]), 1.1, M.sash);
  rig.capsule(up([1.9, 0.2, 4.1]), [2.6 + Math.sin(p.phase) * 0.35, 4.8, 5.1], 0.9, 0.7, M.sash);
  rig.ellipsoid(up([0, 6.6, 2.3]), [2.1, 1.6, 1.3], M.inner, { axes: UA });

  // ── 머리: 흰 머리, 수염, 눈썹, 삿갓
  const neck = up([0, 7.6, 0.8]);
  const H = mMul(U, mMul(mRotY(p.headYaw), mRotX(p.headPitch)));
  const HA = mAxes(H);
  const hp = (r: V3): V3 => add(neck, mApply(H, r));
  rig.ellipsoid(hp([0, 4.6, -1.5]), [4.6, 3.8, 3.8], M.hair, { axes: HA });
  const headC = hp([0, 4.2, 1.2]);
  rig.sphere(headC, 4.3, M.skin, { axes: HA });
  const bw = Math.sin(p.phase * 1.3) * 0.35;
  rig.ellipsoid(hp([bw, 0.9, 4.1]), [2.9, 3.5, 1.8], M.hair, { axes: HA });
  rig.capsule(hp([bw, -1.8, 4.6]), hp([bw * 2.2, -4.4, 4.9]), 1.5, 0.55, M.hair);
  rig.ellipsoid(hp([0, 2.6, 5.35]), [2.7, 0.8, 0.8], M.hair, { axes: HA });
  for (const s of [1, -1]) rig.ellipsoid(hp([s * 1.9, 5.4, 4.9]), [1.45, 0.7, 0.8], M.brow, { axes: HA });
  for (const s of [1, -1]) rig.dot(hp([s * 1.8 - 0.5, 4.5, 5.4]), M.eye, { size: [2, 1], tol: 2 });
  rig.sphere(hp([0, 3.5, 5.35]), 1.0, M.skin);
  // 삿갓은 뒤로 젖혀 써서 눈썹과 눈이 보이게
  const hatA = mAxes(mMul(H, mRotX(-0.34)));
  const hatC = hp([0, 9.1, -0.4]);
  const hatP = (r: V3): V3 => add(hatC, mApply(mMul(H, mRotX(-0.34)), r));
  rig.ellipsoid(hatP([0, 0, 0]), [8.6, 1.15, 8.0], M.hat, { axes: hatA });
  rig.ellipsoid(hatP([0, 1.5, 0]), [3.7, 2.3, 3.5], M.hat, { axes: hatA });
  rig.ellipsoid(hatP([0, 0.7, 0]), [3.9, 0.7, 3.7], M.hatBand, { axes: hatA });

  // ── 팔 (넓은 소매)
  const arms: Array<[V3, V3, number]> = [
    [up([4.3, 5.3, 0.3]), p.handL, 1],
    [up([-4.3, 5.3, 0.3]), p.handR, -1],
  ];
  for (const [sh, hand, side] of arms) {
    const elbow = ik2(sh, hand, 4.3, 3.9, [side * 0.6, -0.4, -0.5]);
    const d = norm(sub(hand, elbow));
    const cuff = add(hand, scale(d, -1.1));
    rig.capsule(sh, elbow, 1.9, 2.0, M.robe);
    rig.capsule(elbow, cuff, 2.0, 2.4, M.robe);
    rig.sphere(hand, 1.3, M.skin);
  }

  // ── 지팡이와 청사초롱
  const hand = p.handL;
  const bot: V3 = [hand[0] + 0.5, 0, hand[2] + 0.5];
  const top: V3 = [hand[0] - 0.2, 31, hand[2] - 0.5];
  rig.capsule(bot, top, 0.75, 0.62, M.staff);
  const h1 = add(top, [3.0, 1.8, 0]);
  const h2 = add(h1, [2.7, -1.2, 0]);
  rig.capsule(top, h1, 0.62, 0.6, M.staff);
  rig.capsule(h1, h2, 0.6, 0.55, M.staff);
  const sw = p.swing;
  const LA = mAxes(mRotZ(sw));
  const hang = add(h2, [0, -0.5, 0]);
  const c = add(hang, [Math.sin(sw) * 6.4, -Math.cos(sw) * 6.4, 0]);
  rig.line(hang, add(c, scale(LA[1], 3.4)), M.tassel, { tone: 1 });
  // 청사초롱: 붉은 비단 몸통에 위아래 푸른 단, 속에서 불빛이 번진다
  rig.box(add(c, scale(LA[1], 3.3)), [2.4, 0.5, 2.4], LA, M.silkBand, { bevel: 0.4 });
  rig.ellipsoid(c, [2.9, 3.2, 2.9], M.silk, { axes: LA });
  rig.box(add(c, scale(LA[1], -3.3)), [2.4, 0.5, 2.4], LA, M.silkBand, { bevel: 0.4 });
  rig.ellipsoid(add(c, mApply(mRotZ(sw), [0.3, 0.3, 1.9])), [1.4, 1.9, 1.2], M.glow, { axes: LA });
  rig.line(add(c, scale(LA[1], -3.8)), add(c, add(scale(LA[1], -6.0), [Math.sin(sw) * 0.8, 0, 0])), M.tassel, { tone: 2 });
}

function idle(f: number): SolPose {
  const p = base();
  p.bob = [0, 0.3, 0.6, 0.3][f];
  p.swing = [0.08, 0.03, -0.06, -0.02][f];
  p.phase = (f / 4) * Math.PI * 2;
  p.handR = [-2.2, 10.6 - p.bob * 0.6, 4.4];
  p.handL = [5.8, 12.6 - p.bob * 0.5, 3.4];
  return p;
}

function talk(f: number): SolPose {
  const p = base();
  p.bob = [0, 0.4, 0.1, 0.5][f];
  p.headPitch = [0.02, -0.12, 0.06, -0.08][f];
  p.headYaw = [0, 0.06, -0.04, 0.03][f];
  p.lean = 0.18;
  p.handR = [[-5.6, 15.4, 5.2] as V3, [-5.2, 16.4, 5.6] as V3, [-5.8, 15.0, 5.0] as V3, [-5.0, 16.0, 5.4] as V3][f];
  p.swing = [0.1, -0.04, 0.06, -0.08][f];
  p.phase = f * 1.7;
  return p;
}

export const SOL_ANIMS: CharAnim<SolPose>[] = [
  { name: 'idle', frames: 4, durations: [280, 240, 300, 240], loop: true, pose: (f) => idle(f) },
  { name: 'talk', frames: 4, durations: [150, 150, 150, 150], loop: true, pose: (f) => talk(f) },
];

export function renderSolFrame(p: SolPose, dir: Dir): FrameImage {
  return renderFrame(SOL_FRAME, dir, (rig) => drawSol(rig, p));
}

export function buildSolSheet(): SheetData {
  return buildCharSheet('sol', SOL_FRAME, DIRS, SOL_ANIMS, renderSolFrame);
}
