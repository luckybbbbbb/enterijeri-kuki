"use client";

import { useState, useRef, useEffect } from "react";
import { ComparisonSlider } from "./comparison-slider";
import { X } from "lucide-react";

type Category = "sve" | "sedista" | "volani" | "nebo" | "carbon" | "enterijeri";

interface GalleryItem {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  {
    beforeImage: "/images/before-steering.svg",
    afterImage: "/images/after-steering.svg",
    title: "Presvlačenje volana - Alcantara",
    category: "volani",
  },
  {
    beforeImage: "/images/before-seat.svg",
    afterImage: "/images/after-seat.svg",
    title: "Presvlačenje sportskog sedišta",
    category: "sedista",
  },
  {
    beforeImage: "/images/before-headliner.svg",
    afterImage: "/images/after-headliner.svg",
    title: "Zamena neba - Alcantara crna",
    category: "nebo",
  },
  {
    beforeImage: "/images/before-carbon.svg",
    afterImage: "/images/after-carbon.svg",
    title: "Carbon fiber obloge",
    category: "carbon",
  },
  {
    beforeImage: "/images/before-painting.svg",
    afterImage: "/images/after-painting.svg",
    title: "Farbanje vrata i panela",
    category: "enterijeri",
  },
  {
    beforeImage: "/images/before-shifter.svg",
    afterImage: "/images/after-shifter.svg",
    title: "Presvlačenje ručice menjača",
    category: "enterijeri",
  },
  {
    beforeImage: "/images/before-steering2.svg",
    afterImage: "/images/after-steering2.svg",
    title: "Flat-bottom volan - koža sa zlatnim šavom",
    category: "volani",
  },
  {
    beforeImage: "/images/before-seat2.svg",
    afterImage: "/images/after-seat2.svg",
    title: "Presvlačenje zadnje klupe",
    category: "sedista",
  },
  {
    beforeImage: "/images/before-headliner2.svg",
    afterImage: "/images/after-headliner2.svg",
    title: "Popravka opuštenog neba",
    category: "nebo",
  },
  {
    beforeImage: "/images/before-interior.svg",
    afterImage: "/images/after-interior.svg",
    title: "Kompletna restauracija enterijera",
    category: "enterijeri",
  },
];

const filterTabs: { label: string; value: Category | "sve" }[] = [
  { label: "Sve", value: "sve" },
  { label: "Sedišta", value: "sedista" },
  { label: "Volani", value: "volani" },
  { label: "Nebo", value: "nebo" },
  { label: "Carbon", value: "carbon" },
  { label: "Enterijeri", value: "enterijeri" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category | "sve">("sve");
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredItems =
    activeFilter === "sve"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalItem]);

  return (
    <>
      <section
        id="galerija"
        ref={sectionRef}
        className="relative bg-muted py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {"Na\u0161i Radovi"} -{" "}
              <span className="text-primary">Pre i Posle</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Pogledajte transformacije koje smo uradili. Prevucite klizač da
              vidite razliku.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`mb-12 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === tab.value
                    ? "bg-primary text-primary-foreground gold-glow"
                    : "bg-card text-muted-foreground hover:bg-charcoal-light hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${300 + index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="glass overflow-hidden rounded-xl transition-all duration-300 gold-glow-hover hover:border-primary/30">
                  <ComparisonSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    alt={item.title}
                  />
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-serif text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => setModalItem(item)}
                      className="text-xs font-medium uppercase tracking-widest text-primary transition-colors hover:text-gold-light"
                    >
                      {"Uvećaj"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={() => setModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modalItem.title}
        >
          <button
            onClick={() => setModalItem(null)}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Zatvori"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ComparisonSlider
              beforeImage={modalItem.beforeImage}
              afterImage={modalItem.afterImage}
              alt={modalItem.title}
            />
            <p className="mt-4 text-center font-serif text-lg font-semibold text-foreground">
              {modalItem.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
