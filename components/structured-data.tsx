export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Enterijeri Kuki",
    alternateName: "Enterijeri Kuki Novi Pazar",
    description:
      "Premium presvlačenje i restauracija auto enterijera. Carbonsko presvlačenje, presvlačenje volana, sedišta, neba i farbanje enterijera.",
    url: "https://enterijerikuki.rs",
    telephone: "+381649534534",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palih Boraca 12",
      addressLocality: "Novi Pazar",
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
    sameAs: ["https://instagram.com/enterijeri.kuki"],
    image: "https://enterijerikuki.rs/images/background-enterier.jpg",
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.1367,
        longitude: 20.5122,
      },
      geoRadius: "100000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge auto enterijera",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carbonsko presvlačenje",
            description:
              "Premium carbon fiber obloge za enterijer automobila.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presvlačenje volana",
            description:
              "Profesionalno presvlačenje volana kožom ili alcantarom.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presvlačenje sedišta",
            description:
              "Kompletna restauracija i presvlačenje sedišta premium materijalima.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Farbanje enterijera",
            description:
              "Profesionalno farbanje plastičnih i kožnih delova enterijera.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presvlačenje neba",
            description:
              "Zamena oštećenog ili opuštenog neba novim materijalima.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presvlačenje ručice menjača",
            description:
              "Presvlačenje ručice menjača premium kožom sa šavovima po izboru.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
