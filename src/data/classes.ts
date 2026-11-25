// 학년별 수업 정보. [TODO]로 시작하는 문장은 아직 채워야 하는 부분이며 화면에 노란색으로 표시됩니다.
export type ClassInfo = {
  slug: string;
  title: string;
  lead: string;
  schedule: { group: string; time: string }[];
  weeklyHours: string;
  tracks: { name: string; body: string[] }[];
  steps?: string[];
  books?: string;
  notes: string[];
};

export const classes: ClassInfo[] = [
  {
    slug: 'elementary',
    title: '초등부',
    lead: '[TODO] 초등부 수업을 한두 문장으로 소개해 주세요. 예: 계산 습관과 문제를 끝까지 읽는 힘을 먼저 만듭니다.',
    schedule: [{ group: '[TODO] 초등 ○~○학년', time: '[TODO] 요일 · 시간' }],
    weeklyHours: '[TODO] 주 ○시간',
    tracks: [{ name: '[TODO] 과정 이름', body: ['[TODO] 수업 방식, 교재, 평가 방법을 적어 주세요.'] }],
    notes: ['학원 상황에 따라 시간표와 교재는 바뀔 수 있습니다.'],
  },
  {
    slug: 'middle',
    title: '중등부',
    lead: '[TODO] 중등부 수업을 한두 문장으로 소개해 주세요. 예: 학교별 내신 대비와 다음 학기 심화 연계를 함께 진행합니다.',
    schedule: [{ group: '[TODO] 중1~중3', time: '[TODO] 요일 · 시간' }],
    weeklyHours: '[TODO] 주 ○시간',
    tracks: [{ name: '[TODO] 과정 이름', body: ['[TODO] 내신 대비 기간 운영 방식, 대상 학교(다율중·산내중 등)를 적어 주세요.'] }],
    notes: ['학원 상황에 따라 시간표와 교재는 바뀔 수 있습니다.'],
  },
  {
    slug: 'high',
    title: '고등부',
    lead: '현행 진도를 단계적으로 쌓고, 매달 평가로 확인합니다. 다음 학기 과정은 단순 선행이 아닌 심화 연계 학습으로 진행합니다.',
    schedule: [
      { group: '고등 1·2·3학년', time: '월·수·금 또는 화·목·토 오후 7:30~10:00 (금요일 90분), 토 오후 1:00~2:30' },
      { group: '특목고', time: '토 오후 1:30~7:30' },
    ],
    weeklyHours: '주 7시간',
    steps: ['기본 연산', '개념 정리', '유형 학습', '모의고사'],
    tracks: [
      {
        name: '고등 1·2학년 (내신 + 모의고사)',
        body: [
          '주 3회 중 2회는 판서 강의로 현행 진도를 학습하고, 1회는 유형 분석과 평가 수업으로 진행합니다.',
          '매월 마지막 주에 정기 평가를 보고, 평가 결과와 학습 보고서를 매달 휴대폰으로 보내 드립니다.',
          '담당 선생님과 과정은 매년 1월에 바뀝니다.',
        ],
      },
      {
        name: '고등 3학년 · 특목고 1·2학년',
        body: [
          '주 2회 주말 수업이며, 진도와 수업 시간, 난이도는 학생마다 따로 정합니다.',
          '기본 개념이나 단순 진도가 아닌 고난도 문제를 체계적으로 다루는, 수능 고득점을 목표로 하는 수업입니다.',
        ],
      },
    ],
    books: '더개념 블랙라벨, EBS 수능특강, 고난도 올림포스, 메가스터디 등 시중 교재와 학원 자체 제작 교재',
    notes: ['상세 시간은 학원으로 문의해 주세요.', '학원 상황에 따라 시간표와 교재는 바뀔 수 있습니다.'],
  },
];

// 수강료 (교습비). 교육지원청에 신고된 금액·시간과 반드시 일치해야 합니다.
export const tuition = [
  { level: '초등부', fee: '240,000원 / 270,000원', detail: '[TODO] 과정별 구분과 월 교습시간' },
  { level: '중등부', fee: '320,000원', detail: '[TODO] 월 교습시간' },
  { level: '고등부', fee: '370,000원 / 395,000원', detail: '[TODO] 과정별 구분과 월 교습시간' },
];
