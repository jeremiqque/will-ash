import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { bulletDataUri } from "@/components/ui/icons";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Shared layout for Privacy, Disclaimer and Cookie pages: sticky contents + readable prose. */
export function LegalPage({
  title,
  href,
  intro,
  updated,
  sections,
}: {
  title: string;
  href: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} body={intro} crumbs={[{ label: title, href }]} />
      <Section tone="light" aria-label={title}>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <aside className="lg:col-span-3">
              <nav aria-label="On this page" className="lg:sticky lg:top-28">
                <p className="text-caps text-slate">On this page</p>
                <ol className="text-body-sm mt-4 space-y-2 border-l border-hairline">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="-ml-px block border-l border-transparent py-1 pl-4 text-slate transition-colors hover:border-primary hover:text-ink"
                      >
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="lg:col-span-8 lg:col-start-5">
              <div className="text-body-sm mb-12 rounded-xs border border-primary/40 bg-primary/5 px-5 py-4 text-ink">
                <strong className="font-semibold">Draft for review.</strong> This page was prepared as a starting
                point and must be reviewed and approved by the firm before publication. Last updated: {updated}.
              </div>
              <div className="space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
                    <h2 id={`${s.id}-h`} className="text-display-sm">
                      <span className="text-primary">{i + 1}.</span> {s.title}
                    </h2>
                    <div className="text-body-md measure mt-5 space-y-4 text-slate [&_a]:text-ink [&_a]:underline [&_a]:decoration-primary [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:space-y-3 [&_ul>li]:relative [&_ul>li]:pl-8 [&_ul>li]:before:absolute [&_ul>li]:before:top-[0.3em] [&_ul>li]:before:left-0 [&_ul>li]:before:size-5 [&_ul>li]:before:bg-(image:--bullet) [&_ul>li]:before:bg-contain [&_ul>li]:before:bg-no-repeat [&_ul>li]:before:content-['']"
                      style={{ "--bullet": bulletDataUri } as React.CSSProperties}>
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
