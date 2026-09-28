// 픽셀 스프라이트 액터: 카메라 방향으로 선 세로 판(원통형 빌보드)에 시트 프레임을 그린다.
// 조명은 장면과 같은 램버트 조명을 받되, 스프라이트 노멀맵으로 광원 쪽이 밝아지고 태양 쪽 가장자리에 림 라이트가 생긴다.
// 발 기준점이 메시 원점이므로 지면 높이에 두면 접지가 맞는다. 가려진 부분은 실루엣으로 보인다.
import * as THREE from 'three';
import type { Dir, SheetData } from '../art/sheet.ts';
import { SPRITE_STRETCH, TPU } from '../game/config.ts';
import { makeTexture, patchLambert, SNAP_UV_GLSL } from './pixel.ts';

export interface SheetAsset {
  data: SheetData;
  color: THREE.DataTexture;
  normal: THREE.DataTexture;
}

export function loadSheet(data: SheetData): SheetAsset {
  return {
    data,
    color: makeTexture(data.width, data.height, data.color, { mipmaps: false }),
    normal: makeTexture(data.width, data.height, data.normal, { mipmaps: false, srgb: false }),
  };
}

/** 모든 스프라이트가 공유하는 유니폼 (카메라 방향 기저, 림 라이트) */
export const spriteShared = {
  uBasisR: { value: new THREE.Vector3(1, 0, 0) },
  uBasisU: { value: new THREE.Vector3(0, 1, 0) },
  uBasisF: { value: new THREE.Vector3(0, 0, 1) },
  uRimDir: { value: new THREE.Vector2(-0.7, 0.3) },
  uRimColor: { value: new THREE.Color(1.0, 0.62, 0.35) },
  uRimStrength: { value: 0.55 },
  uNormalStrength: { value: 0.75 },
  /**
   * 앞을 가리는 수관을 비우는 원 4개: (드로잉 버퍼 픽셀 x, y, 반지름, 대상의 시야 깊이).
   * 0번은 플레이어, 1~3번은 싸우고 있는 가까운 적. 반지름 0이면 끔.
   */
  uOcc: { value: [0, 1, 2, 3].map(() => new THREE.Vector4(-9999, -9999, 0, 0)) },
};

let blobTexture: THREE.DataTexture | null = null;
function blobTex(): THREE.DataTexture {
  if (blobTexture) return blobTexture;
  const w = 32;
  const h = 16;
  const d = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (x + 0.5 - w / 2) / (w / 2);
      const dy = (y + 0.5 - h / 2) / (h / 2);
      const r = dx * dx + dy * dy;
      const a = r < 0.45 ? 1 : r < 0.75 ? 0.66 : r < 1 ? 0.33 : 0;
      const k = (y * w + x) * 4;
      d[k] = 10;
      d[k + 1] = 6;
      d[k + 2] = 18;
      d[k + 3] = Math.round(a * 255);
    }
  }
  blobTexture = makeTexture(w, h, d, { mipmaps: false });
  blobTexture.magFilter = THREE.NearestFilter;
  return blobTexture;
}

export interface ActorOpts {
  silhouette?: boolean;
  silhouetteColor?: THREE.ColorRepresentation;
  shadowSize?: [number, number];
  shadowOpacity?: number;
  emissive?: number;
  castShadow?: boolean;
  /** 발끝이 지면에 파묻혀 잘리지 않도록 깊이만 카메라 쪽으로 당기는 양(월드 유닛) */
  depthBias?: number;
  /** 바람 흔들림 (수관 등) */
  sway?: number;
  noShadow?: boolean;
  /** 플레이어 앞을 가리면 디더로 비워 보이게 할지 (나무 수관) */
  occluder?: boolean;
}

/** 스프라이트 공통 시간 유니폼 */
export const spriteTime = { value: 0 };

const DEPTH_BIAS_GLSL = /* glsl */ `
  {
    vec4 mvB = mvPosition;
    float lB = length(mvB.xyz);
    mvB.xyz *= max(0.01, lB - uDepthBias) / lB;
    vec4 cB = projectionMatrix * mvB;
    gl_Position.z = cB.z / cB.w * gl_Position.w;
  }`;

