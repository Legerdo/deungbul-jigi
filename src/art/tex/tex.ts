// 환경 텍스처용 RGBA 버퍼와 도구. 모든 텍스처는 1유닛 = 16텍셀 밀도로 설계되고, 가장자리가 이어지게(타일링) 만든다.

import type { Ramp, RGBA } from '../palette.ts';

export class Tex {
  readonly w: number;
  readonly h: number;
  readonly data: Uint8Array;
  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.data = new Uint8Array(w * h * 4);
  }
  private idx(x: number, y: number): number {
    const xx = ((x % this.w) + this.w) % this.w;
    const yy = ((y % this.h) + this.h) % this.h;
    return (yy * this.w + xx) * 4;
  }
  set(x: number, y: number, c: RGBA): void {
    const i = this.idx(Math.floor(x), Math.floor(y));
    this.data[i] = c[0];
    this.data[i + 1] = c[1];
    this.data[i + 2] = c[2];
    this.data[i + 3] = c[3];
  }
  /** 경계 밖이면 무시 (타일링하지 않는 텍스처용) */
  put(x: number, y: number, c: RGBA): void {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = (y * this.w + x) * 4;
    this.data[i] = c[0];
    this.data[i + 1] = c[1];
    this.data[i + 2] = c[2];
    this.data[i + 3] = c[3];
  }
  get(x: number, y: number): RGBA {
    const i = this.idx(Math.floor(x), Math.floor(y));
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
  }
  alpha(x: number, y: number): number {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return 0;
    return this.data[(y * this.w + x) * 4 + 3];
  }
  fill(c: RGBA): void {
    for (let k = 0; k < this.w * this.h; k++) {
      this.data[k * 4] = c[0];
      this.data[k * 4 + 1] = c[1];
      this.data[k * 4 + 2] = c[2];
      this.data[k * 4 + 3] = c[3];
    }
  }
  each(fn: (x: number, y: number) => RGBA | null): void {
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        const c = fn(x, y);
        if (c) this.set(x, y, c);
      }
    }
  }
  rect(x0: number, y0: number, w: number, h: number, c: RGBA, wrap = true): void {
    for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) (wrap ? this.set(x, y, c) : this.put(x, y, c));
  }
  line(x0: number, y0: number, x1: number, y1: number, c: RGBA, wrap = true): void {
    x0 = Math.round(x0);
    y0 = Math.round(y0);
    x1 = Math.round(x1);
    y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0);
    const dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (;;) {
      if (wrap) this.set(x0, y0, c);
      else this.put(x0, y0, c);
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
    }
  }
  disc(cx: number, cy: number, r: number, c: RGBA, wrap = true): void {
    for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
      for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
        const dx = x + 0.5 - cx;
        const dy = y + 0.5 - cy;
        if (dx * dx + dy * dy <= r * r) (wrap ? this.set(x, y, c) : this.put(x, y, c));
      }
    }
  }
  clone(): Tex {
    const t = new Tex(this.w, this.h);
    t.data.set(this.data);
    return t;
  }
  /** 다른 텍스처를 (dx,dy)에 복사 (알파 0 제외) */
  blit(src: Tex, dx: number, dy: number, wrap = false): void {
    for (let y = 0; y < src.h; y++) {
      for (let x = 0; x < src.w; x++) {
        const i = (y * src.w + x) * 4;
        if (src.data[i + 3] === 0) continue;
        const c: RGBA = [src.data[i], src.data[i + 1], src.data[i + 2], src.data[i + 3]];
        if (wrap) this.set(dx + x, dy + y, c);
        else this.put(dx + x, dy + y, c);
      }
    }
  }
}

/** 4x4 베이어 임계값 [0,1) */
export const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
export function bayer(x: number, y: number): number {
  return BAYER[(((y % 4) + 4) % 4) * 4 + (((x % 4) + 4) % 4)];
}

/** 0..1 값을 램프 인덱스 구간으로 양자화 (경계만 살짝 디더) */
export function quant(r: Ramp, v: number, lo: number, hi: number, x: number, y: number, dither = 0.05): RGBA {
  const n = hi - lo + 1;
  const t = Math.max(0, Math.min(0.9999, v)) * n + (bayer(x, y) - 0.5) * dither * n;
  const i = Math.max(0, Math.min(n - 1, Math.floor(t)));
  return r.colors[lo + i];
}

/** 알파가 있는 텍스처 가장자리에 1px 외곽선 */
export function outlineAlpha(t: Tex, color: RGBA): void {
  const src = t.clone();
  for (let y = 0; y < t.h; y++) {
    for (let x = 0; x < t.w; x++) {
      if (src.alpha(x, y) > 0) continue;
      if (src.alpha(x - 1, y) || src.alpha(x + 1, y) || src.alpha(x, y - 1) || src.alpha(x, y + 1)) t.put(x, y, color);
    }
  }
}
