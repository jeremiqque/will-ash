import { home } from "@/content/home";
import { consultationHref, site } from "@/content/site";
import { ArrowLink, ButtonLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Pin, valueIcons } from "@/components/ui/icons";

/* ── Stats row ─────────────────────────────────────────────── */
export function StatsRow({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid border-t border-hairline sm:grid-cols-3 ${className}`}>
      {home.stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className="flex flex-col border-b border-hairline py-8 sm:border-b-0 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0"
        >
          <dt className="text-caps order-2 mt-4 text-slate">{s.label}</dt>
          <dd className="text-numeral -order-1">{s.value}</dd>
        </Reveal>
      ))}
    </dl>
  );
}

/* ── What makes us different ───────────────────────────────── */
export function ValuesSection({ tone = "soft" }: { tone?: "soft" | "light" }) {
  const { different } = home;
  return (
    <Section tone={tone} aria-labelledby="different-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>{different.eyebrow}</Eyebrow>
            <h2 id="different-heading" className="text-display-lg mt-5">
              {different.heading}
            </h2>
            <ButtonLink href={consultationHref} variant="dark" arrow className="mt-10">
              Speak with us
            </ButtonLink>
          </Reveal>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {different.values.map((v, i) => {
              const Icon = valueIcons[v.icon as keyof typeof valueIcons];
              return (
                <Reveal
                  as="li"
                  key={v.title}
                  delay={i * 0.08}
                  className={`rounded-card p-8 ${tone === "soft" ? "bg-canvas" : "bg-canvas-soft"}`}
                >
                  <Icon className="size-8 text-primary" />
                  <h3 className="text-title mt-8">{v.title}</h3>
                  <p className="text-body-sm mt-3 text-slate">{v.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ── Office card ───────────────────────────────────────────── */
export function OfficeCard({ office }: { office: (typeof site.offices)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-canvas">
      <div className="flex flex-1 flex-col p-8">
        <p className="text-caps text-slate">Office</p>
        <h3 className="text-display-sm mt-2">{office.city}</h3>
        <address className="text-body-sm mt-4 flex-1 text-slate not-italic">
          {office.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <div className="mt-6 flex items-center gap-3">
          <Pin className="size-5 text-primary" />
          <ArrowLink href={office.mapUrl}>Get directions</ArrowLink>
        </div>
      </div>
    </article>
  );
}

/* ── Consultation CTA band (red) ───────────────────────────── */
export function CtaBand({
  heading = home.cta.heading,
  body = home.cta.body,
  button = home.cta.button,
}: {
  heading?: string;
  body?: string;
  button?: string;
}) {
  return (
    <Section tone="red" aria-labelledby="cta-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 id="cta-heading" className="text-display-xl">
              {heading}
            </h2>
            <p className="text-body-lg measure mt-6 text-canvas">{body}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <ButtonLink href={consultationHref} variant="light" arrow>
              {button}
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="text-body-sm text-canvas underline underline-offset-4 hover:text-canvas"
            >
              or email {site.email}
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
