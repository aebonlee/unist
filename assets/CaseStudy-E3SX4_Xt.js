import{u as i,j as e}from"./index-DzvBRcV1.js";import{G as n}from"./GuidePage-C1KC9Psq.js";import"./SEOHead-B_bVkK4k.js";const s="https://colab.research.google.com/drive/1wTPSoOS7bbK4h3YobmkXfrKCLXtExmkW?usp=sharing",r="https://www.kamp-ai.kr/aidataDetail?AI_SEARCH=%ED%99%94%ED%95%99&page=1&DATASET_SEQ=8&DISPLAY_MODE_SEL=CARD&EQUIP_SEL=&GUBUN_SEL=&FILE_TYPE_SEL=&WDATE_SEL=",o={id:"case-melt-tank",icon:"fa-temperature-half",title:"실습 사례 · 용해탱크 공정 품질 예측",titleEn:"Case Study · Melting-Tank Quality Prediction",sections:[{title:"사례 개요 — 무엇을 하는 실습인가",titleEn:"Overview",content:`이 사례는 KAMP에서 **'화학'으로 검색해 찾은 「용해탱크 AI 데이터셋」**을 Google Colab에서 분석한 실습입니다. 분말·액상 원재료를 정제수에 **용해·혼합**하는 공정에서, 운전 변수(용해 온도·교반 속도·중량)가 **최종 품질**에 어떻게 영향을 주는지 데이터로 규명하고, 품질을 사전에 예측하는 것이 목표입니다.

> 용해·혼합 공정은 업종 분류상 식품가공이지만, **온도·교반·체류로 품질이 결정되는 구조는 화학 반응공정(모듈 5)과 동일**합니다. 같은 분석 방법론이 도메인을 넘어 통한다는 것을 보여주는 사례입니다.

### 이 실습에서 답하는 질문

- 품질(검사값)을 좌우하는 운전 변수는 무엇인가?
- 온도·교반이 흔들릴 때 품질은 어떻게 변하는가?
- 다음 시점의 품질을 미리 예측할 수 있는가?

### 실습 환경

- **분석 도구**: Google Colab + Gemini (코드 자동 생성), pandas·numpy
- **모델링**: 시계열 기반 품질 예측(LSTM) — Keras·TensorFlow
- **데이터 출처**: KAMP 인공지능 제조 플랫폼 (용해탱크 데이터셋, KAIST 외 제공)

아래는 위 Colab 노트북의 분석 흐름을, 이 과정의 워크플로우(수집 → 전처리 → 분석 → 인사이트)에 맞춰 정리한 것입니다. 실제 코드는 상단의 **Colab 노트북 열기**에서 직접 실행해 볼 수 있습니다.`,contentEn:`This case analyzes KAMP's **"Melting-Tank AI dataset"** in Google Colab. In a process that dissolves and mixes raw materials in purified water, the goal is to relate operating variables (melt temperature, stirring speed, weight) to final quality and to predict quality in advance.

Although classified under food processing, the structure — quality driven by temperature, stirring, and residence — is identical to the chemical reaction process in Module 5, showing the same methodology transfers across domains.

The environment is Colab + Gemini for code generation, with a time-series quality prediction model (LSTM via Keras/TensorFlow). The following walkthrough maps the notebook's flow onto the course workflow (collect → preprocess → analyze → insight).`},{title:"데이터셋 이해 — 용해탱크 공정 변수",titleEn:"Understanding the Dataset",content:`분석 전에 각 변수가 무엇을 의미하는지부터 파악합니다.

| 변수 | 의미 | 역할 |
|------|------|------|
| \`STD_DT\` | 수집 시간(타임스탬프) | 시계열 정렬 기준 |
| \`MELT_TEMP\` | 용해 온도 | 용해도·반응 속도에 직접 영향 |
| \`MOTORSPEED\` | 교반(모터) 속도 | 혼합 균일도·열전달 |
| \`MELT_WEIGHT\` | 용해 중량(투입량) | 배합 비율·점도 |
| \`INSP\` | 최종 품질 검사값 | **예측 대상**(품질 판정) |

### 데이터 규모

- **행 수**: 약 835,200건 (초·분 단위로 쌓인 시계열)
- **용량**: 약 35.2MB · CSV 형식
- **필요 패키지**: numpy, pandas, keras, tensorflow

> 입력 변수(온도·교반·중량) → 출력(품질 검사값) 구조이며, 시간 순서가 있는 **시계열 데이터**라는 점이 핵심입니다. 그래서 단순 분류뿐 아니라 LSTM 같은 시계열 모델을 쓸 수 있습니다.`,contentEn:`Before analysis, understand each variable: STD_DT (timestamp, for time ordering), MELT_TEMP (melt temperature, affects dissolution rate), MOTORSPEED (stirring speed, mixing uniformity), MELT_WEIGHT (charge weight, blend ratio), and INSP (final quality inspection — the prediction target).

The dataset has ~835,200 rows (~35.2MB CSV) and uses numpy, pandas, keras, and tensorflow. The input variables map to the quality output, and because it is time-series data, time-series models like LSTM apply in addition to plain classification.`},{title:"STEP 1 — 데이터 로드와 구조 파악",titleEn:"Step 1 — Load and Inspect",content:`Colab에 CSV를 업로드(또는 드라이브 마운트)한 뒤 데이터의 모양부터 확인합니다.

\`\`\`python
import pandas as pd

# 1) 데이터 로드
df = pd.read_csv("melting_tank.csv")

# 2) 구조 파악
print(df.shape)        # (행, 열) — 약 (835200, 5)
print(df.info())       # 컬럼·타입·결측 개요
print(df.describe())   # 수치형 기초 통계(평균·표준편차·사분위)

# 3) 시간 컬럼을 시계열로 변환 후 정렬
df["STD_DT"] = pd.to_datetime(df["STD_DT"])
df = df.sort_values("STD_DT").reset_index(drop=True)
\`\`\`

### Gemini 활용 (PTCF)

\`\`\`text
[Persona] 너는 제조 공정 데이터 분석가야.
[Task] melting_tank.csv를 읽어 행·열 수, 결측치,
 변수별 기초 통계를 보여주는 코드를 작성해줘.
[Context] 컬럼은 STD_DT(시간), MELT_TEMP, MOTORSPEED,
 MELT_WEIGHT, INSP(품질)이고 시계열 데이터야.
[Format] 한국어 주석을 포함한 pandas 코드로만 출력해.
\`\`\``,contentEn:"After uploading the CSV to Colab, inspect the data: `read_csv`, then `shape`, `info()`, and `describe()`. Convert STD_DT to datetime and sort by time to respect the time-series order. A PTCF prompt lets Gemini generate this loading-and-summary code automatically."},{title:"STEP 2 — 전처리와 품질 라벨 정의",titleEn:"Step 2 — Preprocessing",content:`센서 시계열에는 결측·이상치가 섞입니다. 분석 가능한 형태로 다듬고, 품질 라벨을 정의합니다.

\`\`\`python
# 1) 결측 처리 — 직전 값으로 채움(시계열에 적합) 후 잔여는 평균
df = df.ffill()
df = df.fillna(df.mean(numeric_only=True))

# 2) 이상치 점검 — IQR 범위를 벗어난 값 확인
for col in ["MELT_TEMP", "MOTORSPEED", "MELT_WEIGHT"]:
    q1, q3 = df[col].quantile([.25, .75])
    iqr = q3 - q1
    low, high = q1 - 1.5*iqr, q3 + 1.5*iqr
    print(col, "이상치 수:", ((df[col] < low) | (df[col] > high)).sum())

# 3) 품질 라벨 — 검사값 기준으로 양품/불량 정의(기준은 명세서 따라 조정)
df["판정"] = (df["INSP"] >= df["INSP"].median()).map({True: "양품", False: "불량"})
\`\`\`

> 시계열은 **직전 값 채움(ffill)** 이 평균 대체보다 자연스러운 경우가 많습니다. 이상치 기준(IQR·정상범위)은 KAMP 데이터 명세서 값으로 교체하세요.`,contentEn:"Sensor time-series contains gaps and outliers. Fill missing values with forward-fill (natural for time-series) then the mean, check outliers using the IQR rule per variable, and define a quality label from the inspection value (adjust the threshold to the dataset spec). Forward-fill often suits time-series better than mean imputation."},{title:"STEP 3 — EDA: 변수와 품질의 관계",titleEn:"Step 3 — EDA",content:`품질이 좋을 때와 나쁠 때 운전 변수가 어떻게 다른지, 무엇이 품질과 함께 움직이는지 살펴봅니다.

\`\`\`python
# 1) 품질 그룹별 변수 평균 비교
print(df.groupby("판정")[["MELT_TEMP", "MOTORSPEED", "MELT_WEIGHT"]].mean())

# 2) 변수-품질 상관
print(df[["MELT_TEMP", "MOTORSPEED", "MELT_WEIGHT", "INSP"]].corr(numeric_only=True))

# 3) 시각화 — 상관 히트맵 + 시간에 따른 온도·품질 추이
import seaborn as sns
sns.heatmap(df[["MELT_TEMP","MOTORSPEED","MELT_WEIGHT","INSP"]].corr(), annot=True, cmap="Blues")
\`\`\`

### 읽는 법

- **양품/불량 그룹의 평균 차이**가 큰 변수가 품질을 가르는 핵심 변수입니다.
- 상관계수가 높은 변수는 1순위 관리 대상 — 단, **상관 ≠ 인과**임을 잊지 마세요.
- 시간 축으로 보면 특정 구간에서 온도가 흔들릴 때 품질이 함께 출렁이는지 확인할 수 있습니다.`,contentEn:"Compare operating variables between good and bad quality groups (`groupby`), compute correlations with the inspection value, and visualize a correlation heatmap and time trends. Variables with large group-mean differences and high correlation are the primary levers — but remember correlation is not causation."},{title:"STEP 4 — 품질 예측 모델(시계열 LSTM)",titleEn:"Step 4 — Prediction Model",content:`이 데이터셋의 본래 목적은 **시계열 기반 예지적 품질 예측**입니다. 과거 운전 변수의 흐름으로 다음 시점의 품질을 예측하는 LSTM 모델을 만듭니다.

\`\`\`python
import numpy as np
from sklearn.preprocessing import MinMaxScaler

# 1) 입력(운전변수)·정답(품질) 구성 + 스케일링
features = ["MELT_TEMP", "MOTORSPEED", "MELT_WEIGHT"]
X = MinMaxScaler().fit_transform(df[features])
y = df["INSP"].values

# 2) 시계열 윈도우 만들기 (과거 n스텝 → 다음 품질)
def make_seq(X, y, n=30):
    xs, ys = [], []
    for i in range(len(X) - n):
        xs.append(X[i:i+n]); ys.append(y[i+n])
    return np.array(xs), np.array(ys)

Xs, ys = make_seq(X, y, n=30)

# 3) LSTM 모델 (Keras)
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
model = Sequential([LSTM(32, input_shape=(30, len(features))), Dense(1)])
model.compile(optimizer="adam", loss="mse")
model.fit(Xs, ys, epochs=5, batch_size=256, validation_split=0.2)
\`\`\`

> **간단 버전**으로는 분류 모델(랜덤포레스트)로 양품/불량을 예측해도 됩니다. 무엇을 쓰든 **학습/검증 분리**와 성능 지표(정확도·재현율·혼동행렬, 회귀라면 MSE·RMSE) 확인은 필수입니다. 불량이 드물면 정확도 함정에 빠지지 않도록 **재현율**을 함께 보세요.`,contentEn:"The dataset's original purpose is predictive, time-series quality analysis. Scale the operating variables, build sliding windows (past n steps → next quality), and train an LSTM (Keras) to predict the next inspection value. A simpler alternative is a Random Forest classifier for good/bad. Either way, always split train/test and check metrics (accuracy/recall/confusion matrix, or MSE/RMSE for regression), watching recall when defects are rare."},{title:"인사이트 & 마무리",titleEn:"Insight & Wrap-up",content:`분석을 **현장이 바로 쓰는 운전 가이드**로 번역합니다.

### 결론 — 무엇을 관리할 것인가

- 품질과 가장 강하게 연관된 변수(예: 용해 온도·교반 속도)에 **관리 한계선(관리도)** 을 걸고 실시간 모니터링합니다.
- 예측 모델이 '불량 위험'을 사전에 경고하면, 배치가 완성되기 전에 조치할 수 있습니다.
- "레시피가 아니라 **운전 조건**을 관리하라" — 같은 배합이라도 온도·교반이 구간을 벗어나면 품질이 무너집니다.

### 산출물

1. 품질 모니터링 대시보드(온도·교반 관리도 + 품질 추이) — Gemini Canvas
2. 공정 분석 리포트(현황·원인·예측·제안) — NotebookLM 지식화
3. 재사용 가능한 Colab 분석 노트북

### 실습 체크리스트

- [ ] KAMP에서 용해탱크 데이터셋을 내려받아 Colab에 업로드했는가?
- [ ] 시간 컬럼을 datetime으로 변환하고 정렬했는가?
- [ ] 결측(ffill)·이상치(IQR)를 처리하고 품질 라벨을 정의했는가?
- [ ] 그룹별 평균·상관으로 핵심 변수를 가려냈는가?
- [ ] 학습/검증을 분리하고 재현율·혼동행렬(또는 RMSE)을 확인했는가?
- [ ] 결과를 관리도·리포트로 정리했는가?

> 이 사례의 모든 단계는 모듈 1~6에서 배운 워크플로우 그대로입니다. **도메인(화학·식품·용접)이 달라도 분석의 뼈대는 같습니다.**`,contentEn:"Translate the analysis into a field operating guide: put control limits on the variables most linked to quality and monitor in real time; let the model warn of defect risk before a batch finishes; manage operating conditions, not just the recipe. Deliverables include a quality monitoring dashboard (Canvas), a process report (NotebookLM), and a reusable Colab notebook. Every step reuses the Module 1–6 workflow — the analysis skeleton is the same across domains."}]};function p(){const{language:a}=i(),t=a==="ko";return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header-ed",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"eyebrow",children:"Case Study · Colab + KAMP"}),e.jsx("h2",{children:t?"실습 사례 · 용해탱크 공정 품질 예측":"Case Study · Melting-Tank Quality Prediction"}),e.jsx("p",{children:t?"KAMP 용해탱크 데이터로 운전 변수와 품질의 관계를 분석하고 품질을 예측하는 Colab 실습 사례":"A Colab case predicting quality from operating variables using KAMP melting-tank data"}),e.jsxs("p",{style:{marginTop:"1.4rem",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"course-cta",style:{display:"inline-flex",alignItems:"center",gap:".5rem"},children:["▶ Colab 노트북 열기",e.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",width:"16",height:"16",children:e.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"course-cta",style:{display:"inline-flex",alignItems:"center",gap:".5rem"},children:"🗂 KAMP 데이터셋 보기"})]})]})}),e.jsx(n,{seoTitle:"실습 사례 · 용해탱크 공정 품질 예측",seoTitleEn:"Case Study · Melting-Tank Quality Prediction",seoDescription:"KAMP 용해탱크 데이터셋과 Colab을 활용해 용해 온도·교반 속도 등 운전 변수와 품질의 관계를 분석하고 시계열 품질 예측 모델을 만드는 데이터 분석 실습 사례",path:"/case-study",dataFiles:[o]})]})}export{p as default};
