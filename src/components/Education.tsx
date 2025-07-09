import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const Education: React.FC = () => {
  const education = {
    degree: "Teknik Informatika",
    institution: "Universitas Pasundan",
    location: "Bandung, Jawa Barat",
    period: "2022 - Sekarang",
    description: "Mempelajari dasar-dasar ilmu komputer, pengembangan perangkat lunak, dan teknologi web. Aktif dalam proyek-proyek akademis dan mandiri untuk mengasah keterampilan praktis.",
    gpa: "3.55/4.0",
    relevantCourses: ["Struktur Data", "Rekayasa Perangkat Lunak", "Basis Data", "Pengembangan Web", "OOP"]
  };

  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">Education</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Perjalanan akademis dan landasan pengetahuan saya.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative pl-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute left-0 top-1 h-full w-0.5 bg-slate-700"></div>
            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-cyan-400 rounded-full ring-8 ring-slate-900"></div>
            
            <div className="bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700/80">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <span className="text-sm font-medium text-cyan-400">{education.gpa} GPA</span>
              </div>
              <p className="text-slate-300 font-semibold mb-3">{education.institution}</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-2"><Calendar size={16} /> {education.period}</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> {education.location}</span>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6">{education.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Relevant Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course, courseIndex) => (
                    <span key={courseIndex} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;