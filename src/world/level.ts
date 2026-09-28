// 수제 맵: 황혼의 계곡 마을 → 물안개 숲과 다리 → 폐허 신전.
// 동선: 마을 길(0) → 돌계단(0→1.5) → 대지 위 마을 문 → 내리막 숲길 → 강 위 다리 → 안개 공터 → 폐허 계단(0.5→2.5) → 수호자 광장 → 신전 계단(2.5→4) → 신전의 등불
import * as THREE from 'three';
import { FOLIAGE } from '../art/tex/foliage.ts';
import { valueNoise } from '../art/rng.ts';
import { cylGeo, boxGeo, trs } from './geom.ts';
import { PropBuilder, PropKit, type Emitter } from './props.ts';
import { F_BLOCK, SIDE, TOP, Terrain } from './terrain.ts';

export interface EnemySpawn {
  kind: 'boar' | 'wisp';
  x: number;
  z: number;
  group: number;
}

export interface Checkpoint {
  x: number;
  z: number;
  emitter: Emitter;
  lit: boolean;
  name: string;
  mat?: THREE.MeshLambertMaterial;
  /** 다시 일어설 자리 */
  respawn: THREE.Vector3;
}

export interface Level {
  terrain: Terrain;
  props: PropBuilder;
  spawn: THREE.Vector3;
  npc: THREE.Vector3;
  enemies: EnemySpawn[];
  checkpoints: Checkpoint[];
  arena: { x: number; z: number; r: number; gateX: number };
  boss: THREE.Vector3;
  greatLantern: { pos: THREE.Vector3; emitter: Emitter; flame: THREE.Vector3; mat?: THREE.MeshLambertMaterial };
  /** 솔과 이야기하기 전까지 마을 문을 막는 칸 */
  gateBlock: { x0: number; z0: number; x1: number; z1: number };
  river: { x0: number; x1: number; z0: number; z1: number; y: number };
  waterfall: { x0: number; x1: number; z: number; top: number; bottom: number };
  zoneTitles: Array<{ x: number; title: string; sub: string }>;
  arenaBraziers: Emitter[];
  gatePosts: THREE.Vector3[];
}

export const ZONE = { villageEnd: -3, forestEnd: 45 };

