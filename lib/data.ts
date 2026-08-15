export type Notice = {
  category: string
  title: string
  date: string
  badge?: string
}

export const notices: Notice[] = [
  {
    category: "교무처",
    title: "2026학년도 신규 교원(교수진) 공개 초빙 공고",
    date: "2026.01.05",
    badge: "중요",
  },
  {
    category: "학사",
    title: "2026-1학기 보컬로이드학과 & 애니메이션대학 수강편람 공지",
    date: "2026.01.03",
    badge: "학사",
  },
  {
    category: "안내",
    title: "슈타인즈게이트학과 타임머신 제작 실습1 선이수 안내",
    date: "2025.12.28",
  },
  {
    category: "장학",
    title: "2026학년도 1학기 국가·교내 장학금 신청 안내",
    date: "2025.12.22",
  },
  {
    category: "입학",
    title: "2026학년도 수시모집 최초 합격자 발표 및 등록 안내",
    date: "2025.12.15",
  },
  {
    category: "국제",
    title: "글로벌 서브컬처 교환학생(니지산지 캠퍼스) 파견 모집",
    date: "2025.12.10",
  },
]

export const academicCalendar = [
  { date: "08.18 – 08.22", label: "2학기 수강편람 공개 및 수강신청 장바구니" },
  { date: "08.25 – 08.29", label: "2학기 정규 수강신청 기간" },
  { date: "09.01", label: "2026-2학기 개강 및 정규 강의 개시" },
  { date: "09.01 – 09.07", label: "수강신청 정정 및 취소 기간" },
  { date: "10.20 – 10.26", label: "2학기 중간 덕력 평가 (모의고사)" },
  { date: "12.15 – 12.21", label: "기말 학술제 및 동계 종강" },
]

export type College = {
  name: string
  tagline: string
  majors: string[]
  icon: "audio" | "film" | "gamepad" | "sparkles" | "book" | "layers" | "flower"
}

export const colleges: College[] = [
  {
    name: "음성합성엔진대학",
    tagline: "노래하는 목소리를 과학으로 설계하다",
    majors: [
      "보컬로이드학과",
      "UTAU학과",
      "신디사이저V학과",
      "보이스복스학과",
      "보이스로이드학과",
    ],
    icon: "audio",
  },
  {
    name: "애니메이션대학",
    tagline: "서사와 작화, 그리고 세계관의 탐구",
    majors: [
      "에반게리온학과",
      "슈타인즈게이트학과",
      "진격의거인학과",
      "마법소녀마도카마기카학과",
      "봇치더록학과",
      "장송의프리렌학과",
      "강철의연금술사학과",
      "귀멸의칼날학과",
      "주술회전학과",
      "최애의아이학과",
      "체인소맨학과",
      "스파이패밀리학과",
      "나의히어로아카데미아학과",
      "원피스학과",
      "나루토학과",
      "블리치학과",
      "드래곤볼학과",
      "헌터바이헌터학과",
      "죠죠의기묘한모험학과",
      "데스노트학과",
      "코드기어스학과",
      "스즈미야하루히학과",
      "소드아트온라인학과",
      "리제로학과",
      "코노스바학과",
      "케이온학과",
      "은혼학과",
      "사이버펑크엣지러너학과",
      "지브리학과",
    ],
    icon: "film",
  },
  {
    name: "게임대학",
    tagline: "인터랙티브 미디어와 가챠의 인문학",
    majors: [
      "호요버스학과",
      "블루아카이브학과",
      "우마무스메학과",
      "프로젝트세카이학과",
      "앙상블스타즈학과",
      "미연시학과",
      "동방프로젝트학과",
      "프롬소프트웨어학과",
      "포켓몬배틀학과",
    ],
    icon: "gamepad",
  },
  {
    name: "버추얼대학",
    tagline: "실시간 방송과 디지털 페르소나 연구",
    majors: [
      "홀로라이브학과",
      "스텔라이브학과",
      "이세계아이돌학과",
      "니지산지학과",
    ],
    icon: "sparkles",
  },
  {
    name: "서브컬처문학대학",
    tagline: "라이트노벨과 팬픽션의 서사 이론",
    majors: ["라이트노벨학과"],
    icon: "book",
  },
  {
    name: "TCG대학",
    tagline: "카드 게임의 확률·전략·메타 분석",
    majors: [
      "유희왕학과",
      "포켓몬카드게임학과",
      "매직더개더링학과",
      "디지털TCG학과",
      "카드보존감정학과",
    ],
    icon: "layers",
  },
  {
    name: "동방프로젝트대학",
    tagline: "탄막과 환상향의 음악·설정 아카이빙",
    majors: ["환상향민속학과", "탄막공학과", "동방편곡학과"],
    icon: "flower",
  },
]

export type Course = {
  title: string
  type: "전공필수" | "전공선택" | "전공심화" | "교양"
  credits: string
  note?: string
}

export const courses: Course[] = [
  { title: "보컬로이드역사학개론", type: "전공필수", credits: "3-3-0" },
  { title: "MMD 고고학", type: "전공선택", credits: "3-2-1" },
  {
    title: "인류보완계획의 이해 및 LCL 실습",
    type: "전공필수",
    credits: "3-2-2",
  },
  {
    title: "타임머신 제작 실습 1,2",
    type: "전공심화",
    credits: "3-2-2",
    note: "선이수: 리딩 슈타이너",
  },
  { title: "기초 에르디아어 / 거인학개론", type: "교양", credits: "3-3-0" },
  { title: "보컬로이드 노래의 이해", type: "전공선택", credits: "3-3-0" },
]
