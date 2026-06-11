import { Shield, Lock, EyeOff, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-300 overflow-hidden selection:bg-blue-500/30">
            {/* Decorative Background Glows */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.12), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(99, 102, 241, 0.08), transparent 40%)',
                }}
            />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="border-b border-slate-800 pb-8 mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        <Shield className="w-3.5 h-3.5" /> Student Safety First
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                        Privacy Policy & COPPA Disclosure
                    </h1>
                    <p className="text-sm text-slate-500">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                        <div className="p-2 bg-emerald-500/10 rounded-lg w-fit text-emerald-400 mb-3">
                            <Lock className="w-5 h-5" />
                        </div>
                        <h3 className="text-white font-semibold text-sm mb-1">No Child PII</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            We never ask for or collect names, emails, addresses, or phone numbers from student users.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                        <div className="p-2 bg-blue-500/10 rounded-lg w-fit text-blue-400 mb-3">
                            <EyeOff className="w-5 h-5" />
                        </div>
                        <h3 className="text-white font-semibold text-sm mb-1">100% Ad-Free</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Zero tracking cookies, data brokers, or targeted advertising. A strictly focused learning space.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                        <div className="p-2 bg-indigo-500/10 rounded-lg w-fit text-indigo-400 mb-3">
                            <FileText className="w-5 h-5" />
                        </div>
                        <h3 className="text-white font-semibold text-sm mb-1">COPPA Compliant</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Engineered to meet and exceed strict U.S. Federal requirements for online safety.
                        </p>
                    </div>
                </div>

                {/* Legal Policy Content */}
                <div className="space-y-10 text-sm leading-relaxed text-slate-400">
                    <section>
                        <h2 className="text-lg font-bold text-white mb-3">1. Introduction</h2>
                        <p>
                            At <strong>InfinityMath4All</strong>, we believe every child deserves access to premier math competition education without compromising their digital safety. This privacy policy outlines our engineering commitments and practices regarding our web platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-3">2. Children's Privacy (COPPA Compliance)</h2>
                        <p className="mb-3">
                            Our web applications are built explicitly for elementary students (Grades 1-5). Because student data privacy is paramount, we adhere directly to the <strong>Children's Online Privacy Protection Act (COPPA)</strong> framework.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                            <li><strong>Zero Collection Policy:</strong> We do not prompt, allow, or require children to submit Personally Identifiable Information (PII) to engage with our learning materials or math competition resources.</li>
                            <li><strong>Anonymous Class Roster:</strong> The only interactive student features we host is through our "Join Class" option as well as live and in-person sessions. These security measures allows kids to focus on learning while protecting them from online hazards. There is absolutely no need or facility for personal emails, passwords, or verifiable details during this workflow.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-3">3. Adult & Institutional Registrations</h2>
                        <p>
                            When a parent, teacher, coach, or school partner registers an organizational account or reaches out via email, we collect only the necessary organizational data (such as a coach's email address and school name). This logistical contact information is used strictly to coordinate math events and is <strong>never shared or sold to third-party entities</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-3">4. Cookies and Analytics</h2>
                        <p>
                            We do not use marketing tracking pixels, cross-site profiling cookies, or consumer remarketing code. Any telemetry or logging used on this platform is dedicated purely to monitoring functional infrastructure performance, solving software bugs, and enhancing computational performance.
                        </p>
                    </section>

                    <section className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-xl">
                        <h2 className="text-lg font-bold text-white mb-2">5. Open Source Transparency</h2>
                        <p className="mb-4">
                            Our software repositories are fully transparent and audited by the public community. Parents and school data security administrators can review our active codebase at any time to verify our data processing architecture directly.
                        </p>
                        <div className="text-xs text-slate-500">
                            For security disclosures or corporate inquiries, reach out directly to the compliance administrator at{' '}
                            <a href="mailto:admin@InfinityMath4All.org" className="text-blue-400 hover:text-blue-300 underline">
                                admin@InfinityMath4All.org
                            </a>
                            .
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
