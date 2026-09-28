// 캐릭터 리그 공통 도구: 프레임 렌더링(롤·이동), 여유 캔버스 자르기, 애니메이션 정의 → 시트
import { type FrameImage, PixelRig } from '../rig.ts';
import { buildSheet, DIR_YAW, type Dir, type SheetData, type SheetEntry } from '../sheet.ts';

export interface FrameSpec {
  w: number;
  h: number;
  ox: number;
  oy: number;
}

export interface ViewOpts {
  pitch?: number;
  /** 화면 평면 회전(쓰러짐 등)과 그 중심 */
  roll?: number;
  rollPivot?: [number, number];
  shift?: [number, number];
}

export const CHAR_PITCH = 0.38;

export function renderFrame(spec: FrameSpec, dir: Dir, draw: (rig: PixelRig) => void, v: ViewOpts = {}): FrameImage {
  const rig = new PixelRig(spec.w, spec.h, spec.ox, spec.oy);
  rig.setView(DIR_YAW[dir], v.pitch ?? CHAR_PITCH, v.roll ?? 0, v.rollPivot ?? [0, 0], v.shift ?? [0, 0]);
  draw(rig);
  return rig.resolve();
}

export interface CharAnim<P> {
  name: string;
  frames: number;
  durations: number[];
  loop: boolean;
  pose: (f: number, dir: Dir) => P;
}

export function buildCharSheet<P>(
  name: string,
  spec: FrameSpec,
  dirs: readonly Dir[],
  anims: CharAnim<P>[],
  render: (pose: P, dir: Dir) => FrameImage,
  maxCols = 16,
): SheetData {
  const entries: SheetEntry[] = [];
  for (const a of anims) {
    for (const dir of dirs) {
      const frames: FrameImage[] = [];
      for (let f = 0; f < a.frames; f++) frames.push(render(a.pose(f, dir), dir));
      entries.push({ key: `${a.name}_${dir}`, frames, durations: a.durations, loop: a.loop });
    }
  }
  return buildSheet(name, spec.w, spec.h, spec.ox, spec.oy, entries, maxCols);
}

/** 프레임 이미지를 알파 배수로 흐리게 (잔상용이 아니라 소멸 디더 등에 사용) */
export function fadeFrame(img: FrameImage, keep: (i: number, j: number) => boolean): FrameImage {
  const color = new Uint8Array(img.color);
  const normal = new Uint8Array(img.normal);
  for (let j = 0; j < img.h; j++) {
    for (let i = 0; i < img.w; i++) {
      if (keep(i, j)) continue;
      const k = (j * img.w + i) * 4;
      color[k + 3] = 0;
      normal[k + 3] = 0;
    }
  }
  return { w: img.w, h: img.h, color, normal };
}

export const BAYER4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
export const bayerAt = (i: number, j: number): number => BAYER4[(j & 3) * 4 + (i & 3)];
