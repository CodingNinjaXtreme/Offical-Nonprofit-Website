import { CheckCircle, GraduationCap, MapPin, ClipboardList, Laptop, User } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';

const signupCopy = {
    en: {
        tag: 'Math Program Registration',
        title: 'Join Our Math Classes',
        subtitle:
            'Ready to elevate your problem-solving skills? We’re based in the Fremont and Warm Springs area and expanding to reach more families.',
        infoLabel: 'Information Needed:',
        name: 'Your full name',
        preference: 'Class preference (Online vs. In-person)',
        location: 'Your location / where you live',
        history: 'Math competition history & current grade level',
        button: 'Open Signup Form',
        directLink: 'Use the direct Google Form link',
    },
    es: {
        tag: 'Registro del programa de matemáticas',
        title: 'Únete a nuestras clases de matemáticas',
        subtitle:
            '¿Listo para mejorar tus habilidades para resolver problemas? Estamos basados en el área de Fremont y Warm Springs y nos estamos expandiendo para llegar a más familias.',
        infoLabel: 'Información necesaria:',
        name: 'Tu nombre completo',
        preference: 'Preferencia de clase (en línea vs. presencial)',
        location: 'Tu ubicación / dónde vives',
        history: 'Historial de concursos de matemáticas y nivel de grado actual',
        button: 'Abrir formulario de inscripción',
        directLink: 'Usar el enlace directo del formulario de Google',
    },
} as const;

export default function Signup() {
        const { language } = useLanguage();
        const copy = signupCopy[language];

    return (
        <div className="min-h-screen bg-dotgrid bg-slate-50 flex flex-col items-center justify-center p-6 antialiased">

            <div className="absolute top-0 left-0 w-full h-full bg-hero opacity-5 pointer-events-none z-0" />

            <div className="card w-full max-w-xl p-8 md:p-12 relative z-10 text-center animate-fade-up">

                <div className="flex justify-center">
                    <span className="section-tag">
                        <GraduationCap className="w-4 h-4" aria-hidden="true" /> {copy.tag}
                    </span>
                </div>

                <h1 className="section-title mt-2">
                    {copy.title}
                </h1>

                <p className="section-subtitle mx-auto mb-8">
                    {copy.subtitle}
                </p>

                <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 space-y-3 max-w-md mx-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {copy.infoLabel}
                    </p>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <User className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                        <span>{copy.name}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Laptop className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                        <span>{copy.preference}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                        <span>{copy.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                        <ClipboardList className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                        <span>{copy.history}</span>
                    </div>
                </div>

                <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary group animate-shine text-lg px-8 py-4 shadow-lg shadow-blue-500/20"
                >
                    <span>{copy.button}</span>
                    <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>

                <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                    {copy.directLink}
                </a>
            </div>
        </div>
    );
}