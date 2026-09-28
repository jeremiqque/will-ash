import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Terms of use and legal disclaimer for the Will & Ash website.",
  alternates: { canonical: "/disclaimer" },
};

// DRAFT — to be reviewed and approved by the firm.
export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Legal Disclaimer"
      href="/disclaimer"
      updated="[date]"
      intro="Please read these terms before relying on any information on this website."
      sections={[
        {
          id: "no-advice",
          title: "No legal advice",
          body: (
            <p>
              The content on this website is for general information only. It is not legal advice and should not be
              relied on as such. You should obtain specific advice about your circumstances before taking, or
              refraining from, any action.
            </p>
          ),
        },
        {
          id: "no-relationship",
          title: "No lawyer and client relationship",
          body: (
            <p>
              Using this website, sending us an enquiry or booking a consultation does not create a lawyer and client
              relationship. A relationship is formed only once we have confirmed in writing that we will act for you
              and agreed our terms of engagement.
            </p>
          ),
        },
        {
          id: "confidential",
          title: "Confidential information",
          body: (
            <p>
              Until we have confirmed that we can act for you, please do not send confidential or time-sensitive
              information through this website. We treat enquiries with care, but cannot accept obligations to you
              before an engagement is agreed.
            </p>
          ),
        },
        {
          id: "accuracy",
          title: "Accuracy",
          body: (
            <p>
              We aim to keep the website accurate and up to date, but the law changes frequently and we make no
              guarantee that the content is complete or current.
            </p>
          ),
        },
        {
          id: "links",
          title: "External links",
          body: (
            <p>
              Links to third-party websites are provided for convenience. We are not responsible for their content or
              privacy practices.
            </p>
          ),
        },
        {
          id: "ip",
          title: "Intellectual property",
          body: (
            <p>
              Unless stated otherwise, the content, design and branding of this website belong to {site.legalName}. You
              may not reproduce them without our written permission.
            </p>
          ),
        },
        {
          id: "law",
          title: "Governing law",
          body: <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>,
        },
        {
          id: "contact",
          title: "Contact",
          body: (
            <p>
              Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a> or visit our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
