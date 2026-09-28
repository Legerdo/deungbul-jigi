// 화면 UI(DOM): 체력 등불, 현재 목표, 보스 체력, 구역 제목, 상호작용 안내, 대화창, 토스트,
// 그리고 로딩·타이틀·인트로 자막·일시정지·조작법·사망·엔딩 화면. 모든 문구는 한국어, 글꼴은 갈무리(픽셀 글꼴).
import { P, toCss } from '../art/palette.ts';

/** 문자 격자로 픽셀 아이콘을 만들어 data URL로 */
function pixelIcon(rows: string[], colors: Record<string, string>): string {
  const h = rows.length;
  const w = rows[0].length;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d')!;
  rows.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      const col = colors[ch];
      if (!col) return;
      g.fillStyle = col;
      g.fillRect(x, y, 1, 1);
    }),
  );
  return c.toDataURL();
}

const LANTERN_ROWS = [
  '...oo...',
  '..obbo..',
  '.obbbbo.',
  'oBGGGGBo',
  'oBGHHGBo',
  'oBGHHGBo',
  'oBGGGGBo',
  'oBGGGGBo',
  '.obbbbo.',
  '..oBBo..',
];

function lanternIcon(level: 'full' | 'half' | 'empty'): string {
  const lit = { G: toCss(P.ember.colors[2]), H: toCss(P.ember.colors[4]) };
  const dark = { G: toCss(P.indigo.colors[1]), H: toCss(P.indigo.colors[2]) };
  const rows = LANTERN_ROWS.map((r, y) => {
    if (level === 'half' && y < 6) return r.replace(/G/g, 'g').replace(/H/g, 'h');
    if (level === 'empty') return r.replace(/G/g, 'g').replace(/H/g, 'h');
    return r;
  });
  return pixelIcon(rows, {
    o: toCss(P.ink.colors[0]),
    b: toCss(P.brass.colors[3]),
    B: toCss(P.brass.colors[2]),
    G: lit.G,
    H: lit.H,
    g: dark.G,
    h: dark.H,
  });
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, parent: HTMLElement, html = ''): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  e.className = cls;
  if (html) e.innerHTML = html;
  parent.appendChild(e);
  return e;
}

export interface MenuItem {
  label: () => string;
  action: () => void;
}

export const CONTROLS_HTML = `
  <div class="ctl"><span class="key">W A S D</span><span>이동</span></div>
  <div class="ctl"><span class="key">마우스</span><span>조준</span></div>
  <div class="ctl"><span class="key">좌클릭</span><span>공격 (연타 3단)</span></div>
  <div class="ctl"><span class="key">Space</span><span>구르기 (무적)</span></div>
  <div class="ctl"><span class="key">E</span><span>대화 · 등불 밝히기</span></div>
  <div class="ctl"><span class="key">Esc</span><span>메뉴</span></div>`;

export class Hud {
  readonly root: HTMLDivElement;
  private hp: HTMLDivElement;
  private pips: HTMLImageElement[] = [];
  private icons: Record<'full' | 'half' | 'empty', string>;
  private objective: HTMLDivElement;
  private objText: HTMLSpanElement;
  private boss: HTMLDivElement;
  private bossName: HTMLDivElement;
  private bossFill: HTMLDivElement;
  private bossTrail: HTMLDivElement;
  private zone: HTMLDivElement;
  private prompt: HTMLDivElement;
  private promptText: HTMLSpanElement;
  private toastEl: HTMLDivElement;
  private dialog: HTMLDivElement;
  private dlgName: HTMLDivElement;
  private dlgText: HTMLDivElement;
  private controls: HTMLDivElement;
  private hurtEl: HTMLDivElement;
  private fadeEl: HTMLDivElement;
  private bars: HTMLDivElement;
  private caption: HTMLDivElement;
  private skip: HTMLDivElement;
  private banner: HTMLDivElement;
  private screens: Record<string, HTMLDivElement> = {};
  private menuItems: HTMLButtonElement[] = [];
  private menuDefs: MenuItem[] = [];
  menuIndex = 0;
  private debugEl: HTMLDivElement;
  private toastT = 0;
  private zoneT = 0;
  private bannerT = 0;
  private hurtT = 0;
  private trail = 1;
  private lastHp = -1;
  private dlgFull = '';
  private dlgShown = 0;
  onTextTick: (() => void) | null = null;

