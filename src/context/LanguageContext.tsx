import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type LanguageCode = 'en' | 'es' | 'hi' | 'fr' | 'ja' | 'zh';

type LanguageOption = {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
};

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  toggleLanguage: () => void;
  availableLanguages: LanguageOption[];
};

const STORAGE_KEY = 'infinitymath4all-language';

export const availableLanguages: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文' },
];

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    const isSupportedLanguage = availableLanguages.some(
      ({ code }) => code === storedLanguage,
    );

    if (isSupportedLanguage && storedLanguage) {
      setLanguageState(storedLanguage as LanguageCode);
    }
  }, []);

  // Keep the document language in sync so browsers apply the correct
  // font fallbacks and line-breaking rules for CJK and Devanagari scripts.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  const toggleLanguage = () => {
    const nextLanguage: Record<LanguageCode, LanguageCode> = {
      en: 'es',
      es: 'hi',
      hi: 'fr',
      fr: 'ja',
      ja: 'zh',
      zh: 'en',
    };

    setLanguage(nextLanguage[language]);
  };

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, availableLanguages }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
