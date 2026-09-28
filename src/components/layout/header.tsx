"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { announcement, consultationHref, navigation, site } from "@/content/site";
import { practiceAreas } from "@/content/practice-areas";
import { Logo } from "./logo";
import { ArrowRight, ChevronDown, Close, Menu } from "@/components/ui/icons";

/**
 * Header, modelled on a clean "contained bar" pattern:
 *  1. A full-width announcement strip (flat silver, one centred link).
 *  2. A solid ink navigation bar, inset from the page edges with a small radius.
 * On scroll the strip collapses and the bar stays pinned near the top.
 * Everything is flat: no blur, no transparency, no shadows, no gradients.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [tucked, setTucked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownId = useId();

  useEffect(() => {
    // Tuck the bar away while scrolling down; bring it back on any scroll up.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY) > 6) {
        setTucked(y > lastY && y > 480);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change (adjust state during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setPracticeOpen(false);
  }

  // Mobile menu: lock scroll, Escape closes.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Desktop dropdown: close on outside click or Escape.
  useEffect(() => {
    if (!practiceOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setPracticeOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPracticeOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [practiceOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkClass = (href: string) =>
    clsx(
      "inline-block py-2 text-[0.875rem] font-medium leading-5 transition-colors",
      isActive(href) ? "text-canvas" : "text-canvas/75 hover:text-canvas",
    );

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
        tucked && !menuOpen && !practiceOpen && "-translate-y-[calc(100%+1rem)]",
      )}
    >
      {/* 1. Announcement strip */}
      <div
        className={clsx(
          "overflow-hidden bg-silver text-ink transition-[max-height] duration-300 ease-out",
          scrolled && !menuOpen ? "max-h-0" : "max-h-10",
        )}
      >
        <div className="flex h-10 items-center justify-center px-4">
          <Link
            href={announcement.href}
            className="text-caption flex h-10 max-w-full items-center truncate font-medium underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-primary"
          >
            {announcement.text}
          </Link>
        </div>
      </div>

      {/* 2. Contained navigation bar */}
      <div className="px-3 pt-3 sm:px-6">
        <div className="mx-auto max-w-[62rem] rounded-card border border-hairline-dark bg-ink text-canvas">
          <div className="flex h-14 items-center justify-between gap-6 pr-2 pl-4 sm:pl-5">
            <Logo tone="dark" className="shrink-0" />

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navigation.map((item) =>
                  item.href === "/practice-areas" ? (
                    <li key={item.href} ref={dropdownRef} className="relative">
                      <button
                        type="button"
                        aria-expanded={practiceOpen}
                        aria-controls={dropdownId}
                        onClick={() => setPracticeOpen((o) => !o)}
                        className={clsx(linkClass(item.href), "inline-flex items-center gap-1")}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={clsx("transition-transform duration-200", practiceOpen && "rotate-180")}
                        />
                      </button>

                      <div
                        id={dropdownId}
                        inert={!practiceOpen}
                        className={clsx(
                          "absolute top-full left-1/2 mt-5 w-[22rem] -translate-x-1/2 rounded-card border border-hairline-dark bg-ink p-2 transition-[opacity,translate,visibility] duration-200 ease-out",
                          practiceOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
                        )}
                      >
                        <ul>
                          {practiceAreas.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/practice-areas/${p.slug}`}
                                aria-current={pathname === `/practice-areas/${p.slug}` ? "page" : undefined}
                                className="text-body-sm block rounded-xs px-3 py-2.5 text-canvas/80 transition-colors hover:bg-canvas/10 hover:text-canvas"
                              >
                                {p.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/practice-areas"
                          className="text-body-sm mt-1 flex items-center justify-between rounded-xs border-t border-hairline-dark px-3 pt-3 pb-2.5 font-medium text-canvas transition-colors hover:text-silver"
                        >
                          All practice areas
                          <ArrowRight size={16} className="text-primary" />
                        </Link>
                      </div>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={linkClass(item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Link
                  href={consultationHref}
                  className="inline-flex h-10 items-center rounded-xs bg-canvas px-4 text-[0.875rem] font-medium text-ink transition-colors hover:bg-silver"
                >
                  Book a consultation
                </Link>
              </div>
              <button
                ref={menuButton}
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-xs text-canvas lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <Close size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu — opens inside the bar */}
          <div
            id="mobile-menu"
            inert={!menuOpen}
            className={clsx(
              "grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
              menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="min-h-0 overflow-hidden">
            <div className="max-h-[calc(100dvh-8.5rem)] overflow-y-auto border-t border-hairline-dark">
            <nav aria-label="Mobile" className="px-5 pt-2 pb-6">
              <ul>
                {navigation.map((item, i) => (
                  <li
                    key={item.href}
                    className={clsx(
                      "transition-[opacity,translate] duration-500 ease-out",
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    )}
                    style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "text-display-sm block border-b border-hairline-dark py-4 transition-colors hover:text-silver",
                        isActive(item.href) && "text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={consultationHref}
                onClick={() => setMenuOpen(false)}
                className="text-button mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xs bg-canvas text-ink"
              >
                Book a consultation <ArrowRight size={16} />
              </Link>
              <div className="text-body-sm mt-6 space-y-1 text-silver">
                <a href={`mailto:${site.email}`} className="block hover:text-canvas">
                  {site.email}
                </a>
                <p>{site.hours}</p>
              </div>
            </nav>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
