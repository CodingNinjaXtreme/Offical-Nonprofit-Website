import type { LucideIcon } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

export type ImpactStat = {
  label: string;
  value: number;
  detail: string;
  icon: LucideIcon;
  accent: string;
};

type ScrollCounterProps = {
  stat: ImpactStat;
  index: number;
};

export default function ScrollCounter({ stat, index }: ScrollCounterProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.2);
  const count = useCountUp(stat.value, revealed);
  const Icon = stat.icon;

  const staggerClass =
    index === 1 ? 'md:mt-3.5' : index === 2 ? 'md:-mt-1.5' : '';

  return (
    <div
      ref={ref}
      className={`card p-7 bg-white/90 backdrop-blur-sm ${staggerClass} ${
        revealed ? 'animate-rise' : 'opacity-0 translate-y-6'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} shadow-lg shadow-slate-200`}
      >
        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
      </div>

      <div
        className={`mb-1 bg-gradient-to-br ${stat.accent} bg-clip-text text-5xl font-bold tabular-nums text-transparent lg:text-6xl`}
        aria-live="polite"
      >
        {count}
      </div>

      <h2 className="mb-3 text-lg font-semibold text-slate-900">{stat.label}</h2>

      <p className="text-sm leading-relaxed text-slate-600">{stat.detail}</p>
    </div>
  );
}
