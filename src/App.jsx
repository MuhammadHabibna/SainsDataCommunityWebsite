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
    X
} from 'lucide-react';

import heroImage from './assets/Yuni_Shingyouji.jpg';
import certificateImage from './assets/sertifikat_course_86_4086292_221024122021_page-0001.jpg';
import communityPhoto from './assets/Lego The Matrix.jpg';
import logo from './assets/logo.jpg';
import bankSoal from './data/bank_soal';
import { supabase } from './lib/supabaseClient';
import NewsSection from './components/NewsSection';
// MD5 import removed for security


// --- CONFIGURATION & ASSETS ---
const assets = {
    // Ganti URL ini nanti dengan link gambar asli
    logo: logo,
    heroImage: heroImage,
    certificateImage: certificateImage,
    communityPhoto: communityPhoto,
};

const config = {
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuv2Qr9uEA41A2jIkxFRHIpaUruDa_mtqoNl5q3StByTAAlQ/viewform",
    // SECRET_SALT removed from client-side config for security
};

// --- COMPONENTS ---

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'Game', href: '#game' },
        { name: 'Benefit', href: '#benefit' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src={assets.logo} alt="SaDaCom Logo" className="w-8 h-8 rounded-lg object-cover" />
                        <span className="font-bold text-xl text-slate-900 dark:text-white">SaDaCom</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href={config.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
                        >
                            Daftar Sekarang
                        </a>
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
                            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={config.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                            >
                                Daftar Sekarang
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const TypewriterEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50); // Speed of typing

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="font-mono text-blue-600 dark:text-blue-400">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 lg:mb-0 text-center lg:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                            Akselerasi Kariermu Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Gen AI Engineer</span>
                        </h1>
                        <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 h-16 sm:h-auto">
                            <TypewriterEffect text="Komunitas Sains Data. Didukung Dicoding. 100% Gratis." />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={config.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
                            >
                                Gabung Sekarang <ArrowRight className="ml-2" size={20} />
                            </a>
                            <a
                                href="#game"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            >
                                Coba Mini Game <Code2 className="ml-2" size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                        <img
                            src={assets.heroImage}
                            alt="Suasana Coding SaDaCom"
                            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white dark:border-slate-800"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const PythonSpeedRun = () => {
    const [gameState, setGameState] = useState('start'); // start, inputName, playing, finished
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState(null); // correct, wrong
    const [gameQuestions, setGameQuestions] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [streak, setStreak] = useState(0); // New: Combo Streak

    useEffect(() => {
        // Load leaderboard from Supabase
        const fetchLeaderboard = async () => {
            const { data, error } = await supabase
                .from('leaderboard')
                .select('*')
                .order('score', { ascending: false })
                .limit(5);

            if (data) {
                setLeaderboard(data);
            } else if (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeaderboard();
    }, []);

    const saveScore = async () => {
        const name = playerName || 'Anonymous';
        console.log("Submitting score for:", name);

        try {
            // Security Update:
            // We no longer send a client-side signature or score.
            // The server will calculate the score purely based on the answers provided.
            // This prevents users from tampering with the score or forging signatures.

            const response = await fetch('/api/submit-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerName: name,
                    answers: userAnswers,
                }),
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                const text = await response.text();
                console.error("Server Error:", text);
                throw new Error(`Server Error (${response.status}): ${text.slice(0, 50)}...`);
            }

            const result = await response.json();
            console.log("Score submitted successfully:", result);

            // Update local score with server-validated score
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
            let msg = error.message;
            if (msg.includes("Unexpected end of JSON input") || msg.includes("Server Error (404)")) {
                msg = "API tidak jalan di localhost biasa. Gunakan 'vercel dev' atau deploy ke Vercel.";
            }
            alert(`Gagal menyimpan skor: ${msg}`);
        }
    };

    // Function to shuffle array
    const shuffleQuestions = () => {
        return [...bankSoal].sort(() => 0.5 - Math.random());
    };

    const handleStartClick = () => {
        setGameState('inputName');
    };

    const startGame = () => {
        if (!playerName.trim()) {
            alert("Masukkan nama kamu dulu ya!");
            return;
        }
        const selectedQuestions = shuffleQuestions();
        setGameQuestions(selectedQuestions);
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
        // Record answer
        const currentQuestion = gameQuestions[currentQuestionIndex];
        setUserAnswers(prev => [...prev, {
            questionId: currentQuestion.id,
            selectedAnswerIndex: index
        }]);

        if (index === currentQuestion.answer) {
            // Calculate Points
            let points = 10;
            if (currentQuestion.difficulty === 'Medium') points = 13;
            if (currentQuestion.difficulty === 'Hard') points = 16;

            // Combo Bonus: +2 for every streak beyond 1
            const currentStreak = streak + 1;
            const comboBonus = (currentStreak - 1) * 2;
            const totalPoints = points + comboBonus;

            setScore((prev) => prev + totalPoints);
            setStreak(currentStreak);
            setFeedback('correct');
        } else {
            setStreak(0); // Reset Streak
            setFeedback('wrong');
        }

        setTimeout(() => {
            setFeedback(null);
            // Endless Mode Logic
            if (currentQuestionIndex < gameQuestions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
            } else {
                // Reshuffle and restart index to loop questions
                setGameQuestions(shuffleQuestions());
                setCurrentQuestionIndex(0);
            }
        }, 500);
    };

    const resetGame = () => {
        setGameState('start');
        setScore(0);
        setTimeLeft(60);
        setCurrentQuestionIndex(0);
        setGameQuestions([]);
        setPlayerName('');
        setUserAnswers([]);
        setStreak(0);
    };

    return (
        <section id="game" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Python Speed Run 🐍</h2>
                    <p className="text-slate-600 dark:text-slate-400">Uji kemampuan dasar Python-mu dalam 60 detik!</p>
                </div>

                <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700 font-mono relative">
                    {/* Terminal Header */}
                    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-slate-400">user@sadacom:~/python-quiz</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-8 min-h-[400px] flex flex-col items-center justify-center text-green-400">
                        {gameState === 'start' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                                <Terminal size={64} className="mx-auto mb-6 text-blue-500" />
                                <h3 className="text-2xl font-bold mb-6 text-white">Siap menjadi Python Master?</h3>

                                <div className="flex justify-center mb-8">
                                    <button
                                        onClick={handleStartClick}
                                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                                    >
                                        <Play size={20} /> Mulai Game
                                    </button>
                                </div>

                                {/* Leaderboard Preview */}
                                {leaderboard.length > 0 && (
                                    <div className="max-w-md mx-auto bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                                        <h4 className="text-yellow-400 font-bold mb-3 flex items-center justify-center gap-2">
                                            <Award size={16} /> Top 5 Leaderboard
                                        </h4>
                                        <div className="space-y-2">
                                            {leaderboard.map((entry, idx) => (
                                                <div key={idx} className="flex justify-between text-sm text-slate-300 border-b border-slate-700/50 pb-1 last:border-0">
                                                    <span>{idx + 1}. {entry.name}</span>
                                                    <span className="font-mono text-green-400">{entry.score} pts</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {gameState === 'inputName' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full max-w-md">
                                <h3 className="text-xl font-bold mb-6 text-white">Masukkan Nama Kamu</h3>
                                <input
                                    type="text"
                                    value={playerName}
                                    onChange={(e) => setPlayerName(e.target.value)}
                                    placeholder="Nama / Nickname"
                                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white mb-6 focus:outline-none focus:border-blue-500 text-center text-lg"
                                    onKeyDown={(e) => e.key === 'Enter' && startGame()}
                                    autoFocus
                                />
                                <button
                                    onClick={startGame}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all w-full"
                                >
                                    Mulai!
                                </button>
                            </motion.div>
                        )}

                        {gameState === 'playing' && gameQuestions.length > 0 && (
                            <div className="w-full max-w-lg">
                                <div className="flex justify-between mb-8 text-lg font-bold border-b border-slate-700 pb-4">
                                    <span className="text-blue-400">Score: {score}</span>
                                    {streak > 1 && (
                                        <span className="text-orange-400 animate-pulse font-bold">
                                            COMBO x{streak}! (+{(streak - 1) * 2})
                                        </span>
                                    )}
                                    <span className={`${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-yellow-400'}`}>
                                        Time: {timeLeft}s
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-slate-400 text-sm">Question {score / 10 + 1}</span>
                                        <span className={`text-xs px-2 py-1 rounded ${gameQuestions[currentQuestionIndex].difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                                            gameQuestions[currentQuestionIndex].difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                                                'bg-red-900 text-red-300'
                                            }`}>
                                            {gameQuestions[currentQuestionIndex].difficulty}
                                        </span>
                                    </div>
                                    <p className="text-xl text-white mb-6">
                                        <span className="text-blue-500">{'>>>'}</span> {gameQuestions[currentQuestionIndex].question}
                                    </p>
                                    <div className="grid gap-4">
                                        {gameQuestions[currentQuestionIndex].options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                className={`w-full text-left px-4 py-3 rounded border transition-all ${feedback
                                                    ? idx === gameQuestions[currentQuestionIndex].answer
                                                        ? 'bg-green-900/50 border-green-500 text-green-200'
                                                        : 'bg-red-900/50 border-red-500 text-red-200'
                                                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-blue-500 text-slate-300'
                                                    }`}
                                                disabled={feedback !== null}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {gameState === 'finished' && (
                            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center w-full">
                                <Award size={64} className="mx-auto mb-6 text-yellow-500" />
                                <h3 className="text-3xl font-bold mb-2 text-white">Game Over!</h3>
                                <p className="text-xl text-slate-300 mb-8">
                                    Hebat {playerName}! Skor Akhir: <span className="text-green-400 font-bold">{score}</span>
                                </p>

                                {/* Leaderboard Table */}
                                <div className="max-w-md mx-auto bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-8">
                                    <h4 className="text-yellow-400 font-bold mb-4 flex items-center justify-center gap-2">
                                        <Award size={20} /> Leaderboard
                                    </h4>
                                    <div className="space-y-3">
                                        {leaderboard.map((entry, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-between items-center p-2 rounded ${entry.name === playerName && entry.score === score ? 'bg-blue-900/30 border border-blue-500/30' : ''}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${idx === 0 ? 'bg-yellow-500 text-black' :
                                                        idx === 1 ? 'bg-slate-400 text-black' :
                                                            idx === 2 ? 'bg-orange-700 text-white' : 'bg-slate-700 text-slate-300'
                                                        }`}>
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-slate-200 font-medium">{entry.name}</span>
                                                </div>
                                                <span className="font-mono text-green-400 font-bold">{entry.score}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center">
                                    <button
                                        onClick={resetGame}
                                        className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                                    >
                                        <RotateCcw size={20} /> Main Lagi
                                    </button>
                                    <a
                                        href={config.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
                                    >
                                        Daftar Komunitas
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
        <section id="roadmap" className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Roadmap Menuju Gen AI</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Kurikulum yang disusun sistematis untuk membawamu dari nol hingga mahir.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(step.icon, { size: 32 })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{step.desc}</p>
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
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:flex items-center justify-between gap-16">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Dapatkan Sertifikat & <br />
                            <span className="text-blue-400">Token Kelas Gratis</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Bangun portofolio profesionalmu dengan sertifikat resmi dari SaDaCom dan Dicoding.
                            Selesaikan tantangan dan dapatkan akses premium ke materi pembelajaran berstandar industri.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Sertifikat Kelulusan Resmi",
                                "Token Kelas Dicoding Academy",
                                "Badge Digital untuk LinkedIn"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-400" size={24} />
                                    <span className="text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 flex justify-center perspective-1000">
                        <motion.div
                            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                            className="relative group cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <img
                                src={assets.certificateImage}
                                alt="Contoh Sertifikat"
                                className="relative rounded-xl shadow-2xl border-4 border-slate-700 w-full max-w-md mx-auto"
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
        { title: "Kurikulum Industri", desc: "Materi relevan dengan kebutuhan pasar kerja saat ini.", icon: <Code2 /> },
        { title: "Networking Luas", desc: "Terhubung dengan praktisi dan sesama learner.", icon: <Users /> },
        { title: "Study Group", desc: "Belajar bareng mentor yang siap membantu.", icon: <Users /> },
        { title: "Token Gratis", desc: "Akses kelas berbayar tanpa biaya sepeserpun.", icon: <Award /> },
    ];

    return (
        <section id="benefit" className="py-20 bg-white dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Benefit Bergabung</h2>
                    <p className="text-slate-600 dark:text-slate-400">Lebih dari sekadar komunitas, ini adalah akselerator kariermu.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                {React.cloneElement(item.icon, { size: 24 })}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="SaDaCom Logo" className="w-8 h-8 rounded-lg object-cover" />
                    <span className="font-bold text-xl text-slate-900 dark:text-white">SaDaCom</span>
                </div>

                <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Sains Data Community. All rights reserved.</p>
                    <div className="flex gap-4 justify-center md:justify-end mt-4">
                        <a href="https://www.instagram.com/sadacommunity?igsh=MThyZXpvZXB6Ym9mNw==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Discord</a>
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
        <div className={`min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            <main>
                <Hero />
                <NewsSection />
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
