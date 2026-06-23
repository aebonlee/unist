import{u as n,j as e}from"./index-FBdDRoI6.js";import{G as s}from"./GuidePage-BHjWa5Rv.js";import"./SEOHead-BdAQoTEc.js";const i={id:"module3-clean",icon:"fa-table",title:"모듈 3 · 비즈니스 데이터 정제 및 통계 분석",titleEn:"Module 3 · Business Data Cleaning and Statistics",sections:[{title:"[실습] 문서 속 표 데이터 정형화 — 비정형에서 정형으로",titleEn:"[Practice] Structuring Table Data from Documents",content:`현장의 데이터는 깔끔한 CSV로 오지 않습니다. 대부분 **보고서·견적서·품질 점검표 안에 표 형태로 박혀** 있고, 그대로는 분석에 쓸 수 없습니다. 이 실습에서는 화학·제조 중소기업의 보고서 속 표를 **분석 가능한 정형 테이블**로 바꿉니다.

### 1. BEFORE — 분석이 막히는 표

월간 영업/생산 보고서에서 흔히 보는 표입니다.

| 구분 | 1월 | | 2월 | | 비고 |
|------|-----|----|-----|----|------|
| 매출 | 1,200 | 만원 | 1,540 | 만원 | |
| 생산량(t) | 320 | | | 410 | 일부 누락 |
| 합계 | 1,520 | | 1,950 | | 자동 계산 |

무엇이 문제일까요?

- **셀 병합·머리글 중복**: "1월" 아래에 값 열과 단위 열이 따로 있어 1행=1머리글 원칙이 깨짐
- **단위·날짜 형식 제각각**: "만원", "(t)", 빈칸이 뒤섞임
- **결측·합계 행이 데이터와 섞임**: \`합계\` 행이 실제 관측치처럼 들어가 평균·집계를 왜곡
- **결측값**: 2월 생산량이 빈칸

### 2. AFTER — 정형 테이블(tidy data)

| 날짜 | 구분 | 값 | 단위 |
|------|------|----|------|
| 2026-01-01 | 매출 | 1200 | 만원 |
| 2026-01-01 | 생산량 | 320 | t |
| 2026-02-01 | 매출 | 1540 | 만원 |
| 2026-02-01 | 생산량 | | t |

정형 데이터의 두 가지 핵심 원칙:

> **1관측치 = 1행, 1변수 = 1열.**
> 합계·소계처럼 "계산된 행"은 데이터가 아니므로 분리하고, 컬럼마다 데이터 타입을 하나로 통일합니다(매출 열은 전부 숫자).

### 3. 생성형 AI로 표 추출하기 [실습]

표 이미지나 PDF를 Gemini·ChatGPT에 올리고 다음처럼 요청합니다.

> "이 표 이미지를 분석 가능한 정형 테이블(CSV)로 변환해줘. **합계 행은 제외**하고, 날짜는 **YYYY-MM-DD**로 통일해줘. 단위(만원, t)는 별도 컬럼으로 분리하고, 빈칸은 결측(NaN)으로 남겨둬."

핵심은 **"무엇을 어떻게 정리할지"를 프롬프트에 명시**하는 것입니다. 합계 제외, 날짜 형식, 단위 분리 같은 규칙을 빼먹으면 AI가 임의로 채워 넣어 오히려 오류가 생깁니다.

### 4. Gemini가 생성한 정제 코드

\`\`\`python
import pandas as pd

# 1. AI가 추출한 원본 읽기
df = pd.read_csv("raw.csv")

# 2. 표 정제 후 정형화
df = df.dropna(how="all")            # 전부 빈 행 제거
df = df[df["구분"] != "합계"]         # 합계 행 분리
df["날짜"] = pd.to_datetime(df["날짜"])           # 날짜 형식 통일
df["매출"] = df["매출"].str.replace(",", "").astype(int)  # "1,200" -> 1200

# 3. 정형 결과 저장
df.to_csv("clean.csv", index=False)
\`\`\`

| 처리 | 함수 | 효과 |
|------|------|------|
| 빈 행 제거 | \`dropna(how="all")\` | 구분선·여백 행 정리 |
| 합계 분리 | 불리언 인덱싱 | 집계 왜곡 방지 |
| 날짜 통일 | \`pd.to_datetime\` | 시계열 분석 가능 |
| 천단위 콤마 제거 | \`str.replace\` + \`astype\` | 텍스트 → 숫자 변환 |

> 정형화가 끝나면 \`df.head()\`와 \`df.dtypes\`로 **행 구조와 데이터 타입**을 꼭 확인하세요. 매출 열이 \`object\`(문자)로 남아 있으면 통계가 계산되지 않습니다.`,contentEn:'Real-world data rarely arrives as clean CSV. It is usually embedded as tables inside reports, quotes, and quality sheets. This practice converts a table from a chemical/manufacturing SME report into an analysis-ready structured table.\n\n**BEFORE** problems: merged cells and duplicate headers break the one-header-per-row rule; units and date formats are inconsistent; total/subtotal rows mix in with real observations and distort aggregates; some cells are missing.\n\n**AFTER** follows tidy-data principles: one observation per row, one variable per column. Calculated rows (totals) are separated, and each column holds a single data type (the revenue column is all numeric).\n\nTo extract with generative AI, upload the image/PDF and prompt explicitly: "Convert this table image into an analysis-ready structured table (CSV). Exclude total rows, normalize dates to YYYY-MM-DD, split units into a separate column, and keep blanks as missing values." Specifying the rules prevents the model from inventing values.\n\nThe Gemini-generated cleaning code drops empty rows, filters out total rows, normalizes dates with `pd.to_datetime`, and strips thousands separators before casting to int. Always verify with `df.head()` and `df.dtypes`: if the revenue column stays `object`, statistics will not compute.'},{title:"통계 수치 분석 & 핵심 지표 도출",titleEn:"Statistical Analysis & Deriving Key Metrics",content:`정형화가 끝났으면 이제 **숫자가 무엇을 말하는지** 읽을 차례입니다. 현장에서 실제로 보는 통계 지표는 의외로 많지 않습니다. 아래 5가지면 매출·생산·품질 데이터 대부분을 설명할 수 있습니다.

### 현장에서 꼭 보는 통계 지표

| 지표 | 무엇을 알려주나 | 언제 쓰나 |
|------|----------------|----------|
| 평균 / 중앙값 | 대표값(가운데 값) | 분포가 한쪽으로 치우치면 **중앙값** 사용 |
| 표준편차 | 흩어진 정도 = **변동성** | 품질·생산이 들쭉날쭉한지 점검 |
| 최소 / 최대 / 사분위 | 범위와 이상치 탐지(IQR) | 불량 스파이크, 비정상 거래 찾기 |
| 상관계수 | 두 변수 관계 강도(−1 ~ +1) | 생산량↑일 때 불량률↑인지 등 |

### 평균 vs 중앙값 — 이상치의 함정

다섯 거래처의 월 매출(만원)이 다음과 같다고 합시다.

\`\`\`python
import pandas as pd

sales = pd.Series([800, 850, 900, 950, 9000])  # 마지막은 대형 단발 수주
print("평균:", sales.mean())     # 2500
print("중앙값:", sales.median())  # 900
\`\`\`

- **평균 2,500만원**은 9,000짜리 한 건에 끌려 올라가 "보통 거래처"를 전혀 대표하지 못합니다.
- **중앙값 900만원**이 실제 전형적인 거래 규모에 훨씬 가깝습니다.

> 한두 개의 큰 값(대형 수주, 측정 오류)이 섞여 있으면 평균은 거짓말을 합니다. **분포가 치우치면 중앙값**을 함께 보세요.

### 변동성 — 표준편차 읽기

\`\`\`python
df[["매출", "생산량", "불량률"]].describe()
\`\`\`

\`describe()\`는 개수·평균·표준편차·최소·사분위·최대를 한 번에 줍니다. 표준편차가 평균 대비 크면 **그 지표가 불안정**하다는 뜻입니다.

### 예시 해석 — 월별 매출/생산 추이

> "최근 3개월 매출이 **+28% 상승**했으나, 같은 기간 매출 **표준편차도 확대**됨. → 전체적으로 **성장 추세**는 분명하지만, 월별 **변동성이 커지고 있어** 특정 대형 거래처 의존도와 공급 안정성을 함께 점검할 필요가 있음."

숫자 하나가 아니라 **추세(평균)와 안정성(표준편차)을 함께** 읽는 것이 핵심입니다.`,contentEn:`Once the data is structured, the next step is reading what the numbers say. In practice only a handful of metrics are needed: mean/median (central tendency, use the median when the distribution is skewed), standard deviation (spread = volatility), min/max/quartiles (range and outlier detection via IQR), and correlation (strength of relationship between two variables, −1 to +1).

The mean-vs-median trap matters most. For monthly sales of [800, 850, 900, 950, 9000], the mean (2500) is dragged up by one large one-off order and misrepresents a typical client, while the median (900) is far closer to reality. When a few large values or measurement errors are present, the mean lies — always check the median for skewed distributions.

\`df.describe()\` returns count, mean, std, min, quartiles, and max at once. A large standard deviation relative to the mean signals instability. A sample reading: revenue rose +28% over three months but its standard deviation also widened — a clear growth trend with rising volatility, warranting a check on large-client dependence and supply stability. Read the trend (mean) and the stability (std) together, not a single number.`},{title:"[실습] 키워드 추출 & 데이터 시각화 — 워드클라우드",titleEn:"[Practice] Keyword Extraction & Word Cloud Visualization",content:`숫자만 데이터가 아닙니다. **고객 리뷰·문의·점검 코멘트** 같은 텍스트도 중요한 데이터입니다. 이 실습에서는 텍스트에서 핵심 키워드를 뽑아 **워드클라우드**로 한눈에 보여줍니다.

### 텍스트 분석 3단계

1. **텍스트 수집** — 제품 리뷰, 고객 문의, 품질 점검 코멘트 등을 모읍니다.
2. **키워드 추출** — 한글 형태소 분석으로 **명사만** 뽑고 빈도를 셉니다.
3. **시각화** — 빈도가 높은 단어일수록 **크게** 표시(워드클라우드).

### 왜 명사만 뽑나?

"이/가/하다/그리고" 같은 조사·접속사는 빈도는 높지만 의미가 없습니다. **명사(제품·문제·감정 단어)**가 고객이 진짜 말하는 주제를 담습니다.

### 코드 — 빈도 계산과 워드클라우드

\`\`\`python
from collections import Counter
from wordcloud import WordCloud

# 1. 한글 형태소에서 명사만 추출
words = extract_nouns(reviews)   # 예: ["냄새", "포장", "배송", "냄새", ...]

# 2. 빈도 계산
freq = Counter(words)            # {"냄새": 14, "배송": 9, ...}

# 3. 워드클라우드 생성 (한글 폰트 필수)
wc = WordCloud(
    font_path="NanumGothic.ttf",  # 한글이 깨지면 폰트부터 확인
    background_color="white",
)
wc.generate_from_frequencies(freq)
wc.to_image()
\`\`\`

| 단계 | 도구 | 핵심 |
|------|------|------|
| 명사 추출 | 형태소 분석기 | 의미 단어만 남김 |
| 빈도 계산 | \`Counter\` | 단어 → 등장 횟수 |
| 시각화 | \`WordCloud\` | 빈도 → 글자 크기 |

> **한글이 네모(□)로 깨지면** 거의 항상 \`font_path\` 문제입니다. NanumGothic 같은 한글 폰트 경로를 반드시 지정하세요.

### 결과 읽기

워드클라우드에서 "냄새", "포장", "지연"이 크게 보인다면, 고객이 **무엇을 가장 많이 언급하는지**가 즉시 드러납니다. 빈도는 곧 **관심·불만의 크기**입니다. 단, 워드클라우드는 "어떤 단어가 많은가"는 보여주지만 "긍정인가 부정인가"는 알려주지 않으므로, 원문 일부를 함께 확인합니다.`,contentEn:'Numbers are not the only data. Customer reviews, inquiries, and inspection comments are valuable text data. This practice extracts key terms from text and shows them at a glance as a word cloud.\n\nThe pipeline has three steps: collect text (reviews, inquiries, QC comments); extract keywords by running Korean morphological analysis to keep only nouns and counting their frequency; and visualize, drawing more frequent words larger. Only nouns are kept because particles and conjunctions are frequent but meaningless — nouns carry the topics customers actually talk about.\n\nThe code extracts nouns, counts them with `Counter`, and feeds the frequencies to `WordCloud`. A Korean font path (e.g., NanumGothic.ttf) is mandatory; if Korean renders as boxes, the `font_path` is almost always the cause. If "smell", "packaging", or "delay" appear large, you instantly see what customers mention most — frequency reflects the size of interest or complaint. Word clouds show what is frequent but not whether it is positive or negative, so confirm with sample source text.'},{title:"분석 결과 기반 인사이트 도출·요약",titleEn:"Deriving and Summarizing Insights from Analysis",content:`통계 수치와 워드클라우드를 만들었다고 분석이 끝난 게 아닙니다. **"그래서 무엇을 할까?"로 번역**해야 비로소 가치가 생깁니다. 이 단계가 분석가와 단순 집계의 차이를 만듭니다.

### 인사이트 문장 작성법 — 현황 → 원인 가설 → 액션

좋은 인사이트는 항상 이 3단 구조를 가집니다.

| 단계 | 내용 | 예시 |
|------|------|------|
| ① 현황 (What) | 데이터가 보여주는 사실 | "3개월 매출 +28%, 변동성 확대" |
| ② 원인 가설 (Why) | 왜 그런가에 대한 추정 | "대형 거래처 1곳 의존도 상승 추정" |
| ③ 액션 (So what) | 무엇을 할 것인가 | "신규 거래처 발굴로 의존도 분산 제안" |

### 나쁜 요약 vs 좋은 요약

> ❌ **나쁜 예**: "매출이 올랐고 리뷰에 '냄새'가 많았습니다." (사실 나열일 뿐)

> ✅ **좋은 예**: "매출은 +28% 성장했으나 단일 대형 거래처 의존이 커져(변동성↑) 안정성 위험이 있고, 동시에 리뷰에서 '냄새' 언급이 급증해 제품 후처리 공정 점검이 필요합니다. → **거래처 다변화**와 **품질 클레임 원인 분석**을 우선 과제로 제안합니다."

좋은 요약은 **숫자 + 해석 + 다음 행동**이 한 문장 안에 연결됩니다.

### 데이터 기반 요약 보고 팁

1. **결론 먼저** — 가장 중요한 한 줄을 맨 위에. 보고받는 사람은 1분 안에 핵심을 알고 싶어 합니다.
2. **숫자에 단위와 기준 기간** — "+28%"가 아니라 "최근 3개월 대비 +28%".
3. **차트는 메시지당 하나** — 한 차트가 한 가지 주장을 하도록.
4. **불확실성은 가설로 표현** — "추정", "필요" 같은 표현으로 확정과 가설을 구분.

> 분석 보고의 목표는 "내가 분석을 많이 했다"가 아니라 **"의사결정자가 다음 행동을 결정할 수 있게 하는 것"**입니다. 액션이 없는 인사이트는 미완성입니다.`,contentEn:`Producing statistics and a word cloud is not the end of analysis. Value appears only when you translate findings into "so what should we do?" — this is what separates an analyst from a simple aggregator.

Good insights follow a three-part structure: the current state (what the data shows), a cause hypothesis (why it might be happening), and an action (what to do). A weak summary just lists facts ("sales rose and reviews mentioned 'smell'"). A strong one connects number, interpretation, and next action in one thread: revenue grew +28% but rising single-client dependence creates stability risk, while a surge in "smell" mentions calls for a post-processing review — so client diversification and a quality-claim root-cause analysis become the priorities.

Reporting tips: lead with the conclusion (the reader wants the key point in a minute); attach units and a reference period to every number ("+28% vs. the last three months"); keep one chart per message; and express uncertainty as a hypothesis using words like "estimated" or "needs". An insight without an action is unfinished — the goal is to let the decision-maker choose the next step.`},{title:"모듈 3 정리 & 체크리스트",titleEn:"Module 3 Wrap-up & Checklist",content:`### 모듈 3 핵심 요약

| 단계 | 핵심 도구 | 요점 |
|------|----------|------|
| 표 정형화 | 프롬프트 + pandas | 비정형 표 → tidy data(1관측=1행) |
| 통계 분석 | \`describe()\`·평균/중앙값·표준편차 | 추세와 변동성을 함께 읽기 |
| 텍스트 시각화 | 형태소 + \`WordCloud\` | 빈도 → 글자 크기로 핵심어 강조 |
| 인사이트 | 현황 → 원인 → 액션 | 숫자를 "다음 행동"으로 번역 |

### 실습 체크리스트

- [ ] 보고서 속 표를 정형 테이블(CSV)로 변환했다 (합계 행 분리, 날짜 통일)
- [ ] tidy 원칙(1관측치=1행, 1변수=1열)에 맞는지 \`df.head()\`로 확인했다
- [ ] 평균·중앙값·표준편차를 확인하고, 분포가 치우치면 중앙값을 함께 봤다
- [ ] 두 지표(예: 생산량·불량률)의 상관계수를 점검했다
- [ ] 리뷰 텍스트로 워드클라우드를 생성했다 (한글 폰트 적용)
- [ ] "현황 → 원인 가설 → 액션" 구조로 인사이트 1문장을 작성했다

### 자주 막히는 부분

| 증상 | 원인 | 해결 |
|------|------|------|
| 통계가 계산 안 됨 | 숫자 열이 문자(object) | \`astype(int)\`로 변환 |
| 평균이 이상함 | 합계 행/이상치 포함 | 합계 분리, 중앙값 확인 |
| 워드클라우드 □ 깨짐 | 한글 폰트 미지정 | \`font_path\` 설정 |

### 다음 모듈 예고

> **모듈 4 — 고객 반응 데이터 수집 및 분석**
> 이번 모듈에서 정제·통계·텍스트 분석의 기초를 익혔습니다. 다음 모듈에서는 **고객 반응 데이터를 직접 수집**하고, 수집한 데이터를 분석해 제품·서비스 개선으로 연결하는 흐름을 다룹니다. 수고하셨습니다.`,contentEn:`### Summary

| Stage | Tools | Point |
|-------|-------|-------|
| Structuring | Prompt + pandas | Messy table → tidy data |
| Statistics | \`describe()\`, mean/median, std | Read trend and volatility together |
| Text viz | Morphology + \`WordCloud\` | Frequency → font size |
| Insight | State → cause → action | Translate numbers into next steps |

### Checklist

- [ ] Converted a report table into a structured CSV (totals separated, dates normalized)
- [ ] Verified tidy structure (one observation per row, one variable per column) with \`df.head()\`
- [ ] Checked mean, median, and std; used the median for skewed distributions
- [ ] Inspected the correlation between two metrics (e.g., output vs. defect rate)
- [ ] Generated a word cloud from review text (with a Korean font)
- [ ] Wrote one insight in the State → Cause → Action structure

### Common pitfalls: statistics fail when numeric columns stay as text (cast with \`astype\`); a strange mean usually means total rows or outliers are included (separate them, check the median); a broken (□) word cloud means the Korean font path is missing.

### Next: **Module 4 — Collecting and Analyzing Customer Response Data.** Having learned the basics of cleaning, statistics, and text analysis, the next module covers collecting customer-response data directly and turning it into product and service improvements.`}]};function l(){const{language:a}=n(),t=a==="ko";return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header-ed",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"eyebrow",children:"Module 03"}),e.jsx("h2",{children:t?"비즈니스 데이터 정제 및 통계 분석":"Business Data Cleaning and Statistics"}),e.jsx("p",{children:t?"표 데이터 정형화 · 통계 지표 · 키워드 시각화 · 1.0H":"Table cleaning, statistics, keyword viz · 1.0H"})]})}),e.jsx(s,{seoTitle:"모듈 3 · 비즈니스 데이터 정제 및 통계 분석",seoTitleEn:"Module 3 · Business Data Cleaning and Statistics",seoDescription:"문서 내 표 데이터 정형화, 통계 수치 분석과 핵심 지표 도출, 키워드 추출 기반 워드클라우드 시각화를 다루는 실습 강의안",path:"/module3",dataFiles:[i]})]})}export{l as default};
