-- =============================================
-- user_profiles 테이블 생성
-- DreamIT Biz 사이트 공통 인증 프로필 테이블 (접두어 없음 — 여러 사이트가 공유)
-- Supabase SQL Editor 에서 실행
-- 컬럼은 src/types/index.ts 의 UserProfile 및 AuthContext insert 와 일치
-- =============================================

-- 1) 테이블
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email           TEXT        NOT NULL DEFAULT '',
  name            TEXT        NOT NULL DEFAULT '',
  display_name    TEXT        NOT NULL DEFAULT '',
  avatar_url      TEXT        NOT NULL DEFAULT '',
  phone           TEXT        NOT NULL DEFAULT '',
  provider        TEXT        NOT NULL DEFAULT 'email',
  role            TEXT        NOT NULL DEFAULT 'member',
  signup_domain   TEXT        NOT NULL DEFAULT '',
  visited_sites   TEXT[]      NOT NULL DEFAULT '{}',
  last_sign_in_at TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2) RLS 활성화
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 3) 정책 (재실행 가능하도록 DROP 후 생성)
-- 본인 프로필 읽기 (+ 관리자는 전체 읽기)
DROP POLICY IF EXISTS "user_profiles_select_own" ON public.user_profiles;
CREATE POLICY "user_profiles_select_own"
  ON public.user_profiles FOR SELECT
  USING (
    auth.uid() = id
    OR EXISTS (
      SELECT 1 FROM public.user_profiles p
      WHERE p.id = auth.uid() AND p.role IN ('admin', 'superadmin')
    )
  );

-- 본인 프로필 생성 (OAuth/이메일 첫 로그인 시 클라이언트가 insert)
DROP POLICY IF EXISTS "user_profiles_insert_own" ON public.user_profiles;
CREATE POLICY "user_profiles_insert_own"
  ON public.user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 본인 프로필 수정 (+ 관리자는 전체 수정)
DROP POLICY IF EXISTS "user_profiles_update_own" ON public.user_profiles;
CREATE POLICY "user_profiles_update_own"
  ON public.user_profiles FOR UPDATE
  USING (
    auth.uid() = id
    OR EXISTS (
      SELECT 1 FROM public.user_profiles p
      WHERE p.id = auth.uid() AND p.role IN ('admin', 'superadmin')
    )
  );

-- 4) 신규 가입 시 프로필 자동 생성 트리거 (SECURITY DEFINER → RLS 우회)
--    클라이언트 insert 와 중복되지 않도록 ON CONFLICT DO NOTHING
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, name, display_name, avatar_url, provider)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    COALESCE(NEW.raw_app_meta_data->>'provider', 'email')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5) updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS user_profiles_touch_updated_at ON public.user_profiles;
CREATE TRIGGER user_profiles_touch_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- 6) 관리자 지정 예시 (배포 후 본인 계정으로 1회 실행)
-- UPDATE public.user_profiles SET role = 'superadmin' WHERE email = 'aebon@dreamitbiz.com';
