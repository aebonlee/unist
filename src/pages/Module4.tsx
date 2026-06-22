import { useLanguage } from '../contexts/LanguageContext';
import GuidePage from '../components/GuidePage';

const module4Data = {
  id: 'module4-voc',
  icon: 'fa-comments',
  title: '모듈 4 · 고객 반응 데이터 수집 및 분석',
  titleEn: 'Module 4 · Voice of Customer Collection and Analysis',
  sections: [
    {
      title: '왜 고객 반응(VOC) 데이터인가',
      titleEn: 'Why Voice of Customer Data',
      content: `이번 모듈은 **1시간 실습** 모듈입니다. 공정·센서 데이터를 넘어, 이번에는 **사람이 직접 남긴 데이터** — 즉 **고객의 목소리(VOC, Voice of Customer)**를 다룹니다. 앱스토어 리뷰를 자동으로 수집하고, 생성형 AI로 테마를 분류하고, 제품 개선 리포트까지 한 번에 완성하는 것이 목표입니다.

### VOC가 중요한 이유

화학·제조 기업도 결국 **제품을 쓰는 고객**과 만납니다. 고객은 리뷰, 문의, B2B 피드백을 통해 끊임없이 신호를 보냅니다. 이 신호를 데이터로 모아 읽으면, **"무엇을 먼저 고쳐야 하는가"**라는 가장 중요한 질문에 데이터로 답할 수 있습니다.

| 데이터 종류 | 출처 | 분석 가치 |
|-------------|------|-----------|
| 앱·서비스 리뷰 | Google Play, App Store | 사용성·기능 불만의 우선순위 |
| 고객 문의(CS) | 콜센터, 챗봇 로그 | 반복되는 문제·FAQ 발굴 |
| B2B 피드백 | 영업·품질 보고 | 납기·품질·규격 개선 신호 |

> 핵심은 "느낌"이 아니라 **"수치로 정렬된 우선순위"**입니다. "요즘 불만이 많은 것 같아"가 아니라 "부정 리뷰의 38%가 로그인 오류"라고 말할 수 있어야 합니다.

### 이번 실습의 흐름

\`리뷰 수집(크롤링) → 감성·테마 분류 → 페인포인트 추출 → 개선 리포트(Canvas)\`

모듈 1에서 배운 분석 워크플로우 4단계(수집 → 전처리 → 분석 → 인사이트)를 **VOC 데이터에 그대로 적용**하는 실습입니다. 도구는 Google Colab + Gemini(수집·분석)와 Gemini Canvas(리포트)를 사용합니다.`,
      contentEn: `This is a **1-hour hands-on** module. Beyond process and sensor data, we now work with data written by people directly — the **Voice of Customer (VOC)**. The goal is to automatically collect app-store reviews, classify themes with generative AI, and produce a product-improvement report in one flow.

Chemical and manufacturing companies ultimately meet the **customers who use their products**. Customers constantly send signals through reviews, inquiries, and B2B feedback. Gathering and reading these signals as data lets you answer the most important question — **"what should we fix first?"** — with evidence rather than gut feeling.

The point is a **priority sorted by numbers**, not a vague impression: not "there seem to be a lot of complaints" but "38% of negative reviews are about login errors."

This practice applies the 4-step workflow from Module 1 (Collect → Preprocess → Analyze → Insight) directly to VOC data, with the flow \`review crawling → sentiment/theme classification → pain-point extraction → improvement report (Canvas)\`, using Google Colab + Gemini and Gemini Canvas.`,
    },
    {
      title: '앱스토어 리뷰 자동 수집 [실습]',
      titleEn: 'Automatic App Review Collection [Hands-on]',
      content: `리뷰를 한 건씩 복사·붙여넣기 하는 것은 불가능합니다. **크롤링(crawling)**으로 자동 수집합니다. 수집 프로세스는 4단계입니다.

### 수집 프로세스 4단계

1. **대상 앱 선정** — 분석할 앱을 고르고 패키지명(앱 ID)을 확인합니다. 예: 현대 원앱 → Google Play 주소의 \`id=\` 뒤 문자열 \`com.hyundai.oneapp.kr\`.
2. **라이브러리 설치** — 리뷰 수집 도구 \`google-play-scraper\`를 설치합니다.
3. **리뷰 크롤링** — 별점(score)·작성일(at)·본문(content)을 자동으로 가져옵니다.
4. **데이터프레임화** — 표(DataFrame)로 정리해 분석용 CSV로 저장합니다.

### 실습 코드

\`\`\`python
!pip install google-play-scraper
from google_play_scraper import reviews

result, _ = reviews(
    "com.hyundai.oneapp.kr",   # 현대 원앱
    lang="ko", country="kr",
    count=500)

import pandas as pd
df = pd.DataFrame(result)
df = df[["score", "at", "content"]]
df.to_csv("reviews.csv", index=False)
\`\`\`

코드를 한 줄도 외울 필요 없습니다. **"현대 원앱의 Google Play 리뷰 500개를 별점·날짜·본문만 모아서 CSV로 저장하는 파이썬 코드를 만들어줘"**라고 Gemini에 요청하면 위와 같은 코드를 만들어 줍니다. 여러분의 역할은 **무엇을, 얼마나, 어떤 형식으로** 모을지 정의하는 것입니다.

### 수집 결과 미리보기

| score | at | content |
|-------|----|---------|
| 1 | 2026-05-12 | 로그인이 자꾸 풀려요. 다시 들어가면 또 로그아웃됩니다. |
| 5 | 2026-05-11 | 충전소 찾기 기능이 정말 편해요. 잘 쓰고 있습니다. |
| 2 | 2026-05-10 | 앱이 너무 느리고 자주 멈춥니다. 업데이트 후 더 심해졌어요. |

> ⚠️ **수집 윤리·보안 주의**
> - **공개 리뷰만** 수집하며, 짧은 시간에 과도한 요청을 보내지 않습니다(서버 부하·차단 방지).
> - 작성자 닉네임 등 **개인 식별정보는 저장·분석에서 제외(비식별화)**합니다. 분석에는 별점·날짜·본문만으로 충분합니다.
> - 서비스 약관(Terms of Service)과 robots 정책을 확인하고, 상업적 재배포는 권한을 확인합니다.`,
      contentEn: `Copying reviews one by one is impossible — we collect them automatically by **crawling**. The process has four steps: (1) **choose the target app** and find its package ID (e.g., Hyundai One App → \`com.hyundai.oneapp.kr\` from the Google Play URL), (2) **install the library** \`google-play-scraper\`, (3) **crawl reviews** to fetch star score, date, and body text automatically, and (4) **build a DataFrame** and save it as a CSV for analysis.

You do not need to memorize any code. Asking Gemini, "Write Python code to collect 500 Google Play reviews of the Hyundai One App, keeping only score, date, and body, and save them as CSV," produces the snippet above. Your job is to define **what, how much, and in what format** to collect.

**Ethics and security**: collect **public reviews only**, avoid excessive requests in a short time (to prevent server load and blocking), and **exclude personally identifiable information** such as nicknames from storage and analysis — score, date, and body are enough. Check the service's Terms of Service and robots policy, and confirm permissions before any commercial redistribution.`,
    },
    {
      title: '테마 분석 & 페인포인트 추출 [실습]',
      titleEn: 'Theme Analysis & Pain-point Extraction [Hands-on]',
      content: `리뷰 500개를 그냥 읽으면 시간만 가고 결론이 안 납니다. 생성형 AI로 **리뷰를 인사이트로 바꾸는 3단계**를 거칩니다.

### 리뷰 → 인사이트 3단계

1. **감성 분류(Sentiment)** — 각 리뷰를 **긍정/중립/부정**으로 라벨링합니다. 별점(1~2점 부정, 4~5점 긍정)과 문장 내용을 함께 봅니다. 별점은 높은데 본문은 불만인 경우도 AI가 문맥으로 잡아냅니다.
2. **테마 분류(Theme)** — AI로 리뷰를 주제별로 그룹화합니다: **로그인·인증 / 속도·안정성 / UI·사용성 / 결제·요금 / 기능요청** 등.
3. **페인포인트 추출(Pain-point)** — 부정 리뷰에서 **반복되는 핵심 불만**을 도출하고 빈도로 정렬합니다.

### 테마 분류 프롬프트 예시 (PTCF 적용)

모듈 2에서 배운 **PTCF(Persona·Task·Context·Format)** 프레임워크를 그대로 적용합니다.

\`\`\`text
[Persona] 너는 모바일 앱의 고객 리뷰를 분석하는 VOC 분석가야.
[Task]    아래 부정 리뷰들을 의미가 비슷한 주제(테마)로 분류하고,
          각 테마별 리뷰 개수와 대표 리뷰 1건을 뽑아줘.
[Context] 데이터는 현대 원앱의 별점 1~2점 리뷰 200건이야.
          테마는 로그인/속도·안정성/UI·사용성/결제/기타로 나눠줘.
[Format]  | 테마 | 건수 | 비율(%) | 대표 리뷰 | 형태의 표로 정리해줘.
\`\`\`

### 예시 분석 결과

| 테마 | 건수 | 비율(%) | 대표 리뷰 |
|------|------|---------|-----------|
| **로그인·인증** | 76 | **38%** | "로그인이 자꾸 풀려요. 다시 들어가도 또 로그아웃." |
| 속도·안정성 | 52 | 26% | "앱이 너무 느리고 자주 멈춥니다." |
| UI·사용성 | 38 | 19% | "메뉴가 복잡해서 원하는 기능 찾기가 어려워요." |
| 결제·요금 | 22 | 11% | "결제 단계에서 오류가 나서 두 번 결제됐어요." |
| 기타 | 12 | 6% | — |

> 💡 **핵심 인사이트**: "'로그인 오류'가 부정 리뷰의 **38%**로 최우선 개선 과제다." — 이렇게 **수치로 정렬된 한 문장**이 나오면 분석은 성공입니다. 막연한 "불만이 많다"가 "무엇을 먼저 고칠지"로 바뀌었습니다.

### 시각화로 한눈에

테마별 건수를 **막대그래프**로, 긍정/부정 비율을 **원그래프**로 그리면 보고가 훨씬 설득력 있어집니다. "테마별 건수를 막대그래프로 그려줘"라고 Gemini에 요청하면 됩니다.`,
      contentEn: `Reading 500 reviews directly wastes time and reaches no conclusion. Generative AI turns reviews into insight in **three steps**: (1) **sentiment classification** — label each review positive/neutral/negative using both the star score and the sentence content (AI catches cases where the score is high but the text complains); (2) **theme classification** — group reviews by topic such as login/authentication, speed/stability, UI/usability, payment, and feature requests; and (3) **pain-point extraction** — derive the **recurring core complaints** from negative reviews and sort them by frequency.

The classification prompt applies the **PTCF (Persona, Task, Context, Format)** framework from Module 2: give the AI a VOC-analyst persona, the task of grouping negative reviews into themes with counts and representative quotes, the context (e.g., 200 one-to-two-star reviews of the Hyundai One App), and a table format.

A successful analysis yields a **single sentence sorted by numbers**, such as "login errors account for **38%** of negative reviews — the top improvement priority." The vague "lots of complaints" becomes "what to fix first." Plotting theme counts as a bar chart and positive/negative ratio as a pie chart makes the reporting far more persuasive.`,
    },
    {
      title: '제품 개선 리포트 작성 (Gemini Canvas) [실습]',
      titleEn: 'Product Improvement Report with Gemini Canvas [Hands-on]',
      content: `분석으로 끝나면 절반입니다. 인사이트를 **읽는 사람(경영진·기획·개발)이 바로 행동할 수 있는 리포트**로 바꿔야 합니다. 이때 **Gemini Canvas**가 문서·표·차트를 자동으로 만들어 줍니다.

### Canvas 리포트 생성 흐름 4단계

1. **분석 결과 정리** — 앞에서 만든 테마·페인포인트·수치(38% 등)를 한곳에 취합합니다.
2. **Canvas에 요청** — 리포트 구조를 지정한 프롬프트를 입력합니다.
3. **초안 자동 생성** — Canvas가 제목·목차·표·차트가 포함된 문서 초안을 만듭니다.
4. **검토·수정** — AI 초안을 그대로 쓰지 않고 **현장 맥락**(우리 제품 상황, 개발 일정)을 반영해 다듬습니다.

### Canvas 요청 프롬프트 예시

\`\`\`text
[Persona] 너는 제품 기획자(PM)를 위한 VOC 리포트를 작성하는 분석가야.
[Task]    아래 분석 결과로 '제품 개선 리포트'를 작성해줘.
[Context] 현대 원앱 Google Play 리뷰 500건 분석 결과:
          로그인 38%, 속도 26%, UI 19%, 결제 11%.
[Format]  아래 5개 표준 구조로 작성하고, 핵심 테마는 막대그래프로 표현해줘.
          1.분석 개요 2.고객 반응 요약 3.핵심 페인포인트
          4.개선 제안 5.기대 효과
\`\`\`

### 제품 개선 리포트 표준 구조

| 순서 | 항목 | 들어갈 내용 |
|------|------|-------------|
| 1 | **분석 개요** | 데이터 출처·수집 기간·규모(예: Google Play 리뷰 500건, 2026.04~05) |
| 2 | **고객 반응 요약** | 긍정/부정 비율, 핵심 테마 Top 5 |
| 3 | **핵심 페인포인트** | 우선순위별 불만 + **근거 리뷰** 인용 |
| 4 | **개선 제안** | 문제별 **액션 아이템**(담당·난이도 포함) |
| 5 | **기대 효과** | 개선 시 예상 지표 변화(별점·재설치율·CS 문의 감소) |

### 개선 제안(4번) 작성 예시

| 페인포인트 | 개선 액션 아이템 | 우선순위 |
|------------|-------------------|----------|
| 로그인 자동 로그아웃 | 토큰 만료 정책 점검·자동 재인증 도입 | **높음** |
| 앱 속도 저하 | 초기 로딩 리소스 경량화·캐시 적용 | 높음 |
| 메뉴 복잡 | 자주 쓰는 기능 홈 화면 노출 | 중간 |

> Canvas가 만든 초안은 **출발점**이지 정답이 아닙니다. 환각(없는 수치 생성)이 없는지, 우리 현장 상황과 맞는지 **사람이 반드시 검증**하고 다듬습니다. 좋은 리포트는 "AI가 쓴 글"이 아니라 "AI로 빠르게 초안 잡고 전문가가 마무리한 글"입니다.`,
      contentEn: `Analysis alone is only half the job — insight must become a **report that readers (management, planning, development) can act on immediately**. **Gemini Canvas** auto-generates the document, tables, and charts.

The Canvas report flow has four steps: (1) **organize analysis results** — gather the themes, pain-points, and numbers (e.g., 38%) in one place; (2) **request from Canvas** with a prompt specifying the report structure; (3) **auto-generate a draft** with title, sections, tables, and charts; and (4) **review and revise** — never ship the AI draft as-is, but reflect **field context** (our product situation, dev schedule).

The standard product-improvement report has five parts: **1. Analysis overview** (data source, period, size), **2. Customer-response summary** (positive/negative ratio, top themes), **3. Core pain-points** (prioritized complaints with quoted evidence reviews), **4. Improvement proposals** (action items per problem, with owner and difficulty), and **5. Expected effect** (forecast metric changes such as rating, reinstall rate, and reduced CS inquiries).

The Canvas draft is a **starting point, not the answer**. A human must verify there are no hallucinated numbers and that it fits the real situation. A good report is not "written by AI" but "drafted quickly with AI and finished by an expert."`,
    },
    {
      title: '화학·제조 중소기업에 적용하기',
      titleEn: 'Applying to Chemical & Manufacturing SMEs',
      content: `이번 실습은 앱 리뷰를 예로 들었지만, **같은 흐름은 우리 회사 데이터에 그대로** 적용됩니다. VOC는 앱에만 있는 것이 아닙니다.

### 화학·제조 기업의 VOC 소스

| VOC 소스 | 예시 | 분석으로 얻는 것 |
|----------|------|------------------|
| **자사 제품 리뷰** | 온라인몰·오픈마켓 제품 후기 | 포장·품질·배송 불만의 우선순위 |
| **고객 문의(CS) 로그** | 콜센터·이메일·챗봇 기록 | 반복 문의 → FAQ·매뉴얼 개선 |
| **B2B 거래처 피드백** | 영업·품질팀 보고, 클레임 기록 | 납기·규격·불량 클레임의 패턴 |
| **사내 설문·인터뷰** | 직원·고객 만족도 조사 | 정성 응답을 테마로 구조화 |

### 적용 흐름은 동일하다

\`수집(엑셀·CS로그) → 감성·테마 분류 → 반복 페인포인트 추출 → 개선 리포트\`

크롤링 대신 **사내 엑셀이나 CS 로그를 업로드**하는 것만 다릅니다. 예를 들어 "지난 분기 품질 클레임 300건을 불량 유형별로 분류하고 빈도순으로 정렬해줘"라고 요청하면, **품질 개선 우선순위**가 바로 나옵니다.

> **VOC를 품질·영업에 연결하기**: 고객의 목소리는 단순한 불평이 아니라 **무료 컨설팅**입니다. 반복되는 클레임은 다음 제품 개선의 1순위 후보이고, 칭찬받은 기능은 영업의 강점 메시지가 됩니다. 화학 중소기업도 흩어진 고객 피드백을 데이터로 모으면, **감이 아닌 근거로 제품과 영업을 개선**할 수 있습니다.`,
      contentEn: `This practice used app reviews as the example, but the **same flow applies directly to your own company's data**. VOC is not limited to apps.

Chemical and manufacturing SMEs have rich VOC sources: **own-product reviews** (marketplace ratings → priority of packaging, quality, and delivery complaints), **customer-service logs** (call-center, email, chatbot records → recurring inquiries that improve FAQs and manuals), **B2B partner feedback** (sales and quality reports, claim records → patterns in delivery, spec, and defect claims), and **internal surveys/interviews** (structuring qualitative responses into themes).

The flow is identical — \`collect → sentiment/theme classification → recurring pain-point extraction → improvement report\` — only the input changes: instead of crawling, you **upload an in-house spreadsheet or CS log**. Asking, "classify last quarter's 300 quality claims by defect type and sort by frequency," immediately yields a **quality-improvement priority**.

The voice of the customer is not mere complaint but **free consulting**: recurring claims are the top candidates for the next product improvement, and praised features become sales strengths. Gathering scattered feedback as data lets even a small chemical company improve products and sales **with evidence, not gut feeling**.`,
    },
    {
      title: '모듈 4 정리 & 체크리스트',
      titleEn: 'Module 4 Summary & Checklist',
      content: `### 핵심 요약

이번 실습 모듈에서는 **고객의 목소리(VOC)를 데이터로 모아 개선 리포트까지** 만드는 전 과정을 직접 다뤘습니다.

- **리뷰 자동 수집**: \`google-play-scraper\`로 앱스토어 리뷰(별점·날짜·본문)를 크롤링해 CSV로 저장. 공개 데이터만, 개인정보는 비식별화.
- **테마 분석 & 페인포인트**: 감성 분류 → 테마 분류 → 페인포인트 추출 3단계. PTCF 프롬프트로 "부정 리뷰의 38%가 로그인 오류"처럼 **수치로 정렬된 인사이트** 도출.
- **개선 리포트(Canvas)**: 분석 정리 → Canvas 요청 → 초안 생성 → 검토·수정. **5구조**(분석 개요·고객 반응 요약·핵심 페인포인트·개선 제안·기대 효과)로 작성하고 사람이 검증.
- **현장 적용**: 자사 리뷰·CS 로그·B2B 피드백에도 동일 흐름 적용. VOC를 품질·영업 개선에 연결.

### 학습 체크리스트

- [ ] \`google-play-scraper\` 라이브러리를 설치하고 대상 앱 ID를 확인했는가?
- [ ] 리뷰를 크롤링해 별점·날짜·본문만 CSV로 저장했는가?
- [ ] 개인 식별정보를 제외(비식별화)하고 공개 리뷰만 수집했는가?
- [ ] 리뷰를 감성(긍정/부정)과 테마(로그인·속도·UI·결제 등)로 분류했는가?
- [ ] 부정 리뷰에서 핵심 페인포인트를 도출하고 빈도순으로 정렬했는가?
- [ ] Gemini Canvas로 제품 개선 리포트 **5구조**를 작성했는가?
- [ ] AI 초안의 수치·내용을 사람이 검증·수정했는가?

> 데이터 분석의 가치는 "코드를 돌렸다"가 아니라 **"무엇을 먼저 고칠지 한 문장으로 말할 수 있다"**에 있습니다. 이번 실습으로 여러분은 흩어진 고객의 목소리를 **행동 가능한 우선순위**로 바꾸는 법을 익혔습니다.

### 다음 모듈 예고 — KAMP 화학공정 품질 데이터 분석

다음 모듈에서는 고객 데이터에서 **공정 데이터**로 돌아갑니다. 스마트제조 빅데이터 플랫폼 **KAMP**의 화학공정 품질 데이터를 활용해, 실제 제조 현장의 품질 변수를 분석하고 불량을 좌우하는 핵심 인자를 찾아내는 실습을 진행합니다.`,
      contentEn: `### Summary

This hands-on module covered the full path from **gathering the Voice of Customer as data to producing an improvement report**.

- **Automatic review collection**: crawl app-store reviews (score, date, body) with \`google-play-scraper\` and save as CSV — public data only, with personal information de-identified.
- **Theme analysis and pain-points**: sentiment classification → theme classification → pain-point extraction, using PTCF prompts to derive **insight sorted by numbers**, e.g., "38% of negative reviews are login errors."
- **Improvement report (Canvas)**: organize results → request from Canvas → generate draft → review and revise, writing the **five-part structure** (overview, customer-response summary, core pain-points, improvement proposals, expected effect) and verifying it as a human.
- **Field application**: the same flow applies to own-product reviews, CS logs, and B2B feedback, connecting VOC to quality and sales improvement.

The value of analysis is not "I ran the code" but **"I can say in one sentence what to fix first."** You learned to turn scattered customer voices into an **actionable priority**.

### Next module — KAMP chemical-process quality data analysis

The next module returns from customer data to **process data**, using the KAMP smart-manufacturing platform's chemical-process quality data to analyze real production-floor quality variables and identify the key factors driving defects.`,
    },
  ],
};

export default function Module4() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Module 04</div>
          <h2>{isKo ? '고객 반응 데이터 수집 및 분석' : 'Voice of Customer Collection and Analysis'}</h2>
          <p>{isKo ? '앱스토어 리뷰 크롤링 · 테마 분석 · 개선 리포트 · 1.0H' : 'App review crawling, theme analysis, report · 1.0H'}</p>
        </div>
      </section>
      <GuidePage
        seoTitle="모듈 4 · 고객 반응 데이터 수집 및 분석"
        seoTitleEn="Module 4 · Voice of Customer Collection and Analysis"
        seoDescription="앱스토어 리뷰 데이터 자동 수집(크롤링), 테마 분석과 핵심 페인포인트 추출, Gemini Canvas 기반 제품 개선 리포트 작성을 다루는 실습 강의안"
        path="/module4"
        dataFiles={[module4Data]}
      />
    </>
  );
}
