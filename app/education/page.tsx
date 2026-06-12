'use client';

import { GraduationCap, Award, CheckCircle } from 'lucide-react';

const education = [
  {
    degree: 'B.A. in Computer Science',
    university: 'University of North Carolina at Charlotte',
    location: 'Charlotte, NC',
    period: 'Jan 2023 – Dec 2025',
    status: 'Graduated',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
      'Software Engineering',
      'Cybersecurity',
      'Machine Learning',
      'Web Development',
      'Computer Architecture',
      'Discrete Mathematics',
    ],
  },
  {
    degree: 'B.Tech in Computer Science (Transfer)',
    university: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    period: 'Sep 2020 – Dec 2022',
    status: 'Transferred',
    coursework: [],
  },
];

const certifications = [
  {
    name: 'AWS Solutions Architect – Associate (Expected Jun 2026)',
    status: 'In Progress',
    category: 'Cloud',
  },
  {
    name: 'Claude Code In Action – Anthropic',
    status: 'Completed',
    category: 'AI',
  },
  {
    name: 'Cisco CCNA – Networking Fundamentals',
    status: 'Completed',
    category: 'Networking',
  },
  {
    name: 'SQL for IT Professionals – O\'Reilly by Pearson',
    status: 'Completed',
    category: 'Database',
  },
  {
    name: 'Coursera: Java OOP',
    status: 'Completed',
    category: 'Programming',
  },
  {
    name: 'Cybersecurity: Introduction to Penetration Testing',
    status: 'Completed',
    category: 'Security',
  },
  {
    name: 'Cybersecurity 2023',
    status: 'Completed',
    category: 'Security',
  },
  {
    name: 'C# Certification: C Sharp Basic Certificate',
    status: 'Completed',
    category: 'Programming',
  },
  {
    name: 'Udemy: C++ Certification',
    status: 'Completed',
    category: 'Programming',
  },
  {
    name: 'Udemy: Front-End Development Ultimate Guide',
    status: 'Completed',
    category: 'Web Development',
  },
];

const categoryColors: Record<string, string> = {
  Cloud: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  Networking: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  Database: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  Security: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  Programming: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  'Web Development': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
  AI: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400',
};

// Left-border accent + icon tint per certification category
const categoryAccent: Record<string, { border: string; icon: string }> = {
  Cloud: { border: 'border-l-blue-500', icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
  Networking: { border: 'border-l-green-500', icon: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
  Database: { border: 'border-l-purple-500', icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
  Security: { border: 'border-l-red-500', icon: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' },
  Programming: { border: 'border-l-orange-500', icon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
  'Web Development': { border: 'border-l-pink-500', icon: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' },
  AI: { border: 'border-l-fuchsia-500', icon: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400' },
};

export default function EducationPage() {
  return (
    <div className="fade-in">
      <section id="certifications" className="section-container px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Education</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {education.map((edu) => (
            <div key={edu.degree} className="card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1 sm:mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{edu.degree}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${edu.status === 'Graduated' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'}`}>{edu.status}</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{edu.university}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.location}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-2">{edu.period}</p>
                  {edu.coursework.length > 0 && (
                  <div className="mt-3 sm:mt-4">
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span key={course} className="px-2.5 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-400">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Certifications & Awards</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Continuous learning across cloud, cybersecurity, databases, and software development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, index) => {
              const accent = categoryAccent[cert.category] ?? categoryAccent.Programming;
              return (
              <div
                key={index}
                className={`card border-l-4 ${accent.border} hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${accent.icon}`}>
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 leading-tight">{cert.name}</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                      <span
                        className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold ${categoryColors[cert.category]}`}
                      >
                        {cert.category}
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${
                        cert.status === 'Completed' || cert.status === 'Course Completed'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {(cert.status === 'Completed' || cert.status === 'Course Completed') && (
                          <CheckCircle className="w-3 h-3" />
                        )}
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
