import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

interface SiteLink {
  name: string;
  nameEn: string;
  url: string;
  desc: string;
  tag: string;
}

/* 01 — 공공·실무 데이터 출처 (실습용 데이터셋) */
const DATA_SOURCES: SiteLink[] = [
  {
    name: '공공데이터포털',
    nameEn: 'data.go.kr',
    url: 'https://www.data.go.kr',
    desc: '정부·공공기관이 개방한 데이터를 한곳에서. CSV·엑셀로 내려받아 EDA·시각화 실습에 바로 활용할 수 있습니다.',
    tag: '필수',
  },
  {
    name: '국가통계포털 KOSIS',
    nameEn: 'KOSIS',
    url: 'https://kosis.kr',
    desc: '인구·경제·사회 등 국가 통계를 시계열로 제공. 트렌드 분석과 집단별 비교 실습에 적합합니다.',
    tag: '통계',
  },
  {
    name: '서울 열린데이터광장',
    nameEn: 'Seoul Open Data',
    url: 'https://data.seoul.go.kr',
    desc: '교통·생활·환경 등 서울시 실무 데이터. 요일별·지역별 특성 분석 실습에 유용합니다.',
    tag: '실무 데이터',
  },
  {
    name: 'Kaggle Datasets',
    nameEn: 'Kaggle',
    url: 'https://www.kaggle.com/datasets',
    desc: '전 세계 분석가가 공유하는 데이터셋과 분석 노트북. 다양한 도메인의 가상 실무 데이터를 찾을 수 있습니다.',
    tag: '데이터셋',
  },
  {
    name: 'Our World in Data',
    nameEn: 'OWID',
    url: 'https://ourworldindata.org',
    desc: '검증된 출처 기반의 글로벌 지표와 모범적인 시각화 사례. 좋은 차트를 배우기에 좋은 참고처입니다.',
    tag: '시각화 사례',
  },
  {
    name: '통계청 마이크로데이터(MDIS)',
    nameEn: 'MDIS',
    url: 'https://mdis.kostat.go.kr',
    desc: '원자료 수준의 마이크로데이터를 제공. 보다 정교한 교차분석·집단 분석 실습에 활용합니다.',
    tag: '원자료',
  },
];

/* 02 — 시각화 · 분석 도구 */
const VIZ_TOOLS: SiteLink[] = [
  {
    name: 'Microsoft Excel',
    nameEn: 'Spreadsheet',
    url: 'https://support.microsoft.com/excel',
    desc: '본 과정의 핵심 도구. 피벗 테이블·차트·슬라이서·조건부 서식 공식 가이드와 함수 레퍼런스를 제공합니다.',
    tag: '필수',
  },
  {
    name: 'Power BI',
    nameEn: 'Microsoft',
    url: 'https://powerbi.microsoft.com',
    desc: '엑셀 다음 단계의 대시보드 도구. 대용량 데이터 모델링과 인터랙티브 리포트 공유에 강점이 있습니다.',
    tag: '대시보드',
  },
  {
    name: 'Datawrapper',
    nameEn: 'Charting',
    url: 'https://www.datawrapper.de',
    desc: '코딩 없이 정확하고 깔끔한 차트·지도를 만드는 도구. 왜곡 없는 기본값으로 보고용 차트에 적합합니다.',
    tag: '차트',
  },
  {
    name: 'Flourish',
    nameEn: 'Storytelling',
    url: 'https://flourish.studio',
    desc: '애니메이션·스토리텔링 시각화 도구. 데이터를 움직이는 내러티브로 표현할 때 활용합니다.',
    tag: '시각화',
  },
  {
    name: 'ColorBrewer',
    nameEn: 'Color',
    url: 'https://colorbrewer2.org',
    desc: '데이터 시각화 전용 색상 팔레트. 색맹 안전·인쇄 적합 여부까지 고려한 색 조합을 골라줍니다.',
    tag: '색상',
  },
  {
    name: 'Google Sheets',
    nameEn: 'Google',
    url: 'https://sheets.google.com',
    desc: '협업과 공유에 강한 클라우드 스프레드시트. 엑셀과 유사한 피벗·차트 기능을 무료로 사용할 수 있습니다.',
    tag: '협업',
  },
];

