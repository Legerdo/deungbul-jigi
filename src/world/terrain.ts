// 블록형 지형: 1유닛 격자 칸마다 네 모서리 높이, 윗면/옆면 재질, 계단·물 플래그를 가진다.
// 같은 데이터로 (1) 입체 메시(윗면·절벽·계단 디딤판·풀 가장자리)와 (2) 보행 높이·충돌 판정을 만들어
// 보이는 공간과 발 위치·충돌이 어긋나지 않게 한다.
import * as THREE from 'three';

export const TOP = { grass: 0, forest: 1, dirt: 2, paving: 3, ruin: 4, pebbles: 5, litter: 6 } as const;
export const SIDE = { cliff: 0, stonewall: 1, ruinwall: 2, soil: 3, carved: 4 } as const;

export const F_WATER = 1;
export const F_BLOCK = 2;
/** 계단 한 칸(1유닛)당 단 수 */
export const STEPS = 2;

export interface Surface {
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  height: (x: number, z: number) => number;
}

export interface CircleCollider {
  kind: 'circle';
  x: number;
  z: number;
  r: number;
  y0: number;
  y1: number;
}
export interface BoxCollider {
  kind: 'box';
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  y0: number;
  y1: number;
}
export type Collider = CircleCollider | BoxCollider;

export class Terrain {
  readonly x0: number;
  readonly z0: number;
  readonly W: number;
  readonly D: number;
  /** 칸별 모서리 높이 [nw, ne, sw, se] (n = -z, w = -x) */
  readonly hc: Float32Array;
  readonly top: Uint8Array;
  readonly side: Uint8Array;
  readonly flags: Uint8Array;
  /** 0: 없음, ±1: +x/-x 방향으로 오르는 계단, ±2: +z/-z */
  readonly stair: Int8Array;
  readonly surfaces: Surface[] = [];
  readonly colliders: Collider[] = [];
  /** 동적 충돌체(보스 방벽 등) */
  readonly dynamic: Collider[] = [];

  constructor(x0: number, z0: number, W: number, D: number) {
    this.x0 = x0;
    this.z0 = z0;
    this.W = W;
    this.D = D;
    this.hc = new Float32Array(W * D * 4);
    this.top = new Uint8Array(W * D);
    this.side = new Uint8Array(W * D);
    this.flags = new Uint8Array(W * D);
    this.stair = new Int8Array(W * D);
  }

  index(x: number, z: number): number {
    const i = Math.floor(x - this.x0);
    const k = Math.floor(z - this.z0);
    if (i < 0 || k < 0 || i >= this.W || k >= this.D) return -1;
    return k * this.W + i;
  }

