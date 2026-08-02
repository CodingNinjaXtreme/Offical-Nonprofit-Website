import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Short label rendered top-right of the masthead rule, e.g. "Grades 1–5" */
  meta?: string;
  children?: ReactNode;
};

/**
 * Shared masthead for interior pages. Light "paper" treatment so it sits
 * correctly beneath the solid header used on every non-home route.
 */
export default function PageHero({ eyebrow, title, lead, meta, children }: Props) {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-shell px-5 pb-14 pt-28 sm:px-6 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </span>
          {meta && (
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {meta}
            </span>
          )}
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-12 lg:gap-12">
          <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.08] text-ink sm:text-[2.875rem] lg:col-span-7 lg:text-[3.5rem]">
            {title}
          </h1>

          {lead && (
            <div className="lg:col-span-5 lg:pt-2">
              <p className="text-pretty text-[1.0625rem] leading-[1.7] text-ink-soft">
                {lead}
              </p>
            </div>
          )}
        </div>

        {children && <div className="pt-10">{children}</div>}
      </div>
    </section>
  );
}
