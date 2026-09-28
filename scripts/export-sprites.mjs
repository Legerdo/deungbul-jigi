// 게임과 동일한 생성 코드(src/art)로 스프라이트 시트를 PNG로 내보낸다.
// 실행: npm run sprites  (Node 22.18+/24의 TypeScript 타입 제거 기능 사용)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { composite, encodePng, upscale } from './png.mjs';
import { buildAllSheets, buildAllTextures } from '../src/art/index.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'evidence', 'sprites');
mkdirSync(out, { recursive: true });

const only = process.argv.slice(2).find((a) => !a.startsWith('--'));
const t0 = performance.now();
const sheets = buildAllSheets(only);
console.log(`생성 시간 ${(performance.now() - t0).toFixed(0)}ms`);

for (const s of sheets) {
  const w = s.width;
  const h = s.height;
  writeFileSync(join(out, `${s.name}_sheet_1x.png`), encodePng(w, h, s.color));
  // 미리보기는 가로 1920px 이하로 (큰 이미지를 열어 확인할 수 있게)
  const scaleN = Math.max(1, Math.min(4, Math.floor(1920 / Math.max(w, h))));
  const bg = composite(w, h, s.color, [58, 56, 74], s.frameW, s.frameH);
  writeFileSync(join(out, `${s.name}_sheet_x${scaleN}_preview.png`), encodePng(w * scaleN, h * scaleN, upscale(w, h, bg, scaleN)));
  // 노멀(RGB)만 보기
  const nrm = new Uint8Array(s.normal.length);
  for (let k = 0; k < w * h; k++) {
    const a = s.color[k * 4 + 3];
    nrm[k * 4] = a ? s.normal[k * 4] : 30;
    nrm[k * 4 + 1] = a ? s.normal[k * 4 + 1] : 30;
    nrm[k * 4 + 2] = a ? s.normal[k * 4 + 2] : 30;
    nrm[k * 4 + 3] = 255;
  }
  writeFileSync(join(out, `${s.name}_normal_1x.png`), encodePng(w, h, nrm));
  console.log(`${s.name}: ${w}x${h}, 프레임 ${s.frameCount}개 (${s.frameW}x${s.frameH}), 애니메이션 ${Object.keys(s.anims).length}개`);
  if (process.argv.includes('--strips')) exportStrips(s);
}

if (process.argv.includes('--tex')) {
  const texDir = join(out, '..', 'textures');
  mkdirSync(texDir, { recursive: true });
  for (const { name, tex } of buildAllTextures()) {
    const bg = composite(tex.w, tex.h, tex.data, [40, 38, 52]);
    // 이음새 확인을 위해 2x2 반복 후 4배 확대
    const rep = new Uint8Array(tex.w * 2 * tex.h * 2 * 4);
    for (let y = 0; y < tex.h * 2; y++)
      for (let x = 0; x < tex.w * 2; x++) {
        const s = ((y % tex.h) * tex.w + (x % tex.w)) * 4;
        const d = (y * tex.w * 2 + x) * 4;
        for (let c = 0; c < 4; c++) rep[d + c] = bg[s + c];
      }
    const sc = tex.w >= 256 ? 2 : 4;
    writeFileSync(join(texDir, `${name}.png`), encodePng(tex.w * 2 * sc, tex.h * 2 * sc, upscale(tex.w * 2, tex.h * 2, rep, sc)));
  }
  // 한눈에 보는 모음 (각 텍스처 2x2 반복, 3배 확대)
  const list = buildAllTextures().filter((t) => t.tex.w <= 64 || t.name === 'foliage');
  const cellW = 400;
  const cellH = 400;
  const cols = 6;
  const rows = Math.ceil(list.length / cols);
  const M = new Uint8Array(cols * cellW * rows * cellH * 4).fill(28);
  list.forEach(({ tex }, i) => {
    const sc = tex.w > 64 ? 1 : 3;
    const reps = tex.w > 64 ? 1 : 2;
    const ox = (i % cols) * cellW + 4;
    const oy = Math.floor(i / cols) * cellH + 4;
    for (let y = 0; y < tex.h * reps * sc && y < cellH - 8; y++) {
      for (let x = 0; x < tex.w * reps * sc && x < cellW - 8; x++) {
        const sx = Math.floor(x / sc) % tex.w;
        const sy = Math.floor(y / sc) % tex.h;
        const s = (sy * tex.w + sx) * 4;
        const a = tex.data[s + 3] / 255;
        const d = ((oy + y) * cols * cellW + ox + x) * 4;
        M[d] = Math.round(tex.data[s] * a + 40 * (1 - a));
        M[d + 1] = Math.round(tex.data[s + 1] * a + 38 * (1 - a));
        M[d + 2] = Math.round(tex.data[s + 2] * a + 52 * (1 - a));
        M[d + 3] = 255;
      }
    }
  });
  for (let k = 3; k < M.length; k += 4) M[k] = 255;
  writeFileSync(join(texDir, '_montage.png'), encodePng(cols * cellW, rows * cellH, M));
  console.log('텍스처 내보내기 완료');
}

/** 애니메이션별 스트립: 방향마다 한 줄, 발 기준선(빨간 점선)과 프레임 경계 표시 */
function exportStrips(s) {
  const stripDir = join(out, 'strips');
  mkdirSync(stripDir, { recursive: true });
  const names = [...new Set(Object.keys(s.anims).map((k) => k.replace(/_(down|side|up)$/, '')))];
  for (const name of names) {
    const dirs = ['down', 'side', 'up'].filter((d) => s.anims[`${name}_${d}`]);
    const count = Math.max(...dirs.map((d) => s.anims[`${name}_${d}`].count));
    const W = count * s.frameW;
    const H = dirs.length * s.frameH;
    // 스트립은 한 변 1920px 이하
    const S = Math.max(1, Math.min(5, Math.floor(1920 / Math.max(W, H))));
    const img = new Uint8Array(W * H * 4);
    for (let k = 0; k < W * H; k++) {
      img[k * 4] = 58;
      img[k * 4 + 1] = 56;
      img[k * 4 + 2] = 74;
      img[k * 4 + 3] = 255;
    }
    dirs.forEach((d, row) => {
      const a = s.anims[`${name}_${d}`];
      for (let f = 0; f < a.count; f++) {
        const idx = a.start + f;
        const sx = (idx % s.cols) * s.frameW;
        const sy = Math.floor(idx / s.cols) * s.frameH;
        for (let y = 0; y < s.frameH; y++) {
          for (let x = 0; x < s.frameW; x++) {
            const si = ((sy + y) * s.width + sx + x) * 4;
            const di = ((row * s.frameH + y) * W + f * s.frameW + x) * 4;
            const al = s.color[si + 3] / 255;
            let bg = [58, 56, 74];
            if (y === s.pivotY && x % 2 === 0) bg = [150, 60, 70];
            if (x === 0 || y === 0) bg = [80, 78, 100];
            img[di] = Math.round(s.color[si] * al + bg[0] * (1 - al));
            img[di + 1] = Math.round(s.color[si + 1] * al + bg[1] * (1 - al));
            img[di + 2] = Math.round(s.color[si + 2] * al + bg[2] * (1 - al));
          }
        }
      }
    });
    writeFileSync(join(stripDir, `${s.name}_${name}.png`), encodePng(W * S, H * S, upscale(W, H, img, S)));
  }
}