  constructor(root: HTMLDivElement) {
    this.root = root;
    root.innerHTML = '';
    this.icons = { full: lanternIcon('full'), half: lanternIcon('half'), empty: lanternIcon('empty') };

    const hud = el('div', 'hud hidden', root);
    this.hp = el('div', 'hp', hud);
    this.hp.setAttribute('aria-label', '체력');
    this.objective = el('div', 'objective', hud, '<span class="obj-label">목표</span>');
    this.objText = el('span', 'obj-text', this.objective);
    this.boss = el('div', 'boss hidden', root);
    this.bossName = el('div', 'boss-name', this.boss);
    const bar = el('div', 'boss-bar', this.boss);
    this.bossTrail = el('div', 'boss-trail', bar);
    this.bossFill = el('div', 'boss-fill', bar);
    this.zone = el('div', 'zone-title', root, '<div class="zt-sub"></div><div class="zt-main"></div><div class="zt-rule"></div>');
    this.banner = el('div', 'boss-banner', root, '<div class="bb-sub"></div><div class="bb-main"></div>');
    this.prompt = el('div', 'prompt hidden', root, '<span class="key">E</span>');
    this.promptText = el('span', 'ptext', this.prompt);
    this.toastEl = el('div', 'toast', root);
    this.dialog = el('div', 'dialog hidden', root);
    this.dlgName = el('div', 'dlg-name', this.dialog);
    this.dlgText = el('div', 'dlg-text', this.dialog);
    el('div', 'dlg-next', this.dialog, 'E · 클릭 ▶');
    this.controls = el('div', 'controls hidden', root, `<div class="ctl-title">조작</div>${CONTROLS_HTML}`);
    this.hurtEl = el('div', 'hurt', root);
    this.bars = el('div', 'bars', root, '<div class="bar-top"></div><div class="bar-bot"></div>');
    this.caption = el('div', 'caption', root);
    this.skip = el('div', 'skip hidden', root, 'Space · 클릭: 건너뛰기');
    this.fadeEl = el('div', 'fade', root);
    this.debugEl = el('div', 'debug hidden', root);

    this.screens.loading = el('div', 'screen loading', root, '<div class="load-title">등불지기</div><div class="load-bar"><div class="load-fill"></div></div><div class="load-text">등불을 준비하는 중…</div>');
    this.screens.title = el(
      'div',
      'screen title hidden',
      root,
      `<div class="t-wrap">
        <div class="t-sub">황혼의 계곡</div>
        <div class="t-main">등불지기</div>
        <div class="t-line"></div>
        <button class="t-start" data-act="start">시작하기</button>
        <div class="t-hint">Enter · Space · 클릭</div>
        <div class="t-controls">${CONTROLS_HTML}</div>
      </div>
      <div class="t-credit">그래픽·소리 모두 코드로 생성 · 글꼴 갈무리(SIL OFL)</div>`,
    );
    this.screens.pause = el('div', 'screen pause hidden', root, '<div class="panel"><div class="p-title">일시정지</div><div class="menu"></div><div class="p-help hidden"></div></div>');
    this.screens.death = el(
      'div',
      'screen death hidden',
      root,
      '<div class="d-main">등불이 꺼졌다</div><div class="d-tip"></div><button class="d-retry" data-act="retry">다시 일어서기</button><div class="t-hint">Enter · 클릭</div>',
    );
    this.screens.ending = el(
      'div',
      'screen ending hidden',
      root,
      '<div class="panel"><div class="e-sub">황혼의 계곡</div><div class="e-main">등불이 돌아왔다</div><div class="e-stats"></div><button class="e-again" data-act="again">처음부터 다시</button><div class="t-hint">Enter · 클릭</div></div>',
    );
  }

  // ─────────────────────────────── 화면 전환 ───────────────────────────────

  show(name: string, on = true): void {
    const s = this.screens[name];
    if (s) s.classList.toggle('hidden', !on);
  }

