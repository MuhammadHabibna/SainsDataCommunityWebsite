import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Calendar,
    Tag,
    X,
    Gift,
    Trophy,
    Star,
    BookOpen,
    ExternalLink,
    Code2,
    Database,
    Brain,
    CheckCircle,
    Info
} from 'lucide-react';

const CountdownTimer = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(deadline) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="mx-1">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="py-2 px-0 text-center w-full">
            {timerComponents.length ? (
                <div className="text-sm font-mono text-cyan-600 dark:text-cyan-400 flex flex-col items-center">
                    <span className="block text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Pendaftaran Ditutup dalam:</span>
                    <div className="flex gap-2 md:gap-4 justify-center">
                        <div className="flex flex-col items-center p-2 md:p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl min-w-[50px] md:min-w-[70px] border border-slate-100 dark:border-slate-700 shadow-sm">
                            <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">{timeLeft.days}</span>
                            <span className="text-[8px] md:text-[10px] uppercase text-slate-400 font-bold mt-1">Hari</span>
                        </div>
                        <span className="text-lg md:text-2xl font-bold text-slate-300 dark:text-slate-600 self-center pb-2">:</span>
                        <div className="flex flex-col items-center p-2 md:p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl min-w-[50px] md:min-w-[70px] border border-slate-100 dark:border-slate-700 shadow-sm">
                            <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[8px] md:text-[10px] uppercase text-slate-400 font-bold mt-1">Jam</span>
                        </div>
                        <span className="text-lg md:text-2xl font-bold text-slate-300 dark:text-slate-600 self-center pb-2">:</span>
                        <div className="flex flex-col items-center p-2 md:p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl min-w-[50px] md:min-w-[70px] border border-slate-100 dark:border-slate-700 shadow-sm">
                            <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[8px] md:text-[10px] uppercase text-slate-400 font-bold mt-1">Menit</span>
                        </div>
                        <span className="text-lg md:text-2xl font-bold text-slate-300 dark:text-slate-600 self-center pb-2">:</span>
                        <div className="flex flex-col items-center p-2 md:p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl min-w-[50px] md:min-w-[70px] border border-slate-100 dark:border-slate-700 shadow-sm">
                            <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[8px] md:text-[10px] uppercase text-slate-400 font-bold mt-1">Detik</span>
                        </div>
                    </div>
                </div>
            ) : (
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-3">
                    <X size={20} /> Pendaftaran Ditutup
                </span>
            )}
        </div>
    );
};

