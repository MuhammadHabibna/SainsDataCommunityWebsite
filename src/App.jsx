import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    Code2,
    Award,
    Zap,
    Users,
    Moon,
    Sun,
    CheckCircle2,
    ArrowRight,
    Play,
    RotateCcw,
    Menu,
    X,
    ChevronRight,
    Sparkles,
    Cpu,
    Globe,
    Layers
} from 'lucide-react';

import heroImage from './assets/Yuni_Shingyouji.jpg'; // Kept specifically if needed later, but unused in new Hero
import certificateImage from './assets/sertifikat_course_86_4086292_221024122021_page-0001.jpg';
import communityPhoto from './assets/Lego The Matrix.jpg';
import logo from './assets/logo.jpg';
import { supabase } from './lib/supabaseClient';
import EventSection from './components/EventSection';
import StatsSection from './components/StatsSection';
import CryptoJS from 'crypto-js';

// --- CONFIGURATION & ASSETS ---
const assets = {
    logo: logo,
    heroImage: heroImage,
    certificateImage: certificateImage,
    communityPhoto: communityPhoto,
};

const config = {
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuv2Qr9uEA41A2jIkxFRHIpaUruDa_mtqoNl5q3StByTAAlQ/viewform",
};

// --- COMPONENTS ---

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Announcement', href: '#announcement' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'Game', href: '#game' },
        { name: 'Benefit', href: '#benefit' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-blue-500/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                            <img src={assets.logo} alt="SaDaCom Logo" className="relative w-9 h-9 rounded-lg object-cover" />
                        </div>
                        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 tracking-tight">SaDaCom</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

                        <button
                            onClick={toggleDarkMode}
                            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-yellow-400"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={config.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Daftar Sekarang <Sparkles size={16} className="text-yellow-300" />
                            </span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 dark:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-900"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                                <a
                                    href={config.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-3 rounded-xl font-bold transition-transform active:scale-95"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors py-32">
            {/* --- ABSTRACT BACKGROUND --- */}

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            {/* Dynamic Mesh Gradients - SIMPLIFIED */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-30"></div>
            </div>

            {/* --- CONTENT --- */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Floating Abstract Element */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
                        <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-full px-5 py-2 flex items-center gap-3 shadow-lg">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400">
                                🚀 Komunitas Sains Data UNESA
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Typography */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 text-slate-900 dark:text-white leading-[0.9]"
                >
                    Future <br />
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.600),theme(colors.cyan.500),theme(colors.purple.600),theme(colors.blue.600))] bg-[length:200%_auto] animate-gradient font-black filter drop-shadow-sm">
                        AI Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Akselerasi kariermu bersama komunitas yang didukung Dicoding. <br className="hidden md:block" />
                    <span className="font-semibold text-slate-900 dark:text-white">Gratis</span>, terstruktur, dan terbuka untuk semua <span className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-500/20 pb-0.5">mahasiswa prodi sains data UNESA</span>.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={config.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/20 dark:shadow-white/10 overflow-hidden flex items-center gap-3 transition-all"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                        <Sparkles size={20} className="text-yellow-400" />
                        Gabung Sekarang
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#roadmap"
                        className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-3"
                    >
                        <Globe size={20} />
                        Explore Roadmap
                    </motion.a>
                </motion.div>



            </div>
        </section>
    );
};

