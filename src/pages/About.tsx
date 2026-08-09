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
  Heart,
  GraduationCap,
  Sparkles,
  Target,
  Users,
  Trophy,
  BookOpen,
  School,
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

/* Editorial word-by-word stagger for hero headings */
function WordStagger({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
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

/* Magnetic button — pointer-tracked displacement */
function MagneticButton({
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
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-block" }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

/* Scroll-in counter */
function Counter({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          if (reduce) {
            setVal(to);
            return;
          }
          let raf = 0;
          const startTs = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTs) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
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
  }, [to, duration, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Grade-Level Foundations",
    text: "We help elementary students master number sense, fluency, and problem solving so they build real confidence in math early.",
  },
  {
    icon: Target,
    title: "Competition Readiness",
    text: "We prepare students for Noetic and MOEMS using concept-first teaching and structured problem-solving practice.",
  },
  {
    icon: Users,
    title: "Peer-Led Mentorship",
    text: "We're high school freshmen who recently competed in these contests, teaching in a way that feels clear and relatable.",
  },
];

const stats = [
  { icon: Trophy, to: 10, suffix: "+", label: "Student Signups" },
  { icon: BookOpen, to: 2, suffix: "", label: "Contests Coached" },
  { icon: School, to: 2, suffix: "", label: "Schools Served" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="pt-20">
      {/* HERO — editorial text stagger + parallax + scroll zoom */}
      <section
        ref={heroRef}
        className="relative py-32 bg-hero-warm overflow-hidden section-shell"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 pointer-events-none opacity-70"
        >
          <motion.div
            className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-120px] left-[-80px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>
          </Reveal>

          <h1 className="text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
            <WordStagger text="High school freshmen who recently competed in these contests" />
            <span className="block text-white/70 mt-2">
              <WordStagger text="now teaching the way we wish we were taught" />
            </span>
          </h1>

          <Reveal delay={0.5}>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              A student-led initiative focused on structured math competition
              preparation, building confidence through clear thinking instead of
              pressure or memorization.
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* WHY SECTION — staggered bento grid with hover spotlights */}
      <section className="py-24 bg-white section-shell">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 mb-5">
                <Heart className="w-4 h-4" />
                Our Goal
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl font-semibold text-slate-900 leading-tight">
                Our plan is to host weekly zoom classes for elementary kids from
                Warmsprings and Weibel.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                The zoom classes will be complemented by lessons as well as old
                test problems from these contests. We are also making an LaTeX
                online PDF math-book for students to reinforce lesson taught
                during the lessons.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="lg:col-span-7 grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {focusAreas.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                variants={revealVariants}
                whileHover={{
                  y: -6,
                  rotate: i === 0 ? -0.6 : i === 2 ? 0.6 : 0,
                }}
                transition={SPRING}
                className="group card bg-white p-6 relative"
                style={{
                  transform:
                    i === 0
                      ? "rotate(-0.35deg)"
                      : i === 1
                        ? "translateY(10px)"
                        : "rotate(0.25deg)",
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={SPRING}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>

                <h3 className="font-semibold text-slate-900 text-base mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS — scroll-in counters */}
      <section className="py-24 bg-slate-50 section-shell">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="card p-10 bg-white">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Our Experience
              </h2>
              <Reveal delay={0.08}>
                <p className="text-slate-600 leading-relaxed">
                  Our mentors have won awards and prizes for winning competitions
                  such as Noetic and MOEMS. Our team has significant experience in
                  competitive math, with many of them starting as early as
                  elementary school. Using our skills we developed, we hope to
                  teach younger students how to think logically about mathematics
                  and to build confidence.
                </p>
              </Reveal>

              <motion.div
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-8% 0px" }}
              >
                {stats.map(({ icon: Icon, to, suffix, label }) => (
                  <motion.div
                    key={label}
                    variants={revealVariants}
                    whileHover={{ y: -4 }}
                    transition={SPRING}
                    className="stat-tile"
                  >
                    <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 tabular-nums">
                      <Counter to={to} suffix={suffix} />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA — magnetic banner */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden section-shell">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              Help expand early access to strong math foundations
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-white/80">
              Partner with us to help more students build confidence before gaps
              form.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <MagneticButton
              to="/partner"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-medium hover:bg-white/90 transition-colors"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
