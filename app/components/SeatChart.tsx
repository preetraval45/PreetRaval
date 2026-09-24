'use client';

import { ArrowRight, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';

/*
 * "Point to the seat": an org chart of the roles I'm going after. A highlight
 * sweeps from seat to seat on its own; picking one stops the sweep and opens
 * its brief. Every claim in a brief comes from the experience and project
 * data shown elsewhere on the site.
 */
type Seat = {
  title: string;
  status: 'Current' | 'Held' | 'Ready';
  own: string;
  proof: string;
  stack: string[];
};

const groups: { label: string; seats: Seat[] }[] = [
  {
    label: 'Product',
    seats: [
      {
        title: 'Full-Stack Developer',
        status: 'Ready',
        own: 'Features end to end: schema, API, UI, and the deploy that ships them.',
        proof: 'Built NEXUS solo from day one, through staging to production. 50+ people use it daily.',
        stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Frontend Developer',
        status: 'Held',
        own: 'Responsive, cross-browser UI, from Figma mockup to production.',
        proof: 'A year as a frontend intern at Skillship Foundation, plus Serenity Living designed and launched solo.',
        stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
    ],
  },
  {
    label: 'Platform',
    seats: [
      {
        title: 'Software Engineer',
        status: 'Held',
        own: 'Production systems that whole teams rely on every day.',
        proof: 'Sole engineer behind NEXUS, KOSH, ACI Forge, and the PDF to BOM converter at American Circuits.',
        stack: ['TypeScript', 'Python', 'Next.js', 'FastAPI'],
      },
      {
        title: 'Backend Engineer',
        status: 'Ready',
        own: 'APIs, data models, auth, and the integrations between systems.',
        proof: 'Fed KOSH inventory data into NEXUS to predict production delays, and put SSO + MFA across ACI Forge.',
        stack: ['FastAPI', 'PostgreSQL', 'REST', 'SSO / MFA'],
      },
    ],
  },
  {
    label: 'Infra & AI',
    seats: [
      {
        title: 'DevOps Engineer',
        status: 'Current',
        own: 'Servers, pipelines, monitoring, and uptime.',
        proof: 'Built a 4-server on-prem setup holding 99%+ uptime; CI/CD automation saves 5+ hours a week across 3 teams.',
        stack: ['Linux', 'Docker', 'Kubernetes', 'GitHub Actions'],
      },
      {
        title: 'Generative AI Engineer',
        status: 'Ready',
        own: 'LLM features that do real work in production, not demos.',
        proof: 'The PDF to BOM converter pairs OCR with an LLM and is used daily by engineering and procurement.',
        stack: ['OpenAI', 'LangGraph', 'Python', 'OCR'],
      },
    ],
  },
];

const seats = groups.flatMap((g) => g.seats);
// Index of each group's first seat within the flat list.
const groupStart = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.seats.length, 0));
const SWEEP_MS = 3400;

const statusStyle: Record<Seat['status'], string> = {
  Current: 'text-green-600 dark:text-green-400',
  Held: 'text-blue-600 dark:text-blue-400',
  Ready: 'text-indigo-600 dark:text-indigo-300',
};
const statusDot: Record<Seat['status'], string> = {
  Current: 'bg-green-500 animate-pulse',
  Held: 'bg-blue-500',
  Ready: 'bg-indigo-400',
};

const pad = (n: number) => String(n).padStart(2, '0');

