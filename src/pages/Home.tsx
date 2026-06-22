import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

/* ── 모듈별 세부 타임라인 (6시간 · 6모듈) ── */
const TIMELINE = [
  {
    n: '01', time: '모듈 1 · 09:00 ─ 10:00 · 1.0H · 이론',
    title: '화학·제조 산업 AX와 데이터 리터러시',
    subtitle: '울산 화학산업의 AI 전환과 현장 데이터 문해력',
    points: [
      'AX(AI Transformation)와 제조 AI 혁신 사례(비전 AI 품질검사·예지보전)',
      '현장 데이터 문해력 4요소 — 읽기·해석·활용·소통',
      '데이터 분석 워크플로우 4단계: 수집 → 전처리 → 분석 → 인사이트',
      '목적별 생성형 AI 도구와 AI 윤리·제조 데이터 보안',
    ]
  },
  {
    n: '02', time: '모듈 2 · 10:00 ─ 11:00 · 1.0H · 이론·실습',
    title: '클라우드 기반 AI 분석 환경 구축',
    subtitle: 'Colab + Gemini와 프롬프트 엔지니어링',
    points: [
      '클라우드 vs 로컬 분석 환경, Google Colab 인터페이스',
      '프롬프트 엔지니어링 PTCF 원칙 (Persona·Task·Context·Format)',
      { p: true, t: '실습 — Gemini로 분석 코드 자동 생성·실행·검증' },
    ]
  },
  {
    n: '03', time: '모듈 3 · 11:00 ─ 12:00 · 1.0H · 실습',
    title: '비즈니스 데이터 정제 및 통계 분석',
    subtitle: '표 정형화 · 통계 지표 · 키워드 시각화',
    points: [
      '문서 속 표 데이터를 분석 가능한 정형(tidy) 데이터로 변환',
      '평균·중앙값·표준편차·상관계수 등 핵심 통계 지표 해석',
      { p: true, t: '실습 — 키워드 추출 기반 워드클라우드 시각화' },
    ]
  },
  {
    n: '04', time: '모듈 4 · 13:00 ─ 14:00 · 1.0H · 실습',
    title: '고객 반응 데이터 수집 및 분석',
    subtitle: '앱스토어 리뷰 크롤링 → 페인포인트 → 개선 리포트',
    points: [
      '앱스토어 리뷰 데이터 자동 수집(크롤링)',
      '테마 분석 및 핵심 페인포인트 추출',
      { p: true, t: '실습 — Gemini Canvas로 제품 개선 리포트 작성' },
    ]
  },
  {
    n: '05', time: '모듈 5 · 14:00 ─ 15:00 · 1.0H · 실습 · 화학 핵심',
    title: 'KAMP 화학공정 품질 데이터 분석',
    subtitle: '한빛케미칼 반응공정 — 수율 예측과 최적 운전조건',
    points: [
      'KAMP 화학 공정 데이터 확보와 변수 명세 이해',
      '운전변수(온도·pH·체류시간)와 수율의 상관·예측 분석',
      { p: true, t: '실습 — 불량 배치 예측 모델과 최적 운전조건 도출' },
    ]
  },
  {
    n: '06', time: '모듈 6 · 15:00 ─ 16:00 · 1.0H · 프로젝트',
    title: 'AI 도구 활용 분석 결과 시각화',
    subtitle: 'NotebookLM 지식화 · Canvas 리포트 · 앱 대시보드',
    points: [
      'NotebookLM으로 분석 결과를 지식 구조화',
      { p: true, t: '실습 — Gemini Canvas 최종 분석 리포트 제작' },
      { p: true, t: '실습 — KPI 앱 대시보드 기획 및 시안 생성' },
    ]
  },
];

