// 저장된 스크린샷의 일부를 정수배로 확대: node scripts/zoom.mjs in.png x,y,w,h,s [out.png]
import { readFileSync, writeFileSync } from 'node:fs';
import { crop, decodePng, encodePng, upscale } from './png.mjs';

const [, , src, rect, dst] = process.argv;
const [x, y, w, h, s] = rect.split(',').map(Number);
const img = decodePng(readFileSync(src));
const c = crop(img, x, y, w, h);
writeFileSync(dst ?? src.replace(/\.png$/, '_zoom.png'), encodePng(w * s, h * s, upscale(w, h, c, s)));
