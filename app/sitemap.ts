import type { MetadataRoute } from "next";

const baseUrl = "https://enterijerikuki.rs";

/**
 * Jedna URL adresa za jednostrani sajt — Google ignoriše fragment (#) u sitemap-u,
 * pa ne navodimo više istu stranicu sa različitim hash-ovima.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
