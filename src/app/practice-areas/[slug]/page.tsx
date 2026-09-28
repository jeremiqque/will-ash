import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPracticeArea, practiceAreas } from "@/content/practice-areas";
import { consultationHref } from "@/content/site";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/shared/blocks";
import { JsonLd } from "@/components/shared/json-ld";
import { ArrowBadge, ButtonLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Bullet } from "@/components/ui/icons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/practice-areas/${area.slug}` },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const index = practiceAreas.findIndex((p) => p.slug === area.slug);
  const related = [1, 2, 3].map((o) => practiceAreas[(index + o) % practiceAreas.length]);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow={`Practice area · ${String(index + 1).padStart(2, "0")}`}
        title={area.title}
        body={area.summary}
        crumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.shortTitle, href: `/practice-areas/${area.slug}` },
        ]}
        image={area.image && !area.image.lowRes ? area.image : null}
        placeholder={{
          label: area.image?.lowRes ? `${area.shortTitle}: higher-resolution image needed` : `${area.title} image`,
          size: "1600 × 2000 px, portrait",
        }}
      >
        <ButtonLink href={consultationHref} arrow>
          Discuss your matter
        </ButtonLink>
      </PageHero>

      {/* Overview + services */}
      <Section tone="light" aria-labelledby="overview-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Overview</Eyebrow>
              <h2 id="overview-heading" className="text-display-lg mt-5">
                How we help
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="text-body-lg space-y-6 text-slate">
                {area.overview.map((p, i) => (
                  <p key={p} className={i === 0 ? "text-ink" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="text-display-md">What we advise on</h2>
            </Reveal>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {area.services.map((s, i) => (
                <Reveal
                  as="li"
                  key={s}
                  delay={(i % 2) * 0.06}
                  className="text-body-md flex items-start gap-3 border-t border-hairline py-5"
                >
                  <Bullet size={20} className="mt-1 shrink-0 text-primary" />
                  {s}
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Who we act for */}
      <Section tone="dark" aria-labelledby="clients-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="dark">Who we act for</Eyebrow>
              <h2 id="clients-heading" className="text-display-lg mt-5">
                Trusted by clients across sectors
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <ul className="flex flex-wrap gap-3">
                {area.clients.map((c) => (
                  <li key={c} className="text-body-sm rounded-full border border-hairline-dark px-5 py-2.5 text-canvas">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="light" aria-labelledby="faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Questions</Eyebrow>
              <h2 id="faq-heading" className="text-display-lg mt-5">
                Common questions
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <Accordion items={area.faqs} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related */}
      <Section tone="soft" aria-labelledby="related-heading">
        <Container>
          <Reveal>
            <Eyebrow>Related practices</Eyebrow>
            <h2 id="related-heading" className="text-display-md mt-5">
              Explore other areas of expertise
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 0.08} className={i === 2 ? "sm:max-lg:hidden" : undefined}>
                <Link
                  href={`/practice-areas/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-canvas"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {r.image ? (
                      <Image
                        placeholder="blur"
                        src={r.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                        style={r.image.position ? { objectPosition: r.image.position } : undefined}
                      />
                    ) : (
                      <div className="text-caps flex h-full items-center justify-center border-b border-dashed border-ink/25 bg-canvas-soft text-slate">
                        Image placeholder
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-6">
                    <h3 className="text-display-xs">{r.title}</h3>
                    <ArrowBadge className="-mt-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand heading="Discuss your matter with our team" />
    </>
  );
}
