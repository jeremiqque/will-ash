import type { Metadata } from "next";
import Image from "next/image";
import { bookingUrl, site } from "@/content/site";
import { PageHero } from "@/components/shared/page-hero";
import { ArrowLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Calendar } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free, in-depth and confidential 30-minute consultation with Will & Ash, in person in Lagos or Abuja or by video.",
  alternates: { canonical: "/book" },
};


const steps = [
  { title: "Choose a time", text: "Pick a 30-minute slot that suits you, in person or by video." },
  { title: "Share the essentials", text: "Answer a few short questions so we can prepare properly." },
  { title: "Speak with a lawyer", text: "A confidential conversation about your matter and your options." },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Free consultation"
        title="Book a free, confidential consultation"
        body="Thirty minutes with an experienced lawyer to understand your matter, explain your options and agree the next steps, with no obligation."
        crumbs={[{ label: "Book a consultation", href: "/book" }]}
      />

      <Section tone="light" aria-labelledby="book-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Eyebrow>What to expect</Eyebrow>
              <h2 id="book-heading" className="text-display-md mt-5">
                Three simple steps
              </h2>
              <ol className="mt-10 border-t border-hairline">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5 border-b border-hairline py-6">
                    <span className="text-display-xs w-9 shrink-0 text-primary tabular-nums" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-title">
                        <span className="sr-only">Step {i + 1}: </span>
                        {s.title}
                      </h3>
                      <p className="text-body-sm mt-1 text-slate">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <dl className="text-body-sm mt-10 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-caps text-slate">Duration</dt>
                  <dd className="mt-1">30 minutes</dd>
                </div>
                <div>
                  <dt className="text-caps text-slate">Cost</dt>
                  <dd className="mt-1">Free</dd>
                </div>
                <div>
                  <dt className="text-caps text-slate">Format</dt>
                  <dd className="mt-1">In person or video</dd>
                </div>
                <div>
                  <dt className="text-caps text-slate">Hours</dt>
                  <dd className="mt-1">{site.hoursShort}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card md:aspect-[3/2]">
                <Image
                  placeholder="blur"
                  src={images.consultationBooking}
                  alt="A calendar open on a laptop with a date circled, beside a person reading"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* The booking button appears automatically once `bookingUrl` is set in src/content/site.ts */}
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xs border border-primary bg-primary px-6 py-4 whitespace-nowrap text-canvas transition-colors hover:border-primary-hover hover:bg-primary-hover"
                  >
                    <Calendar size={18} />
                    Choose a time
                    <span className="sr-only"> (opens the booking calendar in a new tab)</span>
                  </a>
                )}
                <p className="text-body-sm text-slate">
                  Prefer to write to us instead?{" "}
                  <ArrowLink href="/contact" className="ml-1">
                    Send an enquiry
                  </ArrowLink>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
