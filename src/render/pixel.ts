// 픽셀 아트 텍스처 샘플링과 머티리얼 패치.
// 확대(magnification): 텍셀 경계만 화면 1px 폭으로 보간 → 선명한 픽셀을 유지하면서 카메라 이동 중 텍셀 폭이 들쭉날쭉(떨림)하지 않는다.
// 축소(minification): 원래 UV의 미분으로 밉맵을 골라(textureGrad) 먼 거리의 반짝임/모아레를 막는다.
import * as THREE from 'three';
import type { Tex } from '../art/tex/tex.ts';

export const PIXEL_GLSL = /* glsl */ `
vec2 pixelUv(vec2 uv, vec2 size) {
  vec2 px = uv * size;
  vec2 fw = max(fwidth(px), vec2(1e-4));
  vec2 seam = floor(px + 0.5);
  px = seam + clamp((px - seam) / fw, -0.5, 0.5);
  return px / size;
}
vec4 texPixel(sampler2D t, vec2 uv, vec2 size) {
  return textureGrad(t, pixelUv(uv, size), dFdx(uv), dFdy(uv));
}
vec4 texPixelArr(sampler2DArray t, vec2 uv, float layer, vec2 size) {
  return textureGrad(t, vec3(pixelUv(uv, size), layer), dFdx(uv), dFdy(uv));
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
`;

export interface TexOpts {
  srgb?: boolean;
  mipmaps?: boolean;
  repeat?: boolean;
}

/** 이미지 위쪽 행이 v=1이 되도록 행을 뒤집어 DataTexture를 만든다 */
export function makeTexture(w: number, h: number, data: Uint8Array, opts: TexOpts = {}): THREE.DataTexture {
  const flipped = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) flipped.set(data.subarray((h - 1 - y) * w * 4, (h - y) * w * 4), y * w * 4);
  const t = new THREE.DataTexture(flipped, w, h, THREE.RGBAFormat, THREE.UnsignedByteType);
  const mip = opts.mipmaps ?? true;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = mip ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  t.generateMipmaps = mip;
  t.wrapS = t.wrapT = opts.repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.colorSpace = opts.srgb === false ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

export function texFrom(t: Tex, opts: TexOpts = {}): THREE.DataTexture {
  return makeTexture(t.w, t.h, t.data, opts);
}

/** 같은 크기 텍스처 여러 장을 2D 배열 텍스처로 */
export function makeArrayTexture(layers: Tex[], opts: TexOpts = {}): THREE.DataArrayTexture {
  const w = layers[0].w;
  const h = layers[0].h;
  const data = new Uint8Array(w * h * 4 * layers.length);
  layers.forEach((l, i) => {
    for (let y = 0; y < h; y++) data.set(l.data.subarray((h - 1 - y) * w * 4, (h - y) * w * 4), i * w * h * 4 + y * w * 4);
  });
  const t = new THREE.DataArrayTexture(data, w, h, layers.length);
  t.format = THREE.RGBAFormat;
  t.type = THREE.UnsignedByteType;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.wrapS = t.wrapT = opts.repeat === false ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  t.colorSpace = opts.srgb === false ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

export interface LambertPatch {
  uniforms?: Record<string, THREE.IUniform>;
  vertexPars?: string;
  vertexBegin?: string;
  vertexEnd?: string;
  fragmentPars?: string;
  /** map_fragment 대체 코드 */
  map?: string;
  afterMap?: string;
  normal?: string;
  emissive?: string;
  afterLights?: string;
  /**
   * 조명(점광원 거리·방향, 태양 그림자)을 텍셀 중심에서 계산한다.
   * map 코드에서 gSnapA/gSnapB(화면 미분 기준 텍셀 중심까지의 오프셋)를 채워야 한다 — SNAP_UV_GLSL 참고.
   * 스프라이트 한 텍셀 안에서 조명이 번지지 않아 손으로 찍은 픽셀 덩어리가 유지된다.
   */
  snapLight?: boolean;
  cacheKey: string;
}

/** vMapUv 기준 텍셀 중심까지의 화면 미분 계수 (a·dFdx + b·dFdy = Δuv) */
export const SNAP_UV_GLSL = /* glsl */ `
  {
    vec2 uvC = (floor(vMapUv * uMapSize) + 0.5) / uMapSize;
    vec2 dU = uvC - vMapUv;
    vec2 ux = dFdx(vMapUv);
    vec2 uy = dFdy(vMapUv);
    float det = ux.x * uy.y - ux.y * uy.x;
    if (abs(det) > 1e-14) {
      gSnapA = clamp((dU.x * uy.y - dU.y * uy.x) / det, -12.0, 12.0);
      gSnapB = clamp((ux.x * dU.y - ux.y * dU.x) / det, -12.0, 12.0);
    }
  }`;

function snappedLightsChunk(): string {
  let c = THREE.ShaderChunk.lights_fragment_begin;
  c = c.replace(
    'vec3 geometryPosition = - vViewPosition;',
    'vec3 geometryPosition = - ( vViewPosition + gSnapA * dFdx( vViewPosition ) + gSnapB * dFdy( vViewPosition ) );',
  );
  c = c.replace(/vDirectionalShadowCoord\[ i \] \)/g, 'gSnapShadow[ i ] )');
  const pre = /* glsl */ `
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
  vec4 gSnapShadow[ NUM_DIR_LIGHT_SHADOWS ];
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
    gSnapShadow[ i ] = vDirectionalShadowCoord[ i ] + gSnapA * dFdx( vDirectionalShadowCoord[ i ] ) + gSnapB * dFdy( vDirectionalShadowCoord[ i ] );
  }
  #pragma unroll_loop_end
#endif
`;
  return pre + c;
}

