// 구역 분위기: 플레이어 x 위치를 따라 따뜻한 마을 노을 → 푸른 물안개 숲 → 차가운 폐허 밤으로 보간.
// 승리 시 '되살아난 빛' 값으로 섞는다.
import * as THREE from 'three';

export interface Atmo {
  sunColor: THREE.Color;
  sunIntensity: number;
  sunDir: THREE.Vector3;
  hemiSky: THREE.Color;
  hemiGround: THREE.Color;
  hemiIntensity: number;
  fogColor: THREE.Color;
  fogNear: number;
  fogFar: number;
  rimColor: THREE.Color;
  rimStrength: number;
  mist: number;
  mistColor: THREE.Color;
  skyTop: THREE.Color;
  skyHorizon: THREE.Color;
  sunGlow: THREE.Color;
  stars: number;
  tint: THREE.Color;
  saturation: number;
  vignette: number;
  bloom: number;
  exposure: number;
  windowScale: number;
  fireflies: number;
  embers: number;
}

interface Key {
  x: number;
  a: Atmo;
}

function A(o: {
  sun: number;
  sunI: number;
  dir: [number, number, number];
  sky: number;
  ground: number;
  hemiI: number;
  fog: number;
  near: number;
  far: number;
  rim: number;
  rimS: number;
  mist: number;
  mistC: number;
  skyTop: number;
  skyHor: number;
  glow: number;
  stars: number;
  tint: number;
  sat: number;
  vig: number;
  bloom: number;
  exp: number;
  win: number;
  ff: number;
  emb: number;
}): Atmo {
  return {
    sunColor: new THREE.Color(o.sun),
    sunIntensity: o.sunI,
    sunDir: new THREE.Vector3(...o.dir).normalize(),
    hemiSky: new THREE.Color(o.sky),
    hemiGround: new THREE.Color(o.ground),
    hemiIntensity: o.hemiI,
    fogColor: new THREE.Color(o.fog),
    fogNear: o.near,
    fogFar: o.far,
    rimColor: new THREE.Color(o.rim),
    rimStrength: o.rimS,
    mist: o.mist,
    mistColor: new THREE.Color(o.mistC),
    skyTop: new THREE.Color(o.skyTop),
    skyHorizon: new THREE.Color(o.skyHor),
    sunGlow: new THREE.Color(o.glow),
    stars: o.stars,
    tint: new THREE.Color(o.tint),
    saturation: o.sat,
    vignette: o.vig,
    bloom: o.bloom,
    exposure: o.exp,
    windowScale: o.win,
    fireflies: o.ff,
    embers: o.emb,
  };
}

const KEYS: Key[] = [
  {
    x: -40,
    a: A({ sun: 0xffb478, sunI: 2.5, dir: [-0.6, 0.6, 0.52], sky: 0x8e8cc8, ground: 0x5e4838, hemiI: 1.55, fog: 0x8c6c82, near: 32, far: 100, rim: 0xffb27a, rimS: 0.6, mist: 0.1, mistC: 0xc8a8b8, skyTop: 0x2e2a5a, skyHor: 0xf09a6a, glow: 0xffc080, stars: 0.05, tint: 0xfff2e6, sat: 1.05, vig: 0.3, bloom: 0.36, exp: 1.06, win: 1.0, ff: 0, emb: 1 }),
  },
  {
    x: -10,
    a: A({ sun: 0xffa870, sunI: 2.2, dir: [-0.64, 0.56, 0.5], sky: 0x8280bc, ground: 0x544034, hemiI: 1.45, fog: 0x806482, near: 30, far: 95, rim: 0xffa878, rimS: 0.58, mist: 0.18, mistC: 0xb8a0b8, skyTop: 0x2a2858, skyHor: 0xe08a6e, glow: 0xffb080, stars: 0.1, tint: 0xfff0e8, sat: 1.04, vig: 0.32, bloom: 0.36, exp: 1.06, win: 1.0, ff: 0.1, emb: 0.8 }),
  },
  {
    x: 8,
    a: A({ sun: 0xf2b09a, sunI: 1.85, dir: [-0.7, 0.5, 0.5], sky: 0x7494b8, ground: 0x3c4a40, hemiI: 1.9, fog: 0x5e7a94, near: 24, far: 78, rim: 0xa6d6ff, rimS: 0.55, mist: 0.55, mistC: 0xa8c4d4, skyTop: 0x1e2a4e, skyHor: 0x8a7a98, glow: 0xd09a90, stars: 0.3, tint: 0xeef4ff, sat: 1.04, vig: 0.32, bloom: 0.42, exp: 1.12, win: 1.0, ff: 0.8, emb: 0 }),
  },
  {
    x: 30,
    a: A({ sun: 0xb8c4ec, sunI: 1.65, dir: [-0.62, 0.52, 0.58], sky: 0x6888ae, ground: 0x34444a, hemiI: 1.85, fog: 0x4c6a86, near: 20, far: 68, rim: 0x98d0ff, rimS: 0.6, mist: 0.9, mistC: 0x9cbcd0, skyTop: 0x141e40, skyHor: 0x4e5a80, glow: 0x9aa0c0, stars: 0.6, tint: 0xe8f0ff, sat: 1.02, vig: 0.34, bloom: 0.46, exp: 1.14, win: 1.0, ff: 1.0, emb: 0 }),
  },
  {
    x: 52,
    a: A({ sun: 0xb4c6f4, sunI: 1.6, dir: [0.42, 0.7, 0.58], sky: 0x4a5478, ground: 0x2a2830, hemiI: 1.25, fog: 0x3e4a70, near: 22, far: 72, rim: 0xb0ccff, rimS: 0.62, mist: 0.45, mistC: 0x8a9cc4, skyTop: 0x0e1430, skyHor: 0x2e3a64, glow: 0x8090c0, stars: 0.9, tint: 0xe8ecff, sat: 1.0, vig: 0.36, bloom: 0.46, exp: 1.12, win: 1.0, ff: 0.2, emb: 0 }),
  },
  {
    x: 72,
    a: A({ sun: 0xa8bcf0, sunI: 1.55, dir: [0.38, 0.72, 0.6], sky: 0x444e74, ground: 0x262430, hemiI: 1.2, fog: 0x363f66, near: 22, far: 70, rim: 0xa8c4ff, rimS: 0.64, mist: 0.55, mistC: 0x7c8cbc, skyTop: 0x0a1028, skyHor: 0x26305a, glow: 0x7080b8, stars: 1.0, tint: 0xe6eaff, sat: 1.0, vig: 0.38, bloom: 0.5, exp: 1.12, win: 1.0, ff: 0.0, emb: 0 }),
  },
];

