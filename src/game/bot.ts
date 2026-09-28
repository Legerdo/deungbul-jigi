// 자동 검증용 조종사(?debug 에서만). 사람과 똑같은 조작 신호(이동·조준·공격·구르기·상호작용)만 만들어
// 게임 규칙을 우회하지 않고 처음부터 끝까지 진행한다. 경로점을 따라가다 적을 만나면 싸우고, 예고 장판을 피한다.
import type { Enemy } from './enemies.ts';
import type { Guardian } from './boss.ts';
import type { Player } from './player.ts';
import type { Projectile } from './combat.ts';

export interface Control {
  move: [number, number];
  aim: [number, number] | null;
  attack: boolean;
  dodge: boolean;
  interact: boolean;
  confirm: boolean;
}

export interface BotView {
  player: Player;
  enemies: Enemy[];
  boss: Guardian;
  projectiles: Projectile[];
  mode: string;
  /** 지금 상호작용 가능한 대상 이름 */
  prompt: string | null;
  bossActive: boolean;
  bossDefeated: boolean;
  talked: boolean;
  checkpointsLit: boolean[];
}

type WP = { x: number; z: number; act?: 'talk' | 'cp0' | 'cp1' | 'lantern' | 'boss' };

const ROUTE: WP[] = [
  { x: -36.2, z: -3.7, act: 'talk' },
  { x: -30, z: -1.6 },
  { x: -21, z: -1.2 },
  { x: -16, z: -3.0 },
  { x: -16, z: -8.2 },
  { x: -10, z: -6.6 },
  { x: -3.8, z: -6.1 },
  { x: 2, z: -5 },
  { x: 8, z: -3.6 },
  { x: 14, z: -1.8 },
  { x: 19.2, z: -1 },
  { x: 26.8, z: -1 },
  { x: 29.6, z: 3.1, act: 'cp0' },
  { x: 37, z: -1.2 },
  { x: 42, z: -1 },
  { x: 47, z: -1 },
  { x: 54, z: -1.2 },
  { x: 57.5, z: 4.0, act: 'cp1' },
  { x: 62, z: -2.4 },
  { x: 66.5, z: -3.6, act: 'boss' },
  { x: 72, z: -11.8 },
  { x: 72, z: -16.6, act: 'lantern' },
];

export class Bot {
  enabled = false;
  private i = 0;
  private t = 0;
  private dodgeCd = 0;
  private strafe = 1;
  private strafeT = 0;
  private stuckT = 0;
  private lastX = 0;
  private lastZ = 0;
  private pressT = 0;
  /** 사망 검증용: 싸우지 않고 가만히 맞는다 */
  passive = false;
  log: string[] = [];

  reset(): void {
    this.i = 0;
  }

  /** 체크포인트로 되살아났을 때 경로를 그 자리부터 다시 잇는다 */
  resyncTo(x: number): void {
    let best = 0;
    for (let k = 0; k < ROUTE.length; k++) if (ROUTE[k].x <= x + 0.5) best = k;
    this.i = best;
  }

  control(v: BotView, dt: number): Control {
    this.t += dt;
    this.dodgeCd = Math.max(0, this.dodgeCd - dt);
    this.pressT = Math.max(0, this.pressT - dt);
    const c: Control = { move: [0, 0], aim: null, attack: false, dodge: false, interact: false, confirm: false };
    const p = v.player;
    // 화면 전환·대화: 확인/상호작용을 천천히 누른다
    if (v.mode === 'intro') return c;
    if (v.mode === 'title' || v.mode === 'dead' || v.mode === 'results') {
      if (this.pressT <= 0) {
        c.confirm = true;
        this.pressT = 0.5;
      }
      return c;
    }
    if (v.mode === 'dialog') {
      if (this.pressT <= 0) {
        c.interact = true;
        this.pressT = 0.35;
      }
      return c;
    }
    if (v.mode !== 'play' || !p.alive) return c;
    if (this.passive) return c;

    // ── 위협 회피 (예고 장판·돌진·투사체)
    const threat = this.threat(v);
    if (threat) {
      c.move = threat.move;
      if (threat.dodge && this.dodgeCd <= 0) {
        c.dodge = true;
        this.dodgeCd = 0.55;
      }
      if (threat.aim) c.aim = threat.aim;
      return c;
    }

    // ── 전투
    const foe = this.pickFoe(v);
    if (foe) {
      const dx = foe.pos.x - p.pos.x;
      const dz = foe.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz) || 1;
      c.aim = [dx / d, dz / d];
      const reach = foe.radius + (foe.kind === 'boss' ? 1.3 : 1.25);
      this.strafeT -= dt;
      if (this.strafeT <= 0) {
        this.strafeT = 1.2 + Math.random();
        this.strafe *= -1;
      }
      if (d > reach) {
        c.move = [dx / d, dz / d];
      } else if (d < reach * 0.55) {
        c.move = [-dx / d * 0.6, -dz / d * 0.6];
      }
      const bossBusy = foe.kind === 'boss' && !['recover', 'idle', 'walk', 'stagger'].includes(foe.state);
      if (d < reach + 0.25 && !bossBusy) c.attack = this.t % 0.16 < dt * 1.5;
      return c;
    }

