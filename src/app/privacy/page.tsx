import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Will & Ash collects, uses and protects personal data, in line with the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "/privacy" },
};

// DRAFT — to be reviewed and approved by the firm's data protection team.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      href="/privacy"
      updated="[date]"
      intro="How we collect, use and protect your personal data when you use this website or contact us, in line with the Nigeria Data Protection Act 2023 (NDPA)."
      sections={[
        {
          id: "who-we-are",
          title: "Who we are",
          body: (
            <>
              <p>
                {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data controller for personal data collected
                through this website. Our offices are in Lagos and Abuja, Nigeria.
              </p>
              <p>
                For any privacy question, contact our Data Protection Officer at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. {/* TODO: dedicated DPO email */}
              </p>
            </>
          ),
        },
        {
          id: "data-we-collect",
          title: "Data we collect",
          body: (
            <ul>
              <li>
                <strong>Enquiries:</strong> your name, email address, phone number (optional), the practice area and
                the details you provide in your message.
              </li>
              <li>
                <strong>Consultation bookings:</strong> the details you enter when booking, such as name, email,
                preferred time and a short description of your matter.
              </li>
              <li>
                <strong>Technical data:</strong> limited information needed to run the site securely, such as server
                logs. With your consent, anonymous, cookie-free usage statistics.
              </li>
            </ul>
          ),
        },
        {
          id: "how-we-use",
          title: "How we use your data and our lawful basis",
          body: (
            <ul>
              <li>To respond to your enquiry and arrange a consultation, based on your consent and steps taken at your request before entering into an engagement.</li>
              <li>To check for conflicts of interest before accepting instructions, based on our legal and professional obligations.</li>
              <li>To keep the website secure and working properly, based on our legitimate interests.</li>
              <li>To understand how the site is used (only if you accept analytics), based on your consent.</li>
            </ul>
          ),
        },
        {
          id: "sharing",
          title: "Sharing and international transfers",
          body: (
            <>
              <p>
                We do not sell your personal data. We share it only with service providers who help us run this website
                and our communications, under written agreements that require them to protect it:
              </p>
              <ul>
                <li>Website hosting (e.g. Vercel)</li>
                <li>Email delivery for enquiries (e.g. Resend)</li>
                <li>Consultation scheduling (e.g. Cal.com)</li>
              </ul>
              <p>
                Some of these providers store data outside Nigeria. Where this happens, we rely on the safeguards
                permitted under the NDPA to ensure your data remains adequately protected.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "How long we keep your data",
          body: (
            <p>
              We keep enquiry and booking data only for as long as needed to respond and, if you become a client, in
              line with our professional record-keeping obligations. Enquiries that do not lead to an engagement are
              deleted after [12 months]. {/* TODO: confirm retention period */}
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your rights",
          body: (
            <>
              <p>Under the NDPA you have the right to:</p>
              <ul>
                <li>be informed about how your data is used;</li>
                <li>access a copy of your personal data;</li>
                <li>have inaccurate data corrected;</li>
                <li>have your data erased or its use restricted, in certain circumstances;</li>
                <li>receive your data in a portable format;</li>
                <li>object to processing, and withdraw consent at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. If you are
                not satisfied with our response, you may complain to the Nigeria Data Protection Commission (NDPC).
              </p>
            </>
          ),
        },
        {
          id: "security",
          title: "Security",
          body: (
            <p>
              We use appropriate technical and organisational measures to protect your data, including encrypted
              connections (HTTPS) and restricted access. Please avoid sending highly sensitive information through the
              website form; we will arrange a secure channel once we are engaged.
            </p>
          ),
        },
        {
          id: "cookies",
          title: "Cookies",
          body: (
            <p>
              For details of the cookies and similar technologies we use, see our <Link href="/cookies">Cookie Notice</Link>.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes to this policy",
          body: <p>We may update this policy from time to time. The latest version will always be published on this page.</p>,
        },
      ]}
    />
  );
}
