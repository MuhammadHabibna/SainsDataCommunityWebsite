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
    Brain
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

const EventModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/10 dark:bg-black/80 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all z-10 border border-white/20"
                >
                    <X size={20} className="text-slate-900 dark:text-white" />
                </button>

                <div className="relative h-72 w-full group">
                    <img
                        src={item.image_url || 'https://via.placeholder.com/800x400?text=SaDaCom+Event'}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="px-3 py-1 bg-cyan-500/20 backdrop-blur-md text-cyan-200 text-xs font-bold rounded-full border border-cyan-500/30 flex items-center gap-1 w-fit mb-3"
                        >
                            <Tag size={12} />
                            {item.category || 'Event'}
                        </motion.span>
                        <h3 className="text-3xl font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                </div>

                <div className="p-8 md:p-10">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-8 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl w-fit">
                        <Calendar size={16} className="text-cyan-500" />
                        <span className="font-medium">{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>

                    {item.subtitle && (
                        <p className="text-xl text-slate-700 dark:text-slate-200 font-medium mb-6 italic border-l-4 border-cyan-500 pl-4 py-2 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/10 rounded-r-lg">
                            "{item.subtitle}"
                        </p>
                    )}

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-10 whitespace-pre-wrap leading-relaxed">
                        {item.content}
                    </div>

                    {item.registration_deadline && (
                        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 flex justify-center">
                            <CountdownTimer deadline={item.registration_deadline} />
                        </div>
                    )}

                    {item.cta_link && (
                        <motion.a
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            href={item.cta_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 hover:from-slate-800 hover:to-slate-700 text-white dark:text-slate-900 font-bold py-4 px-6 rounded-2xl transition-all shadow-xl shadow-slate-200 dark:shadow-none"
                        >
                            {item.cta_text || 'Buka Tautan'} <ArrowRight className="inline ml-2" size={20} />
                        </motion.a>
                    )}
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
        <div className="mt-16 w-full">
            <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3 tracking-tight"
            >
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                    <BookOpen size={20} />
                </div>
                Learning Paths
            </motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paths.map((path, index) => (
                    <motion.div
                        key={path.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`bg-gradient-to-br ${path.color} border ${path.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col relative overflow-hidden group`}
                    >
                        {/* Decorative Blob */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${path.color} opacity-20 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>

                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200/60 dark:border-slate-700/30 relative z-10">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                                {path.icon}
                            </div>
                            <h5 className={`text-xl font-bold ${path.textColor} leading-tight`}>{path.title}</h5>
                        </div>

                        <div className="flex-grow relative z-10">
                            <h6 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Kelas Inti</h6>
                            <ul className="space-y-3 mb-8">
                                {path.courses.map((course, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${path.textColor.split(' ')[0]} bg-current shrink-0`} />
                                        <span>{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/30 mt-auto relative z-10">
                            <h6 className="text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Star size={12} fill="currentColor" /> Bonus Kelas
                            </h6>
                            <ul className="space-y-2">
                                {path.bonus.map((course, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm italic">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
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

const EventSection = () => {
    const [events, setEvents] = useState([]);
    const [featuredEvent, setFeaturedEvent] = useState(null);
    const [otherEvents, setOtherEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data, error } = await supabase
                    .from('announcements')
                    .select('*')
                    .eq('is_active', true)
                    .order('created_at', { ascending: false });

                if (error) throw error;

                let featured = data.find(item =>
                    item.title.toLowerCase().includes('coding camp')
                );

                if (!featured && data.length > 0) {
                    featured = data[0];
                }

                const others = data.filter(item => item.id !== (featured?.id));

                setEvents(data);
                setFeaturedEvent(featured);
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

    if (error) {
        return null;
    }

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
                        Upcoming Events
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Jangan lewatkan kesempatan untuk berkembang bersama SaDaCom. Ikuti event dan program terbaru kami.
                    </p>
                </motion.div>

                {/* FEATURED EVENT HIGHLIGHT */}
                {featuredEvent && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-20"
                    >
                        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-none flex flex-col p-8 md:p-12 transition-colors group">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="flex flex-col xl:flex-row gap-12 mb-12 relative z-10">
                                {/* Image Side */}
                                <div className="xl:w-5/12 relative">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-[16/9] xl:aspect-[4/3]"
                                    >
                                        <img
                                            src={featuredEvent.image_url || 'https://via.placeholder.com/800x600?text=Featured+Event'}
                                            alt={featuredEvent.title}
                                            className="w-full h-full object-cover transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-xl flex items-center gap-1 shadow-lg shadow-yellow-500/20">
                                                <Star size={14} fill="currentColor" /> FEATURED
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Side */}
                                <div className="xl:w-7/12 flex flex-col justify-center text-center xl:text-left">
                                    <div className="flex items-center justify-center xl:justify-start gap-3 mb-4">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wide text-xs uppercase px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800/50 flex items-center gap-2">
                                            <Tag size={12} /> {featuredEvent.category || 'Special Event'}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                                        {featuredEvent.title}
                                    </h3>

                                    {featuredEvent.subtitle && (
                                        <p className="text-slate-600 dark:text-slate-300 text-xl mb-10 font-medium leading-relaxed max-w-2xl mx-auto xl:mx-0">
                                            {featuredEvent.subtitle}
                                        </p>
                                    )}

                                    {/* SPECIAL REWARDS SECTION - UPDATED LOGIC */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 text-left">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-yellow-100 dark:border-slate-700 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white shadow-lg shadow-orange-500/20">
                                                <Gift size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">25 Merchandise</h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                                                    <span className="font-bold text-orange-600 dark:text-orange-400">Khusus Top 3 Community</span>. Eksklusif Dicoding.
                                                </p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-purple-100 dark:border-slate-700 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-lg shadow-pink-500/20">
                                                <Trophy size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">Secret Reward</h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                                                    Hadiah spesial jika komunitas masuk <span className="font-bold text-purple-600 dark:text-purple-400">Top 3 se-Indonesia</span>.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* CENTERED AND WIDE CTA SECTION */}
                                    <div className="flex flex-col items-center gap-8 mt-auto w-full">
                                        {featuredEvent.registration_deadline && (
                                            <div className="w-full">
                                                <CountdownTimer deadline={featuredEvent.registration_deadline} />
                                            </div>
                                        )}

                                        <div className="w-full">
                                            {featuredEvent.cta_link && (
                                                <motion.a
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    href={featuredEvent.cta_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 md:py-5 md:px-8 rounded-2xl font-bold text-center flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-base md:text-xl tracking-tight"
                                                >
                                                    Daftar Sekarang <ArrowRight size={24} />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* LEARNING PATHS VISUALIZATION */}
                            <LearningPaths />

                        </div>
                    </motion.div>
                )}


                {/* SIMPLIFIED OTHER EVENTS */}
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
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal item={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default EventSection;
