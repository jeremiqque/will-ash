import Image from "next/image";
import { home } from "@/content/home";
import { site, consultationHref } from "@/content/site";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { images } from "@/content/images";
import { Marker } from "@/components/ui/icons";

export function HomeHero() {
  const { hero } = home;

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-canvas">
      <Image
        src={images.heroLadyJustice}
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover object-[35%_center]"
      />
      {/* Flat scrim (no gradients): keeps text ≥ AA over any part of the photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/70" />

      <Container className="pt-40 pb-16 lg:pb-24">
        <p className="text-eyebrow fade-up flex items-center gap-2.5 text-canvas" style={{ animationDelay: "0ms" }}>
          <Marker size={12} strokeWidth={2} className="shrink-0 text-primary" />
          {hero.eyebrow}
        </p>

        <h1 className="text-display-hero mt-6 max-w-5xl">
          {hero.headingLines.map((line, i) => (
            <span key={line} className="line-mask">
              <span style={{ animationDelay: `${60 + i * 80}ms` }}>{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="slide-up lg:col-span-7" style={{ animationDelay: "220ms" }}>
            <p className="text-body-lg measure text-silver">{hero.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={consultationHref} arrow>
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/practice-areas" variant="outline-light">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <dl
            className="slide-up text-body-sm hidden gap-8 border-t border-hairline-dark pt-6 lg:col-span-4 lg:col-start-9 lg:grid lg:grid-cols-2"
            style={{ animationDelay: "320ms" }}
          >
            <div>
              <dt className="text-caps text-silver">Established</dt>
              <dd className="text-display-xs mt-2 text-canvas">{site.founded}</dd>
            </div>
            <div>
              <dt className="text-caps text-silver">Offices</dt>
              <dd className="text-display-xs mt-2 text-canvas">Lagos · Abuja</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
