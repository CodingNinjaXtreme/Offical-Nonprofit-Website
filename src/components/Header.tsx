import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ChevronDown, Globe, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';

const headerCopy = {
  en: {
    home: 'Home',
    about: 'About Us',
    mission: 'Mission',
    competitions: 'Competitions',
    impact: 'Impact',
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
    impact: 'Impacto',
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
    impact: 'प्रभाव',
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
    impact: 'Impact',
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
    impact: '影響',
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
    impact: '影响力',
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
  const onDarkHero = isHome && !scrolled && !menuOpen;

  const navLinks = [
    { label: copy.home, path: '/' },
    { label: copy.about, path: '/about' },
    { label: copy.mission, path: '/mission' },
    { label: copy.competitions, path: '/competitions' },
    { label: copy.impact, path: '/impact' },
    { label: copy.volunteer, path: '/partner' },
  ];

  const renderLanguageMenu = (isMobile = false) => (
    <div className={`relative ${isMobile ? 'w-full' : ''}`} ref={languageMenuRef}>
      <button
        type="button"
        onClick={() => setLanguageMenuOpen((open) => !open)}
        className={`inline-flex items-center gap-2 rounded border px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
          onDarkHero
            ? 'border-paper/25 text-paper/90 hover:border-paper/60 hover:text-paper'
            : 'border-rule text-ink-soft hover:border-ink/40 hover:text-ink'
        } ${isMobile ? 'w-full justify-between px-4 py-3' : ''}`}
        aria-haspopup="menu"
        aria-expanded={languageMenuOpen}
        aria-label={copy.languageButton}
      >
        <span className="inline-flex items-center gap-2">
          <Globe className="h-4 w-4 opacity-70" aria-hidden="true" />
          {copy.languageLabel}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
            languageMenuOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {languageMenuOpen && (
        <div
          role="menu"
          className={`absolute z-50 mt-2 overflow-hidden rounded border border-rule bg-surface ring-soft ${
            isMobile ? 'left-0 right-0' : 'right-0 w-60'
          }`}
        >
          <p className="border-b border-rule px-4 pb-2 pt-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {copy.languageButton}
          </p>

          {availableLanguages.map((option) => {
            const selected = language === option.code;

            return (
              <button
                key={option.code}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setLanguage(option.code);
                  setLanguageMenuOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-150 ${
                  selected ? 'bg-accent-tint text-ink' : 'text-ink-soft hover:bg-ink/[0.04]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {selected ? (
                    <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  ) : (
                    <span className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {option.nativeLabel}
                </span>
                <span className="text-[0.6875rem] uppercase tracking-wider text-ink-muted">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        onDarkHero
          ? 'border-b border-paper/10 bg-transparent'
          : 'border-b border-rule bg-paper/92 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="InfinityMath4All home"
          >
            <Logo size={34} variant={onDarkHero ? 'mono' : 'gradient'} />

            <span className="flex flex-col leading-none">
              <span
                className={`font-serif text-[1.0625rem] font-semibold tracking-tight transition-colors duration-300 ${
                  onDarkHero ? 'text-paper' : 'text-ink'
                }`}
              >
                InfinityMath4All
              </span>
              <span
                className={`mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  onDarkHero ? 'text-paper/55' : 'text-ink-muted'
                }`}
              >
                Math Education Program
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-7" aria-label="Primary">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`nav-link ${active ? 'active' : ''} ${
                      onDarkHero
                        ? 'text-paper/70 hover:!text-paper [&.active]:!text-paper'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {renderLanguageMenu(false)}

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Sign up for the math program in a new tab"
                className={`rounded px-4 py-2 text-[0.8125rem] font-semibold transition-colors duration-200 ${
                  onDarkHero
                    ? 'bg-paper text-ink hover:bg-paper/85'
                    : 'bg-accent text-paper hover:bg-accent/88'
                }`}
              >
                {copy.signUp}
              </a>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`-mr-2 rounded p-2 transition-colors duration-200 lg:hidden ${
              onDarkHero ? 'text-paper hover:bg-paper/10' : 'text-ink hover:bg-ink/[0.06]'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="animate-fade-in border-t border-rule bg-paper lg:hidden"
        >
          <nav className="mx-auto max-w-shell px-5 sm:px-6" aria-label="Mobile">
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-rule py-4 text-[0.9375rem] transition-colors duration-150 ${
                    active ? 'font-semibold text-ink' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="index-num w-5 opacity-70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 py-5">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Sign up for the math program in a new tab"
                className="btn-accent w-full"
              >
                {copy.signUp}
              </a>

              {renderLanguageMenu(true)}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
