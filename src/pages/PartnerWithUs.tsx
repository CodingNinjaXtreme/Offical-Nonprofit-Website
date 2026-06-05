import { useState } from 'react';
import {
  Mail,
  Heart,
  HandshakeIcon,
  Users,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Star,
  Briefcase,
  X,
  School,
  Gift,
  GraduationCap,
} from 'lucide-react';

const partnerTypes = [
  {
    icon: Briefcase,
    title: 'Volunteer Coaches',
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    perks: [
      'Train and mentor grades 1–5 students',
      'Flexible time commitment options',
      'Meaningful volunteer experience',
      'Community of like-minded educators',
      'Direct student mentorship impact',
    ],
    description:
      'Share your love of math. We welcome volunteers from all backgrounds — from college students to retired professionals — to coach our students.',
  },
  {
    icon: GraduationCap,
    title: 'High School Mentors',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    perks: [
      'Teach students 2–6 years younger than you',
      'Build leadership and communication skills',
      'Use your competition experience to help others',
      'Get trained on curriculum and classroom basics',
      'Earn verified service hours',
    ],
    description:
      'If you’re a high schooler who has competed in MOEMS or Noetic — we want you on the team. This program is built and run by students like you.',
  },
  {
    icon: School,
    title: 'Schools & PTAs',
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    perks: [
      'Bring competition prep to your students',
      'After-school or weekend program options',
      'Free or low-cost partnerships',
      'Curriculum aligned to national standards',
      'Coordination with your math faculty',
    ],
    description:
      'We partner with elementary and middle schools to host on-site or virtual cohorts. Great fit for PTAs, gifted-and-talented programs, and Title I schools.',
  },
  {
    icon: Gift,
    title: 'Supporters',
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    perks: [
      'Help us keep seats open for new students',
      'Connect us with schools and families',
      'Share the program with your network',
      'Volunteer your professional expertise',
      'Stay in the loop with occasional updates',
    ],
    description:
      'Want to back the program in other ways? Mentorship from professionals, intros to schools, or simply spreading the word — every bit helps us reach more students.',
  },
];

const faqs = [
  {
    q: 'Is InfinityMath4All an accredited nonprofit?',
    a: 'Yes. InfinityMath4All is a registered 501(c)(3) nonprofit organization. Our EIN and annual financial statements are publicly available upon request.',
  },
  {
    q: 'Who actually runs the program?',
    a: 'High school students. The leadership team, mentors, and curriculum writers are all in high school. We are backed by an adult advisory board that reviews curriculum and oversees safety, but the day-to-day teaching is student-led — that is the entire point.',
  },
  {
    q: 'How do I partner up with you?',
    a: 'Fill out the form above or email us directly at admin@InfinityMath4All.org. We will reply within a couple of days to figure out the best way to work together.',
  },
  {
    q: 'What is your expertise?',
    a: 'Our high school mentors recently competed in Noetic and MOEMS. They bring lived experience to the curriculum, supported by adult advisors.',
  },
];

