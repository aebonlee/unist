# UNIST — 데이터 분석 실습 & 시각화

> [data.dreamitbiz.com](https://data.dreamitbiz.com) (KERIS 데이터 분석 과정) 프로젝트를 기반으로 제작한 **UNIST 교육용 학습 사이트**.
> 제공된 강의 자료(작성된 PPT 2종, 엑셀 문제 1종)에 맞춰 커리큘럼·강의안을 갱신합니다.

배포: https://unist.dreamitbiz.com

## 자료 폴더 (`data/`)

강의 원자료를 `data/` 폴더에 보관합니다 — 작성된 PPT 2종, 엑셀 문제 1종 등.
자료를 추가하면 그 내용에 맞춰 커리큘럼·강의안 페이지를 갱신합니다. 자세한 내용은 [`data/README.md`](data/README.md) 참고.

## 기술 스택

- React 19 + TypeScript + Vite 7
- React Router 7 (SPA)
- Supabase (인증) — Google · Kakao OAuth + 이메일
- react-markdown (강의안 콘텐츠 렌더링)
- 디자인: dasco/kdn 템플릿 디자인 시스템 (다크 블루 navy 기본 + 5색 테마)

## 빠른 시작

```bash
npm install
cp .env.example .env        # VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 입력
npm run dev                 # http://localhost:5174
npm run build               # tsc + vite build
npm run og                  # public/og-image.png 재생성 (sharp)
npm run deploy              # gh-pages 브랜치로 배포
```

## data 프로젝트와의 차이

| 항목 | data | unist |
| --- | --- | --- |
| `site.id` | `data` | `unist` |
| 도메인 | data.dreamitbiz.com | unist.dreamitbiz.com |
| DB prefix | `data_` | `unist_` |

> `.env` 는 `.gitignore` 에 포함되어 저장소에 올라가지 않습니다.
> Supabase service-role / PAT(`sbp_...`)는 클라이언트 코드에 절대 넣지 않습니다.

## 디렉터리 (핵심)

```
data/                       # 강의 원자료 (PPT·엑셀 문제 등)
src/
  config/site.ts            # 사이트 메타·메뉴·컬러·DB 접두사(unist_)
  pages/                    # Home·Curriculum·Lecture·Module1~3·About 등
  components/GuidePage.tsx  # 마크다운 강의안 렌더러
  contexts/                 # Auth/Theme/Language/Toast
scripts/generate-og.cjs     # OG 이미지 생성 (sharp)
```

---
운영: 드림아이티비즈(DreamIT Biz)
