import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sistem Manajemen Perpustakaan",
      description: "Aplikasi web untuk manajemen perpustakaan dengan fitur peminjaman, katalog, dan laporan. Dibangun menggunakan Laravel dan MySQL.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "Bootstrap", "PHP"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Website Portfolio Personal",
      description: "Website portfolio responsif yang menampilkan proyek dan keterampilan. Dibangun dengan React, Framer Motion, dan Tailwind CSS.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Aplikasi Kalkulator Web",
      description: "Aplikasi kalkulator web dengan operasi matematika dasar. Dibangun menggunakan HTML, CSS, dan JavaScript vanilla.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">My Projects</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Some selected projects that I have worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed h-16">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-cyan-400/10 text-cyan-300 px-2.5 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink} 
                    className="flex-1 inline-flex items-center justify-center bg-slate-700/80 text-slate-300 py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2"/>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex-1 inline-flex items-center justify-center bg-slate-700/80 text-slate-300 py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2"/>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;