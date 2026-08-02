import { CheckCircle, GraduationCap, MapPin, ClipboardList, Laptop, User } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants/signup';
import { useLanguage } from '../context/LanguageContext';

const baseSignupCopy = {
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
};

const signupCopy = {
    en: baseSignupCopy,
    es: {
        ...baseSignupCopy,
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
    },
    hi: {
        ...baseSignupCopy,
        tag: 'गणित कार्यक्रम पंजीकरण',
        title: 'हमारी गणित कक्षाओं में शामिल हों',
        subtitle:
            'क्या आप अपनी समस्या-समाधान क्षमताओं को ऊँचा उठाना चाहते हैं? हम Fremont और Warm Springs क्षेत्र में आधारित हैं और अधिक परिवारों तक पहुँचने के लिए विस्तार कर रहे हैं।',
        infoLabel: 'आवश्यक जानकारी:',
        name: 'आपका पूरा नाम',
        preference: 'कक्षा पसंद (ऑनलाइन बनाम ऑफलाइन)',
        location: 'आपकी जगह / आप कहाँ रहते हैं',
        history: 'गणित प्रतियोगिता इतिहास और वर्तमान ग्रेड स्तर',
        button: 'साइनअप फॉर्म खोलें',
    },
    fr: {
        ...baseSignupCopy,
        tag: 'Inscription au programme de mathématiques',
        title: 'Rejoignez nos cours de mathématiques',
        subtitle:
            'Prêt à améliorer vos compétences en résolution de problèmes ? Nous sommes basés dans la région de Fremont et Warm Springs et nous nous développons pour atteindre plus de familles.',
        infoLabel: 'Informations nécessaires :',
        name: 'Votre nom complet',
        preference: 'Préférence de classe (en ligne ou en personne)',
        location: 'Votre emplacement / où vous vivez',
        history: 'Historique des concours de mathématiques et niveau actuel',
        button: 'Ouvrir le formulaire d’inscription',
    },
    ja: {
        ...baseSignupCopy,
        tag: '数学プログラム登録',
        title: '数学クラスに参加しよう',
        subtitle:
            '問題解決力を高める準備はできましたか？私たちは Fremont と Warm Springs 地域を拠点にし、より多くの家庭に届くよう拡大しています。',
        infoLabel: '必要な情報：',
        name: 'お名前',
        preference: 'クラスの希望（オンラインまたは対面）',
        location: 'お住まいの地域',
        history: '数学コンテストの経験と現在の学年',
        button: '登録フォームを開く',
    },
    zh: {
        ...baseSignupCopy,
        tag: '数学项目报名',
        title: '加入我们的数学课程',
        subtitle:
            '准备好提升你的解题能力了吗？我们基地位于 Fremont 和 Warm Springs 地区，并正在扩大服务更多家庭。',
        infoLabel: '需要的信息：',
        name: '您的全名',
        preference: '课程偏好（在线或线下）',
        location: '您所在的位置/居住地',
        history: '数学竞赛经历和当前年级',
        button: '打开报名表',
    },
} as const;

export default function Signup() {
        const { language } = useLanguage();
        const copy = { ...signupCopy.en, ...signupCopy[language] };

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

                <div className="text-left bg-slate-50 border border-slate-100 p-5 mb-8 space-y-3 max-w-md mx-auto" style={{ borderRadius: '1.5rem 1.9rem 1.2rem 1.75rem / 1.25rem 1.55rem 1.7rem 1.35rem' }}>
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

                <div className="flex justify-center">
                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary group animate-shine w-full max-w-sm justify-center text-lg px-10 py-5 shadow-lg shadow-blue-500/20"
                    >
                        <span>{copy.button}</span>
                        <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    );
}