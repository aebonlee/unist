import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <>
      <SEOHead title="과정 소개 | 데이터 분석 실습 & 시각화" description="2026 KERIS 교육과정 — 데이터 분석 실습 & 시각화 과정 소개" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">About This Course</div>
          <h2>과정 소개</h2>
          <p>2026 KERIS 교육과정(안) · 공통직무 · 데이터 분석 실습 &amp; 시각화</p>
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
                데이터 분석과 시각화의 핵심 원리를 하루에 익히는 실습 중심 과정입니다.
              </strong>
              <p style={{ margin: '0 0 12px' }}>
                본 과정은 2026 KERIS 교육과정(안) 공통직무 중급 과정으로, 엑셀 기반
                EDA·시각화·대시보드 구축 실습을 통해 데이터 기반 의사결정 역량을
                강화하는 것을 목표로 합니다. 1일 6시간, 2시간씩 3개 모듈로 구성됩니다.
              </p>
              <p style={{ margin: 0 }}>
                탐색적 데이터분석(EDA)으로 데이터를 쪼개 패턴을 찾고, 시각화의 원리를
                이해해 메시지를 정확히 전달하며, 마지막으로 피벗·슬라이서를 활용한
                실무형 대시보드를 직접 완성합니다. 이론 30% · 실습 70%로 진행됩니다.
              </p>
            </div>

            {/* 제작 배경 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              교육 목표
            </h3>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '48px' }}>
              {[
                {
                  icon: 'fa-magnifying-glass-chart',
                  title: '탐색적 데이터분석(EDA)',
                  desc: '가설을 세우고 지표를 쪼개며(Drill-down), 상관·교차분석과 분포 확인으로 데이터에 숨은 패턴과 인사이트를 도출합니다.'
                },
                {
                  icon: 'fa-chart-pie',
                  title: '시각화의 원리와 기획',
                  desc: '데이터 특성에 맞는 차트를 선택하고, 정보 왜곡 없이 메시지를 정확하게 전달하는 시각화 원칙을 익힙니다.'
                },
                {
                  icon: 'fa-gauge-high',
                  title: '실무형 대시보드 구축',
                  desc: '조건부 서식·피벗 차트·슬라이서를 활용해 KPI를 한 화면에 담고, 자동 갱신되는 인터랙티브 리포트를 완성합니다.'
                },
                {
                  icon: 'fa-lightbulb',
                  title: '데이터 기반 의사결정',
                  desc: '엑셀 기반 실습을 통해 숫자를 인사이트로 바꾸고, 실무 보고와 의사결정에 바로 적용할 수 있는 역량을 내재화합니다.'
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

            {/* 플랫폼 구성 */}
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
                { num: '01', title: '커리큘럼', desc: 'EDA·시각화·대시보드 3모듈', link: '/curriculum' },
                { num: '02', title: '모듈 1 · EDA', desc: '탐색적 데이터분석 강의안', link: '/lecture/module1' },
                { num: '03', title: '모듈 2 · 시각화', desc: '시각화의 원리 및 기획', link: '/lecture/module2' },
                { num: '04', title: '모듈 3 · 대시보드', desc: '실무형 대시보드 구축', link: '/lecture/module3' },
                { num: '05', title: '강의안 허브', desc: '모듈별 강의 자료 모음', link: '/lecture' },
                { num: '06', title: '추천 자료', desc: '데이터·시각화 학습 리소스', link: '/recommended' },
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
                  86개 교육 사이트를 운영하는 에듀테크 전문 기업
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
                  데이터 분석·시각화 교육 전문 강사 이애본 박사 프로필
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
