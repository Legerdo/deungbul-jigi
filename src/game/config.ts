// 게임 전역 상수

/** 1 월드 유닛 = 16 텍셀. 스프라이트와 환경 텍스처가 같은 밀도를 쓴다 */
export const TPU = 16;

export const CAMERA = {
  fov: 30,
  pitchDeg: 34,
  distance: 23,
  yaw: 0,
  /** 캐릭터 머리 쪽을 보도록 목표점을 약간 올린다 */
  targetLift: 1.1,
  followLerp: 7,
};

/** 세로로 선 스프라이트가 카메라 기울기 때문에 납작해 보이지 않도록 높이를 늘리는 비율 */
export const SPRITE_STRETCH = 1 / Math.cos((CAMERA.pitchDeg * Math.PI) / 180);

export const PLAYER = {
  speed: 4.4,
  accel: 38,
  radius: 0.42,
  maxHp: 10,
  dodgeSpeed: 11.5,
  dodgeTime: 0.34,
  dodgeIFrameStart: 0.02,
  dodgeIFrameEnd: 0.3,
  dodgeCooldown: 0.12,
  hurtIFrames: 0.9,
  stepHeight: 0.42,
};

export const DEBUG = {
  /** URL에 ?debug 가 있으면 디버그 훅과 통계 표시 */
  enabled: typeof location !== 'undefined' && new URLSearchParams(location.search).has('debug'),
};
