import { useRef, useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";
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
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion primitives                                                  */
/* ------------------------------------------------------------------ */

const SPRING = { type: "spring" as const, stiffness: 80, damping: 16 };

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: SPRING },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* Editorial word-by-word stagger */
function WordStagger({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: reduce
              ? { opacity: 0 }
              : { opacity: 0, y: 24, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: SPRING,
            },
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
}

/* Magnetic button wrapper */
function MagneticLink({
  children,
  to,
  className,
}: {
  children: ReactNode;
  to: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy, display: "inline-block" }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

/* Scroll-in counter for numeric stats */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  const numeric = parseInt(value, 10);

  useEffect(() => {
    if (isNaN(numeric)) return; // non-numeric values stay static
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (reduce) {
            setDisplay(value);
            return;
          }
          let raf = 0;
          const startTs = performance.now();
          const duration = 1.4;
          const tick = (now: number) => {
            const p = Math.min((now - startTs) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(String(Math.round(eased * numeric)) + value.replace(/^\d+/, ""));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          return () => cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [numeric, value, reduce]);

  return <span ref={ref}>{display}</span>;
}

/* ------------------------------------------------------------------ */
/*  Data (unchanged)                                                   */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: Heart,
    title: "Access First",
    text: "Every lesson, every problem set, every session is free  for students who need it. Talent is everywhere — opportunity should be too.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Curiosity Over Cramming",
    text: "We do not teach test tricks. We teach students how to think — contest scores are a side effect, not the goal.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Run By Students, For Students",
    text: "Our mentors are high schoolers who just lived it. They know which problems trip 5th graders up because they were tripped up by them.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Adult-Advised, Student-Led",
    text: "Every session, our team reviews the curriculum, runs safety protocols, and helps to stay accountable to families.",
    color: "from-emerald-500 to-teal-500",
  },
];

const milestones = [
  {
    year: "Year 1",
    title: "Founded by high schoolers",
    text: "We currently offer free competition math instruction to elementary  students in Fremont through small, student-led cohorts focused on building confidence and problem-solving skills.",
  },
  {
    year: "Now",
    title: "Three competitions, year-round",
    text: "We're planning to recruit more high school mentors with competition math experience so we can serve more students, reduce waitlists, and offer additional class sections throughout the year.",
  },
  {
    year: "Next",
    title: "Expanding mentor cohorts",
    text: "Our long-term goal is to bring free, high-quality competition math education to students throughout California and eventually across the United States. We plan to achieve this by creating regional and state chapters, making advanced math opportunities accessible to more children.",
  },
];

const team = [
  {
    initials: "IM",
    name: "Student Leadership Team",
    role: "High School Founders & Coaches",
    text: "Designed the curriculum, runs the weekly sessions, and keeps the lights on. All current high schoolers.",
  },
  {
    initials: "AD",
    name: "Adult Advisory Board",
    role: "Teachers & Parent Advisors",
    text: "Reviews curriculum, oversees safety policies, and supports the student team behind the scenes.",
  },
  {
    initials: "V+",
    name: "Mentor Volunteers",
    role: "High School Coaches",
    text: "Trained, vetted high school students who lead small-group sessions for grades 1–5.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Mission() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Timeline progress line
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScaleY = useSpring(timelineProgress, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-hero-warm py-28 overflow-hidden"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Reveal>
            <span className="inline-flex items-center gap-1.5 bg-amber-400/15 border border-amber-300/30 text-amber-200 text-sm font-semibold px-3 py-1 rounded-full mb-6">
              <Target className="w-3.5 h-3.5" /> Our Mission
            </span>
          </Reveal>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <WordStagger text="An organization," />
            <span className="block text-gradient">
              <WordStagger text="run by high schoolers" />
            </span>
          </h1>

          <Reveal delay={0.5}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our mission is to make strong math education accessible to
              elementary students by providing free, student-led competition
              training in Noetic, MOEMS, and foundational math programs.
            </p>
          </Reveal>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="divider-wave">
            <path
              d="M0 60L1440 60L1440 0C1200 50 720 60 0 0V60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="section-tag">
                  <Compass className="w-4 h-4" /> Who We Are
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="section-title">
                  Mathematicians teaching mathematicians.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-slate-500 leading-relaxed mb-5">
                  InfinityMath4All is a student-led program where high school
                  students coach elementary students in competition math. Our
                  mentors recently competed in contests like MOEMS and Noetic,
                  and use that experience to teach problem-solving in a clear,
                  structured way.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="text-slate-500 leading-relaxed">
                  All programs are free and focus on building strong foundations
                  in elementary math and competition preparation.
                </p>
              </Reveal>
            </div>

            <motion.div
              className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {[
                {
                  v: "100%",
                  l: "High-school-led teaching",
                  icon: GraduationCap,
                },
                { v: "Year-round", l: "Cohorts", icon: ShieldCheck },
                { v: "2", l: "National competitions", icon: Target },
                { v: "Free", l: " seats", icon: HeartHandshake },
              ].map(({ v, l, icon: Icon }) => (
                <motion.div
                  key={l}
                  variants={revealVariants}
                  whileHover={{ y: -4 }}
                  transition={SPRING}
                  className="stat-tile"
                >
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 tabular-nums">
                    <Counter value={v} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dotgrid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal>
              <span className="section-tag">
                <Sparkles className="w-4 h-4" /> What We Believe
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title">
                Four values that shape every session
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="section-subtitle mx-auto text-center">
                We&rsquo;re a small team. These principles keep us honest as we
                grow.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {values.map(({ icon: Icon, title, text, color }) => (
              <motion.div
                key={title}
                variants={revealVariants}
                whileHover={{ y: -6, rotate: -0.4 }}
                transition={SPRING}
                className="card p-7 group"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={SPRING}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-5`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100">
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={SPRING}
              >
                <Quote className="w-12 h-12 text-blue-200 mb-6" />
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We started InfinityMath4All because in middle school we felt the
                difference between having a coach who got us — and not having
                one. Every kid deserves a high schooler in their corner who
                remembers what hard felt like.
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  IM
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Student Leadership Team
                  </div>
                  <div className="text-sm text-slate-500">
                    Founders, InfinityMath4All
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones — scroll-linked timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal>
              <span className="section-tag">
                <Calendar className="w-4 h-4" /> Where We Are
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title">
                A young campaign, growing on purpose.
              </h2>
            </Reveal>
          </div>

          <div ref={timelineRef} className="relative ml-3 pl-1">
            {/* Track background */}
            <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed border-slate-300/80" />
            {/* Animated progress line */}
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-blue-500 to-cyan-500"
            />

            <ol className="space-y-10">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.title}
                  className="ml-8 relative"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ ...SPING_DELAY(i) }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={SPRING}
                    className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 ring-4 ring-slate-50"
                  />
                  <div className="text-xs uppercase tracking-widest font-bold text-blue-600 mb-1">
                    {m.year}
                  </div>
                  <div className="font-bold text-slate-900 text-lg mb-1">
                    {m.title}
                  </div>
                  <div className="text-slate-500 text-sm leading-relaxed max-w-xl">
                    {m.text}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal>
              <span className="section-tag">
                <Users className="w-4 h-4" /> The People
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title">Three groups make this work</h2>
            </Reveal>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {team.map((t) => (
              <motion.div
                key={t.name}
                variants={revealVariants}
                whileHover={{ y: -6, rotate: 0.3 }}
                transition={SPRING}
                className="card p-7 text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={SPRING}
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-300/40"
                >
                  {t.initials}
                </motion.div>

                <div className="font-bold text-slate-900 text-base mb-1">
                  {t.name}
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-600 mb-3 font-semibold">
                  {t.role}
                </div>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">
              Want to be part of it?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 text-lg mb-8">
              Whether you&rsquo;re a high schooler who wants to coach, a parent
              who wants to enroll, or a school looking to partner — we&rsquo;d
              love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <MagneticLink
              to="/partner"
              className="btn-accent text-base px-8 py-4"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* Small helper for staggered timeline delays */
function SPING_DELAY(i: number) {
  return { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 };
}
