import { Building2, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featured = [
  {
    title: 'VYNE – AI-Native Company OS',
    status: 'Live',
    blurb:
      'An AI-native correlation layer that ties business events to infrastructure events on one unified timeline, replacing Slack, Jira, Notion, and Datadog in a single platform.',
    tech: ['Next.js', 'FastAPI', 'AWS', 'LangGraph', 'Microservices'],
    bar: 'from-blue-500 to-indigo-600',
    icon: Brain,
    gradient: 'from-blue-600 via-indigo-600 to-blue-800',
    screenshot: '/vyne-screenshot.png',
    href: '/projects/vyne',
    cta: 'Read the case study',
    external: 'https://vyne.vercel.app/',
  },
  {
    title: 'NEXUS – Traveler Management Platform',
    status: 'Production',
    blurb:
      'The operational backbone of American Circuits Inc., with centralized traveler lifecycle management, step-based workflow automation, QC enforcement, and real-time production analytics.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    bar: 'from-fuchsia-500 to-purple-600',
    icon: Building2,
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-700',
    screenshot: '/nexus-screenshot.png',
    href: '/projects/nexus',
    cta: 'Read the case study',
  },
  {
    title: 'ACI Forge – Enterprise SaaS Portal',
    status: 'Live',
    blurb:
      'Single sign-on portal where employees log in once and reach every internal tool by role, with SSO and MFA, role-gated dashboards, and Cloudflare Tunnels to an on-prem backend.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Docker', 'Cloudflare'],
    bar: 'from-emerald-500 to-teal-600',
    icon: Building2,
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    href: '/projects',
    cta: 'See all projects',
  },
];

const statusColor: Record<string, string> = {
  Live: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  Production: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
};

export function FeaturedProjects() {
  return (
    <section className="section-container px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Featured Work</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A few of the production systems I&apos;ve owned end-to-end, from schema and API to deployment and uptime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {featured.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col">

              {/* Screenshot or gradient banner */}
              {p.screenshot ? (
                <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={p.screenshot}
                    alt={`${p.title} screenshot`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/30" />
                  {p.external && (
                    <a
                      href={p.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/30 hover:bg-black/50 transition-colors"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  )}
                </div>
              ) : (
                <div className={`relative h-28 overflow-hidden bg-linear-to-br ${p.gradient} flex items-center px-5`}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.75} />
                  <Icon className="absolute -right-2 -bottom-3 w-28 h-28 text-white/15" strokeWidth={1.25} />
                  {p.external && (
                    <a
                      href={p.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              )}

              {/* Accent bar */}
              <div className={`h-1 w-full bg-linear-to-r ${p.bar}`} />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[p.status] ?? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed flex-1">{p.blurb}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={p.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <Link href="/projects" className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group">
          View All Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
