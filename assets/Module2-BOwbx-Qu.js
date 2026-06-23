import{u as n,j as e}from"./index-DL44mQ5e.js";import{G as o}from"./GuidePage-DbckXl-t.js";import"./SEOHead-BeUijBbz.js";const i={id:"module2-env",icon:"fa-cloud",title:"모듈 2 · 클라우드 기반 AI 분석 환경 구축",titleEn:"Module 2 · Cloud-based AI Analysis Environment",sections:[{title:"클라우드 vs 로컬, 그리고 Colab",titleEn:"Cloud vs Local, and Colab",content:`데이터 분석을 시작할 때 가장 먼저 부딪히는 질문은 **"어디서 코드를 돌릴 것인가"**입니다. 크게 **클라우드(Google Colab)**와 **로컬(내 PC에 직접 설치)** 두 가지 길이 있습니다. 비전공자·현장 실무자라면 **설치가 필요 없는 클라우드(Colab)로 시작**하는 것을 강력히 권합니다.

### 왜 환경이 문제인가

파이썬 분석을 로컬에서 하려면 파이썬 설치, 가상환경 생성, pandas·matplotlib 같은 라이브러리 설치, 버전 충돌 해결까지 거쳐야 합니다. 분석을 시작하기도 전에 **"환경 설정 지옥"**에 빠지기 쉽습니다. 특히 최근 Apple Silicon(ARM) 맥에서는 일부 라이브러리 호환성 이슈까지 겹칩니다.

클라우드 환경인 **Google Colab**은 이 과정을 통째로 건너뜁니다. 구글 계정과 브라우저만 있으면 **이미 분석 라이브러리가 깔린 가상의 컴퓨터**를 즉시 빌려 쓸 수 있습니다.

### 클라우드(Colab) vs 로컬(내 PC) 비교

| 항목 | 클라우드 (Google Colab) | 로컬 (내 PC) |
|------|--------------------------|---------------|
| **설치** | 불필요 · 브라우저만 있으면 됨 | 파이썬·라이브러리 직접 설치 |
| **연산 자원** | 무료 GPU/TPU 제공 | 내 PC 사양에 의존 |
| **환경 일관성** | 어디서나 동일한 환경 | PC마다 버전·설정이 다름 |
| **협업·공유** | 구글 드라이브 연동, 링크 공유 쉬움 | 파일·환경 별도 전달 필요 |
| **오프라인** | 인터넷 필요 | 오프라인 사용 가능 |
| **보안 데이터** | 외부 클라우드 업로드 부담 | 사내·오프라인 데이터에 적합 |
| **호환성** | 신경 쓸 필요 없음 | ARM(M1/M2 맥) 호환성 이슈 |

> **현장 가이드**: 교육·프로토타이핑·협업은 **Colab**, 사내 보안 데이터나 오프라인 운영 환경은 **로컬**. 이 과정에서는 설치 부담이 없는 **Colab**으로 진행합니다.`,contentEn:`The first practical question in data analysis is **"where do I run my code?"** There are two main paths: the **cloud (Google Colab)** or **local (installed on your own PC)**. For non-developers and field practitioners, **starting with the installation-free cloud (Colab) is strongly recommended**.

Running Python locally means installing Python, creating virtual environments, installing libraries like pandas and matplotlib, and resolving version conflicts — an "environment-setup hell" that hits before analysis even begins. Apple Silicon (ARM) Macs add further compatibility issues.

Google Colab skips all of this: with just a Google account and a browser, you instantly borrow a virtual machine that already has the analysis libraries installed. Cloud offers no-install setup, free GPU/TPU, consistent environments, and easy sharing; local is better for offline use and sensitive in-house data.`},{title:"Google Colab 인터페이스 핵심",titleEn:"Google Colab Interface Essentials",content:`Colab은 **노트북(Notebook)** 형태입니다. 한 화면을 여러 개의 **셀(cell)**로 나누어, 코드와 설명을 한 곳에 섞어 쓰면서 단계별로 실행합니다. 처음 보면 낯설지만, 핵심 구성요소는 다섯 가지뿐입니다.

### 화면 구성요소 5가지

| 구성요소 | 역할 | 사용법 |
|----------|------|--------|
| **코드 셀** | 파이썬 코드를 작성·실행 | 코드 입력 후 \`Shift\` + \`Enter\` |
| **텍스트 셀** | 마크다운으로 설명·제목 작성 | 분석 의도·해석을 글로 기록 |
| **런타임** | 코드를 실제로 돌리는 가상 컴퓨터 | 우측 상단 **'연결'** 클릭 후 실행 |
| **파일 패널** | 데이터 업로드·드라이브 마운트 | 좌측 폴더 아이콘에서 CSV 업로드 |
| **Gemini ✨** | 코드 자동 생성 AI 도우미 | 셀 옆 ✨ 아이콘 → 자연어로 요청 |

### 셀 실행의 기본

- **\`Shift\` + \`Enter\`**: 현재 셀 실행 후 다음 셀로 이동
- **\`Ctrl\` + \`Enter\`** (맥은 \`Cmd\` + \`Enter\`): 현재 셀만 실행하고 그 자리에 머무름
- 셀 왼쪽의 **[ ]** 가 **[▶]** 으로 바뀌면 실행 가능, 숫자(\`[1]\`)가 뜨면 실행 완료를 뜻합니다.

> 노트북은 **위에서 아래로 순서대로** 실행하는 것이 원칙입니다. 중간 셀을 건너뛰면 변수가 정의되지 않아 오류가 납니다.

### 첫 실습 흐름 (미리 보기)

1. **Colab 접속** — \`colab.research.google.com\` 에서 구글 로그인
2. **새 노트북 생성** — [파일] → [새 노트북]
3. **CSV 업로드** — 좌측 파일 패널에 \`batch.csv\` 끌어다 놓기
4. **코드 셀 실행** — \`Shift\` + \`Enter\` 로 결과 확인

이 네 단계가 모든 분석의 출발점입니다. 다음 섹션에서는 코드를 직접 짜는 대신 **AI에게 코드를 시키는 법**을 배웁니다.`,contentEn:"Colab is a **notebook**: one screen split into **cells** where you mix code and explanation and run them step by step. There are only five core components.\n\n**Code cells** run Python (`Shift` + `Enter`); **text cells** hold Markdown explanations; the **runtime** is the virtual machine that executes code (click **Connect** top-right); the **file panel** handles CSV upload and Drive mounting; and **Gemini ✨** is the AI helper that generates code from natural language.\n\nA notebook runs **top to bottom** — skipping a cell leaves variables undefined and causes errors. The basic lab flow: access Colab, create a new notebook, upload a CSV, and run a code cell. From there, the next section shows how to make AI write the code for you."},{title:"프롬프트 엔지니어링 — PTCF 원칙",titleEn:"Prompt Engineering — The PTCF Principle",content:`Colab의 Gemini나 ChatGPT 같은 생성형 AI에게 분석 코드를 시킬 때, **"막연하게 부탁하면 막연한 답"**이 돌아옵니다. 좋은 결과를 얻는 핵심은 **프롬프트(요청문)를 구조적으로 작성**하는 것입니다. 가장 실용적인 틀이 **PTCF 원칙**입니다.

### PTCF 4요소

| 요소 | 의미 | 화학 공정 데이터 예시 |
|------|------|----------------------|
| **P · Persona** | AI에게 **역할 부여** | "너는 제조 공정 데이터를 다루는 데이터 분석가야" |
| **T · Task** | **구체적 작업** 지시 | "CSV의 결측치를 확인하고 처리하는 코드를 작성해줘" |
| **C · Context** | **배경·제약·데이터 설명** | "화학 공정 데이터이고, 컬럼은 반응온도·pH·수율이야" |
| **F · Format** | **결과의 형식** 지정 | "한국어 주석 포함 pandas 코드로만 출력해" |

### 왜 효과가 있나

- **Persona**는 AI의 답변 톤과 전문성 수준을 고정합니다. "분석가"라고 하면 분석가답게 답합니다.
- **Task**는 모호함을 제거합니다. "분석해줘"(X) → "결측치를 평균값으로 대체하는 코드"(O).
- **Context**는 도메인 지식을 주입합니다. 컬럼명·단위·제약을 알려주면 엉뚱한 코드를 막습니다.
- **Format**은 결과를 바로 쓸 수 있게 만듭니다. "코드만", "표로", "3줄 요약"처럼.

### 완성형 프롬프트 예시

\`\`\`
[Persona] 너는 화학 공정 데이터를 다루는 데이터 분석가야.
[Task] 업로드한 batch.csv의 결측치를 확인하고 평균값으로 대체하는 코드를 작성해줘.
[Context] 컬럼은 반응온도, pH, 체류시간, 수율, 품질판정(양품/불량)이야.
[Format] 한국어 주석을 포함한 pandas 코드로만, 단계별 설명 없이 코드만 출력해.
\`\`\`

> **기억할 한 문장**: 좋은 프롬프트는 "잘 부탁한다"가 아니라 **"역할 + 작업 + 배경 + 형식을 명확히 적는다"**입니다. AI는 적은 만큼만 똑똑해집니다.`,contentEn:`When you ask generative AI (Colab's Gemini, ChatGPT) to write analysis code, **a vague request yields a vague answer**. The key is structuring the prompt, and the most practical frame is the **PTCF principle**.

- **P · Persona** — assign a role ("you are a manufacturing-process data analyst").
- **T · Task** — give a specific instruction ("write code to check and handle missing values").
- **C · Context** — provide background, constraints, and data description (column names, units).
- **F · Format** — specify the output form ("Python code only, with Korean comments").

Persona fixes tone and expertise, Task removes ambiguity, Context injects domain knowledge to prevent wrong code, and Format makes the result immediately usable. A good prompt is not "please help" but **a clear statement of role + task + context + format** — AI is only as smart as what you write.`},{title:"[실습] Gemini로 분석 코드 자동 생성",titleEn:"[Lab] Auto-generating Code with Gemini",content:`이제 PTCF 프롬프트로 **Gemini가 실제 분석 코드를 짜게** 만들어 봅니다. 직접 파이썬 문법을 외울 필요 없이, **무엇을 원하는지 자연어로 설명**하면 됩니다.

### 실습 흐름 4단계

1. **데이터 업로드** — Colab 좌측 파일 패널에 샘플 \`batch.csv\`(반응온도·pH·체류시간·수율·품질판정)를 끌어다 놓습니다.
2. **프롬프트 작성** — 셀 옆 **Gemini ✨** 아이콘을 누르고 PTCF로 요청합니다. 예: *"batch.csv를 읽어 기초 통계 요약과 품질판정 비율, 결측치를 출력하는 pandas 코드를 작성해줘."*
3. **코드 생성** — Gemini가 셀에 코드를 자동 삽입합니다.
4. **실행·검증** — \`Shift\` + \`Enter\` 로 실행하고 결과를 확인합니다. 원하는 결과가 아니면 *"품질판정 비율을 백분율로 보여줘"*처럼 **수정 요청을 반복**합니다.

### 입력 프롬프트 예시

\`\`\`
[Persona] 너는 화학 공정 데이터를 다루는 데이터 분석가야.
[Task] batch.csv를 불러와 기초 통계, 품질판정(양품/불량) 비율, 결측치 개수를 출력해줘.
[Context] 컬럼은 반응온도, pH, 체류시간, 수율, 품질판정이야.
[Format] 한국어 주석을 포함한 pandas 코드로만 출력해.
\`\`\`

### Gemini가 생성한 코드 (화학 공정 버전)

\`\`\`python
import pandas as pd
df = pd.read_csv("batch.csv")

# 기초 통계 요약
print(df.describe())

# 품질판정 비율 (양품 / 불량)
ratio = df["품질판정"].value_counts(normalize=True)
print((ratio * 100).round(1))

# 결측치 확인
print(df.isnull().sum())
\`\`\`

### 결과를 어떻게 읽나

- \`df.describe()\` → 각 컬럼의 평균·표준편차·최소/최대값을 한눈에. 반응온도 평균이 비정상적으로 높다면 공정 이상 신호일 수 있습니다.
- \`품질판정\` 비율 → 양품/불량 비율을 백분율로. 불량률이 갑자기 오르면 원인 분석의 출발점이 됩니다.
- \`isnull().sum()\` → 컬럼별 결측치 개수. 센서 누락·기록 오류를 잡아냅니다.

> **핵심 태도**: AI가 짠 코드를 **그대로 믿지 말고 결과를 검증**하세요. "이 숫자가 상식적으로 맞나?"를 항상 물어보는 사람이 진짜 분석가입니다. AI는 빠른 초안을 주고, 판단은 사람이 합니다.`,contentEn:'Now use a PTCF prompt to make **Gemini write real analysis code**. No need to memorize Python syntax — just describe what you want in natural language.\n\nThe four-step lab flow: **(1) upload** a sample `batch.csv` via the file panel; **(2) write a prompt** through the Gemini ✨ icon using PTCF; **(3) generate code** that Gemini inserts into the cell; **(4) run and verify** with `Shift` + `Enter`, iterating with follow-up requests until the result is right.\n\nThe generated code reads basic statistics (`describe()`), the pass/fail ratio of `품질판정`, and missing-value counts (`isnull().sum()`) — surfacing process anomalies, defect-rate shifts, and sensor gaps. **Key attitude**: never blindly trust AI-generated code — always verify the results and ask "does this number make sense?" AI gives a fast draft; the human makes the judgment.'},{title:"모듈 2 정리 & 체크리스트",titleEn:"Module 2 Summary & Checklist",content:`### 핵심 요약

- 분석 환경은 **클라우드(Colab) vs 로컬** 두 길이 있다. 비전공·현장은 **설치 없는 Colab**으로 시작한다.
- Colab은 **코드 셀·텍스트 셀·런타임·파일 패널·Gemini** 다섯 요소면 충분하다. \`Shift\` + \`Enter\` 로 실행.
- 좋은 결과는 좋은 프롬프트에서 나온다 — **PTCF (Persona · Task · Context · Format)**.
- **Gemini ✨** 로 분석 코드를 자동 생성하되, **결과는 사람이 반드시 검증**한다.

### 실습 체크리스트

- [ ] Colab에 접속하고 구글 계정으로 로그인했다
- [ ] 새 노트북을 생성했다
- [ ] 좌측 파일 패널에 \`batch.csv\` 를 업로드했다
- [ ] PTCF(Persona·Task·Context·Format)로 프롬프트를 작성했다
- [ ] Gemini ✨ 로 분석 코드를 생성했다
- [ ] 코드를 실행(\`Shift\` + \`Enter\`)하고 결과를 검증했다

> **다음 모듈 — 비즈니스 데이터 정제 및 통계 분석**: 실제 화학 공정 데이터를 대상으로 결측치·이상치를 정제하고, 평균·표준편차·상관계수 같은 기초 통계로 "수율에 영향을 주는 변수"를 찾아내는 방법을 실습합니다.`,contentEn:`### Summary

- Two paths for an analysis environment — **cloud (Colab) vs local**; non-developers should start with **install-free Colab**.
- Colab needs only five elements: **code cells, text cells, runtime, file panel, and Gemini**; run with \`Shift\` + \`Enter\`.
- Good results come from good prompts — **PTCF (Persona · Task · Context · Format)**.
- Use **Gemini ✨** to auto-generate code, but **always verify the results yourself**.

**Checklist**: access Colab and log in, create a new notebook, upload \`batch.csv\`, write a PTCF prompt, generate code with Gemini, then run and verify it.

**Next module — Business Data Cleaning & Statistical Analysis**: clean missing and outlier values in real chemical-process data, then use basic statistics (mean, standard deviation, correlation) to find the variables that drive yield.`}]};function c(){const{language:a}=n(),t=a==="ko";return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header-ed",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"eyebrow",children:"Module 02"}),e.jsx("h2",{children:t?"클라우드 기반 AI 분석 환경 구축":"Cloud-based AI Analysis Environment"}),e.jsx("p",{children:t?"Colab + Gemini와 PTCF 프롬프트 엔지니어링 · 1.0H":"Colab + Gemini and PTCF prompting · 1.0H"})]})}),e.jsx(o,{seoTitle:"모듈 2 · 클라우드 기반 AI 분석 환경 구축",seoTitleEn:"Module 2 · Cloud-based AI Analysis Environment",seoDescription:"클라우드 vs 로컬 분석 환경, Google Colab 인터페이스, 프롬프트 엔지니어링 PTCF 원칙, Gemini를 활용한 분석 코드 자동 생성 실습 강의안",path:"/module2",dataFiles:[i]})]})}export{c as default};
