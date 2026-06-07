import { Link } from 'react-router-dom';
import { ArrowRight, Heart, GraduationCap, Sparkles, Target, Users } from 'lucide-react';

const focusAreas = [
  {
    icon: GraduationCap,
    title: 'Grade-Level Foundations',
    text: 'We help elementary students master number sense, fluency, and problem solving so they feel confident in school math.',
  },
  {
    icon: Target,
    title: 'Competition Readiness',
    text: 'We prepare students for Noetic and MOEMS with concept-first lessons, strategy practice, and positive coaching.',
  },
  {
    icon: Users,
    title: 'Future-Focused Mentorship',
    text: 'As incoming high-school freshmen, we are close enough to understand where students struggle and how to encourage them.',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative bg-hero-warm py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-300/30 text-amber-200 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" /> About Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Upcoming high-school freshmen <span className="block text-gradient">teaching the next generation</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We are a student-led nonprofit run by upcoming high-school freshmen who want to make
            grade-level and competitive math accessible, encouraging, and exciting for elementary students.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="divider-wave">
            <path d="M0 60L1440 60L1440 0C1200 50 720 60 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="section-tag">
                <Heart className="w-4 h-4" /> Why We Started
              </span>
              <h2 className="section-title">We want younger students to feel supported early.</h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                As we move into high school, we want to give back by helping elementary students build
                strong grade-level math skills and prepare for competitions with confidence.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                We know that early mentorship can shape a student&rsquo;s future. By sharing what worked
                for us, we help students grow their problem-solving mindset and love for learning.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our bigger goal is long-term impact: helping future generations become confident thinkers
                who can use math to solve real problems in school and beyond.
              </p>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-5">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card p-7 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100">
            <h2 className="section-title mb-5">Our promise to families</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our team members are elite math competitors who have achieved top-tier milestones,
              including placing in the Top 2% and Top 10% globally in MOEMS, qualifying for MATHCOUNTS chapter championships,
              scoring a near-perfect 790 on the SAT Math section, Multiple NOETIC honor roll awards,
              and earning the prestigious Presidential Award
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe investing in elementary students now means stronger communities later. When
              younger learners build confidence and discipline early, they carry those habits into
              middle school, high school, and life. Because we navigated these exact competitions from an early age, we know firsthand what it feels like to struggle with intricate problems. We translate our personal triumphs into patient, relatable mentorship, using our background to build the confidence,
              resilience, and critical thinking skills your child needs to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join us in supporting future generations</h2>
          <p className="text-white/80 text-lg mb-8">
            If you want to help us expand math opportunities for elementary students, we&rsquo;d love to
            partner with you.
          </p>
          <Link to="/partner" className="btn-accent text-base px-8 py-4">
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
