'use client';

import { GraduationCap, Award, CheckCircle } from 'lucide-react';

const education = {
  degree: 'B.A. in Computer Science',
  university: 'University of North Carolina at Charlotte',
  period: 'Jan 2023 – Dec 2025',
};

const certifications = [
  {
    name: 'AWS Certified Solutions Architect Associate – SAA-C03',
    status: 'In Progress',
    category: 'Cloud',
  },
  {
    name: 'Cisco CCNA 200-301 (Networking Fundamentals)',
    status: 'In Progress',
    category: 'Networking',
  },
  {
    name: 'SQL for Any IT Professional – O\'Reilly by Pearson',
    status: 'May 2025',
    category: 'Database',
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
  {
    name: 'Coursera: Java Programming (Primitive Types, Decision Making, OOP)',
    status: 'Completed',
    category: 'Programming',
  },
];

const categoryColors: Record<string, string> = {
  Cloud: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  Networking: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  Database: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  Security: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  Programming: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  'Web Development': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
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
          <div className="card max-w-2xl mx-auto">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{education.degree}</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{education.university}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-2">{education.period}</p>
              </div>
            </div>
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
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 leading-tight">{cert.name}</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                      <span
                        className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold ${categoryColors[cert.category]}`}
                      >
                        {cert.category}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        {cert.status === 'Completed' && (
                          <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                        )}
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
