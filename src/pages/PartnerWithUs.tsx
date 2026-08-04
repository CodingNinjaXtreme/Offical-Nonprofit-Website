import { useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  Mail,
  Heart,
  Users,
  ChevronRight,
  CheckCircle2,
  Star,
  X,
  GraduationCap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion primitives                                                  */
/* ------------------------------------------------------------------ */

const SPRING = { type: "spring" as const, stiffness: 80, damping: 15 };
const EASE = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

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

/* ------------------------------------------------------------------ */
/*  FAQ accordion item                                                 */
/* ------------------------------------------------------------------ */

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
      className={`card bg-white shadow-sm overflow-hidden ${
        isOpen ? "ring-1 ring-emerald-200" : ""
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="flex items-baseline gap-3 font-semibold text-slate-900">
          <span className="text-xs font-bold text-emerald-500 tabular-nums">
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
            className={`w-5 h-5 ${isOpen ? "text-emerald-600" : "text-slate-400"}`}
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
            <div className="border-t border-slate-100 px-6 py-5">
              <p className="text-slate-600 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const volunteerOpportunities = [
  "Teach elementary school students in small math groups",
  "Mentor students preparing for MOEMS, Noetic, and Elementary Math",
  "Help write curriculum, worksheets, and practice problems",
  "Assist with class organization and scheduling",
  "Share your competition math experience with younger students",
  "Earn verified volunteer and community service hours",
  "Develop leadership, communication, and teaching skills",
  "Join a passionate student-led team making math education accessible",
];

const faqs = [
  {
    q: "Is InfinityMath4All an accredited initiative?",
    a: "InfinityMath4All is a student-led nonprofit educational initiative. Our mentors have extensive experience in competitive mathematics, including  MOEMS, Noetic Learning Math Contest, and Elementary Math.",
  },
  {
    q: "Who runs the program?",
    a: "The organization is led entirely by high school students with guidance from adult advisors who oversee curriculum quality and student safety. Our classes are designed and taught by students who have recently completed these competitions themselves.",
  },
  {
    q: "How can I volunteer?",
    a: "Simply click any of the volunteer buttons on this page or email us at admin@InfinityMath4All.org. We'll get back to you within a few days to discuss how you'd like to contribute.",
  },
  {
    q: "Do I need prior teaching experience?",
    a: "No. While strong math knowledge is helpful, we provide guidance and resources to help volunteers become confident instructors and mentors.",
  },
];

const impactStats = [
  { v: "Student-Led", l: "High School Leadership", icon: GraduationCap },
  { v: "Competition Experience", l: " MOEMS • Noetic", icon: Star },
  { v: "100% Free", l: "No Tuition Required", icon: Heart },
  { v: "Small Classes", l: "Personalized Learning", icon: Users },
];

const lookingFor = [
  "High school students who enjoy mathematics and working with younger learners.",
  "Students with experience in competitions like AMC 8, MOEMS, Noetic, Math Kangaroo, or similar programs.",
  "Volunteers interested in teaching, mentoring, curriculum writing, or program operations.",
  "Friendly, dependable individuals who want to make a positive impact in their community.",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function VolunteerWithUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState(
    "Volunteer Inquiry – InfinityMath4All"
  );
  const [emailBody, setEmailBody] = useState("");

  const handleOpenEmail = (role?: string) => {
    if (role) {
      setEmailSubject(`${role} Volunteer Inquiry – InfinityMath4All`);
      setEmailBody(
        `Hello InfinityMath4All Team,\n\nI'm interested in volunteering with InfinityMath4All as a ${role.toLowerCase()}.\n\nPlease let me know what opportunities are currently available.\n\nBest regards,\n`
      );
    } else {
      setEmailSubject("Volunteer Inquiry – InfinityMath4All");
      setEmailBody(
        `Hello InfinityMath4All Team,\n\nI'm interested in volunteering with InfinityMath4All.\n\nPlease let me know what opportunities are currently available.\n\nBest regards,\n`
      );
    }
    setEmailModalOpen(true);
  };

  const handleSendEmail = () => {
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "admin@InfinityMath4All.org"
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      emailBody
    )}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
    setEmailModalOpen(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-slate-900 py-24 overflow-hidden section-shell">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Volunteer With Us
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Help inspire the next
              <span className="block text-emerald-400 mt-2">
                generation of mathematicians
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              InfinityMath4All is powered entirely by student volunteers. Join us
              in teaching, mentoring, and making high-quality competition math
              education completely free for younger students.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.button
                onClick={() => handleOpenEmail()}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Become a Volunteer
              </motion.button>

              <motion.a
                href="#volunteer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="py-12 bg-white section-shell">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {impactStats.map(({ v, l, icon: Icon }) => (
              <motion.div
                key={l}
                variants={revealVariants}
                whileHover={{ y: -4 }}
                transition={SPRING}
                className="text-center"
              >
                <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-slate-900">
                  {v}
                </div>
                <div className="text-xs text-slate-500 mt-1">{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-slate-50 section-shell">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Join Our Team
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Volunteer With InfinityMath4All
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                Our organization is built entirely by passionate student
                volunteers. Whether you enjoy teaching, mentoring, creating
                curriculum, or helping behind the scenes, you'll play an
                important role in making competition math education accessible
                to younger students at absolutely no cost.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card shadow-xl bg-white overflow-hidden">
              {/* Top Banner */}
              <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 px-10 py-12 text-white">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={SPRING}
                  className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6"
                >
                  <GraduationCap className="w-8 h-8" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4">Why Volunteer?</h3>
                <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
                  Every volunteer helps expand access to quality math education.
                  By sharing your knowledge and enthusiasm, you'll inspire
                  younger students while developing valuable leadership,
                  communication, and teaching experience yourself.
                </p>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6">
                      Opportunities
                    </h4>
                    <motion.div
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-8% 0px" }}
                    >
                      {volunteerOpportunities.map((item) => (
                        <motion.div
                          key={item}
                          variants={revealVariants}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                          <p className="text-slate-700 leading-relaxed">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-8% 0px" }}
                  >
                    <Reveal>
                      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
                        <h4 className="text-2xl font-bold text-slate-900 mb-6">
                          We're Looking For
                        </h4>
                        <div className="space-y-4">
                          {lookingFor.map((text) => (
                            <motion.div
                              key={text}
                              variants={revealVariants}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                              <p className="text-slate-700">{text}</p>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          variants={revealVariants}
                          className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-5"
                        >
                          <h5 className="font-bold text-emerald-800 mb-2">
                            What You'll Gain
                          </h5>
                          <p className="text-sm text-emerald-700 leading-relaxed">
                            ✔ Leadership experience
                            <br />
                            ✔ Teaching and public speaking skills
                            <br />
                            ✔ Verified volunteer/community service hours
                            <br />
                            ✔ Experience working on a student-led initiative
                            <br />
                            ✔ The opportunity to inspire future mathematicians
                          </p>
                        </motion.div>
                      </div>
                    </Reveal>
                  </motion.div>
                </div>

                <div className="mt-12 flex justify-center">
                  <motion.button
                    onClick={() => handleOpenEmail("Volunteer")}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Apply to Volunteer
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Header */}
      <section className="py-16 bg-white section-shell">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Frequently Asked Questions
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl font-bold text-slate-900 mt-5">
              Questions About Volunteering
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Learn more about how InfinityMath4All operates and what it's like
              to volunteer with our student-led organization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-20 bg-slate-50 section-shell">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4"
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 section-shell">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Every class we teach is made possible by dedicated student
              volunteers. We'd love to have you join our team and help inspire
              the next generation of mathematicians.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.button
              onClick={() => handleOpenEmail()}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-slate-100 font-semibold px-10 py-4 rounded-xl transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Become a Volunteer
            </motion.button>
          </Reveal>
        </div>
      </section>

      {/* Email Modal */}
      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={EASE}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={SPRING}
              className="relative card shadow-2xl w-full max-w-xl bg-white"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Volunteer Inquiry
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    This will open Gmail in a new tab.
                  </p>
                </div>
                <button
                  onClick={() => setEmailModalOpen(false)}
                  className="rounded-lg p-2 hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Subject
                  </label>
                  <input
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={8}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <motion.button
                  onClick={handleSendEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  Open Gmail
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
