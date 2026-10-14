import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Jedna URL adresa za jednostrani sajt — Google ignoriše fragment (#) u sitemap-u,
 * pa ne navodimo više istu stranicu sa različitim hash-ovima.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
