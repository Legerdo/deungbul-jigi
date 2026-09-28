// 픽셀 리그 래스터라이저.
// 캐릭터를 텍셀 단위의 작은 3D 파트(타원체·캡슐·상자·폴리곤·선)로 정의하고,
// 픽셀 중심마다 직교 광선을 쏘아 z-버퍼로 합성한 뒤
//  1) 고정 광원 기준 셀 음영(램프 단계 양자화)
//  2) 화면공간 그림자(머리 아래, 팔 아래 등)
//  3) 고립 픽셀 정리
//  4) 파트 사이 내부 경계선, 램프별 선택적 외곽선
// 을 적용해 손으로 찍은 듯한 픽셀 덩어리를 만든다. 동시에 노멀/발광 맵을 기록한다.
// 한 번 정의한 포즈를 정면·측면·후면 시점으로 렌더링하므로 4방향의 형태가 일관된다.

import type { Ramp, RGBA } from './palette.ts';
import { valueNoise3 } from './rng.ts';
import { type V3, cross, dot, norm, sub } from './vec.ts';

export interface AltMat {
  mat: Mat;
  scale: number;
  threshold: number;
  /** 노멀 y가 이 값 이상인 면(윗면)에만 적용 */
  upOnly?: number;
  seed: number;
}

export interface Mat {
  ramp: Ramp;
  /** 음영 단계별 램프 인덱스 [그림자, 기본, 밝음, 하이라이트?] */
  tones: number[];
  /** 음영 편향 (+면 밝은 쪽으로) */
  bias?: number;
  emissive?: number;
  /** 실루엣 외곽선 생성 여부 (기본 true) */
  outline?: boolean;
  /** 내부 경계선으로 어두워질 수 있는지 (기본 true) */
  inner?: boolean;
  /** 조명을 무시하고 tones[1]로 칠함 */
  flat?: boolean;
  /** 화면공간 그림자를 받는지 (기본 true) */
  receive?: boolean;
  /** 3D 노이즈로 다른 재질(이끼 등)을 섞음 */
  alt?: AltMat;
  /** 3D 노이즈로 톤을 ±1 흔들어 질감 표현 */
  speckle?: { seed: number; scale: number; amount: number };
  /** 디더 투명: 리그 y 좌표에 따라 커버리지(0..1)를 반환 */
  coverage?: (p: V3) => number;
}

export interface DrawOpts {
  part?: number;
  bias?: number;
  /** 고정 램프 인덱스 */
  tone?: number;
  emissive?: number;
}

export interface EllipsoidOpts extends DrawOpts {
  /** 로컬 축 (기본 단위 축) */
  axes?: [V3, V3, V3];
  /** 껍질의 개구부 판정 (로컬 정규화 방향) — 참이면 뒷면(안감)을 그린다 */
  opening?: (d: V3) => boolean;
  innerMat?: Mat;
  /** 개구부 가장자리 밝힘 */
  rim?: (d: V3) => number;
}

export interface PolyOpts extends DrawOpts {
  backMat?: Mat;
  /** 정점별 노멀 (리그 공간) */
  normals?: V3[];
}

export interface LineOpts extends DrawOpts {
  normal?: V3;
  width?: number;
}

export interface FrameImage {
  w: number;
  h: number;
  color: Uint8Array;
  normal: Uint8Array;
}

// 화면(뷰) 기준 고정 광원: 왼쪽 위 앞
const L: V3 = norm([-0.55, 0.7, 0.55]);
// 화면에서 광원 쪽 스텝 (캔버스 좌표: 왼쪽, 위)
const LS = norm([-0.62, -0.78, 0]);
const L_SLOPE = 0.62;

const BAYER4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

export class PixelRig {
  readonly w: number;
  readonly h: number;
  ox: number;
  oy: number;
  // 뷰 행렬 (행 우선) view = M * rig + T
  private m = new Float64Array(9);
  private t: V3 = [0, 0, 0];

  depth: Float32Array;
  matId: Int16Array;
  nrm: Float32Array;
  part: Int32Array;
  bias: Int8Array;
  fixed: Int8Array;
  emis: Float32Array;

  private mats: Mat[] = [];
  private matIndex = new Map<Mat, number>();
  private partCounter = 1;

