// 고정 개수 점광원 풀: 매 프레임 초점(플레이어) 근처 발광체에 배정한다.
// 광원 수가 바뀌면 셰이더가 다시 컴파일되므로 개수는 고정하고 세기만 바꾼다.
import * as THREE from 'three';
import type { Emitter } from '../world/props.ts';

export class LightPool {
  readonly lights: THREE.PointLight[] = [];
  private readonly radius: number;
  /** 전체 창문 밝기 배율 (승리 연출 등) */
  windowScale = 1;
  lanternScale = 1;

  constructor(scene: THREE.Scene, count = 12, radius = 24) {
    this.radius = radius;
    for (let i = 0; i < count; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 6, 1.6);
      l.castShadow = false;
      scene.add(l);
      this.lights.push(l);
    }
  }

  update(emitters: Emitter[], dynamic: Emitter[], focus: THREE.Vector3, time: number): void {
    const cand: Array<{ e: Emitter; d: number }> = [];
    const R = this.radius;
    // 동적 광원(등불·투사체·보스 핵)은 가까운 순으로 최대 6개까지만 우선 배정 — 탄막이 마을 조명을 모두 빼앗지 않게
    const dyn: Array<{ e: Emitter; d: number }> = [];
    for (const e of dynamic) {
      if (e.on <= 0.001 || e.intensity <= 0) continue;
      const d = e.pos.distanceTo(focus);
      if (d > R) continue;
      dyn.push({ e, d });
    }
    dyn.sort((a, b) => a.d - b.d);
    for (let i = 0; i < Math.min(6, dyn.length); i++) cand.push({ e: dyn[i].e, d: -1 + dyn[i].d * 1e-3 });
    for (const e of emitters) {
      if (e.on <= 0.001 || e.intensity <= 0) continue;
      const d = e.pos.distanceTo(focus);
      if (d > R) continue;
      cand.push({ e, d });
    }
    cand.sort((a, b) => a.d - b.d);
    for (let i = 0; i < this.lights.length; i++) {
      const l = this.lights[i];
      const c = cand[i];
      if (!c) {
        // visible=false는 광원 개수를 바꿔 셰이더 재컴파일을 일으키므로 세기만 0으로
        l.intensity = 0;
        continue;
      }
      const e = c.e;
      l.position.copy(e.pos);
      l.color.copy(e.color);
      l.distance = e.distance;
      const fade = c.d < 0 ? 1 : 1 - THREE.MathUtils.smoothstep(c.d, R * 0.72, R);
      const ph = e.pos.x * 1.7 + e.pos.z * 0.9;
      const fl = 1 + (Math.sin(time * 7.3 + ph) * 0.5 + Math.sin(time * 13.1 + ph * 2.3) * 0.3 + Math.sin(time * 2.1 + ph) * 0.2) * e.flicker;
      let scaleK = 1;
      if (e.tag === 'window') scaleK = this.windowScale;
      else if (e.tag === 'lantern') scaleK = this.lanternScale;
      l.intensity = e.intensity * e.on * fade * fl * scaleK;
    }
  }
}
