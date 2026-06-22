import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

/* 평가 기준 (PTCF + 안전성) */
const CRITERIA = [
  { n: '/01', t: '역할·맥락(Persona·Context)', d: 'AI에게 역할과 배경·제약을 충분히 주었는가. "너는 화학 공정 데이터 분석가야"처럼 도메인이 분명한가.' },
  { n: '/02', t: '작업 구체성(Task)', d: '무엇을, 어떤 데이터로, 어떤 단위·범위로 하라는지 모호함 없이 지시했는가. "분석해줘"가 아니라 "결측을 평균 대체하고 양품/불량 열을 추가".' },
  { n: '/03', t: '출력 형식(Format)', d: '결과 형태(코드만/표/단계/분량/언어)를 지정했는가. "한글 주석 포함 pandas 코드로만"처럼 받을 형식이 분명한가.' },
  { n: '/04', t: '재현성', d: '같은 프롬프트로 누가 실행해도 비슷한 결과가 나오는가. 데이터·기준·조건이 프롬프트 안에 명시되어 있는가.' },
  { n: '/05', t: '안전·윤리', d: '기밀(레시피·배합비)·개인정보를 원본 그대로 넣지 않았는가. 결과를 사람이 검증할 여지를 남겼는가.' },
];

/* 0~2점 루브릭 */
const RUBRIC = [
  { c: '역할·맥락', p0: '역할·배경 없음', p1: '역할 또는 맥락 중 하나만', p2: '역할 + 도메인 맥락·제약 명시' },
  { c: '작업 지시', p0: '"분석해줘" 수준의 모호함', p1: '작업은 있으나 범위·기준 불명확', p2: '작업·대상·기준·단위까지 구체적' },
  { c: '출력 형식', p0: '형식 지정 없음', p1: '대략적 형식만(예: "표로")', p2: '형식·분량·언어·코드만 등 명시' },
  { c: '재현성', p0: '데이터·기준이 프롬프트 밖에 있음', p1: '일부만 명시', p2: '데이터·조건·기준 모두 프롬프트 안' },
  { c: '안전·윤리', p0: '기밀·개인정보 원본 노출', p1: '일부 비식별화', p2: '비식별·범위화 + 사람 검증 전제' },
];

const OUTPUT_CHECK = [
  '결과가 질문에 실제로 답하고 있는가? (동문서답·과잉응답 아님)',
  '근거가 제시되었는가? 수치·출처가 확인 가능한가?',
  '환각(없는 컬럼·함수·사실)을 만들어내지 않았는가?',
  '코드가 그대로 실행되는가? 오류·미정의 변수는 없는가?',
  '정확도 함정(불량이 드문데 전부 양품으로 찍는 등)을 점검했는가?',
  '결과를 그대로 쓰지 않고 현장 맥락으로 한 번 더 검증했는가?',
];

const SELF_CHECK = [
  'PTCF(Persona·Task·Context·Format) 네 요소가 모두 들어갔는가?',
  '"분석해줘" 같은 모호한 동사를 구체적 작업으로 바꿨는가?',
  '데이터 컬럼·단위·정상범위·판정 기준을 프롬프트에 적었는가?',
  '받을 결과 형식(코드만/표/분량/언어)을 지정했는가?',
  '기밀·개인정보를 비식별화·범위화했는가?',
  '결과를 검증할 방법(샘플 확인·전문가 검토)을 정해 두었는가?',
];

