import type { Metadata } from "next";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand, OfficeCard, StatsRow, ValuesSection } from "@/components/shared/blocks";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Bullet } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2019, Will & Ash is a modern commercial law firm in Lagos and Abuja combining local insight with global standards.",
  alternates: { canonical: "/about" },
};

const pad = (n: number) => String(n).padStart(3, "0");

export default function AboutPage() {
  const { hero, story, approach, team } = about;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        body={hero.body}
        crumbs={[{ label: "About", href: "/about" }]}
        image={{ src: images.columnsWillAsh, alt: "Classical columns with Will & Ash engraved above them" }}
      />

      {/* Story */}
      <Section tone="light" aria-labelledby="story-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <Eyebrow>{story.eyebrow}</Eyebrow>
              <h2 id="story-heading" className="text-display-lg mt-5">
                {story.heading}
              </h2>
              <p className="text-caps mt-10 text-slate">Established</p>
              <p className="text-numeral mt-3">{site.founded}</p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="text-body-lg space-y-6 text-slate">
                {story.body.map((p, i) => (
                  <p key={p} className={i === 0 ? "text-ink" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <StatsRow className="mt-20 lg:mt-28" />
        </Container>
      </Section>

      {/* Approach — numbered pillars */}
      <Section tone="dark" aria-labelledby="approach-heading">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow tone="dark">{approach.eyebrow}</Eyebrow>
              <h2 id="approach-heading" className="text-display-lg mt-5">
                {approach.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <p className="text-body-md text-silver">{approach.body}</p>
            </Reveal>
          </div>

          <ol className="mt-16 grid grid-cols-1 gap-x-8 md:grid-cols-3">
            {approach.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="line-draw border-t border-hairline-dark pt-6 pb-8">
                <span className="text-display-xs text-primary tabular-nums">{pad(i + 1)}</span>
                <h3 className="text-display-md mt-8">{p.title}</h3>
                <p className="text-body-sm mt-4 text-silver">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <ValuesSection tone="light" />

      {/* People */}
      <Section tone="soft" aria-labelledby="team-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <Eyebrow>{team.eyebrow}</Eyebrow>
              <h2 id="team-heading" className="text-display-lg mt-5">
                {team.heading}
              </h2>
              <p className="text-body-md mt-6 text-slate">{team.body}</p>
            </Reveal>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
              {team.points.map((pt, i) => (
                <Reveal as="li" key={pt.title} delay={i * 0.08} className="group rounded-card border border-transparent p-8 transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-ink/15 bg-canvas">
                  <Bullet size={24} className="text-primary transition-transform duration-500 ease-out group-hover:scale-110" />
                  <h3 className="text-title mt-8">{pt.title}</h3>
                  <p className="text-body-sm mt-3 text-slate">{pt.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Offices */}
      <Section tone="light" aria-labelledby="offices-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Where to find us</Eyebrow>
              <h2 id="offices-heading" className="text-display-lg mt-5">
                Two offices, one standard
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:col-span-8">
              {site.offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.08}>
                  <OfficeCard office={o} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