  constructor(w: number, h: number, ox: number, oy: number) {
    this.w = w;
    this.h = h;
    this.ox = ox;
    this.oy = oy;
    const n = w * h;
    this.depth = new Float32Array(n);
    this.matId = new Int16Array(n);
    this.nrm = new Float32Array(n * 3);
    this.part = new Int32Array(n);
    this.bias = new Int8Array(n);
    this.fixed = new Int8Array(n);
    this.emis = new Float32Array(n);
    this.clear();
    this.setView(0, 0.38);
  }

  clear(): void {
    this.depth.fill(-1e9);
    this.matId.fill(-1);
    this.nrm.fill(0);
    this.part.fill(0);
    this.bias.fill(0);
    this.fixed.fill(-1);
    this.emis.fill(0);
    this.partCounter = 1;
  }

  /** yaw: 캐릭터가 바라보는 방향(0=화면 쪽, π/2=오른쪽, π=뒤), pitch: 내려다보는 각도, roll: 화면 평면 회전 */
  setView(yaw: number, pitch: number, roll = 0, rollPivot: [number, number] = [0, 0], shift: [number, number] = [0, 0]): void {
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const cr = Math.cos(roll);
    const sr = Math.sin(roll);
    // Ry
    const ry = [cy, 0, sy, 0, 1, 0, -sy, 0, cy];
    // Rx(pitch): Y = y cp - z sp, Z = y sp + z cp
    const rx = [1, 0, 0, 0, cp, -sp, 0, sp, cp];
    const rz = [cr, -sr, 0, sr, cr, 0, 0, 0, 1];
    const a = mul3(rx, ry);
    const m = mul3(rz, a);
    for (let i = 0; i < 9; i++) this.m[i] = m[i];
    // 롤 피벗: view = Rz (v - P) + P + shift
    const px = rollPivot[0];
    const py = rollPivot[1];
    this.t = [px - (cr * px - sr * py) + shift[0], py - (sr * px + cr * py) + shift[1], 0];
  }

  toView(p: V3): V3 {
    const m = this.m;
    return [
      m[0] * p[0] + m[1] * p[1] + m[2] * p[2] + this.t[0],
      m[3] * p[0] + m[4] * p[1] + m[5] * p[2] + this.t[1],
      m[6] * p[0] + m[7] * p[1] + m[8] * p[2] + this.t[2],
    ];
  }

  dirToView(d: V3): V3 {
    const m = this.m;
    return [
      m[0] * d[0] + m[1] * d[1] + m[2] * d[2],
      m[3] * d[0] + m[4] * d[1] + m[5] * d[2],
      m[6] * d[0] + m[7] * d[1] + m[8] * d[2],
    ];
  }

  fromView(v: V3): V3 {
    const m = this.m;
    const x = v[0] - this.t[0];
    const y = v[1] - this.t[1];
    const z = v[2] - this.t[2];
    return [m[0] * x + m[3] * y + m[6] * z, m[1] * x + m[4] * y + m[7] * z, m[2] * x + m[5] * y + m[8] * z];
  }

  dirFromView(d: V3): V3 {
    const m = this.m;
    return [
      m[0] * d[0] + m[3] * d[1] + m[6] * d[2],
      m[1] * d[0] + m[4] * d[1] + m[7] * d[2],
      m[2] * d[0] + m[5] * d[1] + m[8] * d[2],
    ];
  }

  newPart(): number {
    return this.partCounter++;
  }

  private idOf(m: Mat): number {
    let id = this.matIndex.get(m);
    if (id === undefined) {
      id = this.mats.length;
      this.mats.push(m);
      this.matIndex.set(m, id);
    }
    return id;
  }

  private pixelToView(i: number, j: number): [number, number] {
    return [i + 0.5 - this.ox, this.oy - (j + 0.5)];
  }

  private viewBox(cx: number, cy: number, r: number): [number, number, number, number] {
    const i0 = Math.max(0, Math.floor(cx + this.ox - r - 1));
    const i1 = Math.min(this.w - 1, Math.ceil(cx + this.ox + r + 1));
    const j0 = Math.max(0, Math.floor(this.oy - cy - r - 1));
    const j1 = Math.min(this.h - 1, Math.ceil(this.oy - cy + r + 1));
    return [i0, i1, j0, j1];
  }