const PromptEvaluatePage = (): ReactElement => {
  return (
    <>
      <SEOHead title="프롬프트 평가" description="좋은 프롬프트를 가려내는 평가 기준과 루브릭 — PTCF 기반 자가 점검과 AI 결과 검증" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Prompt Evaluation</div>
          <h2>프롬프트 평가</h2>
          <p>좋은 프롬프트는 '느낌'이 아니라 기준으로 가립니다. PTCF를 토대로 프롬프트와 AI 결과를 점검하는 법을 다룹니다.</p>
        </div>
      </section>

      {/* 왜 평가하나 */}
      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 왜 평가하나</div>
            <h2 className="section-title-ed">프롬프트를 <span className="accent">평가</span>하는 이유</h2>
          </div>
          <p style={{ maxWidth: '760px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            같은 데이터라도 프롬프트의 품질에 따라 결과가 크게 달라집니다. 막연한 프롬프트는 모호한 답을,
            구조화된 프롬프트는 재현 가능한 결과를 만듭니다. 프롬프트 평가는 <strong>다시 쓰기 전에 무엇을 고쳐야 할지</strong>를
            알려주는 점검 도구이며, AI의 결과를 그대로 믿지 않고 <strong>검증하는 습관</strong>의 출발점입니다.
          </p>
        </div>
      </section>

      {/* 평가 기준 */}
      <section className="section-ed" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 평가 기준</div>
            <h2 className="section-title-ed">5가지 <span className="accent">평가 항목</span></h2>
            <div className="section-meta">PTCF + 재현성 + 안전·윤리</div>
          </div>
          <div className="pillars">
            {CRITERIA.map((c, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-num">{c.n}</div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 루브릭 */}
      <section className="section-ed" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 채점 루브릭</div>
            <h2 className="section-title-ed">0 ~ 2점 <span className="accent">루브릭</span></h2>
            <div className="section-meta">항목별 채점 · 합계 10점 만점</div>
          </div>
          <div style={{ overflowX: 'auto', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '720px', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-soft, #f5f6f8)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>평가 항목</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>0점</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>1점</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>2점</th>
                </tr>
              </thead>
              <tbody>
                {RUBRIC.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', fontWeight: 700, color: 'var(--primary-blue-light)' }}>{r.c}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', color: 'var(--text-secondary)' }}>{r.p0}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', color: 'var(--text-secondary)' }}>{r.p1}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)', color: 'var(--text-secondary)' }}>{r.p2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '12px', color: 'var(--text-light)', fontSize: '13px' }}>
            합계 <strong>8점 이상</strong>이면 바로 사용, <strong>5~7점</strong>이면 약한 항목을 보완해 재작성, <strong>4점 이하</strong>면 PTCF부터 다시 설계하세요.
          </p>
        </div>
      </section>

      {/* Before → After */}
      <section className="section-ed" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 개선 예시</div>
            <h2 className="section-title-ed">Before <span className="accent">→</span> After</h2>
            <div className="section-meta">화학 공정 데이터 분석 맥락</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '24px', background: 'var(--bg-white)' }}>
              <div style={{ fontWeight: 700, color: '#C8102E', marginBottom: '10px' }}>✕ Before · 2점 / 10점</div>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
{`이 데이터 분석해줘.`}
              </pre>
              <p style={{ marginTop: '14px', fontSize: '13px', color: 'var(--text-light)' }}>
                역할·맥락·형식·기준 모두 없음 → 무엇을 받을지 예측 불가, 재현 불가.
              </p>
            </div>
            <div style={{ border: '1px solid var(--primary-blue-light)', borderRadius: 'var(--radius-lg)', padding: '24px', background: 'var(--bg-white)' }}>
              <div style={{ fontWeight: 700, color: '#00855A', marginBottom: '10px' }}>✓ After · 10점 / 10점</div>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
{`[Persona] 너는 화학 공정 데이터 분석가야.
[Task] batch.csv의 결측을 변수별 평균으로
 대체하고, pH가 6.5~7.5를 벗어난 행을
 이상치로 표시해줘. 수율 90% 이상은 '양품',
 미만은 '불량' 열을 추가해줘.
[Context] 컬럼은 반응온도, pH, 체류시간,
 수율, 품질판정이야.
[Format] 한글 주석 포함 pandas 코드로만 출력.`}
              </pre>
              <p style={{ marginTop: '14px', fontSize: '13px', color: 'var(--text-light)' }}>
                PTCF·기준·형식이 모두 명시 → 누가 실행해도 같은 결과(재현성).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 결과 평가 + 자가 점검 */}
      <section className="section-ed" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div>
              <div className="section-head" style={{ marginBottom: '16px' }}>
                <div className="section-num">&mdash; 결과 검증</div>
                <h3 className="section-title-ed" style={{ fontSize: '22px' }}>AI <span className="accent">결과</span> 평가</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {OUTPUT_CHECK.map((x, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--primary-blue-light)', flexShrink: 0 }}>☐</span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-head" style={{ marginBottom: '16px' }}>
                <div className="section-num">&mdash; 자가 점검</div>
                <h3 className="section-title-ed" style={{ fontSize: '22px' }}>프롬프트 <span className="accent">자가 점검</span></h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {SELF_CHECK.map((x, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--primary-blue-light)', flexShrink: 0 }}>☐</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromptEvaluatePage;
