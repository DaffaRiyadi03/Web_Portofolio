import React, { useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Download, Mail, Github, Linkedin, ArrowRight,
} from 'lucide-react';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    const name = "Muhammad Daffa Riyadi";
    const words = name.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.2 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as Transition,
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as Transition,
        },
    };

    return (
        <section id="hero" className="min-h-screen pt-16 flex items-center justify-center text-center relative overflow-hidden px-4">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative inline-block mb-8"
                >
                    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-cyan-500/10">
                        <img
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -inset-1 w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full ring-4 ring-cyan-400/40 animate-pulse"></div>
                </motion.div>

                <motion.h1
                    ref={ref}
                    className="text-5xl md:text-7xl font-bold mb-4 overflow-hidden flex flex-wrap justify-center items-center"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {words.map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap mr-4 last:mr-0">
                            {word.split('').map((letter, letterIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    variants={child}
                                    className={`inline-block ${word === "Riyadi" ? 'text-cyan-400' : 'text-white'}`}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-lg md:text-xl text-slate-400 mb-8"
                >
                    Informatics Student & Aspiring <span className="text-cyan-400 font-medium">Full-Stack Developer</span>
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
                >
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-cyan-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-cyan-600 shadow-lg shadow-cyan-500/20">
                        <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative flex items-center gap-2">
                            Get In Touch <ArrowRight size={20} />
                        </span>
                    </a>
                    <a href="/path-to-your-cv.pdf" download className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors duration-300">
                        <Download size={20} className="mr-2" />
                        Download CV
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="flex justify-center gap-6"
                >
                    <a href="#" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;