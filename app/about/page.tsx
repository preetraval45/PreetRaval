'use client';

import { Code2, Rocket, Target, Zap, Download, Briefcase, Globe, Server } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Enterprise Solutions',
    accent: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    description:
      'Own and maintain production systems used daily by 50+ people at American Circuits Inc. — NEXUS, ACI Forge, ACI ChatGPT, KOSH, and PDF to BOM Converter. All integrated and live in production.',
  },
  {
    icon: Zap,
    title: 'DevOps & Infrastructure',
    accent: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    description:
      'Manage Linux server infrastructure with 99%+ uptime. Automated deployment pipelines saving 5+ hours/week across 3 teams. Handle CI/CD, patching, backups, monitoring, and secrets management.',
  },
  {
    icon: Target,
    title: 'Full-Stack Development',
    accent: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
    description:
      'End-to-end ownership: Next.js frontends, FastAPI/Python backends, PostgreSQL, Docker, Nginx, Cloudflare Tunnels, and Vercel. Built every layer from schema to UI to deployment.',
  },
  {
    icon: Rocket,
    title: 'AI & Cybersecurity',
    accent: 'from-orange-500 to-pink-600',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    description:
      'Hands-on LLM integration, OCR pipelines, ChatGPT API, prompt engineering, and agentic AI. Security background in penetration testing, vulnerability assessment, and SSO/MFA implementation.',
  },
];

const openTo = [
  { icon: Briefcase, label: 'Full-Time Roles' },
  { icon: Server, label: 'DevOps Engineer' },
  { icon: Code2, label: 'Software Engineer' },
  { icon: Globe, label: 'Remote / Charlotte, NC' },
];

export default function AboutPage() {
  const startDate = new Date(2025, 5, 26);
  const now = new Date();
  const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  const monthsExperience = months > 0 ? months : 0;
  const years = Math.floor(monthsExperience / 12);

  return (
    <div className="fade-in">
      <section id="about" className="section-container px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            DevOps & Full-Stack Engineer who builds and ships production systems end-to-end
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Open to work banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 sm:mb-8 p-4 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">Open to new opportunities</span>
            </div>
            <a
              href="https://docs.google.com/document/d/1ioMb8uVqeIjHxnpQzpUtR7N-LuIUneEkGHiLXTdbsDQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Summary card */}
          <div className="card mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a <span className="font-bold text-blue-600 dark:text-blue-400">DevOps & Full-Stack Engineer</span> who builds and ships production systems end-to-end.
              At <span className="font-bold text-indigo-600 dark:text-indigo-400">American Circuits Inc.</span>, I own real products used daily by 50+ people — currently serving as DevOps Engineer (AI Systems), managing infrastructure, CI/CD, and internal tooling. Previously built NEXUS and ACI Forge from scratch as a Software Engineer.
            </p>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              My stack spans Python, FastAPI, Next.js, Docker, CI/CD, PostgreSQL, Nginx, and Linux server infrastructure. Recently led KOSH × NEXUS integration — inventory data now feeds predictive delay analytics across the shop floor. Also built an AI-powered PDF to BOM Converter using LLMs and OCR that the procurement team uses daily.
            </p>
          </div>

          {/* What I'm open to */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">What I'm looking for</p>
            <div className="flex flex-wrap gap-2">
              {openTo.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Key highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {highlights.map((h, i) => (
              <div key={i} className="group card relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${h.accent}`} />
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`p-2.5 sm:p-3 rounded-xl ${h.iconBg} shrink-0 group-hover:scale-110 transition-transform`}>
                    <h.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${h.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 text-slate-800 dark:text-slate-100">{h.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Published writing */}
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Published Writing</p>
            <a
              href="https://medium.com/skillship-vellore/how-to-start-your-journey-as-ui-ux-designer-77fea09d18a0"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-start gap-3 sm:gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Medium · Skillship Vellore</p>
                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  How to Start Your Journey as a UI/UX Designer
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  A guide covering tools, resources, and first steps for aspiring UI/UX designers.
                </p>
              </div>
              <span className="text-blue-500 dark:text-blue-400 text-xs font-semibold whitespace-nowrap mt-1">Read →</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                value: monthsExperience >= 12 ? `${years}+` : `${monthsExperience}+`,
                label: monthsExperience >= 12 ? `Year${years > 1 ? 's' : ''} (${monthsExperience} mo)` : 'Months Experience',
                from: 'from-blue-500', to: 'to-indigo-600',
                bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
                border: 'border-blue-200 dark:border-blue-800',
                text: 'text-blue-600 dark:text-blue-400',
              },
              {
                value: '8+', label: 'Projects Shipped',
                from: 'from-violet-500', to: 'to-purple-600',
                bg: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
                border: 'border-violet-200 dark:border-violet-800',
                text: 'text-violet-600 dark:text-violet-400',
              },
              {
                value: '50+', label: 'Daily Users',
                from: 'from-emerald-500', to: 'to-teal-600',
                bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
                border: 'border-emerald-200 dark:border-emerald-800',
                text: 'text-emerald-600 dark:text-emerald-400',
              },
              {
                value: '8+', label: 'Certifications',
                from: 'from-orange-500', to: 'to-amber-500',
                bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
                border: 'border-orange-200 dark:border-orange-800',
                text: 'text-orange-600 dark:text-orange-400',
              },
            ].map((stat) => (
              <div key={stat.label} className={`text-center p-4 sm:p-6 rounded-xl border ${stat.border} bg-linear-to-br ${stat.bg} hover:scale-105 hover:shadow-md transition-all`}>
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 ${stat.text}`}>{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
