import { useState } from 'react';
import { X, CheckCircle, GraduationCap, MapPin, ClipboardList, Laptop, User } from 'lucide-react';

export default function Signup() {
    const [isOpen, setIsOpen] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSfKNs2_gNAWSsUpHpAPflvNSYbiO3pW4Qiu06HeBzh2hIdWHw/viewform?embedded=true";

    // AUTO EMAIL CONFIRMATION (lightweight + safe)
    const handleFormOpen = () => {
        setIsOpen(true);

        // lightweight “confirmation intent” (does NOT send email automatically)
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 4000);
    };

    return (
        <div className="min-h-screen bg-dotgrid bg-slate-50 flex flex-col items-center justify-center p-6 antialiased">

            <div className="absolute top-0 left-0 w-full h-full bg-hero opacity-5 pointer-events-none z-0" />

            <div className="card w-full max-w-xl p-8 md:p-12 relative z-10 text-center animate-fade-up">

                <div className="flex justify-center">
                    <span className="section-tag">
                        <GraduationCap className="w-4 h-4" /> Math Program Registration
                    </span>
                </div>

                <h1 className="section-title mt-2">
                    Join Our Math Classes
                </h1>

                <p className="section-subtitle mx-auto mb-8">
                    Ready to elevate your problem-solving skills? Fill out our application form to secure your spot.
                </p>

                {/* lightweight confirmation message */}
                {emailSent && (
                    <div className="mb-6 flex items-center justify-center gap-2 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg py-2">
                        <CheckCircle className="w-4 h-4" />
                        Form opened successfully — check your email after submitting.
                    </div>
                )}

                <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 space-y-3 max-w-md mx-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Information Needed:
                    </p>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <User className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Your full name</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Laptop className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Class preference (Online vs. In-person)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Your location / where you live</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <ClipboardList className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Math competition history & current grade level</span>
                    </div>
                </div>

                <button
                    onClick={handleFormOpen}
                    className="btn-primary group animate-shine text-lg px-8 py-4 shadow-lg shadow-blue-500/20"
                >
                    <span>Open Application Form</span>
                    <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                </button>
            </div>

            {/* MOBILE-FIRST MODAL */}
            {isOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">

                    <div className="
                        bg-white w-full sm:max-w-3xl
                        h-[92dvh] sm:h-[85vh]
                        flex flex-col overflow-hidden
                        relative border border-slate-100
                        sm:rounded-2xl rounded-t-2xl
                        shadow-2xl
                    ">

                        {/* header */}
                        <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 font-serif">
                                    Sign Up Form
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Please complete all required fields.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* iframe */}
                        <div className="flex-1 w-full overflow-hidden bg-slate-50">
                            <iframe
                                src={googleFormUrl}
                                className="w-full h-full border-0"
                                title="Google Form Sign Up"
                            />
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}