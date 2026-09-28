"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a stat up from zero when it scrolls into view ("15+" → 0…15+).
 * The final value is rendered on the server, so search engines, no-JS
 * visitors and reduced-motion users always see the real number.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const [shown, setShown] = useState<number | null>(null); // null = show final value
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || target < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only animate stats that start below the fold (never "reset" a visible number).
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * target));
          if (t < 1) raf = requestAnimationFrame(tick);
          else setShown(null);
        };
        setShown(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [duration, target]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;
  const [, prefix, , suffix] = match;
  return (
    <span ref={ref}>
      {/* Screen readers always get the real value */}
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {prefix}
        {shown ?? target}
        {suffix}
      </span>
    </span>
  );
}
