// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────
// 배포 주소 설정 (README의 "배포" 항목 참고)
//  1) GitHub Pages 기본 주소로 먼저 확인할 때:
//       SITE = 'https://<깃허브아이디>.github.io', BASE = '/<저장소이름>'
//  2) mathgate.co.kr 도메인을 연결한 뒤:
//       SITE = 'https://mathgate.co.kr', BASE = '/'
// ─────────────────────────────────────────────
const SITE = 'https://qare1234-gif.github.io';
const BASE = '/mathgate-site';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
