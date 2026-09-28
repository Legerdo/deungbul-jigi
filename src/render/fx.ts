// 전투 효과: 픽셀 FX 아틀라스를 쓰는 인스턴스 빌보드(타격 섬광·먼지·룬 탄환)와 바닥 데칼(베기 궤적·충격파),
// 그리고 공격 예고 장판(원·직선, 차오르는 채움)을 그린다. 모든 FX는 1유닛 = 16텍셀 격자에 맞춰 픽셀로 보인다.
import * as THREE from 'three';
import { P } from '../art/palette.ts';
import { texDust, texImpact, texOrb, texRing, texRuneBolt, texSlash } from '../art/tex/fx.ts';
import { Tex } from '../art/tex/tex.ts';
import { PIXEL_GLSL, texFrom } from './pixel.ts';

type Rect = [number, number, number, number];

export interface FxSprite {
  frames: Rect[];
  /** 기본 프레임 길이(초) */
  dur: number;
}

const ATLAS_W = 512;
const ATLAS_H = 128;

function strip(x: number, y: number, w: number, h: number, n: number, dur: number): FxSprite {
  const frames: Rect[] = [];
  for (let i = 0; i < n; i++) frames.push([x + i * w, y, w, h]);
  return { frames, dur };
}

export const FX = {
  slash: strip(0, 0, 64, 32, 3, 0.045),
  impact: strip(192, 0, 32, 32, 3, 0.04),
  dust: strip(288, 0, 8, 8, 4, 0.09),
  bolt: strip(352, 0, 16, 16, 2, 0.08),
  orbCold: strip(384, 0, 16, 16, 1, 1),
  orbEmber: strip(400, 0, 16, 16, 1, 1),
  orbRune: strip(416, 0, 16, 16, 1, 1),
  alert: strip(432, 0, 8, 16, 1, 1),
  star: strip(440, 0, 8, 8, 1, 1),
  ringDanger: strip(0, 32, 64, 64, 1, 1),
  ringCold: strip(64, 32, 64, 64, 1, 1),
  ringEmber: strip(128, 32, 64, 64, 1, 1),
};

function buildAtlas(): Tex {
  const t = new Tex(ATLAS_W, ATLAS_H);
  t.blit(texSlash(), 0, 0);
  t.blit(texImpact(), 192, 0);
  t.blit(texDust(), 288, 0);
  t.blit(texRuneBolt(), 352, 0);
  t.blit(texOrb('cold'), 384, 0);
  t.blit(texOrb('ember'), 400, 0);
  t.blit(texOrb('rune'), 416, 0);
  // 경계 표시 '!' (8x16)
  const ink = P.ink.colors[0];
  const a = P.amber.colors[5];
  const b = P.danger.colors[3];
  for (let y = 1; y < 15; y++) for (let x = 1; x < 7; x++) {
    const inBar = x >= 2 && x <= 5 && y >= 1 && y <= 9;
    const inDot = x >= 2 && x <= 5 && y >= 11 && y <= 14;
    if (inBar || inDot) t.put(432 + x, y, y < 5 ? a : b);
  }
  for (let y = 0; y < 16; y++) for (let x = 0; x < 8; x++) {
    if (t.alpha(432 + x, y)) continue;
    if (t.alpha(432 + x - 1, y) || t.alpha(432 + x + 1, y) || t.alpha(432 + x, y - 1) || t.alpha(432 + x, y + 1)) t.put(432 + x, y, ink);
  }
  // 기절 별 (8x8)
  const star = ['...#....', '...#....', '..###...', '#######.', '.#####..', '.##.##..', '.#...#..', '........'];
  star.forEach((row, y) => [...row].forEach((c, x) => c === '#' && t.put(440 + x, y, P.amber.colors[5])));
  t.blit(texRing('danger'), 0, 32);
  t.blit(texRing('cold'), 64, 32);
  t.blit(texRing('ember'), 128, 32);
  return t;
}

export interface FxOpts {
  x: number;
  y: number;
  z: number;
  /** 월드 높이(유닛). 폭은 프레임 비율로 */
  size: number;
  rot?: number;
  /** 바닥에 눕힌다 (dirAngle = atan2(dirX, dirZ) 방향이 텍스처 위쪽) */
  ground?: boolean;
  life?: number;
  frameDur?: number;
  color?: THREE.ColorRepresentation;
  alpha?: number;
  grow?: number;
  fade?: boolean;
  vx?: number;
  vy?: number;
  vz?: number;
  glow?: number;
  loop?: boolean;
}

interface FxInst {
  sprite: FxSprite;
  o: FxOpts;
  t: number;
  life: number;
  color: THREE.Color;
}

const MAX = 160;

