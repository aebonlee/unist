import { useLanguage } from '../contexts/LanguageContext';
import GuidePage from '../components/GuidePage';

const module3Dashboard = {
  id: 'module3-dashboard',
  icon: 'fa-gauge-high',
  title: '모듈 3 · 실무형 대시보드 구축',
  titleEn: 'Module 3 · Building Practical Dashboards',
  sections: [
    {
      title: '표(Table)를 직관적으로 — 조건부 서식 · 스파크라인 · 데이터 막대',
      titleEn: 'Make Tables Intuitive — Conditional Formatting, Sparklines, Data Bars',
      content: `대시보드를 만들기 전에, **표 자체를 한눈에 읽히게** 만드는 인-셀(in-cell) 시각화 기법부터 익힙니다. 차트를 추가하지 않고도 셀 안에서 값의 크기·추세·상태를 표현할 수 있습니다.

### 1. 조건부 서식 (Conditional Formatting)

값의 크기나 조건에 따라 셀 색·아이콘을 자동으로 바꿉니다.

| 종류 | 용도 | 만드는 단계 |
|------|------|------------|
| 색조(Color Scales) | 값의 높낮이를 그라데이션으로 | 범위 선택 → 홈 → 조건부 서식 → 색조 → 2색/3색 선택 |
| 아이콘 집합(Icon Sets) | 신호등·화살표로 상태 구분 | 범위 선택 → 조건부 서식 → 아이콘 집합 |
| 규칙(Rules) | 특정 조건(상위 10%, 중복 등) 강조 | 조건부 서식 → 셀 강조 규칙 / 상위·하위 규칙 |

활용 예: 부서별 달성률 열에 3색 색조를 적용하면, 미달성(빨강)→목표(녹색) 분포가 즉시 보입니다.

### 2. 데이터 막대 (Data Bars)

셀 안에 막대그래프를 그려 값의 상대 크기를 표시합니다.

1. 수치 범위를 선택합니다.
2. 홈 → 조건부 서식 → **데이터 막대**를 선택합니다.
3. 그라데이션/단색 채우기를 고릅니다.
4. (선택) **규칙 관리 → 막대만 표시**로 숫자를 숨기면 더 깔끔합니다.

### 3. 스파크라인 (Sparklines)

한 셀 안에 들어가는 미니 차트로, 행마다 추세를 보여줍니다.

| 유형 | 적합한 데이터 | 예시 |
|------|--------------|------|
| 꺾은선(Line) | 시간에 따른 추세 | 월별 매출 흐름 |
| 열(Column) | 기간별 크기 비교 | 분기별 비용 |
| 승패(Win/Loss) | 양수·음수(달성/미달) | 목표 대비 증감 |

만드는 단계:

1. 스파크라인을 넣을 **빈 셀**을 선택합니다.
2. 삽입 → 스파크라인 → 종류(꺾은선/열/승패)를 선택합니다.
3. **데이터 범위**(예: 월별 12개 셀)를 지정합니다.
4. 디자인 탭에서 높은 점·낮은 점·표식을 강조합니다.

> 인-셀 시각화의 목적은 "값을 읽지 않고도 패턴이 보이게" 하는 것입니다. 색·아이콘은 2~3종 이내로 절제하세요. 과하면 오히려 읽기 어려워집니다.`,
      contentEn: `Before building dashboards, master in-cell visualization that makes the table itself readable at a glance.

### 1. Conditional Formatting

| Type | Use | Steps |
|------|-----|-------|
| Color Scales | Show high/low as gradient | Select range → Home → Conditional Formatting → Color Scales |
| Icon Sets | Status via traffic lights/arrows | Conditional Formatting → Icon Sets |
| Rules | Highlight conditions (top 10%, duplicates) | Highlight Cells / Top-Bottom Rules |

### 2. Data Bars

1. Select numeric range. 2. Home → Conditional Formatting → Data Bars. 3. Pick gradient/solid fill. 4. Optionally show "Bar only".

### 3. Sparklines

| Type | Best for |
|------|----------|
| Line | Trend over time |
| Column | Size comparison by period |
| Win/Loss | Positive/negative (hit/miss) |

Steps: select an empty cell → Insert → Sparklines → choose type → set data range → emphasize high/low points.

> Goal: make patterns visible without reading values. Keep colors/icons to 2-3 kinds.`,
    },
    {
      title: '대시보드 기획 — KPI 정의와 레이아웃 설계',
      titleEn: 'Dashboard Planning — Defining KPIs and Layout Design',
      content: `좋은 대시보드는 **잘 그린 차트의 모음**이 아니라 **의사결정을 돕는 한 장의 화면**입니다. 차트를 그리기 전에 기획이 먼저입니다.

### 좋은 대시보드의 3원칙

1. **한 화면 원칙** — 스크롤 없이 한 화면(또는 한 출력 페이지)에 핵심을 담습니다.
2. **핵심 KPI 우선** — 가장 중요한 지표를 상단·좌측에 크게 배치합니다.
3. **시선 흐름 활용** — 사람의 눈은 **F자 / Z자** 패턴으로 움직입니다. 좌상단 → 우상단 → 하단 순으로 중요도를 배치합니다.

### KPI란?

KPI(Key Performance Indicator)는 목표 달성 정도를 수치로 나타내는 핵심 지표입니다. "측정할 수 있고, 목표가 있고, 행동으로 이어지는" 지표여야 합니다.

### 부서별 KPI 예시

| 부서 | 핵심 KPI | 보조 KPI |
|------|----------|----------|
| 영업 | 월 매출액, 목표 달성률 | 신규 고객 수, 평균 거래액 |
| 연구(R&D) | 프로젝트 진척률, 일정 준수율 | 특허·논문 건수, 예산 소진율 |
| 인사(HR) | 채용 충원율, 이직률 | 교육 이수율, 직원 만족도 |

### 와이어프레임 레이아웃 설계 단계

1. **목적 정의** — "누가, 무엇을, 왜 보는가"를 한 문장으로 적습니다.
2. **KPI 선정** — 핵심 3~5개로 압축합니다(많을수록 나쁩니다).
3. **영역 분할** — 상단 KPI 카드 / 중앙 추세 차트 / 하단 상세 표로 구역을 나눕니다.
4. **종이 스케치** — 셀에 그리기 전에 종이/슬라이드에 박스로 배치를 그립니다.
5. **그리드 설정** — 워크시트 눈금선을 끄고, 셀 너비를 정렬해 격자 레이아웃을 잡습니다.

> KPI는 "많이 보여주기"가 아니라 "골라 보여주기"입니다. 화면에 지표가 10개 넘으면 아무것도 강조되지 않은 것과 같습니다.`,
      contentEn: `A good dashboard is not a collection of charts but a single screen that supports decisions.

### Three Principles

1. **One screen** — fit the essentials without scrolling.
2. **KPIs first** — place the most important metric large, top-left.
3. **Reading flow** — eyes move in F/Z patterns; arrange by importance accordingly.

### KPI Examples by Department

| Dept | Core KPI | Secondary |
|------|----------|-----------|
| Sales | Monthly revenue, target rate | New customers, avg deal |
| R&D | Project progress, on-time rate | Patents/papers, budget used |
| HR | Hiring fill rate, turnover | Training completion, satisfaction |

### Wireframe Steps

1. Define purpose. 2. Pick 3-5 KPIs. 3. Split zones (KPI cards / trend charts / detail tables). 4. Sketch on paper. 5. Set grid (hide gridlines, align cells).

> KPIs are about "selecting", not "showing everything". More than 10 metrics emphasizes nothing.`,
    },
    {
      title: '[실습] 피벗 차트 · 슬라이서 · 시간 표시 막대 연동',
      titleEn: '[Practice] Pivot Charts, Slicers & Timeline Integration',
      content: `피벗테이블과 슬라이서를 연결하면 클릭만으로 여러 차트가 동시에 바뀌는 **인터랙티브 대시보드**가 됩니다.

### 1. 피벗테이블 → 피벗 차트 만들기

1. 원본 데이터(머리글이 있는 표) 안의 셀을 클릭합니다.
2. 삽입 → **피벗 차트**(또는 피벗테이블 후 분석 → 피벗 차트)를 선택합니다.
3. 필드 목록에서 **축(범주)**, **값**, **범례**에 필드를 끌어다 놓습니다.
   - 예: 축=월, 값=합계:매출, 범례=부서
4. 차트 종류(묶은 세로 막대/꺾은선 등)를 목적에 맞게 바꿉니다.

### 2. 슬라이서 삽입과 여러 차트 연결

슬라이서는 클릭형 필터 버튼입니다.

1. 피벗테이블/차트를 선택합니다.
2. 분석(또는 삽입) → **슬라이서 삽입**을 선택합니다.
3. 필터로 쓸 필드(예: 부서, 지역)를 체크합니다.
4. 슬라이서 우클릭 → **보고서 연결(Report Connections)**에서 **여러 피벗테이블을 동시에 연결**합니다.

| 항목 | 효과 |
|------|------|
| 슬라이서 1개 → 차트 여러 개 연결 | 한 번 클릭으로 모든 차트가 같은 필터로 갱신 |
| 다중 선택 버튼 | Ctrl 없이 여러 항목 동시 선택 |

### 3. 시간 표시 막대 (Timeline)

날짜 필드 전용 슬라이더형 기간 필터입니다.

1. 피벗테이블 선택 → 분석 → **시간 표시 막대 삽입**.
2. 날짜 필드를 선택합니다.
3. 막대 상단에서 **연/분기/월/일** 단위를 전환합니다.
4. 슬라이더를 드래그해 기간(예: 1~6월)을 선택하면 연결된 차트가 즉시 갱신됩니다.

> 슬라이서·시간 표시 막대는 같은 데이터 모델을 쓰는 피벗에만 연결됩니다. 차트들이 함께 움직이지 않으면 "보고서 연결" 설정을 먼저 확인하세요.`,
      contentEn: `Connecting pivot tables with slicers turns a static report into an interactive dashboard.

### 1. PivotTable → PivotChart

1. Click inside the source table. 2. Insert → PivotChart. 3. Drag fields to Axis/Values/Legend (e.g., Axis=Month, Values=Sum of Sales, Legend=Dept). 4. Choose chart type.

### 2. Slicers Linked to Multiple Charts

1. Select pivot. 2. Insert → Slicer. 3. Check filter fields (Dept, Region). 4. Right-click → Report Connections to link multiple pivots at once.

### 3. Timeline

1. Select pivot → Analyze → Insert Timeline. 2. Pick date field. 3. Toggle Year/Quarter/Month/Day. 4. Drag the slider to filter a period; linked charts update instantly.

> Slicers/timelines only connect to pivots on the same data model. If charts don't move together, check Report Connections.`,
    },
    {
      title: '[실습] 자동 갱신되는 리포트 템플릿 만들기',
      titleEn: '[Practice] Building Auto-Refreshing Report Templates',
      content: `데이터가 늘거나 바뀔 때마다 손으로 범위를 고치는 일은 피해야 합니다. **동적 범위 + 새로고침 + 동적 참조**로 한 번 만들면 계속 쓰는 템플릿을 구성합니다.

### 1. 동적 범위 만들기

| 방법 | 단계 | 장점 |
|------|------|------|
| 표(엑셀 표) | 데이터 선택 → \`Ctrl + T\` → "머리글 포함" 체크 | 행 추가 시 표·피벗 범위가 자동 확장 |
| 이름 정의 | 수식 → 이름 관리자 → \`OFFSET\`/\`INDEX\` 기반 범위 등록 | 차트·수식에서 이름으로 참조 |

표로 만들면 \`표1[매출]\`처럼 **구조적 참조**가 가능해 수식이 읽기 쉬워집니다.

### 2. 원본 갱신 시 새로고침

1. 원본 표에 새 데이터를 붙여 넣습니다(표라면 자동 확장).
2. 데이터 → **모두 새로 고침**(또는 \`Alt + F5\`)으로 피벗·연결을 갱신합니다.
3. 외부 데이터 연결은 연결 속성에서 **파일 열 때 새로 고침**을 켭니다.

### 3. KPI 카드에 GETPIVOTDATA 연동

피벗 값을 대시보드 카드 셀에 직접 끌어옵니다. 피벗 셀을 \`=\`로 참조하면 자동으로 함수가 생성됩니다.

    =GETPIVOTDATA("매출", $A$3, "부서", "영업", "월", 6)

| 인수 | 의미 |
|------|------|
| "매출" | 가져올 값 필드 |
| \$A\$3 | 피벗테이블의 기준 셀 |
| "부서","영업" | 필터 조건(필드, 값) 쌍 |

이렇게 하면 피벗이 새로고침되어 값이 바뀌어도 **KPI 카드가 자동으로 따라 갱신**됩니다.

### 자동화 마무리 단계

1. 원본 = 표(\`Ctrl + T\`)로 변환합니다.
2. 피벗·차트는 표를 원본으로 지정합니다.
3. KPI 카드는 \`GETPIVOTDATA\`로 연결합니다.
4. "파일 열 때 새로 고침"을 켭니다.
5. 색·레이아웃은 잠그고(시트 보호), 입력 영역만 풀어둡니다.

> \`GETPIVOTDATA\`가 거슬리면 피벗 분석 → 옵션 → "GETPIVOTDATA 생성" 끄기로 일반 참조도 쓸 수 있습니다. 단, 자동 갱신 안정성은 \`GETPIVOTDATA\`가 더 높습니다.`,
      contentEn: `Build a template once and reuse it: dynamic ranges + refresh + dynamic references.

### 1. Dynamic Ranges

| Method | Steps | Benefit |
|--------|-------|---------|
| Excel Table | Select → \`Ctrl + T\` | Range auto-expands on new rows |
| Named Range | Formulas → Name Manager → \`OFFSET\`/\`INDEX\` | Reference by name in charts |

### 2. Refresh on Source Change

1. Paste new rows (tables auto-expand). 2. Data → Refresh All (\`Alt + F5\`). 3. Enable "Refresh on open" for connections.

### 3. KPI Cards with GETPIVOTDATA

    =GETPIVOTDATA("Sales", $A$3, "Dept", "Sales", "Month", 6)

KPI cards auto-update when the pivot refreshes.

### Automation Steps

1. Convert source to a Table. 2. Point pivots/charts at it. 3. Link KPI cards via \`GETPIVOTDATA\`. 4. Enable refresh-on-open. 5. Protect layout, unlock input cells.

> You can disable GETPIVOTDATA generation in PivotTable Options, but it is the most stable for auto-refresh.`,
    },
    {
      title: '[실습] 종합 — 부서 KPI 대시보드 완성',
      titleEn: '[Practice] Capstone — Completing a Department KPI Dashboard',
      content: `1~4단계를 모두 합쳐 **하나의 부서 KPI 모니터링 대시보드**를 완성하는 미니 프로젝트입니다. 영업부 월별 데이터를 예로 진행합니다.

### 단계별 체크리스트

1. **데이터 준비** — 원본을 표(\`Ctrl + T\`)로 변환합니다. (부서·월·매출·목표·달성률 컬럼)
2. **KPI 정의** — 핵심 3개를 고릅니다: 총매출, 목표 달성률, 신규 고객 수.
3. **피벗 구성** — KPI별 피벗테이블을 만들고 \`GETPIVOTDATA\`로 상단 **KPI 카드 3장**을 연결합니다.
4. **추세 차트** — 월별 매출 피벗 차트(꺾은선)와 부서별 비교(묶은 막대)를 배치합니다.
5. **인-셀 시각화** — 상세 표에 달성률 데이터 막대 + 월별 스파크라인을 추가합니다.
6. **컨트롤 연결** — 슬라이서(부서)와 시간 표시 막대(월)를 삽입해 **모든 차트·카드에 보고서 연결**합니다.
7. **레이아웃 정리** — 눈금선 끄기, 카드/차트 정렬, 제목·갱신일자 표시, 시트 보호.

### 대시보드 영역 배치(권장)

| 영역 | 내용 |
|------|------|
| 상단 | KPI 카드 3장(총매출·달성률·신규 고객) |
| 중앙 | 월별 매출 추세(꺾은선) + 부서 비교(막대) |
| 우측 | 슬라이서(부서) · 시간 표시 막대(월) |
| 하단 | 상세 표(데이터 막대 + 스파크라인) |

### 완성 기준

| 기준 | 통과 조건 |
|------|----------|
| 한 화면 | 스크롤 없이 핵심 KPI·차트가 보인다 |
| 인터랙션 | 슬라이서/타임라인 클릭 시 모든 요소가 동시 갱신된다 |
| 자동 갱신 | 원본에 행 추가 후 "모두 새로 고침"만으로 반영된다 |
| 가독성 | 색·아이콘이 절제되고 시선 흐름이 자연스럽다 |

> 막히면 "데이터 → 피벗 → 컨트롤 → 레이아웃" 순서를 지키세요. 레이아웃부터 만들면 데이터 연결이 꼬이기 쉽습니다.`,
      contentEn: `Combine steps 1-4 into one Department KPI monitoring dashboard. Use monthly sales data as an example.

### Checklist

1. Convert source to a Table. 2. Pick 3 KPIs (revenue, target rate, new customers). 3. Build pivots, link 3 KPI cards via \`GETPIVOTDATA\`. 4. Add trend chart (line) + comparison (bars). 5. Add data bars + sparklines to the detail table. 6. Insert slicer (dept) + timeline (month), link to all. 7. Clean layout, protect sheet.

### Layout

| Zone | Content |
|------|---------|
| Top | 3 KPI cards |
| Center | Trend (line) + comparison (bars) |
| Right | Slicer + Timeline |
| Bottom | Detail table (bars + sparklines) |

### Pass Criteria

| Criterion | Condition |
|-----------|-----------|
| One screen | KPIs/charts visible without scrolling |
| Interaction | All elements update on slicer/timeline click |
| Auto-refresh | New rows reflected via Refresh All |
| Readability | Restrained colors, natural flow |

> Follow Data → Pivot → Controls → Layout. Starting from layout tangles the data links.`,
    },
    {
      title: '모듈 3 정리 & 과정 마무리',
      titleEn: 'Module 3 Wrap-up & Course Conclusion',
      content: `### 모듈 3 핵심 요약

| 단계 | 핵심 도구 | 요점 |
|------|----------|------|
| 인-셀 시각화 | 조건부 서식·데이터 막대·스파크라인 | 표를 차트 없이 읽히게 |
| 기획 | KPI 정의·와이어프레임 | 차트보다 설계가 먼저 |
| 인터랙션 | 피벗 차트·슬라이서·타임라인 | 클릭 한 번으로 동시 갱신 |
| 자동화 | 표·새로고침·\`GETPIVOTDATA\` | 만들고 계속 쓰는 템플릿 |
| 종합 | 부서 KPI 대시보드 | 위 4가지를 한 화면에 |

### 대시보드 점검 체크리스트

1. 핵심 KPI가 상단·좌측에 우선 배치되어 있는가?
2. 스크롤 없이 한 화면에 들어오는가?
3. 슬라이서/타임라인이 모든 요소에 연결되어 동시 갱신되는가?
4. 원본 갱신이 "모두 새로 고침"만으로 반영되는가?
5. 색·아이콘이 절제되어 강조가 분명한가?
6. 제목·기준 기간·갱신일자가 표시되어 있는가?

### 전체 과정 회고 — EDA → 시각화 → 대시보드

이번 과정은 데이터를 다루는 세 단계를 차례로 익혔습니다.

| 모듈 | 주제 | 핵심 역량 |
|------|------|----------|
| 1 | 탐색적 데이터 분석(EDA) | 데이터 정제·구조 파악·요약 통계 |
| 2 | 시각화 | 목적에 맞는 차트 선택과 표현 |
| 3 | 대시보드 | KPI 종합·인터랙션·자동화 |

### 현업 적용 제언

1. **작게 시작하기** — 완벽한 대시보드보다 KPI 3개짜리 한 장부터 운영합니다.
2. **자동 갱신을 기본으로** — 수작업 업데이트는 곧 방치로 이어집니다. 표·새로고침을 처음부터 설계하세요.
3. **보는 사람 기준** — 만든 사람이 아니라 의사결정자가 1분 안에 읽을 수 있어야 합니다.
4. **정기 점검** — KPI는 상황에 따라 바뀝니다. 분기마다 지표가 여전히 유효한지 검토합니다.

> 데이터 분석의 끝은 "예쁜 차트"가 아니라 "더 나은 결정"입니다. 대시보드는 그 결정을 빠르게 돕는 도구일 뿐임을 기억하세요. 수고하셨습니다.`,
      contentEn: `### Module 3 Summary

| Stage | Tools | Point |
|-------|-------|-------|
| In-cell | Conditional formatting, data bars, sparklines | Readable without charts |
| Planning | KPIs, wireframe | Design before charting |
| Interaction | Pivot charts, slicers, timeline | One click updates all |
| Automation | Tables, refresh, \`GETPIVOTDATA\` | Build once, reuse |
| Capstone | Department KPI dashboard | All four on one screen |

### Dashboard Checklist

1. Core KPIs top-left? 2. Fits one screen? 3. Controls linked to all? 4. Auto-refresh works? 5. Restrained colors? 6. Title/period/date shown?

### Course Recap — EDA → Visualization → Dashboard

| Module | Topic | Skill |
|--------|-------|-------|
| 1 | EDA | Cleaning, structure, summary stats |
| 2 | Visualization | Choosing the right chart |
| 3 | Dashboard | Combining KPIs, interaction, automation |

### Applying at Work

1. Start small (3 KPIs). 2. Make auto-refresh the default. 3. Design for the reader, not the maker. 4. Review KPIs quarterly.

> The end of analysis is "better decisions", not "pretty charts". Well done.`,
    },
  ],
};

export default function Module3() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Module 03</div>
          <h2>{isKo ? '실무형 시각화 대시보드 구축' : 'Building Practical Visualization Dashboards'}</h2>
          <p>{isKo ? '인사이트를 한 화면에 담는 대시보드 구현 · 2.0H' : 'Capturing insights on a single dashboard screen · 2.0H'}</p>
        </div>
      </section>
      <GuidePage
        seoTitle="실무형 시각화 대시보드 구축"
        seoTitleEn="Building Practical Visualization Dashboards"
        seoDescription="조건부 서식·스파크라인부터 피벗 차트·슬라이서·자동 갱신 리포트까지, 실무형 KPI 대시보드를 단계별로 구축합니다."
        path="/module3"
        dataFiles={[module3Dashboard]}
      />
    </>
  );
}
