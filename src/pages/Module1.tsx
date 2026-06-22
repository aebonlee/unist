import { useLanguage } from '../contexts/LanguageContext';
import GuidePage from '../components/GuidePage';

const module1Eda = {
  id: 'module1-eda',
  icon: 'fa-magnifying-glass-chart',
  title: '모듈 1 · 탐색적 데이터분석(EDA)',
  titleEn: 'Module 1 · Exploratory Data Analysis',
  sections: [
    {
      title: 'EDA란 무엇인가 — 목적과 실무적 가치',
      titleEn: 'What is EDA — Purpose and Practical Value',
      content: `**탐색적 데이터분석(EDA, Exploratory Data Analysis)**은 통계학자 존 튜키(John Tukey)가 제안한 개념으로, 데이터를 본격적으로 모델링하기 전에 **데이터의 구조·패턴·이상치·관계를 시각화와 요약통계로 탐색하는 과정**입니다.

### EDA를 왜 하는가

분석가가 데이터를 처음 받았을 때, 그 데이터가 어떻게 생겼는지 모른 채 곧바로 결론을 내릴 수는 없습니다. EDA는 "데이터에게 질문을 던지고 답을 듣는" 대화의 시작입니다.

- **데이터 품질 점검**: 결측치, 중복, 잘못된 단위, 비정상적인 값을 발견합니다.
- **가설 발굴**: 데이터를 들여다보며 "이 두 변수는 관련이 있을까?" 같은 새로운 질문을 만듭니다.
- **이상치 탐지**: 평균을 왜곡하는 극단값이나 입력 오류를 찾아냅니다.
- **분석 방향 설정**: 어떤 변수를 더 깊게 볼지, 어떤 모델이 적합할지 판단합니다.

### EDA vs CDA(확증적 데이터분석)

EDA와 대비되는 개념이 **확증적 데이터분석(CDA, Confirmatory Data Analysis)**입니다. CDA는 미리 세운 가설을 통계적으로 "검증"하는 단계입니다.

| 구분 | EDA (탐색적) | CDA (확증적) |
|------|-------------|-------------|
| 목적 | 패턴·가설 발굴 | 가설 검증 |
| 접근 | 열린 질문, 자유로운 탐색 | 정해진 절차, 통계적 검정 |
| 가설 | 분석 중에 만들어짐 | 분석 전에 미리 수립 |
| 주요 도구 | 시각화, 요약통계, 분포 | 가설검정, p-value, 신뢰구간 |
| 결과물 | "흥미로운 패턴", 다음 질문 | "통계적으로 유의함/아님" |
| 비유 | 탐정의 현장 조사 | 법정의 증거 검증 |

### 실무에서의 가치

> EDA를 생략하고 곧장 모델링이나 보고서로 넘어가면, 잘못된 데이터 위에 화려한 결론을 쌓게 됩니다. EDA는 "쓰레기를 넣으면 쓰레기가 나온다(Garbage In, Garbage Out)"를 막는 첫 방어선입니다.

실무에서 EDA는 전체 분석 시간의 60~80%를 차지하는 경우가 많습니다. 데이터를 충분히 이해한 분석가는 더 적은 시도로 더 정확한 인사이트를 도출합니다.`,
      contentEn: `**Exploratory Data Analysis (EDA)**, a concept introduced by statistician John Tukey, is the process of **exploring the structure, patterns, outliers, and relationships in data using visualization and summary statistics** before formal modeling.

EDA serves several practical goals: checking data quality (missing values, duplicates, wrong units), discovering new hypotheses, detecting outliers and input errors, and deciding the direction of analysis.

EDA contrasts with **Confirmatory Data Analysis (CDA)**. EDA discovers patterns and generates hypotheses through open-ended exploration, while CDA tests pre-defined hypotheses using statistical tests like p-values and confidence intervals. EDA is like a detective's field investigation; CDA is like verifying evidence in court.

In practice, EDA often takes 60–80% of total analysis time. Skipping it means building polished conclusions on flawed data — EDA is the first line of defense against "Garbage In, Garbage Out."`,
    },
    {
      title: '비즈니스 문제 정의와 가설 수립',
      titleEn: 'Defining Business Problems and Building Hypotheses',
      content: `분석은 "데이터"가 아니라 "문제"에서 출발합니다. 막연한 고민을 **데이터로 답할 수 있는 질문**으로 바꾸는 것이 분석의 첫걸음입니다.

### 비즈니스 문제를 분석 가능한 질문으로

| 막연한 고민 | 분석 가능한 질문 |
|------------|----------------|
| "매출이 왜 줄었지?" | "최근 3개월간 어느 제품군·지역·채널에서 매출이 가장 많이 감소했는가?" |
| "고객이 이탈하는 것 같아" | "가입 후 30일 내 재방문하지 않은 고객의 비율은 얼마이고, 어떤 특성을 가졌는가?" |
| "마케팅이 효과가 있나?" | "캠페인 집행 전후 2주간 신규 가입 전환율이 유의하게 달라졌는가?" |

핵심은 **측정 가능한 지표**, **명확한 기간**, **비교 대상**을 포함하는 것입니다.

### 좋은 가설의 조건

- **검증 가능성**: 데이터로 참/거짓을 가릴 수 있어야 한다.
- **구체성**: "관련 있다"가 아니라 "X가 클수록 Y가 증가한다"처럼 방향이 분명해야 한다.
- **반증 가능성**: 틀릴 수 있는 형태여야 한다. ("매출은 좋거나 나쁘다"는 가설이 아니다.)
- **실행 연결성**: 검증 결과가 의사결정으로 이어질 수 있어야 한다.

### 논리적 검증 프로세스

문제 정의에서 결론까지는 다음 5단계를 따릅니다.

\`문제 정의 → 가설 수립 → 지표 정의 → 데이터 검증 → 결론·액션\`

| 단계 | 핵심 질문 | 산출물 |
|------|----------|--------|
| 1. 문제 정의 | 무엇이 문제인가? | 분석 가능한 질문 |
| 2. 가설 수립 | 왜 그럴 것 같은가? | 검증 가능한 가설 목록 |
| 3. 지표 정의 | 무엇을 측정할 것인가? | KPI, 측정 기준 |
| 4. 데이터 검증 | 데이터가 가설을 지지하는가? | EDA 결과, 차트 |
| 5. 결론·액션 | 그래서 무엇을 할 것인가? | 의사결정, 권고안 |

### 예시 가설 정리표

| 비즈니스 문제 | 가설 | 검증 지표 |
|--------------|------|----------|
| 신규 고객 이탈 | "온보딩 미완료 고객의 이탈률이 더 높을 것이다" | 온보딩 완료/미완료 그룹별 30일 이탈률 |
| 주말 매출 부진 | "주말에는 객단가는 같지만 방문수가 줄 것이다" | 요일별 방문수·객단가 |
| 특정 지역 저조 | "배송 지연이 잦은 지역의 재구매율이 낮을 것이다" | 지역별 평균 배송일 vs 재구매율 |

> 가설이 없는 분석은 표류합니다. "이 데이터로 무엇을 확인하려 하는가?"라는 질문에 한 문장으로 답할 수 없다면, 아직 분석을 시작할 준비가 안 된 것입니다.`,
      contentEn: `Analysis starts not from "data" but from a "problem." The first step is turning a vague concern into a **question answerable with data** — one that includes measurable metrics, a clear time period, and a comparison target.

A good hypothesis must be **testable** (data can prove it true or false), **specific** (states direction, e.g., "as X increases, Y increases"), **falsifiable**, and **actionable** (results lead to decisions).

The logical verification process follows five steps: Problem Definition → Hypothesis → Metric Definition → Data Verification → Conclusion & Action. Each step answers a key question, from "What is the problem?" to "So what should we do?"

For example, the problem "new customer churn" leads to the hypothesis "customers who didn't complete onboarding churn more," verified by comparing 30-day churn rates between completed and incomplete onboarding groups.`,
    },
    {
      title: '지표 쪼개기(Drill-down)와 다차원 분할',
      titleEn: 'Metric Drill-down and Multi-dimensional Splitting',
      content: `전체 지표 하나만 보면 "무슨 일이 일어났는지"는 알 수 있지만 "왜 그랬는지"는 알 수 없습니다. **지표 쪼개기(Drill-down)**는 큰 숫자를 구성 요소로 분해해 원인을 추적하는 핵심 기법입니다.

### 지표를 곱셈 구조로 분해하기

대부분의 비즈니스 지표는 여러 하위 지표의 곱으로 표현됩니다.

\`매출 = 방문수 × 전환율 × 객단가\`

이렇게 분해하면 "매출 10% 감소"가 방문수 감소 때문인지, 전환율 하락 때문인지, 객단가가 낮아진 탓인지를 구분할 수 있습니다.

| 분해 대상 | 분해 공식 |
|----------|----------|
| 매출 | 방문수 × 전환율 × 객단가 |
| 활성 사용자(MAU) | 신규 유입 + 기존 유지 + 복귀 |
| 객단가 | 구매 건수 × 평균 구매 단가 |
| 이익 | 매출 − (고정비 + 변동비) |

### 차원(Dimension)으로 쪼개기

같은 지표라도 **차원**을 기준으로 나누면 숨은 차이가 드러납니다. 차원은 데이터를 분류하는 "관점"입니다.

- **시간 차원**: 연/월/주/요일/시간대
- **고객 차원**: 신규/기존, 연령대, 성별, 등급
- **상품 차원**: 카테고리, 브랜드, 가격대
- **채널/지역 차원**: 온라인/오프라인, 지역, 유입 경로

### 다차원 교차분할

두 개 이상의 차원을 동시에 교차하면 더 정밀한 패턴이 보입니다. 예를 들어 "지역 × 연령대"로 매출을 나누면, 전체로는 보이지 않던 "수도권 20대에서만 급감" 같은 신호를 잡아낼 수 있습니다.

> 전체 지표가 평탄해 보여도, 차원을 쪼개면 한쪽이 급등하고 다른 쪽이 급락해 서로 상쇄되고 있을 수 있습니다. 이것이 바로 심슨의 역설(Simpson's Paradox)이 발생하는 지점입니다.

### 엑셀 피벗테이블로 차원 분할하기 (실무 단계)

1. 데이터 범위를 선택하고 **삽입 → 피벗테이블**을 클릭합니다.
2. 분석하고 싶은 지표(예: 매출)를 **값(Values)** 영역에 끌어다 놓습니다.
3. 1차 차원(예: 제품 카테고리)을 **행(Rows)** 영역에 배치합니다.
4. 2차 차원(예: 지역)을 **열(Columns)** 영역에 배치하면 교차표가 완성됩니다.
5. 값 필드 설정에서 합계/평균/개수/비율(총합계 대비 %) 등 표현 방식을 바꿔가며 봅니다.
6. **슬라이서(Slicer)**를 추가해 기간이나 채널로 빠르게 필터링합니다.

이 과정을 반복하면 "어느 차원의 어느 구간에서" 변화가 일어났는지를 단계적으로 좁혀갈 수 있습니다.`,
      contentEn: `Looking at a single overall metric tells you "what happened" but not "why." **Drill-down** decomposes a large number into its components to trace causes.

Most business metrics can be expressed as products of sub-metrics, e.g., \`Revenue = Visits × Conversion Rate × Average Order Value\`. This lets you tell whether a 10% revenue drop came from fewer visits, lower conversion, or smaller order value.

Splitting the same metric by **dimensions** (time, customer, product, channel/region) reveals hidden differences. Crossing two or more dimensions (e.g., region × age group) can surface signals invisible in the aggregate — and beware Simpson's Paradox, where opposing trends cancel out.

In Excel: Insert → PivotTable, drag the metric into Values, a first dimension into Rows, a second into Columns to build a cross-tab, then adjust the value field (sum/average/% of total) and add Slicers to filter quickly.`,
    },
    {
      title: '[실습] 시계열 트렌드 · 요일별/집단별 특성 분석',
      titleEn: '[Practice] Time-series Trends and Group Comparison',
      content: `이번 실습에서는 시간에 따른 추세와 집단 간 차이를 엑셀로 직접 분석합니다. 공공데이터포털의 일별 이용 데이터나 가상의 매장 매출 데이터를 사용하면 됩니다.

### 실습 데이터 예시 구조

| 날짜 | 요일 | 지점 | 고객유형 | 매출 |
|------|------|------|---------|------|
| 2026-05-01 | 금 | 강남 | 신규 | 1,250,000 |
| 2026-05-01 | 금 | 홍대 | 기존 | 980,000 |
| 2026-05-02 | 토 | 강남 | 기존 | 1,720,000 |

### 1단계 — 시계열 추세 보기

1. 날짜와 매출 데이터를 선택하고 **삽입 → 꺾은선형 차트**를 만듭니다.
2. 데이터가 들쭉날쭉하면 **7일 이동평균** 열을 추가합니다: \`=AVERAGE(E2:E8)\` 형태로 7행씩 평균을 계산합니다.
3. 원본 매출과 이동평균선을 함께 그려 단기 변동 속의 **장기 추세**(상승/하락/계절성)를 파악합니다.

### 2단계 — 요일별 특성 분석

1. 피벗테이블을 만들고 **행에 요일**, **값에 매출 평균**을 배치합니다.
2. 요일을 월~일 순으로 정렬합니다(사용자 지정 목록 활용).
3. 막대그래프로 시각화해 "주말이 높은가, 평일이 높은가"를 확인합니다.

| 요일 | 평균 매출 | 평균 방문수 |
|------|----------|------------|
| 월 | 920,000 | 140 |
| 금 | 1,180,000 | 175 |
| 토 | 1,650,000 | 230 |
| 일 | 1,420,000 | 205 |

### 3단계 — 집단별 그룹 비교

1. 피벗테이블 **행에 고객유형(신규/기존)** 또는 **지점**을 배치합니다.
2. 값에 매출 합계와 매출 평균을 함께 넣어, 규모와 효율을 같이 봅니다.
3. **요일 × 고객유형** 교차표로 만들면 "신규 고객은 주말에, 기존 고객은 평일에 더 많이 구매" 같은 패턴을 발견할 수 있습니다.

> 그룹을 비교할 때는 **합계만 보지 말고 평균·비율도 함께** 보세요. 어떤 지점은 단순히 규모가 커서 합계가 높을 뿐, 1인당 매출(효율)은 낮을 수 있습니다.

### 실습 정리 질문

- 매출이 가장 높은 요일과 가장 낮은 요일의 차이는 몇 배인가?
- 신규 고객과 기존 고객의 구매 패턴은 어떻게 다른가?
- 특정 지점에서만 나타나는 이상한 추세가 있는가?`,
      contentEn: `This practice analyzes trends over time and differences between groups using Excel, with public-portal daily data or sample store-sales data.

**Step 1 — Time-series trend:** Create a line chart from date and sales, add a 7-day moving average column (\`=AVERAGE(E2:E8)\`), and plot both to see the long-term trend within short-term noise.

**Step 2 — Day-of-week analysis:** Build a PivotTable with day-of-week in Rows and average sales in Values, sort Mon–Sun, and visualize as a bar chart to compare weekdays vs weekends.

**Step 3 — Group comparison:** Place customer type (new/existing) or branch in Rows, include both sum and average to see scale and efficiency together, and build a day × customer-type cross-tab to spot patterns. Always look at averages and ratios, not just totals — a large branch may have high totals but low per-customer sales.`,
    },
    {
      title: '[실습] 상관분석 · 교차분석으로 숨은 패턴 찾기',
      titleEn: '[Practice] Correlation and Cross-tabulation Analysis',
      content: `두 변수가 함께 움직이는지(상관), 범주 간에 관계가 있는지(교차)를 살펴 숨은 패턴을 찾습니다.

### 상관계수의 의미

**상관계수(Correlation Coefficient, r)**는 두 연속형 변수가 함께 변하는 정도를 −1에서 +1 사이의 값으로 나타냅니다.

| 상관계수 범위 | 해석 |
|--------------|------|
| 0.7 ~ 1.0 | 강한 양의 상관 |
| 0.4 ~ 0.7 | 뚜렷한 양의 상관 |
| 0.2 ~ 0.4 | 약한 양의 상관 |
| −0.2 ~ 0.2 | 거의 상관 없음 |
| −0.4 ~ −0.2 | 약한 음의 상관 |
| −1.0 ~ −0.7 | 강한 음의 상관 |

### 주의 — 상관 ≠ 인과

> **상관관계는 인과관계가 아닙니다.** "아이스크림 판매량"과 "익사 사고"는 강한 양의 상관을 보이지만, 아이스크림이 익사를 일으키는 게 아니라 "여름철 더위"라는 숨은 제3의 변수가 둘 다를 끌어올린 것입니다. 상관을 발견하면 항상 "이게 정말 원인일까, 아니면 다른 변수 때문일까?"를 의심하세요.

또한 상관계수는 **직선 관계**만 측정합니다. U자형처럼 곡선 관계는 r이 0에 가까워도 강한 관계가 있을 수 있으므로, 반드시 **산점도**를 함께 그려야 합니다.

### 엑셀로 상관분석하기

1. 두 변수 열(예: 광고비, 매출)을 준비합니다.
2. 상관계수를 계산합니다: \`=CORREL(B2:B100, C2:C100)\`
3. 여러 변수의 상관을 한꺼번에 보려면 **데이터 → 데이터 분석 → 상관분석**으로 상관행렬을 만듭니다.
4. **산점도(분산형 차트)**를 그리고 추세선을 추가해 관계의 형태와 방향을 눈으로 확인합니다.

### 교차분석(Cross-tabulation)

범주형 변수 간의 관계는 피벗 **교차표**로 봅니다.

1. 피벗테이블 **행에 변수 A(예: 연령대)**, **열에 변수 B(예: 구매여부)**를 배치합니다.
2. 값에 **개수(Count)**를 넣어 빈도표를 만듭니다.
3. 값 표시 형식을 **행 합계 대비 %**로 바꿔 비율을 비교합니다.

| 연령대 | 구매함 | 구매안함 | 구매율 |
|--------|--------|---------|--------|
| 20대 | 120 | 380 | 24% |
| 30대 | 210 | 290 | 42% |
| 40대 | 180 | 220 | 45% |

이 표에서 "30~40대의 구매율이 20대의 약 2배"라는 패턴을 즉시 읽어낼 수 있습니다.

### 실습 정리 질문

- 어떤 변수 쌍이 가장 강한 상관을 보이는가? 그 상관은 인과로 볼 수 있는가?
- 산점도에서 직선으로 설명되지 않는 곡선·군집 패턴이 보이는가?
- 교차표에서 비율 차이가 가장 큰 집단은 어디인가?`,
      contentEn: `This practice finds hidden patterns by checking whether two variables move together (correlation) and whether categories are related (cross-tabulation).

The **correlation coefficient (r)** ranges from −1 to +1: 0.7–1.0 is strong positive, near 0 means little correlation, and −1.0 to −0.7 is strong negative.

**Correlation is not causation.** Ice-cream sales and drowning incidents correlate strongly, but a hidden third variable (summer heat) drives both. Also, r only measures linear relationships — always draw a scatter plot, since a U-shaped relationship can have r near 0 yet be strong.

In Excel, compute \`=CORREL(B2:B100, C2:C100)\`, use Data Analysis → Correlation for a matrix, and add a scatter plot with a trendline. For categorical variables, build a PivotTable cross-tab with one variable in Rows, another in Columns, Count as values, then switch to "% of Row Total" to compare rates.`,
    },
    {
      title: '[실습] 데이터 분포 확인 — 히스토그램 · 박스플롯',
      titleEn: '[Practice] Checking Distributions — Histogram and Box Plot',
      content: `요약통계량(평균, 합계)만 보면 데이터의 진짜 모습을 놓칩니다. 이번 실습에서는 **분포의 형태**를 직접 들여다봅니다.

### 평균만 보면 안 되는 이유

평균은 분포를 한 숫자로 압축하기 때문에 많은 정보를 숨깁니다.

- **이상치에 취약**: 직원 9명 연봉이 3,000만 원이고 1명이 30억이면 평균은 3억이 넘지만, 누구도 3억을 받지 않습니다. 이럴 땐 **중앙값(Median)**이 더 대표적입니다.
- **분포 형태를 못 봄**: 평균이 같아도 한쪽은 종 모양, 다른 쪽은 양극단으로 갈릴 수 있습니다.

> **앤스컴 콰르텟(Anscombe's Quartet)**은 평균·분산·상관계수가 거의 동일한 4개의 데이터셋이 실제로는 완전히 다른 모양(직선·곡선·이상치 포함)을 가진다는 것을 보여주는 유명한 사례입니다. 교훈은 단 하나: **숫자로 요약하기 전에 반드시 그려보라.**

### 히스토그램 — 분포의 형태 보기

히스토그램은 값을 구간(bin)으로 나누고 각 구간의 빈도를 막대로 그립니다. 이를 통해 분포가 **대칭인지, 한쪽으로 치우쳤는지(왜도), 봉우리가 몇 개인지**를 봅니다.

| 분포 형태 | 의미 | 대표값 권장 |
|----------|------|------------|
| 종 모양(정규) | 평균 주변에 집중 | 평균 |
| 오른쪽 꼬리(우편향) | 소수의 큰 값 (소득 등) | 중앙값 |
| 이봉(쌍봉) | 서로 다른 두 집단 혼재 | 집단 분리 후 분석 |

**엑셀 단계**: 분석할 숫자 열을 선택 → **삽입 → 차트 → 히스토그램**. 또는 **데이터 → 데이터 분석 → 히스토그램**에서 구간(bin)을 지정합니다. 구간 개수를 바꿔가며 형태를 관찰합니다.

### 박스플롯 — 사분위수와 이상치

박스플롯(상자수염그림)은 데이터를 4등분한 **사분위수**로 분포와 이상치를 한눈에 보여줍니다.

| 구성 요소 | 의미 |
|----------|------|
| 상자 아래(Q1) | 하위 25% 지점 |
| 상자 중앙선 | 중앙값(Q2, 50%) |
| 상자 위(Q3) | 상위 25% 지점 |
| IQR | Q3 − Q1 (상자의 높이) |
| 수염(Whisker) | 보통 Q1−1.5×IQR ~ Q3+1.5×IQR |
| 점 | 수염을 벗어난 **이상치** |

**엑셀 단계**: 데이터 열을 선택 → **삽입 → 차트 → 상자 수염(Box and Whisker)**. 여러 집단(예: 지점별)을 나란히 그리면 그룹 간 분포 차이와 이상치를 동시에 비교할 수 있습니다.

관련 함수: \`=QUARTILE.INC(범위, 1)\`(Q1), \`=MEDIAN(범위)\`(Q2), \`=QUARTILE.INC(범위, 3)\`(Q3)

### 실습 정리 질문

- 분포는 대칭인가, 한쪽으로 치우쳤는가? 평균과 중앙값 중 무엇이 더 대표적인가?
- 박스플롯에서 이상치로 찍힌 점은 입력 오류인가, 진짜 특이 사례인가?
- 집단별 박스플롯을 비교했을 때 가장 분포가 넓은(편차가 큰) 집단은 어디인가?`,
      contentEn: `Summary statistics like the mean hide the true shape of data. This practice examines the **distribution** directly.

The mean is vulnerable to outliers (nine salaries of 30M and one of 3B push the average over 300M, though no one earns that) — the **median** is often more representative. **Anscombe's Quartet** famously shows four datasets with nearly identical mean, variance, and correlation but completely different shapes. The lesson: always plot before summarizing.

**Histograms** group values into bins to reveal symmetry, skew, and number of peaks. In Excel: Insert → Chart → Histogram, or Data Analysis → Histogram with chosen bins.

**Box plots** show quartiles (Q1, median, Q3), the IQR, whiskers (Q1−1.5×IQR to Q3+1.5×IQR), and outliers as points. In Excel: Insert → Chart → Box and Whisker; plotting groups side by side compares distributions and outliers at once. Use \`=QUARTILE.INC(range, 1)\` and \`=MEDIAN(range)\`.`,
    },
    {
      title: '모듈 1 정리 & 체크리스트',
      titleEn: 'Module 1 Summary & Checklist',
      content: `### 핵심 요약

이번 모듈에서는 데이터를 본격적으로 다루기 전에 **데이터와 대화하는 방법**을 배웠습니다.

- **EDA의 본질**: 데이터를 쪼개고 그려보며 패턴·이상치·가설을 발굴하는 과정. 확증적 분석(CDA) 이전의 필수 단계입니다.
- **문제에서 출발**: 막연한 고민을 검증 가능한 질문과 가설로 바꾸고, "문제→가설→지표→검증→결론"의 흐름을 따릅니다.
- **지표 쪼개기**: 전체 숫자를 곱셈 구조(예: 매출=방문수×전환율×객단가)와 차원으로 분해해 원인을 추적합니다.
- **관계 탐색**: 시계열 추세, 요일·집단별 비교, 상관·교차분석으로 숨은 패턴을 찾되 상관≠인과를 명심합니다.
- **분포 확인**: 평균만 믿지 말고 히스토그램·박스플롯으로 형태와 이상치를 눈으로 확인합니다.

### EDA 실무 체크리스트

- [ ] 분석 목적과 검증할 가설을 한 문장으로 적었는가?
- [ ] 데이터의 행/열 수, 결측치, 중복, 단위를 점검했는가?
- [ ] 핵심 지표를 구성 요소와 차원으로 쪼개 보았는가?
- [ ] 시간에 따른 추세와 계절성을 확인했는가?
- [ ] 주요 변수의 분포(히스토그램·박스플롯)를 그려보았는가?
- [ ] 이상치를 발견했고, 그것이 오류인지 진짜 특이값인지 판단했는가?
- [ ] 변수 간 상관·교차관계를 확인하고 인과로 단정하지 않았는가?
- [ ] 평균뿐 아니라 중앙값·분산·비율도 함께 살펴봤는가?
- [ ] 발견한 패턴을 다음 단계의 새로운 질문으로 정리했는가?

> EDA에 "정답"은 없습니다. 좋은 EDA는 더 많은 차트를 그린 분석이 아니라, **올바른 질문을 던지고 데이터가 답하게 한** 분석입니다.

### 다음 모듈 예고 — 데이터 시각화

EDA로 발견한 인사이트를 **남에게 전달**하려면 시각화가 필요합니다. 다음 모듈에서는 목적에 맞는 차트 선택(비교·추세·구성·관계), 좋은 차트와 나쁜 차트의 차이, 그리고 한눈에 메시지가 전달되는 대시보드 설계 원칙을 다룹니다.`,
      contentEn: `### Summary

This module taught how to "have a conversation with data" before formal analysis.

- **The essence of EDA**: discovering patterns, outliers, and hypotheses by splitting and plotting data — an essential step before confirmatory analysis (CDA).
- **Start from the problem**: turn vague concerns into testable questions and hypotheses, following Problem → Hypothesis → Metric → Verification → Conclusion.
- **Metric drill-down**: decompose totals into multiplicative structures and dimensions to trace causes.
- **Explore relationships**: use trends, group comparisons, correlation, and cross-tabs — but remember correlation is not causation.
- **Check distributions**: don't trust the mean alone; use histograms and box plots to see shape and outliers.

A practical EDA checklist covers stating the hypothesis, checking data quality, drilling down metrics, examining trends and distributions, judging outliers, and reframing findings as new questions.

**Next module — Data Visualization**: choosing the right chart for comparison, trend, composition, or relationship; good vs bad charts; and dashboard design that delivers the message at a glance.`,
    },
  ],
};

export default function Module1() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Module 01</div>
          <h2>{isKo ? '탐색적 데이터분석(EDA)' : 'Exploratory Data Analysis (EDA)'}</h2>
          <p>{isKo ? '데이터를 쪼개고 파악하는 EDA 분석 기법 · 2.0H' : 'EDA techniques to split and understand data · 2.0H'}</p>
        </div>
      </section>
      <GuidePage
        seoTitle="모듈 1 · 탐색적 데이터분석(EDA)"
        seoTitleEn="Module 1 · Exploratory Data Analysis"
        seoDescription="EDA의 목적, 문제 정의와 가설 수립, 지표 쪼개기, 시계열·상관·교차분석, 분포 확인까지 실습 중심으로 배우는 탐색적 데이터분석 강의안"
        path="/module1"
        dataFiles={[module1Eda]}
      />
    </>
  );
}
