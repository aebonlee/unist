import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

/* ── 모듈별 세부 타임라인 (KERIS 2026 세부 커리큘럼) ── */
const TIMELINE = [
  {
    n: '01', time: '모듈 1 · 09:00 ─ 11:00 · 2.0H',
    title: '탐색적 데이터분석(EDA)',
    subtitle: '데이터를 쪼개고 파악하는 EDA 분석 기법',
    points: [
      'EDA의 목적과 실무적 가치, 비즈니스 문제 정의',
      '핵심 가설 수립과 데이터를 통한 논리적 검증 프로세스',
      '지표 쪼개기(Drill-down)·다차원(Dimension) 분할 기법',
      { p: true, t: '실습 — 시계열 트렌드, 요일별/집단별 특성 분석' },
      { p: true, t: '실습 — 상관분석·교차분석으로 숨은 패턴 도출' },
      { p: true, t: '실습 — 히스토그램·박스플롯으로 분포 확인' },
    ]
  },
  {
    n: '02', time: '모듈 2 · 11:00 ─ 13:00 · 2.0H',
    title: '데이터 시각화의 원리 및 기획',
    subtitle: '한눈에 들어오는 데이터 시각화 전략',
    points: [
      '핵심 메시지 도출과 보고 대상(타겟)별 시각화 목적 정의',
      '데이터 특성별 최적 차트 선택 (비교·추이·분포)',
      { p: true, t: '실습 — 색상·Data-Ink Ratio·시선 유도 디자인 원칙' },
      { p: true, t: '실습 — 3D 남용·y축 왜곡·이중 축 오용 피하기' },
      { p: true, t: '실습 — 인지 편향 방지와 윤리적 데이터 표현' },
    ]
  },
  {
    n: '03', time: '모듈 3 · 14:00 ─ 16:00 · 2.0H',
    title: '실무형 시각화 대시보드 구축',
    subtitle: '인사이트를 한 화면에 담는 대시보드 구현',
    points: [
      '조건부 서식·스파크라인·데이터 막대로 표(Table) 시각화',
      { p: true, t: '실습 — 부서별 KPI 대시보드 레이아웃 기획·설계' },
      { p: true, t: '실습 — 피벗 차트·슬라이서·시간 표시 막대 연동' },
      { p: true, t: '실습 — 원본 갱신 시 자동 반영되는 리포트 템플릿' },
    ]
  },
];

const MODULES = [
  { to: '/lecture/module1', tag: 'MODULE / 01', level: 1, title: '탐색적 데이터분석(EDA)',
    desc: '데이터를 다각도로 쪼개고 파악하는 EDA의 목적과 가치를 이해하고, 가설 수립부터 상관·교차분석, 분포 확인까지 실습합니다.', meta: ['2.0H', '중급', '실습 포함'] },
  { to: '/lecture/module2', tag: 'MODULE / 02', level: 2, title: '시각화의 원리 및 기획',
    desc: '전달할 메시지를 정의하고, 데이터 특성에 맞는 차트를 선택합니다. 가독성을 높이는 디자인 원칙과 정보 왜곡을 피하는 법을 다룹니다.', meta: ['2.0H', '중급', '디자인 실습'] },
  { to: '/lecture/module3', tag: 'MODULE / 03', level: 3, title: '실무형 대시보드 구축',
    desc: '조건부 서식·피벗 차트·슬라이서를 활용해 KPI를 한 화면에 담고, 원본 갱신 시 자동 반영되는 인터랙티브 리포트를 완성합니다.', meta: ['2.0H', '중급', '대시보드'] },
];

const TOOLS = [
  { name: 'Excel', cat: 'SPREADSHEET', desc: '피벗 테이블·함수·조건부 서식. 본 과정의 핵심 분석·시각화 도구.', mark: 'X' },
  { name: '피벗 차트 + 슬라이서', cat: 'INTERACTIVE', desc: '드릴다운·필터링이 가능한 동적 인터랙티브 차트 구성.', mark: 'P' },
  { name: '조건부 서식 · 스파크라인', cat: 'TABLE VIZ', desc: '표 자체를 직관적으로 시각화하는 인-셀(in-cell) 기법.', mark: 'S' },
  { name: '공공데이터 · 실무 데이터', cat: 'DATASET', desc: '시계열·집단별 분석을 위한 공공데이터와 가상 실무 데이터.', mark: 'D' },
];

