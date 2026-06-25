'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Rocket, Target, Zap, Download, Briefcase, Globe, Server, MapPin, Github, ExternalLink } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Enterprise Solutions',
    bar: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    description: 'Own and maintain production systems used daily by 50+ people at American Circuits Inc., including NEXUS, ACI Forge, ACI ChatGPT, KOSH, and PDF to BOM Converter. All integrated and live in production.',
  },
  {
    icon: Zap,
    title: 'DevOps & Infrastructure',
    bar: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    description: 'Manage Linux server infrastructure with 99%+ uptime. Automated deployment pipelines saving 5+ hours/week across 3 teams. Handle CI/CD, patching, backups, monitoring, and secrets management.',
  },
  {
    icon: Target,
    title: 'Full-Stack Development',
    bar: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
    description: 'End-to-end ownership: Next.js frontends, FastAPI/Python backends, PostgreSQL, Docker, Nginx, Cloudflare Tunnels, and Vercel. Built every layer from schema to UI to deployment.',
  },
  {
    icon: Rocket,
    title: 'AI & Cybersecurity',
    bar: 'from-orange-500 to-pink-600',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    description: 'Hands-on LLM integration, OCR pipelines, ChatGPT API, prompt engineering, and agentic AI. Security background in penetration testing, vulnerability assessment, and SSO/MFA implementation.',
  },
];

const openTo = [
  { icon: Briefcase, label: 'Full-Time Roles' },
  { icon: Server, label: 'DevOps Engineer' },
  { icon: Code2, label: 'Software Engineer' },
  { icon: Globe, label: 'Remote' },
  { icon: MapPin, label: 'Open to Relocate' },
];

const stats = [
  { value: '', label: '', color: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800', bg: 'bg-blue-50 dark:bg-blue-900/20', isExp: true },
  { value: '8+', label: 'Projects Shipped', color: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-800', bg: 'bg-violet-50 dark:bg-violet-900/20' },
  { value: '50+', label: 'Daily Users', color: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { value: '8+', label: 'Certifications', color: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-900/20' },
];

export default function AboutPage() {
  const startDate = new Date(2025, 5, 26);
  const now = new Date();
  const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  const monthsExp = months > 0 ? months : 0;
  const years = Math.floor(monthsExp / 12);
  const expValue = monthsExp >= 12 ? `${years}+` : `${monthsExp}+`;
  const expLabel = monthsExp >= 12 ? `Year${years > 1 ? 's' : ''} (${monthsExp} mo)` : 'Months Experience';

  const statsRef = useRef<HTMLDivElement>(null);
  const [animStarted, setAnimStarted] = useState(false);
  const [animCounts, setAnimCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!animStarted) return;
    const targets = [monthsExp, 8, 50, 8];
    const duration = 1100;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setAnimCounts(targets.map(t => Math.round(ease * t)));
      if (p < 1) requestAnimationFrame(tick);
      else setAnimCounts(targets);
    };
    requestAnimationFrame(tick);
  }, [animStarted, monthsExp]);

  return (
    <div className="fade-in">
      <section id="about" className="section-container px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            DevOps & Full-Stack Engineer who builds and ships production systems end-to-end
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">

          {/* Open to work banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl border border-green-200 dark:border-green-800/60 bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">Open to new opportunities</span>
            </div>
            <a
              href="https://docs.google.com/document/d/1ioMb8uVqeIjHxnpQzpUtR7N-LuIUneEkGHiLXTdbsDQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Summary */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a DevOps and full-stack engineer based in Charlotte, NC. I spend most of my time building and maintaining the systems that <span className="font-semibold text-indigo-600 dark:text-indigo-400">American Circuits Inc.</span> runs on, from traveler management and inventory to internal AI tools and the infrastructure holding it all together. Over 50 people use what I've built every single day, which keeps me pretty focused on getting things right.
              </p>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I started there as a Software Engineer, building NEXUS and ACI Forge from scratch, and moved into a DevOps role where I now handle infrastructure, CI/CD pipelines, and automation. My day-to-day stack is Python, FastAPI, Next.js, PostgreSQL, and Docker with a lot of Linux server work mixed in. Most recently I built a PDF to BOM converter that uses OCR and an LLM to pull structured component data out of engineering documents, and the procurement team now uses it every day.
              </p>
            </div>
          </div>

          {/* What I'm looking for */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">What I'm looking for</p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {openTo.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Key Strengths</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {highlights.map((h, i) => (
                <div key={i} className="group rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`h-1 w-full bg-linear-to-r ${h.bar}`} />
                  <div className="p-5 flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${h.iconBg} shrink-0 group-hover:scale-110 transition-transform`}>
                      <h.icon className={`w-5 h-5 ${h.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1.5 text-slate-800 dark:text-slate-100">{h.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">On GitHub</p>
            <a
              href="https://github.com/preetraval45"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 block"
            >
              <div className="h-1 w-full bg-linear-to-r from-slate-600 to-slate-800" />
              <div className="p-5 flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 shrink-0 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">github.com/preetraval45</p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">VYNE, NEXUS, portfolio, and more — actively building in public</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            </a>
          </div>

          {/* Published writing */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Published Writing</p>
            <a
              href="https://medium.com/skillship-vellore/how-to-start-your-journey-as-ui-ux-designer-77fea09d18a0"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm p-5 flex items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
              <span className="text-blue-500 text-xs font-semibold whitespace-nowrap mt-1">Read →</span>
            </a>
          </div>

          {/* Stats */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">By the Numbers</p>
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => {
                const count = animCounts[i];
                const displayValue = s.isExp
                  ? (count >= 12 ? `${Math.floor(count / 12)}+` : `${count}+`)
                  : `${count}+`;
                const displayLabel = s.isExp
                  ? (count >= 12 ? `Year${Math.floor(count / 12) > 1 ? 's' : ''} (${count} mo)` : 'Months Experience')
                  : s.label;
                return (
                  <div key={i} className={`rounded-2xl border ${s.border} ${s.bg} p-4 sm:p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all`}>
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${s.color} tabular-nums`}>
                      {displayValue}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                      {displayLabel}
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
