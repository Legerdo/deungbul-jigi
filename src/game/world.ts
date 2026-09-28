// 월드 표현 계층: 지형·소품·식생·물·안개·하늘·조명·환경 입자를 만들고 매 프레임 분위기를 적용한다.
import * as THREE from 'three';
import { buildFoliageAtlas } from '../art/tex/foliage.ts';
import { Sky, MistSheet, Water, Waterfall } from '../render/env.ts';
import { FoliageLayer, foliageShared } from '../render/foliage.ts';
import { LightPool } from '../render/lights.ts';
import { Particles } from '../render/particles.ts';
import { texFrom } from '../render/pixel.ts';
import { SpriteActor, loadSheet, spriteShared, spriteTime } from '../render/sprites.ts';
import { buildCanopySheet, type CanopyKind } from '../art/tex/trees.ts';
import { buildTerrainMeshes } from '../render/terrainMaterials.ts';
import { sampleAtmo, type Atmo } from '../world/atmosphere.ts';
import { buildLevel, type Level } from '../world/level.ts';
import { PropKit, type Emitter } from '../world/props.ts';

export class World {
  readonly scene = new THREE.Scene();
  readonly level: Level;
  readonly kit: PropKit;
  readonly sky: Sky;
  readonly water: Water;
  readonly waterfall: Waterfall;
  readonly mists: MistSheet[] = [];
  readonly sun: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly fog: THREE.Fog;
  readonly lights: LightPool;
  readonly dust: Particles;
  readonly glow: Particles;
  readonly additive: Particles;
  /** 전투 효과용(스파크 등) */
  readonly fx: Particles;
  atmo: Atmo;
  victory = 0;
  bossDark = 0;
  /** 동적 광원 (플레이어 등불, 투사체, 보스 핵 등) */
  readonly dynamicEmitters: Emitter[] = [];
  private emitAcc = new Map<string, number>();
  private sunTarget = new THREE.Object3D();
  readonly canopyActors: SpriteActor[] = [];

  constructor() {
    this.kit = new PropKit();
    this.level = buildLevel(this.kit);
    const scene = this.scene;
    const L = this.level;

    const tm = buildTerrainMeshes(L.terrain);
    scene.add(tm.top, tm.sides, tm.lip);
    L.props.build(scene);

    const atlas = buildFoliageAtlas();
    const atlasTex = texFrom(atlas.color, { mipmaps: false });
    const glowTex = texFrom(atlas.glow, { mipmaps: false, srgb: false });
    if (L.props.canopy.length) {
      const canopy = new FoliageLayer(atlasTex, null, L.props.canopy, false);
      scene.add(canopy.mesh);
    }
    const upright = new FoliageLayer(atlasTex, glowTex, L.props.upright, true);
    scene.add(upright.mesh);
    // 나무 수관 스프라이트
    const sheets = new Map<CanopyKind, ReturnType<typeof loadSheet>>();
    for (const c of L.props.canopies) {
      let s = sheets.get(c.kind);
      if (!s) {
        s = loadSheet(buildCanopySheet(c.kind));
        sheets.set(c.kind, s);
      }
      const a = new SpriteActor(s, { noShadow: true, depthBias: 0, sway: c.sway, castShadow: true, emissive: 0, occluder: true });
      a.play(`v${c.variant}`);
      a.apply();
      a.u.uPhase.value = c.x * 0.7 + c.z * 1.3;
      a.root.position.set(c.x, c.y, c.z);
      scene.add(a.root);
      this.canopyActors.push(a);
    }

    this.sky = new Sky();
    scene.add(this.sky.group);
    const r = L.river;
    this.water = new Water(r.x0 - 0.05, r.x1 + 0.05, -13, 18, r.y);
    scene.add(this.water.mesh);
    const wf = L.waterfall;
    this.waterfall = new Waterfall(wf.x0, wf.x1, wf.z, wf.top, wf.bottom);
    scene.add(this.waterfall.mesh);
    // 물안개: 강 위 짙게, 숲과 공터에 옅게
    const mistDefs: Array<[number, number, number, number, number, number]> = [
      // 강 위는 물빛이 비치도록 너무 두껍지 않게
      [23, -2, 10, 30, r.y + 0.35, 0.8],
      [23, -6, 12, 14, r.y + 0.9, 0.6],
      [8, -2, 22, 18, 0.95, 0.5],
      [35, -1, 18, 18, 0.85, 0.9],
      [35, -4, 22, 12, 1.6, 0.55],
      [56, -2, 22, 18, 3.0, 0.45],
      [74, -4, 24, 20, 2.95, 0.6],
      [-10, -4, 20, 14, 1.9, 0.25],
    ];
    mistDefs.forEach(([x, z, w, d, y, den], i) => {
      const m = new MistSheet(x, z, w, d, y, den, i * 3.7);
      this.mists.push(m);
      scene.add(m.mesh);
    });

    this.hemi = new THREE.HemisphereLight(0x8070a0, 0x40302a, 1.2);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffa868, 1.8);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -30;
    sc.right = 30;
    sc.top = 30;
    sc.bottom = -30;
    sc.near = 1;
    sc.far = 140;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.03;
    this.sun.shadow.radius = 1.5;
    scene.add(this.sun);
    scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;
    this.fog = new THREE.Fog(0x806070, 30, 95);
    scene.fog = this.fog;
    this.lights = new LightPool(scene, 12, 26);

