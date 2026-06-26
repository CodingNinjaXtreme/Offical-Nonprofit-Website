import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  HeartHandshake,
  Compass,
  Heart,
  Sparkles,
  Users,
  ShieldCheck,
  Lightbulb,
  Quote,
  Calendar,
  GraduationCap,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Access First',
    text: 'Every lesson, every problem set, every session is free  for students who need it. Talent is everywhere — opportunity should be too.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity Over Cramming',
    text: 'We do not teach test tricks. We teach students how to think — contest scores are a side effect, not the goal.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Run By Students, For Students',
    text: 'Our mentors are high schoolers who just lived it. They know which problems trip 5th graders up because they were tripped up by them.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Adult-Advised, Student-Led',
    text: 'Every session, our team reviews the curriculum, runs safety protocols, and helps to stay accountable to families.',
    color: 'from-emerald-500 to-teal-500',
  },
];

const milestones = [
  { year: 'Year 1', title: 'Founded by high schoolers', text: 'A small group of competition alumni decided younger students deserved the same coaching they wished they had.' },
  { year: 'Now', title: 'Three competitions, year-round', text: 'Noetic, MOEMS, and Elementary Grade-Level Math — with free seats every cohort.' },
  { year: 'Next', title: 'Expanding mentor cohorts', text: 'Recruiting more high school mentors so no waitlisted student gets turned away.' },
];

const team = [
  {
    initials: 'IM',
    name: 'Student Leadership Team',
    role: 'High School Founders & Coaches',
    text: 'Designed the curriculum, runs the weekly sessions, and keeps the lights on. All current high schoolers.',
  },
  {
    initials: 'AD',
    name: 'Adult Advisory Board',
    role: 'Teachers & Parent Advisors',
    text: 'Reviews curriculum, oversees safety policies, and supports the student team behind the scenes.',
  },
  {
    initials: 'V+',
    name: 'Mentor Volunteers',
    role: 'High School Coaches',
    text: 'Trained, vetted high school students who lead small-group sessions for grades 1–5.',
  },
];

export default function Mission() {
  return (
      <div className="pt-20">
        {/* Hero */}
        <section className="relative bg-hero-warm py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute inset-0 bg-grid opacity-40" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-300/30 text-amber-200 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <Target className="w-3.5 h-3.5" /> Our Mission
          </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              An organization, <span className="block text-gradient">run by high schoolers</span>
            </h1>

            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our mission is to make strong math education accessible to elementary students by providing free, student-led competition training in Noetic, MOEMS, and foundational math programs.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" className="divider-wave">
              <path d="M0 60L1440 60L1440 0C1200 50 720 60 0 0V60Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* What we believe */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
              <span className="section-tag">
                <Compass className="w-4 h-4" /> Who We Are
              </span>

                <h2 className="section-title">Mathematicians teaching mathematicians.</h2>

                <p className="text-slate-500 leading-relaxed mb-5">
                  InfinityMath4All is a student-led program where high school students coach elementary students in competition math. Our mentors recently competed in contests like MOEMS and Noetic, and use that experience to teach problem-solving in a clear, structured way.
                </p>

                <p className="text-slate-500 leading-relaxed">
                  All programs are free and focus on building strong foundations in elementary math and competition preparation.
                </p>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {[
                  { v: '100%', l: 'High-school-led teaching', icon: GraduationCap },
                  { v: 'Year-round', l: 'Cohorts', icon: ShieldCheck },
                  { v: '2', l: 'National competitions', icon: Target },
                  { v: 'Free', l: ' seats', icon: HeartHandshake },
                ].map(({ v, l, icon: Icon }) => (
                    <div key={l} className="stat-tile">
                      <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-slate-900">{v}</div>
                      <div className="text-xs text-slate-500 mt-1">{l}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-dotgrid opacity-40 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
            <span className="section-tag">
              <Sparkles className="w-4 h-4" /> What We Believe
            </span>
              <h2 className="section-title">Four values that shape every session</h2>
              <p className="section-subtitle mx-auto text-center">
                We&rsquo;re a small team. These principles keep us honest as we grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, text, color }) => (
                  <div key={title} className="card p-7 group hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-5`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder note */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100">
              <Quote className="w-12 h-12 text-blue-200 mb-6" />

              <blockquote className="text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                We started InfinityMath4All because in middle school we felt the difference between
                having a coach who got us — and not having one. Every kid deserves a high schooler
                in their corner who remembers what hard felt like.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  IM
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Student Leadership Team</div>
                  <div className="text-sm text-slate-500">Founders, InfinityMath4All</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
            <span className="section-tag">
              <Calendar className="w-4 h-4" /> Where We Are
            </span>
              <h2 className="section-title">A young campaign, growing on purpose.</h2>
            </div>

            <ol className="relative border-l-2 border-slate-200 ml-3 space-y-10">
              {milestones.map((m) => (
                  <li key={m.title} className="ml-8">
                    <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 ring-4 ring-white" />
                    <div className="text-xs uppercase tracking-widest font-bold text-blue-600 mb-1">
                      {m.year}
                    </div>
                    <div className="font-bold text-slate-900 text-lg mb-1">{m.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed max-w-xl">{m.text}</div>
                  </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
            <span className="section-tag">
              <Users className="w-4 h-4" /> The People
            </span>

              <h2 className="section-title">Three groups make this work</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((t) => (
                  <div key={t.name} className="card p-7 text-center hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-5 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-300/40">
                      {t.initials}
                    </div>

                    <div className="font-bold text-slate-900 text-base mb-1">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-blue-600 mb-3 font-semibold">
                      {t.role}
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed">{t.text}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Want to be part of it?</h2>

            <p className="text-white/80 text-lg mb-8">
              Whether you&rsquo;re a high schooler who wants to coach, a parent who wants to enroll,
              or a school looking to partner — we&rsquo;d love to hear from you.
            </p>

            <Link to="/partner" className="btn-accent text-base px-8 py-4">
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
  );
}