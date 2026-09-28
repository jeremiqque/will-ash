import Image from "next/image";
import Link from "next/link";
import { legalLinks, navigation, site } from "@/content/site";
import { practiceAreas } from "@/content/practice-areas";
import { Container } from "@/components/ui/primitives";
import { Google, Instagram } from "@/components/ui/icons";
import { images } from "@/content/images";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-silver">
      <Container className="pt-20 pb-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 border-b border-hairline-dark pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Will & Ash, home" className="inline-block">
              <Image
                src={images.logoSilver}
                alt="Will & Ash"
                width={108}
                height={96}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-body-sm mt-6 max-w-xs">
              A modern commercial law firm advising clients across Africa and beyond since {site.founded}.
            </p>
          </div>

          {/* Practice areas */}
          <nav aria-label="Practice areas" className="lg:col-span-3">
            <h2 className="text-caps text-canvas">Practice areas</h2>
            <ul className="text-body-sm mt-4 space-y-1">
              {practiceAreas.map((p) => (
                <li key={p.slug}>
                  <Link href={`/practice-areas/${p.slug}`} className="inline-block py-1 transition-colors hover:text-canvas">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-caps text-canvas">Company</h2>
            <ul className="text-body-sm mt-4 space-y-1">
              {navigation.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="inline-block py-1 transition-colors hover:text-canvas">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book" className="inline-block py-1 transition-colors hover:text-canvas">
                  Book a consultation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Offices */}
          <div className="lg:col-span-3">
            <h2 className="text-caps text-canvas">Offices</h2>
            <div className="text-body-sm mt-5 space-y-5">
              {site.offices.map((o) => (
                <address key={o.city} className="not-italic">
                  <span className="block font-medium text-canvas">{o.city}</span>
                  {o.address.join(", ")}
                </address>
              ))}
              <div>
                <a href={`mailto:${site.email}`} className="block py-1 transition-colors hover:text-canvas">
                  {site.email}
                </a>
                {site.phone && (
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-canvas">
                    {site.phone}
                  </a>
                )}
                <p>{site.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-caption flex flex-col-reverse gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-1 transition-colors hover:text-canvas">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Will & Ash on Instagram"
              className="-m-2 inline-flex size-10 items-center justify-center transition-colors hover:text-canvas"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Will & Ash on Google"
              className="-m-2 inline-flex size-10 items-center justify-center transition-colors hover:text-canvas"
            >
              <Google className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