export class SpriteActor {
  readonly root = new THREE.Group();
  readonly body = new THREE.Group();
  readonly mesh: THREE.Mesh;
  readonly shadow: THREE.Mesh;
  readonly silhouette: THREE.Mesh | null = null;
  readonly asset: SheetAsset;
  private map: THREE.Texture;
  readonly u = {
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(1, 1, 1) },
    uFlip: { value: 1 },
    uEmissive: { value: 1 },
    uDissolve: { value: 0 },
    uMapSize: { value: new THREE.Vector2() },
    uNormalTex: { value: null as THREE.Texture | null },
    uTint: { value: new THREE.Color(1, 1, 1) },
    uDepthBias: { value: 0.35 },
    uSway: { value: 0 },
    uPhase: { value: 0 },
    uHeight: { value: 1 },
    uOccluder: { value: 0 },
    /** 들고 있는 등불이 자기 몸을 비추는 빛 (시야 공간 위치, 색×세기, 반지름 — 0이면 끔) */
    uSelfPos: { value: new THREE.Vector3() },
    uSelfColor: { value: new THREE.Color(0, 0, 0) },
    uSelfRadius: { value: 0 },
  };
  anim = '';
  dir: Dir = 'down';
  flipX = false;
  frame = 0;
  private t = 0;
  speed = 1;
  finished = false;
  /** 스프라이트를 발 위로 띄우는 높이 (혼령 등) */
  hover = 0;
  shadowScale = 1;
  shadowBaseOpacity: number;

  constructor(asset: SheetAsset, opts: ActorOpts = {}) {
    this.asset = asset;
    const d = asset.data;
    const w = d.frameW / TPU;
    const h = (d.frameH / TPU) * SPRITE_STRETCH;
    const geo = new THREE.PlaneGeometry(w, h);
    // 발 기준점이 원점에 오도록 이동
    const px = (d.pivotX / d.frameW - 0.5) * w;
    const py = (0.5 - d.pivotY / d.frameH) * h;
    geo.translate(-px, -py, 0);
    // 같은 Source를 공유하는 복제본: GPU 업로드는 한 번, 프레임 UV 변환만 액터별
    this.map = asset.color.clone();
    this.map.matrixAutoUpdate = false;
    this.u.uMapSize.value.set(d.width, d.height);
    this.u.uNormalTex.value = asset.normal;
    this.u.uEmissive.value = opts.emissive ?? 1.6;
    this.u.uDepthBias.value = opts.depthBias ?? 0.35;
    this.u.uSway.value = opts.sway ?? 0;
    this.u.uHeight.value = h;
    this.u.uOccluder.value = opts.occluder ? 1 : 0;
    const mat = new THREE.MeshLambertMaterial({ map: this.map, alphaTest: 0.5, alphaToCoverage: true });
    patchLambert(mat, {
      cacheKey: 'sprite-actor',
      uniforms: { ...this.u, ...spriteShared, uTime: spriteTime },
      vertexPars: 'uniform float uDepthBias; uniform float uSway; uniform float uPhase; uniform float uHeight; uniform float uTime; uniform float uOccluder;',
      vertexBegin: /* glsl */ `
        if (uSway > 0.0) {
          float hk = clamp(position.y / uHeight, 0.0, 1.0);
          transformed.x += (sin(uTime * 1.3 + uPhase) + 0.4 * sin(uTime * 2.7 + uPhase * 1.7)) * uSway * hk * hk;
        }`,
      vertexEnd: DEPTH_BIAS_GLSL,
      fragmentPars: /* glsl */ `
        uniform vec2 uMapSize; uniform sampler2D uNormalTex; uniform float uFlash; uniform vec3 uFlashColor;
        uniform float uFlip; uniform float uEmissive; uniform float uDissolve; uniform vec3 uTint;
        uniform vec3 uBasisR; uniform vec3 uBasisU; uniform vec3 uBasisF;
        uniform vec2 uRimDir; uniform vec3 uRimColor; uniform float uRimStrength; uniform float uNormalStrength;
        uniform vec4 uOcc[4]; uniform float uOccluder;
        uniform vec3 uSelfPos; uniform vec3 uSelfColor; uniform float uSelfRadius;
        vec4 gSpriteN;
        float bayerT(vec2 p) {
          vec2 q = mod(floor(p), 4.0);
          int i = int(q.y) * 4 + int(q.x);
          int b[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
          return (float(b[i]) + 0.5) / 16.0;
        }`,
      snapLight: true,
      map: /* glsl */ `
        ${SNAP_UV_GLSL}
        vec2 sUv = pixelUv(vMapUv, uMapSize);
        vec4 sC = textureGrad(map, sUv, dFdx(vMapUv), dFdy(vMapUv));
        gSpriteN = textureGrad(uNormalTex, sUv, dFdx(vMapUv), dFdy(vMapUv));
        // discard는 미분(조명 스냅·알파 테스트)이 모두 끝난 뒤 알파 테스트에서만 일어나도록 알파만 0으로 둔다
        float keep = 1.0;
        if (uDissolve > 0.0) {
          float hn = hash12(floor(vMapUv * uMapSize) + 0.37);
          if (hn < uDissolve) keep = 0.0;
        }
        if (uOccluder > 0.5) {
          // 플레이어·싸우는 적을 가리는 수관: 대상보다 카메라 쪽에 있는 조각만 텍셀 단위 디더로 비운다.
          // 가운데는 완전히 비우고 바깥 얇은 띠만 성기게 — 넓은 체커 띠는 그물 무늬처럼 보인다
          float cut = 0.0;
          for (int i = 0; i < 4; i++) {
            vec4 o = uOcc[i];
            if (o.z > 0.0 && vViewPosition.z < o.w - 0.6) {
              vec2 dq = (gl_FragCoord.xy - o.xy) / o.z;
              dq.y *= 0.75;
              cut = max(cut, (1.0 - smoothstep(0.72, 1.0, length(dq))) * 1.08);
            }
          }
          if (cut > 0.0 && bayerT(floor(vMapUv * uMapSize)) < cut) keep = 0.0;
        }
        diffuseColor *= vec4(sC.rgb * uTint, sC.a * keep);
        diffuseColor.rgb = mix(diffuseColor.rgb, uFlashColor, uFlash);`,
      normal: /* glsl */ `
        vec3 nS = gSpriteN.xyz * 2.0 - 1.0;
        nS.x *= uFlip;
        nS = normalize(mix(vec3(0.0, 0.0, 1.0), nS, uNormalStrength));
        vec3 nW = uBasisR * nS.x + uBasisU * nS.y + uBasisF * nS.z;
        normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);`,
      emissive: /* glsl */ `
        totalEmissiveRadiance += diffuseColor.rgb * gSpriteN.a * uEmissive + uFlashColor * uFlash * 0.8;`,
      afterLights: /* glsl */ `
        {
          vec3 nR = gSpriteN.xyz * 2.0 - 1.0;
          nR.x *= uFlip;
          float edge = clamp(1.0 - nR.z, 0.0, 1.0);
          float side = max(0.0, dot(normalize(nR.xy + 1e-4), uRimDir));
          float rim = step(0.35, edge * side) * uRimStrength;
          reflectedLight.directDiffuse += diffuseColor.rgb * uRimColor * rim;
        }
        if (uSelfRadius > 0.0) {
          // 손에 든 등불: 실제 점광원은 판 뒤에 두어 몸이 하얗게 날지 않게 하고,
          // 몸은 텍셀 중심(geometryPosition) 기준 부드러운 감쇠 + 법선으로 4단계로 끊어 따뜻하게 비춘다
          vec3 sL = uSelfPos - geometryPosition;
          float sD = length(sL);
          float sF = 1.0 - smoothstep(uSelfRadius * 0.2, uSelfRadius, sD);
          float sN = max(0.0, dot(normal, sL / max(sD, 1e-3)));
          float sK = floor(sN * sF * 4.0 + 0.5) * 0.25;
          reflectedLight.directDiffuse += diffuseColor.rgb * uSelfColor * sK;
        }`,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.castShadow = opts.castShadow ?? false;
    this.mesh.receiveShadow = true;
    // 그림자 맵에 스프라이트 알파 반영
    this.mesh.customDepthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      map: this.map,
      alphaTest: 0.5,
    });
    this.body.add(this.mesh);
    this.root.add(this.body);

    if (opts.silhouette) {
      const u = this.u;
      const smat = new THREE.ShaderMaterial({
        uniforms: {
          map: { value: this.map },
          uvT: { value: this.map.matrix },
          uMapSize: this.u.uMapSize,
          // 실루엣은 확실히 앞을 가리는 물체(벽·지붕)에만: 발밑 지면이나 바로 앞 풀에는 반응하지 않도록 깊이를 더 당긴다
          uDepthBias: {
            get value() {
              return u.uDepthBias.value + 1.1;
            },
          },
          uColor: { value: new THREE.Color(opts.silhouetteColor ?? 0x7fe0d0) },
        },
        vertexShader: /* glsl */ `
          uniform mat3 uvT; uniform float uDepthBias; varying vec2 vUv; varying float vY;
          void main() {
            vUv = (uvT * vec3(uv, 1.0)).xy;
            vY = position.y;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            ${DEPTH_BIAS_GLSL}
          }`,
        fragmentShader: /* glsl */ `
          uniform sampler2D map; uniform vec3 uColor; uniform vec2 uMapSize; varying vec2 vUv; varying float vY;
          void main() {
            if (vY < 0.3) discard;
            vec2 t = floor(vUv * uMapSize);
            vec4 c = texture2D(map, (t + 0.5) / uMapSize);
            if (c.a < 0.5) discard;
            // 가려진 부분: 옅은 단색 실루엣 + 가장자리만 조금 밝게
            float edge = 0.0;
            vec2 px1 = 1.0 / uMapSize;
            edge += step(texture2D(map, (t + vec2(1.5, 0.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(-0.5, 0.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(0.5, 1.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(0.5, -0.5)) * px1).a, 0.5);
            gl_FragColor = vec4(uColor, edge > 0.0 ? 0.8 : 0.38);
          }`,
        transparent: true,
        depthWrite: false,
        depthFunc: THREE.GreaterDepth,
      });
      const sil = new THREE.Mesh(geo, smat);
      sil.renderOrder = 20;
      this.silhouette = sil;
      this.body.add(sil);
    }

    const [sw, sh] = opts.shadowSize ?? [1.1, 0.55];
    const smat = new THREE.MeshBasicMaterial({
      map: blobTex(),
      transparent: true,
      depthWrite: false,
      opacity: opts.shadowOpacity ?? 0.55,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    this.shadowBaseOpacity = smat.opacity;
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh * 2), smat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.renderOrder = 2;
    this.shadow.visible = !opts.noShadow;
    this.root.add(this.shadow);
  }

  get material(): THREE.MeshLambertMaterial {
    return this.mesh.material as THREE.MeshLambertMaterial;
  }

  has(anim: string): boolean {
    return this.asset.data.anims[`${anim}_${this.dir}`] !== undefined;
  }

  play(anim: string, restart = false): void {
    if (this.anim === anim && !restart) return;
    this.anim = anim;
    this.frame = 0;
    this.t = 0;
    this.finished = false;
  }

  setDir(dir: Dir, flipX: boolean): void {
    this.dir = dir;
    this.flipX = flipX;
  }

  /** 현재 애니메이션 정보 */
  info() {
    const a = this.asset.data.anims[`${this.anim}_${this.dir}`] ?? this.asset.data.anims[`${this.anim}_down`];
    return a;
  }

  /** 애니메이션 전체 길이(ms) */
  duration(anim = this.anim): number {
    const a = this.asset.data.anims[`${anim}_down`];
    return a ? a.durations.reduce((s, v) => s + v, 0) : 0;
  }

  update(dtMs: number): void {
    const a = this.info();
    if (!a) return;
    this.t += dtMs * this.speed;
    for (;;) {
      const d = a.durations[this.frame % a.durations.length];
      if (this.t < d) break;
      this.t -= d;
      if (this.frame + 1 >= a.count) {
        if (a.loop) this.frame = 0;
        else {
          this.finished = true;
          this.t = 0;
          break;
        }
      } else this.frame++;
    }
    this.apply();
  }

  /** 특정 프레임 고정 */
  setFrame(f: number): void {
    this.frame = f;
    this.t = 0;
    this.apply();
  }

  apply(): void {
    const a = this.info();
    if (!a) return;
    const d = this.asset.data;
    const idx = a.start + Math.min(this.frame, a.count - 1);
    const col = idx % d.cols;
    const row = Math.floor(idx / d.cols);
    const rw = d.frameW / d.width;
    const rh = d.frameH / d.height;
    const ox = col * rw;
    const oy = 1 - (row + 1) * rh;
    const flip = this.flipX && this.dir === 'side';
    // uv' = uv * repeat + offset (좌우 반전 시 repeat.x 음수)
    if (flip) this.map.matrix.setUvTransform(ox + rw, oy, -rw, rh, 0, 0, 0);
    else this.map.matrix.setUvTransform(ox, oy, rw, rh, 0, 0, 0);
    this.u.uFlip.value = flip ? -1 : 1;
  }

  /**
   * 들고 있는 광원이 자기 몸을 비추게 한다. worldPos는 광원 위치, toward는 카메라 쪽으로 당기는 거리.
   * camera.matrixWorldInverse가 이번 프레임 값이어야 한다.
   */
  setSelfLight(worldPos: THREE.Vector3, camera: THREE.Camera, color: THREE.Color, intensity: number, radius: number, toward = 0.55): void {
    const v = this.u.uSelfPos.value.copy(worldPos).applyMatrix4(camera.matrixWorldInverse);
    v.z += toward;
    this.u.uSelfColor.value.copy(color).multiplyScalar(intensity);
    this.u.uSelfRadius.value = intensity > 0 ? radius : 0;
  }

  /** 카메라 요(yaw)에 맞춰 판을 돌리고 그림자를 지면에 둔다 */
  sync(cameraYaw: number, groundY: number): void {
    this.mesh.rotation.y = cameraYaw;
    if (this.silhouette) this.silhouette.rotation.y = cameraYaw;
    this.mesh.position.y = this.hover;
    if (this.silhouette) this.silhouette.position.y = this.hover;
    const rel = groundY - this.root.position.y;
    this.shadow.position.y = rel + 0.03;
    const lift = Math.max(0, this.root.position.y + this.hover - groundY);
    const s = this.shadowScale * Math.max(0.45, 1 - lift * 0.18);
    this.shadow.scale.set(s, s, s);
    (this.shadow.material as THREE.MeshBasicMaterial).opacity = this.shadowBaseOpacity * Math.max(0.25, 1 - lift * 0.2);
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.shadow.geometry.dispose();
    (this.shadow.material as THREE.Material).dispose();
  }
}
