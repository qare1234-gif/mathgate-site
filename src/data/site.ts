// 사이트 전체에서 쓰는 기본 정보. 여기만 고치면 모든 페이지에 반영됩니다.
export const site = {
  name: '매쓰게이트 수학전문학원',
  shortName: '매쓰게이트',
  phone: '031-941-7877',
  registration: '파주교육지원청 등록 제1868호',
  address: '경기도 파주시 ○○로 ○○, ○층 (해오름마을)', // TODO: 정확한 주소
  hours: '평일 오후 2시 ~ 10시, 토요일 오후', // TODO: 실제 상담 가능 시간
  kakao: '', // TODO: 카카오톡 채널 주소 (예: https://pf.kakao.com/_xxxx)
  naverMap: '', // TODO: 네이버 지도 공유 링크
  blog: '', // TODO: 블로그가 있다면
  description: '파주 운정 해오름마을 초·중·고 수학전문학원. 소수정예 수준별 수업, 월 1회 정기평가와 학습 보고서로 실력을 확인합니다.',
};

// 상단 메뉴 구조. 메뉴를 추가/삭제하려면 여기만 고치세요.
export const nav = [
  {
    label: '학원 소개',
    items: [
      { label: '인사말 · 원장 약력', href: 'about' },
      { label: '교육 철학', href: 'about/philosophy' },
      { label: '오시는 길', href: 'about/location' },
    ],
  },
  {
    label: '수업 안내',
    items: [
      { label: '초등부', href: 'classes/elementary' },
      { label: '중등부', href: 'classes/middle' },
      { label: '고등부', href: 'classes/high' },
      { label: '수강료', href: 'classes/tuition' },
    ],
  },
  { label: '관리 시스템', href: 'system' },
  { label: '수강후기', href: 'reviews' },
];

// base 경로를 붙여 주는 도우미 (GitHub Pages 하위 주소 대응)
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path}`.replace(/\/+$/, '') || '/';
};
