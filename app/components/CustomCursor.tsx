'use client';

import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], label, select, summary, .cursor-hover';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';

/*
 * A ring that follows the native pointer and swells over clickable things,
 * plus a soft glow behind the page content. The native cursor stays visible
 * so clicks always land exactly where the arrow points. Only mounts for a
 * mouse (fine pointer) with motion allowed.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!ring || !glow) return;

    const root = document.documentElement;

    const mouse = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const glowPos = { x: -100, y: -100 };
    let frame = 0;
    let visible = false;

    const setVisible = (v: boolean) => {
      visible = v;
      root.classList.toggle('cursor-visible', v);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        // Snap on first entry so the ring doesn't fly in from the corner.
        ringPos.x = glowPos.x = mouse.x;
        ringPos.y = glowPos.y = mouse.y;
        setVisible(true);
      }
      updateHover(e.target as Element | null);
    };
    const updateHover = (target: Element | null) => {
      root.classList.toggle('cursor-hovering', !!target?.closest(INTERACTIVE));
      root.classList.toggle('cursor-text', !!target?.closest(TEXT_INPUT));
    };
    // Content moves under a still mouse while scrolling, so re-check hover.
    const onScroll = () => {
      if (visible) updateHover(document.elementFromPoint(mouse.x, mouse.y));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => root.classList.add('cursor-pressed');
    const onUp = () => root.classList.remove('cursor-pressed');

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.4;
      ringPos.y += (mouse.y - ringPos.y) * 0.4;
      glowPos.x += (mouse.x - glowPos.x) * 0.08;
      glowPos.y += (mouse.y - glowPos.y) * 0.08;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      root.classList.remove('cursor-visible', 'cursor-hovering', 'cursor-text', 'cursor-pressed');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
