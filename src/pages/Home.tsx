import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Trophy,
  CheckCircle2,
  Compass,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';

const baseHomeCopy = {
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
  mapAriaLabel: 'Mini Google map showing Fremont and Warm Springs',
};

const homeCopy = {
  en: baseHomeCopy,
  es: {
    ...baseHomeCopy,
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
    mapAriaLabel: 'Mini mapa de Google mostrando Fremont y Warm Springs',
  },
  hi: {
    ...baseHomeCopy,
    heroBadge: 'विगत दिनों में इन प्रतियोगिताओं में भाग लेने वाले छात्रों द्वारा निर्मित',
    heroTitleLine1: 'छात्रों को प्रशिक्षित कर रहे हैं',
    heroTitleLine2: 'प्रतियोगिता गणित सोच के लिए',
    heroLead:
      'हम प्राथमिक छात्रों को पैटर्न पहचानना, अपरिचित समस्याओं को हल करना और प्रतियोगिता गणितज्ञों की तरह सोचना सिखाते हैं—केवल चरणों का अनुसरण नहीं।',
    heroLocation: 'फremont और Warm Springs क्षेत्र में आधारित और अधिक परिवारों तक पहुंचने के लिए विस्तार कर रहे हैं।',
    exploreCompetitions: 'प्रतिस्पर्धाएँ देखें',
    signUp: 'साइन अप करें',
    impactBasedIn: 'आधारित',
    serviceTitle: 'Fremont और Warm Springs में आधारित',
    serviceBody:
      'हम Fremont और Warm Springs क्षेत्र में शुरू हुए और जैसे-जैसे कार्यक्रम बढ़ता है, हम अधिक परिवारों की सेवा करने के लिए विस्तार कर रहे हैं।',
    serviceNow: 'अब Fremont और Warm Springs की सेवा कर रहे हैं, और विस्तार के साथ और स्थानों की योजना बनाई जा रही है।',
    whyTag: 'यह क्यों मौजूद है',
    whyTitle: 'अधिकांश छात्रों को प्रतियोगिता सोच सिखाई नहीं जाती',
    whyP1: 'InfinityMath4All इसलिए मौजूद है क्योंकि अधिकांश छात्रों को नहीं दिखाया जाता कि प्रतियोगिता गणित वास्तव में कैसा महसूस होता है।',
    whyP2:
      'हम हाई स्कूल के छात्र हैं जिन्होंने हाल ही में इन प्रतियोगिताओं में भाग लिया। हम उन पैटर्न, शॉर्टकट और सोच-शैलियों को सिखाते हैं जिन्हें हम पहले सीखना चाहते थे।',
    whyP3: 'Fremont और Warm Springs क्षेत्र में आधारित और जैसे-जैसे अधिक छात्र जुड़ते हैं, विस्तार कर रहे हैं।',
    ctaTitle: 'क्या आप अलग तरह से सोचने के लिए तैयार हैं?',
    ctaBody: 'उन छात्रों से जुड़ें जो प्रतियोगिता गणित सीख रहे हैं, ठीक वैसे जैसा इसे पढ़ाना चाहिए—जो लोग इसे अभी-अभी किया है।',
    getStarted: 'शुरू करें',
    locationSummary: 'Fremont + Warm Springs',
    mapAriaLabel: 'Fremont और Warm Springs दिखाने वाला छोटा Google मानचित्र',
  },
  fr: {
    ...baseHomeCopy,
    heroBadge: 'Créé par des étudiants qui ont récemment participé à ces concours',
    heroTitleLine1: 'Former les élèves pour',
    heroTitleLine2: 'la pensée mathématique de concours',
    heroLead:
      'Nous enseignons aux élèves du primaire à reconnaître les motifs, résoudre des problèmes inconnus et penser comme des mathématiciens de concours, pas seulement suivre des étapes.',
    heroLocation: 'Basé dans la région de Fremont et Warm Springs et en expansion pour atteindre plus de familles.',
    exploreCompetitions: 'Découvrir les compétitions',
    signUp: 'S’inscrire',
    impactBasedIn: 'Basé à',
    serviceTitle: 'Basé à Fremont et Warm Springs',
    serviceBody:
      'Nous avons commencé dans la région de Fremont et Warm Springs et nous nous développons pour servir davantage de familles à mesure que le programme grandit.',
    serviceNow: 'Nous servons désormais Fremont et Warm Springs, avec de nouveaux sites prévus à mesure que nous nous développons.',
    whyTag: 'Pourquoi cela existe',
    whyTitle: 'La plupart des élèves ne sont jamais formés à la pensée de concours',
    whyP1: 'InfinityMath4All existe parce que la plupart des élèves ne voient jamais à quoi ressemble réellement les mathématiques de concours.',
    whyP2:
      'Nous sommes des étudiants du secondaire qui avons récemment participé à ces concours nous-mêmes. Nous enseignons les motifs, raccourcis et styles de pensée que nous aurions aimé apprendre plus tôt.',
    whyP3: 'Basé dans la région de Fremont et Warm Springs, et en expansion à mesure que plus d’étudiants se joignent.',
    ctaTitle: 'Prêt à penser différemment ?',
    ctaBody: 'Rejoignez des étudiants qui apprennent les mathématiques de concours comme elles devraient être enseignées—par des personnes qui viennent de le faire.',
    getStarted: 'Commencer',
    locationSummary: 'Fremont + Warm Springs',
    mapAriaLabel: 'Mini carte Google montrant Fremont et Warm Springs',
  },
  ja: {
    ...baseHomeCopy,
    heroBadge: '最近これらのコンテストに参加した学生たちによって作られました',
    heroTitleLine1: '生徒を育てる',
    heroTitleLine2: 'コンテスト数学思考へ',
    heroLead:
      '私たちは小学生に、パターンを見つけ、見慣れない問題を解き、手順をただ覚えるのではなく、コンテスト数学者のように考える方法を教えます。',
    heroLocation: 'Fremont と Warm Springs地域を拠点にし、より多くの家庭に届くよう拡大しています。',
    exploreCompetitions: 'コンテストを見る',
    signUp: '登録する',
    impactBasedIn: '拠点',
    serviceTitle: 'Fremont と Warm Springs を拠点に',
    serviceBody:
      '私たちは Fremont と Warm Springs 地域から始まり、プログラムが成長するにつれてより多くの家庭にサービスできるよう拡大しています。',
    serviceNow: '現在 Fremont と Warm Springs を支援しており、拡大に伴いさらに多くの地域を予定しています。',
    whyTag: 'なぜこの活動があるのか',
    whyTitle: 'ほとんどの生徒はコンテスト思考を学びません',
    whyP1: 'InfinityMath4All は、ほとんどの生徒がコンテスト数学が実際にどのようなものかを学ばないために存在します。',
    whyP2:
      '私たちは最近このコンテストに参加した高校生です。早く学びたかったパターン、ショートカット、思考法を教えています。',
    whyP3: 'Fremont と Warm Springs 地域を拠点に、より多くの生徒が参加するにつれて拡大しています。',
    ctaTitle: '違う考え方を始める準備はできていますか？',
    ctaBody: 'コンテスト数学を、正しく教えるべき方法で学ぶ生徒たちに参加してください。',
    getStarted: '始める',
    locationSummary: 'Fremont + Warm Springs',
    mapAriaLabel: 'Fremont と Warm Springs を示す小さな Google マップ',
  },
  zh: {
    ...baseHomeCopy,
    heroBadge: '由最近参加过这些比赛的学生创建',
    heroTitleLine1: '培养学生的',
    heroTitleLine2: '竞赛数学思维',
    heroLead:
      '我们教小学生如何识别模式、解决陌生问题，并像竞赛数学家一样思考，而不仅仅是照着步骤做。',
    heroLocation: '基地位于 Fremont 和 Warm Springs 地区，并正在扩大服务更多家庭。',
    exploreCompetitions: '探索竞赛',
    signUp: '报名',
    impactBasedIn: '基地位于',
    serviceTitle: '基地位于 Fremont 和 Warm Springs',
    serviceBody:
      '我们始于 Fremont 和 Warm Springs 地区，并随着项目的发展继续扩展，为更多家庭提供服务。',
    serviceNow: '现在正在服务 Fremont 和 Warm Springs，并计划随着扩展增加更多地点。',
    whyTag: '为什么会有这个项目',
    whyTitle: '大多数学生从未被教授竞赛思维',
    whyP1: 'InfinityMath4All 的存在，是因为大多数学生从未真正接触过竞赛数学是什么样子。',
    whyP2:
      '我们是最近自己参加过这些竞赛的高中生。我们教授的是我们早就希望学会的模式、捷径和思考方式。',
    whyP3: '基地位于 Fremont 和 Warm Springs 地区，并随着更多学生加入而不断扩展。',
    ctaTitle: '准备好以不同的方式思考了吗？',
    ctaBody: '加入正在学习竞赛数学的学生队伍——由刚刚经历过这些内容的人来教。',
    getStarted: '开始',
    locationSummary: 'Fremont + Warm Springs',
    mapAriaLabel: '显示 Fremont 和 Warm Springs 的 Google 小地图',
  },
} as const;

