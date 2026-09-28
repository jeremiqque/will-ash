import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/content/practice-areas";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/shared/blocks";
import { ArrowBadge, ButtonLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Corporate, disputes, trusts and estates, PPP and infrastructure, technology and data protection, financial services and the creative economy.",
  alternates: { canonical: "/practice-areas" },
};

const pad = (n: number) => String(n).padStart(3, "0");

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title="Focused expertise for complex matters"
        body="Seven practices serving governments, institutions, businesses and families, each led with the same commitment to clarity, precision and commercial sense."
        crumbs={[{ label: "Practice Areas", href: "/practice-areas" }]}
        image={{ src: images.libraryBusts, alt: "A law library lined with books and classical busts" }}
      />

      <Section tone="light" aria-label="All practice areas">
        <Container>
          <ul className="border-t border-hairline">
            {practiceAreas.map((p, i) => (
              <Reveal as="li" key={p.slug} className="border-b border-hairline">
                <Link
                  href={`/practice-areas/${p.slug}`}
                  className="group grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-12 md:gap-8"
                >
                  <span className="text-caps text-slate tabular-nums transition-colors group-hover:text-primary md:col-span-1">
                    {pad(i + 1)}
                  </span>
                  <h2 className="text-display-sm transition-transform duration-300 ease-out group-hover:translate-x-2 md:col-span-5">{p.title}</h2>
                  <p className="text-body-sm text-slate md:col-span-4">{p.summary}</p>
                  <div className="hidden items-center justify-end gap-6 md:col-span-2 md:flex">
                    <div className="relative aspect-[4/3] w-24 overflow-hidden rounded-card">
                      {p.image ? (
                        <Image
                          placeholder="blur"
                          src={p.image.src}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                          style={p.image.position ? { objectPosition: p.image.position } : undefined}
                        />
                      ) : (
                        <div className="h-full w-full border border-dashed border-ink/25 bg-canvas-soft" />
                      )}
                    </div>
                    <ArrowBadge />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="soft" aria-labelledby="unsure-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            <Reveal className="lg:col-span-6">
              <Eyebrow>Not sure where to start?</Eyebrow>
              <h2 id="unsure-heading" className="text-display-lg mt-5">
                Many matters cross more than one practice
              </h2>
              <p className="text-body-md measure mt-6 text-slate">
                Tell us about your situation and we will bring together the right expertise, so you get joined-up
                advice, not separate opinions.
              </p>
              <ButtonLink href="/contact" variant="dark" arrow className="mt-10">
                Describe your matter
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                <Image
                  placeholder="blur"
                  src={images.lawyersMeeting}
                  alt="Colleagues in conversation beside a desk with documents and a pen"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
