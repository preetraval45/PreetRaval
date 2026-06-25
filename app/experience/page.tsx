'use client';

import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'American Circuits Inc.',
    location: 'Charlotte, NC',
    title: 'DevOps Engineer – AI Systems',
    period: '03/2026 – Present',
    current: true,
    tech: ['Linux', 'Python', 'CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes', 'Nginx', 'Networking', 'Secrets Management'],
    achievements: [
      {
        title: 'Internal Tooling & Automation',
        description: 'Built and maintain internal tools used daily by the team, including automated reports, admin dashboards, and ops utilities integrated with third-party services via REST APIs.',
        highlights: [
          'Automated the deployment pipeline and reporting tasks using Python and CI/CD, saving 5+ hours/week across 3 teams',
          'Manage Linux server infrastructure: patching, backups, monitoring, and alerting, maintaining 99%+ uptime with on-call runbooks',
          'Locked down access control with roles, permissions, and secrets management',
        ],
      },
      {
        title: 'KOSH × NEXUS Integration',
        description: 'Led the integration of KOSH (inventory) and NEXUS (traveler management), with KOSH data feeding directly into NEXUS for predictive analytics and production intelligence.',
        highlights: [
          'Admin users can connect travelers sharing the same job number for grouped tracking and coordinated routing',
          'Work centers connected by category and department, giving supervisors flexible production flow views',
          'KOSH data used inside NEXUS to predict production delays and forecast bottlenecks before they occur',
          'Cross-system data enables real-time scheduling by correlating inventory levels with traveler progress',
        ],
      },
      {
        title: 'Server & Network Infrastructure',
        status: 'In Progress',
        description: 'Leading the buildout of on-premise server and network architecture to host enterprise platforms, local databases, and internal network services.',
        highlights: [
          'Designing a 4-server setup for local hosting of NEXUS, ACI Forge, KOSH, and supporting services',
          'Standing up PostgreSQL servers, Nginx reverse proxies, and Docker deployments across production servers',
          'Planning internal network routing, firewall rules, and secure access controls for all hosted platforms',
        ],
      },
    ],
  },
  {
    company: 'American Circuits Inc.',
    location: 'Charlotte, NC',
    title: 'Software Engineer',
    period: '06/2025 – 03/2026',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'Cloudflare Tunnel', 'SSO / MFA'],
    achievements: [
      {
        title: 'NEXUS – Traveler Management System',
        description: 'Owned end-to-end development of NEXUS, an enterprise traveler management and workflow automation system now used daily by 50+ people across engineering, ops, QC, and management.',
        highlights: [
          'Built from scratch: Next.js, FastAPI, PostgreSQL, Docker, and Nginx with real-time QR tracking and step-locked workflows',
          'Implemented role-based access, encrypted API calls, and a fully reconstructible audit history',
          'Supervisors get a live dashboard with job status, queue depths, operator activity, and QC sign-off tracking',
        ],
      },
      {
        title: 'ACI Forge – Enterprise SaaS Platform',
        description: 'Architect and developer of ACI Forge, a centralized portal for production oversight, role-based tool access, and SSO/MFA authentication used daily by 50+ people.',
        highlights: [
          'SSO and MFA authentication with Cloudflare Tunnel connecting the public site to the on-prem backend securely',
          'Built microservices and automation engines using Python, TypeScript, PostgreSQL, and Docker',
          'Integrated AI-powered insights, auditing utilities, and system health monitoring into one interface',
        ],
      },
      {
        title: 'ACI ChatGPT – Internal AI Assistant',
        description: 'Developed internal AI automation assistant for reporting, explanation generation, task automation, and production analysis.',
        highlights: [
          'Consolidated multiple PostgreSQL databases into a unified production server, reducing maintenance by 40%',
          'Improved system performance by 30% through backend optimization, caching logic, and AI-driven process prediction',
        ],
      },
      {
        title: 'KOSH – Inventory Management System',
        description: 'Full-scale inventory platform with barcode scanning, real-time stock tracking, predictive analytics, and automated alerts.',
        highlights: [
          'Barcode and QR scanning workflows for real-time inventory tracking and product movement logging',
          'ML-based forecasting to predict low-stock conditions and trigger automated reorder alerts',
          'Role-based permissions and audit logs for full traceability of inventory changes across departments',
        ],
      },
    ],
  },
  {
    company: 'Skillship Foundation',
    location: 'Remote',
    title: 'Frontend Developer Intern',
    period: '01/2022 – 12/2022',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Oracle Database'],
    achievements: [
      {
        title: 'Responsive UI Development',
        description: 'Built and maintained responsive UI components across product modules, translating Figma mockups into pixel-accurate, cross-browser layouts.',
        highlights: [
          'Translated Figma designs into pixel-accurate Tailwind CSS layouts across desktop, tablet, and mobile',
          'Built reusable form components with client-side validation that noticeably reduced incomplete submissions',
          'Debugged rendering inconsistencies in Safari and Firefox by tracing vendor-prefixed CSS root causes',
        ],
      },
      {
        title: 'API Integration & Data Reporting',
        description: 'Integrated REST APIs to render dynamic content and connected the frontend to an Oracle Database-backed reporting endpoint.',
        highlights: [
          'Fetched and rendered course listings, user progress, and event schedules dynamically',
          'Mapped Oracle Database reporting results into structured dashboard components',
          'Participated in sprint planning, flagging blockers early to keep story estimates accurate',
        ],
      },
    ],
  },
];

