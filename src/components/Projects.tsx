import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sistem Manajemen Perpustakaan",
      description: "Aplikasi web untuk manajemen perpustakaan dengan fitur peminjaman buku, katalog, dan laporan. Dibangun menggunakan Laravel dan MySQL dengan antarmuka yang user-friendly.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "Bootstrap", "PHP", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      date: "Dec 2023"
    },
    {
      title: "Website Portfolio Personal",
      description: "Website portfolio responsif yang menampilkan proyek-proyek dan keterampilan. Dibangun dengan React dan Tailwind CSS dengan desain modern dan interaktif.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "#",
      githubLink: "#",
      date: "Oct 2023"
    },
    {
      title: "Aplikasi Kalkulator Sederhana",
      description: "Aplikasi kalkulator web dengan operasi matematika dasar dan antarmuka yang intuitif. Dibangun menggunakan HTML, CSS, dan JavaScript vanilla.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveLink: "#",
      githubLink: "#",
      date: "Aug 2023"
    },
    {
      title: "Sistem Informasi Mahasiswa",
      description: "Aplikasi web untuk mengelola data mahasiswa dengan fitur CRUD lengkap. Menggunakan PHP native dengan database MySQL dan desain responsif.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      date: "Jun 2023"
    },
    {
      title: "Landing Page Bisnis",
      description: "Landing page responsif untuk bisnis lokal dengan desain modern dan optimasi SEO. Menggunakan HTML, CSS, dan JavaScript dengan fokus pada konversi.",
      image: "https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveLink: "#",
      githubLink: "#",
      date: "Apr 2023"
    },
    {
      title: "Game Sederhana dengan JavaScript",
      description: "Game puzzle sederhana yang dibangun dengan JavaScript vanilla. Menampilkan logika permainan, skor, dan antarmuka yang menarik untuk hiburan.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["JavaScript", "HTML", "CSS", "Canvas API"],
      liveLink: "#",
      githubLink: "#",
      date: "Feb 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveLink} 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink} 
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200 text-center"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;