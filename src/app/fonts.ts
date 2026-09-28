import localFont from "next/font/local";

/**
 * Libre Caslon Display — headings only (single weight, 400).
 * Never use below 24px, never faux-bold or italicise.
 */
export const caslon = localFont({
  src: "../fonts/LibreCaslonDisplay-Regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-caslon",
  adjustFontFallback: "Times New Roman",
  preload: true,
});

/**
 * General Sans — body and UI. 400 body · 500 UI/buttons · 600 titles.
 */
export const generalSans = localFont({
  src: [
    { path: "../fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-general-sans",
  adjustFontFallback: "Arial",
  preload: true,
});
