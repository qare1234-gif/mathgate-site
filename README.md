# 매쓰게이트 웹사이트 (Astro + Tailwind)

## 1. 처음 한 번 준비
1. Node.js LTS 설치: https://nodejs.org
2. VS Code에서 이 폴더 열기 → 오른쪽 아래 "권장 확장 설치" 누르기 (Astro, Tailwind)
3. 터미널(Ctrl + `)에서:
   ```
   npm install
   npm run dev
   ```
4. 브라우저에서 터미널에 나온 주소(http://localhost:4321/mathgate) 열기

## 2. 내용 고치기
글은 거의 전부 `src/data/` 폴더에 있습니다. 화면에 **노란색**으로 보이는 곳이 아직 채워야 할 부분입니다.

| 파일 | 내용 |
|---|---|
| `site.ts` | 주소, 전화, 상담 시간, 카카오 채널, 메뉴 구조 |
| `classes.ts` | 초등/중등/고등 시간표·수업 방식, 수강료 |
| `director.ts` | 원장 인사말, 약력 |
| `philosophy.ts` | 교육 철학 5원칙, 칼럼 원문 |
| `reviews.ts` | 수강후기 (실제 동의받은 후기만) |

사진: `public/`에 `director.jpg`, `og.jpg`(카톡 공유 미리보기, 1200×630) 넣고, 페이지의 "원장 사진" 상자를 `<img>`로 교체.

## 3. GitHub Pages 배포
1. 저장소: `qare1234-gif/mathgate-site` (같은 계정의 `mathgate`는 별개 Next.js 프로젝트라 건드리지 않음)
2. `astro.config.mjs`: `SITE = 'https://qare1234-gif.github.io'`, `BASE = '/mathgate-site'` → 주소 https://qare1234-gif.github.io/mathgate-site/
3. 저장소 **Settings → Pages → Source: GitHub Actions** 선택
4. 이후 `main` 브랜치에 푸시할 때마다 자동 배포 (Actions 탭에서 진행 확인)

## 4. mathgate.co.kr 도메인 연결 (확인 끝난 뒤)
1. `astro.config.mjs`: `SITE = 'https://mathgate.co.kr'`, `BASE = '/'`
2. `public/CNAME` 파일 만들고 안에 `mathgate.co.kr` 한 줄
3. Settings → Pages → Custom domain에 입력, 도메인 업체 DNS에 GitHub 안내대로 레코드 추가
4. 기존 Creatorlink 연결은 새 사이트 확인 후 해제
