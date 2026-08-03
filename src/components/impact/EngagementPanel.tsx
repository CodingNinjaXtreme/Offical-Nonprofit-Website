import { Activity } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';
import type { ImpactStat } from './ScrollCounter';

type EngagementPanelProps = {
  stats: ImpactStat[];
};

function PanelRow({
  stat,
  active,
  delay,
}: {
  stat: ImpactStat;
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, active, 1000 + delay);

  return (
    <div
      className={`rounded-xl border border-slate-100 bg-white/70 p-3 transition-all duration-700 ${
        active ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-600">{stat.label}</span>
        <span
          className="text-2xl font-bold tabular-nums text-slate-900"
          aria-live="polite"
        >
          {count}
        </span>
      </div>
    </div>
  );
}

export default function EngagementPanel({ stats }: EngagementPanelProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.25);

  return (
    <div
      ref={ref}
      className="border border-slate-100 bg-white/80 p-6"
      style={{ borderRadius: '1.6rem 1.1rem 1.8rem 1.3rem / 1.35rem 1.7rem 1.15rem 1.5rem' }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Live Engagement
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 text-slate-700">
        <Activity className="h-4 w-4 text-cyan-600" aria-hidden="true" />
        <span className="text-sm font-medium">Community momentum</span>
      </div>

      <div className="space-y-3">
        {stats.map((stat, index) => (
          <PanelRow
            key={stat.label}
            stat={stat}
            active={revealed}
            delay={index * 140}
          />
        ))}
      </div>
    </div>
  );
}
