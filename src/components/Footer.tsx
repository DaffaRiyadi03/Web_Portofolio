import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'framer-motion';
import { 
  Menu, X, Code, Download, Mail, Github, Linkedin, ArrowRight, 
  Briefcase, Lightbulb, Target, Users, GraduationCap, Calendar, 
  MapPin, Send, Heart, ExternalLink 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Muhammad Daffa Riyadi. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-4 md:mt-0">
            Dibuat dengan <Heart size={14} className="text-red-500" /> menggunakan React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;