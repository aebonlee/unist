import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MODULES = [
  {
    no: '01',
    to: '/lecture/module1',
    time: '2.0H',
    title: '탐색적 데이터분석(EDA)',
    headline: '데이터를 쪼개고 파악하는 EDA 분석 기법',
    items: [
      '데이터를 다각도로 파악하는 탐색적 데이터 분석(EDA)의 목적과 실무적 가치 이해',
      '비즈니스 문제 정의에 따른 핵심 가설 수립 및 데이터를 통한 논리적 검증 프로세스 체득',
      '가설 검증을 위한 지표 쪼개기(Drill-down) 및 다차원(Dimension) 데이터 분할 기법 학습',
    ],
    labs: [
      '공공데이터 및 가상 실무 데이터를 활용한 시계열 트렌드, 요일별/집단별 특성 분석',
      '상관분석, 교차분석 등을 활용하여 변수 간의 숨겨진 패턴 및 비즈니스 인사이트 도출',
      '요약 통계량의 맹점을 보완하기 위한 데이터 분포(히스토그램, 박스플롯) 초기 형태 확인',
    ],
  },
  {
    no: '02',
    to: '/lecture/module2',
    time: '2.0H',
    title: '데이터 시각화의 원리 및 기획',
    headline: '한눈에 들어오는 데이터 시각화 전략',
    items: [
      '데이터가 전달하고자 하는 핵심 메시지(Message) 도출 및 보고 대상(타겟)에 맞춘 시각화 목적 정의',
      '데이터 특성 및 목적에 맞는 최적의 차트 선택 가이드 (비교-막대, 추이-꺾은선, 분포-산점도 등)',
    ],
    labs: [
      '정보 가독성을 높이는 디자인 원칙 적용: 전략적 색상 활용, 불필요한 요소 제거(Data-Ink Ratio), 시선 유도 기법',
      '실무 보고서에서 3D 차트 남용, y축 왜곡, 이중 축 오용 등 시각화 시 흔히 범하는 정보 왜곡 오류 피하기',
      '인지 편향을 방지하고 객관적인 팩트를 전달하기 위한 윤리적이고 정확한 데이터 표현',
    ],
  },
  {
    no: '03',
    to: '/lecture/module3',
    time: '2.0H',
    title: '실무형 시각화 대시보드 구축',
    headline: '인사이트를 한 화면에 담는 대시보드 구현',
    items: [
      '엑셀 조건부 서식, 스파크라인, 데이터 막대를 활용하여 표(Table) 자체를 직관적으로 시각화하기',
    ],
    labs: [
      '부서별(영업, 연구, 인사 등) 주요 KPI 모니터링을 위한 대시보드 레이아웃 기획 및 화면 설계',
      '피벗 차트(Pivot Chart)와 슬라이서, 시간 표시 막대를 연동한 인터랙티브(Interactive) 동적 차트 구축하기',
      '원본 데이터 업데이트 시 차트와 핵심 지표가 즉시 자동 반영되는 자동화 리포트 템플릿 완성',
    ],
  },
];

const Curriculum = (): ReactElement => {
  return (
    <>
      <SEOHead title="커리큘럼" description="데이터 분석 실습 & 시각화 — EDA·시각화·대시보드 3개 모듈 세부 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Curriculum · 2026 KERIS</div>
          <h2>데이터 분석 실습 &amp; 시각화</h2>
          <p>1일 6시간 · 중급 · 공통직무 — EDA부터 실무 대시보드까지</p>
        </div>
      </section>

      {/* 교육 목표 */}
      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 교육 목표</div>
            <h2 className="section-title-ed">무엇을 <span className="accent">얻어가나요</span></h2>
          </div>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar-num">/01</div>
              <h4>데이터 기반 의사결정</h4>
              <p>데이터 분석과 시각화의 핵심 원리를 이해하고 데이터 기반 의사결정 역량을 강화합니다.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">/02</div>
              <h4>실무 역량 내재화</h4>
              <p>엑셀 기반 EDA·시각화·대시보드 구축 실습을 통해 실무 중심의 데이터 분석 및 보고 역량을 내재화합니다.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">/03</div>
              <h4>핵심 키워드</h4>
              <p>데이터 분석 · 엑셀 전처리 · EDA · 차트 선택 · 대시보드 · 피벗 · KPI 모니터링.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 모듈별 세부 내용 */}
      <section className="section-ed" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 세부 커리큘럼</div>
            <h2 className="section-title-ed">3개 <span className="accent">모듈</span></h2>
            <div className="section-meta">2.0H × 3 = 6.0H</div>
          </div>

          <div className="curr-modules" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {MODULES.map((m) => (
              <div key={m.no} className="curr-module-card" style={{
                border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
                padding: '32px', background: 'var(--bg-white)'
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className="course-tag">MODULE / {m.no}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: '13px', fontWeight: 700 }}>{m.time}</span>
                </div>
                <h3 className="course-title" style={{ marginBottom: '4px' }}>{m.title}</h3>
                <p style={{ color: 'var(--primary-blue-light)', fontWeight: 600, marginBottom: '20px' }}>• {m.headline}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {m.items.map((it, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--primary-blue-light)', flexShrink: 0 }}>—</span>{it}
                    </li>
                  ))}
                  {m.labs.map((it, i) => (
                    <li key={`lab-${i}`} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{
                        flexShrink: 0, fontSize: '11px', fontWeight: 700, color: '#fff',
                        background: 'var(--primary-blue-light)', borderRadius: '4px',
                        padding: '1px 7px', height: 'fit-content', marginTop: '3px'
                      }}>실습</span>{it}
                    </li>
                  ))}
                </ul>

                <Link className="course-cta" to={m.to} style={{ display: 'inline-flex' }}>
                  모듈 {m.no} 강의안 보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;
