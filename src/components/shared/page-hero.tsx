import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container, ImagePlaceholder } from "@/components/ui/primitives";
import { JsonLd } from "./json-ld";
import { site } from "@/content/site";
import { Marker } from "@/components/ui/icons";

type Crumb = { label: string; href: string };

/**
 * Inner-page hero: flat ink band, text left, optional portrait image right.
 * Breadcrumbs render visually and as BreadcrumbList structured data.
 */
export function PageHero({
  eyebrow,
  title,
  body,
  crumbs = [],
  image,
  placeholder,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  crumbs?: Crumb[];
  image?: { src: StaticImageData; alt: string; position?: string } | null;
  /** Shown when image is explicitly null */
  placeholder?: { label: string; size: string };
  children?: ReactNode;
}) {
  const hasMedia = image !== undefined;
  const trail = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className="bg-ink text-canvas">
      {crumbs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.label,
              item: new URL(c.href, site.url).toString(),
            })),
          }}
        />
      )}
      <Container className="pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div className={hasMedia ? "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-8" : ""}>
          <div className={hasMedia ? "lg:col-span-7" : "max-w-4xl"}>
            {crumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="fade-up mb-10">
                <ol className="text-caption flex flex-wrap items-center gap-x-2 text-silver">
                  {trail.map((c, i) => {
                    const last = i === trail.length - 1;
                    return (
                      <li key={c.href} className="flex items-center gap-2">
                        {last ? (
                          <span aria-current="page" className="inline-block py-1.5 text-canvas">
                            {c.label}
                          </span>
                        ) : (
                          <>
                            <Link href={c.href} className="inline-block py-1.5 transition-colors hover:text-canvas">
                              {c.label}
                            </Link>
                            <span aria-hidden>/</span>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            <p className="text-eyebrow fade-up flex items-center gap-2.5" style={{ animationDelay: "0ms" }}>
              <Marker size={12} strokeWidth={2} className="shrink-0 text-primary" />
              {eyebrow}
            </p>
            <h1 className="text-display-xl mt-6">
              <span className="line-mask">
                <span style={{ animationDelay: "60ms" }}>{title}</span>
              </span>
            </h1>
            {body && (
              <p className="text-body-lg measure slide-up mt-8 text-silver" style={{ animationDelay: "180ms" }}>
                {body}
              </p>
            )}
            {children && (
              <div className="slide-up mt-10" style={{ animationDelay: "240ms" }}>
                {children}
              </div>
            )}
          </div>

          {hasMedia && (
            <div className="slide-up lg:col-span-4 lg:col-start-9" style={{ animationDelay: "120ms" }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card md:aspect-[16/9] lg:aspect-[4/5]">
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    preload
                    placeholder="blur"
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover"
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                ) : (
                  <ImagePlaceholder
                    tone="dark"
                    label={placeholder?.label ?? "Page image"}
                    size={placeholder?.size ?? "1600 × 2000 px, portrait"}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