  /** 재질 선택(이끼 섞기) + 노이즈 편향 후 z-테스트 기록 */
  private write(
    i: number,
    j: number,
    z: number,
    nv: V3,
    mat: Mat,
    part: number,
    opts: DrawOpts | undefined,
    rigP: V3 | null,
    rigN: V3 | null,
    extraBias = 0,
  ): void {
    const k = j * this.w + i;
    if (z <= this.depth[k]) return;
    let m = mat;
    let b = (opts?.bias ?? 0) + extraBias;
    if (rigP) {
      if (m.coverage) {
        const c = m.coverage(rigP);
        if (c < 1) {
          const th = (BAYER4[(j & 3) * 4 + (i & 3)] + 0.5) / 16;
          if (c <= th) return;
        }
      }
      if (m.alt) {
        const a = m.alt;
        const upOk = a.upOnly === undefined || (rigN !== null && rigN[1] >= a.upOnly);
        if (upOk) {
          const nz = valueNoise3(rigP[0] * a.scale, rigP[1] * a.scale, rigP[2] * a.scale, a.seed);
          if (nz > a.threshold) m = a.mat;
        }
      }
      if (m.speckle) {
        const s = m.speckle;
        const nz = valueNoise3(rigP[0] * s.scale + 3.1, rigP[1] * s.scale, rigP[2] * s.scale, s.seed);
        if (nz > 1 - s.amount) b += 1;
        else if (nz < s.amount) b -= 1;
      }
    }
    this.depth[k] = z;
    this.matId[k] = this.idOf(m);
    this.nrm[k * 3] = nv[0];
    this.nrm[k * 3 + 1] = nv[1];
    this.nrm[k * 3 + 2] = nv[2];
    this.part[k] = part;
    this.bias[k] = b;
    this.fixed[k] = opts?.tone ?? -1;
    this.emis[k] = opts?.emissive ?? m.emissive ?? 0;
  }

  // ─────────────────────────────── 프리미티브 ───────────────────────────────

  sphere(c: V3, r: number, mat: Mat, opts?: EllipsoidOpts): number {
    return this.ellipsoid(c, [r, r, r], mat, opts);
  }

