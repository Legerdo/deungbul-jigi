// 식생 인스턴싱: 잎 덩어리(구형 빌보드)와 풀·갈대(세운 빌보드).
// 인스턴스마다 '부피 노멀'을 줘서 나무 윗면은 햇빛을, 아랫면은 그늘을 받게 하고,
// 바람과 플레이어 접근에 반응해 흔들린다. 그림자 패스에서도 같은 빌보드를 써서 잎 모양 그림자가 생긴다.
import * as THREE from 'three';
import { FOLIAGE_COLS, FOLIAGE_ROWS } from '../art/tex/foliage.ts';
import { SPRITE_STRETCH } from '../game/config.ts';
import { PIXEL_GLSL } from './pixel.ts';

export interface FoliageInstance {
  x: number;
  y: number;
  z: number;
  cell: number;
  size?: number;
  tint?: [number, number, number];
  normal?: [number, number, number];
  sway?: number;
  phase?: number;
}

export const foliageShared = {
  uTime: { value: 0 },
  uWind: { value: 1 },
  uPlayer: { value: new THREE.Vector3(0, -100, 0) },
  uStretch: { value: SPRITE_STRETCH },
  uGlowColor: { value: new THREE.Color(0.35, 0.9, 1.0) },
  uGlowBoost: { value: 1.2 },
};

function vertexCode(upright: boolean): { pars: string; project: string; world: string } {
  const pars = /* glsl */ `
    attribute float aCell; attribute float aSize; attribute vec3 aTint; attribute vec3 aNrm; attribute vec2 aSway;
    uniform float uTime; uniform float uWind; uniform vec3 uPlayer; uniform float uStretch;
    varying vec2 vUvF; varying vec3 vTint;
    vec3 gFolWp;`;
  const project = /* glsl */ `
    vec4 wc = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 camU = ${upright ? 'vec3(0.0, 1.0, 0.0)' : 'vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1])'};
    vec2 off = position.xy * aSize;
    ${upright ? 'off.y *= uStretch;' : ''}
    float hk = ${upright ? 'position.y' : '(position.y + 0.5)'};
    float swy = sin(uTime * 1.6 + aSway.y + wc.x * 0.37 + wc.z * 0.21) + 0.45 * sin(uTime * 2.9 + aSway.y * 1.7);
    float sw = swy * aSway.x * uWind * hk;
    vec3 wp = wc.xyz + camR * (off.x + sw) + camU * off.y;
    ${
      upright
        ? `vec2 pd = wp.xz - uPlayer.xz; float pdl = length(pd);
           float push = (1.0 - smoothstep(0.0, 1.3, pdl)) * hk * 0.45 * step(abs(wp.y - uPlayer.y), 1.5);
           wp.xz += pd / max(pdl, 1e-3) * push; wp.y -= push * 0.3;`
        : ''
    }
    gFolWp = wp;
    vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float col = mod(aCell, ${FOLIAGE_COLS.toFixed(1)});
    float row = floor(aCell / ${FOLIAGE_COLS.toFixed(1)});
    vec2 luv = vec2(position.x + 0.5, ${upright ? 'position.y' : 'position.y + 0.5'});
    vUvF = vec2((col + luv.x) / ${FOLIAGE_COLS.toFixed(1)}, (${(FOLIAGE_ROWS - 1).toFixed(1)} - row + luv.y) / ${FOLIAGE_ROWS.toFixed(1)});
    vTint = aTint;`;
  const world = /* glsl */ `
    #if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
      worldPosition = vec4(gFolWp, 1.0);
    #endif`;
  return { pars, project, world };
}

export class FoliageLayer {
  readonly mesh: THREE.InstancedMesh;