/** 신전의 등불이 되살아난 뒤의 빛 */
const VICTORY = A({ sun: 0xffc890, sunI: 2.3, dir: [-0.2, 0.62, 0.76], sky: 0xb09ab8, ground: 0x7a5238, hemiI: 1.6, fog: 0xa87e88, near: 32, far: 104, rim: 0xffd49a, rimS: 0.75, mist: 0.15, mistC: 0xf0c0a0, skyTop: 0x3a2e66, skyHor: 0xffb080, glow: 0xffd8a0, stars: 0.5, tint: 0xfff0e0, sat: 1.1, vig: 0.28, bloom: 0.6, exp: 1.1, win: 1.6, ff: 1.0, emb: 1.0 });

function lerpAtmo(out: Atmo, a: Atmo, b: Atmo, t: number): void {
  out.sunColor.copy(a.sunColor).lerp(b.sunColor, t);
  out.sunIntensity = a.sunIntensity + (b.sunIntensity - a.sunIntensity) * t;
  out.sunDir.copy(a.sunDir).lerp(b.sunDir, t).normalize();
  out.hemiSky.copy(a.hemiSky).lerp(b.hemiSky, t);
  out.hemiGround.copy(a.hemiGround).lerp(b.hemiGround, t);
  out.hemiIntensity = a.hemiIntensity + (b.hemiIntensity - a.hemiIntensity) * t;
  out.fogColor.copy(a.fogColor).lerp(b.fogColor, t);
  out.fogNear = a.fogNear + (b.fogNear - a.fogNear) * t;
  out.fogFar = a.fogFar + (b.fogFar - a.fogFar) * t;
  out.rimColor.copy(a.rimColor).lerp(b.rimColor, t);
  out.rimStrength = a.rimStrength + (b.rimStrength - a.rimStrength) * t;
  out.mist = a.mist + (b.mist - a.mist) * t;
  out.mistColor.copy(a.mistColor).lerp(b.mistColor, t);
  out.skyTop.copy(a.skyTop).lerp(b.skyTop, t);
  out.skyHorizon.copy(a.skyHorizon).lerp(b.skyHorizon, t);
  out.sunGlow.copy(a.sunGlow).lerp(b.sunGlow, t);
  out.stars = a.stars + (b.stars - a.stars) * t;
  out.tint.copy(a.tint).lerp(b.tint, t);
  out.saturation = a.saturation + (b.saturation - a.saturation) * t;
  out.vignette = a.vignette + (b.vignette - a.vignette) * t;
  out.bloom = a.bloom + (b.bloom - a.bloom) * t;
  out.exposure = a.exposure + (b.exposure - a.exposure) * t;
  out.windowScale = a.windowScale + (b.windowScale - a.windowScale) * t;
  out.fireflies = a.fireflies + (b.fireflies - a.fireflies) * t;
  out.embers = a.embers + (b.embers - a.embers) * t;
}

function cloneAtmo(a: Atmo): Atmo {
  const o = { ...a } as Atmo;
  for (const k of Object.keys(a) as Array<keyof Atmo>) {
    const v = a[k];
    if (v instanceof THREE.Color || v instanceof THREE.Vector3) (o as unknown as Record<string, unknown>)[k] = v.clone();
  }
  return o;
}

const tmp = cloneAtmo(KEYS[0].a);
const out = cloneAtmo(KEYS[0].a);

export function sampleAtmo(x: number, victory: number, bossDark = 0): Atmo {
  let i = 0;
  while (i < KEYS.length - 1 && x > KEYS[i + 1].x) i++;
  const a = KEYS[i];
  const b = KEYS[Math.min(KEYS.length - 1, i + 1)];
  const t = a === b ? 0 : THREE.MathUtils.smoothstep(x, a.x, b.x);
  lerpAtmo(tmp, a.a, b.a, t);
  if (bossDark > 0) {
    // 보스 등장: 안개가 짙어지고 빛이 가라앉는다
    tmp.sunIntensity *= 1 - bossDark * 0.35;
    tmp.fogNear *= 1 - bossDark * 0.3;
    tmp.fogFar *= 1 - bossDark * 0.2;
    tmp.mist += bossDark * 0.5;
    tmp.vignette += bossDark * 0.1;
  }
  lerpAtmo(out, tmp, VICTORY, victory);
  return out;
}
