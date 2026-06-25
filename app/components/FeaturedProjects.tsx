import { Building2, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Top 3 projects surfaced on the home page to pull visitors into the full Projects page.
const featured = [
  {
    title: 'VYNE – AI-Native Company OS',
    status: 'Live',
    blurb:
      'An AI-native correlation layer that ties business events to infrastructure events on one unified timeline, replacing Slack + Jira + Notion + Datadog in a single platform.',
    tech: ['Next.js', 'FastAPI', 'AWS', 'LangGraph', 'Microservices'],
    gradient: 'from-blue-600 via-indigo-600 to-blue-800',
    icon: Brain,
    href: '/projects/vyne',
    cta: 'Read the case study',
    external: 'https://vyne.vercel.app/',
  },
  {
    title: 'NEXUS – Traveler Management Platform',
    status: 'User Testing',
    blurb:
      'The operational backbone of American Circuits Inc., with centralized traveler lifecycle management, step-based workflow automation, QC enforcement, and real-time production analytics.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-700',
    icon: Building2,
    href: '/projects/nexus',
    cta: 'Read the case study',
  },
  {
    title: 'ACI Forge – Enterprise SaaS Portal',
    status: 'Live',
    blurb:
      'Single sign-on portal where employees log in once and reach every internal tool by role, with SSO + MFA, role-gated dashboards, and Cloudflare Tunnels to an on-prem backend.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Docker', 'Cloudflare'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    icon: Building2,
    href: '/projects',
    cta: 'See all projects',
  },
];

const statusColor: Record<string, string> = {
  Live: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  'User Testing': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
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
            <div key={p.title} className="card hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 flex flex-col">
              {/* Banner */}
              <div className={`relative -mx-10 -mt-10 lg:-mx-12 lg:-mt-12 mb-5 sm:mb-6 h-28 sm:h-32 overflow-hidden rounded-t-2xl bg-linear-to-br ${p.gradient}`}>
                <Icon className="absolute -right-2 -bottom-3 w-24 h-24 sm:w-28 sm:h-28 text-white/15" strokeWidth={1.25} />
                <Icon className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 text-white" strokeWidth={1.75} />
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

              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[p.status] ?? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">{p.blurb}</p>

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