const MODULES = [
  { to: '/lecture/module1', tag: 'MODULE / 01', level: 1, title: '화학·제조 산업 AX와 데이터 리터러시',
    desc: '울산 화학산업의 AI 전환(AX)과 제조 AI 혁신 사례를 이해하고, 데이터 문해력과 분석 워크플로우 4단계, 생성형 AI 도구·윤리를 다룹니다.', meta: ['1.0H', '이론'] },
  { to: '/lecture/module2', tag: 'MODULE / 02', level: 1, title: '클라우드 기반 AI 분석 환경 구축',
    desc: '설치 없이 브라우저로 쓰는 Google Colab과 내장 Gemini, 그리고 원하는 결과를 정확히 얻는 PTCF 프롬프트 원칙을 실습합니다.', meta: ['1.0H', '이론·실습'] },
  { to: '/lecture/module3', tag: 'MODULE / 03', level: 2, title: '비즈니스 데이터 정제 및 통계 분석',
    desc: '문서 속 뒤섞인 표를 정형 데이터로 바꾸고, 핵심 통계 지표로 해석하며, 키워드 추출 기반 시각화로 인사이트를 도출합니다.', meta: ['1.0H', '실습'] },
  { to: '/lecture/module4', tag: 'MODULE / 04', level: 2, title: '고객 반응 데이터 수집 및 분석',
    desc: '앱스토어 리뷰를 자동 수집하고 테마·페인포인트를 분석해, Gemini Canvas로 제품 개선 리포트를 완성합니다.', meta: ['1.0H', '실습'] },
  { to: '/lecture/module5', tag: 'MODULE / 05', level: 3, title: 'KAMP 화학공정 품질 데이터 분석',
    desc: 'KAMP 화학 공정 데이터로 운전변수와 수율의 관계를 분석하고, 불량 배치를 예측해 최적 운전조건을 찾는 화학 트랙 핵심 실습입니다.', meta: ['1.0H', '실습', '화학 핵심'] },
  { to: '/lecture/module6', tag: 'MODULE / 06', level: 3, title: 'AI 도구 활용 분석 결과 시각화',
    desc: 'NotebookLM으로 분석을 지식화하고, Gemini Canvas 리포트와 KPI 앱 대시보드로 분석을 운영 도구로 전환하는 마무리 프로젝트입니다.', meta: ['1.0H', '프로젝트'] },
];

const TOOLS = [
  { name: 'Google Colab + Gemini', cat: 'ANALYSIS', desc: '설치 불필요·브라우저만으로 파이썬 분석. 내장 Gemini가 코드를 자동 생성.', mark: 'C' },
  { name: 'Gemini Canvas', cat: 'REPORT/APP', desc: '분석 결과를 문서·앱으로 자동 변환. 리포트와 대시보드 초안 제작.', mark: 'G' },
  { name: 'Google NotebookLM', cat: 'KNOWLEDGE', desc: '코드·자료를 업로드해 근거 기반 Q&A·슬라이드·마인드맵으로 지식화.', mark: 'N' },
  { name: 'KAMP 제조데이터', cat: 'DATASET', desc: '정부 제조 AI 플랫폼(kamp-ai.kr). 화학 공정 등 실데이터로 품질 분석.', mark: 'K' },
];

const PILLARS = [
  { n: '/01', t: '실습 중심 60%', d: '이론(20%)은 핵심만, 실습(60%)과 프로젝트(20%)로 손을 계속 움직입니다. 화학 공정·고객·통계 데이터로 직접 분석합니다.' },
  { n: '/02', t: '코드 없이도', d: 'Colab의 Gemini가 PTCF 프롬프트로 분석 코드를 대신 작성합니다. 비전공자도 수집→전처리→분석→인사이트 전 과정을 수행합니다.' },
  { n: '/03', t: '울산 화학 현장', d: 'KAMP 화학 공정 실데이터로 수율을 예측하고 최적 운전조건을 도출합니다. 현장 도메인을 아는 사람이 데이터를 만나면 가장 강력합니다.' },
];

type TimelinePoint = string | { p: boolean; t: string };

