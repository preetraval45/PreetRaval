'use client';

import { Briefcase, Calendar } from 'lucide-react';

const experience = {
  company: 'American Circuits Inc.',
  location: 'Charlotte, NC',
  title: 'Software Engineer',
  period: 'Jun 2025 – Present',
  achievements: [
    {
      title: 'NEXUS - Enterprise Traveler Management System',
      description:
        'Lead engineer for an enterprise-grade traveler management and workflow automation system used across manufacturing operations.',
      highlights: [
        'Designed and developed the entire platform using Next.js, FastAPI, PostgreSQL, Docker, Nginx, and secure Linux-based deployments',
        'Implemented QR/barcode-based traveler tracking, step-level workflow enforcement, audit trails, operator tracking, and real-time production analytics',
        'Reduced process delays and communication gaps across departments through automated routing and data-driven decision tools',
        'Led requirements gathering sessions with stakeholders across departments — authored BRDs and TRDs, delivered technical presentations, and translated business needs into technical specifications',
      ],
    },
    {
      title: 'ACI Forge - Enterprise SaaS Platform',
      description:
        'Architect and developer of a centralized enterprise portal for production oversight, role-based tool access, SSO authentication, and system reporting.',
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
    {
      title: 'Server & Network Infrastructure',
      description:
        'Designed and managed on-premise server architecture to host enterprise platforms, local databases, and internal network services across manufacturing operations.',
      highlights: [
        'Architected a 4-server setup for local hosting of NEXUS, ACI Forge, KOSH, and supporting services',
        'Configured and managed local PostgreSQL database servers, Nginx reverse proxies, and Docker deployments across production servers',
        'Planned and maintained internal network routing, firewall rules, and secure access controls for all hosted platforms',
      ],
    },
    {
      title: 'KOSH - Inventory Management System',
      description:
        'Full-scale inventory management platform with barcode scanning, real-time stock tracking, predictive analytics, and automated alerts.',
      highlights: [
        'Built barcode and QR scanning workflows for real-time inventory tracking and product movement logging',
        'Implemented ML-based inventory forecasting to predict low-stock conditions and trigger automated reorder alerts',
        'Designed role-based permissions and audit logs for full traceability of inventory changes across departments',
      ],
    },
  ],
};

export default function ExperiencePage() {
  return (
    <div className="fade-in">
      <section id="experience" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent">Work Experience</span>
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
                <div key={index} className={`space-y-3 ${index < experience.achievements.length - 1 ? 'pb-8 border-b border-slate-200 dark:border-slate-700' : ''}`}>
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
    </div>
  );
}
