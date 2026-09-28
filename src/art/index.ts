// 모든 스프라이트 시트/텍스처 생성 진입점 (게임 런타임과 Node 내보내기 스크립트가 공유)
import { buildBoarSheet } from './chars/boar.ts';
import { buildGuardianSheet } from './chars/guardian.ts';
import { buildHeroSheet } from './chars/hero.ts';
import { buildSolSheet } from './chars/sol.ts';
import { buildWispSheet } from './chars/wisp.ts';
import type { SheetData } from './sheet.ts';
import { buildFoliageAtlas } from './tex/foliage.ts';
import { texDust, texImpact, texOrb, texRing, texRuneBolt, texSlash } from './tex/fx.ts';
import { buildGroundLayers, GROUND_LAYERS } from './tex/ground.ts';
import { buildCanopySheet } from './tex/trees.ts';
import { texClouds, texMountains } from './tex/sky.ts';
import type { Tex } from './tex/tex.ts';
import {
  texBark,
  texBeam,
  texCarvedStone,
  texCliff,
  texDoor,
  texGrassLip,
  texPlanks,
  texPlaster,
  texRoof,
  texRuinWall,
  texRuneStone,
  texSoil,
  texStoneWall,
  texWindow,
} from './tex/walls.ts';

/** 캐릭터 시트 생성기 (이름 → 함수). 게임 런타임과 내보내기 스크립트가 같은 코드를 쓴다 */
export const CHARACTER_SHEETS: Record<string, () => SheetData> = {
  hero: buildHeroSheet,
  sol: buildSolSheet,
  boar: buildBoarSheet,
  wisp: buildWispSheet,
  guardian: buildGuardianSheet,
};

export function buildAllSheets(only?: string): SheetData[] {
  const out: SheetData[] = [];
  for (const [name, fn] of Object.entries(CHARACTER_SHEETS)) if (!only || only === name) out.push(fn());
  for (const k of ['maple', 'zelkova', 'pine'] as const) if (!only || only === `canopy_${k}`) out.push(buildCanopySheet(k));
  return out;
}

/** 확인·내보내기용 텍스처 목록 */
export function buildAllTextures(): Array<{ name: string; tex: Tex }> {
  const out: Array<{ name: string; tex: Tex }> = [];
  const ground = buildGroundLayers();
  GROUND_LAYERS.forEach((n, i) => out.push({ name: `ground_${n}`, tex: ground[i] }));
  out.push({ name: 'cliff', tex: texCliff() });
  out.push({ name: 'stonewall', tex: texStoneWall() });
  out.push({ name: 'ruinwall', tex: texRuinWall() });
  out.push({ name: 'soil', tex: texSoil() });
  out.push({ name: 'plaster', tex: texPlaster() });
  out.push({ name: 'planks', tex: texPlanks() });
  out.push({ name: 'beam', tex: texBeam() });
  out.push({ name: 'roof', tex: texRoof() });
  out.push({ name: 'bark', tex: texBark() });
  out.push({ name: 'window', tex: texWindow() });
  out.push({ name: 'door', tex: texDoor() });
  out.push({ name: 'grasslip', tex: texGrassLip() });
  out.push({ name: 'carved', tex: texCarvedStone() });
  out.push({ name: 'runestone', tex: texRuneStone().color });
  const fol = buildFoliageAtlas();
  out.push({ name: 'foliage', tex: fol.color });
  out.push({ name: 'mountains0', tex: texMountains(0) });
  out.push({ name: 'mountains1', tex: texMountains(1) });
  out.push({ name: 'mountains2', tex: texMountains(2) });
  out.push({ name: 'clouds', tex: texClouds() });
  out.push({ name: 'fx_slash', tex: texSlash() });
  out.push({ name: 'fx_ring', tex: texRing() });
  out.push({ name: 'fx_orb', tex: texOrb('cold') });
  out.push({ name: 'fx_impact', tex: texImpact() });
  out.push({ name: 'fx_rune', tex: texRuneBolt() });
  out.push({ name: 'fx_dust', tex: texDust() });
  return out;
}
