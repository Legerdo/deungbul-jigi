// 픽셀 사각형 입자 (THREE.Points). 크기는 월드 단위 → 화면 픽셀로 반올림해 또렷한 정사각 픽셀로 그린다.
import * as THREE from 'three';

export interface EmitOpts {
  x: number;
  y: number;
  z: number;
  vx?: number;
  vy?: number;
  vz?: number;
  life: number;
  size: number;
  color: THREE.ColorRepresentation;
  alpha?: number;
  gravity?: number;
  drag?: number;
  /** 0: 선형 소멸, 1: 나타났다 사라짐 */
  fade?: 0 | 1;
  shrink?: boolean;
  /** 흔들림 (반딧불) */
  wander?: number;
}

export class Particles {
  readonly points: THREE.Points;
  private readonly max: number;
  private pos: Float32Array;
  private col: Float32Array;
  private size: Float32Array;
  private vel: Float32Array;
  private life: Float32Array;
  private maxLife: Float32Array;
  private baseSize: Float32Array;
  private baseAlpha: Float32Array;
  private grav: Float32Array;
  private drag: Float32Array;
  private fade: Uint8Array;
  private shrink: Uint8Array;
  private wander: Float32Array;
  private count = 0;
  readonly uScale = { value: 800 };
  private tmpColor = new THREE.Color();

  constructor(max: number, additive: boolean, glow = false) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.baseSize = new Float32Array(max);
    this.baseAlpha = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.fade = new Uint8Array(max);
    this.shrink = new Uint8Array(max);
    this.wander = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uScale: this.uScale },
      vertexShader: /* glsl */ `
        attribute vec4 aColor; attribute float aSize; uniform float uScale; varying vec4 vColor;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, floor(aSize * uScale / -mv.z + 0.5));
          vColor = aColor;
        }`,
      fragmentShader: glow
        ? /* glsl */ `
        varying vec4 vColor;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float r = max(abs(c.x), abs(c.y)) * 2.0;
          float d = length(c) * 2.0;
          float a = d < 0.42 ? 1.0 : (r < 0.95 && d < 1.0 ? 0.3 : 0.0);
          if (a <= 0.0) discard;
          gl_FragColor = vec4(vColor.rgb * a, vColor.a * a);
          #include <colorspace_fragment>
        }`
        : /* glsl */ `
        varying vec4 vColor;
        void main() {
          gl_FragColor = vColor;
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 30 : 25;
  }

  emit(o: EmitOpts): void {
    let i = this.count;
    if (i >= this.max) {
      // 가장 오래된 것을 덮어쓴다
      i = Math.floor(Math.random() * this.max);
    } else this.count++;
    this.pos[i * 3] = o.x;
    this.pos[i * 3 + 1] = o.y;
    this.pos[i * 3 + 2] = o.z;
    this.vel[i * 3] = o.vx ?? 0;
    this.vel[i * 3 + 1] = o.vy ?? 0;
    this.vel[i * 3 + 2] = o.vz ?? 0;
    this.life[i] = o.life;
    this.maxLife[i] = o.life;
    this.baseSize[i] = o.size;
    this.baseAlpha[i] = o.alpha ?? 1;
    this.grav[i] = o.gravity ?? 0;
    this.drag[i] = o.drag ?? 0;
    this.fade[i] = o.fade ?? 0;
    this.shrink[i] = o.shrink ? 1 : 0;
    this.wander[i] = o.wander ?? 0;
    this.tmpColor.set(o.color);
    this.col[i * 4] = this.tmpColor.r;
    this.col[i * 4 + 1] = this.tmpColor.g;
    this.col[i * 4 + 2] = this.tmpColor.b;
    this.col[i * 4 + 3] = this.baseAlpha[i];
  }

  update(dt: number, time: number): void {
    let n = this.count;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // 마지막 입자와 교체
        n--;
        this.copy(n, i);
        i--;
        continue;
      }
      const k = this.life[i] / this.maxLife[i];
      const dr = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= dr;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * dr - this.grav[i] * dt;
      this.vel[i * 3 + 2] *= dr;
      if (this.wander[i] > 0) {
        const w = this.wander[i];
        this.vel[i * 3] += Math.sin(time * 2.3 + i * 1.7) * w * dt;
        this.vel[i * 3 + 1] += Math.sin(time * 1.7 + i * 2.9) * w * 0.6 * dt;
        this.vel[i * 3 + 2] += Math.cos(time * 2.1 + i * 1.1) * w * dt;
      }
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const a = this.fade[i] === 1 ? Math.sin(Math.PI * k) : Math.min(1, k * 1.6);
      this.col[i * 4 + 3] = this.baseAlpha[i] * a;
      this.size[i] = this.baseSize[i] * (this.shrink[i] ? 0.35 + 0.65 * k : 1);
    }
    this.count = n;
    const g = this.points.geometry;
    g.setDrawRange(0, n);
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aColor') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate = true;
  }

  private copy(from: number, to: number): void {
    if (from === to) return;
    for (let c = 0; c < 3; c++) {
      this.pos[to * 3 + c] = this.pos[from * 3 + c];
      this.vel[to * 3 + c] = this.vel[from * 3 + c];
    }
    for (let c = 0; c < 4; c++) this.col[to * 4 + c] = this.col[from * 4 + c];
    this.size[to] = this.size[from];
    this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from];
    this.baseSize[to] = this.baseSize[from];
    this.baseAlpha[to] = this.baseAlpha[from];
    this.grav[to] = this.grav[from];
    this.drag[to] = this.drag[from];
    this.fade[to] = this.fade[from];
    this.shrink[to] = this.shrink[from];
    this.wander[to] = this.wander[from];
  }

  get active(): number {
    return this.count;
  }

  clear(): void {
    this.count = 0;
  }
}