type Theme = {
  badge: string;
  bar: string;
  tech: string;
  period: string;
  numberBg: string;
  bullet: string;
  achievementBg: string;
  achievementBorder: string;
  roleLabel: string;
};

function getTheme(title: string): Theme {
  if (title.toLowerCase().includes('devops')) {
    return {
      badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
      bar: 'bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500',
      tech: 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300',
      period: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60',
      numberBg: 'bg-emerald-500',
      bullet: 'text-emerald-500 dark:text-emerald-400',
      achievementBg: 'bg-emerald-50/40 dark:bg-emerald-900/10',
      achievementBorder: 'border-emerald-100 dark:border-emerald-900/40',
      roleLabel: 'DevOps',
    };
  }
  if (title.toLowerCase().includes('software')) {
    return {
      badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      bar: 'bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500',
      tech: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300',
      period: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60',
      numberBg: 'bg-blue-500',
      bullet: 'text-blue-500 dark:text-blue-400',
      achievementBg: 'bg-blue-50/40 dark:bg-blue-900/10',
      achievementBorder: 'border-blue-100 dark:border-blue-900/40',
      roleLabel: 'Engineering',
    };
  }
  return {
    badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
    bar: 'bg-linear-to-r from-violet-500 via-purple-500 to-pink-500',
    tech: 'bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300',
    period: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/60',
    numberBg: 'bg-violet-500',
    bullet: 'text-violet-500 dark:text-violet-400',
    achievementBg: 'bg-violet-50/40 dark:bg-violet-900/10',
    achievementBorder: 'border-violet-100 dark:border-violet-900/40',
    roleLabel: 'Intern',
  };
}

export default function ExperiencePage() {
  return (
    <div className="fade-in">
      <section id="experience" className="section-container px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building enterprise systems that teams rely on every day
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-linear-to-b from-emerald-400 via-blue-400 to-violet-400 opacity-20 hidden sm:block" />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((exp, expIndex) => {
              const theme = getTheme(exp.title);
              return (
                <div key={expIndex} className="relative sm:pl-16">

                  {/* Timeline icon */}
                  <div className={`absolute left-0 top-8 hidden sm:flex items-center justify-center w-10 h-10 rounded-xl shadow-sm ${theme.badge}`}>
                    <Briefcase className="w-4 h-4" />
                  </div>

                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden">

                    {/* Top gradient bar */}
                    <div className={`h-1 w-full ${theme.bar}`} />

                    {/* Role header */}
                    <div className="px-6 sm:px-8 pt-6 pb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-gray-100 dark:border-gray-700/40">
                      <div className="flex items-start gap-4">
                        {/* Initials badge */}
                        <div className={`hidden sm:flex shrink-0 w-12 h-12 rounded-xl items-center justify-center text-sm font-bold ${theme.badge}`}>
                          {exp.company.split(' ').map(w => w[0]).join('').slice(0, 3)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{exp.company}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />{exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className={`inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${theme.period}`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Tech stack */}
                    <div className="px-6 sm:px-8 py-4 border-b border-gray-100 dark:border-gray-700/40 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-full ${theme.tech}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Achievements grid */}
                    <div className="px-6 sm:px-8 py-6 grid sm:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className={`rounded-xl border p-4 ${theme.achievementBg} ${theme.achievementBorder}`}
                        >
                          {/* Achievement header */}
                          <div className="flex items-start gap-2.5 mb-3">
                            <span className={`shrink-0 w-5 h-5 rounded-full ${theme.numberBg} text-white text-[10px] font-bold flex items-center justify-center mt-0.5`}>
                              {achIndex + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 flex flex-wrap items-center gap-1.5 leading-snug">
                                {achievement.title}
                                {(achievement as { status?: string }).status && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                                    {(achievement as { status?: string }).status}
                                  </span>
                                )}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-1.5 ml-7">
                            {achievement.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                                <ChevronRight className={`w-3 h-3 mt-0.5 shrink-0 ${theme.bullet}`} />
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
