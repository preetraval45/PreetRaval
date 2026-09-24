import { projects } from '../data/projects';

/*
 * Endless crawl of every project and its status, in the spirit of a
 * "searches in play" ticker. The list is rendered twice so the loop is
 * seamless; the copy is hidden from screen readers.
 */
const items = projects.map((p, i) => ({
  n: String(i + 1).padStart(2, '0'),
  name: p.title.split(':')[0],
  status: p.status,
}));

const dot: Record<string, string> = {
  Live: 'bg-green-500',
  Production: 'bg-green-500',
  'In Progress': 'bg-amber-500',
};

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.n} className="flex items-center gap-2.5 whitespace-nowrap text-sm">
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{it.n}</span>
          <span className="font-semibold text-slate-800 dark:text-slate-100">{it.name}</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span className={`w-1.5 h-1.5 rounded-full ${dot[it.status] ?? 'bg-slate-400'}`} />
            {it.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectTicker() {
  return (
    <div className="relative border-y border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="flex items-center">
        <span className="hidden sm:flex shrink-0 items-center gap-2 pl-6 lg:pl-16 pr-6 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 border-r border-slate-200 dark:border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Shipped &amp; shipping
        </span>
        <div className="ticker-mask relative flex-1 overflow-hidden py-3">
          <div className="ticker-track flex w-max">
            <Row />
            <Row hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
