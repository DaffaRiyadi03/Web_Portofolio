import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Code className="w-8 h-8 text-cyan-400" />, title: "Clean Code", description: "Menulis kode yang efisien dan mudah dikelola sesuai praktik terbaik." },
    { icon: <Lightbulb className="w-8 h-8 text-purple-400" />, title: "Creative Solutions", description: "Selalu mengeksplorasi teknologi baru untuk solusi inovatif." },
    { icon: <Target className="w-8 h-8 text-green-400" />, title: "Result-Oriented", description: "Fokus pada pencapaian tujuan dan memberikan hasil yang terukur." },
    { icon: <Users className="w-8 h-8 text-orange-400" />, title: "Team Player", description: "Pola pikir kolaboratif dengan keterampilan komunikasi yang kuat." }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="about" 
      className="py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Mahasiswa Teknik Informatika dengan hasrat mendalam pada pengembangan web, berfokus pada pembuatan antarmuka pengguna yang menarik dan responsif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-cyan-400" />
              My Journey
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Sebagai mahasiswa Teknik Informatika, saya telah membangun fondasi yang kuat dalam pemrograman, struktur data, dan prinsip-prinsip rekayasa perangkat lunak. Perjalanan akademis saya diperkaya dengan proyek-proyek praktis dan pengalaman langsung dalam pengembangan web modern.
              </p>
              <p>
                Saya sangat tertarik pada pengembangan full-stack, dengan keahlian dalam framework JavaScript modern, teknologi backend, dan manajemen basis data. Saya percaya pada pembelajaran berkelanjutan dan selalu antusias mengikuti tren industri terkini untuk terus berkembang.
              </p>
            </div>
          </motion.div>

          <motion.div className="md:col-span-2 grid grid-cols-2 gap-6" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/80 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-slate-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;