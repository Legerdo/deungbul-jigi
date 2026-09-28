// 개발용 빠른 스크린샷
// node scripts/shot.mjs --q=?debug --out=evidence/tmp/a.png --wait=2500 --js="__GAME__.teleport(0,0)" --zoom=760,400,400,300,3
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { crop, decodePng, encodePng, upscale } from './png.mjs';

const arg = (name, def) => {
  const a = process.argv.find((s) => s.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : def;
};
const query = arg('q', '');
const out = arg('out', 'evidence/tmp/shot.png');
const wait = Number(arg('wait', '2500'));
const js = arg('js', '');
const zoom = arg('zoom', '');
const port = arg('port', '5173');
const headless = !process.argv.includes('--headed');
mkdirSync(dirname(out), { recursive: true });

const browser = await chromium.launch({
  channel: 'chrome',
  headless,
  args: ['--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11', '--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const logs = [];
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
page.on('response', (r) => {
  if (r.status() >= 400) logs.push(`[http ${r.status()}] ${r.url()}`);
});
await page.goto(`http://localhost:${port}/${query}`, { waitUntil: 'load' });
await page.waitForTimeout(wait);
if (js) {
  await page.evaluate(js);
  await page.waitForTimeout(Number(arg('after', '800')));
}
await page.screenshot({ path: out });
if (zoom) {
  const [x, y, w, h, s] = zoom.split(',').map(Number);
  const img = decodePng(readFileSync(out));
  const c = crop(img, x, y, w, h);
  writeFileSync(out.replace(/\.png$/, '_zoom.png'), encodePng(w * s, h * s, upscale(w, h, c, s)));
}
console.log(logs.slice(0, 40).join('\n'));
await browser.close();