class FxLayer {
  readonly mesh: THREE.InstancedMesh;
  private rect: THREE.InstancedBufferAttribute;
  private col: THREE.InstancedBufferAttribute;
  private par: THREE.InstancedBufferAttribute;
  readonly list: FxInst[] = [];
  private m = new THREE.Matrix4();

  constructor(map: THREE.Texture, ground: boolean) {
    const geo = new THREE.PlaneGeometry(1, 1);
    this.rect = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4);
    this.col = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4);
    this.par = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4);
    geo.setAttribute('iRect', this.rect);
    geo.setAttribute('iColor', this.col);
    geo.setAttribute('iPar', this.par);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: map }, uSize: { value: new THREE.Vector2(ATLAS_W, ATLAS_H) } },
      vertexShader: /* glsl */ `
        attribute vec4 iRect; attribute vec4 iColor; attribute vec4 iPar;
        varying vec2 vUv; varying vec4 vColor; varying float vGlow;
        void main() {
          vec3 c = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vec2 q = position.xy * iPar.yz;
          ${
            ground
              ? `vec3 fwd = vec3(sin(iPar.x), 0.0, cos(iPar.x));
                 vec3 right = vec3(-cos(iPar.x), 0.0, sin(iPar.x));
                 vec3 wp = c + right * q.x + fwd * q.y;`
              : `float cr = cos(iPar.x); float sr = sin(iPar.x);
                 q = vec2(q.x * cr - q.y * sr, q.x * sr + q.y * cr);
                 vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
                 vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                 vec3 wp = c + right * q.x + up * q.y;`
          }
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          ${ground ? '' : 'mv.xyz *= max(0.01, length(mv.xyz) - 0.6) / length(mv.xyz);'}
          gl_Position = projectionMatrix * mv;
          vUv = iRect.xy + uv * iRect.zw;
          vColor = iColor;
          vGlow = iPar.w;
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap; uniform vec2 uSize;
        varying vec2 vUv; varying vec4 vColor; varying float vGlow;
        ${PIXEL_GLSL}
        void main() {
          vec4 t = texture2D(uMap, pixelUv(vUv, uSize));
          if (t.a < 0.5) discard;
          gl_FragColor = vec4(t.rgb * vColor.rgb * vGlow, vColor.a);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    if (ground) {
      mat.polygonOffset = true;
      mat.polygonOffsetFactor = -3;
      mat.polygonOffsetUnits = -3;
    }
    this.mesh = new THREE.InstancedMesh(geo, mat, MAX);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = ground ? 3 : 28;
  }

  update(dt: number): void {
    let n = 0;
    for (let i = 0; i < this.list.length; i++) {
      const f = this.list[i];
      f.t += dt;
      if (f.t >= f.life) continue;
      const o = f.o;
      o.x += (o.vx ?? 0) * dt;
      o.y += (o.vy ?? 0) * dt;
      o.z += (o.vz ?? 0) * dt;
      this.list[n++] = f;
    }
    this.list.length = n;
    const cnt = Math.min(MAX, n);
    for (let i = 0; i < cnt; i++) {
      const f = this.list[i];
      const o = f.o;
      const k = f.t / f.life;
      const fd = o.frameDur ?? f.sprite.dur;
      let fi = Math.floor(f.t / fd);
      fi = o.loop ? fi % f.sprite.frames.length : Math.min(f.sprite.frames.length - 1, fi);
      const [rx, ry, rw, rh] = f.sprite.frames[fi];
      this.rect.setXYZW(i, rx / ATLAS_W, 1 - (ry + rh) / ATLAS_H, rw / ATLAS_W, rh / ATLAS_H);
      const g = 1 + ((o.grow ?? 1) - 1) * k;
      const h = o.size * g;
      this.par.setXYZW(i, o.rot ?? 0, h * (rw / rh), h, o.glow ?? 1);
      const a = (o.alpha ?? 1) * (o.fade ? 1 - k * k : 1);
      this.col.setXYZW(i, f.color.r, f.color.g, f.color.b, a);
      this.m.makeTranslation(o.x, o.y, o.z);
      this.mesh.setMatrixAt(i, this.m);
    }
    this.mesh.count = cnt;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.rect.needsUpdate = true;
    this.col.needsUpdate = true;
    this.par.needsUpdate = true;
  }
}

// ─────────────────────────────── 공격 예고 장판 ───────────────────────────────

export interface Telegraph {
  mesh: THREE.Mesh;
  u: Record<string, THREE.IUniform>;
  t: number;
  dur: number;
  hold: number;
  done: boolean;
}

export class FxSystem {
  readonly group = new THREE.Group();
  private bill: FxLayer;
  private ground: FxLayer;
  private tele: Telegraph[] = [];
  private teleTime = { value: 0 };

  constructor() {
    const atlas = texFrom(buildAtlas(), { mipmaps: false });
    this.bill = new FxLayer(atlas, false);
    this.ground = new FxLayer(atlas, true);
    this.group.add(this.bill.mesh, this.ground.mesh);
  }

  spawn(sprite: FxSprite, o: FxOpts): void {
    const layer = o.ground ? this.ground : this.bill;
    const life = o.life ?? sprite.frames.length * (o.frameDur ?? sprite.dur);
    layer.list.push({ sprite, o, t: 0, life, color: new THREE.Color(o.color ?? 0xffffff) });
  }

  /** 원형(반지름 r) 또는 직선(길이 len, 폭 width, 방향 angle=atan2(dx,dz)) 예고. dur 동안 채워진 뒤 hold만큼 번쩍인다 */
  telegraph(o: { shape: 'circle' | 'line'; x: number; y: number; z: number; r?: number; len?: number; width?: number; angle?: number; dur: number; hold?: number; color?: THREE.ColorRepresentation }): Telegraph {
    const w = o.shape === 'circle' ? (o.r ?? 1) * 2 : (o.width ?? 1);
    const h = o.shape === 'circle' ? (o.r ?? 1) * 2 : (o.len ?? 1);
    const geo = new THREE.PlaneGeometry(w, h);
    geo.rotateX(-Math.PI / 2);
    if (o.shape === 'line') geo.translate(0, 0, h / 2);
    const u = {
      uShape: { value: o.shape === 'circle' ? 0 : 1 },
      uProgress: { value: 0 },
      uFlash: { value: 0 },
      uColor: { value: new THREE.Color(o.color ?? 0xff5a3a) },
      uSize: { value: new THREE.Vector2(w, h) },
      uTime: this.teleTime,
      uAlpha: { value: 1 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: u,
      vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uShape; uniform float uProgress; uniform float uFlash; uniform vec3 uColor; uniform vec2 uSize; uniform float uTime; uniform float uAlpha;
        varying vec2 vUv;
        void main() {
          vec2 texel = uSize * 16.0;
          vec2 p = (floor(vUv * texel) + 0.5) / texel;
          vec2 c = (p - 0.5) * 2.0;
          float border; float inside; float fill;
          if (uShape < 0.5) {
            float r = length(c);
            if (r > 1.0) discard;
            float px = 2.0 / texel.x;
            border = step(1.0 - px * 1.5, r);
            fill = step(r, uProgress);
            inside = 1.0;
          } else {
            float along = 1.0 - p.y;
            float across = abs(c.x);
            float px = 2.0 / texel.x;
            border = max(step(1.0 - px * 1.5, across), step(1.0 - 1.5 / texel.y, along));
            fill = step(along, uProgress);
            inside = 1.0;
          }
          // 사선 줄무늬가 흘러가며 위험 구역을 알린다
          float stripe = step(0.5, fract((p.x * uSize.x + p.y * uSize.y) * 1.6 - uTime * 2.4));
          float a = border * 0.95 + fill * (0.36 + stripe * 0.12) + (1.0 - fill) * inside * (0.1 + stripe * 0.05);
          vec3 col = mix(uColor, vec3(1.0, 0.95, 0.85), uFlash * 0.7 + border * 0.15);
          gl_FragColor = vec4(col * (1.0 + uFlash), clamp(a + uFlash * 0.4, 0.0, 1.0) * uAlpha);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(o.x, o.y + 0.04, o.z);
    if (o.shape === 'line') mesh.rotation.y = o.angle ?? 0;
    mesh.renderOrder = 4;
    this.group.add(mesh);
    const t: Telegraph = { mesh, u, t: 0, dur: o.dur, hold: o.hold ?? 0.12, done: false };
    this.tele.push(t);
    return t;
  }

  cancel(t: Telegraph): void {
    t.done = true;
  }

  update(dt: number, time: number): void {
    this.bill.update(dt);
    this.ground.update(dt);
    this.teleTime.value = time;
    let n = 0;
    for (const t of this.tele) {
      t.t += dt;
      const k = Math.min(1, t.t / t.dur);
      t.u.uProgress.value = k;
      t.u.uFlash.value = t.t > t.dur ? 1 - Math.min(1, (t.t - t.dur) / t.hold) : 0;
      if (t.done || t.t > t.dur + t.hold) {
        this.group.remove(t.mesh);
        t.mesh.geometry.dispose();
        (t.mesh.material as THREE.Material).dispose();
        continue;
      }
      this.tele[n++] = t;
    }
    this.tele.length = n;
  }

  clear(): void {
    this.bill.list.length = 0;
    this.ground.list.length = 0;
    for (const t of this.tele) t.done = true;
  }
}
