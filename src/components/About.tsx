import React from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: "Goal-Oriented",
      description: "Focused on delivering results and achieving objectives"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an Informatics Engineering student who is passionate about web development, I have a special interest in front-end user interface development. I am committed to learning and improving my skills in creating attractive and responsive interfaces. Currently, I am also actively seeking professional mentorship to accelerate my career development in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sebagai mahasiswa Teknik Informatika, saya telah mengembangkan fondasi yang kuat dalam pemrograman, 
              struktur data, dan prinsip-prinsip rekayasa perangkat lunak. Perjalanan akademis saya telah 
              dilengkapi dengan proyek-proyek praktis dan pengalaman dalam pengembangan web.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Saya tertarik pada pengembangan full-stack, dengan pengalaman dalam framework JavaScript modern, 
              teknologi backend, dan manajemen database. Saya percaya pada pembelajaran berkelanjutan dan 
              selalu mengikuti tren industri terkini.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tujuan saya adalah memanfaatkan keterampilan teknis dan kreativitas untuk membangun solusi inovatif 
              yang menyelesaikan masalah dunia nyata dan memberikan dampak positif bagi pengguna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;