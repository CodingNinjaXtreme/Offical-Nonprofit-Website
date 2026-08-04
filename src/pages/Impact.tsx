import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, UserRound } from 'lucide-react';
import ScrollCounter from '../components/impact/ScrollCounter';
import EngagementPanel from '../components/impact/EngagementPanel';
import type { ImpactStat } from '../components/impact/ScrollCounter';

const impactStats: ImpactStat[] = [
  {
    label: 'Cofounders',
    value: 6,
    detail: 'Student-led leadership shaping the program from the start.',
    icon: UserRound,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Volunteers',
    value: 4,
    detail: 'Mentors and helpers supporting classes, outreach, and operations.',
    icon: Users,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'Signups',
    value: 10,
    detail: 'Families and students who have shown interest in joining so far.',
    icon: Sparkles,
    accent: 'from-amber-500 to-orange-500',
  },
];

const highlights = [
  'Student-led leadership with real accountability',
  'Recruiting volunteers to support mentorship and operations',
  'Growing interest from families who want strong math mentorship',
];

export default function Impact() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[8%] w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-[5%] w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="section-tag bg-white/10 text-white border border-white/20">
              Our Impact
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-5 mb-6">
              Real growth,
              <span className="block text-gradient-gold">shown clearly</span>
            </h1>

            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              A public snapshot of the people behind InfinityMath4All and the families
              who have chosen to engage with the program so far.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/partner" className="btn-accent px-8 py-4">
                <span>Volunteer With Us</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link to="/signup" className="btn-ghost-light px-8 py-4">
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>

        <div aria-hidden className="relative text-white -mt-px">
          <svg viewBox="0 0 1440 60" className="block h-14 w-full fill-current" preserveAspectRatio="none">
            <path d="M0 0C104 22 200 42 312 40C426 38 505 15 606 8C710 0 821 14 916 23C1015 32 1100 38 1207 30C1309 23 1380 9 1440 0V60H0V0Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <ScrollCounter key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 md:p-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Why these numbers matter
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We are building a community rooted in trust, transparency, and real growth.
                  Every milestone reflects real people behind the work and the families choosing
                  to engage with our program. As we continue to expand, we are welcoming more
                  volunteers who want to help us create lasting impact.
                </p>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <EngagementPanel stats={impactStats} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-slate-600 mb-6">
            Want to help the numbers grow in a meaningful way?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/partner" className="btn-primary px-8 py-4">
              Join the Team
            </Link>
            <Link to="/signup" className="btn-secondary px-8 py-4">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
