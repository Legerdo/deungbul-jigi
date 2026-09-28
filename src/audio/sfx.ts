// Web Audio로 합성하는 효과음·환경음·음악. 외부 음원 없이 발진기·잡음·필터·엔벨로프만 쓴다.
// 브라우저 정책상 첫 입력(키/클릭) 이후에 AudioContext를 만든다. 음소거 상태는 localStorage에 저장한다.

export type SfxName =
  | 'swing'
  | 'swingHeavy'
  | 'hit'
  | 'hitHeavy'
  | 'bossHit'
  | 'hurt'
  | 'dodge'
  | 'step'
  | 'boarAlert'
  | 'boarCharge'
  | 'wall'
  | 'wispCast'
  | 'wispShot'
  | 'orbPop'
  | 'runeBolt'
  | 'enemyDie'
  | 'bossSlam'
  | 'bossSweep'
  | 'bossRoar'
  | 'barrier'
  | 'lanternLight'
  | 'checkpoint'
  | 'pickup'
  | 'uiMove'
  | 'uiSelect'
  | 'text'
  | 'death'
  | 'victory'
  | 'gateBlock';

const MUTE_KEY = 'deungbul.muted';
// 평조(황종 기준) 5음: D E G A B 계열
const PENTA = [293.66, 329.63, 392.0, 440.0, 493.88, 587.33, 659.25, 783.99, 880.0, 987.77];

interface Loop {
  gain: GainNode;
  target: number;
}

export class GameAudio {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfxBus!: GainNode;
  private ambBus!: GainNode;
  private musBus!: GainNode;
  private noise!: AudioBuffer;
  muted = false;
  private loops: Record<string, Loop> = {};
  private nextChirp = 0;
  private nextOwl = 0;
  private nextChime = 0;
  private nextNote = 0;
  private beat = 0;
  private boss = false;
  private victory = false;
  private zone = { village: 1, forest: 0, ruins: 0, river: 0 };
  private lastPlay = new Map<string, number>();

  constructor() {
    try {
      this.muted = localStorage.getItem(MUTE_KEY) === '1';
    } catch {
      this.muted = false;
    }
  }