export function SeatChart() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const seatRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sweeping = auto && inView && !paused;

  useEffect(() => {
    // Reduced-motion visitors get a still chart they drive themselves.
    if (!sweeping || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % seats.length), SWEEP_MS);
    return () => clearTimeout(id);
  }, [sweeping, active]);

  const pick = useCallback((i: number, focus = false) => {
    const next = (i + seats.length) % seats.length;
    setAuto(false);
    setActive(next);
    if (focus) seatRefs.current[next]?.focus();
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    const moves: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in moves) {
      e.preventDefault();
      pick(active + moves[e.key], true);
    }
  };

  const seat = seats[active];

  return (
    <section
      className="section-container px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Point to the seat
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Which seat are you hiring for?</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Pick a role to see what I&apos;d own, the proof behind it, and the stack I&apos;d bring.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto items-start">
        {/* The chart */}
        <div ref={chartRef} className={`seat-chart lg:col-span-7 ${inView ? 'in-view' : ''}`} onKeyDown={onKeyDown}>
          <div className="flex flex-col items-center">
            <div className="seat-in inline-flex items-center gap-3 px-5 py-3 rounded-2xl border-2 border-blue-500/40 bg-white dark:bg-slate-900 shadow-lg shadow-blue-500/10" style={{ '--d': '0ms' } as CSSProperties}>
              <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                <Users className="w-5 h-5" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">Your team</span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Reporting line set by you</span>
              </span>
            </div>
            {/* Connectors: trunk, crossbar, and one drop per group (hidden on phones) */}
            <span className="draw-y hidden sm:block w-px h-8 bg-slate-300 dark:bg-slate-700" />
            <span className="draw-x hidden sm:block h-px w-2/3 bg-slate-300 dark:bg-slate-700" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-0">
            {groups.map((g, gi) => (
              <div key={g.label} className="flex flex-col items-center">
                <span className="draw-y hidden sm:block w-px h-6 bg-slate-300 dark:bg-slate-700" />
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mt-2 mb-3">
                  {g.label}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 w-full">
                  {g.seats.map((s, si) => {
                    const i = groupStart[gi] + si;
                    const on = i === active;
                    return (
                      <button
                        key={s.title}
                        ref={(el) => { seatRefs.current[i] = el; }}
                        type="button"
                        onClick={() => pick(i)}
                        aria-pressed={on}
                        tabIndex={on ? 0 : -1}
                        style={{ '--d': `${200 + i * 90}ms` } as CSSProperties}
                        className={`seat-in seat group relative overflow-hidden text-left p-3.5 rounded-xl border transition-all duration-300 ${
                          on
                            ? 'seat-on border-blue-500 bg-blue-50 dark:bg-blue-500/10 shadow-lg shadow-blue-500/20 -translate-y-0.5'
                            : 'border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 hover:border-blue-300 dark:hover:border-blue-700'
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2 mb-1.5">
                          <span className={`font-mono text-[11px] ${on ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>{pad(i + 1)}</span>
                          <span className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider ${statusStyle[s.status]}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusDot[s.status]}`} />
                            {s.status}
                          </span>
                        </span>
                        <span className={`block text-sm font-bold leading-snug ${on ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-500 dark:text-slate-500">
            <span className="hidden sm:inline">Click a seat, or use the arrow keys to move between them.</span>
            <span className="sm:hidden">Tap a seat to open its brief.</span>
          </p>
        </div>

        {/* The brief */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/80 shadow-xl overflow-hidden" aria-live="polite">
            <div className="h-1 bg-slate-100 dark:bg-slate-800">
              {sweeping && <div key={active} className="seat-progress h-full bg-linear-to-r from-blue-500 to-indigo-500" style={{ animationDuration: `${SWEEP_MS}ms` }} />}
              {!sweeping && <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500" />}
            </div>
            <div key={active} className="brief-in p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-widest text-slate-500 dark:text-slate-400">
                  SEAT {pad(active + 1)} / {pad(seats.length)}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${statusStyle[seat.status]}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[seat.status]}`} />
                  {seat.status === 'Current' ? 'My current role' : seat.status === 'Held' ? 'Role I have held' : 'Ready to step in'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5">{seat.title}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-1">What I&apos;d own</dt>
                  <dd className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{seat.own}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-1">Proof</dt>
                  <dd className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{seat.proof}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-2">Stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {seat.stack.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex items-center justify-between gap-3 px-6 sm:px-7 py-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <button type="button" onClick={() => pick(active - 1)} aria-label="Previous seat" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => pick(active + 1)} aria-label="Next seat" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all">
                Talk about this seat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
