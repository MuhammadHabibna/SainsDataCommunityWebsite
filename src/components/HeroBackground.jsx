import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base Background */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"></div>

            {/* Animated Vector Shapes */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                {/* Top Left - Large Organic Wave */}
                <motion.div
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    animate={{
                        x: [0, 20, 0],
                        y: [0, 30, 0],
                        opacity: 1
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-3xl opacity-70 bg-gradient-to-tr from-blue-400 to-cyan-300 dark:from-blue-900 dark:to-cyan-900"
                />

                {/* Bottom Right - Large Organic Wave */}
                <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                        opacity: 1
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-3xl opacity-70 bg-gradient-to-bl from-purple-400 to-pink-300 dark:from-purple-900 dark:to-pink-900"
                />

                {/* Floating Geometric Shapes */}
                <motion.svg
                    className="absolute top-[10%] right-[15%] w-64 h-64 text-blue-200 dark:text-blue-900/30"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.6C60.4,46.3,49.9,56.1,38,64.2C26.1,72.3,12.8,78.7,-0.3,79.2C-13.4,79.7,-26.5,74.3,-38.3,66C-50.1,57.7,-60.7,46.5,-69.3,33.5C-77.9,20.5,-84.5,5.7,-82.9,-8.3C-81.3,-22.3,-71.5,-35.5,-59.6,-45.5C-47.7,-55.5,-33.7,-62.3,-19.9,-69.9C-6.1,-77.5,7.5,-85.9,20.9,-86.6C34.3,-87.3,47.5,-80.3,44.7,-76.4Z" transform="translate(100 100)" />
                </motion.svg>

                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[20%] left-[10%]"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-50 dark:opacity-30">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.6 }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(147, 51, 234)', stopOpacity: 0.6 }} />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="40" stroke="url(#grad1)" strokeWidth="4" fill="transparent" />
                        <circle cx="50" cy="50" r="20" fill="url(#grad1)" />
                    </svg>
                </motion.div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            </div>
        </div>
    );
};

export default HeroBackground;