const EventModal = ({ item, children, onClose, title }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/10 dark:bg-black/80 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl scrollbar-hide flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-20 p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate pr-8">{title || item?.title || 'Detail Event'}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                        <X size={20} className="text-slate-900 dark:text-white" />
                    </button>
                </div>

                <div className="p-0">
                    {/* Image Header if item provided */}
                    {item && (
                        <div className="relative h-64 w-full">
                            <img
                                src={item.image_url || 'https://via.placeholder.com/800x400?text=SaDaCom+Event'}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-md text-cyan-200 text-xs font-bold rounded-full border border-cyan-500/30 inline-flex items-center gap-1 mb-3">
                                    <Tag size={12} />
                                    {item.category || 'Event'}
                                </span>
                                {item.subtitle && (
                                    <p className="text-slate-200 text-sm font-medium italic">
                                        "{item.subtitle}"
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className={`p-6 md:p-8 ${!item ? 'pt-2' : ''}`}>
                        {item && (
                            <>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl w-fit">
                                    <Calendar size={16} className="text-cyan-500" />
                                    <span className="font-medium">{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="prose prose-sm md:prose-base prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-8 whitespace-pre-wrap leading-relaxed">
                                    {item.content}
                                </div>
                                {item.registration_deadline && (
                                    <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 flex justify-center">
                                        <CountdownTimer deadline={item.registration_deadline} />
                                    </div>
                                )}
                                {item.cta_link && (
                                    <a
                                        href={item.cta_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
                                    >
                                        {item.cta_text || 'Buka Tautan'}
                                    </a>
                                )}
                            </>
                        )}

                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const LearningPaths = () => {
    const paths = [
        {
            id: 'ai',
            title: 'AI Engineer',
            icon: <Brain size={32} className="text-purple-500" />,
            color: 'from-purple-500/10 to-purple-500/5',
            borderColor: 'border-purple-200 dark:border-purple-500/20',
            textColor: 'text-purple-600 dark:text-purple-400',
            courses: [
                'Belajar Dasar AI',
                'Memulai Pemrograman dengan Python',
                'Belajar Machine Learning untuk Pemula',
                'Belajar Fundamental Deep Learning',
                'Membangun Proyek Deep Learning Tingkat Mahir'
            ],
            bonus: ['Pengembangan LLM untuk Generative AI']
        },
        {
            id: 'ds',
            title: 'Data Scientist',
            icon: <Database size={32} className="text-cyan-500" />,
            color: 'from-cyan-500/10 to-cyan-500/5',
            borderColor: 'border-cyan-200 dark:border-cyan-500/20',
            textColor: 'text-cyan-600 dark:text-cyan-400',
            courses: [
                'Belajar Dasar Data Science',
                'Memulai Pemrograman dengan Python',
                'Belajar Dasar Visualisasi Data',
                'Belajar Analisis Data dengan Python',
                'Belajar Machine Learning untuk Pemula',
                'Belajar Matematika untuk Data Science',
                'Belajar Fundamental Pemrosesan Data'
            ],
            bonus: ['Belajar Penerapan Data Science']
        },
        {
            id: 'web',
            title: 'Full Stack Web Developer',
            icon: <Code2 size={32} className="text-blue-500" />,
            color: 'from-blue-500/10 to-blue-500/5',
            borderColor: 'border-blue-200 dark:border-blue-500/20',
            textColor: 'text-blue-600 dark:text-blue-400',
            courses: [
                'Belajar Dasar Pemrograman Web',
                'Belajar Dasar Pemrograman JavaScript',
                'Belajar Membuat Front-End Web untuk Pemula',
                'Belajar Membuat Aplikasi Web dengan React',
                'Belajar Fundamental Aplikasi Web dengan React',
                'Belajar Back-End Pemula dengan JavaScript',
                'Belajar Fundamental Back-End dengan JavaScript'
            ],
            bonus: [
                'Menjadi Node.js Application Developer',
                'Menjadi React Web Developer Expert'
            ]
        }
    ];

    return (
        <div className="w-full">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
                <BookOpen size={24} className="text-cyan-500" />
                Available Learning Paths
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paths.map((path, index) => (
                    <motion.div
                        key={path.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-gradient-to-br ${path.color} border ${path.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden`}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                                {path.icon}
                            </div>
                            <h5 className={`text-lg font-bold ${path.textColor} leading-tight`}>{path.title}</h5>
                        </div>

                        <div className="flex-grow">
                            <h6 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Kelas Inti</h6>
                            <ul className="space-y-2 mb-6">
                                {path.courses.map((course, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs">
                                        <div className={`mt-1 w-1 h-1 rounded-full ${path.textColor.split(' ')[0]} bg-current shrink-0`} />
                                        <span>{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/30 mt-auto">
                            <h6 className="text-[10px] font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                                <Star size={10} fill="currentColor" /> Bonus
                            </h6>
                            <ul className="space-y-1">
                                {path.bonus.map((course, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs italic">
                                        <div className="mt-1 w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                                        <span>{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const MetcCurriculum = () => {
    return (
        <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                        <BookOpen size={18} />
                    </div>
                    Kelas Level Awal
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    Seluruh peserta diwajibkan untuk menyelesaikan kelas-kelas ini secara berurutan sebagai pondasi utama sebelum melangkah ke materi yang lebih dalam.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm border-l-4 border-emerald-500 pl-3">Tahap 1</h5>
                        <ul className="space-y-2">
                            {['Belajar Penerapan Data Science dengan Microsoft Fabric', 'Membangun Aplikasi Gen AI dengan Microsoft Azure'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-slate-400 italic mt-2 ml-6">*Langsung dapat diakses ketika berhasil mendaftar</p>
                    </div>

                    <div className="space-y-3">
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm border-l-4 border-blue-500 pl-3">Tahap 2</h5>
                        <ul className="space-y-2">
                            {['Memulai Pemrograman dengan Python', 'Belajar Machine Learning untuk Pemula', 'Belajar Fundamental Pemrosesan Data'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30 text-xs text-blue-700 dark:text-blue-300 mt-2">
                            <Info size={14} className="inline mr-1 -mt-0.5" />
                            <strong>Syarat Akses Tahap 2:</strong> Ajak minimal 1 rekan mendaftar menggunakan link referralmu.
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <Tag size={20} />
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-slate-900 dark:text-white">Social Media Challenge</p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">Upload twibbon di IG/TikTok/LinkedIn</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                            Link Twibbon
                        </button>
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                            Link Caption
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-xl">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4">
                    <div className="p-1.5 bg-yellow-400/20 rounded-lg text-yellow-400">
                        <Trophy size={18} />
                    </div>
                    Kelas Level Lanjutan <span className="text-xs font-normal px-2 py-0.5 bg-yellow-500 text-slate-900 rounded font-bold ml-2">Seleksi</span>
                </h4>
                <p className="text-slate-300 text-sm mb-6">
                    Peserta terbaik yang menyelesaikan level awal sebelum <strong>26 Maret 2026</strong> akan mendapatkan akses eksklusif.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                        <Star className="text-yellow-400" size={24} />
                        <div>
                            <p className="font-bold text-sm">Belajar Fundamental Gen AI</p>
                            <p className="text-xs text-slate-400">(Segera hadir)</p>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                        <Brain className="text-purple-400" size={24} />
                        <div>
                            <p className="font-bold text-sm">Membangun Sistem Machine Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EventSection = () => {
    const [events, setEvents] = useState([]);
    const [codingCampEvent, setCodingCampEvent] = useState(null);
    const [metcEvent, setMetcEvent] = useState(null);
    const [otherEvents, setOtherEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modals
    const [selectedEvent, setSelectedEvent] = useState(null); // For generic events
    const [showLearningPaths, setShowLearningPaths] = useState(false); // For Coding Camp
    const [showMetcDetails, setShowMetcDetails] = useState(false); // For METC (if we want a modal for it too, or just inline)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data, error } = await supabase
                    .from('announcements')
                    .select('*')
                    .eq('is_active', true)
                    .order('created_at', { ascending: false });

                if (error) throw error;

                // Identify Coding Camp
                let cCamp = data.find(item =>
                    item.title.toLowerCase().includes('coding camp')
                );

                // Identify METC
                let metc = data.find(item =>
                    item.title.toLowerCase().includes('microsoft') ||
                    item.title.toLowerCase().includes('metc')
                );

                // Fallbacks if data missing (Mocking for UI completeness based on request)
                if (!cCamp && data.length > 0) cCamp = data[0];

                // Construct fallback for METC if not in DB yet, so user can see the UI
                if (!metc) {
                    metc = {
                        id: 'mock-metc',
                        title: 'Microsoft Elevate Training Center (METC)',
                        subtitle: 'Upgrade skill digitalmu bersama Microsoft.',
                        content: 'Program pelatihan intensif...',
                        image_url: 'https://img.freepik.com/free-photo/corporate-business-handshake-business-partners_53876-102572.jpg?t=st=1735875000~exp=1735878600~hmac=mock', // Generic placeholder
                        category: 'Training',
                        registration_deadline: '2026-03-26',
                        cta_link: '#',
                        cta_text: 'Daftar METC',
                        is_mock: true
                    };
                }

                // Filter out featured ones from "Other Events"
                const others = data.filter(item =>
                    item.id !== cCamp?.id &&
                    item.id !== metc?.id
                );

                setEvents(data);
                setCodingCampEvent(cCamp);
                setMetcEvent(metc);
                setOtherEvents(others);

            } catch (err) {
                console.error('Error fetching events:', err);
                setError('Gagal memuat event.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="py-20 bg-white dark:bg-slate-950 text-center transition-colors">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-200 border-t-cyan-500 mx-auto"></div>
            </div>
        );
    }

    if (error) return null;

    return (
        <section id="announcement" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/5 rounded-[100%] blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-bold mb-6 border border-cyan-100 dark:border-cyan-800">
                        <Calendar size={16} /> Agenda Terbaru
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        Featured Programs
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Jangan lewatkan kesempatan untuk berkembang bersama SaDaCom. Ikuti program unggulan kami tahun ini.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-20">

                    {/* 1. CODING CAMP SECTION */}
                    {codingCampEvent && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-none flex flex-col p-8 md:p-12 transition-colors group">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                <div className="flex flex-col xl:flex-row gap-12 relative z-10">
                                    {/* Image */}
                                    <div className="xl:w-5/12 relative">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-[16/9] xl:aspect-[4/3]"
                                        >
                                            <img
                                                src={codingCampEvent.image_url || 'https://via.placeholder.com/800x600?text=Coding+Camp'}
                                                alt={codingCampEvent.title}
                                                className="w-full h-full object-cover transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-xl flex items-center gap-1 shadow-lg shadow-yellow-500/20">
                                                    <Star size={14} fill="currentColor" /> HIGHLIGHT
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="xl:w-7/12 flex flex-col justify-center text-center xl:text-left">
                                        <div className="flex items-center justify-center xl:justify-start gap-3 mb-4">
                                            <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wide text-xs uppercase px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800/50 flex items-center gap-2">
                                                <Tag size={12} /> {codingCampEvent.category || 'Event'}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                                            {codingCampEvent.title}
                                        </h3>

                                        {codingCampEvent.subtitle && (
                                            <p className="text-slate-600 dark:text-slate-300 text-xl mb-10 font-medium leading-relaxed max-w-2xl mx-auto xl:mx-0">
                                                {codingCampEvent.subtitle}
                                            </p>
                                        )}

                                        {/* Rewards Snippet */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 text-left">
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center gap-4">
                                                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
                                                    <Gift size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">25 Merchandise</h4>
                                                    <p className="text-xs text-slate-500">Exclusive Swag</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center gap-4">
                                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                                    <Trophy size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Secret Reward</h4>
                                                    <p className="text-xs text-slate-500">For Top Community</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mt-auto">
                                            {codingCampEvent.cta_link && (
                                                <a
                                                    href={codingCampEvent.cta_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-xl font-bold text-center shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                                                >
                                                    Daftar Coding Camp
                                                </a>
                                            )}
                                            <button
                                                onClick={() => setShowLearningPaths(true)}
                                                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 py-3 px-8 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                            >
                                                <BookOpen size={18} /> Lihat Learning Path
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 2. METC SECTION */}
                    {metcEvent && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-none flex flex-col p-8 md:p-12 transition-colors group">
                                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                <div className="flex flex-col xl:flex-row-reverse gap-12 relative z-10">
                                    {/* Image */}
                                    <div className="xl:w-5/12 relative">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-[16/9] xl:aspect-[4/3]"
                                        >
                                            <img
                                                src={metcEvent.image_url || 'https://via.placeholder.com/800x600?text=METC+Program'}
                                                alt={metcEvent.title}
                                                className="w-full h-full object-cover transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-lg shadow-blue-500/20">
                                                    New Program
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="xl:w-7/12 flex flex-col justify-center text-center xl:text-left">
                                        <div className="flex items-center justify-center xl:justify-start gap-3 mb-4">
                                            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wide text-xs uppercase px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50 flex items-center gap-2">
                                                <Tag size={12} /> Microsoft Program
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                                            {metcEvent.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                                            {metcEvent.subtitle || 'Tingkatkan keahlianmu dengan kurikulum standar industri dari Microsoft.'}
                                        </p>

                                        {/* Curriculum Snippet/Teaser */}
                                        <div className="mb-8 text-left bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <MetcCurriculum />
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mt-auto">
                                            {metcEvent.cta_link && (
                                                <a
                                                    href={metcEvent.cta_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-bold text-center shadow-lg shadow-blue-500/20 transition-all w-full md:w-auto"
                                                >
                                                    {metcEvent.cta_text || 'Daftar METC Sekarang'}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>


                {/* SIMPLIFIED OTHER EVENTS */}
                {otherEvents.length > 0 && (
                    <div className="mt-20">
                        <div className="text-center mb-10">
                            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Event Lainnya</h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 items-center">
                            {otherEvents.slice(0, 3).map((event) => (
                                <motion.button
                                    key={event.id}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedEvent(event)}
                                    className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 flex items-center gap-2 shadow-sm"
                                >
                                    <Calendar size={14} className="text-cyan-500" />
                                    {event.title}
                                </motion.button>
                            ))}
                            <motion.a
                                whileHover={{ scale: 1.05, x: 5 }}
                                href="https://www.dicoding.com/events"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-bold flex items-center gap-2 transition-colors"
                            >
                                Lihat Semua Program <ExternalLink size={16} />
                            </motion.a>
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal
                        item={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
                {showLearningPaths && (
                    <EventModal
                        title="Coding Camp Learning Paths"
                        onClose={() => setShowLearningPaths(false)}
                    >
                        <LearningPaths />
                    </EventModal>
                )}
            </AnimatePresence>
        </section>
    );
};

export default EventSection;
