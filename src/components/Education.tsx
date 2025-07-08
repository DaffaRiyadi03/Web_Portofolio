import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Teknik Informatika",
      institution: "Universitas Pasundan",
      location: "Jl. Dr. Setiabudi No.193, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153",
      period: "2022 - Presernt",
      gpa: "3.55/4.0",
      relevantCourses: ["Struktur Data & Algoritma", "Rekayasa Perangkat Lunak", "Sistem Basis Data", "Pengembangan Web", "Pemrograman Berorientasi Objek", "Sistem Informasi"]
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My educational background and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{edu.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-900">GPA: {edu.gpa}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Relevant Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <span key={courseIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;