  screen(name: string): HTMLDivElement {
    return this.screens[name];
  }

  setLoading(k: number, text: string): void {
    const s = this.screens.loading;
    (s.querySelector('.load-fill') as HTMLDivElement).style.width = `${Math.round(k * 100)}%`;
    (s.querySelector('.load-text') as HTMLDivElement).textContent = text;
  }

  setHudVisible(on: boolean): void {
    this.root.querySelector('.hud')!.classList.toggle('hidden', !on);
  }

  // ─────────────────────────────── HUD ───────────────────────────────

  setHp(hp: number, max: number): void {
    if (hp === this.lastHp && this.pips.length === Math.ceil(max / 2)) return;
    const n = Math.ceil(max / 2);
    while (this.pips.length < n) {
      const img = el('img', 'pip', this.hp);
      img.alt = '';
      this.pips.push(img);
    }
    for (let i = 0; i < n; i++) {
      const v = hp - i * 2;
      const lvl = v >= 2 ? 'full' : v === 1 ? 'half' : 'empty';
      if (this.pips[i].dataset.lvl !== lvl) {
        this.pips[i].src = this.icons[lvl];
        this.pips[i].dataset.lvl = lvl;
        if (this.lastHp >= 0 && hp < this.lastHp) this.pips[i].classList.add('pop');
      }
    }
    this.hp.setAttribute('aria-label', `체력 ${hp} / ${max}`);
    if (this.lastHp >= 0 && hp < this.lastHp) {
      this.hurtT = 0.45;
      this.hp.classList.remove('shake');
      void this.hp.offsetWidth;
      this.hp.classList.add('shake');
    }
    this.lastHp = hp;
  }

  setObjective(text: string): void {
    if (this.objText.textContent === text) return;
    this.objText.textContent = text;
    this.objective.classList.toggle('hidden', !text);
    this.objective.classList.remove('flash');
    void this.objective.offsetWidth;
    if (text) this.objective.classList.add('flash');
  }

  setBoss(name: string | null, k = 1, phase2 = false): void {
    this.boss.classList.toggle('hidden', name === null);
    if (name === null) return;
    this.bossName.textContent = name;
    this.bossFill.style.width = `${(k * 100).toFixed(2)}%`;
    this.boss.classList.toggle('phase2', phase2);
    if (k < this.trail) this.trail = Math.max(k, this.trail - 0.004);
    else this.trail = k;
    this.bossTrail.style.width = `${(this.trail * 100).toFixed(2)}%`;
  }

  zoneTitle(main: string, sub: string): void {
    (this.zone.querySelector('.zt-main') as HTMLDivElement).textContent = main;
    (this.zone.querySelector('.zt-sub') as HTMLDivElement).textContent = sub;
    this.zone.classList.remove('on');
    void this.zone.offsetWidth;
    this.zone.classList.add('on');
    this.zoneT = 3.6;
  }

  bossBanner(main: string, sub: string): void {
    (this.banner.querySelector('.bb-main') as HTMLDivElement).textContent = main;
    (this.banner.querySelector('.bb-sub') as HTMLDivElement).textContent = sub;
    this.banner.classList.remove('on');
    void this.banner.offsetWidth;
    this.banner.classList.add('on');
    this.bannerT = 3.2;
  }

  toast(text: string, dur = 3): void {
    this.toastEl.textContent = text;
    this.toastEl.classList.add('on');
    this.toastT = dur;
  }

