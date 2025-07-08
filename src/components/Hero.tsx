import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Muhammad Daffa <span className="text-blue-600">Riyadi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Teknik Informatika Student | Web Developer
          </p>

          {/* Summary */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika semester 6 yang passionate dalam pengembangan web dan teknologi. 
              Memiliki pengalaman dalam berbagai bahasa pemrograman dan framework modern. Saya senang belajar teknologi baru 
              dan berkontribusi dalam proyek-proyek yang bermakna.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg">
              <Download size={20} />
              Download CV
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2">
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;