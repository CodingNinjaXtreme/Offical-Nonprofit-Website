import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Trophy,

  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Award,

  Compass,
  GraduationCap,
  MapPin,

} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';

const homeCopy = {
  en: {
    heroBadge: 'Built by students who recently competed in these contests',
    heroTitleLine1: 'Training Students for',
    heroTitleLine2: 'Contest Math Thinking',
    heroLead:
      'We teach elementary students how to recognize patterns, solve unfamiliar problems, and think like contest mathematicians—not just follow steps.',
    heroLocation: 'Based in the Fremont and Warm Springs area and expanding to reach more families.',
    exploreCompetitions: 'Explore Competitions',
    signUp: 'Sign Up',
    impactBasedIn: 'Based in',
    serviceTitle: 'Based in Fremont and Warm Springs',
    serviceBody:
      'We started in the Fremont and Warm Springs area and are expanding to serve more families as the program grows.',
    serviceNow: 'Serving Fremont and Warm Springs now, with more locations planned as we expand.',
    whyTag: 'Why This Exists',
    whyTitle: 'Most Students Are Never Taught Contest Thinking',
    whyP1:
      'InfinityMath4All exists because most students are never shown what contest math actually feels like.',
    whyP2:
      'We’re high school students who recently competed in these contests ourselves. We teach the patterns, shortcuts, and thinking styles we wish we learned earlier.',
    whyP3: 'Based in the Fremont and Warm Springs area, and expanding as more students join.',
    ctaTitle: 'Ready to Start Thinking Differently?',
    ctaBody: 'Join students learning contest math the way it should be taught—from people who just did it.',
    getStarted: 'Get Started',
    locationSummary: 'Fremont + Warm Springs',
  },
  es: {
    heroBadge: 'Hecho por estudiantes que compitieron recientemente en estos concursos',
    heroTitleLine1: 'Formando a los estudiantes en',
    heroTitleLine2: 'pensamiento matemático de concurso',
    heroLead:
      'Enseñamos a los estudiantes de primaria a reconocer patrones, resolver problemas nuevos y pensar como matemáticos de concursos, no solo seguir pasos.',
    heroLocation: 'Con base en el área de Fremont y Warm Springs, y expandiéndonos para llegar a más familias.',
    exploreCompetitions: 'Ver competencias',
    signUp: 'Inscribirse',
    impactBasedIn: 'Con base en',
    serviceTitle: 'Con base en Fremont y Warm Springs',
    serviceBody:
      'Comenzamos en el área de Fremont y Warm Springs y nos estamos expandiendo para servir a más familias a medida que el programa crece.',
    serviceNow: 'Sirviendo a Fremont y Warm Springs ahora, con más ubicaciones planeadas mientras crecemos.',
    whyTag: 'Por qué existe esto',
    whyTitle: 'A la mayoría de los estudiantes nunca se les enseña a pensar en concursos',
    whyP1:
      'InfinityMath4All existe porque la mayoría de los estudiantes nunca ve lo que realmente se siente la matemática de concurso.',
    whyP2:
      'Somos estudiantes de preparatoria que recientemente competimos en estos concursos. Enseñamos los patrones, atajos y estilos de pensamiento que desearíamos haber aprendido antes.',
    whyP3: 'Con base en el área de Fremont y Warm Springs, y expandiéndonos a medida que más estudiantes se unen.',
    ctaTitle: '¿Listo para pensar de otra manera?',
    ctaBody: 'Únete a estudiantes que aprenden matemáticas de concurso de la forma correcta, de personas que acaban de competir.',
    getStarted: 'Comenzar',
    locationSummary: 'Fremont + Warm Springs',
  },
} as const;

const competitions = [
  {
    name: 'Noetic Math',
    level: 'Grades 1–5',
    color: 'bg-blue-500',
    accent: 'bg-blue-50 text-blue-700',
    description:
        'First exposure to structured contest thinking through creative problem solving.',
  },
  {
    name: 'Math Olympiad (MOEMS)',
    level: 'Grades 1–5',
    color: 'bg-amber-500',
    accent: 'bg-amber-50 text-amber-700',
    description:
        'Where strategy starts to matter more than speed—students learn real reasoning.',
  },
  {
    name: 'Elementary Math Track',
    level: 'Grades 1–5',
    color: 'bg-indigo-500',
    accent: 'bg-indigo-50 text-indigo-700',
    description:
        'Core number sense, arithmetic fluency, and early problem-solving foundations.',
  },
];

const howItWorks = [
  {
    icon: Compass,
    title: 'Find Your Starting Point',
    text: 'We understand the student’s grade and current level, then place them where their thinking can grow fastest.',
  },
  {
    icon: GraduationCap,
    title: 'Learn From Recent Competitors',
    text: 'Small groups led by high school mentors who recently took these same contests—teaching patterns, not memorization.',
  },
  {
    icon: Trophy,
    title: 'Build Contest Confidence',
    text: 'Students walk into competitions already familiar with the types of problems they’ll see.',
  },
];

const whyUs = [
  'Small-group sessions taught by recent contest competitors',
  'Focus on problem-solving patterns, not worksheets',
  'Free access for all elementary students',
  'Direct prep for Noetic, MOEMS, and similar contests',
];

const serviceAreas = [
  {
    name: 'Fremont',
    detail: 'Core community base for in-person outreach and enrollment.',
    position: 'left-[24%] top-[58%]',
  },
  {
    name: 'Warm Springs',
    detail: 'Serving families here now while expanding our reach.',
    position: 'left-[63%] top-[38%]',
  },
];

