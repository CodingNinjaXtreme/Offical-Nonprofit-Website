import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Calendar,
  Users,
  ArrowRight,
  Star,

  BookOpen,

  Medal,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  Clock,
  HelpCircle,
} from 'lucide-react';

const competitions = [
  {
    id: 'noetic',
    name: 'Noetic Learning Math Contest',
    shortName: 'Noetic',
    grades: 'Grades 1–5',
    frequency: 'Twice per year (Fall & Spring)',
    format: '20 problems · 45 minutes · MC + short answer',
    color: 'from-blue-500 to-blue-700',
    accent: 'blue',
    icon: BookOpen,
    description:
      'A biannual national competition for elementary students. Creative, multi-step problems that push past textbook math.',
    whatWeTeach: [
      'Number theory and arithmetic reasoning',
      'Algebraic thinking and pattern recognition',
      'Geometry and spatial reasoning',
      'Word problems and logical deduction',
      'Time management under competition conditions',
    ],
    bestFor: 'Students new to competition math who want a friendly first contest.',
    image:
      'NoeticLearningMathContest.png',
  },
  {
    id: 'Olympiad',
    name: 'Math Olympiad (MOEMS)',
    shortName: 'MOEMS',
    grades: 'Grades 1–5',
    frequency: '5 monthly contests (Nov–Mar)',
    format: '5 problems · 30 minutes · Free response',
    color: 'from-amber-500 to-orange-500',
    accent: 'amber',
    icon: Medal,
    description:
      'A team-based program with monthly contests from November through March. Builds perseverance, deep reasoning, and team collaboration.',
    whatWeTeach: [
      'Advanced arithmetic and number theory',
      'Algebra concepts for elementary students',
      'Geometry proofs and constructions',
      'Combinatorics and probability',
      'Free-response mathematical communication',
    ],
    bestFor: 'Students who love wrestling with one hard problem at a time.',
    image:
      'ba6056f4f04119e4a6bd377e30ccc63b.jpeg',
  },
  {
    id: 'elementary',
    name: 'Elementary Grade-Level Math',
    shortName: 'Elementary',
    grades: 'Grades 1–5',
    frequency: 'Year-round',
    format: 'Curriculum-aligned practice and fluency exercises',
    color: 'from-indigo-500 to-indigo-700',
    accent: 'indigo',
    icon: BookOpen,
    description:
      'Focused grade-level instruction to build number sense, arithmetic fluency, and problem-solving foundations for elementary students.',
    whatWeTeach: [
      'Number sense and place value',
      'Arithmetic fluency and strategies',
      'Basic geometry and measurement',
      'Problem-solving with words and visuals',
      'Math reasoning and explanation skills',
    ],
    bestFor: 'Students developing core elementary math skills and confidence.',
    image:
      'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

const prepTimeline = [
  {
    phase: 'Weeks 1–4',
    title: 'Concept Foundation',
    text: 'Mentors introduce one core topic per week. Students learn the why before any timed practice.',
  },
  {
    phase: 'Weeks 5–10',
    title: 'Problem-Solving Patterns',
    text: 'We build a toolkit of patterns — invariants, parity, casework — students can pull from on contest day.',
  },
  {
    phase: 'Weeks 11–14',
    title: 'Mock Contests',
    text: 'Full-length practice contests under real timing. We debrief every problem, every miss.',
  },
  {
    phase: 'Contest Day',
    title: 'Calm + Confident',
    text: 'Students arrive having seen the format dozens of times. The contest feels familiar — not scary.',
  },
];

const faqs = [
  {
    q: 'Who teaches the sessions?',
    a: 'High school students who recently competed in these same contests. They are trained, vetted, and supported by an adult advisory board that reviews curriculum and oversees safety.',
  },
  {
    q: 'How much do programs cost?',
    a: 'Programs are free or subsidized. We never want cost to be the reason a student does not compete. If your family needs financial help, just ask — that is the entire point of how we are structured.',
  },
  {
    q: 'My child has never done a math contest. Can they still join?',
    a: 'Yes — Noetic and our elementary programs are designed exactly for first-time competitors. Our mentors started where your child is now.',
  },
  {
    q: 'How do I enroll?',
    a: 'Email us at admin@InfinityMath4All.org or use the Partner With Us page. We will reply within a couple of days with the next available cohort.',
  },
];

export default function Competitions() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-hero py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-300/30 text-amber-200 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <Trophy className="w-3.5 h-3.5" /> Competition Prep
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Compete. Achieve.
            <span className="block text-gradient-gold">Inspire.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Three major math competitions and elementary grade-level instruction, prepped by high school mentors who recently took these contests themselves. Real coaching from someone who remembers exactly what hard felt like.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="divider-wave">
            <path d="M0 60L1440 60L1440 0C1200 50 720 60 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {competitions.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {c.shortName}
              </a>
            ))}
            <a
              href="#compare"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Compare
            </a>
            <a
              href="#timeline"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Prep Timeline
            </a>
            <a
              href="#faq"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section id="compare" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">
              <Star className="w-4 h-4" /> At a Glance
            </span>
            <h2 className="section-title">2 competitions, one path forward</h2>
            <p className="section-subtitle mx-auto text-center">
              Not sure which to start with? This is the cheat sheet.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-100 shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Competition</th>
                  <th className="px-6 py-4 font-semibold">Grades</th>
                  <th className="px-6 py-4 font-semibold">When</th>
                  <th className="px-6 py-4 font-semibold">Format</th>
                  <th className="px-6 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {competitions.map((c) => {
                  const Icon = c.icon;
                  return (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md`}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </span>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{c.shortName}</div>
                            <div className="text-xs text-slate-500">{c.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-700">{c.grades}</td>
                      <td className="px-6 py-5 text-sm text-slate-700">{c.frequency}</td>
                      <td className="px-6 py-5 text-sm text-slate-700">{c.format}</td>
                      <td className="px-6 py-5 text-sm text-slate-700 max-w-xs">{c.bestFor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competition Sections */}
      <div className="bg-white">
        {competitions.map((comp, index) => {
          const Icon = comp.icon;
          const isEven = index % 2 === 0;
          return (
            <section
              key={comp.id}
              id={comp.id}
              className={`py-20 ${isEven ? 'bg-slate-50' : 'bg-white'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${comp.color} text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-md`}
                    >
                      <Icon className="w-4 h-4" />
                      {comp.grades}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                      {comp.name}
                    </h2>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {comp.frequency}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-slate-400" />
                        {comp.format}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{comp.description}</p>
                    <div className="bg-white rounded-2xl p-5 mb-5 ring-1 ring-slate-100 shadow-sm">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                        What our mentors teach
                      </p>
                      <ul className="space-y-2">
                        {comp.whatWeTeach.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-6">
                      <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-amber-800">{comp.bestFor}</span>
                    </div>
                    <Link to="/partner" className="btn-primary">
                      Join This Track <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-amber-300/15 rounded-[2rem] blur-2xl" />
                      <img
                        src={comp.image}
                        alt={comp.name}
                        className="relative rounded-2xl shadow-lg w-full object-cover h-[420px] ring-1 ring-slate-100"
                        loading="lazy"
                      />
                      <div
                        className={`absolute -bottom-5 -right-5 bg-gradient-to-br ${comp.color} text-white rounded-2xl p-5 shadow-xl`}
                      >
                        <Star className="w-5 h-5 mb-1" />
                        <div className="font-bold text-lg leading-tight">{comp.shortName}</div>
                        <div className="text-white/80 text-xs">{comp.grades}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Prep Timeline */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">
              <Clock className="w-4 h-4" /> How We Prep
            </span>
            <h2 className="section-title">A typical season, week by week</h2>
            <p className="section-subtitle mx-auto text-center">
              Concepts first. Then patterns. Then realistic practice. Then the real thing.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {prepTimeline.map((p, i) => (
              <div
                key={p.title}
                className="relative card p-6 hover:-translate-y-1"
              >
                <div className="text-[10px] font-bold tracking-widest text-blue-600 mb-2">
                  {p.phase}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-bold text-slate-300">
                    0{i + 1}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                    {i === 0 ? <BookOpen className="w-4 h-4 text-white" /> : i === 1 ? <Star className="w-4 h-4 text-white" /> : i === 2 ? <Clock className="w-4 h-4 text-white" /> : <Trophy className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <div className="font-bold text-slate-900 text-base mb-2">{p.title}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor callout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 flex items-center justify-center shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Coaches who just lived it
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Every mentor is a high school student who recently competed in these contests.
                That recency matters — they remember exactly which problems trip students up,
                because the same ones tripped them up two years ago.
              </p>
              <Link to="/partner" className="btn-primary">
                Meet The Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">
              <HelpCircle className="w-4 h-4" /> FAQ
            </span>
            <h2 className="section-title">Common questions, plain answers</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-200"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-slate-900 text-sm pr-4">{q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to compete?</h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us your grade and goals. We&rsquo;ll match you to the right cohort.
          </p>
          <Link to="/partner" className="btn-accent text-base px-8 py-4">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