  private forCells(x0: number, z0: number, x1: number, z1: number, fn: (c: number, cx: number, cz: number) => void): void {
    const i0 = Math.max(0, Math.floor(x0 - this.x0));
    const i1 = Math.min(this.W - 1, Math.ceil(x1 - this.x0) - 1);
    const k0 = Math.max(0, Math.floor(z0 - this.z0));
    const k1 = Math.min(this.D - 1, Math.ceil(z1 - this.z0) - 1);
    for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) fn(k * this.W + i, this.x0 + i, this.z0 + k);
  }

  fill(x0: number, z0: number, x1: number, z1: number, h: number, top?: number, side?: number): void {
    this.forCells(x0, z0, x1, z1, (c) => {
      this.hc.fill(h, c * 4, c * 4 + 4);
      if (top !== undefined) this.top[c] = top;
      if (side !== undefined) this.side[c] = side;
      this.stair[c] = 0;
      this.flags[c] &= ~F_WATER;
    });
  }

  /** axis 방향으로 h0(시작 가장자리) → h1(끝 가장자리) 선형 경사 */
  ramp(x0: number, z0: number, x1: number, z1: number, axis: 'x' | 'z', h0: number, h1: number, top?: number, side?: number): void {
    const a0 = axis === 'x' ? x0 : z0;
    const a1 = axis === 'x' ? x1 : z1;
    const hAt = (v: number) => h0 + ((h1 - h0) * (v - a0)) / (a1 - a0);
    this.forCells(x0, z0, x1, z1, (c, cx, cz) => {
      if (axis === 'x') {
        this.hc[c * 4] = hAt(cx);
        this.hc[c * 4 + 1] = hAt(cx + 1);
        this.hc[c * 4 + 2] = hAt(cx);
        this.hc[c * 4 + 3] = hAt(cx + 1);
      } else {
        this.hc[c * 4] = hAt(cz);
        this.hc[c * 4 + 1] = hAt(cz);
        this.hc[c * 4 + 2] = hAt(cz + 1);
        this.hc[c * 4 + 3] = hAt(cz + 1);
      }
      if (top !== undefined) this.top[c] = top;
      if (side !== undefined) this.side[c] = side;
      this.stair[c] = 0;
    });
  }

  /** 계단: 보행 높이는 경사, 메시는 디딤판과 챌판 */
  stairs(x0: number, z0: number, x1: number, z1: number, axis: 'x' | 'z', h0: number, h1: number, side: number, top?: number): void {
    this.ramp(x0, z0, x1, z1, axis, h0, h1, top, side);
    const up = h1 > h0 ? 1 : -1;
    this.forCells(x0, z0, x1, z1, (c) => {
      this.stair[c] = (axis === 'x' ? 1 : 2) * up;
    });
  }

  water(x0: number, z0: number, x1: number, z1: number, bed: number): void {
    this.forCells(x0, z0, x1, z1, (c) => {
      this.hc.fill(bed, c * 4, c * 4 + 4);
      this.flags[c] |= F_WATER;
      this.top[c] = TOP.pebbles;
      this.side[c] = SIDE.soil;
      this.stair[c] = 0;
    });
  }

  block(x0: number, z0: number, x1: number, z1: number): void {
    this.forCells(x0, z0, x1, z1, (c) => {
      this.flags[c] |= F_BLOCK;
    });
  }

  paintTop(x0: number, z0: number, x1: number, z1: number, top: number): void {
    this.forCells(x0, z0, x1, z1, (c) => {
      this.top[c] = top;
    });
  }

  paintSide(x0: number, z0: number, x1: number, z1: number, side: number): void {
    this.forCells(x0, z0, x1, z1, (c) => {
      this.side[c] = side;
    });
  }

  /** 꺾은선 경로를 따라 폭 width로 윗면 재질을 칠한다 */
  paintPath(pts: Array<[number, number]>, width: number, top: number, onlyTop?: number): void {
    for (let k = 0; k < this.D; k++) {
      for (let i = 0; i < this.W; i++) {
        const cx = this.x0 + i + 0.5;
        const cz = this.z0 + k + 0.5;
        let best = 1e9;
        for (let s = 0; s + 1 < pts.length; s++) best = Math.min(best, segDist(cx, cz, pts[s], pts[s + 1]));
        const c = k * this.W + i;
        if (best < width / 2 && (onlyTop === undefined || this.top[c] === onlyTop)) this.top[c] = top;
      }
    }
  }

  paintCircle(cx: number, cz: number, r: number, top: number): void {
    this.forCells(cx - r, cz - r, cx + r, cz + r, (c, x, z) => {
      if (Math.hypot(x + 0.5 - cx, z + 0.5 - cz) < r) this.top[c] = top;
    });
  }

  /** 모서리 위치 기반 매끄러운 굴곡 (같은 모서리는 같은 값이라 틈이 생기지 않는다) */
  undulate(x0: number, z0: number, x1: number, z1: number, amp: number, freq: number, noise: (x: number, z: number) => number): void {
    this.forCells(x0, z0, x1, z1, (c, cx, cz) => {
      if (this.stair[c] !== 0 || this.flags[c] & F_WATER) return;
      const corners: Array<[number, number]> = [
        [cx, cz],
        [cx + 1, cz],
        [cx, cz + 1],
        [cx + 1, cz + 1],
      ];
      corners.forEach(([x, z], j) => {
        this.hc[c * 4 + j] += (noise(x * freq, z * freq) - 0.5) * 2 * amp;
      });
    });
  }

  // ─────────────────────────────── 조회 ───────────────────────────────

  surfaceAt(x: number, z: number): Surface | null {
    for (const s of this.surfaces) if (x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) return s;
    return null;
  }

  groundAt(x: number, z: number): number {
    const c = this.index(x, z);
    if (c < 0) return -8;
    const u = x - Math.floor(x);
    const v = z - Math.floor(z);
    const h = this.hc;
    const st = this.stair[c];
    if (st !== 0) {
      // 계단은 보이는 디딤판 높이 그대로 (발이 계단에 정확히 놓이도록)
      const dirUp = Math.sign(st);
      const alongX = Math.abs(st) === 1;
      const along = alongX ? u : v;
      const t = dirUp > 0 ? along : 1 - along;
      const s = Math.min(STEPS - 1, Math.floor(t * STEPS));
      const tt = (s + 1) / STEPS;
      const hs = alongX ? (dirUp > 0 ? h[c * 4] : h[c * 4 + 1]) : dirUp > 0 ? h[c * 4] : h[c * 4 + 2];
      const he = alongX ? (dirUp > 0 ? h[c * 4 + 1] : h[c * 4]) : dirUp > 0 ? h[c * 4 + 2] : h[c * 4];
      return hs + (he - hs) * tt;
    }
    const n = h[c * 4] + (h[c * 4 + 1] - h[c * 4]) * u;
    const s = h[c * 4 + 2] + (h[c * 4 + 3] - h[c * 4 + 2]) * u;
    return n + (s - n) * v;
  }

  heightAt(x: number, z: number): number {
    const s = this.surfaceAt(x, z);
    if (s) return s.height(x, z);
    return this.groundAt(x, z);
  }

  walkable(x: number, z: number): boolean {
    if (this.surfaceAt(x, z)) return true;
    const c = this.index(x, z);
    if (c < 0) return false;
    return (this.flags[c] & (F_WATER | F_BLOCK)) === 0;
  }

  isWater(x: number, z: number): boolean {
    const c = this.index(x, z);
    return c >= 0 && (this.flags[c] & F_WATER) !== 0 && !this.surfaceAt(x, z);
  }

  /** 반지름 r의 원이 (x,z)에 설 수 있는지 (현재 높이 y 기준 단차 제한) */
  canStand(x: number, z: number, y: number, r: number, step: number): boolean {
    const pts: Array<[number, number]> = [
      [x, z],
      [x + r, z],
      [x - r, z],
      [x, z + r],
      [x, z - r],
      [x + r * 0.7, z + r * 0.7],
      [x - r * 0.7, z + r * 0.7],
      [x + r * 0.7, z - r * 0.7],
      [x - r * 0.7, z - r * 0.7],
    ];
    for (const [px, pz] of pts) {
      if (!this.walkable(px, pz)) return false;
      if (Math.abs(this.heightAt(px, pz) - y) > step + (px === x && pz === z ? 0 : r * 0.9)) return false;
    }
    return true;
  }

  /** 축 분리 이동 + 충돌체 밀어내기. 새 위치를 out에 기록하고 벽에 부딪혔는지 반환 */
  move(pos: THREE.Vector3, dx: number, dz: number, r: number, step: number): boolean {
    let hit = false;
    const y = pos.y;
    // 작은 단계로 나눠 빠른 이동에서도 벽을 뚫지 않게
    const dist = Math.hypot(dx, dz);
    const n = Math.max(1, Math.ceil(dist / 0.2));
    const sx = dx / n;
    const sz = dz / n;
    let cy = y;
    for (let s = 0; s < n; s++) {
      if (this.canStand(pos.x + sx, pos.z, cy, r, step)) pos.x += sx;
      else hit = true;
      if (this.canStand(pos.x, pos.z + sz, cy, r, step)) pos.z += sz;
      else hit = true;
      if (this.pushOut(pos, r, cy)) hit = true;
      cy = this.heightAt(pos.x, pos.z);
    }
    pos.y = this.heightAt(pos.x, pos.z);
    return hit;
  }

  private pushOut(pos: THREE.Vector3, r: number, y: number): boolean {
    let hit = false;
    const all = this.dynamic.length ? this.colliders.concat(this.dynamic) : this.colliders;
    for (const c of all) {
      if (y + 1.6 < c.y0 || y > c.y1) continue;
      if (c.kind === 'circle') {
        const dx = pos.x - c.x;
        const dz = pos.z - c.z;
        const d = Math.hypot(dx, dz);
        const m = c.r + r;
        if (d < m && d > 1e-5) {
          const tx = pos.x + (dx / d) * (m - d);
          const tz = pos.z + (dz / d) * (m - d);
          if (this.walkable(tx, tz)) {
            pos.x = tx;
            pos.z = tz;
          }
          hit = true;
        }
      } else {
        const cx = Math.max(c.x0, Math.min(pos.x, c.x1));
        const cz = Math.max(c.z0, Math.min(pos.z, c.z1));
        const dx = pos.x - cx;
        const dz = pos.z - cz;
        const d = Math.hypot(dx, dz);
        if (d < r) {
          if (d > 1e-5) {
            pos.x = cx + (dx / d) * r;
            pos.z = cz + (dz / d) * r;
          } else {
            // 상자 안쪽: 가장 가까운 면으로
            const l = pos.x - c.x0;
            const rr = c.x1 - pos.x;
            const t = pos.z - c.z0;
            const b = c.z1 - pos.z;
            const m = Math.min(l, rr, t, b);
            if (m === l) pos.x = c.x0 - r;
            else if (m === rr) pos.x = c.x1 + r;
            else if (m === t) pos.z = c.z0 - r;
            else pos.z = c.z1 + r;
          }
          hit = true;
        }
      }
    }
    return hit;
  }

  addCircle(x: number, z: number, r: number, y0 = -10, y1 = 10): void {
    this.colliders.push({ kind: 'circle', x, z, r, y0, y1 });
  }
  addBox(x0: number, z0: number, x1: number, z1: number, y0 = -10, y1 = 10): void {
    this.colliders.push({ kind: 'box', x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1), y0, y1 });
  }

  // ─────────────────────────────── 메시 ───────────────────────────────

  buildGeometry(): { top: THREE.BufferGeometry; sides: THREE.BufferGeometry; lip: THREE.BufferGeometry } {
    const top = new GeoBuilder(false);
    const sides = new GeoBuilder(true);
    const lip = new GeoBuilder(false);
    const { W, D, hc } = this;
    const BOTTOM = -6;
    const cellH = (c: number, j: number) => hc[c * 4 + j];
    const maxH = (c: number) => Math.max(hc[c * 4], hc[c * 4 + 1], hc[c * 4 + 2], hc[c * 4 + 3]);
    // 모서리 AO: 모서리를 공유하는 네 칸 중 더 높은 칸 수
    const cornerAO = (xc: number, zc: number, hv: number): number => {
      let occ = 0;
      for (const [ox, oz] of [
        [-1, -1],
        [0, -1],
        [-1, 0],
        [0, 0],
      ]) {
        const c = this.index(xc + ox + 0.5, zc + oz + 0.5);
        if (c < 0) continue;
        if (maxH(c) > hv + 0.35) occ++;
      }
      return 1 - 0.2 * Math.min(2, occ);
    };

    for (let k = 0; k < D; k++) {
      for (let i = 0; i < W; i++) {
        const c = k * W + i;
        const x0 = this.x0 + i;
        const z0 = this.z0 + k;
        const x1 = x0 + 1;
        const z1 = z0 + 1;
        const nw = cellH(c, 0);
        const ne = cellH(c, 1);
        const sw = cellH(c, 2);
        const se = cellH(c, 3);
        const st = this.stair[c];
        const sideLayer = this.side[c];

        // ── 윗면
        if (st === 0) {
          top.quad(
            [x0, nw, z0],
            [x1, ne, z0],
            [x1, se, z1],
            [x0, sw, z1],
            [cornerAO(x0, z0, nw), cornerAO(x1, z0, ne), cornerAO(x1, z1, se), cornerAO(x0, z1, sw)],
            0,
            'top',
            [0, 1, 0],
          );
        } else {
          // 계단: 칸마다 STEPS단. 디딤판 높이 = 보행 높이(stepTop)와 동일
          const alongX = Math.abs(st) === 1;
          const dirUp = Math.sign(st);
          for (let s = 0; s < STEPS; s++) {
            const t0 = s / STEPS;
            const t1 = (s + 1) / STEPS;
            if (alongX) {
              const start = dirUp > 0 ? x0 : x1;
              const hs = dirUp > 0 ? nw : ne;
              const he = dirUp > 0 ? ne : nw;
              const a0 = start + dirUp * t0;
              const a1 = start + dirUp * t1;
              const hLow = hs + (he - hs) * t0;
              const hHigh = hs + (he - hs) * t1;
              const xa = Math.min(a0, a1);
              const xb = Math.max(a0, a1);
              top.quad([xa, hHigh, z0], [xb, hHigh, z0], [xb, hHigh, z1], [xa, hHigh, z1], [1, 1, 1, 1], 0, 'top', [0, 1, 0]);
              sides.quad([a0, hHigh, z1], [a0, hHigh, z0], [a0, hLow, z0], [a0, hLow, z1], [1, 1, 0.8, 0.8], SIDE.carved, 'z', [-dirUp, 0, 0]);
            } else {
              const start = dirUp > 0 ? z0 : z1;
              const hs = dirUp > 0 ? nw : sw;
              const he = dirUp > 0 ? sw : nw;
              const a0 = start + dirUp * t0;
              const a1 = start + dirUp * t1;
              const hLow = hs + (he - hs) * t0;
              const hHigh = hs + (he - hs) * t1;
              const za = Math.min(a0, a1);
              const zb = Math.max(a0, a1);
              top.quad([x0, hHigh, za], [x1, hHigh, za], [x1, hHigh, zb], [x0, hHigh, zb], [1, 1, 1, 1], 0, 'top', [0, 1, 0]);
              sides.quad([x0, hHigh, a0], [x1, hHigh, a0], [x1, hLow, a0], [x0, hLow, a0], [1, 1, 0.8, 0.8], SIDE.carved, 'x', [0, 0, -dirUp]);
            }
          }
        }

        // ── 옆면 (이웃보다 높은 가장자리)
        const edges: Array<{ ni: number; nk: number; a: [number, number, number]; b: [number, number, number]; nA: number; nB: number; axis: 'x' | 'z' }> = [];
        const nb = (ii: number, kk: number) => (ii < 0 || kk < 0 || ii >= W || kk >= D ? -1 : kk * W + ii);
        // 남(+z): 이 칸 sw→se, 이웃 nw→ne
        {
          const n2 = nb(i, k + 1);
          edges.push({ ni: n2, nk: 0, a: [x0, sw, z1], b: [x1, se, z1], nA: n2 < 0 ? BOTTOM : cellH(n2, 0), nB: n2 < 0 ? BOTTOM : cellH(n2, 1), axis: 'x' });
        }
        // 북(-z): ne→nw, 이웃 se→sw
        {
          const n2 = nb(i, k - 1);
          edges.push({ ni: n2, nk: 1, a: [x1, ne, z0], b: [x0, nw, z0], nA: n2 < 0 ? BOTTOM : cellH(n2, 3), nB: n2 < 0 ? BOTTOM : cellH(n2, 2), axis: 'x' });
        }
        // 동(+x): se→ne, 이웃 sw→nw
        {
          const n2 = nb(i + 1, k);
          edges.push({ ni: n2, nk: 2, a: [x1, se, z1], b: [x1, ne, z0], nA: n2 < 0 ? BOTTOM : cellH(n2, 2), nB: n2 < 0 ? BOTTOM : cellH(n2, 0), axis: 'z' });
        }
        // 서(-x): nw→sw, 이웃 ne→se
        {
          const n2 = nb(i - 1, k);
          edges.push({ ni: n2, nk: 3, a: [x0, nw, z0], b: [x0, sw, z1], nA: n2 < 0 ? BOTTOM : cellH(n2, 1), nB: n2 < 0 ? BOTTOM : cellH(n2, 3), axis: 'z' });
        }
        for (const e of edges) {
          const hA = e.a[1];
          const hB = e.b[1];
          if (hA <= e.nA + 0.001 && hB <= e.nB + 0.001) continue;
          const bA = Math.min(e.nA, hA);
          const bB = Math.min(e.nB, hB);
          // 계단 칸의 옆면은 디딤판 높이를 따라 잘게 나눈다
          const expect = [
            [0, 0, 1],
            [0, 0, -1],
            [1, 0, 0],
            [-1, 0, 0],
          ][e.nk];
          if (st !== 0 && ((Math.abs(st) === 1 && e.axis === 'x') || (Math.abs(st) === 2 && e.axis === 'z'))) {
            for (let s = 0; s < STEPS; s++) {
              const ta = s / STEPS;
              const tb = (s + 1) / STEPS;
              const pa = [lerp(e.a[0], e.b[0], ta), 0, lerp(e.a[2], e.b[2], ta)];
              const pb = [lerp(e.a[0], e.b[0], tb), 0, lerp(e.a[2], e.b[2], tb)];
              // 이 조각의 디딤판 높이 = 조각 양끝 경사 높이 중 높은 쪽
              const hs = Math.max(lerp(hA, hB, ta), lerp(hA, hB, tb));
              const ba = Math.min(hs, lerp(bA, bB, ta));
              const bb = Math.min(hs, lerp(bA, bB, tb));
              sides.quad([pa[0], hs, pa[2]], [pb[0], hs, pb[2]], [pb[0], bb, pb[2]], [pa[0], ba, pa[2]], [1, 1, 0.72, 0.72], SIDE.carved, e.axis, expect);
            }
            continue;
          }
          sides.quad([e.a[0], hA, e.a[2]], [e.b[0], hB, e.b[2]], [e.b[0], bB, e.b[2]], [e.a[0], bA, e.a[2]], [1, 1, 0.72, 0.72], sideLayer, e.axis, expect);
          // 풀 가장자리 (윗면이 풀이고 보이는 면일 때)
          const tl = this.top[c];
          if ((tl === TOP.grass || tl === TOP.forest) && e.nk !== 1 && Math.min(hA - bA, hB - bB) > 0.3) {
            const out = e.nk === 0 ? [0, 0, 0.03] : e.nk === 2 ? [0.03, 0, 0] : [-0.03, 0, 0];
            const lipH = 0.9;
            lip.quadUV(
              [e.a[0] + out[0], hA + 0.02, e.a[2] + out[2]],
              [e.b[0] + out[0], hB + 0.02, e.b[2] + out[2]],
              [e.b[0] + out[0], hB - lipH, e.b[2] + out[2]],
              [e.a[0] + out[0], hA - lipH, e.a[2] + out[2]],
              e.axis,
              lipH,
              expect,
            );
          }
        }
      }
    }
    return { top: top.build(), sides: sides.build(), lip: lip.build() };
  }

  /** 칸별 윗면 재질 인덱스 텍스처 (셰이더에서 경계를 픽셀 노이즈로 섞는다) */
  typeMapData(): Uint8Array {
    const d = new Uint8Array(this.W * this.D * 4);
    for (let c = 0; c < this.W * this.D; c++) {
      d[c * 4] = this.top[c];
      d[c * 4 + 3] = 255;
    }
    return d;
  }
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function segDist(px: number, pz: number, a: [number, number], b: [number, number]): number {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const l2 = dx * dx + dz * dz;
  let t = l2 > 0 ? ((px - a[0]) * dx + (pz - a[1]) * dz) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (a[0] + dx * t), pz - (a[1] + dz * t));
}