export default function PartnerWithUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState('Partnership Inquiry – InfinityMath4All');
  const [emailBody, setEmailBody] = useState('');

  const handleOpenEmail = (type?: string) => {
    if (type) {
      setEmailSubject(`${type} Inquiry – InfinityMath4All`);
      setEmailBody(
        `Hello InfinityMath4All Team,\n\nI'm interested in exploring a ${type} opportunity with InfinityMath4All.\n\n[Please describe your interest here]\n\nBest regards,\n`
      );
    } else {
      setEmailSubject('Partnership Inquiry – InfinityMath4All');
      setEmailBody(
        'Hello InfinityMath4All Team,\n\nI am interested in partnering with InfinityMath4All.\n\n[Please describe your interest here]\n\nBest regards,\n'
      );
    }
    setEmailModalOpen(true);
  };

  const handleSendEmail = () => {
    const mailto = `mailto:admin@InfinityMath4All.org?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailto;
    setEmailModalOpen(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-hero py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <HandshakeIcon className="w-3.5 h-3.5 text-emerald-400" /> Partner With Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&rsquo;s build something
            <span className="block text-gradient">meaningful together</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Volunteer coach, high school mentor, school partner, or donor — there are many ways
            to invest in the next generation of mathematical thinkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button onClick={() => handleOpenEmail()} className="btn-accent text-base px-8 py-4">
              <Mail className="w-5 h-5" /> Email Us Now
            </button>
            <a href="#partnership-types" className="btn-ghost-light text-base px-8 py-4">
              Explore Ways to Help <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="divider-wave">
            <path d="M0 60L1440 60L1440 0C1200 50 720 60 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Impact strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: 'Run by', l: 'high school students', icon: GraduationCap },
              { v: '501(c)(3)', l: 'registered nonprofit', icon: Heart },
              { v: '4', l: 'national competitions', icon: Star },
              { v: 'Free', l: '& subsidized seats', icon: Users },
            ].map(({ v, l, icon: Icon }) => (
              <div key={l} className="text-center">
                <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{v}</div>
                <div className="text-xs text-slate-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">
              <Star className="w-4 h-4" /> Partnership Options
            </span>
            <h2 className="section-title">Find your role in our mission</h2>
            <p className="section-subtitle mx-auto text-center">
              Every contribution — time, expertise, or a kind word — makes a real difference in a
              child&rsquo;s educational journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map(({ icon: Icon, title, color, lightColor, textColor, perks, description }) => (
              <div key={title} className="card group hover:-translate-y-1 transition-all duration-300">
                <div className="p-8">
                  <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
                  <div className={`${lightColor} rounded-xl p-5 mb-6`}>
                    <p className={`text-xs font-bold ${textColor} uppercase tracking-wide mb-3`}>
                      What You Get
                    </p>
                    <ul className="space-y-2">
                      {perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 ${textColor} flex-shrink-0 mt-0.5`} />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleOpenEmail(title)}
                    className="btn-primary w-full justify-center"
                  >
                    <Mail className="w-4 h-4" /> Get In Touch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">
            <Heart className="w-4 h-4" /> Transparency
          </span>
          <h2 className="section-title">Built around access, not fundraising</h2>
          <p className="text-slate-500 leading-relaxed">
            We&rsquo;re a registered 501(c)(3) focused on getting more students into competition
            math — not on running a fundraising operation. If you have specific questions about
            how the program is structured, just email us.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-100 transition-colors duration-200"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-slate-900 text-sm pr-4">{q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Mail className="w-12 h-12 text-white/60 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to start the conversation?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our partnership team typically responds within a couple of days. We&rsquo;d love to
            hear from you.
          </p>
          <button onClick={() => handleOpenEmail()} className="btn-accent text-base px-8 py-4">
            <Mail className="w-5 h-5" /> Open Email Composer <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-white/60 text-sm mt-4">
            Or email us directly at{' '}
            <a
              href="mailto:admin@InfinityMath4All.org"
              className="text-white underline hover:no-underline"
            >
              admin@InfinityMath4All.org
            </a>
          </p>
        </div>
      </section>

      {/* Email Compose Modal */}
      {emailModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setEmailModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Compose Message</h3>
                  <p className="text-xs text-slate-500">
                    Opens in your email client (Gmail, Outlook, etc.)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEmailModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
                aria-label="Close compose dialog"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">To</label>
                <div className="input-field bg-slate-50 text-slate-500 cursor-not-allowed">
                  admin@InfinityMath4All.org
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Message
                </label>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  rows={8}
                  placeholder="Type your message here..."
                  className="input-field resize-none"
                />
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 flex gap-3">
              <button onClick={handleSendEmail} className="btn-primary flex-1 justify-center">
                <Mail className="w-4 h-4" /> Open in Email App
              </button>
              <button onClick={() => setEmailModalOpen(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
