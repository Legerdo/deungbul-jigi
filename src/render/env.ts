// 하늘, 원경 산, 물, 물안개, 폭포 셰이더
import * as THREE from 'three';
import { texClouds, texMountains } from '../art/tex/sky.ts';
import type { Atmo } from '../world/atmosphere.ts';
import { PIXEL_GLSL, texFrom } from './pixel.ts';

const BAYER_GLSL = /* glsl */ `
float bayer4(vec2 p) {
  vec2 q = mod(floor(p), 4.0);
  int i = int(q.y) * 4 + int(q.x);
  int b[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(b[i]) + 0.5) / 16.0;
}`;

export class Sky {
  readonly group = new THREE.Group();
  private dome: THREE.Mesh;
  private layers: THREE.Mesh[] = [];
  private clouds: THREE.Mesh;
  readonly u = {
    uTop: { value: new THREE.Color() },
    uHorizon: { value: new THREE.Color() },
    uGlow: { value: new THREE.Color() },
    uSunDir: { value: new THREE.Vector3(-0.8, 0.2, -0.5) },
    uStars: { value: 0 },
    uTime: { value: 0 },
  };

  constructor() {
    const domeMat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uGlow; uniform vec3 uSunDir; uniform float uStars; uniform float uTime;
        varying vec3 vDir;
        ${PIXEL_GLSL}
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          float t = clamp(h * 1.5 + 0.12, 0.0, 1.0);
          t = floor(t * 14.0) / 14.0;
          vec3 col = mix(uHorizon, uTop, t);
          vec3 sd3 = normalize(uSunDir);
          float sd = max(dot(d, sd3), 0.0);
          float g = floor(pow(sd, 6.0) * 6.0) / 6.0;
          col += uGlow * g * 0.55;
          col += uGlow * step(0.9985, sd) * 2.0;
          vec2 sp = floor(vec2(atan(d.z, d.x), asin(clamp(d.y, -1.0, 1.0))) * 160.0);
          float s = hash12(sp);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + s * 40.0);
          col += vec3(0.9, 0.95, 1.0) * step(0.9965, s) * uStars * tw * smoothstep(0.02, 0.25, h);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), domeMat);
    this.dome.renderOrder = -100;
    this.dome.frustumCulled = false;
    this.group.add(this.dome);

    // 원경 산 3겹 (시차), 구름
    const layerDefs = [
      { z: -330, y: -30, w: 1400, h: 350, tex: 0, fog: 0.72 },
      { z: -230, y: -40, w: 1000, h: 250, tex: 1, fog: 0.45 },
      { z: -150, y: -34, w: 700, h: 175, tex: 2, fog: 0.22 },
    ];
    for (const L of layerDefs) {
      const tex = texFrom(texMountains(L.tex as 0 | 1 | 2), { repeat: true });
      tex.wrapT = THREE.ClampToEdgeWrapping;
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          map: { value: tex },
          uHorizon: this.u.uHorizon,
          uTop: this.u.uTop,
          uGlow: this.u.uGlow,
          uFogAmt: { value: L.fog },
          uRepeat: { value: L.w / 512 / 1.6 },
        },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: /* glsl */ `
          uniform sampler2D map; uniform vec3 uHorizon; uniform vec3 uTop; uniform vec3 uGlow; uniform float uFogAmt; uniform float uRepeat;
          varying vec2 vUv;
          void main(){
            vec2 uv = vec2(vUv.x * uRepeat, vUv.y);
            vec4 c = texture2D(map, uv);
            if (c.a < 0.5) discard;
            vec3 col = mix(c.rgb * 0.9, uHorizon, uFogAmt);
            col = mix(col, uTop * 0.8, (1.0 - vUv.y) * 0.25 * (1.0 - uFogAmt));
            gl_FragColor = vec4(col, 1.0);
            #include <colorspace_fragment>
          }`,
        depthWrite: true,
        fog: false,
      });
      tex.magFilter = THREE.NearestFilter;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(L.w, L.h), mat);
      m.position.set(10, L.y + L.h / 2, L.z);
      m.renderOrder = -50;
      this.layers.push(m);
      this.group.add(m);
    }
    const ctex = texFrom(texClouds(), { repeat: true });
    ctex.magFilter = THREE.NearestFilter;
    const cmat = new THREE.ShaderMaterial({
      uniforms: { map: { value: ctex }, uTime: this.u.uTime, uTint: { value: new THREE.Color(1, 1, 1) }, uHorizon: this.u.uHorizon },
      vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D map; uniform float uTime; uniform vec3 uTint; uniform vec3 uHorizon; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(map, vec2(vUv.x * 3.0 + uTime * 0.004, vUv.y));
          if (c.a < 0.5) discard;
          gl_FragColor = vec4(mix(c.rgb * uTint, uHorizon, 0.35), 1.0);
          #include <colorspace_fragment>
        }`,
      transparent: false,
      depthWrite: false,
      fog: false,
    });
    this.clouds = new THREE.Mesh(new THREE.PlaneGeometry(1600, 140), cmat);
    this.clouds.position.set(0, 150, -420);
    this.clouds.renderOrder = -60;
    this.group.add(this.clouds);
  }

  update(a: Atmo, camera: THREE.Camera, time: number): void {
    this.u.uTop.value.copy(a.skyTop);
    this.u.uHorizon.value.copy(a.skyHorizon);
    this.u.uGlow.value.copy(a.sunGlow);
    this.u.uSunDir.value.copy(a.sunDir).setY(Math.max(0.02, a.sunDir.y * 0.25));
    this.u.uStars.value = a.stars;
    this.u.uTime.value = time;
    this.dome.position.copy(camera.position);
  }
}

// ─────────────────────────────── 물 ───────────────────────────────

export class Water {
  readonly mesh: THREE.Mesh;
  readonly u: Record<string, THREE.IUniform>;

  constructor(x0: number, x1: number, z0: number, z1: number, y: number) {
    this.u = THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      {
        uTime: { value: 0 },
        uX0: { value: x0 },
        uX1: { value: x1 },
        uDeep: { value: new THREE.Color(0x0e2a44) },
        uMid: { value: new THREE.Color(0x1e5a78) },
        uHi: { value: new THREE.Color(0x5aa4bc) },
        uFoam: { value: new THREE.Color(0xc8e8ec) },
        uSky: { value: new THREE.Color(0x4a6a90) },
        uLight: { value: new THREE.Color(1, 0.8, 0.6) },
        uBridgeZ: { value: -1 },
      },
    ]);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `
        #include <fog_pars_vertex>
        varying vec3 vW;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vec4 mvPosition = viewMatrix * w;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <fog_pars_fragment>
        ${PIXEL_GLSL}
        uniform float uTime; uniform float uX0; uniform float uX1; uniform float uBridgeZ;
        uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uHi; uniform vec3 uFoam; uniform vec3 uSky; uniform vec3 uLight;
        varying vec3 vW;
        void main() {
          // 텍셀 격자(16/유닛)에 맞춘 물결
          vec2 p = (floor(vW.xz * 16.0) + 0.5) / 16.0;
          float t = uTime;
          float n1 = vnoise(p * vec2(1.1, 0.33) + vec2(0.0, -t * 0.55));
          float n2 = vnoise(p * vec2(2.4, 0.75) + vec2(t * 0.12, -t * 1.25) + 7.1);
          float n3 = vnoise(p * vec2(5.0, 1.6) + vec2(0.0, -t * 2.2) + 3.7);
          float n = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
          float edge = min(p.x - uX0, uX1 - p.x);
          float depthK = smoothstep(0.0, 2.6, edge);
          vec3 col = mix(uMid, uDeep, depthK);
          col = mix(col, uSky * 0.55 + uMid * 0.45, 0.35);
          float band = step(0.6, n);
          float hi = step(0.74, n) * step(0.5, n3);
          col = mix(col, uMid * 1.25 + uSky * 0.1, band * 0.8);
          col = mix(col, uHi + uLight * 0.25, hi);
          float foamN = vnoise(p * 3.0 + vec2(0.0, -t * 1.5));
          float foam = step(edge, 0.28 + foamN * 0.35);
          col = mix(col, uFoam, foam * 0.85);
          // 다리 그림자 띠
          float bz = abs(p.y - uBridgeZ);
          col *= 1.0 - step(bz, 1.35) * 0.35;
          float alpha = mix(0.72, 0.93, depthK) + foam * 0.1;
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      transparent: true,
      fog: true,
      depthWrite: false,
    });
    const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    this.mesh.renderOrder = 1;
  }

  update(time: number, a: Atmo): void {
    this.u.uTime.value = time;
    (this.u.uSky.value as THREE.Color).copy(a.hemiSky);
    (this.u.uLight.value as THREE.Color).copy(a.sunColor).multiplyScalar(Math.min(1, a.sunIntensity));
  }
}

