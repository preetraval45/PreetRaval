import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ShieldAlert,
  Radar,
  GitMerge,
  ShieldCheck,
  Activity,
  Cloud,
  Zap,
  Target,
  CheckCircle2,
  Compass,
  FileText,
} from 'lucide-react';

const modules = [
  { name: 'Drishti', role: 'Perception', body: 'Observes infrastructure and security telemetry across every connected tool.' },
  { name: 'Smriti', role: 'Memory', body: 'Retains the history of past incidents so patterns and precedent inform new ones.' },
  { name: 'Buddhi', role: 'Reasoning', body: 'Builds the causal chain, mapping each signal to MITRE ATT&CK techniques.' },
  { name: 'Kavach', role: 'Detection', body: 'Flags anomalies and correlates fragmented alerts into a single candidate incident.' },
  { name: 'Dharma', role: 'Policy', body: 'Enforces the risk gates: blast radius, confidence, and reversibility before anything executes.' },
  { name: 'Astra', role: 'Remediation', body: 'Carries out authorized response actions with dry-run mode and a documented rollback path.' },
];

const techStack = [
  'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Kubernetes (EKS)', 'Docker',
  'Terraform', 'AWS', 'Prometheus', 'OpenTelemetry', 'Elasticsearch',
];

const capabilities = [
  {
    icon: GitMerge,
    title: 'Incident assembly',
    body: 'Correlates scattered signals across multiple security tools into one incident, with documented causal relationships and MITRE ATT&CK technique mappings instead of a pile of unrelated alerts.',
  },
  {
    icon: FileText,
    title: 'Evidence linking',
    body: 'Every claim the system makes carries a traceable link back to the supporting evidence, so an analyst can verify the reasoning instead of taking it on faith.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk-scored response',
    body: 'Before any action runs, it is scored on blast radius, confidence, and reversibility, and gated behind the human authorization tier that score requires.',
  },
  {
    icon: ShieldCheck,
    title: 'Controlled execution',
    body: 'Dry-run mode, a policy engine, and a rollback plan documented before execution guard against the system taking an accidental or irreversible action.',
  },
  {
    icon: Radar,
    title: 'Real-time Observatory',
    body: 'Monitors actual threats hourly: ransomware disclosures, active botnet infrastructure, and newly exploited vulnerabilities pulled from CISA’s Known Exploited Vulnerabilities catalog.',
  },
  {
    icon: Activity,
    title: 'Closed-loop workflow',
    body: 'Observe, Understand, Predict, Decide, Act, Verify, Learn: a seven-step cycle built to close the gap between the first alert and a recognized, actionable incident.',
  },
];

export default function PashupatastraCaseStudyPage() {
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
              Live
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">4 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Pashupatastra</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            An AI-native autonomous security operations platform. Four alerts in four tools are one
            intrusion; Pashupatastra is the thing that says so, then proposes a risk-scored,
            human-authorized response.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="https://pashupatastra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
            <a
              href="https://github.com/preetraval45/PASHUPATASTRA"
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
              A real intrusion rarely shows up as one alert. It shows up as four alerts in four
              different tools, each one true on its own and meaningless in isolation. SIEM flags a
              login anomaly, EDR flags a suspicious process, the cloud provider flags an unusual API
              call, and nobody connects them until an analyst manually stitches the timeline together,
              often long after the damage is done.
            </p>
            <p>
              Minutes matter between the first alert and a recognized incident, but most security
              stacks are built to generate signal, not to reason about it. Pashupatastra exists to
              close that gap: assemble the fragments into one incident, show the causal chain, and
              propose a response an analyst can trust and authorize quickly.
            </p>
          </div>
        </section>

        {/* What I'm Building */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">What I&apos;m Building</h2>
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
              The system is organized around a closed loop, Observe &rarr; Understand &rarr; Predict
              &rarr; Decide &rarr; Act &rarr; Verify &rarr; Learn, implemented as six cooperating
              modules, each named for the capability it owns:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {modules.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-indigo-100 dark:border-indigo-900/40 bg-slate-50 dark:bg-slate-900/40 p-4"
                >
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="font-bold text-indigo-700 dark:text-indigo-300">{m.name}</span>
                    <span className="text-xs font-semibold text-indigo-400 dark:text-indigo-500 uppercase tracking-wide">{m.role}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>

            <p>
              It runs on Kubernetes (EKS) with a Python/FastAPI backend and a Next.js/TypeScript
              dashboard, provisioned through Terraform and Docker. Observability runs on Prometheus,
              OpenTelemetry, and Elasticsearch, feeding the correlation and detection modules the raw
              signal they reason over.
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">What&apos;s Next</h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Pashupatastra is in active, early-stage development. The architecture and roadmap are
              set; the current focus is building out the Buddhi reasoning engine and the Astra
              remediation layer past their foundation phase, then widening the Observatory&apos;s
              integrations beyond the CISA KEV catalog to live SIEM and EDR feeds.
            </p>
            <ul className="space-y-3">
              {[
                'Ship the Buddhi causal-reasoning engine and Astra’s policy-gated execution past Phase 0.',
                'Connect the Observatory to live SIEM, EDR, and cloud audit-log sources, not just public threat feeds.',
                'Write a technical article on assembling fragmented security alerts into causal, evidence-linked incidents, the cyber-AI approach behind Pashupatastra.',
                'Publish a research paper evaluating the Observe → Understand → Predict → Decide → Act → Verify → Learn loop against real incident data, at the intersection of autonomous AI systems and security operations.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              'Live at pashupatastra.vercel.app with the Observatory tracking real threats hourly: ransomware disclosures, active botnet infrastructure, and CISA KEV exploited vulnerabilities.',
              'Architecture and six-module design documented end-to-end, from perception through policy-gated remediation.',
              'A concrete cyber-AI thesis, causal incident assembly with evidence-linked, risk-scored response, ready to carry into an article and a research paper.',
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
