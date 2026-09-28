// 결정적 난수와 노이즈. 모든 에셋은 여기의 시드 기반 함수만 사용하므로 재생성 시 동일한 결과가 나온다.

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Rng {
  private next: () => number;
  constructor(seed: number) {
    this.next = mulberry32(seed);
  }
  float(): number {
    return this.next();
  }
  range(a: number, b: number): number {
    return a + (b - a) * this.next();
  }
  int(a: number, b: number): number {
    return Math.floor(a + (b - a + 1) * this.next());
  }
  chance(p: number): boolean {
    return this.next() < p;
  }
  pick<T>(arr: readonly T[]): T {
    return arr[Math.floor(this.next() * arr.length) % arr.length];
  }
}

/** 정수 좌표 해시 → [0,1) */
export function hash2(x: number, y: number, seed = 0): number {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(seed | 0, 2147483647)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967296;
}

export function hash3(x: number, y: number, z: number, seed = 0): number {
  return hash2(x + Math.imul(z | 0, 1013), y - Math.imul(z | 0, 7919), seed);
}

function smooth(t: number): number {
  return t * t * (3 - 2 * t);
}

/** 주기 px, py로 타일링되는 값 노이즈 (주기 0이면 비타일링) */
export function valueNoise(x: number, y: number, seed: number, px = 0, py = 0): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const w = (v: number, p: number) => (p > 0 ? ((v % p) + p) % p : v);
  const a = hash2(w(xi, px), w(yi, py), seed);
  const b = hash2(w(xi + 1, px), w(yi, py), seed);
  const c = hash2(w(xi, px), w(yi + 1, py), seed);
  const d = hash2(w(xi + 1, px), w(yi + 1, py), seed);
  const u = smooth(xf);
  const v = smooth(yf);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

/** 옥타브 합성 노이즈. period는 기본 격자 기준 주기 */
export function fbm(x: number, y: number, seed: number, octaves = 4, period = 0): number {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  let f = 1;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise(x * f, y * f, seed + i * 131, period * f, period * f);
    norm += amp;
    amp *= 0.5;
    f *= 2;
  }
  return sum / norm;
}

export function valueNoise3(x: number, y: number, z: number, seed: number): number {
  const zi = Math.floor(z);
  const zf = smooth(z - zi);
  const a = valueNoise(x + zi * 17.3, y - zi * 9.1, seed);
  const b = valueNoise(x + (zi + 1) * 17.3, y - (zi + 1) * 9.1, seed);
  return a + (b - a) * zf;
}

/** 타일링 보로노이: 가장 가까운 두 셀까지의 거리와 셀 id */
export function voronoi(
  x: number,
  y: number,
  cells: number,
  seed: number,
  jitter = 0.85,
): { d1: number; d2: number; id: number; cx: number; cy: number } {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  let d1 = 1e9;
  let d2 = 1e9;
  let id = 0;
  let bcx = 0;
  let bcy = 0;
  for (let j = -1; j <= 1; j++) {
    for (let i = -1; i <= 1; i++) {
      const cx = xi + i;
      const cy = yi + j;
      const wx = ((cx % cells) + cells) % cells;
      const wy = ((cy % cells) + cells) % cells;
      const px = cx + 0.5 + (hash2(wx, wy, seed) - 0.5) * jitter;
      const py = cy + 0.5 + (hash2(wx, wy, seed + 77) - 0.5) * jitter;
      const dx = px - x;
      const dy = py - y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < d1) {
        d2 = d1;
        d1 = d;
        id = wx + wy * cells;
        bcx = px;
        bcy = py;
      } else if (d < d2) {
        d2 = d;
      }
    }
  }
  return { d1, d2, id, cx: bcx, cy: bcy };
}
