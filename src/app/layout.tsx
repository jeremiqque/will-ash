import type { Metadata, Viewport } from "next";
import { caslon, generalSans } from "./fonts";
import { site } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Commercial Law Firm in Lagos & Abuja`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${caslon.variable} ${generalSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Hide the cookie notice before first paint if a choice is already stored.
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("wa-cookie-consent"))document.documentElement.classList.add("wa-consented")}catch(e){}`,
          }}
        />
      </head>
      <body>
        {/* Without JS, show scroll-reveal content immediately */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="text-button sr-only z-[60] bg-primary px-5 py-3 text-canvas focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
