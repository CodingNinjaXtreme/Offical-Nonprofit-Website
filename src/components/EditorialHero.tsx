import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type CtaLink = { label: string; to: string };
type CtaAnchor = { label: string; href: string };

type EditorialHeroProps = {
  eyebrow: string;
  /** First line of the headline (plain). */
  headlineLine1: string;
  /** Second line of the headline (rendered with the gold accent). */
  headlineLine2: string;
  subheadline: string;
  location?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaAnchor;
  children?: ReactNode;
};

/* ------------------------------------------------------------------ */
/*  Animation primitives                                               */
/* ------------------------------------------------------------------ */

const SPRING = { type: 'spring' as const, stiffness: 80, damping: 15 };

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: SPRING,
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: SPRING,
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function StaggerWord({ children }: { children: ReactNode }) {
  return (
    <motion.span
      variants={wordVariants}
      className="inline-block mr-[0.28em] last:mr-0 will-change-[transform,filter,opacity]"
    >
      {children}
    </motion.span>
  );
}

function StaggerLine({ words, accent = false }: { words: string[]; accent?: boolean }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      {words.map((word, i) => (
        <StaggerWord key={i}>
          {accent ? (
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {word}
            </span>
          ) : (
            word
          )}
        </StaggerWord>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Interactive CTA                                                    */
/* ------------------------------------------------------------------ */

const MotionLink = motion.create(Link);

type GlowButtonProps = {
  label: string;
  variant: 'primary' | 'ghost';
} & (
  | { to: string; href?: never }
  | { href: string; to?: never }
);

function GlowButton({ label, variant, ...rest }: GlowButtonProps) {
  const primary = variant === 'primary';
  const isInternal = 'to' in rest && rest.to !== undefined;

  const sharedProps = {
    whileHover: 'hover',
    whileTap: 'tap',
    className: `relative inline-flex items-center justify-center overflow-hidden px-9 py-4 text-base font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
      primary ? 'text-slate-950' : 'text-white'
    }`,
    style: {
      borderRadius: '1.45rem 1.95rem 1.1rem 1.7rem / 1.2rem 1.55rem 1.7rem 1.3rem',
    },
  };

  const inner = (
    <>
      <motion.span
        aria-hidden
        className="absolute inset-0"
        variants={{ hover: { scale: 1.04 }, tap: { scale: 0.97 } }}
        transition={SPRING}
        style={{
          background: primary
            ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 55%, #f97316 100%)'
            : 'rgba(255,255,255,0.06)',
          border: primary ? 'none' : '1px solid rgba(255,255,255,0.18)',
          backdropFilter: primary ? 'none' : 'blur(12px)',
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: primary
            ? 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)'
            : 'radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(251,191,36,0) 70%)',
        }}
        variants={{ hover: { scale: 4.2, opacity: 1 }, tap: { scale: 2.4, opacity: 0.8 } }}
        initial={{ scale: 1, opacity: 0 }}
        transition={SPRING}
      />
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (isInternal) {
    return (
      <MotionLink to={rest.to!} {...sharedProps}>
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={rest.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      {...sharedProps}
    >
      {inner}
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function EditorialHero({
  eyebrow,
  headlineLine1,
  headlineLine2,
  subheadline,
  location,
  primaryCta,
  secondaryCta,
  children,
}: EditorialHeroProps) {
  const reduceMotion = useReducedMotion();

  const line1Words = headlineLine1.split(/\s+/).filter(Boolean);
  const line2Words = headlineLine2.split(/\s+/).filter(Boolean);

  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-hero"
      aria-label="Editorial hero"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[6%] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[8%] h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% -10%, rgba(251,191,36,0.08), transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 sm:px-8 lg:py-36">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          viewport={{ once: true, margin: '-12% 0px' }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={lineVariants}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
            {eyebrow}
          </motion.div>

          {/* Headline — word-by-word stagger, line-by-line reveal */}
          <motion.h1
            variants={containerVariants}
            className="max-w-4xl font-serif text-[2.75rem] leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.75rem]"
          >
            <StaggerLine words={line1Words} />
            <StaggerLine words={line2Words} accent />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={lineVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl"
          >
            {subheadline}
          </motion.p>

          {/* Location */}
          {location && (
            <motion.p
              variants={lineVariants}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/50"
            >
              {location}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            variants={lineVariants}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <GlowButton label={primaryCta.label} to={primaryCta.to} variant="primary" />
            <GlowButton label={secondaryCta.label} href={secondaryCta.href} variant="ghost" />
          </motion.div>

          {/* Optional slot */}
          {children && (
            <motion.div variants={lineVariants} className="mt-16">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ ...SPRING, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </section>
  );
}
