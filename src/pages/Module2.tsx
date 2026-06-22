import { useLanguage } from '../contexts/LanguageContext';
import GuidePage from '../components/GuidePage';

const module2Viz = {
  id: 'module2-viz',
  icon: 'fa-chart-pie',
  title: '모듈 2 · 시각화의 원리 및 기획',
  titleEn: 'Module 2 · Visualization Principles & Planning',
  sections: [
    {
      title: '시각화의 목적 — 메시지와 타겟 정의',
      titleEn: 'Purpose of Visualization — Message and Audience',
      content: `데이터 시각화는 **예쁜 그림을 그리는 일이 아니라, 데이터가 담고 있는 메시지를 가장 빠르고 정확하게 전달하는 일**입니다. 차트를 그리기 전에 반드시 두 가지를 먼저 정의해야 합니다 — **무엇을 말할 것인가(메시지)**, **누구에게 말할 것인가(타겟)**.

### 핵심 메시지(So-What) 도출

좋은 차트는 "데이터를 보여주는 차트"가 아니라 "결론을 보여주는 차트"입니다. 차트를 만들기 전에 스스로 물어보세요.

- 이 데이터에서 가장 중요한 한 문장은 무엇인가?
- 보는 사람이 이 차트를 보고 **무엇을 하길** 바라는가?
- 제목에 "월별 매출"이 아니라 **"3분기 매출이 전년 대비 18% 감소했다"**처럼 결론을 쓸 수 있는가?

> 차트 제목에 결론(So-What)을 쓰는 순간, 시각화의 목적이 분명해지고 불필요한 요소가 저절로 정리됩니다.

### 보고 대상(타겟)에 맞춘 전략

같은 데이터라도 보는 사람에 따라 시각화 방식이 달라져야 합니다.

| 타겟 | 관심사 | 시각화 전략 |
|------|--------|-------------|
| 경영진 | 결론·의사결정 | KPI 1~2개, 큰 숫자, 추세 한눈에. 디테일 제거 |
| 실무자 | 원인·세부 | 차원별 분해, 비교 가능한 표·차트, 필터 제공 |
| 외부/고객 | 신뢰·맥락 | 출처 명시, 단순하고 오해 없는 표현, 스토리 흐름 |

타겟이 정해지면 "어디까지 보여줄지", "얼마나 단순화할지"가 결정됩니다.`,
      contentEn: `Visualization is not about drawing pretty pictures — it is about **delivering the message inside the data as fast and accurately as possible**. Before charting, define two things: **what to say (message)** and **who you are speaking to (audience)**.

- **So-What first**: a good chart shows the conclusion, not just the data. Try writing the conclusion in the title (e.g. "Q3 revenue fell 18% YoY").
- **Audience-tailored**: executives want KPIs and trends; practitioners want breakdowns and filters; external readers want sources and clear, unambiguous framing.

Once message and audience are set, decisions about detail level and simplification follow naturally.`,
    },
    {
      title: '차트 선택 가이드 — 데이터 특성별 최적 차트',
      titleEn: 'Chart Selection Guide',
      content: `차트 선택의 출발점은 "예쁜 차트"가 아니라 **"내가 보여주려는 관계가 무엇인가"**입니다. 분석 목적을 다섯 가지로 나누면 차트는 거의 자동으로 결정됩니다.

### 목적별 차트 매핑

| 분석 목적 | 권장 차트 | 예시 |
|-----------|-----------|------|
| **비교** (항목 간 크기) | 막대그래프(가로/세로) | 지점별 매출 비교 |
| **추이** (시간 변화) | 꺾은선그래프 | 월별 방문자 추세 |
| **구성** (부분/전체 비율) | 누적막대 · (제한적으로) 파이 | 채널별 매출 비중 |
| **관계** (두 변수의 상관) | 산점도 | 광고비 vs 매출 |
| **분포** (값이 퍼진 모양) | 히스토그램 · 박스플롯 | 고객 연령 분포 |

### 자주 하는 실수

- **파이차트 남용**: 항목이 4개를 넘거나 비율 차이가 작으면 파이는 비교가 어렵습니다. → 막대그래프로 대체하세요.
- **추이에 막대 사용**: 시간의 흐름은 꺾은선이 더 직관적입니다.
- **너무 많은 계열**: 한 차트에 선이 6개 이상이면 "스파게티 차트"가 됩니다. → 강조할 1~2개만 남기고 나머지는 회색 처리.

> 규칙: **비교는 막대, 추이는 선, 관계는 산점도, 분포는 히스토그램/박스플롯.** 구성비는 파이보다 누적막대를 먼저 고려하세요.`,
      contentEn: `Start chart choice from "what relationship am I showing", not aesthetics. Five purposes map almost automatically: **comparison → bars, trend → line, composition → stacked bar/(limited) pie, relationship → scatter, distribution → histogram/box plot.**

Common mistakes: overusing pie charts (use bars when items > 4), using bars for time trends (use lines), and packing too many series into one chart (highlight 1–2, gray out the rest).`,
    },
    {
      title: '[실습] 가독성을 높이는 디자인 원칙',
      titleEn: '[Lab] Design Principles for Readability',
      content: `좋은 차트는 정보를 더하는 게 아니라 **불필요한 것을 덜어낸** 결과입니다. 핵심 원칙은 **Data-Ink Ratio**입니다 — 잉크(픽셀)의 대부분을 "데이터를 표현하는 데"만 쓰자는 것입니다.

### 1. 불필요한 요소 제거 (Data-Ink Ratio ↑)

다음 요소들은 대부분 지워도 됩니다.

- 진한 격자선(gridline) → 옅게 하거나 제거
- 차트 테두리, 배경색, 그림자
- **3D 효과** (왜곡만 유발, 백해무익)
- 의미 없는 범례 (계열을 직접 라벨로 표기하면 범례 불필요)
- 과도한 소수점 (매출에 소수점 2자리는 불필요)

### 2. 전략적 색상 활용

- **강조색은 1개 원칙**: 나머지는 회색, 말하고 싶은 항목 하나만 컬러로.
- 색으로 의미를 일관되게: 빨강=감소/위험, 파랑=기준 등 규칙을 지킨다.
- **색맹 고려**: 빨강-초록 조합은 피하고, 색뿐 아니라 명도·라벨로도 구분.

### 3. 시선 유도

- 막대그래프는 **값 순으로 정렬**(시간축이 아니라면)하면 비교가 쉬워집니다.
- 데이터 라벨을 차트 위에 직접 표기하면 축을 오갈 필요가 없습니다.
- 제목에 결론을 쓰고, 강조하고 싶은 부분에만 주석(annotation)을 답니다.

### Before → After 체크리스트

| 항목 | Before | After |
|------|--------|-------|
| 격자선 | 진한 검정 | 옅은 회색 또는 제거 |
| 색상 | 무지개 7색 | 강조 1색 + 회색 |
| 범례 | 별도 박스 | 계열 끝에 직접 라벨 |
| 제목 | "월별 매출" | "3분기 매출 18% 감소" |
| 3D | 입체 막대 | 평면 막대 |

> "더 이상 뺄 것이 없을 때 완성된다." 차트도 디자인도 마찬가지입니다.`,
      contentEn: `Good charts are the result of **removing** the unnecessary, not adding more — the core idea is the **Data-Ink Ratio**.

- **Remove clutter**: heavy gridlines, borders, backgrounds, 3D effects, redundant legends, excess decimals.
- **Strategic color**: one accent color, the rest gray; consistent meaning; colorblind-safe (avoid red-green only).
- **Guide the eye**: sort bars by value, label data directly, put the conclusion in the title, annotate only what matters.`,
    },
    {
      title: '[실습] 정보 왜곡 오류 피하기',
      titleEn: '[Lab] Avoiding Misleading Charts',
      content: `실무 보고서에서 가장 위험한 것은 못생긴 차트가 아니라 **사실을 왜곡하는 차트**입니다. 의도하지 않았더라도 보는 사람을 오도하면 신뢰를 잃습니다.

### 자주 범하는 왜곡과 올바른 대안

| 왜곡 유형 | 무엇이 문제인가 | 올바른 대안 |
|-----------|----------------|-------------|
| **y축 0 미시작 / 잘린 축** | 작은 차이를 거대한 차이로 과장 | 막대그래프는 반드시 0부터 시작 |
| **이중 축(dual axis) 오용** | 두 계열의 스케일을 임의 조정해 가짜 상관 연출 | 단위가 다르면 차트를 분리하거나 지수화 |
| **3D 차트** | 원근·기울기로 크기 왜곡 | 평면 2D 사용 |
| **면적/버블 과장** | 지름을 값에 비례시켜 면적이 제곱으로 과장 | 면적을 값에 비례시키거나 막대 사용 |
| **부적절한 비율** | 가로세로비를 조작해 추세 기울기 왜곡 | 자연스러운 비율, 축 단위 명시 |

### 막대그래프의 황금률

> 막대그래프의 y축은 **반드시 0에서 시작**해야 합니다. 막대의 "길이"로 크기를 비교하기 때문입니다. 반면 꺾은선그래프는 추세를 보는 것이므로 0에서 시작하지 않아도 되지만, 축 범위를 반드시 명시해야 합니다.

이중 축 차트는 "광고비를 늘렸더니 매출이 올랐다"처럼 **상관을 인과처럼 보이게** 만드는 대표적 도구입니다. 꼭 필요할 때만, 단위를 명확히 표기해 사용하세요.`,
      contentEn: `The most dangerous chart in a report is not an ugly one but a **misleading** one — even unintentional distortion destroys trust.

| Distortion | Problem | Fix |
|---|---|---|
| Truncated y-axis | Exaggerates small differences | Start bars at 0 |
| Dual-axis misuse | Fakes correlation | Split charts / index values |
| 3D charts | Perspective distorts size | Use flat 2D |
| Bubble/area | Area scales as square | Scale by area or use bars |

Golden rule: **bar charts must start the y-axis at 0**; line charts may not, but must label the axis range.`,
    },
    {
      title: '[실습] 윤리적이고 정확한 데이터 표현',
      titleEn: '[Lab] Ethical and Accurate Data Representation',
      content: `시각화의 마지막 책임은 **정직함**입니다. 기술적으로 틀리지 않아도, 맥락을 숨기거나 유리한 부분만 보여주면 그것은 거짓말과 같습니다.

### 인지 편향을 유발하는 표현 피하기

- **체리피킹(Cherry-picking)**: 유리한 기간·집단만 골라 보여주기 → 전체 맥락과 함께 제시.
- **기준선 조작**: 비교 기준(전년? 목표? 경쟁사?)을 유리하게 선택 → 기준을 명시.
- **표본 왜곡**: "응답자의 90%가 만족" (응답자가 10명일 때) → 표본 크기(n)를 항상 표기.
- **상관을 인과로 포장**: "A가 오르자 B도 올랐다 = A 때문" → 다른 요인 가능성 언급.

### 객관적 팩트 전달 3원칙

1. **출처 명시**: 데이터의 출처와 수집 방법을 적는다.
2. **기간·표본 명시**: 언제, 몇 건의 데이터인지 밝힌다.
3. **단위·정의 명시**: "매출"이 부가세 포함인지, "활성 사용자"의 정의가 무엇인지.

### 윤리 체크리스트

- [ ] 축이 왜곡되지 않았는가? (특히 막대 y축 0)
- [ ] 유리한 데이터만 골라내지 않았는가?
- [ ] 표본 크기와 기간을 표기했는가?
- [ ] 출처를 밝혔는가?
- [ ] 상관을 인과로 단정하지 않았는가?

> 좋은 분석가는 "내 주장을 돕는 차트"가 아니라 "사실을 가장 정확히 보여주는 차트"를 만듭니다.`,
      contentEn: `The final duty of visualization is **honesty**. Even technically-correct charts lie when they hide context or show only favorable parts.

- Avoid cherry-picking, baseline manipulation, sample distortion, and dressing correlation as causation.
- Three principles of objective reporting: **state the source, state the period/sample size (n), state units and definitions.**
- Use the ethics checklist: honest axes, no selective data, sample size shown, source cited, no unfounded causal claims.`,
    },
    {
      title: '모듈 2 정리 & 차트 선택 치트시트',
      titleEn: 'Module 2 Summary & Chart Cheat Sheet',
      content: `### 핵심 요약

- 시각화는 **메시지 전달 수단**이다. 차트 전에 "무엇을, 누구에게"를 먼저 정의한다.
- 분석 목적이 차트를 결정한다 — **비교/추이/구성/관계/분포**.
- 좋은 차트는 **덜어낸** 차트다 (Data-Ink Ratio, 강조색 1개, 직접 라벨).
- **왜곡을 피하라** — 막대 y축 0, 이중 축·3D·면적 과장 금지.
- 마지막은 **정직함** — 출처·표본·기간·정의 명시.

### "이 데이터엔 이 차트" 치트시트

| 보여주려는 것 | 첫 번째 선택 | 피할 것 |
|---------------|-------------|---------|
| 항목 간 크기 비교 | 가로 막대(정렬) | 파이(5개 이상) |
| 시간에 따른 변화 | 꺾은선 | 막대(너무 많을 때) |
| 부분과 전체 비율 | 누적막대 100% | 3D 파이 |
| 두 변수 관계 | 산점도 | 이중 축 |
| 값의 분포 | 히스토그램/박스플롯 | 평균만 표기 |
| 단일 핵심 지표 | 큰 숫자 + 추세 스파크라인 | 게이지/도넛 남용 |

> **다음 모듈 — 실무형 대시보드 구축**: 조건부 서식·스파크라인으로 표를 시각화하고, 피벗 차트·슬라이서를 연동해 한 화면에서 KPI를 모니터링하는 인터랙티브 대시보드를 직접 만듭니다.`,
      contentEn: `### Summary

- Visualization delivers a **message** — define "what / to whom" before charting.
- Purpose decides the chart: comparison / trend / composition / relationship / distribution.
- Good charts **remove** clutter (Data-Ink Ratio, one accent color, direct labels).
- **Avoid distortion**: bar y-axis at 0; no dual-axis/3D/area exaggeration.
- End with **honesty**: cite source, sample, period, definitions.

**Next module — Practical Dashboards**: visualize tables with conditional formatting and sparklines, then link pivot charts and slicers into one interactive KPI dashboard.`,
    },
  ],
};

export default function Module2() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Module 02</div>
          <h2>{isKo ? '데이터 시각화의 원리 및 기획' : 'Visualization Principles & Planning'}</h2>
          <p>{isKo ? '한눈에 들어오는 데이터 시각화 전략 · 2.0H' : 'Visualization strategy that lands at a glance · 2.0H'}</p>
        </div>
      </section>
      <GuidePage
        seoTitle="모듈 2 · 시각화의 원리 및 기획"
        seoTitleEn="Module 2 · Visualization Principles & Planning"
        seoDescription="시각화의 목적과 타겟 정의, 데이터 특성별 차트 선택, Data-Ink Ratio 디자인 원칙, 정보 왜곡 회피, 윤리적 데이터 표현을 다루는 데이터 시각화 강의안"
        path="/module2"
        dataFiles={[module2Viz]}
      />
    </>
  );
}
