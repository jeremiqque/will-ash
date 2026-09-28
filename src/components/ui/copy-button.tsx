"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Copy, Tick } from "./icons";

/** Small copy-to-clipboard button with a brief "Copied" confirmation. */
export function CopyButton({ value, label, className }: { value: string; label: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* clipboard unavailable: the address is still visible to copy manually */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className={clsx(
        "text-caption inline-flex h-8 items-center gap-1.5 rounded-full border px-3 transition-colors duration-200",
        copied ? "border-primary bg-primary text-canvas" : "border-hairline-dark text-silver hover:border-canvas hover:text-canvas",
        className,
      )}
    >
      {copied ? <Tick size={14} strokeWidth={2} className="pop-in" /> : <Copy size={14} />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
