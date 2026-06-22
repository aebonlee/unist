import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

/* 강의 안내 (제공 정보) */
const COURSE_INFO = [
  { k: '교육과정', v: '생성형 AI 활용 데이터 분석 (화학분야)' },
  { k: '강의일자', v: '2026. 06. 23 (화)' },
  { k: '강의시간', v: '09:30 ~ 17:20' },
  { k: '강의시수', v: '1일 6시간' },
  { k: '강의장소', v: '울산 남구 테크노산업로55번길 10 산업단지캠퍼스 UNIST관' },
  { k: '수강대상', v: '울산지역 중소기업 재직자' },
  { k: '강의형태', v: '온·오프라인 혼합 (오프라인 25명 + 온라인 20여 명)' },
];

const About = (): ReactElement => {
  return (
    <>
      <SEOHead title="과정 소개 | 생성형 AI 활용 데이터 분석" description="울산 중소기업 현장연계 전문인력 양성과정 · 화학 트랙 — 생성형 AI 활용 데이터 분석 과정 소개" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">About This Course</div>
          <h2>과정 소개</h2>
          <p>울산 중소기업 현장연계 전문인력 양성과정 · 화학 트랙 — 생성형 AI 활용 데이터 분석</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          {/* 제작의도 */}
          <div>
            <div style={{
              background: 'var(--navy-50)',
              borderLeft: '4px solid var(--gold)',
              padding: '28px 32px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '48px',
              lineHeight: 1.8,
              fontSize: '15px',
              color: 'var(--text-primary)',
            }}>
              <strong style={{ fontSize: '17px', color: 'var(--navy-800)', display: 'block', marginBottom: '12px' }}>
                코드를 직접 짜지 않아도 생성형 AI로 현장 데이터를 분석하는 실습 중심 과정입니다.
              </strong>
              <p style={{ margin: '0 0 12px' }}>
                본 과정은 울산 중소기업 현장연계 전문인력 양성과정 <strong>화학 트랙</strong>으로, 비전공자도
                Google Colab과 Gemini를 활용해 데이터 <strong>수집 → 전처리 → 분석 → 인사이트 도출</strong>까지
                전 과정을 스스로 수행하는 것을 목표로 합니다. 1일 6시간, 1시간씩 6개 모듈로 구성됩니다.
              </p>
              <p style={{ margin: 0 }}>
                산업 AX와 데이터 문해력에서 출발해 분석 환경(Colab·PTCF), 데이터 정제·통계, 고객 반응 분석을 익히고,
                <strong> KAMP 화학 공정 실데이터로 수율을 예측하고 최적 운전조건을 도출</strong>한 뒤, NotebookLM·Canvas로
                결과를 리포트·대시보드로 마무리합니다. 이론 20% · 실습 60% · 프로젝트 20%로 진행됩니다.
              </p>
            </div>

            {/* 강의 안내 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              강의 안내
            </h3>
            <div style={{
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              marginBottom: '48px',
              background: 'var(--bg-white)',
            }}>
              {COURSE_INFO.map((row, i) => (
                <div key={row.k} style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
                  borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                }}>
                  <div style={{
                    padding: '14px 20px',
                    background: 'var(--navy-50)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'var(--navy-800)',
                    display: 'flex',
                    alignItems: 'center',
                  }}>{row.k}</div>
                  <div style={{
                    padding: '14px 20px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'center',
                  }}>{row.v}</div>
                </div>
              ))}
            </div>

            {/* 교육 목표 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              교육 목표
            </h3>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '48px' }}>
              {[
                {
                  icon: 'fa-industry',
                  title: '산업 AX와 데이터 리터러시',
                  desc: '화학·제조 산업의 AI 전환(AX) 흐름을 이해하고, 데이터를 읽고 해석해 근거로 소통하는 현장 데이터 문해력을 갖춥니다.'
                },
                {
                  icon: 'fa-robot',
                  title: '생성형 AI로 분석 자동화',
                  desc: 'Colab의 Gemini와 PTCF 프롬프트 원칙으로 분석 코드를 직접 짜지 않고도 수집·전처리·분석을 수행합니다.'
                },
                {
                  icon: 'fa-flask',
                  title: 'KAMP 화학공정 품질 분석',
                  desc: 'KAMP 화학 공정 실데이터로 운전변수와 수율의 관계를 분석하고, 불량 배치를 예측해 최적 운전조건을 도출합니다.'
                },
                {
                  icon: 'fa-chart-line',
                  title: '결과의 시각화·지식화',
                  desc: 'NotebookLM으로 분석을 지식화하고 Gemini Canvas 리포트·KPI 대시보드로 분석을 운영 도구로 전환합니다.'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--navy-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--gold)', fontSize: '18px' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-800)', fontSize: '15px' }}>{item.title}</strong>
                    <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 사이트 구성 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              사이트 구성
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '48px',
            }}>
              {[
                { num: '01', title: '커리큘럼', desc: '6개 모듈 세부 커리큘럼', link: '/curriculum' },
                { num: '02', title: 'M1 · 산업 AX', desc: '산업 AX와 데이터 리터러시', link: '/lecture/module1' },
                { num: '03', title: 'M2 · 분석 환경', desc: 'Colab·Gemini·PTCF', link: '/lecture/module2' },
                { num: '04', title: 'M3 · 정제·통계', desc: '데이터 정제 및 통계 분석', link: '/lecture/module3' },
                { num: '05', title: 'M4 · 고객 분석', desc: '고객 반응 데이터 수집·분석', link: '/lecture/module4' },
                { num: '06', title: 'M5 · 화학공정', desc: 'KAMP 화학공정 품질분석', link: '/lecture/module5' },
                { num: '07', title: 'M6 · 시각화', desc: 'AI 시각화·지식화 프로젝트', link: '/lecture/module6' },
                { num: '08', title: '추천 자료', desc: '데이터 분석 학습 리소스', link: '/recommended' },
              ].map((item) => (
                <Link key={item.num} to={item.link} style={{
                  padding: '20px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>{item.num}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                </Link>
              ))}
            </div>

            {/* 제작사 / 강사 링크 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}>
              <Link to="/about/company" style={{
                padding: '28px',
                background: 'var(--ink-surface)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: '#fff',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPER</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>드림아이티비즈</div>
                <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.5 }}>
                  다수의 교육 사이트를 운영하는 에듀테크 전문 기업
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
              <Link to="/about/instructor" style={{
                padding: '28px',
                background: 'linear-gradient(135deg, var(--navy-50), rgba(212,118,10,0.05))',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: 'var(--navy-800)',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>INSTRUCTOR</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>강사 소개</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  생성형 AI·데이터 분석 교육 전문 강사 이애본 박사 프로필
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