/** 사각형을 쌓아 BufferGeometry를 만드는 도구 */
export class GeoBuilder {
  private pos: number[] = [];
  private nrm: number[] = [];
  private uv: number[] = [];
  private col: number[] = [];
  private layer: number[] = [];
  private withLayer: boolean;
  constructor(withLayer: boolean) {
    this.withLayer = withLayer;
  }

  /** 사각형 a,b,c,d (둘레 순서). expect 방향을 향하도록 감기 순서를 자동으로 맞춘다. uv는 월드 좌표 기반(4유닛 반복) */
  quad(a: number[], b: number[], c: number[], d: number[], ao: number[], layer: number, axis: 'x' | 'z' | 'top', expect: number[]): void {
    let n = normalOf(a, b, c);
    let verts = [a, b, c, d];
    if (n[0] * expect[0] + n[1] * expect[1] + n[2] * expect[2] < 0) {
      verts = [a, d, c, b];
      ao = [ao[0], ao[3], ao[2], ao[1]];
      n = [-n[0], -n[1], -n[2]];
    }
    const uvs = verts.map((v) => (axis === 'top' ? [v[0] / 4, -v[2] / 4] : axis === 'x' ? [v[0] / 4, v[1] / 4] : [v[2] / 4, v[1] / 4]));
    // 옆면 u 방향이 법선에 맞게 (텍스처가 뒤집혀 보이지 않도록)
    if (axis === 'x' && n[2] < 0) uvs.forEach((u) => (u[0] = -u[0]));
    if (axis === 'z' && n[0] > 0) uvs.forEach((u) => (u[0] = -u[0]));
    const idx = [0, 1, 2, 0, 2, 3];
    for (const j of idx) {
      const v = verts[j];
      this.pos.push(v[0], v[1], v[2]);
      this.nrm.push(n[0], n[1], n[2]);
      this.uv.push(uvs[j][0], uvs[j][1]);
      const a2 = ao[j];
      this.col.push(a2, a2, a2);
      if (this.withLayer) this.layer.push(layer);
    }
  }

