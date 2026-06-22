import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MODULES = [
  { no: '01', to: '/lecture/module1', level: 1, title: '탐색적 데이터분석(EDA)',
    desc: 'EDA의 목적과 가치, 가설 수립과 검증, 드릴다운·다차원 분할, 상관·교차분석, 분포 확인까지.', meta: ['2.0H', '강의 + 실습'] },
  { no: '02', to: '/lecture/module2', level: 2, title: '시각화의 원리 및 기획',
    desc: '핵심 메시지 도출, 차트 선택 가이드, Data-Ink Ratio, 정보 왜곡 회피, 윤리적 데이터 표현.', meta: ['2.0H', '디자인 실습'] },
  { no: '03', to: '/lecture/module3', level: 3, title: '실무형 대시보드 구축',
    desc: '조건부 서식·스파크라인, KPI 대시보드 설계, 피벗 차트·슬라이서 연동, 자동화 리포트 템플릿.', meta: ['2.0H', '대시보드 실습'] },
];

const Lecture = (): ReactElement => {
  return (
    <>
      <SEOHead title="강의안" description="데이터 분석 실습 & 시각화 — 모듈별 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Lecture Notes</div>
          <h2>강의안</h2>
          <p>데이터 분석 실습 &amp; 시각화 — 모듈별 강의 자료</p>
          <p style={{ marginTop: '1.4rem' }}>
            <a
              href={`${import.meta.env.BASE_URL}slides.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="course-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}
            >
              📊 강의안 슬라이드 (웹) 열기
              <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${encodeURIComponent('강의안_데이터분석_시각화.pptx')}`}
              download
              className="course-cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginLeft: '1rem' }}
            >
              ⬇ PPT 원본 (.pptx) 내려받기
            </a>
          </p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 강의 자료</div>
            <h2 className="section-title-ed">모듈별 <span className="accent">강의안</span></h2>
            <div className="section-meta">3 modules · detailed notes</div>
          </div>
          <div className="courses">
            {MODULES.map((m, idx) => (
              <Link className={`course${idx === 0 ? ' featured' : ''}`} to={m.to} key={m.to}>
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
