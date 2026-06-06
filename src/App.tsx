import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from
      'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded pages (smaller initial bundle, faster load)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Mission = lazy(() => import('./pages/Mission'));
const Competitions = lazy(() => import('./pages/Competitions'));
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Reusable loading fallback
function PageLoader() {
  return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600
border-t-transparent rounded-full animate-spin"
               aria-label="Loading"></div>
          <p className="mt-3 text-gray-600
text-sm">Loading…</p>
        </div>
      </div>
  );
}

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop />

        {/* Skip-to-content link for keyboard/screen-reader users */}
        <a
            className="sr-only focus:not-sr-only focus:absolute focus:top-2
focus:left-2 focus:z-50 focus:bg-white focus:text-blue-700 focus:px-4
focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2
focus:ring-blue-500"
        >
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main" className="flex-1" tabIndex={-1}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/partner" element={<PartnerWithUs />} />

                <Route path="/programs" element={<Navigate
                    to="/competitions" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;