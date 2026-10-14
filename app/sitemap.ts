import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * Početna + stranice usluga. Google ignoriše fragment (#) u sitemap-u,
 * pa sekcije početne (#usluge, #kontakt…) ne navodimo posebno.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${SITE_URL}/usluge/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
