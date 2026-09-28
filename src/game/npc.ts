// 안내 NPC '솔': 플레이어가 다가오면 그쪽을 보고, 대화 중에는 말하는 애니메이션. 지팡이 끝 청사초롱이 은은한 빛을 낸다.
import * as THREE from 'three';
import type { Dir } from '../art/sheet.ts';
import { SpriteActor, type SheetAsset } from '../render/sprites.ts';
import type { Emitter } from '../world/props.ts';
import type { Terrain } from '../world/terrain.ts';

export class Npc {
  readonly actor: SpriteActor;
  readonly pos = new THREE.Vector3();
  talking = false;
  readonly lantern: Emitter;
  private dir: Dir = 'down';
  private flip = false;

  constructor(asset: SheetAsset, p: THREE.Vector3, terrain: Terrain) {
    this.actor = new SpriteActor(asset, { shadowSize: [1.0, 0.5], emissive: 1.6, silhouette: false });
    this.pos.copy(p);
    this.pos.y = terrain.heightAt(p.x, p.z);
    this.actor.play('idle');
    this.lantern = { pos: new THREE.Vector3(), color: new THREE.Color(0xff8a5a), intensity: 1.6, distance: 4.2, flicker: 0.18, on: 1, target: 1, tag: 'npc' };
    terrain.addCircle(this.pos.x, this.pos.z, 0.45);
  }

  update(dt: number, player: THREE.Vector3): void {
    const dx = player.x - this.pos.x;
    const dz = player.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 4.5 || this.talking) {
      if (Math.abs(dx) > Math.abs(dz) + 0.3) {
        this.dir = 'side';
        this.flip = dx < 0;
      } else {
        this.dir = dz < 0 ? 'up' : 'down';
      }
    } else {
      this.dir = 'down';
    }
    this.actor.play(this.talking ? 'talk' : 'idle');
    this.actor.setDir(this.dir, this.flip);
    this.actor.update(dt * 1000);
    this.actor.root.position.copy(this.pos);
    // 초롱 위치(시트 기준 오른쪽 위)
    const side = this.dir === 'side' ? (this.flip ? 0.35 : -0.35) : this.dir === 'up' ? -0.7 : 0.7;
    this.lantern.pos.set(this.pos.x + side, this.pos.y + 1.85, this.pos.z + 0.25);
  }
}
