import { FACEBOOK_URL, GOOGLE_MAPS_URL, INSTAGRAM_URL, SITE_URL } from "@/lib/site";
import { SERVICE_CITIES, SERVICE_COUNTRIES, services } from "@/lib/services";

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Enterijeri Kuki",
    alternateName: "Enterijeri Kuki Novi Pazar",
    description:
      "Premium presvlačenje i restauracija auto enterijera. Carbonsko presvlačenje, presvlačenje volana, sedišta, neba i farbanje enterijera.",
    url: SITE_URL,
    hasMap: GOOGLE_MAPS_URL,
    telephone: "+381649534534",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+381649534534",
        contactType: "customer service",
        areaServed: "RS",
        availableLanguage: ["sr", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palih Boraca 12",
      addressLocality: "Novi Pazar",
      addressRegion: "Raški okrug",
      postalCode: "36300",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.1367,
      longitude: 20.5122,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_MAPS_URL],
    image: `${SITE_URL}/images/background-enterier.jpg`,
    priceRange: "$$",
    areaServed: [
      ...SERVICE_CITIES.map((name) => ({ "@type": "City", name })),
      ...SERVICE_COUNTRIES.map((name) => ({ "@type": "Country", name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge auto enterijera",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.cardDescription,
          url: `${SITE_URL}/usluge/${service.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
