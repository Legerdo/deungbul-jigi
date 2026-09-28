// 스프라이트 리그용 작은 벡터 수학 (three.js에 의존하지 않아 Node 에셋 내보내기에서도 동작)

export type V3 = [number, number, number];

export const v3 = (x: number, y: number, z: number): V3 => [x, y, z];
export const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a: V3, b: V3): V3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
export const len = (a: V3): number => Math.hypot(a[0], a[1], a[2]);
export const norm = (a: V3): V3 => {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
export const lerp3 = (a: V3, b: V3, t: number): V3 => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
export const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);

/** y축 회전 (정면 +z가 +x 쪽으로 돈다) */
export function rotY(p: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c];
}

/** x축 회전 (양수면 위쪽(+y)이 앞(+z)으로 기운다) */
export function rotX(p: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c];
}

/** z축 회전 (양수면 +x가 +y 쪽으로) */
export function rotZ(p: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c - p[1] * s, p[0] * s + p[1] * c, p[2]];
}

export function rotAround(p: V3, pivot: V3, f: (q: V3) => V3): V3 {
  return add(pivot, f(sub(p, pivot)));
}

/**
 * 두 뼈 IK: 뿌리 a에서 목표 t로, 길이 l1, l2, 무릎/팔꿈치가 향할 방향 pole.
 * 중간 관절 위치를 반환한다.
 */
export function ik2(a: V3, t: V3, l1: number, l2: number, pole: V3): V3 {
  const d0 = sub(t, a);
  let d = len(d0);
  const minD = Math.abs(l1 - l2) + 0.01;
  const maxD = l1 + l2 - 0.01;
  d = clamp(d, minD, maxD);
  const dir = norm(d0);
  const cosA = clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
  const sinA = Math.sqrt(1 - cosA * cosA);
  let perp = sub(pole, scale(dir, dot(pole, dir)));
  if (len(perp) < 1e-4) perp = [0, 0, 1];
  perp = norm(perp);
  return add(a, add(scale(dir, l1 * cosA), scale(perp, l1 * sinA)));
}

// 3x3 회전 행렬 (행 우선)
export type M3 = number[];
export const mIdent = (): M3 => [1, 0, 0, 0, 1, 0, 0, 0, 1];
export function mRotX(a: number): M3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [1, 0, 0, 0, c, -s, 0, s, c];
}
export function mRotY(a: number): M3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [c, 0, s, 0, 1, 0, -s, 0, c];
}
export function mRotZ(a: number): M3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [c, -s, 0, s, c, 0, 0, 0, 1];
}
export function mMul(a: M3, b: M3): M3 {
  const r = new Array<number>(9);
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) r[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j];
  return r;
}
export function mApply(m: M3, v: V3): V3 {
  return [
    m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
    m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
    m[6] * v[0] + m[7] * v[1] + m[8] * v[2],
  ];
}
export function mAxes(m: M3): [V3, V3, V3] {
  return [mApply(m, [1, 0, 0]), mApply(m, [0, 1, 0]), mApply(m, [0, 0, 1])];
}

export const smoothstep = (a: number, b: number, x: number): number => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
