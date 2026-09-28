/**
 * Icon set — Hugeicons (Stroke Rounded, free) via @hugeicons/react.
 * Browse: https://hugeicons.com/icons
 *
 * Every icon in the site goes through this file, so swapping an icon means
 * changing one import here. Icons inherit `currentColor` and default to
 * 1.5 stroke to match the brand's thin-line style.
 */
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowRight02Icon,
  ArrowUpRight03Icon,
  Award01Icon,
  Calendar03Icon,
  Call02Icon,
  Cancel01Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  GoogleIcon,
  Navigation03Icon,
  Rhombus01Icon,
  InstagramIcon,
  JusticeScale01Icon,
  Location01Icon,
  Mail01Icon,
  Menu01Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";

type IconSvg = Parameters<typeof HugeiconsIcon>[0]["icon"];
type IconProps = { className?: string; size?: number; strokeWidth?: number };

function make(icon: IconSvg, displayName: string) {
  const Icon = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
  Icon.displayName = displayName;
  return Icon;
}

/* UI */
export const ArrowRight = make(ArrowRight02Icon, "ArrowRight");
export const ArrowUpRight = make(ArrowUpRight03Icon, "ArrowUpRight");
export const Calendar = make(Calendar03Icon, "Calendar");
export const ChevronDown = make(ArrowDown01Icon, "ChevronDown");
export const Plus = make(Add01Icon, "Plus");
export const Menu = make(Menu01Icon, "Menu");
export const Close = make(Cancel01Icon, "Close");

/* Section label marker (echoes the angular W&A mark) */
export const Marker = make(Rhombus01Icon, "Marker");

/* Lists */
export const Bullet = make(CheckmarkCircle02Icon, "Bullet");

/**
 * The same Hugeicon as a CSS data URI, for places where lists come from rich
 * text (legal pages) and an inline component can't be inserted per item.
 */
export function iconDataUri(icon: IconSvg, stroke = "#d81b24", strokeWidth = 1.5) {
  const toAttr = (k: string) => k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
  const body = (icon as unknown as [string, Record<string, string>][])
    .map(([tag, attrs]) => {
      const a = Object.entries(attrs)
        .filter(([k]) => k !== "key")
        .map(([k, v]) => {
          if (v === "currentColor") v = stroke;
          if (k === "strokeWidth") v = String(strokeWidth);
          return `${toAttr(k)}="${v}"`;
        })
        .join(" ");
      return `<${tag} ${a}/>`;
    })
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
export const bulletDataUri = iconDataUri(CheckmarkCircle02Icon);

/* Contact */
export const Mail = make(Mail01Icon, "Mail");
export const Clock = make(Clock01Icon, "Clock");
export const Phone = make(Call02Icon, "Phone");
export const Instagram = make(InstagramIcon, "Instagram");
export const Google = make(GoogleIcon, "Google");
export const Pin = make(Location01Icon, "Pin");

/* Values — "What makes us different" */
export const valueIcons = {
  compass: make(Navigation03Icon, "Navigation"), // Clarity + guidance
  scale: make(JusticeScale01Icon, "Scale"), // Flexible fee pricing
  spark: make(Award01Icon, "Award"), // Specialised expertise
  shield: make(SecurityCheckIcon, "Shield"), // Peace of mind
};
