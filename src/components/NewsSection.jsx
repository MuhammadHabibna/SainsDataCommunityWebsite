import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700 text-center">
            {timerComponents.length ? (
                <div className="text-sm font-mono text-cyan-400">
                    <span className="block text-xs text-gray-400 mb-1">Pendaftaran Ditutup dalam:</span>
                    <div className="flex justify-center gap-2">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">{timeLeft.days}</span>
                            <span className="text-[10px] uppercase text-gray-500">Hari</span>
                        </div>
                        <span className="text-xl font-bold text-gray-600">:</span>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase text-gray-500">Jam</span>
                        </div>
                        <span className="text-xl font-bold text-gray-600">:</span>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase text-gray-500">Menit</span>
                        </div>
                        <span className="text-xl font-bold text-gray-600">:</span>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[10px] uppercase text-gray-500">Detik</span>
                        </div>
                    </div>
                </div>
            ) : (
                <span className="text-red-400 font-bold text-sm">Pendaftaran Ditutup</span>
            )}
        </div>
    );
};

const NewsModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors z-10"
                >
                    <X size={20} className="text-gray-400" />
                </button>

                <div className="relative h-64 w-full">
                    <img
                        src={item.image_url || 'https://via.placeholder.com/800x400?text=SaDaCom+News'}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent h-32"></div>
                    <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30 flex items-center gap-1 w-fit mb-2">
                            <Tag size={12} />
                            {item.category || 'General'}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <Calendar size={16} />
                        <span>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>

                    {item.subtitle && (
                        <p className="text-lg text-gray-300 font-medium mb-4 italic border-l-4 border-cyan-500 pl-4">
                            {item.subtitle}
                        </p>
                    )}

                    <div className="prose prose-invert max-w-none text-gray-300 mb-8 whitespace-pre-wrap">
                        {item.content}
                    </div>

                    {item.registration_deadline && (
                        <div className="mb-8">
                            <CountdownTimer deadline={item.registration_deadline} />
                        </div>
                    )}

                    {item.cta_link && (
                        <a
                            href={item.cta_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
                        >
                            {item.cta_text || 'Buka Tautan'} <ArrowRight className="inline ml-2" size={20} />
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedNews, setSelectedNews] = useState(null);
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data, error } = await supabase
                    .from('announcements')
                    .select('*')
                    .eq('is_active', true)
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setNews(data);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Gagal memuat berita.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // -10 buffer
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Initial check
            checkScroll();
            // Check again after data load/resize
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [news]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth; // Scroll one screen width
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return (
            <div className="py-20 bg-gray-900 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
                <p className="mt-4 text-gray-400">Memuat berita...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 bg-gray-900 text-center text-red-400">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        News & Opportunities
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Update terbaru seputar komunitas, event, dan peluang karir di dunia Data Science & AI.
                    </p>
                </motion.div>

                {news.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        <p>Belum ada berita terbaru.</p>
                    </div>
                ) : (
                    <div className="relative group/carousel">
                        {/* Navigation Buttons */}
                        {showLeftArrow && (
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 -ml-4 md:-ml-12"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        {showRightArrow && (
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 -mr-4 md:-mr-12"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}

                        {/* Shadow Indicators - Hidden on Mobile */}
                        {showLeftArrow && (
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
                        )}
                        {showRightArrow && (
                            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
                        )}

                        {/* Carousel Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-8 px-2 scroll-smooth"
                        >
                            {news.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full"
                                >
                                    {/* Image Container - Reduced Height */}
                                    <div className="relative h-36 overflow-hidden shrink-0">
                                        <img
                                            src={item.image_url || 'https://via.placeholder.com/400x200?text=SaDaCom+News'}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                                            }}
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-cyan-400 text-[10px] font-semibold rounded-full border border-cyan-500/30 flex items-center gap-1">
                                                <Tag size={10} />
                                                {item.category || 'General'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content - Reduced Padding */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-gray-500 text-[10px] mb-2">
                                            <Calendar size={12} />
                                            <span>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>

                                        {item.subtitle && (
                                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                                                {item.subtitle}
                                            </p>
                                        )}

                                        <div className="flex-grow">
                                            <p className="text-gray-300 text-xs line-clamp-3 mb-1">
                                                {item.content}
                                            </p>
                                            <button
                                                onClick={() => setSelectedNews(item)}
                                                className="text-cyan-400 text-[10px] hover:text-cyan-300 hover:underline transition-colors"
                                            >
                                                Baca Selengkapnya
                                            </button>
                                        </div>

                                        {/* Countdown Timer */}
                                        {item.registration_deadline && (
                                            <div className="mt-3">
                                                <CountdownTimer deadline={item.registration_deadline} />
                                            </div>
                                        )}

                                        {/* CTA Button - Always Visible */}
                                        {item.cta_link && (
                                            <div className="mt-4 pt-3 border-t border-gray-700/50">
                                                <a
                                                    href={item.cta_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold group/btn"
                                                >
                                                    {item.cta_text || 'Lihat Detail'}
                                                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default NewsSection;
