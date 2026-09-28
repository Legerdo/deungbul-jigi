# 등불지기: 황혼의 계곡

Three.js + TypeScript로 만든 2.5D 픽셀 디오라마 액션 RPG입니다. 등불지기 **리안**이 노을골 마을을 떠나 물안개 숲을 지나고, 잊힌 신전의 **석상 수호자**를 쓰러뜨린 뒤 꺼진 큰 등불을 다시 밝힙니다.

[브라우저에서 바로 플레이](https://legerdo.github.io/deungbul-jigi/) · [GitHub 저장소](https://github.com/Legerdo/deungbul-jigi)

모든 그림(캐릭터 시트, 노멀 맵, 지형·벽·나무·FX 텍스처, 하늘)은 `src/art`의 코드가 불러올 때마다 똑같이 생성합니다. 저장소에 이미지·사운드 파일은 없고, 효과음과 환경음은 Web Audio로 합성합니다. 외부 에셋은 글꼴 [Galmuri](https://github.com/quiple/galmuri)(npm `galmuri`, SIL OFL 1.1) 하나뿐입니다.

## 실행

Node 22.18 이상이 필요합니다. 에셋 내보내기 스크립트가 Node 내장 TypeScript 타입 제거 기능을 쓰기 때문입니다. 개발과 측정은 Node 24.13에서 했습니다.

Windows에서는 프로젝트 폴더의 `run.bat`을 더블클릭하면 됩니다. 의존성이 없으면 설치한 뒤 브라우저에서 게임을 열며, 실행 중에는 터미널 창을 열어 두세요.

```powershell
npm ci
npm run dev        # 개발 서버 http://localhost:5173
npm run build      # 타입 검사(tsc --noEmit) + 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 확인 http://localhost:4173
```

## GitHub Pages 배포

공개 사이트는 `main` 브랜치의 `docs/` 폴더를 배포합니다. 게임 코드를 수정한 뒤 아래 명령으로 빌드 결과를 준비하고 푸시하면 Pages가 갱신됩니다. `docs/`는 생성 결과물이므로 직접 편집하지 마세요.

```powershell
npm run pages:stage
git add docs
git commit -m "Deploy GitHub Pages"
git push
```

`npm run pages:stage`는 타입 검사와 프로덕션 빌드를 실행한 다음 `dist/`를 `docs/`에 복사합니다.

## 조작

| 입력 | 동작 |
| --- | --- |
| WASD | 이동 |
| 마우스 | 조준 (공격·회피 방향) |
| 좌클릭 | 베기, 연타하면 3단 (세 번째가 강타) |
| Space | 구르기 회피 (무적 시간 있음) |
| E | 상호작용: 대화, 석등 밝히기, 큰 등불 |
| Enter · Space · 클릭 | 대화 넘기기, 인트로 건너뛰기, 쓰러진 뒤 다시 일어서기 |
| Esc | 일시정지 메뉴 (계속하기, 조작법, 소리, 화면 효과) |
| M | 음소거 켜기/끄기 |
| P | 후처리(블룸·틸트시프트·색보정) 켜기/끄기 |

소리는 브라우저 정책 때문에 첫 입력 뒤에 켜집니다.

## 진행

1. 마을에서 솔 할아버지와 이야기하면 동쪽 마을 문이 열립니다.
2. 물안개 숲에서 두 적을 상대합니다.
   - 이끼 멧돼지: 예고 뒤 돌진하고, 벽에 부딪히면 기절합니다.
   - 물안개 망령: 순간이동하고, 따라오는 물안개 탄을 쏩니다.
3. 강 건너 쉼터 석등과 폐허 입구 석등을 E로 밝히면 체크포인트가 됩니다. 체력이 모두 차고, 쓰러지면 마지막으로 밝힌 석등 앞에서 다시 일어섭니다.
4. 석상 수호자: 광장에 들어서면 룬 결계가 광장을 두르고, 깨어나는 연출 뒤 이름이 뜹니다. 내려찍기(원형 예고)와 휩쓸기 돌진(직선 예고)을 씁니다. 체력이 50% 이하가 되면 2페이즈로 바뀝니다. 룬탄 연사가 추가되고, 내려찍기에 퍼지는 충격파가 붙고, 회복 불씨 3개가 떨어집니다.
5. 수호자를 쓰러뜨린 뒤 신전의 큰 등불을 밝히면 엔딩과 결과 화면이 나옵니다.

## 에셋 재생성

게임은 실행할 때 에셋을 직접 만듭니다. 아래 명령은 같은 코드로 확인용 PNG를 `evidence/`에 내보냅니다.

```powershell
npm run sprites                               # 모든 시트 → evidence/sprites/*_sheet_1x.png, *_preview.png, *_normal_1x.png
node scripts/export-sprites.mjs hero          # 시트 하나만 (hero, sol, boar, wisp, guardian, canopy_maple, canopy_zelkova, canopy_pine)
node scripts/export-sprites.mjs --strips      # 애니메이션별 스트립 → evidence/sprites/strips/
node scripts/export-sprites.mjs --tex         # 지형·벽·하늘·FX 텍스처 → evidence/textures/ (2x2 반복, 확대)
```

- 시트 생성 코드
  - 캐릭터: `src/art/chars/*.ts`. 3D 리그를 픽셀 격자에 투영하고 톤 램프와 노멀을 함께 굽습니다.
  - 나무 수관: `src/art/tex/trees.ts`
  - 텍스처: `src/art/tex/*.ts`
  - 팔레트: `src/art/palette.ts`
- 월드 밀도는 `TPU = 16`(1유닛 = 16텍셀, `src/game/config.ts`)입니다. 스프라이트, 지형, 먼지 FX가 이 격자에 맞춰져 있습니다.

## 시드

난수는 모두 `src/art/rng.ts`에서 나옵니다. 난수열은 `Rng`(mulberry32), 격자 해시와 노이즈는 `hash2`, `valueNoise`, `voronoi`를 씁니다. `src/art`와 `src/world`는 `Math.random`을 쓰지 않으므로 에셋과 맵 배치는 매번 같습니다. 반면 전투 AI의 패턴 선택과 FX 흔들림은 `Math.random`이라 판마다 다릅니다.

| 대상 | 시드 | 위치 |
| --- | --- | --- |
| 지면: 풀 / 숲 바닥 / 흙 / 포장석 / 폐허 타일 / 자갈 / 낙엽 | 11 / 23 / 31 / 41 / 53 / 61 / 71 | `src/art/tex/ground.ts` 기본 인자 |
| 벽·재질: 절벽 / 돌담 / 폐허 벽 / 강둑 흙 / 회벽 / 판자 / 들보 / 기와 / 나무껍질 / 풀 가장자리 / 조각 돌 / 룬 돌 | 101 / 111 / 121 / 131 / 141 / 151 / 161 / 171 / 181 / 191 / 201 / 211 | `src/art/tex/walls.ts` 기본 인자 |
| 원경 산 / 구름 | 401 / 431 | `src/art/tex/sky.ts` |
| 침엽수 수관 (변형 v = 0..2) | `1000 + v*13 + 4` | `src/art/tex/trees.ts` |
| 단풍·느티 엽군 배치 / 단풍 엽군 색 | `900 + v*31 + 이름길이*7` / `4200 + v*17` | `src/art/tex/trees.ts` |
| FX 충격파 고리 / 먼지 | 9 / 77 | `src/art/tex/fx.ts` |
| 캐릭터 재질 얼룩·이끼 | 재질별 `speckle.seed`, `alt.seed` | `src/art/chars/*.ts` |
| 맵의 나무 | `P.tree(x, z, 종류, 크기, seed)`의 `seed % 3`이 수관 변형 | `src/world/level.ts` |

시드 하나를 바꾸면 그 에셋만 바뀝니다. 바꾼 뒤에는 `npm run sprites -- --tex`로 결과를 확인하세요.

## 자동 검증

```powershell
npm run build
npm run verify                                    # vite preview(4173)를 직접 띄워 전체 단계 실행
node scripts/verify.mjs --only=run|death|fps      # 한 단계만
node scripts/verify.mjs --url=http://localhost:5173/   # 이미 떠 있는 서버 사용
node scripts/verify.mjs --headed                  # 창을 띄워 보기
```

검증은 실제 Chrome(Playwright `channel: 'chrome'`, 1920x1080, DPR 1)에서 돌아가므로 Google Chrome이 설치되어 있어야 합니다. 세 단계로 나뉩니다.

- **완주** (`?debug&bot`): 자동 조종이 사람과 같은 조작 신호(이동·조준·클릭·Space·E)만 보내 타이틀부터 결과 화면까지 진행합니다. 순간이동과 무적은 쓰지 않습니다.
- **사망 → 재시작**: 새 게임에서 숲으로 옮기고 체력을 낮춘 뒤 저항하지 않고 쓰러집니다. Enter로 일어서면 마을 시작점에서 체력 10으로 시작해야 합니다. 이어서 쉼터 석등을 E로 밝히고 다시 쓰러지면 석등 앞 (29.6, 3.3)에서 일어서야 합니다. 이 단계는 대화를 건너뛰고 순간이동하므로, 스크린샷의 목표 문구는 첫 단계에 머뭅니다.
- **FPS**: 보스 광장으로 옮긴 뒤 자동 조종이 30초 동안 실제 보스전을 벌이는 사이 프레임 시간을 잽니다.

결과는 다음 위치에 저장됩니다.

- 보고서: `evidence/verify/report.json` (`--only`를 쓰면 `report_<단계>.json`)
- 스크린샷: `evidence/screens/`. 00 타이틀 ~ 12 결과, 13 사망, 14 재시작, 15 석등 앞 재시작
- 연속 프레임: `evidence/frames/`. 숲 전투와 보스전 각각 16프레임을 2프레임 간격으로 모은 한 장

### 최근 측정 (2026-09-29)

측정 환경은 Windows, Chrome 153.0.8010.54 헤드리스, `vite preview` 프로덕션 빌드, 1920x1080, DPR 1입니다. GPU는 ANGLE D3D11 경유 NVIDIA GeForce RTX 5080이며, 디버그 통계 표시를 켠 상태에서 쟀습니다.

| 항목 | 결과 |
| --- | --- |
| 완주 | 성공. 게임 내 109.6초, 사망 0, 처치 7, 보스 2페이즈 진입, 석등 2개와 큰 등불 점화 |
| 사망 → 재시작 | 성공. 시작점 (-38.5, 0.6), 석등을 밝힌 뒤에는 (29.6, 3.3)에서 체력 10 |
| 페이지 오류·콘솔 오류 | 0건 |
| 보스전 30초 | 3,646프레임, 평균 119.96 FPS (8.34 ms), p95 8.4 ms, p99 8.5 ms, 최대 14.6 ms |
| 화면 주사율(rAF 상한) | 120 Hz |
| CPU 작업 시간 (갱신 + 렌더 제출) | 평균 1.02 ms, p95 1.7 ms, 최대 10.9 ms |
| 렌더러 | 드로 콜 77, 삼각형 39,643 |

평균 FPS는 화면 주사율 120 Hz에 붙어 있습니다. 따라서 이 값은 vsync 상한일 뿐, 성능 여유를 보여 주지 않습니다. 여유는 CPU 작업 시간으로 따로 적었습니다. GPU 실행 시간은 재지 않았고, 다른 GPU나 고주사율 모니터에서의 수치도 확인하지 않았습니다.

## 디버그

- `?debug`: 오른쪽 위에 FPS, 드로 콜, 좌표를 표시하고 `window.__GAME__`을 노출합니다. 주요 항목은 `state`, `teleport(x, z)`, `setHp(n)`, `bot(on, passive)`, `skipTitle()`, `frameTimes()`, `workTimes()`, `captureFrames(...)`입니다.
- `?debug&bot`: 자동 조종으로 처음부터 끝까지 진행합니다.
- 개발용 스크린샷: `node scripts/shot.mjs "--q=?debug" --out=evidence/tmp/a.png --js="__GAME__.skipTitle(); __GAME__.teleport(2.5,-1.6)" --zoom=x,y,w,h,배율`
  - 개발 서버(5173)가 떠 있어야 합니다.
  - PowerShell에서는 `&`가 들어간 인자를 따옴표로 감싸세요.
  - `evidence/tmp/`는 git에서 제외됩니다.

## 구조

```
src/
  main.ts            진입점
  art/               절차적 에셋 생성 (리그, 시트, 텍스처, 팔레트, 난수)
  render/            스프라이트·지형·식생·FX·조명·후처리 셰이더
  world/             수제 맵(level.ts), 지형, 소품, 구역별 대기
  game/              게임 흐름(Game.ts), 플레이어, 적, 보스, 전투, 카메라, 자동 조종
  audio/sfx.ts       Web Audio 효과음·환경음 합성
  ui/                HUD·메뉴 (한국어, Galmuri)
scripts/             verify.mjs, export-sprites.mjs, shot.mjs, zoom.mjs, png.mjs
evidence/            검증 보고서, 스크린샷, 연속 프레임, 에셋 PNG
```