const PILLARS = [
  { n: '/01', t: '실무 중심 70%', d: '이론은 핵심만, 손은 계속 움직입니다. 공공데이터와 가상 실무 데이터로 EDA부터 대시보드까지 직접 만듭니다.' },
  { n: '/02', t: '의사결정 역량', d: '데이터 분석과 시각화의 핵심 원리를 이해하고, 숫자를 인사이트로 바꿔 데이터 기반 의사결정 역량을 강화합니다.' },
  { n: '/03', t: '왜곡 없는 시각화', d: '3D 남용·축 왜곡·인지 편향을 피하고, 객관적인 팩트를 정확하게 전달하는 윤리적 시각화를 체득합니다.' },
];

type TimelinePoint = string | { p: boolean; t: string };

const Home = (): ReactElement => {
  const marqueePhrase = 'EDA · Drill-down · Correlation · Distribution · Charting · Dashboard · KPI · Pivot';

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
                <span>2026 KERIS 교육과정 · 공통직무 · 중급</span>
              </div>
              <h1 className="hero-title-ed">
                숫자를<br />
                <span className="accent">인사이트로</span><br />
                바꾸는 <span className="accent">6시간</span>
              </h1>
              <p className="hero-lead">
                엑셀 기반 EDA·시각화·대시보드 구축 실습을 통해 데이터 분석과
                시각화의 핵심 원리를 이해하고, 실무 중심의 데이터 기반
                의사결정·보고 역량을 내재화하는 1일 6시간 중급 과정입니다.
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
                  <div className="metric-num"><span className="accent">3</span></div>
                  <div className="metric-label">학습 모듈</div>
                </div>
                <div className="metric">
                  <div className="metric-num">6<span className="small">h</span></div>
                  <div className="metric-label">총 교육 시간</div>
                </div>
                <div className="metric">
                  <div className="metric-num">중급</div>
                  <div className="metric-label">난이도</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">70</span><span className="small">%</span></div>
                  <div className="metric-label">실습 비중</div>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-eyebrow">Course Overview</div>
                <div className="hero-card-title">하루에 끝내는 데이터 분석 & 시각화</div>
                <ul className="hero-card-list">
                  <li>모듈 1 — 탐색적 데이터분석(EDA) · 2.0H</li>
                  <li>모듈 2 — 시각화의 원리 및 기획 · 2.0H</li>
                  <li>모듈 3 — 실무형 대시보드 구축 · 2.0H</li>
                  <li>도구 — 엑셀(피벗·조건부 서식·슬라이서)</li>
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
            <h2 className="section-title-ed">세 개의 <span className="accent">학습 모듈</span></h2>
            <div className="section-meta">6 hours · 3 modules</div>
          </div>
          <div className="courses">
            {MODULES.map((m, idx) => (
              <Link className={`course${idx === 0 ? ' featured' : ''}`} to={m.to} key={m.to}>
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
            <div className="section-meta">3 modules · 2.0H each</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'하루에\n완성하는\n데이터 역량'}</h3>
              <p>
                각 2시간씩 3개 모듈로 구성된 집약적 중급 과정.
                탐색(EDA) → 시각화 기획 → 대시보드 구축으로
                이어지는 실무 분석의 전 과정을 다룹니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">난이도</span><span className="curr-meta-val">중급</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">공통직무</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">Excel</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">강의 + 실습</span></div>
              </div>
            </aside>

            <div className="timeline">
              {TIMELINE.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">{item.n}<span>/03</span></div>
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
            <div className="section-meta">Excel-based · hands-on</div>
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
                데이터로<br />
                <span className="accent">말하는 법</span>을 배우다.
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