  /** 풀 가장자리처럼 세로 0..1 UV를 쓰는 사각형 (a,b 위쪽, c,d 아래쪽) */
  quadUV(a: number[], b: number[], c: number[], d: number[], axis: 'x' | 'z', h: number, expect: number[]): void {
    const u = (v: number[]) => (axis === 'x' ? v[0] : v[2]) / 4;
    let verts = [a, b, c, d];
    let uvs = [
      [u(a), 1],
      [u(b), 1],
      [u(c), 1 - h],
      [u(d), 1 - h],
    ];
    let n = normalOf(a, b, c);
    if (n[0] * expect[0] + n[1] * expect[1] + n[2] * expect[2] < 0) {
      verts = [a, d, c, b];
      uvs = [uvs[0], uvs[3], uvs[2], uvs[1]];
      n = [-n[0], -n[1], -n[2]];
    }
    const idx = [0, 1, 2, 0, 2, 3];
    for (const j of idx) {
      const v = verts[j];
      this.pos.push(v[0], v[1], v[2]);
      this.nrm.push(n[0], n[1], n[2]);
      this.uv.push(uvs[j][0], uvs[j][1]);
      this.col.push(1, 1, 1);
    }
  }

  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    if (this.withLayer) g.setAttribute('aLayer', new THREE.Float32BufferAttribute(this.layer, 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

function normalOf(a: number[], b: number[], c: number[]): [number, number, number] {
  const ux = b[0] - a[0];
  const uy = b[1] - a[1];
  const uz = b[2] - a[2];
  const vx = c[0] - a[0];
  const vy = c[1] - a[1];
  const vz = c[2] - a[2];
  let nx = uy * vz - uz * vy;
  let ny = uz * vx - ux * vz;
  let nz = ux * vy - uy * vx;
  const l = Math.hypot(nx, ny, nz) || 1;
  nx /= l;
  ny /= l;
  nz /= l;
  return [nx, ny, nz];
}