  constructor(atlas: THREE.DataTexture, glow: THREE.DataTexture | null, items: FoliageInstance[], upright: boolean) {
    const geo = new THREE.PlaneGeometry(1, 1);
    if (upright) geo.translate(0, 0.5, 0);
    const n = items.length;
    const aCell = new Float32Array(n);
    const aSize = new Float32Array(n);
    const aTint = new Float32Array(n * 3);
    const aNrm = new Float32Array(n * 3);
    const aSway = new Float32Array(n * 2);
    items.forEach((it, i) => {
      aCell[i] = it.cell;
      aSize[i] = it.size ?? 2;
      const t = it.tint ?? [1, 1, 1];
      aTint.set(t, i * 3);
      const nn = it.normal ?? [0, 1, 0.6];
      const l = Math.hypot(nn[0], nn[1], nn[2]) || 1;
      aNrm.set([nn[0] / l, nn[1] / l, nn[2] / l], i * 3);
      aSway[i * 2] = it.sway ?? (upright ? 0.12 : 0.08);
      aSway[i * 2 + 1] = it.phase ?? (it.x * 1.3 + it.z * 0.7) % 6.28;
    });
    geo.setAttribute('aCell', new THREE.InstancedBufferAttribute(aCell, 1));
    geo.setAttribute('aSize', new THREE.InstancedBufferAttribute(aSize, 1));
    geo.setAttribute('aTint', new THREE.InstancedBufferAttribute(aTint, 3));
    geo.setAttribute('aNrm', new THREE.InstancedBufferAttribute(aNrm, 3));
    geo.setAttribute('aSway', new THREE.InstancedBufferAttribute(aSway, 2));

    const mat = new THREE.MeshLambertMaterial({ map: atlas, alphaTest: 0.5, alphaToCoverage: true });
    const atlasSize = new THREE.Vector2(atlas.image.width, atlas.image.height);
    const v = vertexCode(upright);
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, foliageShared, {
        uAtlasSize: { value: atlasSize },
        uGlow: { value: glow },
      });
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${v.pars}`)
        .replace(
          '#include <beginnormal_vertex>',
          'vec3 objectNormal = normalize(aNrm);\n#ifdef USE_TANGENT\nvec3 objectTangent = vec3( tangent.xyz );\n#endif',
        )
        .replace('#include <project_vertex>', v.project)
        .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\n${v.world}`);
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>\n${PIXEL_GLSL}\nuniform vec2 uAtlasSize; uniform sampler2D uGlow; uniform vec3 uGlowColor; uniform float uGlowBoost; varying vec2 vUvF; varying vec3 vTint;`,
        )
        .replace(
          '#include <map_fragment>',
          'vec4 fc = texPixel(map, vUvF, uAtlasSize); diffuseColor *= vec4(fc.rgb * vTint, fc.a);',
        )
        .replace(
          '#include <emissivemap_fragment>',
          glow ? 'totalEmissiveRadiance += uGlowColor * texPixel(uGlow, vUvF, uAtlasSize).r * uGlowBoost;' : '',
        );
    };
    mat.customProgramCacheKey = () => `foliage-${upright ? 'u' : 's'}-${glow ? 'g' : 'n'}`;

    this.mesh = new THREE.InstancedMesh(geo, mat, n);
    const m = new THREE.Matrix4();
    items.forEach((it, i) => {
      m.makeTranslation(it.x, it.y, it.z);
      this.mesh.setMatrixAt(i, m);
    });
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // 그림자용 깊이 머티리얼: 같은 빌보드와 알파 컷
    const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: atlas, alphaTest: 0.5 });
    depth.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, foliageShared, { uAtlasSize: { value: atlasSize } });
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${v.pars}`)
        .replace('#include <project_vertex>', v.project);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec2 vUvF; varying vec3 vTint;`)
        .replace('#include <map_fragment>', 'diffuseColor *= texture2D(map, vUvF);');
    };
    depth.customProgramCacheKey = () => `foliage-depth-${upright ? 'u' : 's'}`;
    this.mesh.customDepthMaterial = depth;
  }
}
