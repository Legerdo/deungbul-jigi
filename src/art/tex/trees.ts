// 나무 수관(잎 덩어리) 스프라이트: 여러 개의 둥근 엽군(구)을 겹쳐 '콜리플라워'형 명암을 만들고,
// 가장자리를 잎 모양으로 들쭉날쭉하게 한 뒤 외곽선을 준다. 구 노멀을 노멀맵으로 함께 기록해
// 게임에서 태양·등불 빛이 수관의 입체에 맞게 비친다.
import { P, type Ramp } from '../palette.ts';
import { Rng, valueNoise } from '../rng.ts';
import type { FrameImage } from '../rig.ts';
import { buildSheet, type SheetData } from '../sheet.ts';

interface Lobe {
  x: number;
  y: number;
  r: number;
}

const L = [-0.55, 0.7, 0.55];
const LN = Math.hypot(L[0], L[1], L[2]);

interface CanopyStyle {
  /** 엽군마다 다른 램프 (lobeRamp[i]가 ramps의 인덱스). 없으면 ramp 하나로 칠한다 */
  ramps?: Ramp[];
  lobeRamp?: number[];
  /** 잎 끝 요철을 더 잘게 (0 = 둥근 콜리플라워 가장자리) */
  jag?: number;
  /** 잎 사이로 보이는 어두운 틈의 비율 (0~0.3) */
  gaps?: number;
}

function canopyFrame(w: number, h: number, lobes: Lobe[], ramp: Ramp, tones: number[], seed: number, pivotY: number, style: CanopyStyle = {}): FrameImage {
  const n = w * h;
  const jag = style.jag ?? 0;
  const gaps = style.gaps ?? 0;
  const rampOf = (lobe: number): Ramp => (style.ramps && style.lobeRamp ? style.ramps[style.lobeRamp[lobe] ?? 0] : ramp);
  const color = new Uint8Array(n * 4);
  const normal = new Uint8Array(n * 4);
  const lobeId = new Int16Array(n).fill(-1);
  const depth = new Float32Array(n).fill(-1e9);
  const nrm = new Float32Array(n * 3);
  const tone = new Int8Array(n).fill(-1);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const k = y * w + x;
      // 잎 가장자리 요철 (jag: 잎 한두 장 크기의 잔 요철을 더한다)
      const edgeN = valueNoise(x / 2.6, y / 2.6, seed, 0, 0) * 3.4 - 1.7 + (jag > 0 ? (valueNoise(x / 1.25, y / 1.25, seed + 3, 0, 0) - 0.5) * 2 * jag : 0);
      for (let i = 0; i < lobes.length; i++) {
        const lb = lobes[i];
        const dx = x + 0.5 - lb.x;
        const dy = y + 0.5 - lb.y;
        const rr = lb.r + edgeN;
        const d2 = dx * dx + dy * dy;
        if (d2 >= rr * rr) continue;
        const hz = Math.sqrt(rr * rr - d2);
        const z = hz + lb.r * 0.35 - (lb.y / h) * 4; // 아래쪽 엽군은 약간 뒤
        if (z > depth[k]) {
          depth[k] = z;
          lobeId[k] = i;
          nrm[k * 3] = dx / rr;
          nrm[k * 3 + 1] = -dy / rr;
          nrm[k * 3 + 2] = hz / rr;
        }
      }
    }
  }
  // 음영
  for (let k = 0; k < n; k++) {
    if (lobeId[k] < 0) continue;
    const x = k % w;
    const y = Math.floor(k / w);
    const nx = nrm[k * 3];
    const ny = nrm[k * 3 + 1];
    const nz = nrm[k * 3 + 2];
    let s = ((nx * L[0] + ny * L[1] + nz * L[2]) / LN) * 0.5 + 0.5;
    // 잎 뭉치 질감 (작은 덩어리 단위로 톤 흔들기)
    const leaf = valueNoise(x / 2.2, y / 1.8, seed + 7, 0, 0);
    s += (leaf - 0.5) * 0.28;
    // 수관 아래쪽·안쪽은 어둡게 (자기 그림자)
    s -= Math.max(0, (y / h - 0.55)) * 0.55;
    let lv = s < 0.36 ? 0 : s < 0.55 ? 1 : s < 0.74 ? 2 : s < 0.9 ? 3 : 4;
    // 잎 사이 틈: 작은 어두운 점 무리 (아래쪽일수록 깊게)
    if (gaps > 0 && valueNoise(x / 1.15, y / 1.15, seed + 11, 0, 0) < gaps) lv = Math.max(0, lv - (y / h > 0.5 ? 2 : 1));
    tone[k] = tones[Math.min(tones.length - 1, lv)];
  }
  // 엽군 경계선 (앞 엽군 가장자리 아래쪽 한 픽셀 어둡게)
  const t2 = new Int8Array(tone);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const k = y * w + x;
      if (lobeId[k] < 0) continue;
      for (const q of [k - w, k - 1]) {
        if (lobeId[q] >= 0 && lobeId[q] !== lobeId[k] && depth[q] - depth[k] > 2.2) t2[k] = Math.max(0, Math.min(tone[k] - 1, tones[0]));
      }
    }
  }
  const rng = new Rng(seed);
  for (let k = 0; k < n; k++) {
    if (lobeId[k] < 0) {
      normal[k * 4] = 128;
      normal[k * 4 + 1] = 128;
      normal[k * 4 + 2] = 255;
      continue;
    }
    const c = rampOf(lobeId[k]).colors[t2[k]];
    color[k * 4] = c[0];
    color[k * 4 + 1] = c[1];
    color[k * 4 + 2] = c[2];
    color[k * 4 + 3] = 255;
    normal[k * 4] = Math.round((nrm[k * 3] * 0.5 + 0.5) * 255);
    normal[k * 4 + 1] = Math.round((nrm[k * 3 + 1] * 0.5 + 0.5) * 255);
    normal[k * 4 + 2] = Math.round((nrm[k * 3 + 2] * 0.5 + 0.5) * 255);
  }
  // 반짝이는 잎 끝 하이라이트 몇 점
  for (let i = 0; i < w * h * 0.004; i++) {
    const x = rng.int(2, w - 3);
    const y = rng.int(2, Math.floor(h * 0.6));
    const k = y * w + x;
    if (color[k * 4 + 3] && t2[k] >= tones[2]) {
      const rp = rampOf(lobeId[k]);
      const c = rp.colors[Math.min(rp.colors.length - 1, tones[tones.length - 1] + 1)];
      color[k * 4] = c[0];
      color[k * 4 + 1] = c[1];
      color[k * 4 + 2] = c[2];
    }
  }
  // 외곽선 (광원 쪽은 조금 밝게)
  const out = new Uint8Array(color);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const k = y * w + x;
      if (color[k * 4 + 3]) continue;
      const nb = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ].filter(([a, b]) => a >= 0 && b >= 0 && a < w && b < h && color[(b * w + a) * 4 + 3]);
      if (!nb.length) continue;
      const c = ramp.outline;
      out[k * 4] = c[0];
      out[k * 4 + 1] = c[1];
      out[k * 4 + 2] = c[2];
      out[k * 4 + 3] = 255;
    }
  }
  void pivotY;
  return { w, h, color: out, normal };
}

