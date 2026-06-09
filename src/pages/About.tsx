import { Link } from 'react-router-dom';
import { ArrowRight, Heart, GraduationCap, Sparkles, Target, Users } from 'lucide-react';

const focusAreas = [
  {
    icon: GraduationCap,
    title: 'Grade-Level Foundations',
    text: 'We help elementary students master number sense, fluency, and problem solving so they build real confidence in math early.',
  },
  {
    icon: Target,
    title: 'Competition Readiness',
    text: 'We prepare students for Noetic and MOEMS using concept-first teaching and structured problem-solving practice.',
  },
  {
    icon: Users,
    title: 'Peer-Led Mentorship',
    text: 'We’re high school freshmen who recently competed in these contests, teaching in a way that feels clear and relatable.',
  },
];

export default function About() {
  return (
      <div className="pt-20">

        {/* HERO */}
        <section className="relative py-32 bg-hero-warm overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-80px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-30" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              High school freshmen who recently competed in these contests
              <span className="block text-white/70 mt-2">
              now teaching the way we wish we were taught
            </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              A student-led initiative focused on structured math competition preparation,
              building confidence through clear thinking instead of pressure or memorization.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 mb-5">
                <Heart className="w-4 h-4" />
                Why We Started
              </div>

              <h2 className="text-3xl font-semibold text-slate-900 leading-tight">
                Most students are never shown what contest math actually feels like.
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                We recently went through the same transition younger students are in right now.
                That’s why we focus on calm, structured teaching that prioritizes understanding over speed.
              </p>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-3 gap-6">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                  <div
                      key={title}
                      className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="font-semibold text-slate-900 text-base mb-2">
                      {title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {text}
                    </p>
                  </div>
              ))}
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Our Experience
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Our mentors have won awards and prizes for winning competitions such as Noetic and MOEMS. Our team
                has significant experience in competitive math, with many of them starting as early as elementary school. Using
                our skills we developed, we hope to teach younger students how to think logically about mathematics and to build confidence.
              </p>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-3xl mx-auto px-6 text-center">

            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              Help expand early access to strong math foundations
            </h2>

            <p className="mt-4 text-white/80">
              Partner with us to help more students build confidence before gaps form.
            </p>

            <Link
                to="/partner"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-medium hover:bg-white/90 transition"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </section>

      </div>
  );
}