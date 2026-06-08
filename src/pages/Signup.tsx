import { useState } from 'react';
import { X, CheckCircle, GraduationCap, MapPin, ClipboardList, Laptop, User } from 'lucide-react';

export default function Signup() {
    const [isOpen, setIsOpen] = useState(false);

    // REPLACE THIS LINK WITH YOUR ACTUAL GOOGLE FORM EMBED LINK
    // To get this link: Go to your Google Form -> Click "Send" -> Click the "<>" HTML Embed tab -> Copy only the URL inside the src="" attribute.
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfKNs2_gNAWSsUpHpAPflvNSYbiO3pW4Qiu06HeBzh2hIdWHw/viewform?embedded=true";
    

    return (
        <div className="min-h-screen bg-dotgrid bg-slate-50 flex flex-col items-center justify-center p-6 antialiased">

            {/* Background Decor to match your warm hero elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-hero opacity-5 pointer-events-none z-0" />

            {/* Main Container Card */}
            <div className="card w-full max-w-xl p-8 md:p-12 relative z-10 text-center animate-fade-up">

                {/* Decorative Badge */}
                <div className="flex justify-center">
                    <span className="section-tag">
                        <GraduationCap className="w-4 h-4" /> Math Program Registration
                    </span>
                </div>

                {/* Headings utilizing Playfair Display fonts from your base CSS */}
                <h1 className="section-title mt-2">
                    Join Our Math Classes
                </h1>
                <p className="section-subtitle mx-auto mb-8">
                    Ready to elevate your problem-solving skills? Fill out our application form to secure your spot.
                </p>

                {/* Informative Checklist for User Expectation */}
                <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 space-y-3 max-w-md mx-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Information Needed:</p>
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

                {/* Trigger Button applying your primary styles & animations */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="btn-primary group animate-shine text-lg px-8 py-4 shadow-lg shadow-blue-500/20"
                >
                    <span>Open Application Form</span>
                    <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                </button>
            </div>

            {/* Modal Popup Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 animate-fadeIn">

                    {/* Modal Container */}
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden relative border border-slate-100 animate-rise">

                        {/* Modal Header bar */}
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 font-serif">Sign Up Form</h3>
                                <p className="text-xs text-slate-500">Please answer all 5 questions completely.</p>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors duration-200"
                                aria-label="Close form modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Embedded Google Form Iframe */}
                        <div className="flex-1 w-full h-full bg-slate-50 overflow-y-auto relative">
                            <iframe
                                src={googleFormUrl}
                                className="w-full h-full border-0"
                                title="Google Form Sign Up"
                            >
                                Loading form...
                            </iframe>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}
