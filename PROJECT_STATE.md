# PROJECT_STATE — 매쓰게이트 사이트 디자인 규칙

기준 문서: `files (1)/DESIGN_BRIEF.md` (2026-11-04 개정판) (원본 자료 `logo/`, `photos/`, `reference/`).
스택: Astro 5 + Tailwind 4. Tailwind 4라 `tailwind.config` 대신 `src/styles/global.css`의 `@theme`에 토큰이 있다.

## 1. 컬러 토큰 (`src/styles/global.css`)

| 토큰 | 값 | 쓰임 |
|---|---|---|
| `brand-950` | `#100C3D` | 히어로·푸터·어두운 섹션 배경 |
| `brand-900` | `#1B1464` | 로고 워드마크 원색. 밝은 배경 위 제목, 주 버튼 |
| `brand-700` | `#35307E` | 어두운 면 위 보조 면 (드롭다운 호버 등) |
| `brand-500` | `#5E5A99` | 밝은 배경 위 보조 텍스트 |
| `lilac-300` | `#BC9CD5` | 어두운 배경 위 1px 라인·육각 모티프·작은 라벨 |
| `lilac-600` | `#6B4BA8` | 밝은 배경 위 포인트 (번호·라벨·밑줄) |
| `paper` | `#F5F4F0` | 밝은 배경 (순백 대신) |
| `line` | `#E3E1EA` | 밝은 면 구분선 |
| `ink` | `#17162B` | 본문 텍스트 (보조 본문은 `text-ink/75`) |
| `panel-lilac` | `#EEEBF4` | `photos/system/` 이미지를 올리는 면 (대부분의 자료 이미지 배경) |
| `panel-slate` | `#DEE3EE` | `system/school-exam-materials.png`를 올리는 면 |
| `panel-flow` | `#F0EEFC` | `system/full-learning-flow.jpg`를 올리는 면 |
| `white` | `#FFFFFF` | `ai-diagnosis-data`, `teacher-realtime-ui`, `data-visualization-cards`를 올리는 면 (이미지 배경이 흰색) |

- 자료 이미지 면은 이미지 배경과 같은 색이라 경계가 안 보인다. 브리프는 `#F0EDFD`로 적었지만 실제 픽셀 값에 맞췄다. 이미지 위 그림자·둥근 모서리 금지.

