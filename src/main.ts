import galmuri11 from 'galmuri/dist/Galmuri11.woff2?url';
import galmuri11b from 'galmuri/dist/Galmuri11-Bold.woff2?url';
import galmuri14 from 'galmuri/dist/Galmuri14.woff2?url';
import galmuri9 from 'galmuri/dist/Galmuri9.woff2?url';
import './ui/style.css';
import { Game } from './game/Game.ts';

async function loadFonts(): Promise<void> {
  const faces = [
    new FontFace('Galmuri11', `url(${galmuri11}) format('woff2')`, { weight: '400' }),
    new FontFace('Galmuri11', `url(${galmuri11b}) format('woff2')`, { weight: '700' }),
    new FontFace('Galmuri14', `url(${galmuri14}) format('woff2')`),
    new FontFace('Galmuri9', `url(${galmuri9}) format('woff2')`),
  ];
  await Promise.all(
    faces.map(async (f) => {
      try {
        await f.load();
        document.fonts.add(f);
      } catch {
        // 폰트를 못 불러와도 게임은 진행 (시스템 글꼴 대체)
      }
    }),
  );
}

async function boot(): Promise<void> {
  await loadFonts();
  const canvas = document.getElementById('view') as HTMLCanvasElement;
  const ui = document.getElementById('ui') as HTMLDivElement;
  const game = await Game.create(canvas, ui);
  game.start();
}

boot().catch((e) => {
  console.error(e);
  const ui = document.getElementById('ui');
  if (ui) ui.innerHTML = `<div class="fatal">게임을 시작하지 못했습니다.<br>${String(e)}</div>`;
});
