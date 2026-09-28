import Link from "next/link";
import { navigation } from "@/content/site";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { Marker } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-ink text-canvas">
      <Container className="pt-32 pb-20">
        <p className="text-eyebrow flex items-center gap-2.5">
          <Marker size={12} strokeWidth={2} className="shrink-0 text-primary" />
          Error 404
        </p>
        <h1 className="text-display-xl mt-6 max-w-3xl">We couldn&rsquo;t find that page</h1>
        <p className="text-body-lg measure mt-6 text-silver">
          The page may have moved, or the link may be incorrect. Try one of these instead:
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {navigation.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-title underline decoration-primary underline-offset-8 hover:text-silver">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink href="/book" arrow className="mt-12">
          Book a consultation
        </ButtonLink>
      </Container>
    </section>
  );
}
