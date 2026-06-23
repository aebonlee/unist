import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth 페이지
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Shop 페이지
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

// 데이터 분석 강의 페이지
const Curriculum = lazy(() => import('../pages/Curriculum'));
const Lecture = lazy(() => import('../pages/Lecture'));
const Module1 = lazy(() => import('../pages/Module1'));
const Module2 = lazy(() => import('../pages/Module2'));
const Module3 = lazy(() => import('../pages/Module3'));
const Module4 = lazy(() => import('../pages/Module4'));
const Module5 = lazy(() => import('../pages/Module5'));
const Module6 = lazy(() => import('../pages/Module6'));
const RecommendedSites = lazy(() => import('../pages/RecommendedSites'));
const Glossary = lazy(() => import('../pages/Glossary'));
const AboutPage = lazy(() => import('../pages/About'));
const CompanyIntro = lazy(() => import('../pages/CompanyIntro'));
const InstructorIntro = lazy(() => import('../pages/InstructorIntro'));

// AI 메뉴 (ai-free 포팅): AI학습자료 · AI도구 · 사례 · 프롬프트 · AI실습실
const Learn = lazy(() => import('../pages/learn/Learn'));
const Tools = lazy(() => import('../pages/Tools'));
const ToolGuide = lazy(() => import('../pages/ToolGuide'));
const Examples = lazy(() => import('../pages/Examples'));
const PromptLearn = lazy(() => import('../pages/prompt/PromptLearn'));
const PromptPractice = lazy(() => import('../pages/prompt/PromptPractice'));
const PromptCases = lazy(() => import('../pages/prompt/PromptCases'));
const PromptEvaluate = lazy(() => import('../pages/prompt/PromptEvaluate'));
const Playground = lazy(() => import('../pages/Playground'));
const AdminAllocation = lazy(() => import('../pages/AdminAllocation'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
                <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
              </>
            )}

            {/* Shop */}
            {site.features.shop && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </>
            )}

            {/* 커리큘럼 */}
            <Route path="/curriculum" element={<Curriculum />} />

            {/* 강의안 — 6개 모듈 */}
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/lecture/module1" element={<Module1 />} />
            <Route path="/lecture/module2" element={<Module2 />} />
            <Route path="/lecture/module3" element={<Module3 />} />
            <Route path="/lecture/module4" element={<Module4 />} />
            <Route path="/lecture/module5" element={<Module5 />} />
            <Route path="/lecture/module6" element={<Module6 />} />

            {/* AI 메뉴 (ai-free 포팅) */}
            <Route path="/learn" element={<Learn />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:provider" element={<ToolGuide />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/examples/:level" element={<Examples />} />
            <Route path="/prompt/learn" element={<PromptLearn />} />
            <Route path="/prompt/practice" element={<PromptPractice />} />
            <Route path="/prompt/cases" element={<PromptCases />} />
            <Route path="/prompt/evaluate" element={<PromptEvaluate />} />
            {site.features.auth && (
              <>
                <Route path="/playground" element={<AuthGuard><Playground /></AuthGuard>} />
                <Route path="/admin/allocation" element={<AuthGuard><AdminAllocation /></AuthGuard>} />
              </>
            )}

            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/company" element={<CompanyIntro />} />
            <Route path="/about/instructor" element={<InstructorIntro />} />

            {/* 용어 사전 */}
            <Route path="/glossary" element={<Glossary />} />

            {/* 추천사이트 */}
            <Route path="/recommended" element={<RecommendedSites />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
