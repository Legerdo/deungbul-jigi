// 자동 검증: 실제 Chrome(1920x1080, DPR 1)에서 게임을 처음부터 끝까지 진행한다.
//  1) 완주: 타이틀 → 인트로 → 솔과 대화 → 숲 전투 → 석등 → 폐허 → 보스(2페이즈 포함) → 큰 등불 → 엔딩
//     (?debug&bot 자동 조종은 사람과 같은 조작 신호만 만든다 — 순간이동·무적 없음)
//  2) 사망 → 다시 일어서기 검증: 석등을 밝히기 전엔 마을 시작점, 쉼터 석등을 E로 밝힌 뒤엔 석등 앞
//  3) 30초 보스전 구간 프레임 시간 측정 (평균 FPS, p95 프레임 시간, 화면 주사율, CPU 작업 시간)
//  4) 마을·숲 전투·보스전·엔딩 스크린샷과 연속 프레임 저장
// 사용: npm run build && npm run verify   (기본: vite preview를 직접 띄운다)
//       node scripts/verify.mjs --url=http://localhost:5173/   (이미 떠 있는 개발 서버 사용)
//       --only=run|death|fps  --headed
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, def) => {
  const a = process.argv.find((s) => s.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : def;
};
const headed = process.argv.includes('--headed');
const only = arg('only', '');
const outDir = join(root, 'evidence', 'verify');
const shotDir = join(root, 'evidence', 'screens');
const frameDir = join(root, 'evidence', 'frames');
for (const d of [outDir, shotDir, frameDir]) mkdirSync(d, { recursive: true });

let server = null;
let base = arg('url', '');
if (!base) {
  base = 'http://localhost:4173/';
  server = spawn(process.execPath, [join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--port', '4173', '--strictPort'], { cwd: root, stdio: 'pipe' });
  await new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error('preview 서버 시작 시간 초과')), 20000);
    server.stdout.on('data', (b) => {
      if (String(b).includes('4173')) {
        clearTimeout(t);
        res();
      }
    });
    server.on('exit', (c) => rej(new Error(`preview 종료 ${c}`)));
  });
}

const browser = await chromium.launch({
  channel: 'chrome',
  headless: !headed,
  args: ['--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11', '--autoplay-policy=no-user-gesture-required', '--disable-background-timer-throttling', '--disable-renderer-backgrounding'],
});
const report = { startedAt: new Date().toISOString(), base, headless: !headed, viewport: '1920x1080', dpr: 1, phases: {}, errors: [] };
const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function openPage(query) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => report.errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error') report.errors.push(`console: ${m.text()}`);
  });
  await page.goto(`${base}${query}`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__GAME__ && window.__GAME__.state.mode !== 'loading', null, { timeout: 60000 });
  return page;
}

const state = (page) => page.evaluate(() => window.__GAME__.state);

async function saveDataUrl(url, file) {
  writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
}

async function gpuInfo(page) {
  return page.evaluate(() => {
    const c = document.createElement('canvas');
    const g = c.getContext('webgl2');
    const ext = g && g.getExtension('WEBGL_debug_renderer_info');
    return ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown';
  });
}

