import type { ReactNode } from 'react';

type Props = {
  /** Editorial index marker, e.g. "01" */
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * Shared editorial section header: hairline rule, numbered index,
 * uppercase eyebrow, serif display title, optional standfirst.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className = '',
}: Props) {
  const isDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div className={className}>
      <div
        className={`h-px w-full ${isDark ? 'bg-paper/15' : 'bg-ink/10'}`}
        aria-hidden="true"
      />

      <div
        className={`flex flex-col pt-5 ${centered ? 'items-center text-center' : 'items-start'}`}
      >
        {(index || eyebrow) && (
          <div className="mb-5 flex items-center gap-3">
            {index && (
              <span
                className={`font-serif text-sm font-semibold tabular-nums ${
                  isDark ? 'text-brass' : 'text-accent'
                }`}
              >
                {index}
              </span>
            )}
            {index && eyebrow && (
              <span
                className={`h-px w-6 ${isDark ? 'bg-paper/30' : 'bg-ink/20'}`}
                aria-hidden="true"
              />
            )}
            {eyebrow && (
              <span
                className={`text-[0.6875rem] font-semibold uppercase tracking-[0.16em] ${
                  isDark ? 'text-paper/60' : 'text-ink-muted'
                }`}
              >
                {eyebrow}
              </span>
            )}
          </div>
        )}

        <h2
          className={`max-w-3xl text-balance text-[1.875rem] font-semibold leading-[1.14] md:text-[2.5rem] ${
            isDark ? 'text-paper' : 'text-ink'
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-5 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed ${
              isDark ? 'text-paper/65' : 'text-ink-muted'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
