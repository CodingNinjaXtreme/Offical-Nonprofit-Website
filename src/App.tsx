import Signup from './pages/Signup.tsx';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPage from "./pages/Policy.tsx";
import { LanguageProvider } from './context/LanguageContext';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Mission = lazy(() => import('./pages/Mission'));
const Competitions = lazy(() => import('./pages/Competitions'));
const Impact = lazy(() => import('./pages/Impact'));
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
        <div className="flex items-center justify-center min-h-[60vh] px-4">
            <div className="text-center card-glass bg-white/70 px-8 py-10 shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-amber-400 shadow-lg shadow-blue-500/20 animate-float">
                    <div className="h-7 w-7 rounded-full border-4 border-white/90 border-t-transparent animate-spin" aria-label="Loading"></div>
                </div>
                <p className="text-slate-600 text-sm font-medium">Loading…</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />

                <a
                    href="#main"
                    className="skip-link focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-blue-700 focus:px-4 focus:py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Skip to main content
                </a>

                <div className="min-h-screen flex flex-col relative">
                    <Header />
                    <main id="main" className="flex-1 relative" tabIndex={-1}>
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/mission" element={<Mission />} />
                                <Route path="/competitions" element={<Competitions />} />
                                <Route path="/impact" element={<Impact />} />
                                <Route path="/partner" element={<PartnerWithUs />} />

                                {/* Notice the exact casing here: Signup */}
                                <Route path="/signup" element={<Signup />} />

                                {/* Privacy Policy & COPPA Compliance Page Route */}
                                <Route path="/privacy" element={<PrivacyPage />} />

                                <Route path="/programs" element={<Navigate to="/competitions" replace />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
