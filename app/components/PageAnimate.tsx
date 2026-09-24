'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

/*
 * Wrap an inner page in <PageAnimate> to give it the same motion
 * as the landing page without per-page markup: the header block around the
 * h1 plays the staggered intro, and every content block below it rises in as
 * it scrolls into view. Grids and tall wrappers are split into their items so
 * cards come in one by one instead of as one slab.
 */
const STEP_MS = 80;
const MAX_STAGGER_MS = 400;

function shouldSplit(el: HTMLElement, depth: number) {
  if (depth >= 4 || el.children.length < 2) return false;
  const display = getComputedStyle(el).display;
  if (display === 'grid' || display === 'inline-grid') return true;
  return el.getBoundingClientRect().height > window.innerHeight * 0.6;
}

function collectTargets(el: Element, header: Element, depth: number, out: HTMLElement[]) {
  for (const child of Array.from(el.children)) {
    if (!(child instanceof HTMLElement)) continue;
    if (child === header || child.classList.contains('reveal')) continue;
    const pos = getComputedStyle(child).position;
    if (pos === 'absolute' || pos === 'fixed') continue;
    if (child.contains(header) || shouldSplit(child, depth)) {
      collectTargets(child, header, depth + 1, out);
    } else {
      out.push(child);
    }
  }
}

export function PageAnimate({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Runs when the page itself mounts, which matters because pages stream in
  // behind app/loading.tsx after the root layout has already hydrated.
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = root.querySelector('h1')?.parentElement;
    if (reduced || !header) {
      root.classList.add('animate-ready');
      return;
    }

    Array.from(header.children).forEach((child, i) => {
      child.classList.add('intro');
      (child as HTMLElement).style.setProperty('--d', `${i * 110}ms`);
    });

    const targets: HTMLElement[] = [];
    collectTargets(root, header, 0, targets);
    targets.forEach((t) => t.classList.add('auto-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        // Items that appear together stagger in reading order.
        let i = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i * STEP_MS, MAX_STAGGER_MS)}ms`;
          el.classList.add('is-visible');
          // Once in place, hand the element back to its own hover transitions.
          const done = (e: TransitionEvent) => {
            if (e.target !== el) return;
            el.removeEventListener('transitionend', done);
            el.style.transitionDelay = '';
            el.classList.remove('auto-reveal', 'is-visible');
          };
          el.addEventListener('transitionend', done);
          observer.unobserve(el);
          i++;
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    targets.forEach((t) => observer.observe(t));
    root.classList.add('animate-ready');

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="page-animate">{children}</div>;
}
