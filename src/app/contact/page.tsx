import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/shared/page-hero";
import { OfficeCard } from "@/components/shared/blocks";
import { ContactForm } from "@/components/forms/contact-form";
import { ArrowLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { CopyButton } from "@/components/ui/copy-button";
import { Clock, Google, Instagram, Mail, Phone } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Will & Ash in Lagos or Abuja. Send an enquiry or book a free, confidential consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s talk about what matters to you"
        body="Send us a message and a member of our team will respond within one business day. Everything you share is treated in confidence."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Section tone="light" aria-labelledby="form-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Send an enquiry</Eyebrow>
              <h2 id="form-heading" className="text-display-md mt-5 mb-10">
                Tell us about your matter
              </h2>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <aside aria-label="Contact details" className="lg:sticky lg:top-28">
                <div className="rounded-card bg-ink p-8 text-canvas">
                  <h2 className="text-display-sm">Direct contact</h2>
                  <ul className="text-body-sm mt-8 space-y-6">
                    <li className="flex gap-4">
                      <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-caps text-silver">Email</p>
                        <a href={`mailto:${site.email}`} className="mt-1 block break-all hover:underline">
                          {site.email}
                        </a>
                        <CopyButton value={site.email} label="email address" className="mt-3" />
                      </div>
                    </li>
                    {site.phone && (
                      <li className="flex gap-4">
                        <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-caps text-silver">Phone</p>
                          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-1 block hover:underline">
                            {site.phone}
                          </a>
                        </div>
                      </li>
                    )}
                    <li className="flex gap-4">
                      <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-caps text-silver">Hours</p>
                        <p className="mt-1">{site.hours}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Instagram className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-caps text-silver">Social</p>
                        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:underline">
                          @willandashllp
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Google className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-caps text-silver">Google</p>
                        <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:underline">
                          Find us on Google
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 rounded-card border border-hairline p-8">
                  <h2 className="text-title">Prefer to speak first?</h2>
                  <p className="text-body-sm mt-2 text-slate">
                    Book a free 30-minute consultation, in person or by video.
                  </p>
                  <ArrowLink href="/book" className="mt-6">
                    Book a consultation
                  </ArrowLink>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="soft" aria-labelledby="offices-heading">
        <Container>
          <Reveal>
            <Eyebrow>Our offices</Eyebrow>
            <h2 id="offices-heading" className="text-display-lg mt-5">
              Visit us in Lagos or Abuja
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {site.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <OfficeCard office={o} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