/**
 * 침엽수: 아래로 처진 가지 단(tier)을 위에서 아래로 넓게 쌓는다.
 * 각 단은 톱니 모양 아랫단, 위쪽 왼편 하이라이트, 아랫면 그림자 띠, 솔잎 획을 가진다.
 */
function pineFrame(w: number, h: number, ramp: Ramp, seed: number): FrameImage {
  const rng = new Rng(seed);
  const n = w * h;
  const tone = new Int8Array(n).fill(-1);
  const nrm = new Float32Array(n * 3);
  const cx = w / 2 + rng.range(-1, 1);
  const tiers = 6;
  const top = 3;
  const bottom = h - 11;
  // 아래 단부터 그려 위 단이 덮게
  for (let t = tiers - 1; t >= 0; t--) {
    const k = t / (tiers - 1);
    const yt = top + (bottom - top) * (t / tiers) * 0.92;
    const yb = top + (bottom - top) * ((t + 1) / tiers) + 2;
    const hw = 5 + k * (w / 2 - 6);
    for (let y = Math.floor(yt); y <= Math.ceil(yb) + 3; y++) {
      for (let x = 0; x < w; x++) {
        const v = (y - yt) / (yb - yt);
        if (v < 0) continue;
        // 처진 가지: 옆으로 갈수록 아래로 휘는 가장자리
        const half = hw * Math.min(1, Math.pow(Math.max(0, v), 0.75) * 1.05);
        const dx = x + 0.5 - cx;
        const u = dx / Math.max(1, hw);
        if (Math.abs(dx) > half + 0.5) continue;
        // 아랫단 톱니: 가장자리일수록 더 아래로
        const toothPhase = ((x + t * 3 + seed) % 5) / 5;
        const tooth = toothPhase < 0.4 ? 2.5 : toothPhase < 0.6 ? 1 : 0;
        const edgeY = yb + Math.abs(u) * 2.2 + tooth - 1;
        if (y > edgeY) continue;
        const idx = y * w + x;
        if (idx < 0 || idx >= n) continue;
        // 원뿔형 노멀
        const nx = u * 0.75;
        const ny = 0.55 - v * 0.5;
        const nz = Math.sqrt(Math.max(0.05, 1 - nx * nx - ny * ny));
        let s = ((nx * L[0] + ny * L[1] + nz * L[2]) / LN) * 0.5 + 0.5;
        // 솔잎 획 (짧은 사선 덩어리)
        const hn = valueNoise(x / 1.6 + y / 3.1, y / 1.3, seed + 5, 0, 0);
        if (hn > 0.7) s += 0.17;
        else if (hn < 0.22) s -= 0.17;
        // 아랫면 그림자 띠
        if (y > edgeY - 2.2) s -= 0.3;
        s += (k - 0.5) * -0.12;
        const lv = s < 0.3 ? 0 : s < 0.48 ? 1 : s < 0.66 ? 2 : s < 0.84 ? 3 : 4;
        tone[idx] = lv;
        nrm[idx * 3] = nx;
        nrm[idx * 3 + 1] = ny;
        nrm[idx * 3 + 2] = nz;
      }
    }
  }
  const color = new Uint8Array(n * 4);
  const normal = new Uint8Array(n * 4);
  for (let k2 = 0; k2 < n; k2++) {
    if (tone[k2] < 0) {
      normal[k2 * 4] = 128;
      normal[k2 * 4 + 1] = 128;
      normal[k2 * 4 + 2] = 255;
      continue;
    }
    const c = ramp.colors[Math.min(ramp.colors.length - 1, tone[k2])];
    color.set([c[0], c[1], c[2], 255], k2 * 4);
    normal.set(
      [Math.round((nrm[k2 * 3] * 0.5 + 0.5) * 255), Math.round((nrm[k2 * 3 + 1] * 0.5 + 0.5) * 255), Math.round((nrm[k2 * 3 + 2] * 0.5 + 0.5) * 255), 0],
      k2 * 4,
    );
  }
  const out = new Uint8Array(color);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const k2 = y * w + x;
      if (color[k2 * 4 + 3]) continue;
      const has = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ].some(([a, b]) => a >= 0 && b >= 0 && a < w && b < h && color[(b * w + a) * 4 + 3]);
      if (has) out.set([ramp.outline[0], ramp.outline[1], ramp.outline[2], 255], k2 * 4);
    }
  }
  return { w, h, color: out, normal };
}

