import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { practiceAreas } from "@/content/practice-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    priority,
  });

  return [
    page("/", 1),
    page("/about", 0.8),
    page("/practice-areas", 0.9),
    ...practiceAreas.map((p) => page(`/practice-areas/${p.slug}`, 0.8)),
    page("/contact", 0.8),
    page("/book", 0.9),
    page("/privacy", 0.3),
    page("/disclaimer", 0.3),
    page("/cookies", 0.3),
  ];
}
