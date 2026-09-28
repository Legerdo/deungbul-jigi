// 후처리: 블룸(등불·창문·발광체), 틸트시프트(위아래만 살짝 흐림), 색보정·비네트.
// 꺼도(P 키 또는 메뉴) 기본 아트와 구도가 그대로 성립하도록 효과는 약하게 둔다.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import type { Atmo } from '../world/atmosphere.ts';

const TiltShader = {
  uniforms: {
    tDiffuse: { value: null },
    uDir: { value: new THREE.Vector2(1, 0) },
    uAmount: { value: 1.1 },
    uFocus: { value: 0.46 },
    uBand: { value: 0.27 },
  },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uDir; uniform float uAmount; uniform float uFocus; uniform float uBand; varying vec2 vUv;
    void main(){
      float d = abs(vUv.y - uFocus);
      float k = smoothstep(uBand, uBand + 0.32, d) * uAmount;
      if (k < 0.05) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
      vec4 s = vec4(0.0); float ws = 0.0;
      for (int i = -4; i <= 4; i++) {
        float w = exp(-float(i * i) / 7.0);
        s += texture2D(tDiffuse, vUv + uDir * float(i) * k) * w;
        ws += w;
      }
      gl_FragColor = s / ws;
    }`,
};

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTint: { value: new THREE.Color(1, 1, 1) },
    uSat: { value: 1 },
    uVig: { value: 0.35 },
    uLift: { value: new THREE.Color(0.012, 0.008, 0.02) },
  },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec3 uTint; uniform float uSat; uniform float uVig; uniform vec3 uLift; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb * uTint + uLift;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      vec2 q = vUv - 0.5;
      q.x *= 1.3;
      col *= 1.0 - smoothstep(0.25, 0.85, length(q)) * uVig;
      gl_FragColor = vec4(col, c.a);
    }`,
};

export class Post {
  readonly composer: EffectComposer;
  readonly bloom: UnrealBloomPass;
  private tiltH: ShaderPass;
  private tiltV: ShaderPass;
  private grade: ShaderPass;
  enabled = true;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.Camera;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(scene, camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.45, 0.55, 0.82);
    // 안전장치: 한 픽셀의 NaN/Inf가 블룸 밉 체인을 따라 화면 전체로 번지지 않게 입력을 정리한다
    const hp = this.bloom.materialHighPassFilter;
    hp.fragmentShader = hp.fragmentShader.replace(
      'vec4 texel = texture2D( tDiffuse, vUv );',
      // (D3D의 min/max는 NaN이 아닌 쪽을 돌려주므로 clamp만으로 NaN·Inf가 모두 걸러진다)
      'vec4 texel = clamp( texture2D( tDiffuse, vUv ), vec4( 0.0 ), vec4( 16.0 ) );',
    );
    hp.needsUpdate = true;
    this.composer.addPass(this.bloom);
    this.tiltH = new ShaderPass(TiltShader);
    this.tiltV = new ShaderPass(TiltShader);
    this.tiltV.uniforms.uDir.value = new THREE.Vector2(0, 1);
    this.composer.addPass(this.tiltH);
    this.composer.addPass(this.tiltV);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());
    this.setSize(size.x, size.y);
  }

  setSize(w: number, h: number): void {
    this.composer.setSize(w / this.renderer.getPixelRatio(), h / this.renderer.getPixelRatio());
    this.tiltH.uniforms.uDir.value.set(1 / w, 0);
    this.tiltV.uniforms.uDir.value.set(0, 1 / h);
  }

  apply(a: Atmo, focusY = 0.46): void {
    this.bloom.strength = a.bloom;
    (this.grade.uniforms.uTint.value as THREE.Color).copy(a.tint);
    this.grade.uniforms.uSat.value = a.saturation;
    this.grade.uniforms.uVig.value = a.vignette;
    this.tiltH.uniforms.uFocus.value = focusY;
    this.tiltV.uniforms.uFocus.value = focusY;
  }

  render(): void {
    if (this.enabled) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }
}
