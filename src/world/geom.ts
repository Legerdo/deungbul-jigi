// 월드 스케일 UV(1유닛 = 16텍셀)를 가진 기본 도형과 머티리얼별 병합 배치
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** 상자: 각 면의 UV가 월드 크기에 비례 (texUnits = 텍스처 한 장이 덮는 유닛 수) */
export function boxGeo(w: number, h: number, d: number, texUnits = 4): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const pos = g.getAttribute('position');
  const nrm = g.getAttribute('normal');
  const uv = g.getAttribute('uv');
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + w / 2;
    const y = pos.getY(i) + h / 2;
    const z = pos.getZ(i) + d / 2;
    const nx = nrm.getX(i);
    const ny = nrm.getY(i);
    let u: number;
    let v: number;
    if (Math.abs(nx) > 0.5) {
      u = nx > 0 ? d - z : z;
      v = y;
    } else if (Math.abs(ny) > 0.5) {
      u = x;
      v = ny > 0 ? d - z : z;
    } else {
      u = nrm.getZ(i) > 0 ? x : w - x;
      v = y;
    }
    uv.setXY(i, u / texUnits, v / texUnits);
  }
  return g;
}

/** 원기둥 (UV: 둘레 방향 u, 높이 v) */
export function cylGeo(rTop: number, rBot: number, h: number, seg = 8, texUnits = 4, open = false): THREE.BufferGeometry {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg, 1, open);
  const uv = g.getAttribute('uv');
  const circ = 2 * Math.PI * Math.max(rTop, rBot);
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * circ) / texUnits, (uv.getY(i) * h) / texUnits);
  return g;
}

/** 단순 평면 사각형 (세로), 가운데 기준, +z를 향함, UV 0..1 */
export function quadGeo(w: number, h: number): THREE.BufferGeometry {
  return new THREE.PlaneGeometry(w, h);
}

/**
 * 한옥풍 곡선 기와지붕: 용마루를 x축으로, 앞뒤 경사면. 처마 양 끝이 살짝 들린다.
 * 반환 geometry는 지붕 밑면 높이 0 기준.
 */
export function curvedRoofGeo(w: number, d: number, rise: number, overhang: number, texUnits = 4): THREE.BufferGeometry {
  const segX = 12;
  const segS = 4;
  const halfW = w / 2 + overhang;
  const halfD = d / 2 + overhang;
  const positions: number[] = [];
  const uvs: number[] = [];
  const idx: number[] = [];
  const slopeLen = Math.hypot(halfD, rise);
  for (const side of [1, -1]) {
    const base = positions.length / 3;
    for (let j = 0; j <= segS; j++) {
      const s = j / segS; // 0 = 처마, 1 = 용마루
      for (let i = 0; i <= segX; i++) {
        const u = i / segX;
        const x = -halfW + u * halfW * 2;
        const ex = Math.abs(x) / halfW;
        // 처마 곡선: 가운데가 약간 처지고 양 끝이 들림 + 경사면이 오목
        const lift = Math.pow(ex, 3) * 0.45 * (1 - s);
        const sag = Math.sin(s * Math.PI) * -0.12;
        const z = side * halfD * (1 - s);
        const y = rise * s + lift + sag - 0.05 * (1 - s);
        positions.push(x, y, z);
        uvs.push((x + halfW) / texUnits, (s * slopeLen) / texUnits);
      }
    }
    for (let j = 0; j < segS; j++) {
      for (let i = 0; i < segX; i++) {
        const a = base + j * (segX + 1) + i;
        const b = a + 1;
        const c = a + segX + 1;
        const e = c + 1;
        if (side > 0) idx.push(a, b, e, a, e, c);
        else idx.push(a, e, b, a, c, e);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g.toNonIndexed();
}

/** 박공(삼각형 벽) */
export function gableGeo(w: number, rise: number, texUnits = 4): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  const p = [-w / 2, 0, 0, w / 2, 0, 0, 0, rise, 0];
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, w / texUnits, 0, w / 2 / texUnits, rise / texUnits], 2));
  g.computeVertexNormals();
  return g;
}

export class Batch {
  private parts = new Map<THREE.Material, THREE.BufferGeometry[]>();
  private castMap = new Map<THREE.Material, boolean>();

  add(mat: THREE.Material, geo: THREE.BufferGeometry, m: THREE.Matrix4, cast = true): void {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    g.applyMatrix4(m);
    // 병합 호환을 위해 속성 통일
    for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
    if (!g.getAttribute('normal')) g.computeVertexNormals();
    if (!g.getAttribute('uv')) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.getAttribute('position').count * 2), 2));
    const list = this.parts.get(mat) ?? [];
    list.push(g);
    this.parts.set(mat, list);
    if (cast) this.castMap.set(mat, true);
    else if (!this.castMap.has(mat)) this.castMap.set(mat, false);
  }

  build(parent: THREE.Object3D): THREE.Mesh[] {
    const out: THREE.Mesh[] = [];
    for (const [mat, list] of this.parts) {
      const geo = mergeGeometries(list, false);
      if (!geo) continue;
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = this.castMap.get(mat) ?? true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      out.push(mesh);
    }
    this.parts.clear();
    return out;
  }
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
export function trs(x: number, y: number, z: number, ry = 0, rx = 0, rz = 0, sx = 1, sy = 1, sz = 1): THREE.Matrix4 {
  _e.set(rx, ry, rz, 'YXZ');
  _q.setFromEuler(_e);
  _p.set(x, y, z);
  _s.set(sx, sy, sz);
  return _m.clone().compose(_p, _q, _s);
}
