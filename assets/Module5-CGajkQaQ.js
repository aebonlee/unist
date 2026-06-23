import{u as i,j as e}from"./index-FBdDRoI6.js";import{G as n}from"./GuidePage-BHjWa5Rv.js";import"./SEOHead-BdAQoTEc.js";const s={id:"module5-kamp",icon:"fa-flask",title:"모듈 5 · KAMP 화학공정 품질 데이터 분석",titleEn:"Module 5 · KAMP Chemical Process Quality Analysis",sections:[{title:"왜 '화학 공정' 사례인가",titleEn:"Why a 'Chemical Process' Case",content:`이 모듈은 이 과정의 **핵심 실습**입니다. 앞선 모듈에서 익힌 데이터 문해력·클라우드 분석 환경·프롬프트 작성법을 한데 모아, **진짜 화학 공정 데이터로 1회 완결형 분석**을 끝까지 수행합니다.

### 울산은 화학의 도시 — 그래서 화학 공정 사례

울산의 중점산업은 **화학(석유화학·정밀화학)**입니다. 대규모 석유화학 단지와 정밀화학 기업이 밀집해 있어, 온도·압력·pH·농도·체류시간 같은 **공정 운전변수 데이터**가 끊임없이 쌓입니다. 그런데 이 데이터를 "읽고 분석해 품질로 연결하는" 현장 인력은 늘 부족합니다. 이 모듈은 바로 그 현장 수요를 겨냥합니다.

### KAMP에는 화학 계열 데이터가 있다

**KAMP(인공지능 제조 플랫폼, kamp-ai.kr)**는 정부가 운영하는 제조 AI 데이터 플랫폼으로, 중소·중견 제조기업이 실제 공정 데이터로 AI를 학습할 수 있도록 데이터셋을 무료로 공개합니다. 여기에는 **화학·표면처리(도금)** 등 화학 계열 데이터셋이 포함되어 있고, 각 데이터셋에는 **변수 명세서**(변수의 의미·단위·정상범위)와 **활용 가이드북**이 함께 제공됩니다.

> 코드를 몰라도 됩니다. 명세서가 변수의 의미를 알려주고, 생성형 AI가 코드를 대신 써 줍니다. 여러분은 **"어떤 조건일 때 품질이 좋아지는가"**라는 질문에 집중하면 됩니다.

### 이 모듈의 목표

화학 공정의 **운전변수(온도·압력·pH·농도·체류시간 등)**와 **제품 품질(수율·불량)**의 관계를, 코드 없이 생성형 AI로 분석합니다. 그리고 데이터로 다음 질문에 답합니다.

- 수율을 좌우하는 변수는 무엇인가?
- 불량 배치를 미리 예측할 수 있는가?
- 수율이 가장 높은 **최적 운전조건 구간**은 어디인가?

이 1시간이 끝나면, 여러분은 화학 공정 데이터 한 벌을 받아 **전처리 → 탐색 → 예측 → 최적조건 도출 → 리포트**까지 스스로 끌고 갈 수 있게 됩니다.`,contentEn:`This is the **core hands-on module** of the course. It brings together the data literacy, cloud analysis environment, and prompting skills from earlier modules to run **one complete, self-contained analysis on real chemical process data.**

**Ulsan is a chemical city**, so we use a chemical process case. Its focus industry is chemicals (petrochemical and fine chemical), with dense complexes constantly generating operating-variable data — temperature, pressure, pH, concentration, residence time — yet field workers who can read and connect that data to quality are always scarce.

**KAMP (kamp-ai.kr)**, the government's manufacturing-AI data platform, openly publishes datasets for SMEs, including **chemical and surface-treatment (plating)** datasets, each with a **variable specification** (meaning, unit, normal range) and a usage guidebook. You do not need to code: the spec explains the variables and generative AI writes the code, so you focus on "under what conditions does quality improve."

The module's goal is to analyze the relationship between **operating variables** and **product quality (yield, defects)** without code, answering: which variables drive yield, can defective batches be predicted in advance, and where is the **optimal operating window** for highest yield? By the end you can take a chemical process dataset and carry it from **preprocessing to exploration to prediction to optimal conditions to a report** on your own.`},{title:"STEP 0 · KAMP에서 화학 공정 데이터 찾기",titleEn:"STEP 0 · Finding Chemical Process Data on KAMP",content:`분석은 **데이터를 손에 넣는 것**에서 시작합니다. KAMP에서 화학 계열 데이터셋을 찾아 Colab에 올리기까지의 경로를 5단계로 정리합니다.

### 접근 경로 5단계

1. **접속·회원가입** — \`kamp-ai.kr\`에 접속해 무료 회원가입(중소·중견 제조기업 임직원·교육생 누구나).
2. **카탈로그 탐색** — 상단 메뉴에서 **'제조 AI 데이터셋'** 카탈로그로 이동.
3. **분야 필터** — 분야를 **화학·표면처리(도금)**로 필터링해 화학 계열 데이터셋을 추립니다.
4. **명세서·가이드북 확인** — 상세페이지에서 **데이터 명세서**(변수 의미·단위·정상범위)와 **활용 가이드북**을 확인합니다. 분석 전 반드시 읽습니다.
5. **다운로드 → Colab 업로드** — **학습용 데이터(정제 CSV)**를 내려받아 Google Colab에 업로드합니다. (모듈 2에서 익힌 업로드 방법 그대로)

> 데이터셋 카탈로그 바로가기: https://www.kamp-ai.kr/aidataList

### KAMP 데이터셋 구성요소

| 구성요소 | 내용 | 분석에서의 쓸모 |
|----------|------|-----------------|
| 원시 데이터(raw) | 가공 전 센서·로그 원본 | 정제 과정 이해용 |
| **학습용 데이터** | 정제된 분석용 CSV | **실습에 바로 사용** |
| **데이터 명세서** | 변수 의미·단위·**정상범위** | 변수 해석·이상치 기준 |
| 활용 가이드북 | 분석 목적·절차 안내 | 분석 방향 설계 |
| 샘플 알고리즘 | 예시 분석 코드 | 결과 비교·검증 |

### 실전 팁

> **명세서의 '정상범위'를 분석 전에 캡처해 두세요.** 이 범위는 곧 **이상치 판단 기준**이 됩니다. 예컨대 pH 정상범위가 6.5~7.5라면, 그 밖의 값은 센서 오류나 공정 이상으로 의심하고 점검합니다. 정상범위를 모르면 "이 값이 이상한지" 판단할 근거가 없습니다.`,contentEn:`Analysis begins with **getting the data.** Path to KAMP's chemical datasets in five steps: (1) sign up free at \`kamp-ai.kr\`; (2) open the **Manufacturing AI Dataset** catalog; (3) filter by **chemical / surface-treatment (plating)**; (4) read the **data specification** (variable meaning, unit, **normal range**) and the usage guidebook on the detail page; (5) download the **cleaned training CSV** and upload it to Google Colab.

A KAMP dataset bundles several components: raw data, the **cleaned training data** (used directly in practice), the **data specification** (meaning, unit, normal range — for interpreting variables and judging outliers), a usage guidebook, and sample algorithms for comparison.

**Practical tip**: capture the spec's **normal ranges before analysis** — they become your **outlier criteria**. If pH's normal range is 6.5–7.5, values outside it are suspected sensor errors or process anomalies. Without the normal range, you have no basis to judge whether a value is abnormal. Catalog: https://www.kamp-ai.kr/aidataList`},{title:"사례 시나리오 — '한빛케미칼' 반응공정",titleEn:"Case Scenario — 'Hanbit Chemical' Reaction Process",content:`추상적인 데이터가 아니라 **하나의 현장 이야기**로 분석을 끌고 갑니다. (KAMP 데이터를 본떠 구성한 학습용 시나리오입니다.)

### 상황 — 들쭉날쭉한 수율

울산의 중소 정밀화학 기업 **'한빛케미칼'**(가상)은 **배치(batch) 반응공정**으로 제품을 생산합니다. 문제는 **수율이 배치마다 들쭉날쭉**하다는 것입니다. 똑같은 레시피로 작업하는데 어떤 날은 92%, 어떤 날은 78%가 나옵니다. 현장에서는 "그냥 운"이라고 말하지만, 정말 운일까요?

### 핵심 질문 3가지

1. **수율을 좌우하는 변수는 무엇인가?** — 온도? pH? 체류시간? 무엇이 진짜 원인인가.
2. **불량 배치를 미리 예측할 수 있나?** — 반응이 끝나기 전에 "이 배치는 불량 위험"을 알 수 있나.
3. **수율이 가장 높은 운전조건 구간은?** — 어떤 조건으로 운전하면 안정적으로 고수율이 나오나.

### 데이터 한눈에 보기 — 배치 로그

| 배치 | 온도(℃) | pH | 체류(min) | 수율(%) | 판정 |
|------|---------|-----|-----------|---------|------|
| B-001 | 80 | 7.0 | 42 | 92 | 양품 |
| B-002 | 71 | 6.2 | 33 | 78 | 불량 |
| B-003 | 82 | 7.1 | 45 | 94 | 양품 |
| B-004 | 68 | 6.0 | 30 | 74 | 불량 |

### 데이터 구조 읽기

> **행(row) = 배치 1회, 열(column) = 변수.** 입력 변수(운전조건: 온도·pH·체류시간 등)가 결과(수율·판정)로 이어지는 **입력 → 출력 구조**입니다.

이런 구조는 **지도학습(supervised learning)** 문제입니다.

- **분류(Classification)**: 양품/불량을 맞히기 (판정 예측)
- **회귀(Regression)**: 수율 % 값을 맞히기 (수치 예측)

겉으로 보기에도 B-002, B-004(저온·저pH·짧은 체류)는 불량, B-001, B-003(고온·중성·긴 체류)은 양품입니다. **"운"이 아니라 운전조건의 차이**일 가능성이 보입니다. 이 직관을 데이터로 검증하는 것이 이 모듈의 일입니다.`,contentEn:`We drive the analysis through **one field story** (a learning scenario modeled on KAMP data).

**'Hanbit Chemical'** (fictional), a small fine-chemical firm in Ulsan, runs a **batch reaction process**, but **yield varies batch to batch** — 92% one day, 78% another, with the same recipe. The floor calls it "luck." Is it?

Three core questions: (1) which variable drives yield — temperature, pH, residence time? (2) can a defective batch be predicted before the reaction finishes? (3) where is the operating window for the highest yield?

The data is a **batch log**: each **row is one batch**, each **column a variable**, forming an **input → output** structure (operating conditions → yield/verdict). This is a **supervised learning** problem — **classification** (good/defective) plus **regression** (predicting the yield value). Even at a glance, low-temperature, low-pH, short-residence batches are defective while warmer, neutral, longer-residence batches are good — suggesting it is **not luck but operating conditions.** Verifying that intuition with data is this module's job.`},{title:"STEP 1 · 공정 변수 명세",titleEn:"STEP 1 · Process Variable Specification",content:`분석에 앞서 **변수가 무엇을 의미하는지** 정확히 알아야 합니다. 화학 공정에서는 변수 하나하나가 품질에 직결되므로, 명세를 읽는 것이 곧 도메인 지식입니다.

### 공정 변수 명세표

| 변수 | 단위 | 의미 / 품질 영향 | 정상범위 |
|------|------|------------------|----------|
| 반응 온도 | ℃ | 반응 속도·평형을 좌우 | 70–85 |
| 반응 압력 | bar | 전환율(conversion)에 영향 | 2.0–4.0 |
| pH | – | 촉매 활성·부반응 억제 | 6.5–7.5 |
| 원료 농도 | % | 수율·점도에 영향 | 15–25 |
| 촉매 투입량 | kg | 반응 효율 결정 | 3–6 |
| 교반 속도 | rpm | 혼합 균일도 | 150–250 |
| 체류 시간 | min | 반응 완결도 | 35–50 |
| **수율(목표)** | % | **예측 대상(타깃)** | ≥90 |

### 변수 읽는 법

- **입력 변수(7개)**: 온도·압력·pH·농도·촉매량·교반속도·체류시간 → 우리가 **조절하는** 운전조건.
- **목표 변수(1개)**: 수율 → 우리가 **예측·개선하려는** 결과.
- **정상범위**: 명세서가 알려주는 "정상 운전 구간". 이 범위를 벗어난 값은 이상치 후보입니다.

> ⚠️ **주의**: 위 변수명과 범위는 **학습용 예시값**입니다. 실제 분석에서는 반드시 **KAMP 데이터셋 명세서의 실제 값**으로 교체하세요. 데이터셋마다 변수 구성과 정상범위가 다릅니다.

### 도메인 지식이 분석을 살린다

같은 데이터라도 변수의 화학적 의미를 알면 해석이 깊어집니다. 예를 들어 "체류시간이 짧으면 수율이 낮다"는 결과를, 화학을 아는 사람은 **"반응이 완결되기 전에 배출돼 미반응 원료가 남았다"**고 해석합니다. **도메인 지식 + 데이터 = 가장 강한 분석가**입니다.`,contentEn:`Before analysis you must know **what each variable means.** In a chemical process every variable connects directly to quality, so reading the spec *is* domain knowledge.

The variable spec lists seven **input variables** we control — reaction temperature (℃, 70–85), pressure (bar, 2.0–4.0), pH (6.5–7.5), feed concentration (%, 15–25), catalyst charge (kg, 3–6), agitation speed (rpm, 150–250), residence time (min, 35–50) — and one **target variable**, yield (%, target ≥90), the result we predict and improve. The **normal range** marks the "normal operating window"; values outside it are outlier candidates.

⚠️ These names and ranges are **illustrative**; in real work replace them with the **actual values from the KAMP dataset's specification**, which differ per dataset.

**Domain knowledge enriches analysis**: a chemist reads "short residence time → low yield" as "the reaction was discharged before completion, leaving unreacted feed." Domain knowledge + data = the strongest analyst.`},{title:"STEP 2 · 전처리 — 분석 가능한 표 만들기",titleEn:"STEP 2 · Preprocessing — Making an Analyzable Table",content:`현실의 공정 데이터는 결코 깨끗하지 않습니다. 센서가 가끔 값을 빠뜨리고, 오작동으로 비현실적 값을 찍기도 합니다. **전처리**는 이 지저분한 데이터를 분석 가능한 표로 정리하는, 가장 손이 많이 가는 단계입니다.

### 전처리 4가지 작업

1. **결측 확인·처리** — 센서 누락값을 점검합니다. 처리 방법은 ① **변수별 평균으로 대체**하거나 ② 결측이 많은 배치는 **분석에서 제외**합니다.
2. **이상치 판단** — 명세서의 **정상범위를 벗어난 값**을 점검합니다. 예: pH 14.0, 온도 9999 같은 값은 센서 오류로 보고 보정하거나 제거합니다.
3. **라벨 정의** — 분류 분석을 위해 정답표(라벨)를 만듭니다. **수율 ≥ 90% = '양품', 미만 = '불량'**.
4. **단위·형 정리** — 단위를 통일하고(℃, bar, %), 숫자/문자 형식을 정리합니다.

### 전처리 프롬프트 (PTCF 프레임워크)

생성형 AI에게 전처리 코드를 맡길 때는 **PTCF**(Persona·Task·Context·Format)로 명확하게 지시합니다.

\`\`\`text
[Persona] 너는 화학 공정 데이터 분석가야.

[Task] 이 배치 데이터에서 pH가 6.5~7.5를 벗어난 행을
이상치로 표시하고, 결측은 변수별 평균으로 대체해줘.
그리고 수율 90% 이상은 '양품', 미만은 '불량'으로
'판정' 열을 새로 추가해줘.

[Context] 데이터는 화학 반응공정 배치 로그이고,
열은 온도·압력·pH·농도·촉매량·교반속도·체류시간·수율이야.
정상범위는 데이터 명세서를 따른다.

[Format] pandas 코드로, 각 줄에 한글 주석을 달아
초보자도 이해할 수 있게 작성해줘.
\`\`\`

> AI가 만든 코드를 **그대로 믿지 말고**, 결과 표를 직접 확인하세요. "이상치로 표시된 행이 정말 이상한가?", "양품/불량 라벨이 제대로 붙었나?"를 사람이 검증해야 합니다.

### 전처리가 분석의 절반

> "Garbage in, garbage out." — 더러운 데이터를 넣으면 더러운 결과가 나옵니다. 화려한 모델보다 **깨끗한 데이터**가 좋은 분석의 8할입니다.`,contentEn:`Real process data is never clean — sensors drop values and occasionally log impossible ones. **Preprocessing** turns this mess into an analyzable table and is the most labor-intensive step.

Four tasks: (1) **handle missing values** — replace with the **per-variable mean** or drop batches with many gaps; (2) **judge outliers** — flag values outside the spec's **normal range** (e.g., pH 14.0, temperature 9999 = sensor error); (3) **define labels** — for classification, **yield ≥ 90% = "good," below = "defective"**; (4) **standardize units and types** (℃, bar, %).

When delegating preprocessing code to AI, instruct it clearly with **PTCF** (Persona, Task, Context, Format): give it the analyst persona, the task (flag pH outside 6.5–7.5, mean-impute missing, add a good/defective label column), the context (a chemical batch log with the listed columns and spec-based normal ranges), and the format (pandas code with Korean comments a beginner can follow).

**Do not blindly trust** AI-generated code — inspect the resulting table: are flagged rows truly abnormal, are labels correct? As the saying goes, "garbage in, garbage out" — **clean data**, not a fancy model, is 80% of good analysis.`},{title:"STEP 3 · 탐색 분석 (기초통계 + 상관)",titleEn:"STEP 3 · Exploratory Analysis (Statistics + Correlation)",content:`깨끗한 데이터를 손에 넣었으니, 이제 **데이터가 무슨 말을 하는지 들어봅니다.** 모델을 만들기 전에 기초통계와 상관분석으로 데이터의 성격을 파악하는 단계가 **탐색적 데이터 분석(EDA)**입니다.

### 기초통계 — '들쭉날쭉'을 숫자로 확인

| 지표 | 값 | 읽는 법 |
|------|-----|---------|
| 평균 수율 | 86.4% | 목표(≥90%)에 못 미친다 |
| 표준편차 | ±6.1%p | **편차가 크다 = 들쭉날쭉이 사실** |
| 불량률 | 23% | 4배치 중 1개가량 불량 |

> 현장의 "수율이 들쭉날쭉하다"는 막연한 느낌이, **표준편차 ±6.1%p**라는 숫자로 확인되었습니다. 이것이 데이터 문해력입니다 — 느낌을 **측정 가능한 사실**로 바꾸는 것.

### 상관분석 — 무엇이 수율과 함께 움직이나

각 운전변수가 수율과 얼마나 함께 움직이는지(상관계수)를 봅니다.

| 변수 | 수율과의 연관 | 해석 |
|------|---------------|------|
| **반응 온도** | 매우 강함 (1순위) | 반응 속도·평형 직결 → **최우선 관리** |
| **체류 시간** | 매우 강함 (1순위) | 반응 완결도 직결 → **최우선 관리** |
| pH | 강함 (상위) | 촉매 활성과 연결 |
| 원료 농도 | 중간 | 부분적 영향 |
| 교반 속도 | 약함 | 영향 작음 |

→ **반응온도와 체류시간이 수율과 가장 강하게 연관**됩니다. 즉, 이 두 변수가 **1순위 관리 변수**입니다. pH도 상위권으로, 촉매 활성과 직결되는 화학적 의미와 일치합니다.

### 반드시 기억할 한 문장

> **상관관계 ≠ 인과관계.** 온도와 수율이 함께 움직인다고 해서 "온도가 수율의 원인"이라고 단정하면 안 됩니다. 숨은 제3의 변수가 둘 다를 움직였을 수도 있습니다. 상관은 **"어디를 더 파볼지"를 알려주는 출발점**이지, 결론이 아닙니다. 최종 판단은 도메인 지식과 검증으로 보완합니다.`,contentEn:`With clean data in hand, we **listen to what it says.** Before modeling, **exploratory data analysis (EDA)** uses basic statistics and correlation to grasp the data's character.

**Basic statistics** turn the vague "yield varies" into numbers: mean yield 86.4% (below the ≥90% target), standard deviation ±6.1%p (**large spread confirms the variability is real**), defect rate 23% (about one in four batches). Data literacy converts a feeling into a **measurable fact.**

**Correlation analysis** shows what moves with yield: **reaction temperature** and **residence time** are most strongly associated (the top-priority control variables), pH is also high (consistent with its link to catalyst activity), concentration is moderate, and agitation speed is weak. So the two key levers to manage are temperature and residence time.

Remember one sentence: **correlation ≠ causation.** That temperature and yield move together does not prove temperature *causes* yield — a hidden third variable could drive both. Correlation tells you **where to dig next**, not the conclusion; final judgment needs domain knowledge and verification.`},{title:"STEP 4 · 불량 배치 예측 모델",titleEn:"STEP 4 · Defective-Batch Prediction Model",content:`이제 핵심 질문 2번에 답합니다 — **"불량 배치를 미리 예측할 수 있나?"** 운전조건(입력)으로 양품/불량(출력)을 맞히는 **예측 모델**을 만듭니다. 코드는 생성형 AI가 쓰고, 우리는 절차와 평가를 이해합니다.

### 예측 모델 만들기 4단계

1. **데이터 분리** — 입력(운전 7변수)과 정답(양품/불량)을 나누고, **학습용 70% / 검증용 30%**로 쪼갭니다. 검증용은 모델이 "처음 보는" 데이터로, 진짜 실력을 잽니다.
2. **모델 학습** — **의사결정나무(Decision Tree)·랜덤포레스트(Random Forest)** 같은 분류 모델을 학습시킵니다. (랜덤포레스트는 나무 여러 그루의 다수결로 더 안정적)
3. **예측·평가** — 검증용 데이터로 예측하고 성능을 측정합니다. **정확도·정밀도·재현율·혼동행렬**로 평가합니다.
4. **변수 중요도** — 모델이 어떤 변수를 중요하게 봤는지 확인 → **현장 관리 포인트**로 연결합니다.

### 모델 성능 (예시)

| 지표 | 값 | 의미 |
|------|-----|------|
| 정확도(Accuracy) | 91% | 전체 중 맞힌 비율 |
| 정밀도(Precision) | 0.88 | '불량'이라 한 것 중 진짜 불량 비율 |
| 재현율(Recall) | 0.84 | **진짜 불량 중 잡아낸 비율** |
| F1 점수 | 0.86 | 정밀도·재현율의 균형 |

### 정확도의 함정 — 반드시 알아야 할 함정

> 불량이 드물면(예: 5%), 모델이 무조건 **"전부 양품"**이라고만 찍어도 정확도가 **95%**로 높게 나옵니다. 하지만 이 모델은 **불량을 단 하나도 못 잡는** 쓸모없는 모델입니다.

그래서 정확도만 보면 안 됩니다. 화학 품질 분석에서 정말 중요한 것은 **"불량을 놓치지 않는 능력"**, 즉 **재현율(Recall)**과 **혼동행렬(Confusion Matrix)**입니다.

| | 예측: 양품 | 예측: 불량 |
|---|-----------|-----------|
| **실제: 양품** | 정답 ✓ | 오경보 (양품을 불량으로) |
| **실제: 불량** | **놓침 ✗ (가장 위험)** | 정답 ✓ |

> 화학 공정에서 **불량을 양품으로 놓치는 것(왼쪽 아래)**이 가장 위험합니다. 불량 제품이 출하되면 클레임·리콜·안전 문제로 이어집니다. 그래서 **재현율**을 중점적으로 봅니다.

### 변수 중요도 → 현장 액션

모델이 꼽은 중요 변수가 STEP 3 상관분석과 일치하면(온도·체류시간 상위) 결과의 신뢰도가 높아집니다. 이 변수들이 곧 **현장에서 집중 관리할 포인트**입니다.`,contentEn:`Now we answer the second question — **"can defective batches be predicted in advance?"** We build a **prediction model** that maps operating conditions (input) to good/defective (output). AI writes the code; we understand the procedure and evaluation.

Four steps: (1) **split** input (7 operating variables) and label (good/defective), then **70% train / 30% validation** (validation is "unseen" data measuring true skill); (2) **train** a classifier such as a **decision tree or random forest** (the forest's majority vote is more stable); (3) **predict and evaluate** with accuracy, precision, recall, and the confusion matrix; (4) read **variable importance** to derive **field control points.**

Example performance: accuracy 91%, precision 0.88, **recall 0.84**, F1 0.86.

**The accuracy trap**: if defects are rare (say 5%), a model that always says "all good" still scores 95% accuracy — yet catches **zero** defects and is useless. So never look at accuracy alone. In chemical quality work, what matters is **not missing defects**, i.e., **recall** and the **confusion matrix**. Missing a defect (calling a defective batch good) is the most dangerous error, leading to claims, recalls, and safety issues — so we focus on recall. When the model's important variables match STEP 3's correlations (temperature, residence time on top), confidence rises, and those become the **field control points.**`},{title:"STEP 5 · 최적 운전조건 & 산출물",titleEn:"STEP 5 · Optimal Operating Conditions & Deliverables",content:`마지막 핵심 질문 — **"수율이 가장 높은 운전조건 구간은?"** 분석 결과를 모아 **데이터가 가리키는 최적 운전 구간**을 도출하고, 현장이 바로 쓸 수 있는 산출물로 만듭니다.

### 데이터가 가리키는 최적 운전 구간

| 변수 | 최적 구간 | 근거 |
|------|-----------|------|
| **반응 온도** | 78–82℃ | 이 구간에서 수율 평균 최고·편차 최소 |
| **체류 시간** | 42–46 min | 미만이면 반응 미완결로 수율 급감 |
| **pH** | 6.9–7.2 | 촉매 활성이 최적 |

> 세 변수를 위 구간에서 운전하면, 들쭉날쭉하던 수율이 **안정적으로 고수율**로 수렴합니다. 이것이 "운"의 정체였습니다 — 운이 아니라 **운전조건의 차이**였습니다.

### 현장 액션 — "레시피가 아니라 운전조건을 관리하라"

한빛케미칼의 진짜 문제는 레시피가 아니었습니다. **같은 레시피라도 운전조건이 흔들리면 수율이 흔들립니다.**

- 핵심 3변수(온도·체류시간·pH)에 **관리 한계선(관리도)**을 걸어 둡니다.
- 이 구간을 벗어나면 즉시 경보하는 **실시간 모니터링**을 운영합니다.
- 작업 표준(SOP)에 최적 구간을 명문화해 작업자 간 편차를 줄입니다.

### 산출물 3종 (모듈 6과 연결)

| 산출물 | 도구 | 내용 |
|--------|------|------|
| **공정 분석 리포트** | Gemini Canvas | 분석 과정·결과·최적조건을 문서화 |
| **품질 모니터링 대시보드** | Gemini Canvas | 관리도·수율 추이 시각화 |
| **NotebookLM 지식화** | NotebookLM | 명세서·리포트를 올려 Q&A 지식베이스로 |

> 분석은 **차트로 끝나면 안 됩니다.** "그래서 무엇을 할 것인가"라는 **행동(인사이트)**으로 이어질 때 비로소 가치가 생깁니다. 산출물은 그 행동을 현장에 전달하는 통로입니다.`,contentEn:`The final question — **"where is the highest-yield operating window?"** We gather the results into the **optimal window the data points to** and turn it into deliverables the floor can use immediately.

The data-driven optimal window: **reaction temperature 78–82℃** (highest mean yield, smallest spread), **residence time 42–46 min** (below it the reaction is incomplete and yield drops sharply), **pH 6.9–7.2** (peak catalyst activity). Running all three in these bands converges the once-erratic yield to **stable high yield** — the "luck" was actually **differences in operating conditions.**

**Field action — "manage operating conditions, not the recipe."** The same recipe with drifting conditions yields drifting results. Put **control limits (control charts)** on the three key variables, run **real-time monitoring** that alarms on excursions, and codify the optimal window in the SOP to reduce operator-to-operator variation.

**Three deliverables** (linking to Module 6): a **process analysis report** (Gemini Canvas), a **quality monitoring dashboard** with control charts and yield trends (Gemini Canvas), and a **NotebookLM knowledge base** built from the spec and report. Analysis must not **end at a chart** — value appears only when it becomes **action**, and deliverables carry that action to the floor.`},{title:"화학 데이터 윤리 & 모듈 정리",titleEn:"Chemical Data Ethics & Module Summary",content:`화학 데이터는 일반 데이터와 다른 **특수성**을 가집니다. 분석 역량만큼이나 **책임감 있게 다루는 자세**가 중요합니다.

### 화학 데이터의 4가지 특수성

| 원칙 | 내용 |
|------|------|
| **공정 기밀 보호** | 레시피·촉매·배합비는 **영업비밀**. 외부 AI에 원본 입력 금지, **익명화 후** 사용(원료1·원료2, "30~35% 범위") |
| **안전과 직결** | 품질 예측을 **안전 판단으로 오용 금지**. 공정안전(PSM)이 우선이며, 품질 모델은 안전 시스템을 대체하지 않음 |
| **검증 필수** | AI가 제시한 최적조건은 **소규모 검증·전문가 확인 후** 현장 적용. 시뮬레이션 결과를 무검증으로 실공정에 반영 금지 |
| **근거·재현성** | 분석에 쓴 데이터·조건·프롬프트를 기록해 누구나 같은 결과를 재현할 수 있게 |

> 화학 분석가는 "AI를 잘 쓰는 사람"이자 동시에 **"AI를 안전하게 쓰는 사람"**입니다. 강력한 도구일수록 책임감 있게 다뤄야 합니다.

### 모듈 5 핵심 요약

이번 모듈에서는 **KAMP 화학 공정 데이터**로 1회 완결형 분석을 끝까지 수행했습니다.

- **STEP 0~1**: KAMP에서 화학 데이터 확보, 명세서로 변수·정상범위 이해
- **STEP 2**: 전처리(결측·이상치·라벨·단위)로 분석 가능한 표 만들기
- **STEP 3**: 기초통계로 '들쭉날쭉' 확인(±6.1%p), 상관분석으로 핵심 변수(온도·체류시간) 발견
- **STEP 4**: 예측 모델로 불량 배치 예측, **재현율·혼동행렬**로 평가(정확도 함정 회피)
- **STEP 5**: 최적 운전조건(온도 78–82℃·체류 42–46min·pH 6.9–7.2) 도출, 산출물 3종

### 학습 체크리스트

- [ ] KAMP에서 화학 계열 데이터를 찾아 다운로드했는가?
- [ ] 명세서의 변수 의미와 **정상범위를 캡처**했는가?
- [ ] 전처리(결측·이상치 처리, 양품/불량 라벨 정의)를 수행했는가?
- [ ] 기초통계와 상관분석으로 핵심 변수를 확인했는가?
- [ ] 예측 모델을 만들고 **재현율·혼동행렬**로 점검했는가?
- [ ] 데이터로 **최적 운전조건 구간**을 도출했는가?
- [ ] 리포트·대시보드 산출물을 만들었는가?

### 다음 모듈 예고 — 분석 결과 시각화

> 분석으로 찾은 인사이트도, **잘 보여주지 못하면 전달되지 않습니다.** **모듈 6 — AI 도구 활용 분석 결과 시각화**에서는 이번 분석 결과를 관리도·추이 그래프·대시보드로 시각화하고, 경영진과 현장이 한눈에 이해하는 산출물로 완성하는 법을 배웁니다.

### 활용 자원

- **KAMP 데이터셋**: https://www.kamp-ai.kr/aidataList — 화학·표면처리 데이터, 명세서·가이드북 포함
- **Colab + Gemini**: 전처리·탐색·예측 코드 생성과 실행
- **NotebookLM**: 명세서·리포트를 올려 지식베이스로 구조화`,contentEn:`Chemical data has **special characteristics** beyond ordinary data, so handling it **responsibly** matters as much as analytical skill.

Four principles: **protect process secrets** — recipes, catalysts, and blend ratios are trade secrets, so never input originals to external AI; **anonymize** (Material 1/2, "30–35% range"). **Tied to safety** — never misuse a quality prediction as a **safety judgment**; process safety (PSM) comes first and a quality model never replaces safety systems. **Verification required** — apply AI-suggested optimal conditions only after **small-scale verification and expert review**, never push unverified simulation results to the real process. **Evidence and reproducibility** — record data, conditions, and prompts so anyone can reproduce the result. A chemical analyst both uses AI well and **uses it safely.**

**Module summary**: with **KAMP chemical process data** we ran a complete analysis — STEP 0–1 (acquire data, read the spec's variables and normal ranges), STEP 2 (preprocess missing/outliers/labels/units), STEP 3 (statistics confirm ±6.1%p variability; correlation finds temperature and residence time), STEP 4 (predict defects, evaluate with **recall and the confusion matrix** to avoid the accuracy trap), STEP 5 (derive the optimal window — 78–82℃, 42–46 min, pH 6.9–7.2 — and three deliverables).

**Next — Module 6, Visualizing Analysis Results**: insights not shown well are not communicated, so we turn these results into control charts, trend graphs, and dashboards that management and the floor grasp at a glance. Resources: KAMP (kamp-ai.kr/aidataList), Colab + Gemini, NotebookLM.`}]};function c(){const{language:t}=i(),a=t==="ko";return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header-ed",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"eyebrow",children:"Module 05"}),e.jsx("h2",{children:a?"KAMP 화학공정 품질 데이터 분석":"KAMP Chemical Process Quality Analysis"}),e.jsx("p",{children:a?"한빛케미칼 반응공정 — 수율 예측과 최적 운전조건 도출 · 1.0H":"Reaction process yield prediction and optimization · 1.0H"})]})}),e.jsx(n,{seoTitle:"모듈 5 · KAMP 화학공정 품질 데이터 분석",seoTitleEn:"Module 5 · KAMP Chemical Process Quality Analysis",seoDescription:"KAMP 화학 공정 데이터로 반응공정 운전변수와 수율의 관계를 분석하고, 불량 배치를 예측하며 최적 운전조건을 도출하는 화학 트랙 핵심 실습 강의안",path:"/module5",dataFiles:[s]})]})}export{c as default};
