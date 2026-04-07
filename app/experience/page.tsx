'use client';

import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'American Circuits Inc.',
    location: 'Charlotte, NC',
    title: 'DevOps Engineer – AI Systems',
    period: 'Mar 2026 – Present',
    achievements: [
      {
        title: 'Internal Tooling & Automation',
        description:
          'Built and maintain internal tools used daily by the team — automated reports, admin dashboards, and ops utilities integrated with third-party services via REST APIs.',
        highlights: [
          'Automated the deployment pipeline and repetitive reporting tasks using Python and CI/CD, saving 5+ hours per week across 3 teams',
          'Manage Linux server infrastructure: patching, backups, monitoring, and alerting — maintaining 99%+ uptime with on-call runbooks',
          'Locked down access control with roles, permissions, and secrets management',
        ],
      },
      {
        title: 'KOSH × NEXUS Integration',
        description:
          'Led the integration of KOSH (inventory) and NEXUS (traveler management) so both systems talk to each other — KOSH data feeds directly into NEXUS for predictive analytics and production intelligence.',
        highlights: [
          'Admin users can connect two or more travelers sharing the same job number, enabling grouped tracking and coordinated routing',
          'Work centers are connected in two dimensions — by category and by department — giving supervisors flexible views of production flow',
          'KOSH inventory data is used inside NEXUS to predict delays in production and forecast bottlenecks before they occur',
          'Cross-system data enables real-time scheduling decisions by correlating inventory levels with traveler progress',
        ],
      },
    ],
  },
  {
    company: 'American Circuits Inc.',
    location: 'Charlotte, NC',
    title: 'Software Engineer',
    period: 'Jun 2025 – Mar 2026',
    achievements: [
      {
        title: 'NEXUS - Enterprise Traveler Management System',
        description:
          'Owned end-to-end development of NEXUS — an enterprise traveler management and workflow automation system now used daily by 50+ people across engineering, ops, QC, and management.',
        highlights: [
          'Built from scratch using Next.js, FastAPI, PostgreSQL, Docker, and Nginx with real-time QR tracking, work-center routing, and step-locked workflows',
          'Implemented role-based access, encrypted API calls, and a fully reconstructible audit history for every action',
          'Operators scan QR codes and barcodes to move travelers through the floor with strict step-by-step work-center routing enforcement',
          'Supervisors get a live operations dashboard with job status, queue depths per work center, operator activity, and QC sign-off tracking',
        ],
      },
      {
        title: 'ACI Forge - Enterprise SaaS Platform',
        description:
          'Architect and developer of ACI FORGE — a centralized enterprise portal for production oversight, role-based tool access, and SSO/MFA authentication, used daily by 50+ people.',
        highlights: [
          'Added SSO and MFA authentication, then set up a Cloudflare Tunnel so the public site talks to the on-prem backend without exposing it to the internet',
          'Built microservices and automation engines using Python, TypeScript, PostgreSQL, and Docker',
          'Integrated AI-powered insights, auditing utilities, and system health monitoring into one unified interface',
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
          'Designed and managed on-premise server architecture to host enterprise platforms, local databases, and internal network services.',
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
  },
];

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

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="card">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{exp.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-8">
              {exp.achievements.map((achievement, index) => (
                <div key={index} className={`space-y-3 ${index < exp.achievements.length - 1 ? 'pb-8 border-b border-slate-200 dark:border-slate-700' : ''}`}>
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
          ))}
        </div>
      </section>
    </div>
  );
}
