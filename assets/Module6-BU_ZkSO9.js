import{u as o,j as e}from"./index-C8ZZsA0J.js";import{G as n}from"./GuidePage-C_-j7e1c.js";import"./SEOHead-D4fSRqFd.js";const i={id:"module6-viz",icon:"fa-chart-line",title:"모듈 6 · AI 도구 활용 분석 결과 시각화",titleEn:"Module 6 · Visualizing Results with AI Tools",sections:[{title:"NotebookLM으로 지식 구조화 [프로젝트]",titleEn:"Structuring Knowledge with NotebookLM [Project]",content:`이번 모듈은 강의가 아니라 **마무리 프로젝트**입니다. 앞선 다섯 모듈에서 만든 분석 결과(코드·표·차트·인사이트)를 **하나의 작품**으로 묶어냅니다. 첫 단계는 **NotebookLM**으로 흩어진 자료를 "검색 가능한 지식"으로 구조화하는 것입니다.

> **NotebookLM이란?** 내가 올린 자료만을 근거로 답하는 구글의 AI 노트 도구입니다. 인터넷 전체가 아니라 "내 자료"에 갇혀 있기 때문에 **환각(없는 사실을 지어내는 현상)이 크게 줄어듭니다.**

### NotebookLM 활용 흐름 3단계

\`① 소스 업로드 → ② 근거 기반 Q&A → ③ 스튜디오 생성\`

**① 소스 업로드 — 내 자료를 모은다**

분석 과정에서 만든 모든 산출물을 하나의 노트북에 올립니다.

- 분석 코드 (Colab 노트북을 PDF로 내보내기 또는 \`.py\`)
- 원본·정제 데이터 (CSV)
- 모듈별 분석 리포트·메모
- 참고 문서 (공정 매뉴얼 PDF, 품질 기준서 등)

**② 근거 기반 Q&A — 내 자료에게 묻는다**

업로드한 자료만을 근거로 질문하고 요약합니다. 답변마다 **어느 소스의 몇 번째 부분**에서 나왔는지 출처가 표시되어, 곧바로 검증할 수 있습니다.

- "모듈5 품질 예측 모델의 정확도와 가장 중요한 변수는?"
- "고객 리뷰에서 가장 많이 나온 불만 3가지를 출처와 함께 정리해줘"
- "이 분석 전체를 비전공자도 이해할 5문장으로 요약해줘"

**③ 스튜디오 생성 — 자료를 산출물로 바꾼다**

NotebookLM 스튜디오는 업로드한 자료를 자동으로 다양한 형태의 산출물로 변환합니다.

| 산출물 | 무엇인가 | 언제 쓰나 |
|--------|----------|-----------|
| **슬라이드·브리핑 문서** | 분석 핵심을 발표 자료로 자동 정리 | 경영진·팀 보고 |
| **마인드맵** | 개념·결과의 관계를 한 장으로 | 전체 구조 파악·교육 |
| **오디오 개요** | 두 진행자가 대화하듯 요약(팟캐스트형) | 이동 중 복습·공유 |
| **FAQ·학습 가이드** | 예상 질문과 답을 Q&A로 | 팀 온보딩·공유 |

> **프로젝트 미션 1**: 다섯 모듈의 산출물을 NotebookLM에 업로드하고, ①핵심 요약 Q&A 3개 ②마인드맵 1장 ③오디오 개요 1개를 생성해 보세요. 이것이 우리 분석의 "지식 베이스"가 됩니다.`,contentEn:`This module is not a lecture but a **final project**: bundling the analysis results from the previous five modules (code, tables, charts, insights) into a single deliverable. The first step is using **NotebookLM** to structure scattered materials into "searchable knowledge."

**What is NotebookLM?** It is Google's AI note tool that answers grounded only in the materials you upload. Because it is confined to "your data" rather than the whole internet, **hallucination is greatly reduced.**

The flow has three stages: \`① Upload sources → ② Grounded Q&A → ③ Studio generation\`. Upload everything you produced (analysis code, raw and cleaned CSVs, per-module reports, reference manuals), then ask questions answered only from your own materials with citations you can verify immediately.

Studio then converts your materials into deliverables: **slides/briefing docs** (analysis summarized as presentation material), a **mind map** (concept and result relationships on one page), an **audio overview** (a two-host conversational summary, podcast-style), and **FAQ/study guides** (anticipated Q&A for team sharing). Project mission: upload all five modules' outputs and generate summary Q&A, a mind map, and an audio overview — this becomes our analysis knowledge base.`},{title:"최종 분석 리포트 (Gemini Canvas) [프로젝트]",titleEn:"Final Analysis Report (Gemini Canvas) [Project]",content:`NotebookLM으로 지식을 구조화했다면, 이제 **Gemini Canvas**로 모든 분석을 **하나의 완결된 리포트**로 통합합니다. Canvas는 채팅을 넘어 **문서를 함께 편집**하는 작업 공간으로, 초안을 만들고 부분을 골라 다시 쓰며 다듬을 수 있습니다.

### 최종 리포트 표준 구조

| 섹션 | 담을 내용 |
|------|-----------|
| **1. 개요(Executive Summary)** | 무엇을·왜 분석했고 결론은 무엇인가 (한 페이지) |
| **2. 데이터** | 출처·기간·규모·정제 과정 요약 |
| **3. 분석** | 통계·시각화·모델링 결과 (차트 포함) |
| **4. 인사이트** | 데이터가 말하는 핵심 발견 3~5가지 |
| **5. 제언(Action)** | 현장에서 무엇을 바꿀 것인가 |

> **핵심**: 경영진은 4번(인사이트)과 5번(제언)을 먼저 읽습니다. **결론을 맨 앞에** 두세요(역피라미드 구조).

### Canvas 프롬프트 작성법 (PTCF 응용)

\`\`\`
[Persona] 너는 화학 제조 현장의 데이터 분석 컨설턴트야.
[Task] 아래 분석 결과들을 임원 보고용 최종 리포트로 통합해줘.
[Context] 5개 모듈 산출물: ①공정 품질 예측 모델(정확도·주요 변수)
  ②고객 리뷰 분석(불만 Top3) ③정제·통계 결과 …
[Format] 개요·데이터·분석·인사이트·제언 5개 섹션, 각 섹션 제목과
  불릿, 표 1개 이상. 전문용어는 괄호로 쉽게 풀어줘.
\`\`\`

AI가 초안을 만들면, **현장 맥락**을 더해 완성합니다. "이 불량은 야간 교대조 시점과 겹친다", "이 원료 로트는 신규 공급처다" 같은 **현장만 아는 정보**가 리포트를 살아있게 만듭니다.

### 문서 → 앱 전환

Canvas의 강력한 점은 완성된 리포트를 **버튼 하나로 인터랙티브 앱(웹 미리보기)으로 전환**할 수 있다는 것입니다. 정적인 보고서가 클릭하고 탐색하는 도구로 바뀌며, 이는 다음 섹션의 대시보드로 이어집니다.

> **프로젝트 미션 2**: 5개 섹션 구조에 맞춰 Canvas로 최종 리포트 초안을 생성하고, 현장 맥락 2~3개를 직접 추가해 완성하세요.`,contentEn:`With knowledge structured in NotebookLM, **Gemini Canvas** integrates all analysis into **one complete report**. Canvas is a workspace for co-editing documents — you generate a draft, select parts, and rewrite to refine.

Standard report structure: **1. Executive Summary** (what/why and the conclusion, one page), **2. Data** (source, period, scale, cleaning), **3. Analysis** (statistics, visualization, modeling with charts), **4. Insights** (3–5 key findings), **5. Action** (what to change on the floor). Executives read sections 4 and 5 first, so **put the conclusion up front** (inverted pyramid).

Write the Canvas prompt with PTCF: a persona (data-analysis consultant), task (integrate results into an executive report), context (the five modules' outputs), and format (five sections with titles, bullets, and at least one table). After AI drafts it, add **field context only you know** — "this defect overlaps the night shift," "this lot is from a new supplier" — to make the report come alive.

Canvas can also convert a finished report into an **interactive app (web preview)** with one click, turning a static report into a clickable tool — leading into the dashboard in the next section. Mission: generate the five-section draft and finish it with two or three pieces of field context.`},{title:"앱 대시보드 기획 & 제작 [프로젝트]",titleEn:"Planning & Building an App Dashboard [Project]",content:`리포트가 "지난 일을 설명하는 문서"라면, 대시보드는 **"지금을 보여주는 운영 도구"**입니다. 분석을 1회성 보고에서 **매일 보는 화면**으로 전환하는 단계입니다.

### 대시보드 기획 4단계

\`① KPI 선정 → ② 레이아웃 기획 → ③ 차트·필터 구성 → ④ AI 시안 생성\`

**① 핵심 지표(KPI) 선정**

화면에 올릴 숫자는 "보면 행동이 바뀌는" 지표여야 합니다. 너무 많으면 아무도 안 봅니다. **3~6개**로 압축하세요.

**② 화면 레이아웃 기획**

> 중요한 것을 **왼쪽 위(F자 시선)**에 둡니다. 상단엔 핵심 KPI 카드, 가운데엔 추이 차트, 아래엔 상세 표 — 위에서 아래로 "요약 → 추세 → 상세" 흐름.

**③ 차트·필터 구성**

- 추이는 **선 그래프**, 비교는 **막대 그래프**, 비율은 **도넛**
- 관리도(상·하한선)로 정상 범위를 시각적으로 표시
- 기간·라인·제품 **필터**로 원하는 구간만 보기

**④ AI로 대시보드 시안 생성**

Canvas/Gemini에 레이아웃과 KPI를 설명하면 대시보드 시안(HTML 앱)을 만들어 줍니다.

### 화학 트랙 예시 — 품질 모니터링 대시보드

모듈5의 공정 품질 예측을 **운영 화면**으로 옮긴 예시입니다.

| 영역 | 구성 | 의미 |
|------|------|------|
| 상단 KPI | 오늘 예상 수율 · 불량 위험 배치 수 · 평균 pH | 한눈에 현재 상태 |
| 관리도 | 반응 온도·체류시간·pH 관리도(상하한선) | 정상 범위 이탈 즉시 포착 |
| 추이 | 최근 7일 수율 추이 선그래프 | 추세 방향 확인 |
| **경고** | 모델이 예측한 **불량 위험 배치 빨간 배지** | 사전 조치 유도 |

> 이 화면 하나면, 현장 관리자는 "지금 어느 배치가 위험한가"를 출근 직후 5초 만에 파악합니다. 분석이 **의사결정 도구**가 되는 순간입니다.

> **프로젝트 미션 3**: 내 업무의 KPI 3~6개를 정하고, 레이아웃을 스케치한 뒤, AI로 대시보드 시안을 생성하세요.`,contentEn:`If a report "explains what happened," a dashboard is an **operational tool that shows what is happening now** — turning analysis from a one-off report into a **screen you check daily**.

Planning has four steps: \`① Pick KPIs → ② Plan layout → ③ Design charts & filters → ④ Generate AI mockup\`. Choose **3–6 KPIs** that change behavior when seen; too many and no one looks. Place the important things **top-left (F-pattern)**: KPI cards on top, trend charts in the middle, detail tables below — summary, trend, detail from top to bottom. Use line charts for trends, bars for comparison, donuts for ratios, control charts with limits, and filters by period, line, and product. Then describe the layout and KPIs to Canvas/Gemini to generate an HTML dashboard mockup.

Chemistry-track example — a quality-monitoring dashboard built from Module 5's quality prediction: top KPIs (today's expected yield, count of at-risk batches, average pH), control charts for reaction temperature, residence time, and pH, a 7-day yield trend line, and a **red badge warning for batches the model predicts as defect-risk**. With this one screen, a floor manager grasps "which batch is at risk now" within five seconds — the moment analysis becomes a decision tool. Mission: define 3–6 KPIs, sketch a layout, and generate an AI dashboard mockup.`},{title:"최종 프로젝트 산출물 & 6시간 종합 정리",titleEn:"Final Deliverables & 6-Hour Course Wrap-up",content:`프로젝트를 마치면 손에 잡히는 **4가지 산출물**이 남습니다. 이것이 6시간 과정의 결실입니다.

### 최종 산출물 4종

| # | 산출물 | 출처 모듈 | 무엇을 증명하나 |
|---|--------|-----------|-----------------|
| ① | **공정 품질 예측 모델 + 성능 리포트** | 모듈 5 | 데이터로 품질을 예측할 수 있다 |
| ② | **고객 리뷰 분석 & 개선 제안 리포트** | 모듈 4 | 비정형 텍스트도 분석할 수 있다 |
| ③ | **NotebookLM 지식맵·발표 자료** | 모듈 6 | 분석을 지식으로 구조화·공유한다 |
| ④ | **운영용 앱 대시보드 기획안** | 모듈 6 | 분석을 운영 도구로 전환한다 |

### 6시간 여정 요약

\`\`\`
M1  AX·데이터 문해력        — 왜 데이터인가, 어떤 흐름인가
M2  Colab·PTCF              — 클라우드 분석 환경 + 좋은 프롬프트
M3  정제·통계·시각화         — 지저분한 데이터를 그래프로
M4  고객 리뷰 분석          — 텍스트(비정형)에서 인사이트
M5  화학공정 품질 예측       — 머신러닝으로 품질 예측
M6  시각화·프로젝트          — 지식화·리포트·대시보드로 완성
\`\`\`

> 1번(왜)에서 출발해 6번(완성된 산출물)에 도착했습니다. 데이터를 **정의하고 → 정제하고 → 분석하고 → 모델링하고 → 전달**하는 한 바퀴를 직접 돌았습니다.

### 이 과정을 마치면 할 수 있는 것

- [x] 현장의 막연한 문제를 **데이터로 정의된 질문**으로 바꾼다
- [x] Colab + Gemini로 **코딩 없이** 데이터를 정제·분석한다
- [x] PTCF 프롬프트로 AI에게 정확한 분석을 시킨다
- [x] 통계·시각화로 **패턴과 이상치**를 찾는다
- [x] 고객 리뷰 같은 **텍스트 데이터**를 분석한다
- [x] 공정 데이터로 간단한 **품질 예측 모델**을 만든다
- [x] 결과를 **리포트·발표 자료·대시보드**로 전달한다`,contentEn:`Completing the project leaves **four tangible deliverables** — the fruit of the six-hour course.

The four outputs: ① a **process quality prediction model + performance report** (Module 5, proving you can predict quality from data); ② a **customer review analysis & improvement report** (Module 4, proving you can analyze unstructured text); ③ a **NotebookLM knowledge map & presentation** (Module 6, structuring and sharing analysis as knowledge); and ④ an **operational app dashboard plan** (Module 6, converting analysis into an operational tool).

The six-hour journey: M1 AX and data literacy (why data, what flow), M2 Colab and PTCF (cloud environment and good prompts), M3 cleaning, statistics, visualization (messy data into graphs), M4 customer review analysis (insight from unstructured text), M5 chemical process quality prediction (machine learning), and M6 visualization and project (completion via knowledge, report, dashboard). Starting from "why," you arrived at finished deliverables, running one full loop: define → clean → analyze → model → deliver.

By the end you can: turn a vague field problem into a data-defined question, clean and analyze data with Colab + Gemini without coding, use PTCF prompts for accurate analysis, find patterns and outliers with statistics and visualization, analyze text data like reviews, build a simple quality-prediction model, and deliver results as reports, presentations, and dashboards.`},{title:"현업 적용 가이드 & 다음 단계",titleEn:"Applying It at Work & Next Steps",content:`과정이 끝나면 가장 흔한 질문은 "그래서 내 업무에 어떻게 적용하나"입니다. 거창하게 시작하지 마세요. **작게 시작해 한 번 성공**하는 것이 핵심입니다.

### 내 업무에 바로 적용하는 4원칙

| 원칙 | 실천 |
|------|------|
| **문제를 데이터로 정의** | "불량이 많다" → "A라인 야간조 코팅 불량률이 2배" |
| **작은 데이터부터** | 거대한 DB 말고 **사내 엑셀·리뷰 한 파일**로 시작 |
| **AI를 분석 파트너로** | PTCF로 명확히 지시하고 초안을 받는다 |
| **사람이 최종 검증** | AI 결과는 항상 현장 상식과 출처로 검증 |

> 첫 분석은 **30분 안에 끝나는 작은 질문**으로 시작하세요. "지난달 우리 팀 데이터에서 가장 눈에 띄는 것 하나는?" 한 번의 작은 성공이 다음 분석을 부릅니다.

### 다음 학습 로드맵

이 과정은 **출발점**입니다. 더 깊이 가고 싶다면 이 순서를 추천합니다.

1. **pandas·시각화 심화** — \`matplotlib\`, \`plotly\`로 직접 차트를 다루기
2. **머신러닝 기초** — 분류·회귀, 학습/검증 분리, 평가지표(정확도·F1·RMSE)
3. **시계열·예지보전** — 센서 데이터의 추세·이상탐지, 고장 사전 예측
4. **BI 대시보드** — Looker Studio·Power BI로 실시간 운영 대시보드
5. **AI 협업 워크플로우** — 분석 자동화, 에이전트로 반복 작업 위임

> **추천 경로**: 당장은 1·2번(pandas·ML 기초)이 가장 실용적입니다. 현장이 시계열 센서 데이터 중심이라면 3번을, 보고가 잦다면 4번을 우선하세요.

\`\`\`
지금(이 과정)  →  pandas·ML 기초  →  도메인 특화(시계열/BI)  →  자동화·에이전트
\`\`\``,contentEn:`The most common question after the course is "how do I apply this to my work." Don't start big — the key is to **start small and succeed once.**

Four principles for immediate application: **define problems with data** ("many defects" → "Line A night shift has double the coating defect rate"), **start with small data** (one in-house spreadsheet or review file, not a giant database), **use AI as an analysis partner** (instruct clearly with PTCF and get a draft), and **let humans do the final check** (always verify AI output against field common sense and sources). Begin with a small question you can answer in 30 minutes — one small success invites the next.

This course is a **starting point**. A recommended roadmap: (1) deeper pandas and visualization (\`matplotlib\`, \`plotly\`), (2) machine-learning basics (classification, regression, train/validation split, metrics like accuracy, F1, RMSE), (3) time series and predictive maintenance (trend and anomaly detection on sensor data), (4) BI dashboards (Looker Studio, Power BI for real-time operations), and (5) AI collaboration workflows (automating analysis and delegating repetitive work to agents).

Right now, steps 1 and 2 are the most practical; prioritize step 3 if your field is sensor-time-series heavy, or step 4 if you report frequently. The path: now → pandas/ML basics → domain specialization (time series/BI) → automation and agents.`},{title:"모듈 6 정리 & 체크리스트",titleEn:"Module 6 Summary & Checklist",content:`### 핵심 요약

이 마무리 프로젝트에서는 분석 결과를 **지식 → 리포트 → 운영 도구**로 전달하는 마지막 한 바퀴를 돌았습니다.

- **NotebookLM 지식화**: 내 자료만 근거로 Q&A·요약하고(환각↓), 스튜디오로 슬라이드·마인드맵·오디오·FAQ를 자동 생성합니다.
- **Gemini Canvas 리포트**: 5개 모듈 결과를 개요·데이터·분석·인사이트·제언 5섹션으로 통합하고, 현장 맥락을 더해 완성한 뒤 앱으로 전환합니다.
- **앱 대시보드**: KPI 선정 → 레이아웃 → 차트·필터 → AI 시안 순으로, 분석을 매일 보는 운영 화면(예: 품질 모니터링 대시보드)으로 바꿉니다.
- **최종 산출물 4종**: 품질 예측 모델·리뷰 분석 리포트·NotebookLM 지식맵·대시보드 기획안.
- **현업 적용**: 작게 시작해 한 번 성공하고, 사람이 최종 검증합니다.

### 프로젝트 체크리스트

- [ ] NotebookLM에 5개 모듈 산출물을 **소스 업로드**했다
- [ ] 근거 기반 **Q&A 3개** 이상 수행하고 출처를 확인했다
- [ ] 스튜디오로 **마인드맵·오디오 개요** 등 산출물을 생성했다
- [ ] Gemini Canvas로 **5섹션 최종 리포트**를 작성했다
- [ ] 현장 맥락 2~3개를 더해 리포트를 완성했다
- [ ] 업무 **KPI 3~6개**를 정하고 대시보드를 기획했다
- [ ] AI로 **대시보드 시안**을 생성했다
- [ ] **최종 산출물 4종**을 한 폴더에 정리했다

> 이제 데이터는 '읽는 것'이 아니라 '함께 만드는 것'입니다. 여러분은 현장 지식에 데이터 문해력과 AI 활용력을 더한, 가장 강력한 분석가가 되었습니다.`,contentEn:`### Summary

In this final project you ran the last loop — delivering analysis as **knowledge → report → operational tool.**

- **NotebookLM knowledge**: Q&A and summaries grounded only in your materials (less hallucination), with Studio auto-generating slides, mind maps, audio, and FAQs.
- **Gemini Canvas report**: integrate five modules into five sections (overview, data, analysis, insights, action), finish with field context, and convert to an app.
- **App dashboard**: pick KPIs, plan layout, design charts and filters, generate an AI mockup — turning analysis into a daily operational screen (e.g., a quality-monitoring dashboard).
- **Four deliverables**: quality prediction model, review analysis report, NotebookLM knowledge map, dashboard plan.
- **At work**: start small, succeed once, and let humans do the final check.

### Project checklist

- [ ] Uploaded all five modules' outputs as NotebookLM sources
- [ ] Ran 3+ grounded Q&A and checked citations
- [ ] Generated Studio outputs (mind map, audio overview)
- [ ] Wrote a 5-section final report in Gemini Canvas
- [ ] Finished it with 2–3 pieces of field context
- [ ] Defined 3–6 work KPIs and planned a dashboard
- [ ] Generated an AI dashboard mockup
- [ ] Organized all four deliverables in one folder

Data is no longer something you "read" but something you "build together." With domain knowledge plus data literacy and AI skills, you have become the strongest analyst.`}]};function d(){const{language:a}=o(),t=a==="ko";return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header-ed",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"eyebrow",children:"Module 06"}),e.jsx("h2",{children:t?"AI 도구 활용 분석 결과 시각화":"Visualizing Results with AI Tools"}),e.jsx("p",{children:t?"NotebookLM 지식화 · Canvas 리포트 · 앱 대시보드 · 1.0H":"NotebookLM, Canvas report, app dashboard · 1.0H"})]})}),e.jsx(n,{seoTitle:"모듈 6 · AI 도구 활용 분석 결과 시각화",seoTitleEn:"Module 6 · Visualizing Results with AI Tools",seoDescription:"NotebookLM으로 분석 결과를 지식 구조화하고, Gemini Canvas로 최종 분석 리포트와 앱 대시보드를 제작하는 프로젝트 강의안",path:"/module6",dataFiles:[i]})]})}export{d as default};
