// 프레임들을 하나의 시트(아틀라스)로 묶는다. 색 텍스처와 노멀+발광 텍스처가 같은 배치를 공유한다.

import type { FrameImage } from './rig.ts';

export type Dir = 'down' | 'side' | 'up';
export const DIRS: readonly Dir[] = ['down', 'side', 'up'];
export const DIR_YAW: Record<Dir, number> = { down: 0, side: Math.PI / 2, up: Math.PI };

export interface AnimInfo {
  start: number;
  count: number;
  durations: number[];
  loop: boolean;
}

export interface SheetData {
  name: string;
  frameW: number;
  frameH: number;
  cols: number;
  rows: number;
  width: number;
  height: number;
  color: Uint8Array;
  normal: Uint8Array;
  /** 프레임 안에서 발 기준점 (왼쪽 위 기준 픽셀 좌표) */
  pivotX: number;
  pivotY: number;
  anims: Record<string, AnimInfo>;
  frameCount: number;
}

export interface SheetEntry {
  key: string;
  frames: FrameImage[];
  durations: number[];
  loop: boolean;
}

export function buildSheet(
  name: string,
  frameW: number,
  frameH: number,
  pivotX: number,
  pivotY: number,
  entries: SheetEntry[],
  maxCols = 16,
): SheetData {
  const total = entries.reduce((s, e) => s + e.frames.length, 0);
  const cols = Math.min(maxCols, total);
  const rows = Math.ceil(total / cols);
  const width = cols * frameW;
  const height = rows * frameH;
  const color = new Uint8Array(width * height * 4);
  const normal = new Uint8Array(width * height * 4);
  // 투명 영역 노멀 기본값
  for (let k = 0; k < width * height; k++) {
    normal[k * 4] = 128;
    normal[k * 4 + 1] = 128;
    normal[k * 4 + 2] = 255;
  }
  const anims: Record<string, AnimInfo> = {};
  let index = 0;
  for (const e of entries) {
    anims[e.key] = { start: index, count: e.frames.length, durations: e.durations, loop: e.loop };
    for (const f of e.frames) {
      const cx = (index % cols) * frameW;
      const cy = Math.floor(index / cols) * frameH;
      for (let y = 0; y < frameH; y++) {
        for (let x = 0; x < frameW; x++) {
          const s = (y * f.w + x) * 4;
          const d = ((cy + y) * width + cx + x) * 4;
          for (let c = 0; c < 4; c++) {
            color[d + c] = f.color[s + c];
            normal[d + c] = f.normal[s + c];
          }
        }
      }
      index++;
    }
  }
  bleed(color, width, height, 3);
  bleedNormal(normal, color, width, height);
  return { name, frameW, frameH, cols, rows, width, height, color, normal, pivotX, pivotY, anims, frameCount: total };
}

/** 투명 텍셀에 이웃 불투명 색을 번지게 해 선형 보간 시 검은 테두리가 생기지 않게 한다 (알파는 유지) */
export function bleed(data: Uint8Array, w: number, h: number, passes: number): void {
  const filled = new Uint8Array(w * h);
  for (let k = 0; k < w * h; k++) filled[k] = data[k * 4 + 3] > 0 ? 1 : 0;
  for (let p = 0; p < passes; p++) {
    const next = new Uint8Array(filled);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const k = y * w + x;
        if (filled[k]) continue;
        let r = 0;
        let g = 0;
        let b = 0;
        let n = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const xx = x + dx;
            const yy = y + dy;
            if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
            const q = yy * w + xx;
            if (!filled[q]) continue;
            r += data[q * 4];
            g += data[q * 4 + 1];
            b += data[q * 4 + 2];
            n++;
          }
        }
        if (n > 0) {
          data[k * 4] = Math.round(r / n);
          data[k * 4 + 1] = Math.round(g / n);
          data[k * 4 + 2] = Math.round(b / n);
          next[k] = 1;
        }
      }
    }
    filled.set(next);
  }
}

function bleedNormal(normal: Uint8Array, color: Uint8Array, w: number, h: number): void {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const k = y * w + x;
      if (color[k * 4 + 3] > 0) continue;
      // 가까운 불투명 이웃의 노멀 복사
      for (let r = 1; r <= 2; r++) {
        let found = -1;
        for (let dy = -r; dy <= r && found < 0; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            const xx = x + dx;
            const yy = y + dy;
            if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
            const q = yy * w + xx;
            if (color[q * 4 + 3] > 0) {
              found = q;
              break;
            }
          }
        }
        if (found >= 0) {
          normal[k * 4] = normal[found * 4];
          normal[k * 4 + 1] = normal[found * 4 + 1];
          normal[k * 4 + 2] = normal[found * 4 + 2];
          break;
        }
      }
    }
  }
}

/** 좌우 반전 프레임 (필요 시) */
export function flipFrame(f: FrameImage): FrameImage {
  const color = new Uint8Array(f.color.length);
  const normal = new Uint8Array(f.normal.length);
  for (let y = 0; y < f.h; y++) {
    for (let x = 0; x < f.w; x++) {
      const s = (y * f.w + x) * 4;
      const d = (y * f.w + (f.w - 1 - x)) * 4;
      for (let c = 0; c < 4; c++) {
        color[d + c] = f.color[s + c];
        normal[d + c] = f.normal[s + c];
      }
      normal[d] = 255 - f.normal[s];
    }
  }
  return { w: f.w, h: f.h, color, normal };
}
