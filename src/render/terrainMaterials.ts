// 지형 머티리얼: 윗면은 칸별 재질 지도를 텍셀 단위 노이즈로 흔들어 경계를 자연스러운 픽셀 테두리로 섞고,
// 옆면은 면마다 배열 텍스처 레이어를 고른다. 모두 램버트 조명·그림자·안개를 그대로 받는다.
import * as THREE from 'three';
import { buildGroundLayers } from '../art/tex/ground.ts';
import { texCarvedStone, texCliff, texGrassLip, texRuinWall, texSoil, texStoneWall } from '../art/tex/walls.ts';
import type { Terrain } from '../world/terrain.ts';
import { makeArrayTexture, patchLambert, pixelLambert, texFrom } from './pixel.ts';

export interface TerrainMeshes {
  top: THREE.Mesh;
  sides: THREE.Mesh;
  lip: THREE.Mesh;
  typeTex: THREE.DataTexture;
}

export function buildTerrainMeshes(t: Terrain): TerrainMeshes {
  const geo = t.buildGeometry();
  const ground = makeArrayTexture(buildGroundLayers());
  const typeTex = new THREE.DataTexture(t.typeMapData(), t.W, t.D, THREE.RGBAFormat, THREE.UnsignedByteType);
  typeTex.magFilter = THREE.NearestFilter;
  typeTex.minFilter = THREE.NearestFilter;
  typeTex.generateMipmaps = false;
  typeTex.colorSpace = THREE.NoColorSpace;
  typeTex.needsUpdate = true;

  const topMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  patchLambert(topMat, {
    cacheKey: 'terrain-top',
    uniforms: {
      tGround: { value: ground },
      tType: { value: typeTex },
      uGrid: { value: new THREE.Vector4(t.x0, t.z0, t.W, t.D) },
    },
    vertexPars: 'varying vec3 vWorldT;',
    vertexEnd: 'vWorldT = (modelMatrix * vec4(transformed, 1.0)).xyz;',
    fragmentPars: 'uniform sampler2DArray tGround; uniform sampler2D tType; uniform vec4 uGrid; varying vec3 vWorldT;',
    map: /* glsl */ `
      vec2 wp = vWorldT.xz;
      vec2 tq = (floor(wp * 16.0) + 0.5) / 16.0;
      vec2 jit = vec2(vnoise(tq * 2.1), vnoise(tq * 2.1 + 17.3)) - 0.5;
      vec2 jit2 = vec2(vnoise(tq * 6.0 + 3.1), vnoise(tq * 6.0 + 9.7)) - 0.5;
      vec2 cellUv = (tq + jit * 0.7 + jit2 * 0.25 - uGrid.xy) / uGrid.zw;
      float layer = floor(texture2D(tType, cellUv).r * 255.0 + 0.5);
      vec2 guv = vec2(wp.x, -wp.y) / 4.0;
      vec4 g = texPixelArr(tGround, guv, layer, vec2(64.0));
      diffuseColor.rgb *= g.rgb;`,
  });
  const top = new THREE.Mesh(geo.top, topMat);
  top.receiveShadow = true;

  const sideTex = makeArrayTexture([texCliff(), texStoneWall(), texRuinWall(), texSoil(), texCarvedStone(203, undefined)]);
  const sideMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  patchLambert(sideMat, {
    cacheKey: 'terrain-side',
    uniforms: { tSide: { value: sideTex } },
    vertexPars: 'attribute float aLayer; flat varying float vLayer; varying vec2 vUvS;',
    vertexBegin: 'vLayer = aLayer; vUvS = uv;',
    fragmentPars: 'uniform sampler2DArray tSide; flat varying float vLayer; varying vec2 vUvS;',
    map: /* glsl */ `
      vec4 g = texPixelArr(tSide, vUvS, vLayer, vec2(64.0));
      diffuseColor.rgb *= g.rgb;`,
  });
  const sides = new THREE.Mesh(geo.sides, sideMat);
  sides.receiveShadow = true;
  sides.castShadow = true;

  const lipTex = texFrom(texGrassLip(), { repeat: true });
  const lipMat = pixelLambert({ map: lipTex, alphaTest: 0.5, key: 'lip' });
  const lip = new THREE.Mesh(geo.lip, lipMat);
  lip.receiveShadow = true;

  top.name = 'terrain-top';
  sides.name = 'terrain-sides';
  lip.name = 'terrain-lip';
  return { top, sides, lip, typeTex };
}