function lobesFor(kind: 'maple' | 'zelkova' | 'dead', w: number, h: number, rng: Rng): Lobe[] {
  const lobes: Lobe[] = [];
  const cx = w / 2;
  const cy = h * 0.52;
  const n = kind === 'zelkova' ? 13 : kind === 'dead' ? 5 : 9;
  const rx = w * 0.34;
  const ry = h * 0.3;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rng.range(-0.3, 0.3);
    const rr = rng.range(0.45, 1.0);
    lobes.push({
      x: cx + Math.cos(a) * rx * rr,
      y: cy + Math.sin(a) * ry * rr - 2,
      r: (kind === 'zelkova' ? 14 : kind === 'dead' ? 8 : 11) + rng.range(-2, 3),
    });
  }
  lobes.push({ x: cx - 4, y: cy - 6, r: kind === 'zelkova' ? 18 : 14 });
  lobes.push({ x: cx + 6, y: cy + 2, r: kind === 'zelkova' ? 16 : 12 });
  return lobes;
}

export const CANOPY = {
  maple: { w: 80, h: 64, ramp: P.leafWarm, tones: [1, 2, 3, 4, 5], pivotY: 58 },
  zelkova: { w: 112, h: 88, ramp: P.amber, tones: [1, 2, 3, 4, 5], pivotY: 80 },
  pine: { w: 64, h: 100, ramp: P.pine, tones: [0, 1, 2, 3, 4], pivotY: 96 },
} as const;
export type CanopyKind = keyof typeof CANOPY;

/** 종류별 변형 3개를 한 시트에 (애니메이션 이름 = 변형 번호) */
export function buildCanopySheet(kind: CanopyKind): SheetData {
  const c = CANOPY[kind];
  const entries = [0, 1, 2].map((v) => {
    const seed = 1000 + v * 13 + kind.length;
    let f: FrameImage;
    if (kind === 'pine') f = pineFrame(c.w, c.h, c.ramp, seed);
    else {
      const rng = new Rng(900 + v * 31 + kind.length * 7);
      const lobes = lobesFor(kind, c.w, c.h, rng);
      let style: CanopyStyle = {};
      if (kind === 'maple') {
        // 단풍: 위쪽 엽군은 주황·금빛, 아래쪽은 진홍 — 한 그루 안에서 색이 물들어 내려가게
        const pick = new Rng(4200 + v * 17);
        const cy = c.h * 0.52;
        const lobeRamp = lobes.map((lb) => {
          const r = pick.float();
          if (lb.y < cy - 4) return r < 0.28 ? 2 : 0;
          if (lb.y > cy + 3) return r < 0.7 ? 1 : 0;
          return r < 0.45 ? 1 : 0;
        });
        style = { ramps: [P.leafWarm, P.leafRed, P.amber], lobeRamp, jag: 1.1, gaps: 0.16 };
      }
      f = canopyFrame(c.w, c.h, lobes, c.ramp, [...c.tones], seed, c.pivotY, style);
    }
    return { key: `v${v}_down`, frames: [f], durations: [1000], loop: true };
  });
  return buildSheet(`canopy_${kind}`, c.w, c.h, c.w / 2, c.pivotY, entries, 3);
}
