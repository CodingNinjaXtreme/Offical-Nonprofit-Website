import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useHeroScroll } from '../../hooks/useHeroScroll';

type HomeHeroCopy = {
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroLead: string;
  heroLocation: string;
  exploreCompetitions: string;
  signUp: string;
};

type HomeHeroProps = {
  copy: HomeHeroCopy;
  signupUrl: string;
};

export default function HomeHero({ copy, signupUrl }: HomeHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useHeroScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-hero flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-24 left-[8%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl"
          style={{ transform: `translateY(${progress * 160}px)` }}
        />
        <div
          className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl animate-float"
          style={{ transform: `translateY(${progress * 100}px)` }}
        />
        <div
          className="absolute bottom-20 left-[5%] h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl animate-float-slow"
          style={{ transform: `translateY(${progress * 60}px)` }}
        />
        <div
          className="absolute top-[35%] right-[22%] h-40 w-40 rounded-full border border-white/10 bg-white/[0.03]"
          style={{ transform: `translateY(${progress * 130}px) rotate(${progress * 15}deg)` }}
        />
        <div
          className="absolute bottom-[18%] left-[18%] h-28 w-28 rounded-3xl border border-cyan-300/15 bg-cyan-400/5"
          style={{ transform: `translateY(${progress * 85}px) rotate(${-progress * 10}deg)` }}
        />
        <div
          className="absolute inset-0 bg-grid opacity-50"
          style={{ transform: `translateY(${progress * 40}px)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8 text-white/80 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
              {copy.heroBadge}
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {copy.heroTitleLine1}
              <span className="block text-gradient-gold">{copy.heroTitleLine2}</span>
            </h1>

            <p className="text-lg text-white/70 mb-10 max-w-lg">{copy.heroLead}</p>

            <p className="text-sm text-white/65 mb-8 max-w-lg">{copy.heroLocation}</p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link to="/competitions" className="btn-accent px-8 py-4">
                <span>{copy.exploreCompetitions}</span> <ArrowRight aria-hidden="true" />
              </Link>
              <a
                href={signupUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Sign up for the math program in a new tab"
                className="btn-ghost-light px-8 py-4"
              >
                <span>{copy.signUp}</span> <ChevronRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="hidden lg:block"
            style={{ transform: `translateY(${progress * -35}px)` }}
          >
            <img
              src="/2.png"
              alt="Students learning contest math"
              className="rounded-3xl shadow-2xl w-full object-cover h-[580px] ring-1 ring-white/10 scale-[1.02]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