// ─────────────────────────────── 1) 완주 ───────────────────────────────
async function phaseRun() {
  const page = await openPage('?debug&bot');
  report.gpu = await gpuInfo(page);
  log('GPU:', report.gpu);
  const t0 = Date.now();
  const seen = new Set();
  const marks = [];
  let lastMode = '';
  let framesDone = { attack: false, dodge: false, boss: false };
  const limit = Number(arg('limit', '720')) * 1000;
  while (Date.now() - t0 < limit) {
    const s = await state(page);
    const el = ((Date.now() - t0) / 1000).toFixed(1);
    if (s.mode !== lastMode) {
      log(`[${el}s] 모드 ${lastMode || '-'} → ${s.mode}  (x ${s.x.toFixed(1)}, hp ${s.hp})`);
      marks.push({ t: +el, mode: s.mode, x: s.x, hp: s.hp });
      lastMode = s.mode;
    }
    const once = async (key, cond, fn) => {
      if (!seen.has(key) && cond) {
        seen.add(key);
        await fn();
      }
    };
    await once('title', s.mode === 'title', () => page.screenshot({ path: join(shotDir, '00_title.png') }));
    await once('intro', s.mode === 'intro', async () => {
      await sleep(2500);
      await page.screenshot({ path: join(shotDir, '01_intro.png') });
    });
    await once('dialog', s.mode === 'dialog', async () => {
      await sleep(900);
      await page.screenshot({ path: join(shotDir, '02_village_dialog.png') });
    });
    await once('village', s.mode === 'play' && s.talked && s.x > -26 && s.x < -18, () => page.screenshot({ path: join(shotDir, '03_village.png') }));
    // 숲 전투: 5유닛 안의 적이 공격·피격 중이고 리안도 베거나 구르는 순간
    const fighting = s.mode === 'play' && s.x > 0 && s.x < 44 && s.enemiesClose.some((e) => /windup|charge|cast|hurt|stun|recover/.test(e)) && /attack|dodge/.test(s.pstate);
    await once('forest', fighting, () => page.screenshot({ path: join(shotDir, '04_forest_combat.png') }));
    if (fighting && !framesDone.attack && seen.has('forest')) {
      framesDone.attack = true;
      const url = await page.evaluate(() => window.__GAME__.captureFrames(16, 360, 300, 4, 2));
      await saveDataUrl(url, join(frameDir, 'forest_combat_16f_every2.png'));
      log('연속 프레임 저장: forest_combat');
    }
    await once('cp', s.checkpoints[0], () => page.screenshot({ path: join(shotDir, '05_checkpoint.png') }));
    await once('ruins', s.mode === 'play' && s.x > 48 && s.x < 60, () => page.screenshot({ path: join(shotDir, '06_ruins.png') }));
    await once('bossIntro', s.mode === 'cutscene' && s.bossState === 'awaken', async () => {
      await sleep(1600);
      await page.screenshot({ path: join(shotDir, '07_boss_intro.png') });
    });
    await once('boss1', s.bossActive && s.bossPhase === 1 && s.mode === 'play', async () => {
      await sleep(3500);
      await page.screenshot({ path: join(shotDir, '08_boss_fight.png') });
      if (!framesDone.boss) {
        framesDone.boss = true;
        // 4열 x 4행 — 한 변 1920px 이하로 유지한다
        const url = await page.evaluate(() => window.__GAME__.captureFrames(16, 480, 390, 4, 2));
        await saveDataUrl(url, join(frameDir, 'boss_fight_16f_every2.png'));
        log('연속 프레임 저장: boss_fight');
      }
    });
    await once('boss2', s.bossActive && s.bossPhase === 2 && /barrage|hop|slam|sweep/.test(s.bossState), async () => {
      await sleep(700);
      await page.screenshot({ path: join(shotDir, '09_boss_phase2.png') });
    });
    await once('bossDown', s.bossDefeated, async () => {
      await sleep(1500);
      await page.screenshot({ path: join(shotDir, '10_boss_defeated.png') });
    });
    await once('ending', s.mode === 'ending', async () => {
      await sleep(5200);
      await page.screenshot({ path: join(shotDir, '11_ending.png') });
    });
    if (s.mode === 'results') {
      await sleep(1200);
      await page.screenshot({ path: join(shotDir, '12_results.png') });
      const fin = await state(page);
      report.phases.run = { ok: true, seconds: (Date.now() - t0) / 1000, marks, final: fin };
      log('완주 성공', JSON.stringify(fin.stats));
      await page.close();
      return;
    }
    await sleep(250);
  }
  const fin = await state(page);
  await page.screenshot({ path: join(outDir, 'run_timeout.png') });
  report.phases.run = { ok: false, seconds: (Date.now() - t0) / 1000, marks, final: fin, botLog: await page.evaluate(() => window.__GAME__.botLog()) };
  log('완주 시간 초과', JSON.stringify(fin));
  await page.close();
}

// ─────────────────────────────── 2) 사망 → 재시작 ───────────────────────────────
async function phaseDeath() {
  const page = await openPage('?debug&bot');
  await page.waitForFunction(() => window.__GAME__.state.mode === 'title', null, { timeout: 30000 });
  await page.evaluate(() => window.__GAME__.skipTitle());
  await page.waitForFunction(() => window.__GAME__.state.mode === 'play', null, { timeout: 30000 });
  // 숲 멧돼지 앞에서 저항하지 않고 맞는다
  await page.evaluate(() => {
    const g = window.__GAME__;
    g.bot(true, true);
    g.teleport(4.5, -4.2);
    g.setHp(2);
  });
  const t0 = Date.now();
  let died = false;
  while (Date.now() - t0 < 40000) {
    const s = await state(page);
    if (s.mode === 'dead') {
      died = true;
      break;
    }
    await sleep(200);
  }
  await sleep(2200);
  await page.screenshot({ path: join(shotDir, '13_death.png') });
  // 사람처럼 Enter로 다시 일어선다
  await page.evaluate(() => window.__GAME__.bot(false));
  await page.keyboard.press('Enter');
  await sleep(1500);
  const s = await state(page);
  await page.screenshot({ path: join(shotDir, '14_respawn.png') });
  const first = died && s.mode === 'play' && s.hp === 10 && s.events.includes('respawn');
  // 쉼터 석등을 E로 밝힌 뒤 다시 쓰러지면 마을이 아니라 석등 앞에서 일어나야 한다
  const checkpoint = await checkpointRespawn(page);
  const ok = first && checkpoint.ok;
  report.phases.death = { ok, died, after: { mode: s.mode, hp: s.hp, x: s.x, z: s.z, deaths: s.stats.deaths }, checkpoint };
  log('사망→재시작', ok ? '성공' : '실패', JSON.stringify(report.phases.death));
  await page.close();
}

