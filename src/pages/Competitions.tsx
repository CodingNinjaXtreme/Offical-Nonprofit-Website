import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "motion/react";
import {
  Trophy,
  ArrowRight,
  BookOpen,
  Medal,
  ChevronRight,
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

/* Magnetic link wrapper */
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

/* FAQ accordion item with height morph */
function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      layout
      variants={revealVariants}
      className={`border border-slate-200 overflow-hidden shadow-sm bg-white ${
        isOpen ? "ring-1 ring-blue-200" : ""
      }`}
      style={{
        borderRadius:
          "1.4rem 1.85rem 1.15rem 1.65rem / 1.2rem 1.45rem 1.6rem 1.25rem",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="flex items-baseline gap-3 font-semibold text-sm text-slate-900">
          <span className="text-xs font-bold text-blue-500 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={SPRING}
          className="flex-shrink-0"
        >
          <ChevronRight
            className={`w-5 h-5 ${isOpen ? "text-blue-600" : "text-slate-400"}`}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
            transition={SPRING}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-slate-500 border-t border-slate-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data (unchanged)                                                   */
/* ------------------------------------------------------------------ */

const competitions = [
  {
    id: "noetic",
    name: "Noetic Learning Math Contest",
    shortName: "Noetic",
    grades: "Grades 1–5",
    frequency: "Twice per year (Fall & Spring)",
    format: "20 problems · 45 minutes · MC + short answer",
    color: "from-blue-500 to-blue-700",
    accent: "blue",
    icon: BookOpen,
    description:
      "A biannual national competition for elementary students. Creative, multi-step problems that push past textbook math.",
    whatWeTeach: [
      "Number theory and arithmetic reasoning",
      "Algebraic thinking and pattern recognition",
      "Geometry and spatial reasoning",
      "Word problems and logical deduction",
      "Time management under competition conditions",
    ],
    bestFor: "Students new to competition math who want a friendly first contest.",
    image: "NoeticLearningMathContest.png",
  },
  {
    id: "Olympiad",
    name: "Math Olympiad (MOEMS)",
    shortName: "MOEMS",
    grades: "Grades 1–5",
    frequency: "5 monthly contests (Nov–Mar)",
    format: "5 problems · 30 minutes · Free response",
    color: "from-amber-500 to-orange-500",
    accent: "amber",
    icon: Medal,
    description:
      "A team-based program with monthly contests from November through March. Builds perseverance, deep reasoning, and team collaboration.",
    whatWeTeach: [
      "Advanced arithmetic and number theory",
      "Algebra concepts for elementary students",
      "Geometry proofs and constructions",
      "Combinatorics and probability",
      "Free-response mathematical communication",
    ],
    bestFor: "Students who love wrestling with one hard problem at a time.",
    image: "ba6056f4f04119e4a6bd377e30ccc63b.jpeg",
  },
  {
    id: "elementary",
    name: "Elementary Grade-Level Math",
    shortName: "Elementary",
    grades: "Grades 1–5",
    frequency: "Year-round",
    format: "Curriculum-aligned practice and fluency exercises",
    color: "from-indigo-500 to-indigo-700",
    accent: "indigo",
    icon: BookOpen,
    description:
      "Focused grade-level instruction to build number sense, arithmetic fluency, and problem-solving foundations for elementary students.",
    whatWeTeach: [
      "Number sense and place value",
      "Arithmetic fluency and strategies",
      "Basic geometry and measurement",
      "Problem-solving with words and visuals",
      "Math reasoning and explanation skills",
    ],
    bestFor: "Students developing core elementary math skills and confidence.",
    image:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];

const faqs = [
  {
    q: "Who teaches the sessions?",
    a: "High school students who recently competed in these same contests. They are trained, vetted, and supported by an adult advisory board that reviews curriculum and oversees safety.",
  },
  {
    q: "How much do programs cost?",
    a: "Programs are free or subsidized. We never want cost to be the reason a student does not compete. If your family needs financial help, just ask — that is the entire point of how we are structured.",
  },
  {
    q: "My child has never done a math contest. Can they still join?",
    a: "Yes — Noetic and our elementary programs are designed exactly for first-time competitors. Our mentors started where your child is now.",
  },
  {
    q: "What standards does your elementary math track follow?",
    a: "Our content follows Common Core Standards. Moreover, we incorporate competition-style problems in elementary math to increase math fluency",
  },
  {
    q: "I have more questions, where can I ask them?",
    a: "Email us at admin@InfinityMath4All.org. We will be happy to respond to your emails within a few business days.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Competitions() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-hero py-24 overflow-hidden"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
              <Trophy className="w-3.5 h-3.5" /> Competition Prep
            </span>
          </Reveal>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <WordStagger text="Learn. Compete." />
            <span className="block text-gradient-gold">
              <WordStagger text="Grow." />
            </span>
          </h1>

          <Reveal delay={0.4}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Three major math competitions and elementary grade-level
              instruction, prepped by high school mentors who recently took these
              contests themselves. Real coaching from someone who remembers
              exactly what hard felt like.
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

      {/* Quick Nav */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/88 backdrop-blur-md shadow-[0_14px_40px_-26px_rgba(15,23,42,0.4)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-6 py-5">
            <motion.a
              href="#compare"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              className="px-10 py-4 text-lg font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              style={{
                borderRadius:
                  "1.4rem 1.85rem 1.15rem 1.65rem / 1.2rem 1.45rem 1.6rem 1.25rem",
              }}
            >
              Compare Programs
            </motion.a>

            <motion.a
              href="#faq"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              className="px-10 py-4 text-lg font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              style={{
                borderRadius:
                  "1.4rem 1.85rem 1.15rem 1.65rem / 1.2rem 1.45rem 1.6rem 1.25rem",
              }}
            >
              FAQ
            </motion.a>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section id="compare" className="py-20 bg-white section-shell">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="section-title text-center">
              2 competitions, one path forward
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-center text-slate-500 mb-14">
              If you&rsquo;re starting from zero, this is where to begin.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="overflow-x-auto ring-1 ring-slate-100 shadow-sm"
              style={{
                borderRadius:
                  "1.8rem 1.25rem 1.9rem 1.35rem / 1.4rem 1.8rem 1.2rem 1.65rem",
              }}
            >
              <table className="min-w-full text-left">
                <thead className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Competition</th>
                    <th className="px-6 py-4 font-semibold">Grades</th>
                    <th className="px-6 py-4 font-semibold">When</th>
                    <th className="px-6 py-4 font-semibold">Format</th>
                    <th className="px-6 py-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {competitions.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <motion.tr
                        key={c.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-8% 0px" }}
                        transition={{
                          ...SPRING,
                          delay: i * 0.1,
                        }}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <motion.span
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={SPRING}
                              className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md`}
                            >
                              <Icon className="w-4 h-4 text-white" />
                            </motion.span>
                            <div>
                              <div className="font-semibold text-slate-900 text-sm">
                                {c.shortName}
                              </div>
                              <div className="text-xs text-slate-500">
                                {c.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-700">
                          {c.grades}
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-700">
                          {c.frequency}
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-700">
                          {c.format}
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-700 max-w-xs">
                          {c.bestFor}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mentor CTA */}
      <section className="py-20 bg-slate-50 section-shell">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <div className="card p-10 lg:p-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-100 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  Coaches who just took these contests recently
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Every mentor is a high school student who recently competed in
                  these contests. That recency matters — they remember exactly
                  which problems trip students up, because they solved them not
                  long ago.
                </p>
                <MagneticLink to="/partner" className="btn-primary">
                  Meet The Team <ArrowRight className="w-4 h-4" />
                </MagneticLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white section-shell">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="section-title text-center mb-12">
              Common questions
            </h2>
          </Reveal>

          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {faqs.map(({ q, a }, i) => (
              <FaqItem
                key={i}
                index={i}
                q={q}
                a={a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-center section-shell relative overflow-hidden">
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

        <div className="relative max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to compete?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 mb-8">Tell us your grade and goals.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <MagneticLink
              to="/partner"
              className="btn-accent px-8 py-4"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