    // ── 경로 따라가기
    const wp = ROUTE[Math.min(this.i, ROUTE.length - 1)];
    const dx = wp.x - p.pos.x;
    const dz = wp.z - p.pos.z;
    const d = Math.hypot(dx, dz);
    // 끼임 감지: 한동안 거의 못 움직이면 옆으로 비킨다
    if (Math.hypot(p.pos.x - this.lastX, p.pos.z - this.lastZ) < 0.02) this.stuckT += dt;
    else this.stuckT = 0;
    this.lastX = p.pos.x;
    this.lastZ = p.pos.z;
    if (d > 0.45) {
      let mx = dx / d;
      let mz = dz / d;
      if (this.stuckT > 0.6) {
        const s = Math.floor(this.t) % 2 === 0 ? 1 : -1;
        [mx, mz] = [mx * 0.3 - mz * s, mz * 0.3 + mx * s];
      }
      c.move = [mx, mz];
      return c;
    }
    // 도착: 할 일
    const done = () => {
      this.i++;
      this.log.push(`wp ${this.i}`);
    };
    switch (wp.act) {
      case 'talk':
        if (v.talked) done();
        else if (v.prompt && this.pressT <= 0) {
          c.interact = true;
          this.pressT = 0.5;
        }
        break;
      case 'cp0':
      case 'cp1': {
        const k = wp.act === 'cp0' ? 0 : 1;
        if (v.checkpointsLit[k]) done();
        else if (v.prompt && this.pressT <= 0) {
          c.interact = true;
          this.pressT = 0.5;
        }
        break;
      }
      case 'boss':
        if (v.bossDefeated) done();
        else if (!v.bossActive) c.move = [1, -0.1];
        break;
      case 'lantern':
        if (v.prompt && this.pressT <= 0) {
          c.interact = true;
          this.pressT = 0.6;
        }
        break;
      default:
        done();
    }
    return c;
  }

  private pickFoe(v: BotView): Enemy | null {
    const p = v.player;
    if (v.bossActive && v.boss.alive && v.boss.awake) return v.boss;
    let best: Enemy | null = null;
    let bd = 8.5;
    for (const e of v.enemies) {
      if (!e.alive || e.removed) continue;
      if (Math.abs(e.pos.y - p.pos.y) > 1.4) continue;
      const d = e.distTo(p.pos.x, p.pos.z);
      if (d < bd) {
        bd = d;
        best = e;
      }
    }
    return best;
  }

  private threat(v: BotView): { move: [number, number]; dodge: boolean; aim?: [number, number] } | null {
    const p = v.player;
    // 가까운 투사체: 베거나 피한다
    for (const pr of v.projectiles) {
      if (!pr.alive) continue;
      const dx = pr.pos.x - p.pos.x;
      const dz = pr.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      const closing = dx * pr.vel.x + dz * pr.vel.z < 0;
      if (d < 1.9 && closing) {
        const sp = Math.hypot(pr.vel.x, pr.vel.z) || 1;
        // 진행 방향에 수직으로 구른다
        const px = -pr.vel.z / sp;
        const pz = pr.vel.x / sp;
        const side = px * -dx + pz * -dz >= 0 ? 1 : -1;
        return { move: [px * side, pz * side], dodge: d < 1.3, aim: [dx / (d || 1), dz / (d || 1)] };
      }
    }
    // 멧돼지 돌진 선
    for (const e of v.enemies) {
      if (!e.alive || e.kind !== 'boar') continue;
      if (e.state !== 'windup' && e.state !== 'charge') continue;
      const fx = e.facing.x;
      const fz = e.facing.y;
      const rx = p.pos.x - e.pos.x;
      const rz = p.pos.z - e.pos.z;
      const along = rx * fx + rz * fz;
      const across = Math.abs(rx * -fz + rz * fx);
      if (along > -0.5 && along < 9.5 && across < 1.6) {
        const side = rx * -fz + rz * fx >= 0 ? 1 : -1;
        const late = e.state === 'charge' || e.stateT > 0.5;
        return { move: [-fz * side, fx * side], dodge: late && along < 5 };
      }
    }
    const b = v.boss;
    if (v.bossActive && b.alive) {
      const rx = p.pos.x - b.pos.x;
      const rz = p.pos.z - b.pos.z;
      const d = Math.hypot(rx, rz) || 1;
      // 확장 충격파: 고리가 닿기 직전에 구른다
      const sw = b.shockwave;
      if (sw) {
        const pd = Math.hypot(p.pos.x - sw.x, p.pos.z - sw.z);
        if (sw.r < pd && pd - sw.r < 1.1) return { move: [(p.pos.x - sw.x) / (pd || 1), (p.pos.z - sw.z) / (pd || 1)], dodge: true };
      }
      // 룬 폭풍: 거리를 두고 탄 사이로 구른다
      if (b.state === 'hop' || b.state === 'barrage') {
        if (d < 5.5) return { move: [rx / d, rz / d], dodge: false };
      }
      if (b.state === 'slamWind' || (b.state === 'slam' && b.stateT < 0.1)) {
        // 내려찍기 원 밖으로 (보스 쪽이 아니라 바깥으로)
        const away: [number, number] = [rx / d, rz / d];
        return { move: away, dodge: b.state === 'slamWind' && b.stateT > 0.42 && d < 5.2 };
      }
      if (b.state === 'sweepWind' || (b.state === 'sweep' && b.stateT < 0.45)) {
        const fx = rx / d;
        const fz = rz / d;
        const late = (b.state === 'sweepWind' && b.stateT > 0.4) || (b.state === 'sweep' && d < 5);
        return { move: [-fz * this.strafe, fx * this.strafe], dodge: late };
      }
    }
    return null;
  }
}