export function buildLevel(kit: PropKit): Level {
  const t = new Terrain(-64, -30, 176, 50);
  const P = new PropBuilder(kit, t);
  const nz = (x: number, z: number) => valueNoise(x, z, 777, 0, 0);

  // ── 바탕: 낮은 풀밭
  t.fill(-64, -30, 112, 20, 0, TOP.grass, SIDE.cliff);

  // ── 북쪽 뒷산 절벽 (전체 배경 벽)
  t.fill(-64, -30, 112, -14, 3.5, TOP.grass, SIDE.cliff);
  t.fill(-64, -30, -22, -15.5, 4.5, TOP.grass, SIDE.cliff);
  t.fill(8, -30, 44, -13, 4.5, TOP.forest, SIDE.cliff);
  t.fill(46, -30, 112, -18, 7, TOP.grass, SIDE.ruinwall);
  // 서쪽 계단식 언덕과 동쪽 끝 벽 (화면 가장자리가 비지 않도록)
  t.fill(-64, -30, -46, 20, 1.4, TOP.grass, SIDE.stonewall);
  t.fill(-64, -30, -51, 20, 3.2, TOP.grass, SIDE.cliff);
  t.fill(-64, -30, -57, 20, 5.5, TOP.grass, SIDE.cliff);
  t.fill(90, -30, 112, 20, 5.0, TOP.grass, SIDE.ruinwall);

  // ── 남쪽 경계: 낮은 들판으로 떨어지는 턱(걸어서 넘을 수 없음)
  t.fill(-46, 11, 90, 20, -1.6, TOP.grass, SIDE.cliff);

  // ═════════ 마을 (x -46 ~ -3) ═════════
  // 마을 길과 광장
  t.paintPath(
    [
      [-46, 0.5],
      [-36, 0.2],
      [-28, 0.8],
      [-20, 0.2],
      [-16, -1.8],
    ],
    3.2,
    TOP.dirt,
  );
  t.paintCircle(-31, 0, 4.2, TOP.paving);
  t.paintPath(
    [
      [-38, -2],
      [-36, -5.5],
    ],
    1.6,
    TOP.paving,
  );
  t.paintPath(
    [
      [-28, -2],
      [-27, -6],
    ],
    1.6,
    TOP.paving,
  );
  // 대지(윗마을) 1.5
  t.fill(-21, -15, -3, -4, 1.5, TOP.grass, SIDE.stonewall);
  // 대지로 오르는 돌계단 (북쪽으로 오름)
  t.stairs(-17, -8, -15, -4, 'z', 1.5, 0, SIDE.stonewall, TOP.paving);
  t.paintPath(
    [
      [-16, -8],
      [-12, -6.5],
      [-6, -6.2],
      [-3, -6],
    ],
    2.8,
    TOP.dirt,
  );
  t.paintTop(-17, -9, -15, -8, TOP.paving);
  // 남쪽 밭 (한 단 낮음)
  t.fill(-44, 6.5, -20, 11, -0.35, TOP.dirt, SIDE.soil);
  // 낙엽 깔린 가장자리
  t.paintPath(
    [
      [-22, 4],
      [-18, 3],
    ],
    2.4,
    TOP.litter,
  );

  // ═════════ 숲 (x -3 ~ 45) ═════════
  // 마을 문에서 강 쪽으로 내려가는 숲길
  t.fill(-3, -14, 20, 11, 0.5, TOP.forest, SIDE.cliff);
  t.ramp(-3, -14, 11, 11, 'x', 1.5, 0.5, TOP.forest, SIDE.cliff);
  t.undulate(-2, -13, 19, 10, 0.12, 0.35, nz);
  t.paintPath(
    [
      [-3, -6],
      [2, -5],
      [8, -3.5],
      [14, -1.6],
      [20, -1],
    ],
    2.6,
    TOP.dirt,
  );
  // 강 (북쪽 폭포에서 남쪽으로)
  const river = { x0: 20, x1: 26, z0: -14, z1: 20, y: -0.95 };
  t.water(river.x0, -13, river.x1, 20, -1.8);
  // 폭포 위쪽 절벽을 강 폭만큼 파낸 협곡
  t.fill(river.x0, -30, river.x1, -13, 4.5, TOP.forest, SIDE.cliff);
  // 동쪽 강둑과 안개 공터
  t.fill(26, -13, 46, 11, 0.5, TOP.forest, SIDE.cliff);
  t.undulate(27, -12, 42, 10, 0.1, 0.4, nz);
  t.paintPath(
    [
      [26, -1],
      [31, -0.5],
      [37, -1.2],
      [42, -1],
    ],
    2.6,
    TOP.dirt,
  );
  t.paintCircle(35, -1, 3.2, TOP.grass);
  t.paintTop(river.x0 - 1, -13, river.x0, 11, TOP.pebbles);
  t.paintTop(river.x1, -13, river.x1 + 1, 11, TOP.pebbles);

  // ═════════ 폐허 (x 44 ~ 92) ═════════
  t.fill(46, -18, 94, 11, 2.5, TOP.grass, SIDE.ruinwall);
  // 폐허로 오르는 돌계단 (동쪽으로 오름)
  t.stairs(42, -3, 46, 1, 'x', 0.5, 2.5, SIDE.ruinwall, TOP.ruin);
  t.paintPath(
    [
      [46, -1],
      [54, -1.2],
      [62, -2.5],
      [66, -3.5],
    ],
    3.4,
    TOP.ruin,
  );
  // 수호자 광장
  const arena = { x: 72, z: -4, r: 9, gateX: 62.5 };
  t.paintCircle(arena.x, arena.z, arena.r + 0.5, TOP.ruin);
  // 신전 대지 4.0 + 계단
  t.fill(64, -22, 81, -14, 4.0, TOP.ruin, SIDE.ruinwall);
  t.stairs(70, -17, 74, -14, 'z', 4.0, 2.5, SIDE.ruinwall, TOP.ruin);
  // 동쪽 끝 벽
  t.fill(88, -18, 112, 11, 4.5, TOP.grass, SIDE.ruinwall);
  t.paintTop(46, 5, 88, 11, TOP.forest);

  // 맵 가장자리 막기
  t.block(-64, -30, -46, 20);
  t.block(90, -30, 112, 20);

  // ─────────────────────────────── 소품 배치 ───────────────────────────────
  // 마을 집 (앞면이 +z, 화면 쪽)
  P.house(-37, -9.4, 5.2, 3.4, { chimney: true });
  P.house(-27.5, -9.6, 5.6, 3.6, { chimney: true });
  P.house(-11.5, -11.8, 4.8, 3.2, { chimney: true });
  P.house(-43.6, -10, 3.6, 3.2);
  // 서쪽 언덕 위 숲
  const westTrees: Array<[number, number, 'pine' | 'maple']> = [
    [-48.5, -4, 'maple'],
    [-48.8, 5.5, 'pine'],
    [-53.5, -8, 'pine'],
    [-54, 1, 'maple'],
    [-53.2, 8.5, 'pine'],
    [-59, -3, 'pine'],
    [-60, 6, 'pine'],
  ];
  westTrees.forEach(([x, z, k], i) => P.tree(x, z, k, 1, 60 + i));
  P.stoneLantern(-47.5, 0.8);
  // 석등
  P.stoneLantern(-39.5, -4.8);
  P.stoneLantern(-24.2, -5.0);
  P.stoneLantern(-18.2, -3.2);
  P.stoneLantern(-7.5, -4.7);
  // 느티나무와 단풍
  P.tree(-32.2, -6.8, 'zelkova', 1.1, 3);
  P.tree(-20.5, 3.6, 'maple', 1, 5);
  P.tree(-44.2, 3.4, 'maple', 0.9, 7);
  P.tree(-5.5, -12, 'maple', 1, 9);
  P.tree(-19, -12.5, 'maple', 0.9, 11);
  // 뒷산 위 나무들 (원경의 층)
  for (let i = 0; i < 9; i++) P.tree(-45 + i * 4.6, -18 - (i % 2) * 2.5, i % 3 === 0 ? 'maple' : 'pine', 1.05, 20 + i);
  P.well(-30.5, 2.2);
  P.jars(-41.1, -6.4, 5, 2);
  P.laundry(-24.8, -21.8, -6.4, 1.9);
  P.crate(-22.8, -7.4);
  P.crate(-22.1, -7.3, 0.55, 0.5);
  P.crate(-43.7, -6.3, 0.6, 0.3);
  // 남쪽 돌담 (전경 층)
  P.stoneWallSeg(-45, 5.6, -35.5, 5.6);
  P.stoneWallSeg(-32.5, 5.6, -22.5, 5.6);
  P.fence(-22, 6.4, -16, 6.4);
  P.fence(-46, 6.8, -46, 10.5);
  // 밭 작물
  for (let r = 0; r < 3; r++) for (let c = 0; c < 18; c++) P.bush(-42.5 + c * 1.2 + (r % 2) * 0.5, 7.4 + r * 1.2, (c + r) % 3 === 0 ? FOLIAGE.cropB : FOLIAGE.crop, 0.95);
  // 대지 위: 마을 문 (홍살문풍 두 기둥 + 가로대)
  const gateX = -3.8;
  const gy = t.groundAt(gateX, -6);
  const gatePosts = [new THREE.Vector3(gateX, gy, -8.4), new THREE.Vector3(gateX, gy, -3.9)];
  const gateMat = new THREE.MeshLambertMaterial({ color: 0x8a2a20 });
  for (const gp of gatePosts) {
    P.batch.add(gateMat, cylGeo(0.14, 0.17, 3.4, 8), trs(gp.x, gp.y + 1.7, gp.z));
    t.addCircle(gp.x, gp.z, 0.22);
  }
  // 문 북쪽은 마을 담장: 동쪽으로 나가는 길은 문 하나뿐
  P.stoneWallSeg(gateX, -14.7, gateX, -8.85);
  P.batch.add(gateMat, boxGeo(0.2, 0.2, 5.6), trs(gateX, gy + 3.1, -6.15));
  P.batch.add(gateMat, boxGeo(0.14, 0.14, 5.0), trs(gateX, gy + 2.6, -6.15));
  for (let i = 0; i < 9; i++) P.batch.add(gateMat, boxGeo(0.05, 0.5, 0.05, 1), trs(gateX, gy + 2.85, -8.1 + i * 0.49));
  // 풀과 꽃
  const grassSpots: Array<[number, number, number]> = [];
  for (let i = 0; i < 70; i++) {
    const x = -46 + ((i * 37.3) % 44);
    const z = -5 + ((i * 17.9) % 10.5);
    grassSpots.push([x, z, i]);
  }
  for (const [x, z, i] of grassSpots) {
    const c = t.index(x, z);
    if (c < 0 || t.top[c] !== TOP.grass) continue;
    P.grass(x, z, i % 5 === 0 ? FOLIAGE.flowersA : i % 3 === 0 ? FOLIAGE.flowersB : FOLIAGE.tuftA);
  }

  // ── 숲
  const forestTrees: Array<[number, number, number]> = [
    [1, -11, 1.1],
    [4.5, -9.5, 1.0],
    [9, -11.5, 1.15],
    [13, -9, 1.0],
    [16.5, -11, 1.1],
    // 길 남쪽(카메라 쪽) 나무는 남쪽 낭떠러지(z 11) 가장자리에 줄지어 심는다.
    // 침엽수 수관은 화면에서 땅 깊이 11유닛쯤을 덮으므로, 가까이 심으면 싸움터와 쉼터를 통째로 가린다
    [3.2, 10.2, 1.05],
    [11.2, 10.3, 1.0],
    [-1.5, 9.6, 1.1],
    [14.8, 9.7, 1.0],
    [7.2, 9.5, 1.15],
    [18.2, 10.2, 1.0],
    [29, -10.5, 1.1],
    [33, -8.2, 1.0],
    [38, -10.8, 1.15],
    [41.5, -7.5, 1.0],
    // 쉼터 석등(29.6, 1.9) 남쪽 x 29~34는 비워 둔다: 석등 앞에서 되살아날 때 수관이 화면 아래를 덮지 않게
    [26.9, 10.2, 1.1],
    [35.2, 9.6, 1.0],
    [38.6, 10.3, 1.05],
    [42, 9.7, 1.0],
    [44.8, 10.2, 0.9],
  ];
  forestTrees.forEach(([x, z, s], i) => P.tree(x, z, 'pine', s, 40 + i));
  for (let i = 0; i < 14; i++) P.tree(-1 + i * 3.4, -15.5 - (i % 3) * 1.4, 'pine', 1.1, 80 + i);
  P.rock(10.5, -5.8, 0.7, 0.4);
  P.rock(18.2, 2.8, 0.55, 1.2);
  P.rock(27.8, -4.2, 0.6, 0.2, true);
  P.rock(40.5, 2.2, 0.8, 0.9, true);
  for (let i = 0; i < 60; i++) {
    const x = -2 + ((i * 29.7) % 46);
    const z = -12 + ((i * 13.3) % 21);
    if (x > river.x0 - 1.2 && x < river.x1 + 1.2) continue;
    const c = t.index(x, z);
    if (c < 0 || t.top[c] === TOP.dirt) continue;
    const cell = i % 7 === 0 ? FOLIAGE.fern : i % 5 === 0 ? FOLIAGE.mushroom : i % 3 === 0 ? FOLIAGE.bushB : FOLIAGE.tuftB;
    if (cell === FOLIAGE.bushB) P.bush(x, z, cell, 0.85);
    else P.grass(x, z, cell, 0.9);
  }
  // 강가 갈대와 연잎
  for (let i = 0; i < 16; i++) {
    const side = i % 2 === 0 ? river.x0 - 0.5 : river.x1 + 0.5;
    const z = -11 + i * 1.3;
    if (Math.abs(z + 1) < 2) continue;
    P.grass(side, z, FOLIAGE.reeds, 0.95);
  }
  const lotusSpots: Array<[number, number]> = [
    [21.2, 4],
    [24.6, 6.5],
    [22.4, -6],
    [25, -8.5],
    [21, 9],
  ];
  for (const [x, z] of lotusSpots) P.upright.push({ x, y: river.y - 0.25, z, cell: FOLIAGE.lotus, size: 2, normal: [0, 1, 0.4], sway: 0.02 });
  // 다리
  P.bridge(19.4, 26.6, -1, 2.6, 0.62, 0.38, river.y);
  // 쉼터 석등 (체크포인트)
  const cp1 = P.stoneLantern(29.6, 1.9, { lit: false, tag: 'checkpoint' });

  // ── 폐허
  // 입구 문 기둥
  P.pillar(48.5, -4.4, 3.8, { r: 0.5, rune: true });
  P.pillar(48.5, 2.2, 3.1, { r: 0.5, broken: true });
  P.batch.add(kit.ruin, boxGeo(0.9, 0.5, 5.4), trs(48.4, 2.5 + 4.35, -1.5, 0, 0.0, 0.12));
  // 흩어진 돌
  P.fallenPillar(53, 4.2, 3.2, 0.3);
  P.fallenPillar(58.5, -8.5, 2.8, -0.5);
  P.block(51.5, -7.5, 1.2, 0.8, 1.0, 0.3);
  P.block(55.5, 6.5, 1.4, 0.6, 1.2, -0.2);
  P.block(60.2, 3.8, 0.9, 1.1, 0.9, 0.7);
  P.tree(52, -11.5, 'dead', 1.1, 3);
  P.tree(60.5, 7.8, 'dead', 1.0, 4);
  P.tree(84, 6, 'dead', 1.2, 5);
  P.tree(86.5, -9, 'pine', 1.15, 6);
  P.tree(57, -13.5, 'pine', 1.1, 7);
  const cp2 = P.stoneLantern(57.5, 2.8, { lit: false, tag: 'checkpoint', cold: true });
  // 광장 둘레 기둥 (일부 부러짐) + 차가운 화로
  const braziers: Emitter[] = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    const px = arena.x + Math.cos(a) * (arena.r + 1.2);
    const pz = arena.z + Math.sin(a) * (arena.r * 0.85 + 1.0);
    if (pz < -13) continue;
    const broken = i % 3 === 1;
    P.pillar(px, pz, broken ? 1.6 + (i % 2) * 0.8 : 3.4, { broken, rune: !broken });
    if (!broken) braziers.push(P.emitter(px, 2.5 + 4.4, pz + 0.4, 0x6ad8ff, 0, 7, 0.2, 'brazier', 0));
  }
  // 신전 정면: 기둥 줄 + 부서진 지붕
  for (let i = 0; i < 6; i++) {
    const px = 65.5 + i * 2.6;
    if (i === 2 || i === 3) continue;
    P.pillar(px, -14.8, i === 5 ? 2.2 : 4.4, { r: 0.46, broken: i === 5, rune: true });
  }
  P.batch.add(kit.ruin, boxGeo(9.5, 0.7, 2.4), trs(68.6, 4.0 + 5.2, -15.4, 0, 0, 0.04));
  P.batch.add(kit.roof, boxGeo(10.5, 0.3, 3.2), trs(68.4, 4.0 + 5.7, -15.6, 0, 0.08, 0.05));
  P.batch.add(kit.rune, boxGeo(15, 3.2, 0.6), trs(72, 4.0 + 1.6, -21.2));
  // 신전의 큰 등불 (꺼져 있음)
  const gl = P.stoneLantern(72, -18.2, { lit: false, scale: 1.8, tag: 'great', cold: true });
  // 광장 바닥 룬 원은 game/boss.ts의 RuneCircle(빛나는 셰이더 데칼)로 그린다

  // 폐허 풀
  for (let i = 0; i < 40; i++) {
    const x = 47 + ((i * 23.1) % 40);
    const z = -12 + ((i * 11.7) % 21);
    const c = t.index(x, z);
    if (c < 0 || t.top[c] === TOP.ruin) continue;
    P.grass(x, z, i % 4 === 0 ? FOLIAGE.fern : FOLIAGE.tuftB, 0.8);
  }

  // 가장자리 막기
  for (let c = 0; c < t.W * t.D; c++) {
    const i = c % t.W;
    const k = Math.floor(c / t.W);
    if (k === 0 || k === t.D - 1) t.flags[c] |= F_BLOCK;
    if (i === 0 || i === t.W - 1) t.flags[c] |= F_BLOCK;
  }

  const matOf = (e: Emitter) => P.lanternChambers.find((c) => c.emitter === e)?.mat;
  const checkpoints: Checkpoint[] = [
    { x: 29.6, z: 1.9, emitter: cp1, lit: false, name: '강가 쉼터', mat: matOf(cp1), respawn: new THREE.Vector3(29.6, 0, 3.3) },
    { x: 57.5, z: 2.8, emitter: cp2, lit: false, name: '폐허 입구', mat: matOf(cp2), respawn: new THREE.Vector3(57.5, 0, 4.2) },
  ];

  return {
    terrain: t,
    props: P,
    spawn: new THREE.Vector3(-38.5, 0, 0.6),
    npc: new THREE.Vector3(-35.6, 0, -5.2),
    enemies: [
      { kind: 'boar', x: 7, z: -3.2, group: 1 },
      { kind: 'boar', x: 12.5, z: -0.6, group: 1 },
      { kind: 'wisp', x: 34.5, z: -2.5, group: 2 },
      { kind: 'boar', x: 38.5, z: 0.8, group: 2 },
      { kind: 'wisp', x: 37.5, z: -5, group: 2 },
      { kind: 'wisp', x: 54, z: -3.5, group: 3 },
      { kind: 'boar', x: 56, z: 0.5, group: 3 },
    ],
    checkpoints,
    arena,
    boss: new THREE.Vector3(arena.x, 2.5, arena.z - 3.2),
    greatLantern: { pos: new THREE.Vector3(72, 4.0, -18.2), emitter: gl, flame: new THREE.Vector3(72, 4.0 + 2.9, -18.2), mat: matOf(gl) },
    gateBlock: { x0: gateX - 0.45, z0: -8.3, x1: gateX + 0.45, z1: -3.95 },
    river,
    waterfall: { x0: river.x0 + 0.5, x1: river.x1 - 0.5, z: -13.05, top: 4.5, bottom: river.y },
    zoneTitles: [
      { x: -40, title: '노을골 마을', sub: '황혼의 계곡' },
      { x: 2, title: '물안개 숲', sub: '안개에 잠긴 옛길' },
      { x: 47, title: '잊힌 신전 터', sub: '꺼진 등불의 폐허' },
    ],
    arenaBraziers: braziers,
    gatePosts,
  };
}