/** MeshLambertMaterial 셰이더 청크 치환 */
export function patchLambert(mat: THREE.MeshLambertMaterial | THREE.MeshBasicMaterial, p: LambertPatch): void {
  mat.onBeforeCompile = (shader) => {
    if (p.uniforms) Object.assign(shader.uniforms, p.uniforms);
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>\n${p.vertexPars ?? ''}`);
    if (p.vertexBegin) shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>\n${p.vertexBegin}`);
    if (p.vertexEnd) shader.vertexShader = shader.vertexShader.replace('#include <fog_vertex>', `#include <fog_vertex>\n${p.vertexEnd}`);
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>\n${PIXEL_GLSL}\n${p.snapLight ? 'float gSnapA = 0.0; float gSnapB = 0.0;' : ''}\n${p.fragmentPars ?? ''}`,
    );
    if (p.snapLight) shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_begin>', snappedLightsChunk());
    if (p.map !== undefined) shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', p.map);
    if (p.afterMap) shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>\n${p.afterMap}`);
    if (p.normal !== undefined) shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_maps>', p.normal);
    if (p.emissive !== undefined) shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', p.emissive);
    if (p.afterLights) shader.fragmentShader = shader.fragmentShader.replace('#include <aomap_fragment>', `#include <aomap_fragment>\n${p.afterLights}`);
  };
  mat.customProgramCacheKey = () => p.cacheKey;
}

/** 일반 소품용: map(과 emissiveMap)을 픽셀 샘플링으로 */
export function pixelLambert(params: THREE.MeshLambertMaterialParameters & { key?: string }): THREE.MeshLambertMaterial {
  const { key, ...rest } = params;
  const mat = new THREE.MeshLambertMaterial(rest);
  const map = rest.map as THREE.DataTexture | undefined;
  const em = rest.emissiveMap as THREE.DataTexture | undefined;
  const uMapSize = { value: new THREE.Vector2(map?.image.width ?? 1, map?.image.height ?? 1) };
  const uEmSize = { value: new THREE.Vector2(em?.image.width ?? 1, em?.image.height ?? 1) };
  patchLambert(mat, {
    cacheKey: `pixel-lambert-${key ?? ''}`,
    uniforms: { uMapSize, uEmSize },
    fragmentPars: 'uniform vec2 uMapSize; uniform vec2 uEmSize;',
    map: /* glsl */ `
      #ifdef USE_MAP
        diffuseColor *= texPixel(map, vMapUv, uMapSize);
      #endif`,
    emissive: /* glsl */ `
      #ifdef USE_EMISSIVEMAP
        totalEmissiveRadiance *= texPixel(emissiveMap, vEmissiveMapUv, uEmSize).rgb;
      #endif`,
  });
  return mat;
}
