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
        <div className="flex min-h-[60vh] items-center justify-center px-4">
            <div className="flex flex-col items-center gap-4">
                <div
                    className="h-6 w-6 animate-spin rounded-full border-2 border-ink/20 border-t-accent"
                    aria-hidden="true"
                ></div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Loading
                </p>
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
                    className="skip-link"
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
