import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Trophy,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Award,
  Sparkles,
  HeartHandshake,
  Compass,
  GraduationCap,
  Users,
  Star,
} from 'lucide-react';

const competitions = [
  {
    name: 'Noetic Math',
    level: 'Grades 1–5',
    color: 'bg-blue-500',
    accent: 'bg-blue-50 text-blue-700',
    description: 'Problem-solving skills through creative elementary mathematical challenges.',
  },
  {
    name: 'Math Olympiad (MOEMS)',
    level: 'Grades 1–5',
    color: 'bg-amber-500',
    accent: 'bg-amber-50 text-amber-700',
    description: 'Develops higher-order thinking and strategic problem solving for upper-elementary students.',
  },
  {
    name: 'Elementary Grade-Level Math',
    level: 'Grades 1–5',
    color: 'bg-indigo-500',
    accent: 'bg-indigo-50 text-indigo-700',
    description: 'Foundational grade-level math: number sense, arithmetic fluency, and problem-solving aligned to elementary standards.',
  },
];

const howItWorks = [
  {
    icon: Compass,
    title: 'Find Your Track',
    text: 'Tell us your grade and goals. We match you to the competition path that fits — Noetic, MOEMS, or Elementary Grade-Level Math.',
  },
  {
    icon: GraduationCap,
    title: 'Learn With High School Mentors',
    text: 'Small-group sessions led by trained high school students who recently competed themselves. Concept-first teaching, then competition-style practice.',
  },
  {
    icon: Trophy,
    title: 'Compete & Grow',
    text: 'Sit official contests with confidence. Walk away with sharper reasoning, real friendships, and a love of math.',
  },
];

// Testimonials removed per request

const whyUs = [
  'Small-group sessions with trained high school mentors',
  'Curriculum aligned to national competition standards',
  'Free and subsidized spots for underserved students',
  'Year-round programs for grades 1–5',
];

