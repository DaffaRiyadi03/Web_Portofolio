import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const Skills: React.FC = () => {
    const skills = [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">Tools & Technologies</h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Kumpulan teknologi yang saya gunakan untuk mengubah ide menjadi produk digital.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="group flex flex-col items-center gap-4"
                            variants={itemVariants}
                        >
                            <div className="w-24 h-24 p-5 flex items-center justify-center bg-slate-800/50 rounded-2xl border border-slate-700/80 group-hover:border-cyan-400/50 group-hover:bg-slate-800 transition-all duration-300">
                                <img 
                                    src={skill.logo} 
                                    alt={skill.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;