'use client';

import { ExternalLink, ChevronDown, ChevronUp, Building2, Globe, Brain, Rocket, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  // ── Flagship ─────────────────────────────────────────────────────────────
  {
    title: 'VYNE – AI-Native Company Operating System',
    status: 'Live',
    category: 'Personal',
    role: 'Software Engineer & DevOps Engineer',
    link: 'https://vyne.vercel.app/',
    caseStudy: '/projects/vyne',
    description:
      'An AI-native correlation layer built from scratch that ties business events to infrastructure events on a single unified timeline across all connected tools — one platform in place of Slack + Jira + Notion + Datadog + Odoo.',
    technologies: ['Next.js', 'React Native', 'C# .NET 9', 'FastAPI', 'PostgreSQL', 'Docker', 'Terraform', 'AWS', 'LangGraph', 'Microservices', 'Event-Driven Architecture', 'System Design', 'CI/CD (GitHub Actions)', 'ArgoCD', 'Product Ownership'],
    highlights: [
      '15+ modules including chat, projects, docs, voice, and video calls with live transcription and AI meeting recaps auto-linked to relevant projects and incidents',
      'Causal AI engine points at any incident, churn event, or revenue dip and surfaces the deploys, config changes, and customer signals that correlate with it',
      'Integrates with GitHub, Sentry, Datadog, HubSpot, Stripe, Linear, and PagerDuty — every event flows into one cross-team timeline without replacing existing workflows',
      'Full monorepo with 8 microservices: API Gateway, Core Auth, Projects, Messaging, AI, ERP, Observability, Notifications',
      'AWS infrastructure: ECS Fargate, Aurora Serverless v2, EventBridge, SQS FIFO, Cognito, CloudFront — with GitHub Actions + ArgoCD canary deployments',
    ],
  },

  // ── Office / Enterprise ──────────────────────────────────────────────────
  {
    title: 'NEXUS – Traveler Management & Workflow Automation',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    caseStudy: '/projects/nexus',
    description:
      'The operational backbone of American Circuits Inc. — a centralized enterprise platform for traveler lifecycle management, step-based workflow automation, QC enforcement, and real-time production analytics. Live in production and relied on daily across the shop floor.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    highlights: [
      'Solo-built from day one — designed schema, REST API, role hierarchy, and UI, then took it through staging to live production',
      'QR/barcode scanning with strict step-by-step work-center routing enforcement',
      'Live operations dashboard with job status, queue depths, operator activity, and QC sign-off tracking',
      'Integrated with KOSH — admin users can connect travelers sharing the same job number for grouped tracking',
      'Work centers connected by category and department for flexible production flow views',
      'Predictive delay analytics using cross-system data to forecast production bottlenecks',
      'Role-based access, encrypted API calls, and fully reconstructible audit history for every action',
    ],
  },
  {
    title: 'ACI Forge – Enterprise SaaS Platform',
    status: 'Live',
    category: 'Enterprise',
    role: 'Software Engineer & DevOps Engineer',
    company: 'American Circuits Inc.',
    description:
      'Centralized enterprise portal where employees log in once and access all internal tools based on their assigned role — eliminating per-app credentials through SSO and MFA. Includes a maintenance request system, role-gated dashboards, and a unified entry point across all ACI applications.',
    technologies: ['Next.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Cloudflare Tunnels'],
    highlights: [
      'SSO and MFA authentication — one login grants access to all apps based on user role',
      'Cloudflare Tunnel setup so the public site talks to the on-prem backend without exposing it to the internet',
      'Role-based access control across all integrated tools',
      'Unified dashboard with personalized tool visibility per user',
    ],
  },
  {
    title: 'ACI ChatGPT – Internal AI Assistant',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    description:
      'Internal AI automation assistant for reporting, explanation generation, task automation, and production analysis — integrated directly into ACI operations workflows.',
    technologies: ['Python', 'ChatGPT API', 'PostgreSQL', 'FastAPI'],
    highlights: [
      'Reduced maintenance overhead by 40% via PostgreSQL database consolidation',
      'Improved system performance by 30% through caching and AI-driven process prediction',
      'Automated routine reporting and production analysis tasks',
    ],
  },
  {
    title: 'KOSH – Inventory Management System',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    description:
      'Full-scale inventory management platform fully deployed and relied on daily by users. Integrated with NEXUS — KOSH data feeds into NEXUS for predictive delay analytics and production intelligence.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'Fully deployed — 100% user adoption, the primary system for inventory operations',
      'Integrated with NEXUS — KOSH data used for predicting production delays and bottlenecks',
      'Inventory forecasting with ML-based predictive analytics',
      'Role-based permissions and full product movement audit logs',
      'Low-stock alerts, automated reorder triggers, and notifications',
    ],
  },

  {
    title: 'PDF to BOM Converter',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    description:
      'AI-powered tool that converts engineering PDFs and scanned images into structured Bill of Materials Excel files — combining OCR for image/scan extraction with an LLM to intelligently parse, normalize, and map component data into the correct BOM format.',
    technologies: ['Python', 'FastAPI', 'LLM (OpenAI)', 'OCR', 'OpenCV', 'Pandas', 'openpyxl'],
    highlights: [
      'Accepts PDFs and image files — OCR handles scanned documents and photos of physical BOMs',
      'LLM layer interprets extracted text to identify part numbers, quantities, descriptions, and reference designators regardless of source format',
      'Outputs a clean, correctly formatted BOM Excel file ready for procurement',
      'Eliminates manual BOM entry — used daily by engineering and procurement teams',
    ],
  },

  // ── Live Client Websites ─────────────────────────────────────────────────
  {
    title: 'Serenity Living',
    status: 'Live',
    category: 'Client Work',
    role: 'Software Engineer',
    link: 'https://www.theserenityliving.com/',
    description:
      'Took the project from a client brief to a fully live, optimized site — handled UI/UX design, backend services, and Vercel deployment. Managed every client conversation, timeline, and revision cycle independently.',
    technologies: ['Next.js', 'Nginx', 'PostgreSQL', 'Python', 'Vercel'],
    highlights: [
      'Clean, responsive interface with fast load times and mobile-first layouts',
      '100% uptime since delivery with no engineering support required',
      'Post-launch performance tuning and real user feedback resolution — 0 major incidents',
      'Full domain configuration, SSL setup, and SEO optimization',
    ],
  },
];

