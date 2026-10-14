import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, ChevronRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { finishedItems } from "@/lib/gallery-items";
import {
  SERVICE_CITIES,
  SERVICE_COUNTRIES,
  getService,
  services,
} from "@/lib/services";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const url = `${SITE_URL}/usluge/${service.slug}`;
  const photo = finishedItems.find((i) => i.category === service.galleryCategory);
  const images = [photo?.image ?? "/images/background-enterier.jpg"];

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.metaTitle} | Enterijeri Kuki`,
      description: service.metaDescription,
      url,
      siteName: "Enterijeri Kuki",
      locale: "sr_RS",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | Enterijeri Kuki`,
      description: service.metaDescription,
      images,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const url = `${SITE_URL}/usluge/${service.slug}`;
  const photos = service.galleryCategory
    ? finishedItems.filter((i) => i.category === service.galleryCategory)
    : [];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.metaDescription,
      url,
      serviceType: service.name,
      provider: {
        "@type": "AutoRepair",
        name: "Enterijeri Kuki",
        url: SITE_URL,
        telephone: "+381649534534",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Palih Boraca 12",
          addressLocality: "Novi Pazar",
          postalCode: "36300",
          addressCountry: "RS",
        },
      },
      areaServed: [
        ...SERVICE_CITIES.map((name) => ({ "@type": "City", name })),
        ...SERVICE_COUNTRIES.map((name) => ({ "@type": "Country", name })),
      ],
      ...(photos.length
        ? { image: photos.slice(0, 3).map((p) => `${SITE_URL}${p.image}`) }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: service.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
              <li>
                <a href="/" className="transition-colors hover:text-primary">
                  Početna
                </a>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" aria-hidden />
                <a href="/#usluge" className="transition-colors hover:text-primary">
                  Usluge
                </a>
              </li>
              <li className="flex items-center gap-1 text-foreground" aria-current="page">
                <ChevronRight className="h-3 w-3" aria-hidden />
                {service.name}
              </li>
            </ol>
          </nav>

          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enterijeri Kuki · Novi Pazar
          </span>
          <h1 className="font-serif text-4xl font-bold text-foreground uppercase sm:text-5xl lg:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+381649534534"
              className="brand-glow-hover flex items-center justify-center gap-2 rounded-lg bg-[#e30016] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff2a3d]"
            >
              <Phone className="h-4 w-4" />
              064/9-534-534
            </a>
            <a
              href="https://wa.me/381649534534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Pošalji sliku na WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Opis + šta radimo */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            {service.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              Koristimo originalne materijale. Mušterije nam dolaze iz cele
              Srbije — {SERVICE_CITIES.filter((c) => c !== "Novi Pazar").join(", ")}{" "}
              i drugih gradova — kao i iz inostranstva, najčešće iz Nemačke i
              Austrije.
            </p>
          </div>
          <div className="glass h-fit rounded-xl p-6">
            <h2 className="mb-4 font-serif text-lg font-semibold text-foreground uppercase">
              Šta radimo
            </h2>
            <ul className="flex flex-col gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galerija */}
      {photos.length > 0 && (
        <section className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl">
              Naši <span className="text-primary">radovi</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {photos.map((photo) => (
                <figure key={photo.image} className="glass overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.image}
                      alt={`${service.name} — ${photo.title}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-3 text-xs font-semibold uppercase leading-snug text-foreground">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl">
            Česta <span className="text-primary">pitanja</span>
          </h2>
          <div className="flex flex-col gap-3">
            {service.faq.map((f) => (
              <details key={f.question} className="glass group rounded-xl p-5">
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.question}
                    <ChevronRight className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ostale usluge + lokacija */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
          <div>
            <h2 className="mb-5 font-serif text-xl font-semibold text-foreground uppercase">
              Ostale usluge
            </h2>
            <ul className="flex flex-col gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/usluge/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 font-serif text-xl font-semibold text-foreground uppercase">
              Gde se nalazimo
            </h2>
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Palih Boraca 12, 36300 Novi Pazar, Srbija
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ako dolazite iz drugog grada ili iz inostranstva, javite se
              unapred da dogovorimo termin.
            </p>
            <a
              href="tel:+381649534534"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" />
              064/9-534-534
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