const competitions = [
  {
    name: 'Noetic Math',
    level: 'Grades 1–5',
    description:
      'First exposure to structured contest thinking through creative problem solving.',
  },
  {
    name: 'Math Olympiad (MOEMS)',
    level: 'Grades 1–5',
    description:
      'Where strategy starts to matter more than speed—students learn real reasoning.',
  },
  {
    name: 'Elementary Math Track',
    level: 'Grades 1–5',
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
    detail: 'Core community base for local outreach and enrollment.',
  },
  {
    name: 'Warm Springs',
    detail: 'Serving families here now while expanding our reach.',
  },
];

export default function Home() {
  const { language } = useLanguage();
  const copy = { ...homeCopy.en, ...homeCopy[language] };

  const heroStats = [
    { value: '2', label: 'Competitions covered' },
    { value: '1–5', label: 'Grades taught' },
    { value: 'Live', label: 'Small group learning' },
    { value: copy.impactBasedIn, label: copy.locationSummary },
  ];

  return (
    <div>
      {/* ================================================================ HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

        <div className="relative mx-auto max-w-shell px-5 pb-14 pt-32 sm:px-6 lg:px-10 lg:pb-16 lg:pt-40">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Editorial column */}
            <div className="lg:col-span-7">
              <p className="mb-8 flex items-start gap-3 text-[0.75rem] font-medium leading-snug text-paper/65">
                <span
                  className="mt-1.5 h-px w-7 shrink-0 bg-brass"
                  aria-hidden="true"
                />
                {copy.heroBadge}
              </p>

              <h1 className="display-xl text-balance font-semibold text-paper">
                {copy.heroTitleLine1}{' '}
                <span className="italic text-brass">{copy.heroTitleLine2}</span>
              </h1>

              <p className="mt-8 max-w-xl text-pretty text-[1.125rem] leading-[1.65] text-paper/72">
                {copy.heroLead}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/competitions" className="btn-accent">
                  {copy.exploreCompetitions}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sign up for the math program in a new tab"
                  className="btn-ghost-light"
                >
                  {copy.signUp}
                </a>
              </div>

              <p className="mt-8 flex items-start gap-2 text-sm text-paper/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                {copy.heroLocation}
              </p>
            </div>

            {/* Framed portrait */}
            <figure className="hidden lg:col-span-5 lg:block">
              <div className="border border-paper/15 p-2.5">
                <img
                  src="/images/hero-worksheet.png"
                  alt="A student working through a handwritten number pattern in a squared notebook by lamplight"
                  className="h-[30rem] w-full rounded-sm object-cover"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 text-[0.6875rem] uppercase tracking-[0.14em] text-paper/40">
                Pattern work, not worksheets
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Credential strip */}
        <div className="relative border-t border-paper/12">
          <dl className="mx-auto grid max-w-shell grid-cols-2 px-5 sm:px-6 lg:grid-cols-4 lg:px-10">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-7 lg:py-8 ${
                  i > 0 ? 'lg:border-l lg:border-paper/12 lg:pl-8' : ''
                } ${i % 2 === 1 ? 'border-l border-paper/12 pl-6 lg:pl-8' : ''}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-[1.75rem] font-semibold leading-none text-paper lg:text-[2.125rem]">
                    {stat.value}
                  </span>
                  <span className="mt-2.5 block text-[0.75rem] leading-snug text-paper/50">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ======================================================= WHY THIS EXISTS */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                index="01"
                eyebrow={copy.whyTag}
                title={copy.whyTitle}
              />

              <div className="prose-editorial mt-8 max-w-xl">
                <p>{copy.whyP1}</p>
                <p>{copy.whyP2}</p>
                <p>{copy.whyP3}</p>
              </div>

              <ul className="mt-10 flex flex-col">
                {whyUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-rule py-4 text-[0.9375rem] leading-snug text-ink-soft last:border-b"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="lg:col-span-6">
              <div className="overflow-hidden rounded border border-rule bg-surface p-2.5">
                <img
                  src="/images/chalkboard-session.png"
                  alt="A high school mentor explaining a number pattern at a chalkboard to two elementary students"
                  className="w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[0.75rem] leading-snug text-ink-muted">
                Mentors work through the reasoning out loud, so students learn the
                pattern rather than the answer.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ========================================================= HOW IT WORKS */}
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <SectionHeading
            index="02"
            eyebrow="The Process"
            title="How It Works"
            subtitle="Three steps from first placement to walking into a competition room already knowing what to expect."
          />

          <div className="mt-14 grid gap-px border-t border-ink/10 bg-ink/10 md:grid-cols-3">
            {howItWorks.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="bg-paper p-7 lg:p-9">
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-serif text-[2.25rem] font-semibold leading-none text-ink/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold leading-snug text-ink">{title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= COMPETITIONS */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <SectionHeading
            index="03"
            eyebrow="Curriculum"
            title="Competitions We Prepare For"
            subtitle="Every track is taught by mentors who sat the same exam within the last few years."
          />

          <div className="mt-14 border-t border-ink/10">
            {competitions.map((competition) => (
              <Link
                key={competition.name}
                to="/competitions"
                className="group flex flex-col gap-4 border-b border-rule py-7 transition-colors duration-200 hover:bg-ink/[0.02] md:flex-row md:items-baseline md:gap-10"
              >
                <span className="w-28 shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {competition.level}
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {competition.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
                    {competition.description}
                  </p>
                </div>

                <ArrowRight
                  className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= SERVICE AREA */}
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                index="04"
                eyebrow="Service Area"
                title={copy.serviceTitle}
                subtitle={copy.serviceBody}
              />

              <dl className="mt-10 border-t border-ink/10">
                {serviceAreas.map((area) => (
                  <div key={area.name} className="border-b border-rule py-5">
                    <dt className="flex items-center gap-2 font-semibold text-ink">
                      <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                      {area.name}
                    </dt>
                    <dd className="mt-1.5 pl-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {area.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                {copy.serviceNow}
              </p>
            </div>

            <div
              className="grid gap-6 sm:grid-cols-2 lg:col-span-7"
              role="group"
              aria-label={copy.mapAriaLabel}
            >
              {serviceAreas.map((area, index) => (
                <figure
                  key={area.name}
                  className="card-flat overflow-hidden"
                >
                  <iframe
                    title={`${area.name} mini Google map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      area.name === 'Fremont' ? 'Fremont, CA' : 'Warm Springs, Fremont, CA',
                    )}&output=embed`}
                    className="h-64 w-full border-0 grayscale-[0.35]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <figcaption className="flex items-center gap-2 border-t border-rule px-4 py-3.5 text-sm font-semibold text-ink">
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {area.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== PROGRAM MATERIALS */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <SectionHeading
            index="05"
            eyebrow="Program Materials"
            title="Our Brochure"
            subtitle="The full program overview families receive — what we teach, how sessions run, and how to enrol."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <figure className="lg:col-span-8">
              <div className="rounded border border-rule bg-surface p-3 sm:p-5">
                <img
                  src="/1.png"
                  alt="InfinityMath4All tri-fold brochure describing the program, approach, and enrollment details"
                  className="w-full rounded-sm"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[0.75rem] text-ink-muted">
                InfinityMath4All tri-fold brochure — Noetic, MOEMS, and elementary
                math tracks.
              </figcaption>
            </figure>

            <div className="lg:col-span-4">
              <figure className="rounded border border-rule bg-surface p-6">
                <img
                  src="/2.png"
                  alt="InfinityMath4All logo"
                  className="mx-auto w-full max-w-[15rem]"
                  loading="lazy"
                />
              </figure>

              <blockquote className="mt-8 border-l-2 border-accent pl-5">
                <p className="font-serif text-xl leading-snug text-ink text-pretty">
                  &ldquo;Math is not about numbers, equations, or algorithms.
                  It&apos;s about understanding.&rdquo;
                </p>
                <footer className="mt-3 text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
                  From our program brochure
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== CTA */}
      <section className="bg-hero-warm py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionHeading
              index="06"
              eyebrow="Enrollment"
              title={copy.ctaTitle}
              subtitle={copy.ctaBody}
              tone="dark"
            />

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Sign up for the math program in a new tab"
                className="btn-base bg-paper text-ink hover:bg-paper/85"
              >
                {copy.signUp}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <Link to="/competitions" className="btn-ghost-light">
                {copy.getStarted}
              </Link>
            </div>

            <p className="mt-8 text-[0.8125rem] text-paper/45">
              Free for every elementary student. No student PII collected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