const filters = ['All', 'Enterprise', 'Client Work', 'Personal'];

// Visual identity per category — drives the card banner gradient + icon
const categoryVisual: Record<string, { gradient: string; icon: typeof Building2 }> = {
  Enterprise: { gradient: 'from-blue-600 via-indigo-600 to-blue-800', icon: Building2 },
  'Client Work': { gradient: 'from-emerald-500 via-teal-600 to-cyan-700', icon: Globe },
  'AI & ML': { gradient: 'from-fuchsia-600 via-purple-600 to-indigo-700', icon: Brain },
  Personal: { gradient: 'from-orange-500 via-pink-600 to-purple-700', icon: Rocket },
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleExpand = (title: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  };

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case 'Production':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Ongoing':
      case 'In Progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'QA':
      case 'User Testing':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'Completed':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      case 'Research':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="fade-in">
      <section id="projects" className="section-container bg-surface-light dark:bg-surface-dark px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Enterprise platforms, AI systems, and innovative solutions driving real-world impact
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === filter
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-transparent text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {filter}
            <span className="ml-1.5 text-xs opacity-70">
              {filter === 'All' ? projects.length : projects.filter(p => p.category === filter).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">
          <p className="text-lg font-medium">No projects in this category yet.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="card hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Banner */}
            {(() => {
              const vis = categoryVisual[project.category] ?? categoryVisual.Personal;
              const BannerIcon = vis.icon;
              const img = (project as { image?: string }).image;
              return (
                <div className={`relative -mx-10 -mt-10 lg:-mx-12 lg:-mt-12 mb-5 sm:mb-6 h-28 sm:h-32 overflow-hidden rounded-t-2xl bg-gradient-to-br ${vis.gradient}`}>
                  {img ? (
                    <Image src={img} alt={project.title} fill className="object-cover" />
                  ) : (
                    <>
                      <BannerIcon className="absolute -right-2 -bottom-3 w-24 h-24 sm:w-28 sm:h-28 text-white/15" strokeWidth={1.25} />
                      <span className="absolute top-3 left-4 text-white/90 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                        {project.category}
                      </span>
                      <BannerIcon className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 text-white" strokeWidth={1.75} />
                    </>
                  )}
                </div>
              );
            })()}

            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold flex-1 pr-2">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors touch-manipulation shrink-0"
                    aria-label="Visit project"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                {project.role && (
                  <span className="text-xs text-gray-600 dark:text-gray-400">{project.role}</span>
                )}
                {project.company && (
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    @ {project.company}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-auto">
              <ul className="space-y-1 sm:space-y-1.5">
                {(expandedCards.has(project.title) ? project.highlights : project.highlights.slice(0, 3)).map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-1.5 sm:gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 text-xs mt-0.5 sm:mt-1">▸</span>
                    <span className="text-xs leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
              {project.highlights.length > 3 && (
                <button
                  type="button"
                  onClick={() => toggleExpand(project.title)}
                  className="mt-2 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {expandedCards.has(project.title) ? (
                    <><ChevronUp className="w-3 h-3" />Show less</>
                  ) : (
                    <><ChevronDown className="w-3 h-3" />+{project.highlights.length - 3} more</>
                  )}
                </button>
              )}
              {(project as { caseStudy?: string }).caseStudy && (
                <Link
                  href={(project as { caseStudy?: string }).caseStudy!}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                >
                  Read the case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
