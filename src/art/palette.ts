// 게임 전체가 공유하는 제한 팔레트.
// 각 램프는 어두운 색 → 밝은 색 순서이며, 그림자 쪽은 보라/남색으로, 밝은 쪽은 노랑으로 색상을 비튼다.
// 스프라이트·환경 텍스처·UI가 모두 이 램프만 사용해 하나의 화면으로 묶이도록 한다.

export type RGBA = [number, number, number, number];

export interface Ramp {
  name: string;
  colors: RGBA[];
  /** 실루엣 외곽선 색(선택적 외곽선: 램프마다 다른 어두운 색) */
  outline: RGBA;
}

export function hex(h: string, a = 255): RGBA {
  const s = h.replace('#', '');
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16), a];
}

function ramp(name: string, outline: string, colors: string[]): Ramp {
  return { name, outline: hex(outline), colors: colors.map((c) => hex(c)) };
}

export const INK = hex('#120d1a');

export const P = {
  ink: ramp('ink', '#0a0710', ['#120d1a', '#1d1628', '#2b2238']),
  dusk: ramp('dusk', '#15101f', ['#2c2440', '#463a5e', '#6b5a82', '#9a86a8', '#c9b8c8']),
  stone: ramp('stone', '#15121d', ['#262233', '#3b3649', '#565166', '#787486', '#9f9ba7', '#c9c4c4']),
  stoneWarm: ramp('stoneWarm', '#1a1414', ['#2e2626', '#4a3f3c', '#6a5d56', '#8e8074', '#b3a594', '#d8cbb4']),
  moss: ramp('moss', '#0f1a12', ['#1b2a1f', '#2a4430', '#3e6240', '#5d8448', '#8aa856', '#b8c86a']),
  grass: ramp('grass', '#101c14', ['#1c2e24', '#2c4a30', '#406838', '#5a8840', '#7ea84c', '#a8c860']),
  leafWarm: ramp('leafWarm', '#200c10', ['#3a1818', '#6a2420', '#9c3a24', '#cc5c2c', '#e8883c', '#f8b858']),
  /** 단풍 아래쪽의 짙은 진홍 잎 (그림자는 자주, 밝은 쪽은 주황으로 비튼다) */
  leafRed: ramp('leafRed', '#1e0810', ['#2e0e18', '#521626', '#86202c', '#b23630', '#d85a3a', '#f08c4c']),
  pine: ramp('pine', '#081214', ['#0f1f22', '#173236', '#22484a', '#316460', '#4a8478', '#6ea890']),
  wood: ramp('wood', '#120a08', ['#1e120e', '#34201a', '#523226', '#744a32', '#986a46', '#bc9060']),
  woodDark: ramp('woodDark', '#0c0708', ['#170e0e', '#261716', '#3a2420', '#523428', '#6c4834']),
  plaster: ramp('plaster', '#241c22', ['#3a3238', '#6a5e62', '#9a8e8a', '#c4b8ae', '#e6dccc', '#f6efe2']),
  roof: ramp('roof', '#0a0b12', ['#14161f', '#1f2330', '#2e3446', '#444d62', '#62708a', '#8a98ae']),
  earth: ramp('earth', '#150d0a', ['#231812', '#3c281c', '#5a3e2a', '#7c5a3c', '#a07c54', '#c4a070']),
  sand: ramp('sand', '#2a2018', ['#4a3e34', '#7a6a58', '#a8967c', '#d0c0a0', '#ece0c4']),
  water: ramp('water', '#060e18', ['#0c1a2a', '#12304a', '#1c4a6a', '#2c6a8a', '#4a90a8', '#8cc4d0', '#d8f0f0']),
  teal: ramp('teal', '#08171a', ['#0f2327', '#173a3e', '#22595a', '#327b74', '#4f9e8c', '#82c4a8']),
  amber: ramp('amber', '#260e0a', ['#3d1a12', '#7a2e1b', '#b8512a', '#e0833a', '#f7b85a', '#ffe29a']),
  linen: ramp('linen', '#1e1820', ['#2e2830', '#5e5458', '#8e8288', '#bcb0a8', '#e2d8c8', '#f8f0e4']),
  skin: ramp('skin', '#2a1414', ['#3a1f1c', '#6e3c30', '#a8664e', '#d8966e', '#f4c49c']),
  hair: ramp('hair', '#08050a', ['#120c10', '#261818', '#3e2826', '#5a3c34']),
  steel: ramp('steel', '#0c0f16', ['#161a24', '#343c4e', '#5e6a80', '#95a3b8', '#d0dcea', '#ffffff']),
  brass: ramp('brass', '#1a0f06', ['#2a1a0c', '#5e3e16', '#946426', '#c8903a', '#ecc060', '#fff0a8']),
  indigo: ramp('indigo', '#08080f', ['#10101c', '#1e2036', '#2e3252', '#444a70', '#5e6690']),
  plum: ramp('plum', '#120812', ['#1e1020', '#3a1e38', '#5a2e52', '#7e4470', '#a8628e']),
  mustard: ramp('mustard', '#1e1408', ['#3a2a10', '#6e5018', '#a07a24', '#cca63a', '#eed070']),
  whiteHair: ramp('whiteHair', '#1e1a24', ['#4a4450', '#8a8290', '#bab2bc', '#e4dee6', '#fbf8fb']),
  hide: ramp('hide', '#100806', ['#1e1210', '#3a221a', '#5a3624', '#7e4e30', '#a26c44']),
  bone: ramp('bone', '#1c1812', ['#3a3228', '#7a6c58', '#b8a88a', '#e6dcc0', '#fffaf0']),
  ember: ramp('ember', '#2a0a04', ['#5a1a08', '#c04a10', '#ff8a2a', '#ffc060', '#fff0c8']),
  cold: ramp('cold', '#04121e', ['#0a2a40', '#1a5a80', '#3aa0c8', '#7ae0f0', '#d8ffff']),
  mist: ramp('mist', '#0c1520', ['#1c2a3a', '#2e4658', '#4a6a80', '#7a9aac', '#b0ccd8', '#e0f0f4']),
  rune: ramp('rune', '#050a18', ['#102040', '#2050a0', '#40a0ff', '#a0e0ff', '#e8f8ff']),
  danger: ramp('danger', '#1c0406', ['#3a0c10', '#8a1a1a', '#d83a2a', '#ff7a4a', '#ffc090']),
  rose: ramp('rose', '#1e0a10', ['#3a1422', '#6a2438', '#a8445a', '#d8707a', '#f4a8a8']),
} as const;

export type RampName = keyof typeof P;

/** 램프 색 인덱스 클램프 조회 */
export function rc(r: Ramp, i: number): RGBA {
  const n = r.colors.length;
  return r.colors[Math.max(0, Math.min(n - 1, Math.round(i)))];
}

export function mix(a: RGBA, b: RGBA, t: number): RGBA {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
    Math.round(a[3] + (b[3] - a[3]) * t),
  ];
}

export function toCss(c: RGBA): string {
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}
