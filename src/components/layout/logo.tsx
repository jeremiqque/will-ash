import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { images } from "@/content/images";

/** Logo lock-up: brand mark + wordmark. `tone` = surface it sits on. */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Will & Ash, home"
      className={clsx("inline-flex items-center gap-3", className)}
    >
      <Image
        src={tone === "light" ? images.logoMarkDark : images.logoMarkSilver}
        alt=""
        width={50}
        height={32}
        loading="eager"
        className="h-8 w-auto"
      />
      <span
        className={clsx(
          "text-[0.9375rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase",
          tone === "light" ? "text-ink" : "text-canvas",
        )}
      >
        Will <span className="text-primary">&amp;</span> Ash
      </span>
    </Link>
  );
}