/* 03 — 학습 자료 */
const LEARNING: SiteLink[] = [
  {
    name: 'Storytelling with Data',
    nameEn: 'Cole Knaflic',
    url: 'https://www.storytellingwithdata.com',
    desc: '데이터 시각화 분야의 고전. 차트 선택, 군더더기 제거, 메시지 전달의 원칙을 사례 중심으로 배웁니다.',
    tag: '시각화 원리',
  },
  {
    name: 'Financial Times Visual Vocabulary',
    nameEn: 'FT',
    url: 'https://ft-interactive.github.io/visual-vocabulary/',
    desc: '"무엇을 보여주려는가"에 따라 어떤 차트를 쓸지 정리한 한 장의 치트시트. 차트 선택의 기준표입니다.',
    tag: '차트 선택',
  },
  {
    name: 'Data to Viz',
    nameEn: 'from Data to Viz',
    url: 'https://www.data-to-viz.com',
    desc: '데이터 형태별로 가능한 차트와 흔한 함정을 안내하는 의사결정 트리. 분포·관계·구성 표현에 유용합니다.',
    tag: '가이드',
  },
  {
    name: 'Anscombe / Datasaurus',
    nameEn: 'Distribution',
    url: 'https://www.autodesk.com/research/publications/same-stats-different-graphs',
    desc: '요약 통계가 같아도 분포는 전혀 다를 수 있음을 보여주는 사례. EDA에서 분포 확인의 중요성을 일깨웁니다.',
    tag: 'EDA',
  },
];

const SiteCard = ({ site: s, index }: { site: SiteLink; index: number }): ReactElement => (
  <a
    href={s.url}
    target="_blank"
    rel="noopener noreferrer"
    className="rec-card"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="rec-card-top">
      <span className="rec-tag">{s.tag}</span>
      <svg className="rec-external" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3h7v7M13 3L6 10" />
      </svg>
    </div>
    <h3 className="rec-name">{s.name}</h3>
    <span className="rec-name-en">{s.nameEn}</span>
    <p className="rec-desc">{s.desc}</p>
    <span className="rec-url">{s.url.replace('https://', '')}</span>
  </a>
);

const RecommendedSites = (): ReactElement => {
  return (
    <>
      <SEOHead title="추천 자료" description="데이터 분석·시각화 실습에 유용한 데이터 출처, 도구, 학습 자료 모음" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Recommended</div>
          <h2>추천 자료</h2>
          <p>실습에 활용할 데이터 출처와 시각화 도구, 더 공부할 학습 자료 모음</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          {/* 공공·실무 데이터 */}
          <div className="section-head">
            <div className="section-num">&mdash; 01</div>
            <h2 className="section-title-ed" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}>공공 · 실무 <span className="accent">데이터</span></h2>
            <div className="section-meta">datasets</div>
          </div>
          <div className="rec-grid">
            {DATA_SOURCES.map((s, i) => <SiteCard key={s.url} site={s} index={i} />)}
          </div>

          {/* 시각화·분석 도구 */}
          <div className="section-head" style={{ marginTop: 'var(--s-11)' }}>
            <div className="section-num">&mdash; 02</div>
            <h2 className="section-title-ed" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}>시각화 · 분석 <span className="accent">도구</span></h2>
            <div className="section-meta">tools</div>
          </div>
          <div className="rec-grid">
            {VIZ_TOOLS.map((s, i) => <SiteCard key={s.url} site={s} index={i} />)}
          </div>

          {/* 학습 자료 */}
          <div className="section-head" style={{ marginTop: 'var(--s-11)' }}>
            <div className="section-num">&mdash; 03</div>
            <h2 className="section-title-ed" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}>학습 <span className="accent">자료</span></h2>
            <div className="section-meta">references</div>
          </div>
          <div className="rec-grid">
            {LEARNING.map((s, i) => <SiteCard key={s.url} site={s} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendedSites;
