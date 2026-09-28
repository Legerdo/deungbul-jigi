// 카메라 리그: 완만한 원근(좁은 화각) + 고정 요(yaw) 추적, 절제된 흔들림, 컷신용 경로 보간.
import * as THREE from 'three';
import { CAMERA } from './config.ts';

export interface Shot {
  target: THREE.Vector3;
  pitch: number;
  distance: number;
  yaw: number;
  fov: number;
}

export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  readonly target = new THREE.Vector3();
  pitch = (CAMERA.pitchDeg * Math.PI) / 180;
  yaw = CAMERA.yaw;
  distance = CAMERA.distance;
  fov = CAMERA.fov;
  private shakeT = 0;
  private shakeAmp = 0;
  private shakeDir = new THREE.Vector2();
  private kick = new THREE.Vector3();
  /** 컷신 중이면 추적 대신 shot 사용 */
  shot: Shot | null = null;
  lookAhead = new THREE.Vector3();
  /** 맵 가장자리가 화면에 보이지 않도록 추적 목표를 제한 */
  bounds = { minX: -35.5, maxX: 84, minZ: -12, maxZ: 6 };

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(this.fov, aspect, 0.5, 2000);
  }

  follow(focus: THREE.Vector3, dt: number, aheadX = 0, aheadZ = 0): void {
    const k = 1 - Math.exp(-CAMERA.followLerp * dt);
    this.lookAhead.x += (aheadX - this.lookAhead.x) * (1 - Math.exp(-2.5 * dt));
    this.lookAhead.z += (aheadZ - this.lookAhead.z) * (1 - Math.exp(-2.5 * dt));
    const tx = THREE.MathUtils.clamp(focus.x + this.lookAhead.x, this.bounds.minX, this.bounds.maxX);
    const ty = focus.y + CAMERA.targetLift;
    const tz = THREE.MathUtils.clamp(focus.z + this.lookAhead.z, this.bounds.minZ, this.bounds.maxZ);
    this.target.x += (tx - this.target.x) * k;
    this.target.y += (ty - this.target.y) * (1 - Math.exp(-4 * dt));
    this.target.z += (tz - this.target.z) * k;
  }

  snap(focus: THREE.Vector3): void {
    this.target.set(
      THREE.MathUtils.clamp(focus.x, this.bounds.minX, this.bounds.maxX),
      focus.y + CAMERA.targetLift,
      THREE.MathUtils.clamp(focus.z, this.bounds.minZ, this.bounds.maxZ),
    );
    this.lookAhead.set(0, 0, 0);
  }

  /** 절제된 흔들림: 방향성 임펄스 + 짧은 감쇠 진동 */
  shake(amp: number, dirX = 0, dirY = 0, dur = 0.18): void {
    if (amp * 1.0 < this.shakeAmp * (this.shakeT / 0.2)) return;
    this.shakeAmp = amp;
    this.shakeT = dur;
    this.shakeDir.set(dirX, dirY);
    this.kick.set(dirX * amp * 0.6, -Math.abs(dirY) * amp * 0.3, 0);
  }

  update(dt: number, time: number): void {
    let tgt = this.target;
    let pitch = this.pitch;
    let dist = this.distance;
    let yaw = this.yaw;
    let fov = this.fov;
    if (this.shot) {
      tgt = this.shot.target;
      pitch = this.shot.pitch;
      dist = this.shot.distance;
      yaw = this.shot.yaw;
      fov = this.shot.fov;
    }
    if (Math.abs(this.camera.fov - fov) > 1e-3) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const off = new THREE.Vector3(Math.sin(yaw) * cp * dist, sp * dist, Math.cos(yaw) * cp * dist);
    this.camera.position.copy(tgt).add(off);
    this.camera.lookAt(tgt);
    if (this.shakeT > 0) {
      this.shakeT = Math.max(0, this.shakeT - dt);
      const k = this.shakeT > 0 ? this.shakeT / 0.2 : 0;
      const a = this.shakeAmp * k * k;
      const wob = Math.sin(time * 90) * a;
      const wob2 = Math.cos(time * 71) * a * 0.6;
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
      this.camera.position.addScaledVector(right, wob * (0.4 + Math.abs(this.shakeDir.x)) + this.kick.x * k);
      this.camera.position.addScaledVector(up, wob2 * (0.4 + Math.abs(this.shakeDir.y)) + this.kick.y * k);
    }
    this.camera.updateMatrixWorld();
  }

  /** 월드 좌표 → 화면 픽셀 */
  project(p: THREE.Vector3, w: number, h: number, out = new THREE.Vector2()): THREE.Vector2 {
    const v = p.clone().project(this.camera);
    out.set((v.x * 0.5 + 0.5) * w, (-v.y * 0.5 + 0.5) * h);
    return out;
  }

  /** 화면 픽셀 → 높이 y 평면 위 월드 좌표 */
  unproject(sx: number, sy: number, w: number, h: number, planeY: number): THREE.Vector3 | null {
    const ndc = new THREE.Vector3((sx / w) * 2 - 1, -(sy / h) * 2 + 1, 0.5);
    ndc.unproject(this.camera);
    const dir = ndc.sub(this.camera.position).normalize();
    if (Math.abs(dir.y) < 1e-5) return null;
    const t = (planeY - this.camera.position.y) / dir.y;
    if (t < 0) return null;
    return this.camera.position.clone().addScaledVector(dir, t);
  }
}
