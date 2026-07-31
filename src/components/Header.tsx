import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
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
    languageButton: 'Choose Language',
    languageLabel: 'English',
  },
  es: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    mission: 'Misión',
    competitions: 'Competencias',
    volunteer: 'Voluntariado',
    signUp: 'Inscribirse',
    languageButton: 'Elegir idioma',
    languageLabel: 'Español',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    mission: 'मिशन',
    competitions: 'प्रतिस्पर्धाएँ',
    volunteer: 'स्वयंसेवक',
    signUp: 'साइन अप करें',
    languageButton: 'भाषा चुनें',
    languageLabel: 'हिन्दी',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    mission: 'Mission',
    competitions: 'Compétitions',
    volunteer: 'Bénévolat',
    signUp: 'S’inscrire',
    languageButton: 'Choisir la langue',
    languageLabel: 'Français',
  },
  ja: {
    home: 'ホーム',
    about: '私たちについて',
    mission: '使命',
    competitions: 'コンテスト',
    volunteer: 'ボランティア',
    signUp: '登録する',
    languageButton: '言語を選択',
    languageLabel: '日本語',
  },
  zh: {
    home: '首页',
    about: '关于我们',
    mission: '使命',
    competitions: '竞赛',
    volunteer: '志愿者',
    signUp: '报名',
    languageButton: '选择语言',
    languageLabel: '中文',
  },
} as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, availableLanguages } = useLanguage();
  const copy = headerCopy[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLanguageMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!languageMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [languageMenuOpen]);

  const isHome = location.pathname === '/';
  const onDarkHero = isHome && !scrolled;

  const navLinks = [
    { label: copy.home, path: '/' },
    { label: copy.about, path: '/about' },
    { label: copy.mission, path: '/mission' },
    { label: copy.competitions, path: '/competitions' },
    { label: copy.volunteer, path: '/partner' },
  ];

  const renderLanguageMenu = (isMobile = false) => (
    <div className="relative" ref={languageMenuRef}>
      <button
        type="button"
        onClick={() => setLanguageMenuOpen((open) => !open)}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          onDarkHero
            ? 'border-white/20 text-white hover:bg-white/10'
            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
        } ${isMobile ? 'w-full justify-between px-4 py-3 text-left' : ''}`}
        aria-haspopup="menu"
        aria-expanded={languageMenuOpen}
        aria-label={copy.languageButton}
      >
        <span>{copy.languageButton}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {languageMenuOpen && (
        <div className={`absolute z-50 mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-xl ${isMobile ? 'left-0 right-0' : 'right-0 w-56'}`}>
          {availableLanguages.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                setLanguage(option.code);
                setLanguageMenuOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-50 ${
                language === option.code ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
              }`}
            >
              <span>{option.label}</span>
              <span className="text-xs text-slate-500">{option.nativeLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

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
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="InfinityMath4All home">
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
            {renderLanguageMenu(false)}

            <nav className="flex items-center gap-1" aria-label="Primary">
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              onDarkHero ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

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

            <div className="pt-1">{renderLanguageMenu(true)}</div>
          </div>
        </div>
      )}
    </header>
  );
}