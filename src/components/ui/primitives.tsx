import Link from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Marker } from "./icons";

/* ── Container ─────────────────────────────────────────────── */
export function Container({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("mx-auto w-full max-w-site px-4 sm:px-8", className)} {...props}>
      {children}
    </div>
  );
}

/* ── Section band ──────────────────────────────────────────── */
type Tone = "light" | "soft" | "dark" | "red";
const toneClass: Record<Tone, string> = {
  light: "bg-canvas text-ink",
  soft: "bg-canvas-soft text-ink",
  dark: "bg-ink text-canvas",
  red: "bg-primary text-canvas",
};

export function Section({
  tone = "light",
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section"> & { tone?: Tone }) {
  return (
    <section className={clsx("section-y", toneClass[tone], className)} {...props}>
      {children}
    </section>
  );
}

/* ── Eyebrow: red rule + uppercase label ───────────────────── */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-eyebrow flex items-center gap-2.5",
        tone === "light" ? "text-primary" : "text-canvas",
        className,
      )}
    >
      <Marker size={12} strokeWidth={2} className="shrink-0 text-primary" />
      {children}
    </p>
  );
}

/* ── Buttons ───────────────────────────────────────────────── */
type ButtonVariant = "primary" | "dark" | "outline-dark" | "outline-light" | "light";

const buttonBase =
  "text-button group inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xs border px-6 py-4 transition-colors duration-200 ease-out";

const buttonVariant: Record<ButtonVariant, string> = {
  primary: "border-primary bg-primary text-canvas hover:border-primary-hover hover:bg-primary-hover",
  dark: "border-ink bg-ink text-canvas hover:border-slate hover:bg-slate",
  "outline-dark": "border-ink bg-transparent text-ink hover:bg-ink hover:text-canvas",
  "outline-light": "border-canvas/70 bg-transparent text-canvas hover:border-canvas hover:bg-canvas hover:text-ink",
  light: "border-canvas bg-canvas text-ink hover:bg-transparent hover:text-canvas",
};

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <Link href={href} className={clsx(buttonBase, buttonVariant[variant], className)} {...props}>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ── Arrow text link ───────────────────────────────────────── */
export function ArrowLink({
  href,
  tone = "light",
  className,
  children,
}: {
  href: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 font-semibold",
        tone === "light" ? "text-ink" : "text-canvas",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-[1.04]"
        />
      </span>
      <ArrowRight className="size-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/* ── Arrow badge: circular link indicator for cards and rows ──
   Sits inside a parent with the `group` class; fills red on hover. */
export function ArrowBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={clsx(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-canvas",
        className,
      )}
    >
      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
    </span>
  );
}

/* ── Image placeholder — clearly labelled for the client ─── */
export function ImagePlaceholder({
  label,
  size,
  tone = "light",
  className,
}: {
  label: string;
  size: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={clsx(
        "flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed p-6 text-center",
        tone === "light"
          ? "border-ink/25 bg-canvas-soft text-slate"
          : "border-canvas/25 bg-canvas/5 text-silver",
        className,
      )}
    >
      <span className="text-caps">Image placeholder</span>
      <span className="text-body-sm font-medium">{label}</span>
      <span className="text-caption opacity-80">{size}</span>
    </div>
  );
}