  ellipsoid(c: V3, r: V3, mat: Mat, opts?: EllipsoidOpts): number {
    const part = opts?.part ?? this.newPart();
    const axes = opts?.axes ?? ([[1, 0, 0], [0, 1, 0], [0, 0, 1]] as [V3, V3, V3]);
    const cv = this.toView(c);
    const rmax = Math.max(r[0], r[1], r[2]);
    const [i0, i1, j0, j1] = this.viewBox(cv[0], cv[1], rmax);
    const D = this.dirFromView([0, 0, -1]);
    const dl: V3 = [dot(D, axes[0]) / r[0], dot(D, axes[1]) / r[1], dot(D, axes[2]) / r[2]];
    const a = dot(dl, dl);
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const [X, Y] = this.pixelToView(i, j);
        const O = this.fromView([X, Y, 1000]);
        const q0 = sub(O, c);
        const q: V3 = [dot(q0, axes[0]) / r[0], dot(q0, axes[1]) / r[1], dot(q0, axes[2]) / r[2]];
        const b = 2 * dot(q, dl);
        const cc = dot(q, q) - 1;
        const disc = b * b - 4 * a * cc;
        if (disc < 0) continue;
        const sq = Math.sqrt(disc);
        let t = (-b - sq) / (2 * a);
        let hl: V3 = [q[0] + dl[0] * t, q[1] + dl[1] * t, q[2] + dl[2] * t];
        let useMat = mat;
        let flip = 1;
        let rimBias = 0;
        if (opts?.opening && opts.opening(hl)) {
          // 개구부: 안쪽 면(먼 쪽 교차점)을 안감 재질로
          t = (-b + sq) / (2 * a);
          hl = [q[0] + dl[0] * t, q[1] + dl[1] * t, q[2] + dl[2] * t];
          if (opts.opening(hl)) continue;
          useMat = opts.innerMat ?? mat;
          flip = -1;
        } else if (opts?.rim) {
          rimBias = opts.rim(hl);
        }
        // 로컬 노멀 → 리그 → 뷰
        const nl: V3 = [hl[0] / r[0], hl[1] / r[1], hl[2] / r[2]];
        let nr: V3 = norm([
          axes[0][0] * nl[0] + axes[1][0] * nl[1] + axes[2][0] * nl[2],
          axes[0][1] * nl[0] + axes[1][1] * nl[1] + axes[2][1] * nl[2],
          axes[0][2] * nl[0] + axes[1][2] * nl[1] + axes[2][2] * nl[2],
        ]);
        if (flip < 0) nr = [-nr[0], -nr[1], -nr[2]];
        const nv = this.dirToView(nr);
        const Z = 1000 - t;
        const rp = this.fromView([X, Y, Z]);
        this.write(i, j, Z, nv, useMat, part, opts, rp, nr, rimBias);
      }
    }
    return part;
  }

  /** 끝 반지름이 다른 캡슐 (화면 평면 기준 원형 단면) */
  capsule(a: V3, b: V3, ra: number, rb: number, mat: Mat, opts?: DrawOpts): number {
    const part = opts?.part ?? this.newPart();
    const A = this.toView(a);
    const B = this.toView(b);
    const minX = Math.min(A[0] - ra, B[0] - rb);
    const maxX = Math.max(A[0] + ra, B[0] + rb);
    const minY = Math.min(A[1] - ra, B[1] - rb);
    const maxY = Math.max(A[1] + ra, B[1] + rb);
    const i0 = Math.max(0, Math.floor(minX + this.ox - 1));
    const i1 = Math.min(this.w - 1, Math.ceil(maxX + this.ox + 1));
    const j0 = Math.max(0, Math.floor(this.oy - maxY - 1));
    const j1 = Math.min(this.h - 1, Math.ceil(this.oy - minY + 1));
    const abx = B[0] - A[0];
    const aby = B[1] - A[1];
    const ab2 = abx * abx + aby * aby;
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const [X, Y] = this.pixelToView(i, j);
        let t = ab2 < 1e-6 ? 0 : ((X - A[0]) * abx + (Y - A[1]) * aby) / ab2;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const cx = A[0] + abx * t;
        const cy = A[1] + aby * t;
        const r = ra + (rb - ra) * t;
        const dx = X - cx;
        const dy = Y - cy;
        const d2 = dx * dx + dy * dy;
        if (d2 >= r * r) continue;
        const hgt = Math.sqrt(r * r - d2);
        const Z = A[2] + (B[2] - A[2]) * t + hgt;
        const nv: V3 = [dx / r, dy / r, hgt / r];
        const rp = this.fromView([X, Y, Z]);
        const nr = this.dirFromView(nv);
        this.write(i, j, Z, nv, mat, part, opts, rp, nr);
      }
    }
    return part;
  }

  /** 방향 있는 상자. axes는 리그 공간 단위 벡터, half는 반 크기. 모서리는 광원 쪽이면 밝게 */
  box(c: V3, half: V3, axes: [V3, V3, V3], mat: Mat, opts?: DrawOpts & { bevel?: number }): number {
    const part = opts?.part ?? this.newPart();
    const bevel = opts?.bevel ?? 0.9;
    let minX = 1e9;
    let maxX = -1e9;
    let minY = 1e9;
    let maxY = -1e9;
    for (let s = 0; s < 8; s++) {
      const p: V3 = [
        c[0] + axes[0][0] * half[0] * (s & 1 ? 1 : -1) + axes[1][0] * half[1] * (s & 2 ? 1 : -1) + axes[2][0] * half[2] * (s & 4 ? 1 : -1),
        c[1] + axes[0][1] * half[0] * (s & 1 ? 1 : -1) + axes[1][1] * half[1] * (s & 2 ? 1 : -1) + axes[2][1] * half[2] * (s & 4 ? 1 : -1),
        c[2] + axes[0][2] * half[0] * (s & 1 ? 1 : -1) + axes[1][2] * half[1] * (s & 2 ? 1 : -1) + axes[2][2] * half[2] * (s & 4 ? 1 : -1),
      ];
      const v = this.toView(p);
      minX = Math.min(minX, v[0]);
      maxX = Math.max(maxX, v[0]);
      minY = Math.min(minY, v[1]);
      maxY = Math.max(maxY, v[1]);
    }
    const i0 = Math.max(0, Math.floor(minX + this.ox - 1));
    const i1 = Math.min(this.w - 1, Math.ceil(maxX + this.ox + 1));
    const j0 = Math.max(0, Math.floor(this.oy - maxY - 1));
    const j1 = Math.min(this.h - 1, Math.ceil(this.oy - minY + 1));
    const D = this.dirFromView([0, 0, -1]);
    const dl: V3 = [dot(D, axes[0]), dot(D, axes[1]), dot(D, axes[2])];
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const [X, Y] = this.pixelToView(i, j);
        const O = this.fromView([X, Y, 1000]);
        const q0 = sub(O, c);
        const q: V3 = [dot(q0, axes[0]), dot(q0, axes[1]), dot(q0, axes[2])];
        let tmin = -1e9;
        let tmax = 1e9;
        let axis = 0;
        let miss = false;
        for (let k = 0; k < 3; k++) {
          if (Math.abs(dl[k]) < 1e-9) {
            if (Math.abs(q[k]) > half[k]) {
              miss = true;
              break;
            }
            continue;
          }
          let t1 = (-half[k] - q[k]) / dl[k];
          let t2 = (half[k] - q[k]) / dl[k];
          if (t1 > t2) {
            const tt = t1;
            t1 = t2;
            t2 = tt;
          }
          if (t1 > tmin) {
            tmin = t1;
            axis = k;
          }
          if (t2 < tmax) tmax = t2;
        }
        if (miss || tmin > tmax) continue;
        const hp: V3 = [q[0] + dl[0] * tmin, q[1] + dl[1] * tmin, q[2] + dl[2] * tmin];
        const sgn = dl[axis] > 0 ? -1 : 1;
        const nr: V3 = [axes[axis][0] * sgn, axes[axis][1] * sgn, axes[axis][2] * sgn];
        const nv = this.dirToView(nr);
        // 모서리 베벨
        let eb = 0;
        const u = (axis + 1) % 3;
        const w = (axis + 2) % 3;
        const eu = half[u] - Math.abs(hp[u]);
        const ew = half[w] - Math.abs(hp[w]);
        if (Math.min(eu, ew) < bevel) {
          const k2 = eu < ew ? u : w;
          const out: V3 = [
            axes[k2][0] * Math.sign(hp[k2]),
            axes[k2][1] * Math.sign(hp[k2]),
            axes[k2][2] * Math.sign(hp[k2]),
          ];
          const ov = this.dirToView(out);
          const lit = ov[0] * L[0] + ov[1] * L[1];
          eb = lit > 0.15 ? 1 : lit < -0.15 ? -1 : 0;
        }
        const Z = 1000 - tmin;
        const rp = this.fromView([X, Y, Z]);
        this.write(i, j, Z, nv, mat, part, opts, rp, nr, eb);
      }
    }
    return part;
  }

  /** 볼록/오목 상관없는 부채꼴 삼각분할 폴리곤 (양면) */
  poly(pts: V3[], mat: Mat, opts?: PolyOpts): number {
    const part = opts?.part ?? this.newPart();
    const pv = pts.map((p) => this.toView(p));
    const nv = opts?.normals?.map((n) => this.dirToView(norm(n)));
    for (let k = 1; k + 1 < pv.length; k++) {
      this.tri(pv[0], pv[k], pv[k + 1], nv ? [nv[0], nv[k], nv[k + 1]] : null, mat, part, opts);
    }
    return part;
  }

  /** 사각형 격자(행×열 점) 천. 각 칸을 두 삼각형으로 */
  cloth(grid: V3[][], mat: Mat, opts?: PolyOpts & { gridNormals?: V3[][] }): number {
    const part = opts?.part ?? this.newPart();
    for (let r = 0; r + 1 < grid.length; r++) {
      for (let c = 0; c + 1 < grid[r].length; c++) {
        const a = grid[r][c];
        const b = grid[r][c + 1];
        const d = grid[r + 1][c];
        const e = grid[r + 1][c + 1];
        const gn = opts?.gridNormals;
        const na = gn ? [gn[r][c], gn[r][c + 1], gn[r + 1][c + 1]] : undefined;
        const nb = gn ? [gn[r][c], gn[r + 1][c + 1], gn[r + 1][c]] : undefined;
        this.poly([a, b, e], mat, { ...opts, part, normals: na });
        this.poly([a, e, d], mat, { ...opts, part, normals: nb });
      }
    }
    return part;
  }

  private tri(a: V3, b: V3, c: V3, ns: V3[] | null, mat: Mat, part: number, opts?: PolyOpts): void {
    let n = norm(cross(sub(b, a), sub(c, a)));
    let back = false;
    if (n[2] < 0) {
      n = [-n[0], -n[1], -n[2]];
      back = true;
    }
    const useMat = back && opts?.backMat ? opts.backMat : mat;
    const minX = Math.min(a[0], b[0], c[0]);
    const maxX = Math.max(a[0], b[0], c[0]);
    const minY = Math.min(a[1], b[1], c[1]);
    const maxY = Math.max(a[1], b[1], c[1]);
    const i0 = Math.max(0, Math.floor(minX + this.ox));
    const i1 = Math.min(this.w - 1, Math.ceil(maxX + this.ox));
    const j0 = Math.max(0, Math.floor(this.oy - maxY));
    const j1 = Math.min(this.h - 1, Math.ceil(this.oy - minY));
    const area = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    if (Math.abs(area) < 1e-6) return;
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const [X, Y] = this.pixelToView(i, j);
        const w0 = ((b[0] - X) * (c[1] - Y) - (b[1] - Y) * (c[0] - X)) / area;
        const w1 = ((c[0] - X) * (a[1] - Y) - (c[1] - Y) * (a[0] - X)) / area;
        const w2 = 1 - w0 - w1;
        if (w0 < -1e-6 || w1 < -1e-6 || w2 < -1e-6) continue;
        const Z = w0 * a[2] + w1 * b[2] + w2 * c[2];
        let nn = n;
        if (ns) {
          let m: V3 = [
            w0 * ns[0][0] + w1 * ns[1][0] + w2 * ns[2][0],
            w0 * ns[0][1] + w1 * ns[1][1] + w2 * ns[2][1],
            w0 * ns[0][2] + w1 * ns[1][2] + w2 * ns[2][2],
          ];
          m = norm(m);
          if (back) m = [-m[0], -m[1], -m[2]];
          if (m[2] < 0.05) m = norm([m[0], m[1], 0.05]);
          nn = m;
        }
        const rp = this.fromView([X, Y, Z]);
        this.write(i, j, Z, nn, useMat, part, opts, rp, this.dirFromView(nn));
      }
    }
  }

  /** 픽셀 선 (브레젠험), 깊이 보간 */
  line(a: V3, b: V3, mat: Mat, opts?: LineOpts): number {
    const part = opts?.part ?? this.newPart();
    const A = this.toView(a);
    const B = this.toView(b);
    const nv: V3 = opts?.normal ? this.dirToView(norm(opts.normal)) : [0, 0, 1];
    let x0 = Math.floor(A[0] + this.ox);
    let y0 = Math.floor(this.oy - A[1]);
    const x1 = Math.floor(B[0] + this.ox);
    const y1 = Math.floor(this.oy - B[1]);
    const dx = Math.abs(x1 - x0);
    const dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    const steps = Math.max(dx, -dy) || 1;
    let s = 0;
    const width = opts?.width ?? 1;
    for (;;) {
      const t = s / steps;
      const Z = A[2] + (B[2] - A[2]) * t + 0.2;
      const put = (px: number, py: number) => {
        if (px < 0 || py < 0 || px >= this.w || py >= this.h) return;
        const rp = this.fromView([px + 0.5 - this.ox, this.oy - (py + 0.5), Z]);
        this.write(px, py, Z, nv, mat, part, opts, rp, null);
      };
      put(x0, y0);
      if (width > 1) {
        if (dx > -dy) put(x0, y0 + 1);
        else put(x0 + 1, y0);
      }
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) {
        err += dy;
        x0 += sx;
      }
      if (e2 <= dx) {
        err += dx;
        y0 += sy;
      }
      s++;
    }
    return part;
  }

  /** 표면 위 장식 점(눈, 버클 등). surface=true면 보이는 표면 위일 때만 */
  dot(p: V3, mat: Mat, opts?: DrawOpts & { surface?: boolean; tol?: number; size?: [number, number] }): boolean {
    const v = this.toView(p);
    const i = Math.floor(v[0] + this.ox);
    const j = Math.floor(this.oy - v[1]);
    const [sw, sh] = opts?.size ?? [1, 1];
    let drawn = false;
    for (let yy = 0; yy < sh; yy++) {
      for (let xx = 0; xx < sw; xx++) {
        const pi = i + xx;
        const pj = j - yy;
        if (pi < 0 || pj < 0 || pi >= this.w || pj >= this.h) continue;
        const k = pj * this.w + pi;
        if (opts?.surface !== false) {
          if (this.matId[k] < 0) continue;
          if (Math.abs(this.depth[k] - v[2]) > (opts?.tol ?? 1.6)) continue;
          // 표면 노멀 유지
          const nv: V3 = [this.nrm[k * 3], this.nrm[k * 3 + 1], this.nrm[k * 3 + 2]];
          const part = this.part[k];
          this.depth[k] -= 1e-3;
          this.write(pi, pj, this.depth[k] + 2e-3, nv, mat, part, opts, null, null);
          drawn = true;
        } else {
          this.write(pi, pj, v[2], [0, 0, 1], mat, opts?.part ?? this.newPart(), opts, null, null);
          drawn = true;
        }
      }
    }
    return drawn;
  }

  // ─────────────────────────────── 해석(음영/외곽선) ───────────────────────────────

  resolve(): FrameImage {
    const { w, h } = this;
    const n = w * h;
    const idx = new Int16Array(n).fill(-1); // 최종 램프 인덱스
    const lvl = new Int8Array(n);
    // 1) 셀 음영 단계
    for (let k = 0; k < n; k++) {
      const mid = this.matId[k];
      if (mid < 0) continue;
      const m = this.mats[mid];
      if (this.fixed[k] >= 0) {
        idx[k] = this.fixed[k];
        lvl[k] = -1;
        continue;
      }
      let level: number;
      if (m.flat) level = 1;
      else {
        const nx = this.nrm[k * 3];
        const ny = this.nrm[k * 3 + 1];
        const nz = this.nrm[k * 3 + 2];
        const s = (nx * L[0] + ny * L[1] + nz * L[2]) * 0.5 + 0.5 + (m.bias ?? 0) * 0.1;
        level = s < 0.42 ? 0 : s < 0.66 ? 1 : s < 0.87 ? 2 : 3;
      }
      level += this.bias[k];
      lvl[k] = level;
    }
    // 2) 화면공간 그림자
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        const k = j * w + i;
        const mid = this.matId[k];
        if (mid < 0 || lvl[k] < 0) continue;
        const m = this.mats[mid];
        if (m.receive === false || m.flat) continue;
        const z = this.depth[k];
        let shadowed = false;
        for (let s = 1; s <= 4 && !shadowed; s++) {
          const qi = Math.round(i + LS[0] * s);
          const qj = Math.round(j + LS[1] * s);
          if (qi < 0 || qj < 0 || qi >= w || qj >= h) break;
          const q = qj * w + qi;
          if (this.matId[q] < 0) continue;
          if (this.part[q] === this.part[k]) continue;
          if (this.depth[q] > z + 1.4 + L_SLOPE * s) shadowed = true;
        }
        if (shadowed) lvl[k] -= 1;
      }
    }
    // 램프 인덱스로 변환
    for (let k = 0; k < n; k++) {
      const mid = this.matId[k];
      if (mid < 0 || lvl[k] === -1 && this.fixed[k] >= 0) continue;
      const m = this.mats[mid];
      const t = m.tones;
      const L2 = lvl[k];
      if (L2 < 0) idx[k] = Math.max(0, t[0] - 1);
      else idx[k] = t[Math.min(t.length - 1, L2)];
    }
    // 3) 고립 픽셀 정리 (같은 재질 이웃 4개가 모두 같은 톤이면 따라감)
    const idx2 = new Int16Array(idx);
    for (let j = 1; j < h - 1; j++) {
      for (let i = 1; i < w - 1; i++) {
        const k = j * w + i;
        const mid = this.matId[k];
        if (mid < 0 || this.fixed[k] >= 0) continue;
        const nb = [k - 1, k + 1, k - w, k + w];
        let same = true;
        const v0 = idx[nb[0]];
        for (const q of nb) {
          if (this.matId[q] !== mid || idx[q] !== v0 || this.fixed[q] >= 0) {
            same = false;
            break;
          }
        }
        if (same && v0 !== idx[k]) idx2[k] = v0;
      }
    }
    idx.set(idx2);
    // 4) 내부 경계선: 앞의 다른 파트와 깊이 차가 큰 뒤쪽 픽셀을 어둡게
    const idx3 = new Int16Array(idx);
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        const k = j * w + i;
        const mid = this.matId[k];
        if (mid < 0) continue;
        const m = this.mats[mid];
        if (m.inner === false || this.fixed[k] >= 0) continue;
        const z = this.depth[k];
        let edge = false;
        const check = (q: number) => {
          if (this.matId[q] < 0) return;
          if (this.part[q] === this.part[k]) return;
          const mq = this.mats[this.matId[q]];
          if (mq.outline === false) return;
          if (this.depth[q] - z > 2.6) edge = true;
        };
        if (i > 0) check(k - 1);
        if (i < w - 1) check(k + 1);
        if (j > 0) check(k - w);
        if (j < h - 1) check(k + w);
        if (edge) idx3[k] = Math.max(0, Math.min(idx[k] - 1, m.tones[0]));
      }
    }
    idx.set(idx3);

    const color = new Uint8Array(n * 4);
    const normal = new Uint8Array(n * 4);
    for (let k = 0; k < n; k++) {
      normal[k * 4] = 128;
      normal[k * 4 + 1] = 128;
      normal[k * 4 + 2] = 255;
      normal[k * 4 + 3] = 0;
      const mid = this.matId[k];
      if (mid < 0) continue;
      const m = this.mats[mid];
      const c = m.ramp.colors[Math.max(0, Math.min(m.ramp.colors.length - 1, idx[k]))];
      color[k * 4] = c[0];
      color[k * 4 + 1] = c[1];
      color[k * 4 + 2] = c[2];
      color[k * 4 + 3] = 255;
      normal[k * 4] = Math.round((this.nrm[k * 3] * 0.5 + 0.5) * 255);
      normal[k * 4 + 1] = Math.round((this.nrm[k * 3 + 1] * 0.5 + 0.5) * 255);
      normal[k * 4 + 2] = Math.round((this.nrm[k * 3 + 2] * 0.5 + 0.5) * 255);
      normal[k * 4 + 3] = Math.round(Math.max(0, Math.min(1, this.emis[k])) * 255);
    }
    // 5) 선택적 외곽선 (4-이웃, 가장 앞 파트의 램프 외곽선 색)
    const outColor = new Uint8Array(color);
    const outNormal = new Uint8Array(normal);
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        const k = j * w + i;
        if (this.matId[k] >= 0) continue;
        let best = -1;
        let bestZ = -1e9;
        let fromTop = false;
        const consider = (q: number, top: boolean) => {
          const mid = this.matId[q];
          if (mid < 0) return;
          const m = this.mats[mid];
          if (m.outline === false) return;
          if (this.depth[q] > bestZ) {
            bestZ = this.depth[q];
            best = q;
            fromTop = top;
          }
        };
        if (i > 0) consider(k - 1, true);
        if (i < w - 1) consider(k + 1, false);
        if (j > 0) consider(k - w, false);
        if (j < h - 1) consider(k + w, true);
        if (best < 0) continue;
        const m = this.mats[this.matId[best]];
        let c: RGBA = m.ramp.outline;
        // 광원 쪽(왼쪽/위) 외곽선은 램프의 가장 어두운 색으로 약간 부드럽게
        if (fromTop) {
          const d = m.ramp.colors[0];
          c = [(c[0] + d[0]) >> 1, (c[1] + d[1]) >> 1, (c[2] + d[2]) >> 1, 255];
        }
        outColor[k * 4] = c[0];
        outColor[k * 4 + 1] = c[1];
        outColor[k * 4 + 2] = c[2];
        outColor[k * 4 + 3] = 255;
        outNormal[k * 4] = normal[best * 4];
        outNormal[k * 4 + 1] = normal[best * 4 + 1];
        outNormal[k * 4 + 2] = normal[best * 4 + 2];
        outNormal[k * 4 + 3] = 0;
      }
    }
    return { w, h, color: outColor, normal: outNormal };
  }
}

function mul3(a: number[], b: number[]): number[] {
  const r = new Array<number>(9);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      r[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j];
    }
  }
  return r;
}
