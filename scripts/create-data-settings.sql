-- =====================================================================
--  data_settings — AI 실습실(Playground) 강사 API 키 + 학생 토큰 배당 저장
--    테이블명 = site.ts dbPrefix('data_') + 'settings'
--    key 규칙:
--      apikey_<provider>  : 강사 API 키 (강사만 읽기/쓰기)
--      alloc_<email>      : 학생별 배당 JSON (본인/강사만 쓰기)
--  Supabase SQL Editor 에 붙여넣고 실행 (멱등 — 재실행 안전)
--
--  ⚠️ 보안: 실습실은 클라이언트에서 API 키로 직접 호출합니다(폐쇄 교육용 전제).
--     운영 환경에서는 Edge Function 프록시로 키를 숨기는 것을 권장합니다.
--  공용 user_profiles 는 별도 스크립트(create-user-profiles.sql)로 생성.
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.data_settings (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.data_settings ENABLE ROW LEVEL SECURITY;

-- 읽기: 로그인 사용자 전체 (배당 조회 + 실습실 호출에 필요)
DROP POLICY IF EXISTS "data_settings_select" ON public.data_settings;
CREATE POLICY "data_settings_select" ON public.data_settings
  FOR SELECT USING (auth.role() = 'authenticated');

-- 쓰기(INSERT): 강사 전체 OR 학생 본인 배당 키(alloc_<본인 이메일>)
DROP POLICY IF EXISTS "data_settings_insert" ON public.data_settings;
CREATE POLICY "data_settings_insert" ON public.data_settings
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.user_profiles
            WHERE id = auth.uid() AND role IN ('admin','superadmin'))
    OR key = 'alloc_' || lower(auth.jwt() ->> 'email')
  );

-- 쓰기(UPDATE): 강사 전체 OR 학생 본인 배당 키
DROP POLICY IF EXISTS "data_settings_update" ON public.data_settings;
CREATE POLICY "data_settings_update" ON public.data_settings
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.user_profiles
            WHERE id = auth.uid() AND role IN ('admin','superadmin'))
    OR key = 'alloc_' || lower(auth.jwt() ->> 'email')
  );

-- 삭제: 강사만
DROP POLICY IF EXISTS "data_settings_delete" ON public.data_settings;
CREATE POLICY "data_settings_delete" ON public.data_settings
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.user_profiles
            WHERE id = auth.uid() AND role IN ('admin','superadmin'))
  );

-- 강사(관리자) 지정 — user_profiles.role = 'admin' (해당 계정 1회 로그인 후 실행)
UPDATE public.user_profiles
   SET role = 'admin'
 WHERE lower(email) IN (
   'aebon@kakao.com',
   'aebon@kyonggi.ac.kr',
   'radical8566@gmail.com'
 );