    this.dust = new Particles(1400, false);
    this.glow = new Particles(600, true, true);
    this.additive = new Particles(900, true);
    this.fx = new Particles(1400, false);
    scene.add(this.dust.points, this.glow.points, this.additive.points, this.fx.points);

    this.atmo = sampleAtmo(L.spawn.x, 0);
  }

  private vpW = 1920;
  private vpH = 1080;
  /** 수관 디더 원 반지름 (드로잉 버퍼 픽셀) */
  private occR = 150;
  /** 수관을 비워 보여 줄 싸우는 적의 가슴 높이 위치 — Game이 매 프레임 채운다 (최대 3) */
  readonly occTargets: THREE.Vector3[] = [];

  setViewport(width: number, height: number, fovDeg: number): void {
    this.vpW = width;
    this.vpH = height;
    this.occR = 150 * (height / 1080);
    const s = height / (2 * Math.tan((fovDeg * Math.PI) / 360));
    this.dust.uScale.value = s;
    this.glow.uScale.value = s;
    this.additive.uScale.value = s;
    this.fx.uScale.value = s;
  }

  update(dt: number, time: number, focus: THREE.Vector3, camera: THREE.PerspectiveCamera, atmoX: number): void {
    const a = sampleAtmo(atmoX, this.victory, this.bossDark);
    this.atmo = a;
    // 태양 (그림자 카메라는 초점을 따라가며 텍셀 단위로 고정해 떨림 방지)
    this.sun.color.copy(a.sunColor);
    this.sun.intensity = a.sunIntensity;
    const dir = a.sunDir;
    const texel = 60 / 2048;
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    const inv = q.clone().invert();
    const lf = focus.clone().applyQuaternion(inv);
    lf.x = Math.round(lf.x / texel) * texel;
    lf.y = Math.round(lf.y / texel) * texel;
    const snapped = lf.applyQuaternion(q);
    this.sunTarget.position.copy(snapped);
    this.sun.position.copy(snapped).addScaledVector(dir, 60);
    this.sunTarget.updateMatrixWorld();

    this.hemi.color.copy(a.hemiSky);
    this.hemi.groundColor.copy(a.hemiGround);
    this.hemi.intensity = a.hemiIntensity;
    this.fog.color.copy(a.fogColor);
    this.fog.near = a.fogNear;
    this.fog.far = a.fogFar;

    // 스프라이트 림 라이트: 태양 방향을 스프라이트 평면에 투영
    const camYaw = Math.atan2(camera.position.x - focus.x, camera.position.z - focus.z);
    const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
    const fwd = new THREE.Vector3(Math.sin(camYaw), 0, Math.cos(camYaw));
    spriteShared.uBasisR.value.copy(right);
    spriteShared.uBasisF.value.copy(fwd);
    const rd = new THREE.Vector2(dir.dot(right), dir.y);
    if (rd.lengthSq() > 1e-4) rd.normalize();
    spriteShared.uRimDir.value.copy(rd);
    spriteShared.uRimColor.value.copy(a.rimColor);
    spriteShared.uRimStrength.value = a.rimStrength;
    // 플레이어(0번)와 싸우고 있는 적(1~3번)을 가리는 수관 디더 원
    {
      const occ = spriteShared.uOcc.value;
      const p = new THREE.Vector3();
      const setOcc = (o: THREE.Vector4, x: number, y: number, z: number, r: number) => {
        p.set(x, y, z);
        const depth = -p.clone().applyMatrix4(camera.matrixWorldInverse).z;
        p.project(camera);
        o.set((p.x * 0.5 + 0.5) * this.vpW, (p.y * 0.5 + 0.5) * this.vpH, r, depth);
      };
      setOcc(occ[0], focus.x, focus.y + 1.0, focus.z, this.occR);
      for (let i = 1; i < occ.length; i++) {
        const t = this.occTargets[i - 1];
        if (t) setOcc(occ[i], t.x, t.y, t.z, this.occR * 0.8);
        else occ[i].set(-9999, -9999, 0, 0);
      }
    }

    foliageShared.uTime.value = time;
    foliageShared.uPlayer.value.copy(focus);
    foliageShared.uWind.value = 1 + Math.sin(time * 0.35) * 0.35;
    spriteTime.value = time;
    for (const c of this.canopyActors) c.mesh.rotation.y = camYaw;

    this.sky.update(a, camera, time);
    this.water.update(time, a);
    this.waterfall.update(time, a);
    for (const m of this.mists) m.update(time, a.mist, a.mistColor);

    this.lights.windowScale = a.windowScale;
    this.lights.update(this.level.props.emitters, this.dynamicEmitters, focus, time);

    this.ambientParticles(dt, time, focus, a);
    this.dust.update(dt, time);
    this.glow.update(dt, time);
    this.additive.update(dt, time);
    this.fx.update(dt, time);
  }

  private rate(key: string, perSec: number, dt: number): number {
    const acc = (this.emitAcc.get(key) ?? 0) + perSec * dt;
    const n = Math.floor(acc);
    this.emitAcc.set(key, acc - n);
    return n;
  }

  private ambientParticles(dt: number, time: number, focus: THREE.Vector3, a: Atmo): void {
    const R = Math.random;
    // 따뜻한 먼지·불티 (마을, 승리 후 전역)
    for (let i = this.rate('ember', 9 * a.embers, dt); i > 0; i--) {
      const x = focus.x + (R() - 0.5) * 30;
      const z = focus.z + (R() - 0.5) * 16 - 2;
      const y = this.level.terrain.heightAt(x, z) + 0.3 + R() * 2.5;
      this.glow.emit({ x, y, z, vx: 0.15, vy: 0.25 + R() * 0.2, vz: 0, life: 3 + R() * 3, size: 0.09, color: R() < 0.7 ? 0xffb050 : 0xffe0a0, alpha: 0.85, fade: 1, wander: 0.6 });
    }
    // 반딧불 (숲)
    for (let i = this.rate('ff', 7 * a.fireflies, dt); i > 0; i--) {
      const x = focus.x + (R() - 0.5) * 32;
      const z = focus.z + (R() - 0.5) * 18 - 2;
      const y = this.level.terrain.heightAt(x, z) + 0.4 + R() * 2.2;
      this.glow.emit({ x, y, z, vx: 0, vy: 0.05, vz: 0, life: 4 + R() * 3, size: 0.11, color: R() < 0.6 ? 0xd8ff70 : 0x9affc0, alpha: 1, fade: 1, wander: 1.2 });
    }
    // 단풍잎 낙하 (마을 나무 주변)
    if (focus.x < 0) {
      for (let i = this.rate('leaf', 3.5, dt); i > 0; i--) {
        const trees = [
          [-32.2, -6.8, 5.8],
          [-20.5, 3.6, 4.6],
          [-41.5, 4.5, 4.3],
          [-5.5, -12, 5.4],
        ];
        const t = trees[Math.floor(R() * trees.length)];
        const x = t[0] + (R() - 0.5) * 3.4;
        const z = t[1] + (R() - 0.5) * 2.4;
        this.dust.emit({
          x,
          y: t[2] + R() * 0.8,
          z,
          vx: 0.3 + R() * 0.3,
          vy: -0.45,
          vz: 0.1,
          life: 6,
          size: 0.1,
          color: [0xcc5c2c, 0xe8883c, 0x9c3a24, 0xf8b858][Math.floor(R() * 4)],
          fade: 0,
          wander: 1.6,
        });
      }
      // 굴뚝 연기
      for (const s of this.level.props.smokeSources) {
        if (Math.abs(s.x - focus.x) > 26) continue;
        for (let i = this.rate(`smoke${s.x}`, 3, dt); i > 0; i--) {
          this.dust.emit({ x: s.x + (R() - 0.5) * 0.2, y: s.y, z: s.z, vx: 0.25 + R() * 0.1, vy: 0.55 + R() * 0.2, vz: 0, life: 3.2, size: 0.26, color: R() < 0.5 ? 0x9a8a9a : 0x7a6a80, alpha: 0.45, fade: 1, wander: 0.3 });
        }
      }
    }
    // 폭포 물보라
    const wf = this.level.waterfall;
    if (Math.abs(focus.x - (wf.x0 + wf.x1) / 2) < 30) {
      for (let i = this.rate('spray', 26, dt); i > 0; i--) {
        const x = wf.x0 + R() * (wf.x1 - wf.x0);
        this.dust.emit({ x, y: wf.bottom + 0.1, z: wf.z + 0.3 + R() * 0.6, vx: (R() - 0.5) * 0.8, vy: 0.8 + R() * 1.2, vz: 0.4 + R() * 0.6, life: 0.9, size: 0.1, color: R() < 0.5 ? 0xe0f4f8 : 0xa8d0dc, alpha: 0.9, gravity: 2.2, fade: 0 });
      }
    }
    // 폐허의 차가운 룬 불티
    if (focus.x > 44) {
      for (let i = this.rate('rune', 4 * (1 - this.victory), dt); i > 0; i--) {
        const x = focus.x + (R() - 0.5) * 26;
        const z = focus.z + (R() - 0.5) * 14 - 2;
        const y = this.level.terrain.heightAt(x, z) + 0.1;
        this.glow.emit({ x, y, z, vx: 0, vy: 0.5 + R() * 0.4, vz: 0, life: 2.5, size: 0.08, color: 0x70c8ff, alpha: 0.8, fade: 1, wander: 0.4 });
      }
    }
    void time;
  }
}
