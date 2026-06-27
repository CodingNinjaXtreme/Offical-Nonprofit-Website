import { useState } from 'react';
import {
  Mail,
  Heart,
  HandshakeIcon,
  Users,
  ChevronRight,
  CheckCircle2,
  Star,

  X,
  School,

  GraduationCap,

  BookOpen
} from 'lucide-react';

const partnerTypes = [
  {
    icon: GraduationCap,
    title: 'Academic Team',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    perks: [
      'Teach students 2–3 years younger than you',
      'Build core leadership & classroom management skills',
      'Leverage AMC 8, MOEMS, & Noetic testing insights',
      'Access standardized curriculum playbooks',
      'Earn verified community service hours',
    ],
    description:
        'Built and run by high schoolers, supported by adult advisors. If you are an advanced student or educator looking to lead local math batches, join our instructional network.',
  },
  {
    icon: School,
    title: 'Community Partners',
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    perks: [
      'Bring free competition preparation to your campus',
      'Flexible after-school or weekend cohorts',
      'Capped student batches for elite quality control',
      'Marketing options for local boba and food shops',
      'Seamless coordination with local PTAs and schools',
    ],
    description:
        'We collaborate with local schools, parent associations, and storefronts to expand STEM outreach. Perfect for hosts looking to spin up cohorts or sponsor regional flyers.',
  },
  {
    icon: BookOpen,
    title: 'Resource Advocates',
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    perks: [
      'Donate used AoPS & competition guides',
      'Clear shelf space for an incredible cause',
      'Directly resource incoming student batches',
      'Free contactless porch pickup across Fremont',
      'Contribute small neighborhood micro-donations',
    ],
    description:
        'Have old Art of Problem Solving or Beast Academy books gathering dust? Donate physical guides or neighborhood resources to keep our seats free and accessible.',
  },
];

const faqs = [
  {
    q: 'Is InfinityMath4All an accredited initiative?',
    a: 'Yes. InfinityMath4All is a student-led organization. Our expertise in competitive math is vast, with many of our team members winning national level awards in mathematics.',
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

  // Generic clean placeholders for your local store logos (to add later)
  const carouselLogos = [
    { label: 'Partner Hub' },
    { label: 'Partner Hub' },
    { label: 'Partner Hub' },
    { label: 'Partner Hub' },
  ];
  const duplicatedLogos = [...carouselLogos, ...carouselLogos];

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
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-sm font-semibold px-3 py-1 rounded-full mb-6">
              <HandshakeIcon className="w-3.5 h-3.5 text-emerald-400" /> Partner With Us
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let’s build something
              <span className="block text-emerald-400 mt-2">meaningful together</span>
            </h1>

            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Volunteer coach, high school mentor, corporate sponsor, school partner, or book drive donor — there are many ways to invest in the next generation of mathematical thinkers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button onClick={() => handleOpenEmail()} className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all">
                <Mail className="w-5 h-5" /> Email Us Now
              </button>
              <a href="#partnership-types" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all">
                Explore Ways to Help <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Impact strip */}
        {/* Impact strip */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: 'Student-Led', l: 'High School Executives', icon: GraduationCap },
                { v: 'Previous Experience', l: 'Tested Program Methods', icon: Heart },
                { v: 'Contest Focus', l: 'MOEMS / Noetic / Elementary Grade Level Math', icon: Star },
                { v: 'Capped Batches', l: 'Elite Quality Assurance', icon: Users },
              ].map(({ v, l, icon: Icon }) => (
                  <div key={l} className="text-center">
                    <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-bold text-slate-900">{v}</div>
                    <div className="text-xs text-slate-500 mt-1">{l}</div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endless Loop Sponsor Marquee Carousel */}
        {/* Endless Loop Sponsor Marquee Carousel */}
        <div className="w-full bg-slate-50 py-6 overflow-hidden border-b border-slate-100">
          <div className="relative w-full flex overflow-x-hidden">
            <div className="animate-marquee flex whitespace-nowrap min-w-full items-center gap-16">
              {duplicatedLogos.map((_, index) => (
                  <div key={index} className="flex-shrink-0 bg-slate-200/50 rounded-xl w-32 h-12 flex items-center justify-center border border-slate-200/40 select-none">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Partner Hub</span>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Types Grid Section */}
        <section id="partnership-types" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">Engagement Pathways</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-3">Find your role in our mission</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


              {partnerTypes.map(({ icon: Icon, title, color, lightColor, textColor, perks, description }) => (
                  <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
                    <div className="p-8">
                      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>

                      <div className={`${lightColor} rounded-xl p-5 mb-6`}>
                        <ul className="space-y-2">
                          {perks.map((perk) => (
                              <li key={perk} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className={`w-4 h-4 ${textColor} flex-shrink-0 mt-0.5`} />
                                {perk}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-8 pb-8">
                      <button
                          onClick={() => handleOpenEmail(title)}
                          className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" /> Get In Touch
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Context Segment */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900">Some Common Questions You May Have</h2>
            <p className="text-slate-500 leading-relaxed mt-2">
              We compiled the most common questions parents and partners have about our operations.
            </p>
          </div>
        </section>

        {/* FAQ Deployment Container */}
        <section id="faq" className="py-12 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-slate-900 text-sm pr-4">{q}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                    </button>

                    {openFaq === i && (
                        <div className="px-6 pb-5 border-t border-slate-50 pt-4">
                          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to start the conversation?</h2>
          <p className="text-white/80 mb-8">We usually respond within a couple of days.</p>
          <button onClick={() => handleOpenEmail()} className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all">
            <Mail className="w-5 h-5" /> Open Email Composer
          </button>
        </section>

        {/* Functional Email Modal Component */}
        {emailModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Compose Email</h3>
                  <button onClick={() => setEmailModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Subject</label>
                    <input
                        className="w-full border border-slate-200 rounded-lg p-2.5 text-sm font-medium focus:outline-none focus:border-emerald-400"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Message</label>
                    <textarea
                        className="w-full border border-slate-200 rounded-lg p-2.5 text-sm font-medium focus:outline-none focus:border-emerald-400 resize-none"
                        rows={6}
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                    />
                  </div>
                </div>

                <button onClick={handleSendEmail} className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm transition-colors">
                  Send Inquiry
                </button>
              </div>
            </div>
        )}
      </div>
  );
}