- lilac은 면을 칠하지 않는다. 라인·숫자·작은 라벨에만, 화면 면적 3% 이하.
- 로고 안의 연두(#A6D827)·주황·빨강(#EC1E24)은 로고 안에만 있다. UI 색으로 쓰지 않는다.
- 섹션 배경은 `brand-950` ↔ `paper` 교차. 어두운 면의 구분선은 `lilac-300/25~40`.

## 2. 폰트

- 영문·숫자 디스플레이: **Oswald 500** (`@fontsource/oswald`). `font-display` 또는 `.display-label`(대문자 + `tracking 0.08em`)
  - 섹션 번호 `01 — ABOUT`(`Kicker.astro`), 단계 번호, 전화번호. **정답률 수치(65/80/85/95%)는 쓰지 않는다** (개정 브리프)
- 한글 제목: Pretendard 600~700, 자간 `-0.02em`. **800·900 금지** (`font-extrabold`, `font-black` 쓰지 않음). 히어로 제목 데스크톱 `text-5xl`
- 본문: Pretendard 400, 행간 1.75 (`body`)

## 3. 로고 (`public/images/mathgate/logo/`)

- 헤더: `mathgate-logo-notag.svg`(paper 배경, 남색 워드마크), 높이 데스크톱 40px(`lg:h-10`) / 모바일 28px(`h-7`)
- 어두운 배경 위: `mathgate-logo-reverse-notag.svg`
- 푸터: `mathgate-logo-reverse.svg` ("수학의 시작" 태그라인 포함)
- 파비콘: `mathgate-symbol.svg` (`Base.astro`에서 연결. `public/favicon.svg`는 이전 파일이라 쓰지 않음)
- 다시 그리거나 폰트로 재현하지 않는다.

## 4. 육각 모티프 규칙

로고의 육각형(꼭짓점이 위)과 120° 사선이 **유일한** 장식 언어다. 모두 평면 1px 라인, 발광·네온 없음.

| 용도 | 구현 |
|---|---|
| 사진 한 모서리 사선 컷 (60°) | `.hex-cut`(큰 사진), `.hex-cut-sm`(작은 사진). 오른쪽 아래 모서리 |
| 섹션 구분선 끝 작은 육각형 1개 | `Rule.astro` (`dark` 속성으로 어두운 면용) |
| 어두운 섹션 한구석 큰 육각 외곽선 1개 | `Hex.astro` + `text-lilac-300 opacity-15`, 섹션당 최대 1개 |
| 타임라인 마디 | `Hex.astro` 작은 크기, 배경색으로 채워 선 위에 올림 |
| 히어로 기하 구성 | `HeroGeometry.astro`: 큰 육각형 + 작은 육각형 + 겹치는 삼각형 2개 + 60° 사선, lilac-300 1px, 선마다 opacity 20~40%. 모바일은 제목 뒤 배경으로 opacity 50% |

## 5. 레이아웃 · 모션

- 콘텐츠 최대 폭 `max-w-[1200px]`. 사진은 원본 가로 1440px이라 풀블리드 금지.
- 비대칭 2단(`5fr_7fr`, `4fr_8fr` 등) 에디토리얼, 넓은 여백, 1px 구분선 목록. 카드 나열 대신 선으로 나눈다.
- 버튼은 각진 모서리(`rounded` 없음).
- 헤더: paper 배경 + 하단 1px line, 메뉴 brand-900, "상담 신청"은 brand-900 배경 + paper 텍스트. 스크롤 시에도 동일(sticky).
- 모바일: 2단 → 1단, 타임라인은 세로.
- 모션: 첫 화면 `.rise`, 스크롤 진입 `data-reveal`(opacity + 8px, 0.6s). 호버는 색 전환·밑줄만.
  `prefers-reduced-motion`이면 모두 끔. JS가 꺼져 있으면 숨기지 않는다(`html.js`일 때만 적용).

## 6. 금지 요소 ("AI 티")

- 모눈종이 배경, 손글씨 폰트 메모, 형광펜·붓터치 밑줄 (이전 디자인의 `graph-paper`, `margin-note`, `pen-stroke`, `redpen`은 모두 삭제됨)
- 그라디언트, glassmorphism, 큰 그림자, `rounded-xl` 이상의 둥근 모서리
- 발광·네온·패럴랙스·카운트업 애니메이션
- 이모지·아이콘 남발, "작은 라벨 + 큰 제목 + 카드 3개" 구조의 반복
- 일러스트·AI 생성 이미지·스톡 사진. 이미지는 `public/images/mathgate/photos/`의 실제 사진만, 컬러 필터 없이
- 브리프·학원 자료에 없는 수치·실적·후기를 지어내는 것

## 7. 페이지 구성 (현재)

- 메인: 헤더(paper) → 히어로(950, 기하 도형) → 01 다섯 가지 원칙(paper) → 로비·강의실 사진 2장(paper) → 02 단계별 학습·학년별 과정(950) → 내신·수능 대비(paper) → 03 관리 시스템(`SystemStory.astro`, 950 도입부터 paper/950 교차 8구간) → 04 수강후기(950) → 상담 안내(paper) → 푸터(950)
- 하위 페이지: 상단은 `PageHead.astro`(950), 본문은 paper, 하단 `CallBand.astro`
- 관리 시스템 페이지: `PageHead`(도입 문장) → `SystemStory intro={false}` → 한 달 주기(950) → 상담 안내
- `SystemStory.astro` 구간: 도입 / 전체 학습 플로우(라이트박스, 모바일 가로 스크롤) / AI 진단("38억 건" Oswald 강조, 원장님 요청·업체 허락 완료) / 왜 틀렸는지 / 선생님 실시간 / 데이터 시각화 / 24시간 커뮤니케이션(이미지 3장과 짝) / 실제 보고서 사진

## 8. `[원장님 확인 필요]` 목록

화면에 노란 표시(`.todo`)로 보이는 항목과, 표시는 없지만 확인이 필요한 항목.

**브리프 리디자인에서 생긴 것**
- [ ] 수강후기: 학부모·학생 동의를 받은 실제 후기 (메인 04, `src/data/reviews.ts`)
- [ ] `daily-check-phone.png`: 원본 위·오른쪽이 흰색, 왼쪽·아래가 연보라라 어떤 면 위에서도 흰 사각형이 보임. 배경을 한 색으로 다시 잘라 받으면 깔끔해짐
- [ ] AI 진단 설명(교재채점 데이터 등 3항목의 부제, "매쓰홀릭 문항 / 개념 DB 연동")과 학습 플로우 설명 둘째 문장은 이미지 속 문구를 옮긴 것. 표현 확인
- [ ] 원장 정식 프로필 사진 (`about` 페이지. `director-temp.jpg`는 임시라 쓰지 않음)
- [ ] 메인 02 단계별 학습 6단계 설명: `reference/04` 자료를 짧게 다듬은 문장. 표현 확인
- [ ] 관리 시스템 "한 달 주기"의 "주 3회 중 2회 판서 강의"는 고등부 기준 문구. 초·중등에도 맞는지 확인
- [ ] KMA 공지 배너(`kma-2026-banner.jpg`): 시험일 2026-06-20이 지나 넣지 않음. 다음 회차 배너가 있으면 작은 공지 띠로 추가

**기존 사이트에 남아 있던 것 (`src/data`)**
- [ ] 초등부·중등부 소개 문장, 시간표, 주당 시간, 과정 설명 (`classes.ts`)
- [ ] 수강료 표의 과정별 구분·월 교습시간, 교재비 기준 (`classes.ts`, `tuition.astro`)
- [ ] 정확한 주소, 상담 가능 시간, 카카오톡 채널, 네이버 지도 링크 (`site.ts`)
- [ ] 오시는 길: 주차·대중교통 안내, 네이버 지도 iframe (`about/location.astro`)
- [ ] 관리 시스템: 출결 알림·숙제 관리·보강 정책 등 추가할 관리 항목 (`system.astro` 주석)

**배포 전**
- [x] GitHub Pages 배포: `qare1234-gif/mathgate-site` → https://qare1234-gif.github.io/mathgate-site/ (main에 push하면 자동 재배포)
- [x] `public/og.jpg` 공유 미리보기 이미지 (1200×630, 남색 배경 + 로고 + 대표 문구)
