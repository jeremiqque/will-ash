import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { practiceAreas } from "@/content/practice-areas";
import { site } from "@/content/site";
import { StatsRow } from "@/components/shared/blocks";
import { ArrowLink, ButtonLink, Container, Eyebrow, Section, ArrowBadge } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { images } from "@/content/images";

const pad = (n: number) => String(n).padStart(2, "0");

/* ── 1. Intro + stats ──────────────────────────────────────── */
export function IntroSection() {
  const { intro } = home;
  return (
    <Section tone="light" aria-labelledby="intro-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h2 id="intro-heading" className="text-display-lg mt-5">
              {intro.heading}
            </h2>
            <div className="text-body-lg measure mt-8 space-y-5 text-slate">
              {intro.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ArrowLink href="/about" className="mt-10">
              {intro.link}
            </ArrowLink>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <Image
                placeholder="blur"
                src={images.columnsWillAsh}
                alt="Classical stone columns with Will & Ash engraved on the entablature"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <StatsRow className="mt-20 lg:mt-28" />
      </Container>
    </Section>
  );
}

/* ── 2. Practice areas ─────────────────────────────────────── */
export function PracticesSection() {
  const { practices } = home;
  return (
    <Section tone="soft" aria-labelledby="practices-heading">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{practices.eyebrow}</Eyebrow>
            <h2 id="practices-heading" className="text-display-lg mt-5">
              {practices.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-body-md text-slate">{practices.body}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {practiceAreas.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/practice-areas/${p.slug}`}
                className="group flex h-full gap-6 border-t border-hairline py-8 transition-colors duration-300 hover:border-ink"
              >
                <span className="text-caps w-6 shrink-0 pt-2 text-slate tabular-nums transition-colors group-hover:text-primary">
                  {pad(i + 1)}
                </span>
                <span className="flex-1">
                  <span className="text-display-xs block">{p.title}</span>
                  <span className="text-body-sm mt-3 block text-slate">{p.summary}</span>
                </span>
                <ArrowBadge className="-mt-1" />
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12">
          <ButtonLink href="/practice-areas" variant="outline-dark" arrow>
            {practices.link}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* ── 3. What to expect (dark) ──────────────────────────────── */
export function ExpectSection() {
  const { expect } = home;
  return (
    <Section tone="dark" aria-labelledby="expect-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card lg:aspect-auto lg:h-full lg:min-h-[36rem]">
              <Image
                placeholder="blur"
                src={images.gavelScalesDesk}
                alt="A gavel and brass scales of justice on a lawyer's desk"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:py-8">
            <Reveal>
              <Eyebrow tone="dark">{expect.eyebrow}</Eyebrow>
              <h2 id="expect-heading" className="text-display-lg mt-5">
                {expect.heading}
              </h2>
              <p className="text-body-lg measure mt-8 text-silver">{expect.body}</p>
            </Reveal>

            <ul className="mt-12 border-t border-hairline-dark">
              {expect.points.map((pt, i) => (
                <Reveal as="li" key={pt.title} delay={i * 0.08} className="grid grid-cols-1 gap-2 border-b border-hairline-dark py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <h3 className="text-title">{pt.title}</h3>
                  <p className="text-body-sm text-silver">{pt.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── 4. How we work ────────────────────────────────────────── */
export function ProcessSection() {
  const { process } = home;
  return (
    <Section tone="light" aria-labelledby="process-heading">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 id="process-heading" className="text-display-lg mt-5">
            {process.heading}
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t border-hairline pt-6 pb-10">
              <span className="text-display-sm text-primary" aria-hidden>
                {pad(i + 1)}
              </span>
              <h3 className="text-title mt-6">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="text-body-sm mt-3 text-slate">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ── 6. Testimonial (placeholder until the firm supplies an approved review) ── */
export function TestimonialSection() {
  return (
    <Section tone="dark" aria-label="Client testimonial">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <span aria-hidden className="text-display-hero block leading-none text-primary">
            &ldquo;
          </span>
          <div className="mt-2 border border-dashed border-canvas/25 px-6 py-10">
            <p className="text-caps text-silver">Testimonial placeholder</p>
            <p className="text-display-sm mt-4 text-canvas">
              Add an approved client quote here. One or two sentences works best.
            </p>
            <p className="text-caps mt-6 text-silver">Client name · Role, Company</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ── 7. FAQ ────────────────────────────────────────────────── */
export function FaqSection() {
  return (
    <Section tone="light" aria-labelledby="faq-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-heading" className="text-display-lg mt-5">
              Frequently asked
            </h2>
            <p className="text-body-md mt-6 text-slate">
              Can&rsquo;t find what you need?{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline decoration-primary underline-offset-4">
                Email us
              </a>{" "}
              and we&rsquo;ll get back to you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Accordion items={home.faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
