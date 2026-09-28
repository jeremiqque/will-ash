import { HomeHero } from "@/components/home/hero";
import { CtaBand, ValuesSection } from "@/components/shared/blocks";
import { JsonLd } from "@/components/shared/json-ld";
import {
  ExpectSection,
  FaqSection,
  IntroSection,
  PracticesSection,
  ProcessSection,
  TestimonialSection,
} from "@/components/home/sections";
import { home } from "@/content/home";
import { site } from "@/content/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    foundingDate: String(site.founded),
    openingHours: "Mo-Fr 08:00-20:00",
    areaServed: "Africa",
    sameAs: [site.social.instagram, site.social.google],
    location: site.offices.map((o) => ({
      "@type": "Place",
      name: `${site.name}, ${o.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.address.slice(0, -1).join(", "),
        addressLocality: o.city,
        addressCountry: "NG",
      },
    })),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[jsonLd, faqLd]} />
      <HomeHero />
      <IntroSection />
      <PracticesSection />
      <ExpectSection />
      <ProcessSection />
      <ValuesSection />
      <TestimonialSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
