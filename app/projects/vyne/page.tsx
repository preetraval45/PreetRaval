import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  GitBranch,
  Network,
  Brain,
  Layers,
  Cloud,
  Zap,
  Target,
  CheckCircle2,
} from 'lucide-react';

const integrations = ['GitHub', 'Sentry', 'Datadog', 'HubSpot', 'Stripe', 'Linear', 'PagerDuty'];

const services = [
  'API Gateway',
  'Core Auth',
  'Projects',
  'Messaging',
  'AI',
  'ERP',
  'Observability',
  'Notifications',
];

const techStack = [
  'Next.js',
  'React Native',
  'C# .NET 9',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'Terraform',
  'AWS',
  'LangGraph',
];

const capabilities = [
  {
    icon: Network,
    title: 'Unified correlation timeline',
    body: 'Business events and infrastructure events land on a single timeline across every connected tool, so a deploy, a config change, and a customer signal sit side by side instead of in seven different dashboards.',
  },
  {
    icon: Brain,
    title: 'Causal AI engine',
    body: 'Point it at any incident, churn event, or revenue dip and it surfaces the deploys, config changes, and customer signals that correlate with it, moving from "what happened" to "what caused it."',
  },
  {
    icon: Layers,
    title: '15+ integrated modules',
    body: 'Chat, projects, docs, voice, and video calls with live transcription, plus AI meeting recaps that auto-link back to the relevant projects and incidents.',
  },
  {
    icon: GitBranch,
    title: 'Drop-in integrations',
    body: 'Connects to GitHub, Sentry, Datadog, HubSpot, Stripe, Linear, and PagerDuty so every event flows into one cross-team timeline without replacing the workflows teams already use.',
  },
];

export default function VyneCaseStudyPage() {
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
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              Live Production
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Product Owner</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">4 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">VYNE</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            An AI-native company operating system, a correlation layer built from scratch that ties
            business events to infrastructure events on a single unified timeline across all connected
            tools. One platform in place of Slack + Jira + Notion + Datadog + Odoo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="https://vyne.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
            <a
              href="https://github.com/preetraval45/VYNE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-base"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
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
              When a deployment fails and orders get stuck, the cost is real, but the people who feel
              it (revenue, support, ops) and the people who caused it (engineering) are looking at
              completely different tools. Business context lives in Slack, HubSpot, and Stripe;
              infrastructure context lives in Datadog, Sentry, and PagerDuty. Nothing connects the two.
            </p>
            <p>
              By the time anyone correlates &quot;revenue dipped&quot; with &quot;we shipped that config
              change at 2pm,&quot; hours have passed and the trail is cold. VYNE exists to close that gap.
            </p>
          </div>
        </section>

        {/* The Approach */}
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
              VYNE is a full monorepo split into 8 independently deployable microservices, each owning a
              slice of the platform:
            </p>

            {/* Architecture Diagram */}
            <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/40 bg-slate-50 dark:bg-slate-900/40 p-5 select-none overflow-x-auto">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5 text-center">System Architecture</p>
              <div className="flex flex-col items-center gap-0 min-w-[300px]">
                {/* Clients */}
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200 text-center w-28">
                    Browser<br /><span className="font-normal text-slate-400 text-[10px]">Next.js</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-base">+</span>
                  <div className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200 text-center w-28">
                    Mobile<br /><span className="font-normal text-slate-400 text-[10px]">React Native</span>
                  </div>
                </div>
                <div className="text-slate-300 dark:text-slate-600 text-sm leading-none py-1">↓</div>
                <div className="px-6 py-2.5 rounded-lg border border-orange-200 dark:border-orange-800/60 bg-orange-50 dark:bg-orange-950/30 text-xs font-bold text-orange-700 dark:text-orange-300 text-center w-60">
                  CloudFront (CDN / Edge)
                </div>
                <div className="text-slate-300 dark:text-slate-600 text-sm leading-none py-1">↓</div>
                <div className="px-6 py-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/30 text-xs font-bold text-emerald-700 dark:text-emerald-300 text-center w-60">
                  API Gateway + Cognito Auth
                </div>
                <div className="text-slate-300 dark:text-slate-600 text-sm leading-none py-1">↓</div>
                <div className="px-6 py-2.5 rounded-lg border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/30 text-xs font-bold text-blue-700 dark:text-blue-300 text-center w-60">
                  8 Microservices (ECS Fargate)
                </div>
                <div className="text-slate-300 dark:text-slate-600 text-sm leading-none py-1">↓</div>
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/30 text-xs font-bold text-indigo-700 dark:text-indigo-300 text-center w-32">
                    Aurora<br /><span className="font-normal text-indigo-500 dark:text-indigo-400 text-[10px]">Serverless v2</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-base">+</span>
                  <div className="px-4 py-2.5 rounded-lg border border-purple-200 dark:border-purple-800/60 bg-purple-50 dark:bg-purple-950/30 text-xs font-bold text-purple-700 dark:text-purple-300 text-center w-32">
                    EventBridge<br /><span className="font-normal text-purple-500 dark:text-purple-400 text-[10px]">+ SQS FIFO</span>
                  </div>
                </div>
                <div className="text-slate-300 dark:text-slate-600 text-sm leading-none py-1">↓</div>
                <div className="px-6 py-2.5 rounded-lg border border-fuchsia-200 dark:border-fuchsia-800/60 bg-fuchsia-50 dark:bg-fuchsia-950/30 text-xs font-bold text-fuchsia-700 dark:text-fuchsia-300 text-center w-60">
                  LangGraph AI (Retrieval over event store)
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40"
                >
                  {s}
                </span>
              ))}
            </div>
            <p>
              It runs on AWS with ECS Fargate for compute, Aurora Serverless v2 for data, EventBridge and
              SQS FIFO for the event backbone that powers the correlation timeline, Cognito for auth, and
              CloudFront at the edge. Deployments ship through GitHub Actions into ArgoCD canary rollouts,
              and the AI layer is built on LangGraph agents with retrieval over the event store.
            </p>

            {/* Integrations */}
            <div>
              <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Connected sources:</p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
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
              'Live in production at vyne.vercel.app, owned end-to-end as Product Owner, from architecture and infrastructure to UI and release.',
              'Business and infrastructure events now share one timeline, turning multi-tool incident archaeology into a single correlated view.',
              'The causal AI engine connects revenue dips, churn, and incidents back to the deploys and changes that drove them.',
              '15+ modules and 7 third-party integrations ship without forcing teams off the tools they already use.',
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
