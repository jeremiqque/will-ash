import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "The cookies and similar technologies used on the Will & Ash website, and how to manage your choices.",
  alternates: { canonical: "/cookies" },
};

// DRAFT — update the table if analytics or other tools are added.
export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Notice"
      href="/cookies"
      updated="[date]"
      intro="We keep tracking to a minimum. This notice explains what we store on your device and why."
      sections={[
        {
          id: "what",
          title: "What are cookies?",
          body: (
            <p>
              Cookies and similar technologies (such as local storage) are small pieces of data saved on your device
              when you visit a website. They help the site work and, with your permission, help us understand how it
              is used.
            </p>
          ),
        },
        {
          id: "essential",
          title: "Essential storage",
          body: (
            <>
              <p>These are needed for the site to work and cannot be switched off:</p>
              <ul>
                <li>
                  <strong>wa-cookie-consent</strong> (local storage) remembers your cookie choice so we don&rsquo;t
                  ask again. Kept until you clear your browser data.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "analytics",
          title: "Analytics (optional)",
          body: (
            <p>
              If you select &ldquo;Accept&rdquo;, we may use privacy-friendly, cookie-free analytics to count page
              visits. It does not identify you or track you across other websites. If you select &ldquo;Decline&rdquo;,
              no analytics are loaded. {/* TODO: name the analytics provider once chosen */}
            </p>
          ),
        },
        {
          id: "third-party",
          title: "Third-party services",
          body: (
            <p>
              Online booking from our <Link href="/book">consultation page</Link> takes place on Cal.com&rsquo;s own
              website, which sets its own cookies. Please see Cal.com&rsquo;s privacy policy for details.
            </p>
          ),
        },
        {
          id: "manage",
          title: "Managing your choices",
          body: (
            <p>
              You can change your choice at any time by clearing this site&rsquo;s data in your browser, and the cookie
              notice will then appear again. Most browsers also let you block or delete cookies in their settings.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          body: (
            <p>
              Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