const Home = (): ReactElement => {
  const marqueePhrase = 'AX · Data Literacy · Colab · Gemini · PTCF · KAMP · Yield Prediction · NotebookLM · Canvas';

  return (
    <>
      <SEOHead
        title={`${site.nameKo} | ${site.name}`}
        description={site.description}
      />

      {/* ── Hero ── */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>울산 중소기업 현장연계 전문인력 양성과정 · 화학 트랙</span>
              </div>
              <h1 className="hero-title-ed">
                현장 데이터를<br />
                <span className="accent">생성형 AI로</span><br />
                분석하는 <span className="accent">6시간</span>
              </h1>
              <p className="hero-lead">
                Colab과 Gemini로 코드를 직접 짜지 않아도 화학 공정·고객·비즈니스
                데이터를 수집·전처리·분석하고, KAMP 화학 공정 데이터로 수율을
                예측해 최적 운전조건을 도출하는 실습 중심 6시간 과정입니다.
              </p>
              <div className="hero-actions-ed">
                <Link className="btn btn-primary" to="/curriculum">
                  커리큘럼 살펴보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link className="btn btn-ghost" to="/lecture/module1">
                  강의안 바로가기
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="metric-stack">
                <div className="metric">
                  <div className="metric-num"><span className="accent">6</span></div>
                  <div className="metric-label">학습 모듈</div>
                </div>
                <div className="metric">
                  <div className="metric-num">6<span className="small">h</span></div>
                  <div className="metric-label">총 교육 시간</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">12</span></div>
                  <div className="metric-label">실습·프로젝트</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">80</span><span className="small">%</span></div>
                  <div className="metric-label">실습·프로젝트 비중</div>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-eyebrow">Course Overview</div>
                <div className="hero-card-title">생성형 AI 활용 데이터 분석 · 화학 트랙</div>
                <ul className="hero-card-list">
                  <li>M1 — 산업 AX와 데이터 리터러시 · 1.0H</li>
                  <li>M2 — Colab·Gemini·PTCF · 1.0H</li>
                  <li>M3 — 데이터 정제·통계 분석 · 1.0H</li>
                  <li>M4 — 고객 반응 데이터 분석 · 1.0H</li>
                  <li>M5 — KAMP 화학공정 품질분석 · 1.0H</li>
                  <li>M6 — AI 시각화·지식화 프로젝트 · 1.0H</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                {marqueePhrase.split(' · ').map((w, j) => (
                  <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
                ))}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Modules ── */}
      <section className="section-ed" id="curriculum">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Modules</div>
            <h2 className="section-title-ed">여섯 개의 <span className="accent">학습 모듈</span></h2>
            <div className="section-meta">6 hours · 6 modules</div>
          </div>
          <div className="courses">
            {MODULES.map((m, idx) => (
              <Link className={`course${idx === 4 ? ' featured' : ''}`} to={m.to} key={m.to}>
                <div className="course-row">
                  <span className="course-tag">{m.tag}</span>
                  <span className="course-level">
                    {[1, 2, 3].map(i => <i key={i} className={i <= m.level ? 'on' : ''} />)}
                  </span>
                </div>
                <div className="course-num"><span className="slash">/</span>0{idx + 1}</div>
                <h3 className="course-title">{m.title}</h3>
                <p className="course-desc">{m.desc}</p>
                <div className="course-meta-row">
                  {m.meta.map((x, i) => <span key={i}>{x}</span>)}
                </div>
                <span className="course-cta">
                  강의안 보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-ed" id="schedule" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Schedule</div>
            <h2 className="section-title-ed"><span className="accent">1일</span> &times; 6시간</h2>
            <div className="section-meta">6 modules · 1.0H each</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'현장 데이터를\n다루는\n하루'}</h3>
              <p>
                각 1시간씩 6개 모듈로 구성된 집약 과정.
                산업 AX·환경 구축에서 시작해 정제·통계, 고객 리뷰,
                KAMP 화학공정 품질 예측, 시각화 프로젝트까지
                분석의 전 과정을 다룹니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">중소기업 재직자</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">트랙</span><span className="curr-meta-val">화학</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">Colab·Gemini</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">이론+실습+프로젝트</span></div>
              </div>
            </aside>

            <div className="timeline">
              {TIMELINE.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">{item.n}<span>/06</span></div>
                  </div>
                  <div className="tl-body">
                    <h4>{item.title}</h4>
                    <p className="tl-sub" style={{ color: 'var(--text-light)', fontSize: '13px', margin: '2px 0 10px' }}>{item.subtitle}</p>
                    <ul>
                      {item.points.map((p: TimelinePoint, i: number) => (
                        typeof p === 'string'
                          ? <li key={i}>{p}</li>
                          : <li key={i} className="practice">{p.t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section-ed" id="tools" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Toolkit</div>
            <h2 className="section-title-ed">다루는 <span className="accent">도구들</span></h2>
            <div className="section-meta">Generative AI · hands-on</div>
          </div>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <div className="tool" key={i}>
                <div className="tool-mark">{t.mark}</div>
                <div>
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-name">{t.name}</div>
                </div>
                <p className="tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section-ed" id="approach" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 04 / Approach</div>
            <h2 className="section-title-ed">학습 하는 <span className="accent">방식</span></h2>
            <div className="section-meta">3 principles</div>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-num">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-ed">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; 학습 시작</div>
              <h2 className="cta-title-ed">
                현장의 질문을<br />
                <span className="accent">데이터로</span> 풀다.
              </h2>
            </div>
            <div className="cta-side">
              <p>
                로그인하면 모든 강의안과 실습 자료에 접근할 수 있습니다.
                구글 또는 카카오 계정으로 간편하게 시작하세요.
              </p>
              <Link className="btn btn-cta" to="/login">
                로그인하고 시작하기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
