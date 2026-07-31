import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';

const headerCopy = {
  en: {
    home: 'Home',
    about: 'About Us',
    mission: 'Mission',
    competitions: 'Competitions',
    volunteer: 'Volunteer',
    signUp: 'Sign Up',
    toggleLabel: 'Switch to Spanish',
  },
  es: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    mission: 'Misión',
    competitions: 'Competencias',
    volunteer: 'Voluntariado',
    signUp: 'Inscribirse',
    toggleLabel: 'Cambiar a inglés',
  },
} as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const copy = headerCopy[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = location.pathname === '/';
  const onDarkHero = isHome && !scrolled;

  const navLinks = [
    { label: copy.home, path: '/' },
    { label: copy.about, path: '/about' },
    { label: copy.mission, path: '/mission' },
    { label: copy.competitions, path: '/competitions' },
    { label: copy.volunteer, path: '/partner' },
  ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              onDarkHero
                  ? 'bg-transparent'
                  : 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}

            <Link
                to="/"
                className="flex items-center gap-2.5 group"
                aria-label="InfinityMath4All home"
            >
              <Logo size={36} />

              <div className="flex flex-col leading-tight">
              <span
                  className={`font-bold text-base tracking-tight transition-colors duration-300 ${
                      onDarkHero ? 'text-white' : 'text-slate-900'
                  }`}
              >
                InfinityMath
                <span className="text-gradient">4All</span>
              </span>

                <span
                    className={`text-[11px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                        onDarkHero ? 'text-blue-200' : 'text-blue-500'
                    }`}
                >
                Math Education Program
              </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className={`inline-flex items-center justify-center rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  onDarkHero
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={copy.toggleLabel}
              >
              {language === 'en' ? 'EN' : 'ES'}
              </button>

              {/* Desktop Navigation */}

              <nav
                className="flex items-center gap-1"
                aria-label="Primary"
              >
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      active
                        ? onDarkHero
                          ? 'text-white'
                          : 'text-blue-600'
                        : onDarkHero
                          ? 'text-white/75 hover:text-white'
                          : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                  {link.label}

                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
                      active
                        ? onDarkHero
                          ? 'bg-gradient-to-r from-amber-300 to-amber-500 opacity-100'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                  </Link>
                );
              })}

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Sign up for the math program in a new tab"
                className="ml-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {copy.signUp}
              </a>
              </nav>
            </div>

            {/* Mobile Menu Button */}

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                    onDarkHero
                        ? 'text-white hover:bg-white/10'
                        : 'text-slate-700 hover:bg-slate-100'
                }`}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-white border-t border-slate-100 shadow-lg animate-fade-in">
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                            location.pathname === link.path
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                    >
                      {link.label}
                    </Link>
                ))}

                <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sign up for the math program in a new tab"
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {copy.signUp}
                </a>

                <button
                    type="button"
                    onClick={toggleLanguage}
                    className="block w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={copy.toggleLabel}
                >
                  {language === 'en' ? 'ES' : 'EN'}
                </button>
              </div>
            </div>
        )}
      </header>
  );
}