const PythonSpeedRun = () => {
    const [gameState, setGameState] = useState('start');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [gameQuestions, setGameQuestions] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [streak, setStreak] = useState(0);
    const [allQuestions, setAllQuestions] = useState([]);
    const [loadingQuestions, setLoadingQuestions] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/questions');
                if (!response.ok) throw new Error('Failed to fetch questions');
                const data = await response.json();
                setAllQuestions(data);
                setLoadingQuestions(false);
            } catch (error) {
                console.error("Error loading questions:", error);
                setLoadingQuestions(false);
            }
        };

        const fetchLeaderboard = async () => {
            const { data, error } = await supabase
                .from('leaderboard')
                .select('*')
                .order('score', { ascending: false })
                .limit(5);

            if (data) setLeaderboard(data);
        };

        fetchQuestions();
        fetchLeaderboard();
    }, []);

    const saveScore = async () => {
        const name = playerName || 'Anonymous';
        try {
            const SECRET_SALT = 'SADACOM_SECRET_SALT_2024';
            const payload = name + JSON.stringify(userAnswers) + SECRET_SALT;
            const signature = CryptoJS.MD5(payload).toString();

            const response = await fetch('/api/submit-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-signature': signature
                },
                body: JSON.stringify({
                    playerName: name,
                    answers: userAnswers,
                }),
            });

            if (!response.ok) throw new Error('Server Error');
            const result = await response.json();
            setScore(result.score);

            // Refresh leaderboard
            const { data } = await supabase
                .from('leaderboard')
                .select('*')
                .order('score', { ascending: false })
                .limit(5);
            if (data) setLeaderboard(data);

        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    const shuffleQuestions = () => [...allQuestions].sort(() => 0.5 - Math.random());

    const startGame = () => {
        if (loadingQuestions || allQuestions.length === 0) {
            alert("Sedang memuat soal, harap tunggu...");
            return;
        }
        if (!playerName.trim()) {
            alert("Masukkan nama kamu dulu ya!");
            return;
        }
        setGameQuestions(shuffleQuestions());
        setGameState('playing');
        setScore(0);
        setTimeLeft(60);
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setStreak(0);
    };

    useEffect(() => {
        let timer;
        if (gameState === 'playing' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('finished');
            saveScore();
        }
        return () => clearInterval(timer);
    }, [gameState, timeLeft]);

    const handleAnswer = (index) => {
        const currentQuestion = gameQuestions[currentQuestionIndex];
        setUserAnswers(prev => [...prev, {
            questionId: currentQuestion.id,
            selectedAnswerIndex: index
        }]);

        // Verify locally for immediate feedback (server validates again later)
        const SECRET_SALT = 'SADACOM_SECRET_SALT_2024';
        const payload = `${currentQuestion.id}-${index}-${SECRET_SALT}`;
        const checkHash = CryptoJS.MD5(payload).toString();

        if (checkHash === currentQuestion.answerHash) {
            let points = 10;
            if (currentQuestion.difficulty === 'Medium') points = 13;
            if (currentQuestion.difficulty === 'Hard') points = 16;
            const currentStreak = streak + 1;
            const comboBonus = (currentStreak - 1) * 2;
            setScore((prev) => prev + points + comboBonus);
            setStreak(currentStreak);
            setFeedback('correct');
        } else {
            setStreak(0);
            setFeedback('wrong');
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentQuestionIndex < gameQuestions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
            } else {
                setGameQuestions(shuffleQuestions());
                setCurrentQuestionIndex(0);
            }
        }, 300);
    };

    return (
        <section id="game" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold mb-4 uppercase tracking-widest border border-green-200 dark:border-green-800">
                        <Terminal size={12} /> Challenge
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Python Speed Run 🐍</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Uji kemampuan dasar Python-mu dalam 60 detik!</p>
                </div>

                <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 font-mono relative ring-4 ring-slate-200 dark:ring-slate-800 ring-opacity-50">
                    {/* Header */}
                    <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">user@sadacom:~/python-quiz</span>
                        <div className="w-4"></div>
                    </div>

                    <div className="p-8 min-h-[450px] flex flex-col items-center justify-center text-slate-300 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                        {/* CSS-based Grid Background for Terminal */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

                        {gameState === 'start' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full relative z-10">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, delay: 1 }} >
                                    <Code2 size={48} className="mx-auto mb-6 text-green-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-8 text-white">Siap menjadi Python Master?</h3>

                                {gameState === 'start' && !playerName ? (
                                    <div className="flex flex-col gap-4 max-w-xs mx-auto">
                                        <button
                                            onClick={() => setGameState('inputName')}
                                            className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-bold transition-all w-full flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
                                        >
                                            <Play size={18} /> Mulai Game
                                        </button>
                                    </div>
                                ) : null}


                                {leaderboard.length > 0 && (
                                    <div className="mt-12 max-w-sm mx-auto bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                                        <h4 className="text-yellow-400 text-sm font-bold mb-4 uppercase tracking-widest flex items-center justify-center gap-2">
                                            <Award size={14} /> Leaderboard Top 5
                                        </h4>
                                        <div className="space-y-3">
                                            {leaderboard.map((entry, idx) => (
                                                <div key={idx} className="flex justify-between text-sm items-center">
                                                    <span className="flex items-center gap-3">
                                                        <span className={`font-mono font-bold ${idx === 0 ? 'text-yellow-400' : 'text-slate-500'}`}>#{idx + 1}</span>
                                                        <span className="text-slate-300 font-medium">{entry.name}</span>
                                                    </span>
                                                    <span className="font-mono text-green-400">{entry.score}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {gameState === 'inputName' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm text-center relative z-10">
                                <h3 className="text-xl font-bold mb-6 text-white">Masukkan Username</h3>
                                <input
                                    type="text"
                                    value={playerName}
                                    onChange={(e) => setPlayerName(e.target.value)}
                                    placeholder="Nama atau Nickname"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-center placeholder:text-slate-600"
                                    onKeyDown={(e) => e.key === 'Enter' && startGame()}
                                    autoFocus
                                />
                                <button
                                    onClick={startGame}
                                    className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-xl font-bold transition-all w-full"
                                >
                                    Start Game
                                </button>
                                <button
                                    onClick={() => setGameState('start')}
                                    className="mt-4 text-slate-500 hover:text-white text-sm"
                                >
                                    Kembali
                                </button>
                            </motion.div>
                        )}

                        {gameState === 'playing' && gameQuestions.length > 0 && (
                            <div className="w-full max-w-xl relative z-10">
                                <div className="flex justify-between mb-8 pb-4 border-b border-slate-800">
                                    <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs uppercase tracking-wider">Score</span>
                                        <span className="text-2xl font-bold text-white font-mono">{score}</span>
                                    </div>

                                    {streak > 1 && (
                                        <div className="flex flex-col items-center">
                                            <span className="text-orange-500 text-sm font-bold animate-pulse">COMBO X{streak}</span>
                                            <span className="text-orange-500/60 text-xs">+{(streak - 1) * 2} BONUS</span>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-end">
                                        <span className="text-slate-500 text-xs uppercase tracking-wider">Time</span>
                                        <span className={`text-2xl font-bold font-mono ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{timeLeft}s</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`text-[10px] px-2 py-0.5 rounded border ${gameQuestions[currentQuestionIndex].difficulty === 'Easy' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                                            gameQuestions[currentQuestionIndex].difficulty === 'Medium' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' :
                                                'bg-red-500/10 border-red-500/30 text-red-400'
                                            } uppercase tracking-wider font-bold`}>
                                            {gameQuestions[currentQuestionIndex].difficulty}
                                        </span>
                                    </div>
                                    <p className="text-lg md:text-xl text-slate-200 mb-8 font-medium leading-relaxed">
                                        {gameQuestions[currentQuestionIndex].question}
                                    </p>
                                    <div className="grid grid-cols-1 gap-3">
                                        {gameQuestions[currentQuestionIndex].options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 font-mono text-sm ${feedback
                                                    ? CryptoJS.MD5(`${gameQuestions[currentQuestionIndex].id}-${idx}-SADACOM_SECRET_SALT_2024`).toString() === gameQuestions[currentQuestionIndex].answerHash
                                                        ? 'bg-green-500/20 border-green-500/50 text-green-200'
                                                        : 'bg-red-500/10 border-red-500/30 text-red-300 opacity-50'
                                                    : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-slate-300'
                                                    }`}
                                                disabled={feedback !== null}
                                            >
                                                <span className="text-slate-500 mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {gameState === 'finished' && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center w-full max-w-md relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "backOut" }}
                                    className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500"
                                >
                                    <Award size={40} />
                                </motion.div>
                                <h3 className="text-3xl font-bold mb-2 text-white">Time's Up!</h3>
                                <p className="text-slate-400 mb-8">
                                    Nice try, <span className="text-white font-bold">{playerName}</span>!
                                </p>

                                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mx-auto mb-8">
                                    <span className="text-slate-500 text-xs uppercase tracking-wider">Final Score</span>
                                    <div className="text-5xl font-bold text-green-400 font-mono mt-2">{score}</div>
                                </div>

                                <div className="flex gap-3 justify-center">
                                    <button
                                        onClick={() => {
                                            setGameState('start');
                                            setPlayerName('');
                                        }}
                                        className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                                    >
                                        <RotateCcw size={18} /> Main Lagi
                                    </button>
                                    <a
                                        href={config.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-all"
                                    >
                                        Share / Daftar
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Roadmap = () => {
    const steps = [
        { title: "Python Fundamental", desc: "Syntax, Data Types, Logic", icon: <Code2 /> },
        { title: "Basic AI Concepts", desc: "History, Ethics, Use Cases", icon: <Zap /> },
        { title: "Machine Learning", desc: "Supervised & Unsupervised", icon: <Terminal /> },
        { title: "Gen AI & Prompting", desc: "LLMs, RAG, Fine-tuning", icon: <Award /> },
    ];

    return (
        <section id="roadmap" className="py-24 bg-white dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Roadmap Menuju Gen AI</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Langkah sistematis dari pemula hingga mahir.
                    </p>
                </div>

                <div className="relative">
                    {/* Line - Hidden on Mobile */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center group hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 mx-auto bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-sm z-10 relative border border-slate-100 dark:border-slate-700 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(step.icon, { size: 24, strokeWidth: 1.5 })}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CertificateShowcase = () => {
    return (
        <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex items-center justify-between gap-20">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 uppercase tracking-wider">
                            Official Certification
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
                            Bukti Keahlianmu, <br />
                            Diakui Industri.
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            Dapatkan sertifikat resmi dari Dicoding setelah menyelesaikan kelas. Validasi skill kamu dan bangun portofolio yang kuat.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Sertifikat Kelulusan Resmi Dicoding",
                                "Akses Token Kelas Premium Gratis",
                                "Badge Digital & Portofolio Review"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <a
                                href={config.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline"
                            >
                                Lihat Contoh Sertifikat <ChevronRight size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative perspective-1000">
                        {/* Card Reflection/Shadow */}
                        <div className="absolute top-10 left-10 w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl transform rotate-3"></div>

                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 transition-transform duration-500"
                        >
                            <img
                                src={assets.certificateImage}
                                alt="Contoh Sertifikat"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Benefits = () => {
    const benefits = [
        { title: "Kurikulum Industri", desc: "Materi yang relevan dan up-to-date.", icon: <Code2 /> },
        { title: "Networking Luas", desc: "Koneksi dengan praktisi & expert.", icon: <Users /> },
        { title: "Mentorship", desc: "Bimbingan langsung dari mentor.", icon: <Users /> },
        { title: "Gratis Selamanya", desc: "Akses ilmu mahal tanpa biaya.", icon: <Award /> },
    ];

    return (
        <section id="benefit" className="py-24 bg-white dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Why SaDaCom?</h2>
                    <p className="text-slate-600 dark:text-slate-400">Benefit nyata untuk akselerasi kariermu.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-6 border border-slate-100 dark:border-slate-700 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-16 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <img src={assets.logo} alt="SaDaCom Logo" className="w-10 h-10 rounded-xl object-cover shadow-sm bg-slate-50" />
                            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">SaDaCom</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
                            Membangun talenta digital masa depan Indonesia melalui komunitas yang inklusif.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/sadacommunity?igsh=MThyZXpvZXB6Ym9mNw==" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">Instagram</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">Discord</a>
                        </div>
                        <p className="text-slate-400 dark:text-slate-600 text-xs text-center md:text-right">
                            &copy; {new Date().getFullYear()} Sains Data Community. <br className="hidden md:block" /> All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 ${darkMode ? 'dark' : ''} font-sans`}>
            <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            <main>
                <Hero />
                <EventSection />
                <StatsSection />
                <Roadmap />
                <PythonSpeedRun />
                <CertificateShowcase />
                <Benefits />
            </main>
            <Footer />
        </div>
    );
}

export default App;
