"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

/**
 * "On this page" contents for the legal pages:
 *  - highlights the section currently being read,
 *  - shows a thin reading-progress bar at the very top of the window.
 */
export function LegalToc({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    // Track which sections cross a band near the top of the screen; the first
    // one in document order is the one being read.
    const inBand = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        }
        const first = items.find((i) => inBand.has(i.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <>
      <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5">
        <div
          className="h-full origin-left bg-primary transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <nav aria-label="On this page" className="lg:sticky lg:top-28">
        <p className="text-caps text-slate">On this page</p>
        <ol className="text-body-sm mt-4 space-y-2 border-l border-hairline">
          {items.map((s, i) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={clsx(
                    "-ml-px block border-l py-1 pl-4 transition-[color,border-color,padding] duration-300",
                    isActive
                      ? "border-primary pl-5 font-medium text-ink"
                      : "border-transparent text-slate hover:border-ink/30 hover:text-ink",
                  )}
                >
                  {i + 1}. {s.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
