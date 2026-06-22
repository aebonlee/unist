import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MODULES = [
  { no: '01', to: '/lecture/module1', level: 1, title: '화학·제조 산업 AX와 데이터 리터러시',
    desc: 'AX와 제조 AI 혁신 사례, 데이터 문해력 4요소, 분석 워크플로우 4단계, 목적별 생성형 AI 도구와 윤리·보안.', meta: ['1.0H', '이론'] },
  { no: '02', to: '/lecture/module2', level: 1, title: '클라우드 기반 AI 분석 환경 구축',
    desc: '클라우드 vs 로컬, Google Colab 인터페이스, PTCF 프롬프트 원칙, Gemini 분석 코드 자동 생성 실습.', meta: ['1.0H', '이론·실습'] },
  { no: '03', to: '/lecture/module3', level: 2, title: '비즈니스 데이터 정제 및 통계 분석',
    desc: '문서 속 표의 정형화(tidy), 평균·중앙값·표준편차·상관계수 등 통계 지표, 키워드 추출 기반 워드클라우드.', meta: ['1.0H', '실습'] },
  { no: '04', to: '/lecture/module4', level: 2, title: '고객 반응 데이터 수집 및 분석',
    desc: '앱스토어 리뷰 자동 수집(크롤링), 테마 분석과 페인포인트 추출, Gemini Canvas 제품 개선 리포트.', meta: ['1.0H', '실습'] },
  { no: '05', to: '/lecture/module5', level: 3, title: 'KAMP 화학공정 품질 데이터 분석',
    desc: 'KAMP 화학 공정 데이터로 운전변수와 수율 상관·예측, 불량 배치 예측 모델과 최적 운전조건 도출.', meta: ['1.0H', '실습', '화학 핵심'] },
  { no: '06', to: '/lecture/module6', level: 3, title: 'AI 도구 활용 분석 결과 시각화',
    desc: 'NotebookLM 지식 구조화, Gemini Canvas 최종 리포트, KPI 앱 대시보드 기획·제작 프로젝트.', meta: ['1.0H', '프로젝트'] },
];

const Lecture = (): ReactElement => {
  return (
    <>
      <SEOHead title="강의안" description="생성형 AI 활용 데이터 분석 — 모듈별 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Lecture Notes</div>
          <h2>강의안</h2>
          <p>생성형 AI 활용 데이터 분석 · 화학 트랙 — 모듈별 강의 자료</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 강의 자료</div>
            <h2 className="section-title-ed">모듈별 <span className="accent">강의안</span></h2>
            <div className="section-meta">6 modules · detailed notes</div>
          </div>
          <div className="courses">
            {MODULES.map((m, idx) => (
              <Link className={`course${idx === 4 ? ' featured' : ''}`} to={m.to} key={m.to}>
                <div className="course-row">
                  <span className="course-tag">LECTURE / {m.no}</span>
                  <span className="course-level">
                    {[1, 2, 3].map(i => <i key={i} className={i <= m.level ? 'on' : ''} />)}
                  </span>
                </div>
                <div className="course-num"><span className="slash">/</span>{m.no}</div>
                <h3 className="course-title">{m.title}</h3>
                <p className="course-desc">{m.desc}</p>
                <div className="course-meta-row">
                  {m.meta.map((x, i) => <span key={i}>{x}</span>)}
                </div>
                <span className="course-cta">
                  모듈 {m.no} 강의안 보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lecture;
