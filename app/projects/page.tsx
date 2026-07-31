'use client';

import { ExternalLink, ChevronDown, ChevronUp, Building2, Globe, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '../data/projects';

const filters = ['All', 'Enterprise', 'Client Work', 'Personal'];

type CategoryTheme = { bar: string; pill: string; icon: string; badge: string };
const categoryTheme: Record<string, CategoryTheme> = {
  Enterprise: {
    bar: 'from-blue-500 via-indigo-500 to-blue-700',
    pill: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300',
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40',
  },
  'Client Work': {
    bar: 'from-emerald-500 via-teal-500 to-cyan-600',
    pill: 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300',
    icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40',
  },
  Personal: {
    bar: 'from-orange-500 via-pink-500 to-purple-600',
    pill: 'bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 text-violet-700 dark:text-violet-300',
    icon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    badge: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40',
  },
};

const categoryIcon: Record<string, typeof Building2> = {
  Enterprise: Building2,
  'Client Work': Globe,
  Personal: Rocket,
};

function StatusBadge({ status }: { status: string }) {
  const isLive = status === 'Live' || status === 'Production';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
      isLive
        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50'
        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
    }`}>
      {isLive && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggle = (title: string) =>
    setExpandedCards(prev => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  const liveCount = projects.filter(p => p.status === 'Live' || p.status === 'Production').length;

  return (
    <div className="fade-in">
      <section id="projects" className="section-container px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Enterprise platforms, AI systems, and client sites, all production, all used daily
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            {liveCount} of {projects.length} projects live in production
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === f
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-transparent text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {f}
              <span className="ml-1.5 text-xs opacity-70">
                {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((project, index) => {
            const theme = categoryTheme[project.category] ?? categoryTheme.Enterprise;
            const CatIcon = categoryIcon[project.category] ?? Building2;
            const isExpanded = expandedCards.has(project.title);

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                {/* Screenshot preview */}
                {project.screenshot && (
                  <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/30" />
                  </div>
                )}
                {/* Accent bar */}
                <div className={`h-1 w-full bg-linear-to-r ${theme.bar}`} />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Category + status row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-semibold ${theme.badge}`}>
                      <CatIcon className="w-3 h-3" />
                      {project.category}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug flex-1">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg transition-colors shrink-0 ${theme.icon}`}
                        aria-label="Visit project"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Role + company */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {project.role}{project.company ? ` · ${project.company}` : ''}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${theme.pill}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-auto">
                    <ul className="space-y-1.5">
                      {(isExpanded ? project.highlights : project.highlights.slice(0, 3)).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className={`mt-0.5 shrink-0 text-[10px] ${theme.icon.split(' ').find(c => c.startsWith('text-')) ?? 'text-blue-500'}`}>▸</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {project.highlights.length > 3 && (
                      <button
                        type="button"
                        onClick={() => toggle(project.title)}
                        className="mt-2 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                      >
                        {isExpanded
                          ? <><ChevronUp className="w-3 h-3" />Show less</>
                          : <><ChevronDown className="w-3 h-3" />+{project.highlights.length - 3} more</>}
                      </button>
                    )}

                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                      >
                        Read the case study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
