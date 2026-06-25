import Link from 'next/link';
import {
  ArrowLeft,
  ScanLine,
  Route,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Cloud,
  Zap,
  Target,
  CheckCircle2,
} from 'lucide-react';

const workCenters = [
  'Job Intake',
  'Work-Center Routing',
  'QC Sign-off',
  'Operations Dashboard',
  'KOSH Integration',
  'Audit Trail',
];

const techStack = ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'];

const capabilities = [
  {
    icon: ScanLine,
    title: 'QR / barcode-driven routing',
    body: 'Every traveler is scanned at each work center, so a job can only advance once the previous step is complete, enforcing strict step-by-step routing that makes skipped or out-of-order operations impossible.',
  },
  {
    icon: LayoutDashboard,
    title: 'Live operations dashboard',
    body: 'Real-time view of job status, queue depths, operator activity, and QC sign-off tracking, so the floor and management see the same production picture without chasing paper or spreadsheets.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive delay analytics',
    body: 'Cross-system data (including KOSH inventory signals) is used to forecast production bottlenecks before they stall a job, turning reactive firefighting into early warnings.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-based access & full audit',
    body: 'Encrypted API calls, role-based permissions, and a fully reconstructible audit history for every action, where every state change on a traveler is traceable to who did it and when.',
  },
];

export default function NexusCaseStudyPage() {
  return (
    <div className="fade-in">
      <article className="section-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
              User Testing
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Project Lead &amp; Product Owner</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">@ American Circuits Inc.</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">NEXUS</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            The operational backbone of American Circuits Inc., a centralized platform for traveler
            lifecycle management, step-based workflow automation, QC enforcement, and real-time
            production analytics. Built solo from day one and currently in user and performance testing.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold">The Problem</h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              In a manufacturing shop, a traveler is the routing sheet that follows a job through every
              work center. When that lives on paper and in spreadsheets, there&apos;s no single source of
              truth: steps get skipped, QC sign-offs are hard to enforce, and no one can see where a job
              actually is without walking the floor.
            </p>
            <p>
              By the time a delay surfaces, the job is already late and the trail of who-did-what is
              incomplete. NEXUS replaces that with a system that enforces the process, shows the floor in
              real time, and keeps a complete, reconstructible history of every action.
            </p>
          </div>
        </section>

        {/* What I Built */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">What I Built</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-900/40">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold">Architecture</h2>
          </div>
          <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I designed and built NEXUS solo end-to-end: the database schema, the REST API, the role
              hierarchy, and the UI, then took it through staging into live production. It&apos;s a
              Next.js front end talking to a FastAPI backend over PostgreSQL, containerized with Docker
              and served behind Nginx.
            </p>
            <div className="flex items-center gap-3 mb-1">
              <Route className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <p className="font-semibold text-gray-900 dark:text-gray-100">Core building blocks:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {workCenters.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40"
                >
                  {s}
                </span>
              ))}
            </div>
            <p>
              Work centers are connected by category and department for flexible production-flow views,
              and NEXUS integrates with{' '}
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                KOSH
              </Link>{' '}
              and admins can connect travelers that share the same job number for grouped tracking, with KOSH
              inventory data feeds the predictive delay analytics.
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">Outcome</h2>
          </div>
          <ul className="space-y-3">
            {[
              'Designed and shipped solo: schema, REST API, role hierarchy, and UI, from day one through staging to production.',
              'Step-by-step work-center routing enforcement via QR/barcode scanning removes skipped and out-of-order operations.',
              'A live operations dashboard gives the floor and management one shared, real-time view of job status, queues, and QC sign-offs.',
              'Predictive delay analytics use cross-system data to forecast bottlenecks before they stall a job.',
              'Currently in user and performance testing ahead of full rollout.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech stack */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