  setPrompt(text: string | null, x = 0, y = 0): void {
    if (!text) {
      this.prompt.classList.add('hidden');
      return;
    }
    this.promptText.textContent = text;
    this.prompt.classList.remove('hidden');
    this.prompt.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px) translate(-50%, -100%)`;
  }

  setControls(on: boolean): void {
    this.controls.classList.toggle('hidden', !on);
  }

  // ─────────────────────────────── 대화 ───────────────────────────────

  openDialog(name: string, text: string): void {
    this.dialog.classList.remove('hidden');
    this.dlgName.textContent = name;
    this.dlgFull = text;
    this.dlgShown = 0;
    this.dlgText.textContent = '';
  }

  /** 글자가 다 나왔으면 true */
  get dialogDone(): boolean {
    return this.dlgShown >= this.dlgFull.length;
  }

  completeDialog(): void {
    this.dlgShown = this.dlgFull.length;
    this.dlgText.textContent = this.dlgFull;
  }

  closeDialog(): void {
    this.dialog.classList.add('hidden');
  }

  // ─────────────────────────────── 연출 ───────────────────────────────

  setBars(on: boolean): void {
    this.bars.classList.toggle('on', on);
  }

  setCaption(text: string): void {
    if (this.caption.textContent === text) return;
    this.caption.classList.remove('on');
    void this.caption.offsetWidth;
    this.caption.textContent = text;
    if (text) this.caption.classList.add('on');
  }

  setSkip(on: boolean): void {
    this.skip.classList.toggle('hidden', !on);
  }

  setFade(k: number): void {
    this.fadeEl.style.opacity = String(Math.max(0, Math.min(1, k)));
  }

  // ─────────────────────────────── 메뉴 ───────────────────────────────

  buildMenu(items: MenuItem[]): void {
    const m = this.screens.pause.querySelector('.menu') as HTMLDivElement;
    m.innerHTML = '';
    this.menuItems = [];
    this.menuDefs = items;
    items.forEach((it, i) => {
      const b = el('button', 'm-item', m);
      b.textContent = it.label();
      b.addEventListener('mouseenter', () => this.selectMenu(i));
      b.addEventListener('click', () => {
        this.selectMenu(i);
        it.action();
        this.refreshMenu();
      });
      this.menuItems.push(b);
    });
    this.selectMenu(0);
  }

  refreshMenu(): void {
    this.menuItems.forEach((b, i) => (b.textContent = this.menuDefs[i].label()));
  }

  selectMenu(i: number): void {
    this.menuIndex = (i + this.menuItems.length) % this.menuItems.length;
    this.menuItems.forEach((b, k) => b.classList.toggle('sel', k === this.menuIndex));
  }

  activateMenu(): void {
    this.menuDefs[this.menuIndex]?.action();
    this.refreshMenu();
  }

  setHelp(on: boolean): void {
    const h = this.screens.pause.querySelector('.p-help') as HTMLDivElement;
    h.innerHTML = CONTROLS_HTML + '<div class="p-tip">멧돼지는 앞발로 땅을 긁은 뒤 붉은 선을 따라 돌진합니다. 망령의 안개 구슬은 칼로 베어 흩을 수 있습니다. 붉은 장판이 차오르면 구르기로 피하세요.</div>';
    h.classList.toggle('hidden', !on);
  }

  setDeathTip(t: string): void {
    (this.screens.death.querySelector('.d-tip') as HTMLDivElement).textContent = t;
  }

  setEndingStats(html: string): void {
    (this.screens.ending.querySelector('.e-stats') as HTMLDivElement).innerHTML = html;
  }

  setDebug(text: string | null): void {
    this.debugEl.classList.toggle('hidden', text === null);
    if (text !== null) this.debugEl.textContent = text;
  }

  // ─────────────────────────────── 매 프레임 ───────────────────────────────

  update(dt: number): void {
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) this.toastEl.classList.remove('on');
    }
    if (this.zoneT > 0) {
      this.zoneT -= dt;
      if (this.zoneT <= 0) this.zone.classList.remove('on');
    }
    if (this.bannerT > 0) {
      this.bannerT -= dt;
      if (this.bannerT <= 0) this.banner.classList.remove('on');
    }
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.hurtEl.style.opacity = String(Math.min(1, this.hurtT * 2.4));
    // 대화 글자 흘리기
    if (!this.dialog.classList.contains('hidden') && this.dlgShown < this.dlgFull.length) {
      const before = Math.floor(this.dlgShown);
      this.dlgShown = Math.min(this.dlgFull.length, this.dlgShown + dt * 34);
      const now = Math.floor(this.dlgShown);
      if (now !== before) {
        this.dlgText.textContent = this.dlgFull.slice(0, now);
        if (now % 2 === 0) this.onTextTick?.();
      }
    }
  }
}
