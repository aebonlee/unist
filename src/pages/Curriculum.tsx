import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MODULES = [
  {
    no: '01',
    to: '/lecture/module1',
    time: '1.0H',
    title: '화학·제조 산업 AX와 데이터 리터러시',
    headline: '울산 화학산업의 AI 전환과 현장 데이터 문해력',
    items: [
      '화학·제조 산업 디지털 전환(AX) 동향 및 성과 사례 분석',
      '현장 데이터 문해력의 정의와 중요성, 데이터 분석 워크플로우(수집-전처리-분석-인사이트 도출)',
      '목적별 생성형 AI 도구의 특장점, AI 윤리 준수 및 제조 데이터 보안 가이드라인',
    ],
    labs: [],
  },
  {
    no: '02',
    to: '/lecture/module2',
    time: '1.0H',
    title: '클라우드 기반 AI 분석 환경 구축',
    headline: 'Colab + Gemini와 PTCF 프롬프트 엔지니어링',
    items: [
      '클라우드와 로컬 데이터 분석 환경의 차이, 구글 Colab 접속 및 기본 인터페이스',
      '프롬프트 엔지니어링 PTCF 원칙(Persona·Task·Context·Format) 이해 및 적용',
    ],
    labs: [
      'Colab 내장 Gemini를 활용한 기본 분석 코드 자동 생성·실행·검증',
    ],
  },
  {
    no: '03',
    to: '/lecture/module3',
    time: '1.0H',
    title: '비즈니스 데이터 정제 및 통계 분석',
    headline: '표 정형화 · 통계 지표 · 키워드 시각화',
    items: [
      '문서 내 표 데이터 정형화 및 분석 가능한 데이터 정제/추출',
      '데이터 기반 통계 수치 분석 및 핵심 지표 도출',
    ],
    labs: [
      '텍스트 데이터 키워드 추출 기반 워드클라우드 생성',
      '분석 결과 기반 데이터 인사이트 도출 및 요약',
    ],
  },
  {
    no: '04',
    to: '/lecture/module4',
    time: '1.0H',
    title: '고객 반응 데이터 수집 및 분석',
    headline: '앱스토어 리뷰 크롤링 → 페인포인트 → 개선 리포트',
    items: [
      '구글 앱스토어 리뷰 데이터 수집 프로세스 이해 및 자동 수집(크롤링) 코드 구현',
      '사용자 의견 테마 분석 및 핵심 페인포인트 추출',
    ],
    labs: [
      '분석 데이터 기반 최종 제품 개선 리포트(Gemini Canvas 활용) 작성',
    ],
  },
  {
    no: '05',
    to: '/lecture/module5',
    time: '1.0H',
    title: 'KAMP 화학공정 품질 데이터 분석',
    headline: '한빛케미칼 반응공정 — 수율 예측과 최적 운전조건 (화학 트랙 핵심)',
    items: [
      '인공지능 제조 플랫폼(KAMP) 데이터 활용 가이드',
      '화학 공정 운전변수(온도·pH·체류시간 등)와 품질(수율·불량) 간 상관관계 이해',
    ],
    labs: [
      '화학 공정 데이터 수집·전처리·EDA 및 불량 배치 예측 모델링·성능 검증',
      '변수 중요도 기반 최적 운전조건 도출 및 품질 모니터링 대시보드 설계',
    ],
  },
  {
    no: '06',
    to: '/lecture/module6',
    time: '1.0H',
    title: 'AI 도구 활용 분석 결과 시각화',
    headline: 'NotebookLM 지식화 · Canvas 리포트 · 앱 대시보드',
    items: [
      'NotebookLM 사용법 및 분석 코드·자료 업로드, 스튜디오로 슬라이드·마인드맵 등 생성물 제작',
    ],
    labs: [
      'Gemini Canvas 연동 최종 분석 리포트 문서 생성',
      '분석 결과 시각화 기반 앱 대시보드 기획 및 제작',
    ],
  },
];

const Curriculum = (): ReactElement => {
  return (
    <>
      <SEOHead title="커리큘럼" description="생성형 AI 활용 데이터 분석 — 산업 AX·환경 구축·정제·고객 분석·KAMP 화학공정·시각화 6개 모듈 세부 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Curriculum · 울산 중소기업 현장연계 전문인력 양성과정</div>
          <h2>생성형 AI 활용 데이터 분석</h2>
          <p>6시간 · 화학 트랙 — 산업 AX부터 KAMP 화학공정 품질 예측까지</p>
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
              <h4>분석 전 과정 수행</h4>
              <p>생성형 AI를 활용해 수집→전처리→분석→인사이트 도출까지 데이터 분석 전 과정을 스스로 수행합니다.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">/02</div>
              <h4>화학 현장 적용</h4>
              <p>KAMP 화학 공정 실데이터로 수율을 예측하고 최적 운전조건을 도출하는 현장형 품질 분석을 체득합니다.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">/03</div>
              <h4>핵심 키워드</h4>
              <p>Colab · Gemini · PTCF · 데이터 정제 · 통계 · 리뷰 분석 · KAMP · 수율 예측 · NotebookLM · 대시보드.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 모듈별 세부 내용 */}
      <section className="section-ed" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 세부 커리큘럼</div>
            <h2 className="section-title-ed">6개 <span className="accent">모듈</span></h2>
            <div className="section-meta">1.0H × 6 = 6.0H</div>
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