export class Waterfall {
  readonly mesh: THREE.Mesh;
  private u: Record<string, THREE.IUniform>;
  constructor(x0: number, x1: number, z: number, top: number, bottom: number) {
    this.u = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uTime: { value: 0 }, uTint: { value: new THREE.Color(1, 1, 1) } }]);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `
        #include <fog_pars_vertex>
        varying vec3 vW; varying vec2 vUv;
        void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <fog_pars_fragment>
        ${PIXEL_GLSL}
        uniform float uTime; uniform vec3 uTint; varying vec3 vW; varying vec2 vUv;
        void main(){
          vec2 p = (floor(vec2(vW.x, vW.y) * 16.0) + 0.5) / 16.0;
          float s = vnoise(vec2(p.x * 3.5, p.y * 0.6 + uTime * 3.2));
          float s2 = vnoise(vec2(p.x * 7.0 + 3.0, p.y * 1.2 + uTime * 4.5));
          vec3 deep = vec3(0.10, 0.28, 0.42);
          vec3 mid = vec3(0.35, 0.62, 0.74);
          vec3 hi = vec3(0.85, 0.95, 0.98);
          vec3 col = mix(deep, mid, step(0.45, s));
          col = mix(col, hi, step(0.72, s * 0.6 + s2 * 0.4));
          float edgeX = min(vUv.x, 1.0 - vUv.x);
          col = mix(col, hi, step(edgeX, 0.04) * 0.6);
          col *= uTint;
          float a = 0.92;
          if (edgeX < 0.015) discard;
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      transparent: true,
      fog: true,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, top - bottom), mat);
    this.mesh.position.set((x0 + x1) / 2, (top + bottom) / 2, z);
    this.mesh.renderOrder = 2;
  }
  update(time: number, a: Atmo): void {
    this.u.uTime.value = time;
    (this.u.uTint.value as THREE.Color).copy(a.hemiSky).lerp(new THREE.Color(1, 1, 1), 0.55);
  }
}

// ─────────────────────────────── 물안개 ───────────────────────────────

export class MistSheet {
  readonly mesh: THREE.Mesh;
  private u: Record<string, THREE.IUniform>;
  base: number;
  constructor(cx: number, cz: number, w: number, d: number, y: number, density = 1, seed = 0) {
    this.base = density;
    this.u = THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uTime: { value: 0 }, uDensity: { value: density }, uColor: { value: new THREE.Color(0xa0b8c8) }, uSeed: { value: seed } },
    ]);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.u,
      vertexShader: /* glsl */ `
        #include <fog_pars_vertex>
        varying vec3 vW; varying vec2 vUv;
        void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <fog_pars_fragment>
        ${PIXEL_GLSL}
        ${BAYER_GLSL}
        uniform float uTime; uniform float uDensity; uniform vec3 uColor; uniform float uSeed;
        varying vec3 vW; varying vec2 vUv;
        void main(){
          vec2 p = (floor(vW.xz * 8.0) + 0.5) / 8.0;
          float n = vnoise(p * 0.32 + vec2(uTime * 0.045 + uSeed, uTime * 0.018)) * 0.62
                  + vnoise(p * 0.85 + vec2(-uTime * 0.07, uSeed * 3.0)) * 0.38;
          float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
          float edge = smoothstep(0.0, 0.22, e);
          float a = smoothstep(0.3, 0.85, n) * edge * uDensity;
          if (a <= 0.004) discard;
          // 노이즈 입력은 텍셀 격자(8/유닛)로 끊고, 불투명도는 부드럽게 — 픽셀 결을 가진 옅은 안개
          gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0) * 0.3);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      fog: true,
    });
    const geo = new THREE.PlaneGeometry(w, d);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(cx, y, cz);
    this.mesh.renderOrder = 5;
  }
  update(time: number, amount: number, color: THREE.Color): void {
    this.u.uTime.value = time;
    this.u.uDensity.value = this.base * amount;
    (this.u.uColor.value as THREE.Color).copy(color);
    this.mesh.visible = this.base * amount > 0.02;
  }
}
