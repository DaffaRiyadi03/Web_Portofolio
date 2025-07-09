import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Punya pertanyaan atau proyek menarik? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200"
              placeholder="Your Name"
            />
            <input
              type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200"
              placeholder="Your Email"
            />
          </div>
          
          <textarea
            name="message" rows={5} value={formData.message} onChange={handleChange} required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 resize-none"
            placeholder="Your Message..."
          />
          
          <button
            type="submit"
            className="group w-full relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-cyan-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-cyan-600 shadow-lg shadow-cyan-500/20"
          >
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center gap-2">
              <Send size={20} />
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;