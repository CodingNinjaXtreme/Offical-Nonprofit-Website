import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,

  ArrowRight,

  BookOpen,
  Medal,
  ChevronRight,

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
    image: 'NoeticLearningMathContest.png',
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
    image: 'ba6056f4f04119e4a6bd377e30ccc63b.jpeg',
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
    q: 'What standards does your elementary math track follow?',
    a: 'Our content follows Common Core Standards. Moreover, we incorporate competition-style problems in elementary math to increase math fluency',
  },
  {
    q: 'I have more questions, where can I ask them?',
    a:  'Email us at admin@InfinityMath4All.org. We will be happy to respond to your emails within a few business days.',
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
              Learn. Compete.
              <span className="block text-gradient-gold">Grow.</span>
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
            <div className="flex justify-center gap-6 py-5">
              <a
                  href="#compare"
                  className="px-10 py-4 text-lg font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              >
                Compare Programs
              </a>

              <a
                  href="#faq"
                  className="px-10 py-4 text-lg font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              >
                FAQ
              </a>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section id="compare" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="section-title text-center">2 competitions, one path forward</h2>

            <p className="text-center text-slate-500 mb-14">
              If you’re starting from zero, this is where to begin.
            </p>

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
                          <span className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md`}>
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

        {/* Mentor CTA FIX (only micro tone tweak) */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">

            <div className="card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100 grid lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  Coaches who just took these contests recently
                </h3>

                <p className="text-slate-600 leading-relaxed mb-5">
                  Every mentor is a high school student who recently competed in these contests.
                  That recency matters — they remember exactly which problems trip students up,
                  because they solved them not long ago.
                </p>

                <Link to="/partner" className="btn-primary">
                  Meet The Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ unchanged */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Common questions</h2>

            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                  <div key={i} className="border rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-sm">{q}</span>
                      <ChevronRight className={`w-5 h-5 ${openFaq === i ? 'rotate-90' : ''}`} />
                    </button>
                    {openFaq === i && (
                        <div className="px-6 pb-5 text-sm text-slate-500">
                          {a}
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA unchanged */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to compete?</h2>
          <p className="text-white/80 mb-8">Tell us your grade and goals.</p>
          <Link to="/partner" className="btn-accent px-8 py-4">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

      </div>
  );
}