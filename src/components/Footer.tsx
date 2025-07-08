import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Muhammad Daffa Riyadi</h3>
            <p className="text-gray-400 mb-4">
              Mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan menciptakan solusi inovatif.
            </p>
            <p className="text-gray-400">
              Mari membangun sesuatu yang luar biasa bersama!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#education" className="hover:text-white transition-colors duration-200">Education</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">daffariyadi@email.com</p>
            <p className="text-gray-400 mb-2">+62 812 3456 7890</p>
            <p className="text-gray-400">Yogyakarta, Indonesia</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Muhammad Daffa Riyadi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-4 md:mt-0">
              Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;