export default function Home() {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  return (
      <div>
        {/* HERO */}
        <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8 text-white/80 text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
                  {copy.heroBadge}
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  {copy.heroTitleLine1}
                  <span className="block text-gradient-gold">
                    {copy.heroTitleLine2}
                  </span>
                </h1>

                <p className="text-lg text-white/70 mb-10 max-w-lg">
                  {copy.heroLead}
                </p>

                <p className="text-sm text-white/65 mb-8 max-w-lg">
                  {copy.heroLocation}
                </p>

                <div className="flex gap-4 flex-col sm:flex-row">
                  <Link to="/competitions" className="btn-accent px-8 py-4">
                    <span>{copy.exploreCompetitions}</span> <ArrowRight aria-hidden="true" />
                  </Link>
                  <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                        aria-label="Sign up for the math program in a new tab"
                      className="btn-ghost-light px-8 py-4"
                  >
                    <span>{copy.signUp}</span> <ChevronRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* RIGHT IMAGE (2.png restored + scaled back up) */}
              <div className="hidden lg:block">
                <img
                    src="/2.png"
                    alt="Math"
                    className="rounded-3xl shadow-2xl w-full object-cover h-[580px] ring-1 ring-white/10 scale-[1.02]"
                    loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '2', l: 'Competitions covered' },
              { v: '1–5', l: 'Grades taught' },
              { v: 'Live', l: 'Small group learning' },
              { v: copy.impactBasedIn, l: copy.locationSummary },
            ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold">{s.v}</div>
                  <div className="text-sm text-slate-500">{s.l}</div>
                </div>
            ))}
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">
                <MapPin aria-hidden="true" /> Service Area
              </span>

              <h2 className="section-title">{copy.serviceTitle}</h2>

              <p className="section-subtitle mb-8">
                {copy.serviceBody}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <div key={area.name} className="card p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
                      <h3 className="font-bold text-slate-900">{area.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600">{area.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="card p-4 sm:p-6 bg-white"
              role="img"
              aria-label={language === 'en' ? 'Mini Google map showing Fremont and Warm Springs' : 'Mini mapa de Google mostrando Fremont y Warm Springs'}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {serviceAreas.map((area, index) => (
                  <div key={area.name} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <iframe
                      title={`${area.name} mini Google map`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(area.name === 'Fremont' ? 'Fremont, CA' : 'Warm Springs, Fremont, CA')}&output=embed`}
                      className="h-56 w-full border-0"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="border-t border-slate-100 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
                        <h3 className="font-bold text-slate-900">{area.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{area.detail}</p>
                    </div>
                  </div>
                ))}
                <p className="md:col-span-2 text-sm text-slate-500">
                  {copy.serviceNow}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
            <div>
            <span className="section-tag">
              <Lightbulb aria-hidden="true" /> Why This Exists
            </span>

              <h2 className="section-title">
                {copy.whyTitle}
              </h2>

              <p className="text-slate-600 mb-6">
                {copy.whyP1}
              </p>

              <p className="text-slate-600 mb-6">
                {copy.whyP2}
              </p>

              <p className="text-slate-600 mb-6">
                {copy.whyP3}
              </p>

              <ul className="space-y-3">
                {whyUs.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="text-emerald-500" aria-hidden="true" />
                      {item}
                    </li>
                ))}
              </ul>
            </div>

            <img
                src="https://cdn.prod.website-files.com/6744bdb342b0a7660e7b7c7d/6834cbb655e09ee0008f6474_67df5face1f96bebc07f8f2b_3b23b533-c408-4380-bce6-0820b89131e9_math-on-board.webp"
                className="rounded-2xl shadow-lg"
                alt="student"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="section-title">How It Works</h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {howItWorks.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="card p-6">
                  <Icon className="w-10 h-10 mb-4 text-blue-600" aria-hidden="true" />
                  <div className="text-xs font-bold text-blue-600 mb-2">
                    STEP {i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
            ))}
          </div>
        </section>

        {/* COMPETITIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="section-title">Competitions We Prepare For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {competitions.map((c) => (
                <Link key={c.name} to="/competitions" className="card p-6">
                  <div className={`h-2 ${c.color} mb-4`} />
                  <div className="text-sm text-slate-500 mb-2">{c.level}</div>
                  <h3 className="font-bold mb-2">{c.name}</h3>
                  <p className="text-sm text-slate-600">{c.description}</p>
                </Link>
            ))}
          </div>
        </section>

        {/* CTA (1.png RESTORED) */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-10 text-center lg:text-left">
            <div>
              <Award className="mx-auto lg:mx-0 mb-4" size={40} />
              <h2 className="text-3xl font-bold mb-4">
                {copy.ctaTitle}
              </h2>
              <p className="text-white/70 mb-8">
                {copy.ctaBody}
              </p>

              <div className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start">
                <Link to="/competitions" className="btn-accent px-8 py-4">
                  <span>{copy.getStarted}</span> <ArrowRight aria-hidden="true" />
                </Link>

                <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sign up for the math program in a new tab"
                    className="btn-ghost-light px-8 py-4"
                >
                  <span>Sign Up</span> <ChevronRight aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* RESTORED 1.png */}
            <div className="hidden lg:flex justify-center">
              <img
                  src="/1.png"
                  alt="InfinityMath4All flyer"
                  className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
                  loading="eager"
              />
            </div>
          </div>
        </section>
      </div>
  );
}