  /** 첫 사용자 입력에서 호출 */
  unlock(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 12;
    comp.ratio.value = 4;
    comp.attack.value = 0.004;
    comp.release.value = 0.2;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.9;
    this.master.connect(comp).connect(ctx.destination);
    this.sfxBus = this.bus(0.85);
    this.ambBus = this.bus(0.55);
    this.musBus = this.bus(0.4);
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) {
      // 약간 붉은 잡음 (고음이 덜 거칠게)
      const w = Math.random() * 2 - 1;
      b = b * 0.6 + w * 0.4;
      d[i] = b * 1.4;
    }
    this.buildLoops();
  }

  private bus(v: number): GainNode {
    const g = this.ctx!.createGain();
    g.gain.value = v;
    g.connect(this.master);
    return g;
  }

  toggleMute(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  setMuted(m: boolean): void {
    this.muted = m;
    try {
      localStorage.setItem(MUTE_KEY, m ? '1' : '0');
    } catch {
      /* 저장 불가 환경 무시 */
    }
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }

  // ─────────────────────────────── 기본 부품 ───────────────────────────────

  private env(g: GainNode, t: number, a: number, peak: number, dec: number): void {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + dec);
  }

  private tone(type: OscillatorType, f0: number, f1: number, dur: number, vol: number, opts: { a?: number; at?: number; bus?: GainNode; lp?: number; detune?: number } = {}): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime + (opts.at ?? 0);
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    if (opts.detune) o.detune.value = opts.detune;
    const g = ctx.createGain();
    this.env(g, t, opts.a ?? 0.004, vol, dur);
    let node: AudioNode = o;
    if (opts.lp) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = opts.lp;
      node.connect(f);
      node = f;
    }
    node.connect(g).connect(opts.bus ?? this.sfxBus);
    o.start(t);
    o.stop(t + (opts.a ?? 0.004) + dur + 0.05);
  }

  private burst(type: BiquadFilterType, f0: number, f1: number, q: number, dur: number, vol: number, opts: { a?: number; at?: number; bus?: GainNode } = {}): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime + (opts.at ?? 0);
    const s = ctx.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    s.playbackRate.value = 0.9 + Math.random() * 0.2;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
    const g = ctx.createGain();
    this.env(g, t, opts.a ?? 0.003, vol, dur);
    s.connect(f).connect(g).connect(opts.bus ?? this.sfxBus);
    s.start(t, Math.random() * 1.5);
    s.stop(t + (opts.a ?? 0.003) + dur + 0.05);
  }

  private bell(f: number, vol: number, dur: number, at = 0, bus?: GainNode): void {
    this.tone('sine', f, f, dur, vol, { a: 0.005, at, bus });
    this.tone('sine', f * 2.01, f * 2.01, dur * 0.5, vol * 0.35, { a: 0.003, at, bus });
    this.tone('triangle', f * 3.02, f * 3.02, dur * 0.25, vol * 0.12, { a: 0.002, at, bus });
  }

  private pluck(f: number, vol: number, at = 0): void {
    // 가야금풍 뜯는 소리: 삼각파 + 빠른 감쇠 + 살짝 내려앉는 음정
    this.tone('triangle', f * 1.005, f, 1.4, vol, { a: 0.003, at, bus: this.musBus, lp: 2400 });
    this.tone('sine', f * 2, f * 2, 0.35, vol * 0.25, { a: 0.002, at, bus: this.musBus });
  }

  // ─────────────────────────────── 효과음 ───────────────────────────────

  play(name: SfxName, opts: { vol?: number; pitch?: number } = {}): void {
    if (!this.ctx || this.ctx.state !== 'running') return;
    // 같은 소리가 한 프레임에 겹쳐 폭발하지 않도록 최소 간격
    const now = this.ctx.currentTime;
    const last = this.lastPlay.get(name) ?? -1;
    if (now - last < 0.025) return;
    this.lastPlay.set(name, now);
    const v = opts.vol ?? 1;
    const p = opts.pitch ?? 1;
    const j = 0.94 + Math.random() * 0.12;
    switch (name) {
      case 'swing':
        this.burst('bandpass', 2400 * p * j, 700, 1.4, 0.13, 0.5 * v);
        this.tone('sine', 520 * j, 260, 0.1, 0.05 * v);
        break;
      case 'swingHeavy':
        this.burst('bandpass', 1600 * j, 320, 1.1, 0.24, 0.7 * v);
        this.tone('sine', 300 * j, 120, 0.2, 0.08 * v);
        break;
      case 'hit':
        this.tone('sine', 190 * j, 55, 0.13, 0.55 * v);
        this.burst('highpass', 2600, 2600, 0.7, 0.05, 0.35 * v);
        this.tone('square', 1200 * j, 700, 0.04, 0.05 * v, { lp: 3000 });
        break;
      case 'hitHeavy':
        this.tone('sine', 150 * j, 38, 0.24, 0.75 * v);
        this.burst('highpass', 1800, 1800, 0.7, 0.09, 0.45 * v);
        this.tone('triangle', 980 * j, 900, 0.18, 0.08 * v);
        break;
      case 'bossHit':
        this.burst('bandpass', 3200 * j, 1400, 2, 0.08, 0.5 * v);
        this.tone('sine', 100 * j, 48, 0.2, 0.5 * v);
        this.tone('triangle', 1450 * j, 1300, 0.12, 0.05 * v);
        break;
      case 'hurt':
        this.tone('square', 420 * j, 150, 0.2, 0.18 * v, { lp: 1800 });
        this.burst('lowpass', 1400, 400, 0.7, 0.12, 0.4 * v);
        break;
      case 'dodge':
        this.burst('bandpass', 1100 * j, 380, 0.9, 0.22, 0.4 * v, { a: 0.02 });
        break;
      case 'step':
        this.burst('lowpass', 900 * p * j, 400, 0.8, 0.045, 0.11 * v);
        break;
      case 'boarAlert':
        this.tone('sawtooth', 620 * j, 1150, 0.12, 0.12 * v, { lp: 2400 });
        this.tone('sawtooth', 1100 * j, 520, 0.22, 0.12 * v, { lp: 2400, at: 0.12 });
        break;
      case 'boarCharge':
        this.burst('lowpass', 420, 220, 0.8, 0.5, 0.55 * v, { a: 0.05 });
        this.tone('sawtooth', 90 * j, 70, 0.45, 0.08 * v, { lp: 400, a: 0.05 });
        break;
      case 'wall':
        this.tone('sine', 95 * j, 32, 0.34, 0.8 * v);
        this.burst('lowpass', 700, 200, 0.8, 0.25, 0.6 * v);
        break;
      case 'wispCast':
        for (const [f, k] of [
          [880, 0],
          [1320, 0.05],
          [1760, 0.1],
        ] as const)
          this.tone('sine', f * j, f * j * 1.02, 0.45, 0.05 * v, { a: 0.18, at: k });
        break;
      case 'wispShot':
        this.tone('sine', 900 * j, 420, 0.14, 0.18 * v);
        this.burst('bandpass', 2000, 900, 2, 0.12, 0.2 * v);
        break;
      case 'orbPop':
        this.tone('sine', 1100 * j, 380, 0.1, 0.16 * v);
        this.burst('highpass', 3000, 3000, 0.7, 0.06, 0.18 * v);
        break;
      case 'runeBolt':
        this.tone('triangle', 1500 * j, 720, 0.12, 0.05 * v);
        break;
      case 'enemyDie':
        this.tone('sine', 640 * j, 110, 0.4, 0.22 * v);
        this.burst('bandpass', 900, 300, 0.8, 0.35, 0.35 * v, { a: 0.02 });
        break;
      case 'bossSlam':
        this.tone('sine', 78, 26, 0.75, 1.0 * v);
        this.burst('lowpass', 520, 120, 0.7, 0.6, 0.9 * v);
        this.burst('bandpass', 2600, 900, 1.5, 0.25, 0.3 * v, { at: 0.03 });
        break;
      case 'bossSweep':
        this.burst('bandpass', 700 * j, 180, 0.9, 0.45, 0.7 * v, { a: 0.06 });
        this.tone('sine', 140, 60, 0.4, 0.2 * v, { a: 0.05 });
        break;
      case 'bossRoar':
        this.tone('sawtooth', 78, 62, 1.3, 0.22 * v, { lp: 700, a: 0.12 });
        this.tone('sawtooth', 81, 60, 1.3, 0.22 * v, { lp: 600, a: 0.12 });
        this.burst('lowpass', 800, 250, 0.8, 1.2, 0.5 * v, { a: 0.1 });
        break;
      case 'barrier':
        this.tone('sine', 220, 880, 0.9, 0.12 * v, { a: 0.2 });
        this.tone('sine', 330, 1320, 0.9, 0.06 * v, { a: 0.25 });
        this.burst('bandpass', 1200, 3000, 3, 0.8, 0.12 * v, { a: 0.3 });
        break;
      case 'lanternLight':
        this.burst('bandpass', 380, 2200, 1.1, 0.6, 0.45 * v, { a: 0.08 });
        this.bell(1318.5, 0.16 * v, 1.6, 0.25);
        this.bell(1975.5, 0.1 * v, 1.4, 0.4);
        break;
      case 'checkpoint':
        this.bell(587.33, 0.14 * v, 1.8, 0);
        this.bell(739.99, 0.1 * v, 1.6, 0.12);
        this.bell(880, 0.1 * v, 1.6, 0.24);
        break;
      case 'pickup':
        this.tone('sine', 660 * j, 660 * j, 0.12, 0.12 * v);
        this.tone('sine', 990 * j, 990 * j, 0.18, 0.1 * v, { at: 0.07 });
        break;
      case 'uiMove':
        this.tone('square', 880, 880, 0.03, 0.03 * v, { lp: 2500 });
        break;
      case 'uiSelect':
        this.tone('square', 660, 660, 0.05, 0.04 * v, { lp: 2500 });
        this.tone('square', 990, 990, 0.08, 0.04 * v, { lp: 2500, at: 0.05 });
        break;
      case 'text':
        this.tone('square', 1300 * j, 1300, 0.012, 0.012 * v, { lp: 3000 });
        break;
      case 'death':
        [587.33, 493.88, 440, 392, 293.66].forEach((f, i) => this.bell(f, 0.12 * v, 1.2, i * 0.28, this.musBus));
        break;
      case 'victory':
        [293.66, 369.99, 440, 587.33, 739.99, 880, 1174.66].forEach((f, i) => this.bell(f, 0.12 * v, 2.2, i * 0.16, this.musBus));
        break;
      case 'gateBlock':
        this.tone('square', 150, 130, 0.18, 0.06 * v, { lp: 900 });
        break;
    }
  }

  // ─────────────────────────────── 환경음·음악 ───────────────────────────────

  private noiseLoop(type: BiquadFilterType, freq: number, q: number): Loop {
    const ctx = this.ctx!;
    const s = ctx.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = 0;
    // 느린 바람결 흔들림
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07 + Math.random() * 0.06;
    const lg = ctx.createGain();
    lg.gain.value = freq * 0.35;
    lfo.connect(lg).connect(f.frequency);
    lfo.start();
    s.connect(f).connect(g).connect(this.ambBus);
    s.start(0, Math.random());
    return { gain: g, target: 0 };
  }

  private droneLoop(freqs: number[], vol: number, bus: GainNode): Loop {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.gain.value = 0;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 600;
    f.connect(g).connect(bus);
    for (const fr of freqs) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = fr;
      o.detune.value = (Math.random() - 0.5) * 8;
      const og = ctx.createGain();
      og.gain.value = vol / freqs.length;
      o.connect(og).connect(f);
      o.start();
    }
    return { gain: g, target: 0 };
  }

  private buildLoops(): void {
    this.loops.wind = this.noiseLoop('bandpass', 420, 0.6);
    this.loops.stream = this.noiseLoop('bandpass', 1100, 0.35);
    this.loops.coldWind = this.noiseLoop('bandpass', 260, 0.8);
    this.loops.drone = this.droneLoop([55, 82.4, 110.2], 0.5, this.ambBus);
    this.loops.pad = this.droneLoop([146.83, 220, 293.66, 369.99], 0.35, this.musBus);
  }

  setZone(village: number, forest: number, ruins: number, river: number): void {
    this.zone = { village, forest, ruins, river };
  }

  setBoss(on: boolean): void {
    this.boss = on;
  }

  setVictory(on: boolean): void {
    this.victory = on;
  }

  /** 매 프레임: 환경음 목표 음량 적용, 벌레·부엉이·종·가락 스케줄 */
  update(): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const z = this.zone;
    const set = (k: string, v: number) => {
      const l = this.loops[k];
      if (!l) return;
      if (Math.abs(l.target - v) > 0.002) {
        l.target = v;
        l.gain.gain.setTargetAtTime(v, t, 0.6);
      }
    };
    set('wind', 0.16 * z.village + 0.06 * z.forest);
    set('stream', 0.05 * z.forest + 0.28 * z.river);
    set('coldWind', 0.2 * z.ruins);
    set('drone', (this.boss ? 0.5 : 0.22) * z.ruins * (this.victory ? 0.2 : 1));
    set('pad', this.victory ? 0.5 : 0);

    // 풀벌레 (마을·숲)
    if (t > this.nextChirp) {
      const k = z.village * 0.8 + z.forest;
      if (k > 0.1 && !this.boss) {
        const f = 3900 + Math.random() * 900;
        for (let i = 0; i < 3; i++) this.tone('sine', f, f * 0.98, 0.035, 0.012 * k, { at: i * 0.07, bus: this.ambBus });
      }
      this.nextChirp = t + 0.5 + Math.random() * 1.6;
    }
    // 부엉이 (숲)
    if (t > this.nextOwl) {
      if (z.forest > 0.5 && !this.boss) {
        this.tone('sine', 410, 360, 0.32, 0.05 * z.forest, { a: 0.05, bus: this.ambBus, lp: 900 });
        this.tone('sine', 400, 350, 0.42, 0.05 * z.forest, { a: 0.05, at: 0.5, bus: this.ambBus, lp: 900 });
      }
      this.nextOwl = t + 9 + Math.random() * 10;
    }
    // 폐허의 먼 종소리
    if (t > this.nextChime) {
      if (z.ruins > 0.5 && !this.boss) this.bell(PENTA[5 + Math.floor(Math.random() * 4)] * 2, 0.02, 2.5, 0, this.ambBus);
      this.nextChime = t + 5 + Math.random() * 6;
    }
    // 가락: 마을에서는 드문드문 뜯는 5음, 보스전에서는 북 장단, 승리 후에는 밝은 가락
    if (t > this.nextNote) {
      if (this.boss) {
        const pat = [1, 0, 0.5, 0, 1, 0.4, 0.6, 0];
        const acc = pat[this.beat % pat.length];
        if (acc > 0) {
          this.tone('sine', 72, 38, 0.28, 0.5 * acc, { bus: this.musBus });
          this.burst('lowpass', 900, 300, 0.8, 0.08, 0.25 * acc, { bus: this.musBus });
        }
        if (this.beat % 4 === 2) this.burst('highpass', 5000, 5000, 0.8, 0.03, 0.06, { bus: this.musBus });
        this.beat++;
        this.nextNote = t + 0.33;
      } else if (this.victory || z.village > 0.6) {
        const vol = this.victory ? 0.07 : 0.045 * z.village;
        const n = this.victory ? 2 : Math.random() < 0.7 ? 1 : 2;
        for (let i = 0; i < n; i++) this.pluck(PENTA[Math.floor(Math.random() * (this.victory ? 10 : 7))], vol, i * 0.22);
        this.nextNote = t + (this.victory ? 0.9 + Math.random() * 0.6 : 1.6 + Math.random() * 2.4);
      } else {
        this.nextNote = t + 1;
      }
    }
  }
}
