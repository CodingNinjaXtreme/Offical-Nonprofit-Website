import { useState } from "react";
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

export default function VolunteerWithUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const [emailSubject, setEmailSubject] = useState(
      "Volunteer Inquiry – InfinityMath4All"
  );

  const [emailBody, setEmailBody] = useState("");

  const handleOpenEmail = (role?: string) => {
    if (role) {
      setEmailSubject(`${role} Volunteer Inquiry – InfinityMath4All`);
      setEmailBody(
          `Hello InfinityMath4All Team,

I'm interested in volunteering with InfinityMath4All as a ${role.toLowerCase()}.

Please let me know what opportunities are currently available.

Best regards,
`
      );
    } else {
      setEmailSubject("Volunteer Inquiry – InfinityMath4All");
      setEmailBody(
          `Hello InfinityMath4All Team,

I'm interested in volunteering with InfinityMath4All.

Please let me know what opportunities are currently available.

Best regards,
`
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

        <section className="relative bg-slate-900 py-24 overflow-hidden">

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            Volunteer With Us
          </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Help inspire the next
              <span className="block text-emerald-400 mt-2">
              generation of mathematicians
            </span>
            </h1>

            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              InfinityMath4All is powered entirely by student volunteers.
              Join us in teaching, mentoring, and making high-quality
              competition math education completely free for younger students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

              <button
                  onClick={() => handleOpenEmail()}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition"
              >
                <Mail className="w-5 h-5" />
                Become a Volunteer
              </button>

              <a
                  href="#volunteer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>

            </div>

          </div>

        </section>

        {/* Impact Strip */}

        <section className="py-12 bg-white border-b border-slate-100">

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                {
                  v: "Student-Led",
                  l: "High School Leadership",
                  icon: GraduationCap,
                },
                {
                  v: "Competition Experience",
                  l: " MOEMS • Noetic",
                  icon: Star,
                },
                {
                  v: "100% Free",
                  l: "No Tuition Required",
                  icon: Heart,
                },
                {
                  v: "Small Classes",
                  l: "Personalized Learning",
                  icon: Users,
                },
              ].map(({ v, l, icon: Icon }) => (
                  <div key={l} className="text-center">

                    <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />

                    <div className="text-xl md:text-2xl font-bold text-slate-900">
                      {v}
                    </div>

                    <div className="text-xs text-slate-500 mt-1">
                      {l}
                    </div>

                  </div>
              ))}

            </div>

          </div>

        </section>
        {/* Volunteer Section */}

        <section id="volunteer" className="py-20 bg-slate-50">

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Join Our Team
            </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                Volunteer With InfinityMath4All
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                Our organization is built entirely by passionate student
                volunteers. Whether you enjoy teaching, mentoring, creating
                curriculum, or helping behind the scenes, you'll play an
                important role in making competition math education accessible
                to younger students at absolutely no cost.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

              {/* Top Banner */}

              <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 px-10 py-12 text-white">

                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Why Volunteer?
                </h3>

                <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
                  Every volunteer helps expand access to quality math education.
                  By sharing your knowledge and enthusiasm, you'll inspire younger
                  students while developing valuable leadership, communication,
                  and teaching experience yourself.
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

                    <div className="space-y-4">

                      {volunteerOpportunities.map((item) => (

                          <div
                              key={item}
                              className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />

                            <p className="text-slate-700 leading-relaxed">
                              {item}
                            </p>

                          </div>

                      ))}

                    </div>

                  </div>

                  {/* Right */}

                  <div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">

                      <h4 className="text-2xl font-bold text-slate-900 mb-6">
                        We're Looking For
                      </h4>

                      <div className="space-y-4">

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-slate-700">
                            High school students who enjoy mathematics and
                            working with younger learners.
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-slate-700">
                            Students with experience in competitions like
                            AMC 8, MOEMS, Noetic, Math Kangaroo, or similar
                            programs.
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-slate-700">
                            Volunteers interested in teaching,
                            mentoring, curriculum writing,
                            or program operations.
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-slate-700">
                            Friendly, dependable individuals who want to
                            make a positive impact in their community.
                          </p>
                        </div>

                      </div>

                      <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-5">

                        <h5 className="font-bold text-emerald-800 mb-2">
                          What You'll Gain
                        </h5>

                        <p className="text-sm text-emerald-700 leading-relaxed">
                          ✔ Leadership experience<br />
                          ✔ Teaching and public speaking skills<br />
                          ✔ Verified volunteer/community service hours<br />
                          ✔ Experience working on a student-led initiative<br />
                          ✔ The opportunity to inspire future mathematicians
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-12 flex justify-center">

                  <button
                      onClick={() => handleOpenEmail("Volunteer")}
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-10 py-4 rounded-xl transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Apply to Volunteer
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>
        {/* FAQ Header */}

        <section className="py-16 bg-white">

          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-5">
              Questions About Volunteering
            </h2>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Learn more about how InfinityMath4All operates and what it's like
              to volunteer with our student-led organization.
            </p>

          </div>

        </section>

        {/* FAQ */}

        <section
            id="faq"
            className="pb-20 bg-slate-50"
        >

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="space-y-4">

              {faqs.map(({ q, a }, i) => (

                  <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                  >

                    <button
                        onClick={() =>
                            setOpenFaq(openFaq === i ? null : i)
                        }
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition"
                    >

                  <span className="font-semibold text-slate-900 pr-4">
                    {q}
                  </span>

                      <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                              openFaq === i ? "rotate-90" : ""
                          }`}
                      />

                    </button>

                    {openFaq === i && (

                        <div className="border-t border-slate-100 px-6 py-5">

                          <p className="text-slate-600 leading-relaxed">
                            {a}
                          </p>

                        </div>

                    )}

                  </div>

              ))}

            </div>

          </div>

        </section>
        {/* Final CTA */}

        <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>

            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Every class we teach is made possible by dedicated student
              volunteers. We'd love to have you join our team and help inspire
              the next generation of mathematicians.
            </p>

            <button
                onClick={() => handleOpenEmail()}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-slate-100 font-semibold px-10 py-4 rounded-xl transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Become a Volunteer
            </button>

          </div>

        </section>

        {/* Email Modal */}

        {emailModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

              <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl">

                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Volunteer Inquiry
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      This will open your default email application.
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

                  <button
                      onClick={handleSendEmail}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition"
                  >
                    Open Email App
                  </button>

                </div>

              </div>

            </div>
        )}

      </div>
  );
}