const teamHighlights = [
  {
    role: 'Mentors',
    title: 'High school students who recently competed',
    text: 'Our coaches have just been through MOEMS and Noetic themselves. They remember exactly where the tricky parts are.',
  },
  {
    role: 'Curriculum',
    title: 'Built around what younger students actually struggle with',
    text: 'Lessons are reviewed with adult advisors and refined every season based on what works in the room.',
  },
  {
    role: 'Mission',
    title: 'Student-run, mission-first',
    text: 'The whole leadership team is in high school — and that is the point.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 left-[5%] w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-rise">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium"> A student-led campaign · Run by upcoming high schoolers</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                Unlocking Every
                <span className="block text-gradient-gold">Child's Math</span>
                <span className="block">Potential</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
                We prepare elementary students for world-class math competitions
                — building confidence, critical thinking, and a lasting love of learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/competitions" className="btn-accent text-base px-8 py-4 animate-shine">
                  Explore Competitions <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/mission" className="btn-ghost-light text-base px-8 py-4">
                  Our Mission <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60 text-sm">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Competitive Math </span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free seats</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Grades 1–5</span>
              </div>
            </div>

            <div className="hidden lg:block animate-rise" style={{ animationDelay: '120ms' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-amber-300/20 rounded-[2rem] blur-2xl" />
                <img
                  src="/2.png"
                  alt="Mathematical equations and concepts"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-[520px] ring-1 ring-white/10"
                  loading="eager"
                />
                <div className="absolute -bottom-5 -left-5 bg-white text-slate-900 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <div>
                    <div className="font-bold text-sm">Run by high schoolers</div>
                    <div className="text-xs text-slate-500">Mentors who just lived it</div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-white text-slate-900 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-bold text-sm">2 competitions</div>
                    <div className="text-xs text-slate-500">Noetic · MOEMS · Elementary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="divider-wave">
            <path d="M0 80L1440 80L1440 20C1200 70 720 80 0 20V80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Impact strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: '2', l: 'National competitions' },
              { v: '1-5', l: 'Grades served' },
              { v: 'Year-round', l: 'Cohorts' },
              { v: '100%', l: 'High-school-led teaching' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{s.v}</div>
                <div className="text-xs md:text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">
                <Lightbulb className="w-4 h-4" /> Why InfinityMath4All
              </span>
              <h2 className="section-title">More Than Test Prep — We Build Mathematicians</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                InfinityMath4All was founded on a simple belief: every child deserves access to
                high-quality math education, regardless of background. Our approach blends rigorous
                competition preparation with genuine curiosity-driven learning.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/mission" className="btn-primary">
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/6744bdb342b0a7660e7b7c7d/6834cbb655e09ee0008f6474_67df5face1f96bebc07f8f2b_3b23b533-c408-4380-bce6-0820b89131e9_math-on-board.webp"
                alt="Student working on math"
                className="rounded-2xl shadow-lg w-full object-cover h-[440px] ring-soft"
                loading="lazy"
              />
              <div className="absolute top-6 -left-6 bg-blue-600 text-white rounded-2xl p-5 shadow-xl">
                <BookOpen className="w-6 h-6 mb-2" />
                <div className="font-bold text-xl">Math Excellence</div>
                <div className="text-blue-200 text-xs">In every student</div>
              </div>
              <div className="absolute -bottom-6 right-6 bg-white rounded-2xl px-5 py-4 shadow-xl ring-1 ring-slate-100 flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="font-bold text-sm text-slate-900">Free seats available</div>
                  <div className="text-xs text-slate-500">for underserved students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dotgrid pointer-events-none opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">
              <Compass className="w-4 h-4" /> How It Works
            </span>
            <h2 className="section-title">From Curious Kid to Confident Competitor</h2>
            <p className="section-subtitle mx-auto text-center">
              Three steps. No fluff. Real progress that students and parents can feel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="card p-7 relative group hover:-translate-y-1">
                  {/* The Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Shifted more to the right with left-[88px] */}
                  <div className="absolute top-[38px] left-[88px] px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
                    STEP {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>

            ))}
          </div>
        </div>
      </section>

      {/* Run by high schoolers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="section-tag bg-amber-100 text-amber-700">
                <Users className="w-4 h-4" /> Who Runs This
              </span>
              <h2 className="section-title">A Math Initiative, Run by High Schoolers</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                InfinityMath4All is built and operated by high school students. Our mentors
                competed in MOEMS and Noetic just a few years ago — they know exactly what
                younger students get stuck on, because they got stuck on the same things.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We&rsquo;re backed by adult advisors for safety, curriculum review, and
                accountability — but every lesson is taught, every problem set is written, and
                every Saturday session is run by a high school student who genuinely wants the
                next generation to love math.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5" /> Trained mentors
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5" /> Adult-advised
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5" /> Volunteer-powered
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {teamHighlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`card p-6 ${i === 2 ? 'sm:col-span-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100' : ''}`}
                >
                  <div className="text-[11px] uppercase tracking-widest font-bold text-blue-600 mb-2">
                    {h.role}
                  </div>
                  <div className="font-bold text-slate-900 text-base mb-2">{h.title}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">
              <Trophy className="w-4 h-4" /> Competitions
            </span>
            <h2 className="section-title">Competitions We Prepare Students For</h2>
            <p className="section-subtitle mx-auto text-center">
              From local to national stage, our students compete — and grow — at every level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((comp) => (
              <Link
                key={comp.name}
                to="/competitions"
                className="card group relative cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-2 ${comp.color}`} />
                <div className="p-6">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${comp.accent}`}
                  >
                    {comp.level}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{comp.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{comp.description}</p>
                  <span className="text-xs text-blue-600 font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/competitions" className="btn-primary">
              View All Competitions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials removed */}

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            <div className="text-center lg:text-left">
              <Award className="w-12 h-12 text-amber-300 mx-auto lg:mx-0 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Ignite Your Child's Potential?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
                Join families who trust InfinityMath4All to guide their children toward academic
                excellence and a lifetime love of mathematics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/competitions" className="btn-accent text-base px-8 py-4">
                  Browse Competitions <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/partner" className="btn-ghost-light text-base px-8 py-4">
                  Partner With Us <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <img
                src="/1.png"
                alt="InfinityMath4All poster"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
