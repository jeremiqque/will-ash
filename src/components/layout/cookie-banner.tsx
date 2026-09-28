"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

/**
 * Minimal NDPA-friendly cookie notice. The site uses no non-essential
 * cookies by default; the stored choice gates any analytics added later
 * (read it with getCookieConsent()).
 */
const KEY = "wa-cookie-consent";
type Consent = "accepted" | "declined";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export function getCookieConsent(): Consent | null {
  try {
    return (localStorage.getItem(KEY) as Consent | null) ?? null;
  } catch {
    return null;
  }
}

function setConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* storage unavailable — banner simply reappears next visit */
  }
  listeners.forEach((l) => l());
}

export function CookieBanner() {
  // Rendered on the server (so it paints with the page, no late pop-in).
  // For visitors who already chose, an inline script in <head> hides it before first paint.
  const consent = useSyncExternalStore(subscribe, () => getCookieConsent() ?? "unset", () => "unset");
  if (consent !== "unset") return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      data-cookie-banner
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-xl border border-ink/20 bg-canvas p-5 text-ink sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-body-sm">
        We use essential cookies to run this site. With your permission we may also use privacy-friendly analytics.
        See our{" "}
        <Link href="/cookies" className="underline decoration-primary underline-offset-4">
          Cookie Notice
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setConsent("accepted")}
          className="text-button min-h-11 rounded-xs bg-ink px-5 text-canvas transition-colors hover:bg-slate"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setConsent("declined")}
          className="text-button min-h-11 rounded-xs border border-ink px-5 transition-colors hover:bg-ink hover:text-canvas"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