async function checkpointRespawn(page) {
  const CP = { x: 29.6, z: 1.9, respawnX: 29.6, respawnZ: 3.3 };
  await page.evaluate(([x, z]) => window.__GAME__.teleport(x, z), [CP.x, CP.z + 1.2]);
  await sleep(600);
  await page.keyboard.press('e');
  await sleep(800);
  const lit = (await state(page)).checkpoints[0] === true;
  // 공터 혼령·멧돼지 앞에서 저항하지 않고 맞는다
  await page.evaluate(() => {
    const g = window.__GAME__;
    g.bot(true, true);
    g.teleport(33.5, -1.2);
    g.setHp(1);
  });
  let died = false;
  const t0 = Date.now();
  while (Date.now() - t0 < 40000) {
    if ((await state(page)).mode === 'dead') {
      died = true;
      break;
    }
    await sleep(200);
  }
  await sleep(2400);
  await page.evaluate(() => window.__GAME__.bot(false));
  await page.keyboard.press('Enter');
  await sleep(1200);
  const s = await state(page);
  await page.screenshot({ path: join(shotDir, '15_checkpoint_respawn.png') });
  const dist = Math.hypot(s.x - CP.respawnX, s.z - CP.respawnZ);
  return { ok: lit && died && s.mode === 'play' && s.hp === 10 && dist < 1, lit, died, mode: s.mode, hp: s.hp, x: s.x, z: s.z, deaths: s.stats.deaths };
}

// ─────────────────────────────── 3) 30초 전투 프레임 시간 ───────────────────────────────
async function phaseFps() {
  const page = await openPage('?debug&bot');
  await page.waitForFunction(() => window.__GAME__.state.mode === 'title', null, { timeout: 30000 });
  await page.evaluate(() => window.__GAME__.skipTitle());
  await page.waitForFunction(() => window.__GAME__.state.mode === 'play', null, { timeout: 30000 });
  // 보스 광장 입구로 옮긴 뒤 자동 조종으로 실제 전투를 벌인다 (측정 전용 배치)
  await page.evaluate(() => {
    const g = window.__GAME__;
    g.teleport(64, -3.4);
    g.bot(true);
  });
  await page.waitForFunction(() => window.__GAME__.state.bossActive, null, { timeout: 30000 });
  await sleep(500);
  await page.evaluate(() => window.__GAME__.clearFrameTimes());
  const samples = [];
  const t0 = Date.now();
  while (Date.now() - t0 < 30000) {
    await sleep(1000);
    samples.push(await state(page));
  }
  const ft = await page.evaluate(() => window.__GAME__.frameTimes());
  const wt = await page.evaluate(() => window.__GAME__.workTimes());
  const info = await page.evaluate(() => window.__GAME__.renderer());
  // 브라우저 화면 주사율(rAF 상한) — 평균 FPS가 이 값에 붙어 있으면 GPU/CPU가 아닌 vsync가 한계
  const refreshHz = await page.evaluate(
    () =>
      new Promise((res) => {
        const ts = [];
        const f = (t) => {
          ts.push(t);
          if (ts.length < 61) requestAnimationFrame(f);
          else res(1000 / ((ts[60] - ts[0]) / 60));
        };
        requestAnimationFrame(f);
      }),
  );
  const pct = (arr, q) => {
    const s = [...arr].sort((a, b) => a - b);
    return s[Math.min(s.length - 1, Math.floor(s.length * q))];
  };
  const total = ft.reduce((s, v) => s + v, 0);
  const inCombat = samples.filter((s) => s.bossActive && s.pstate !== 'dead').length;
  report.phases.fps = {
    seconds: total / 1000,
    frames: ft.length,
    avgFps: ft.length / (total / 1000),
    avgFrameMs: total / ft.length,
    p95FrameMs: pct(ft, 0.95),
    p99FrameMs: pct(ft, 0.99),
    maxFrameMs: Math.max(...ft),
    refreshHzAfter: refreshHz,
    cpuWorkMs: { avg: wt.reduce((s, v) => s + v, 0) / Math.max(1, wt.length), p95: pct(wt, 0.95), max: Math.max(...wt) },
    combatSeconds: inCombat,
    bossHpStartEnd: [samples[0]?.bossHp, samples[samples.length - 1]?.bossHp],
    playerHpMin: Math.min(...samples.map((s) => s.hp)),
    renderer: info,
  };
  log('FPS', JSON.stringify(report.phases.fps));
  await page.screenshot({ path: join(outDir, 'fps_end.png') });
  await page.close();
}

try {
  if (!only || only === 'run') await phaseRun();
  if (!only || only === 'death') await phaseDeath();
  if (!only || only === 'fps') await phaseFps();
} catch (e) {
  report.errors.push(String(e?.stack ?? e));
  console.error(e);
} finally {
  report.finishedAt = new Date().toISOString();
  const file = join(outDir, only ? `report_${only}.json` : 'report.json');
  writeFileSync(file, JSON.stringify(report, null, 2));
  log('보고서:', file);
  await browser.close();
  if (server) server.kill();
}
