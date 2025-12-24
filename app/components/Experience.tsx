'use client';

import { Briefcase, Calendar } from 'lucide-react';

const experience = {
  company: 'American Circuits Inc.',
  location: 'Charlotte, NC',
  title: 'Software Engineer',
  period: 'Jul 2025 – Present',
  achievements: [
    {
      title: 'NEXUS - Enterprise Traveler Management System',
      description:
        'Lead engineer for an enterprise-grade traveler management and workflow automation system used across manufacturing operations.',
      highlights: [
        'Designed and developed the entire platform using Next.js, FastAPI, PostgreSQL, Docker, Nginx, and secure Linux-based deployments',
        'Implemented QR/barcode-based traveler tracking, step-level workflow enforcement, audit trails, operator tracking, and real-time production analytics',
        'Reduced process delays and communication gaps across departments through automated routing and data-driven decision tools',
      ],
    },
    {
      title: 'ACI Dashboard - Enterprise Operations Platform',
      description:
        'Architect and developer of a centralized operations and analytics system for production monitoring, cybersecurity visibility, and system reporting.',
      highlights: [
        'Built microservices and automation engines using Python, TypeScript, PostgreSQL, and Docker',
        'Integrated AI-powered insights, auditing utilities, penetration testing tools, and system health monitoring into one unified interface',
      ],
    },
    {
      title: 'ACI ChatGPT - Internal AI Assistant',
      description:
        'Developed internal AI automation assistant used for reporting, explanation generation, task automation, and production analysis.',
      highlights: [
        'Consolidated multiple PostgreSQL databases into a unified production server, improving system reliability and reducing maintenance by 40%',
        'Improved system performance by 30% through backend optimization, caching logic, and AI-driven process prediction',
      ],
    },
  ],
};

export function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Work Experience</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building enterprise solutions that drive efficiency and digital transformation
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card">
          {/* Company Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">{experience.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{experience.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            {experience.achievements.map((achievement, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
                <ul className="space-y-2 ml-4">
                  {achievement.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
