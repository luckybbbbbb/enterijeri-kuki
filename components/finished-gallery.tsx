"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { finishedItems, type Category, type FinishedItem } from "@/lib/gallery-items";

const INITIAL_VISIBLE_ALL = 9;
const INITIAL_VISIBLE_BY_CATEGORY = 6;
const LOAD_MORE_STEP = 6;

const filterTabs: { label: string; value: Category }[] = [
  { label: "Sve", value: "sve" },
  { label: "Volani", value: "volani" },
  { label: "Menjači", value: "menjaci" },
  { label: "Sedišta", value: "sedista" },
  { label: "Nebo", value: "nebo" },
];

export function FinishedGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("sve");
  const [modalItem, setModalItem] = useState<FinishedItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ALL);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredItems = useMemo(
    () =>
      activeFilter === "sve"
        ? finishedItems
        : finishedItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const displayedItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount]
  );

  const hasMore = displayedItems.length < filteredItems.length;

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

  useEffect(() => {
    setVisibleCount(
      activeFilter === "sve" ? INITIAL_VISIBLE_ALL : INITIAL_VISIBLE_BY_CATEGORY
    );
  }, [activeFilter]);

  return (
    <>
      <section
        id="galerija-gotovih-radova"
        ref={sectionRef}
        className="relative py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl lg:text-5xl">
              Galerija <span className="text-primary">Gotovih Radova</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Originalne fotografije završenih projekata - volani, menjači, sedišta i crna
              neba u alcantari.
            </p>
          </div>

          <div
            className={`mb-12 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === tab.value
                    ? "bg-[#e30016] text-white brand-glow"
                    : "bg-card text-muted-foreground hover:bg-charcoal-light hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                <div className="glass flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 brand-glow-hover hover:border-primary/30">
                  <button
                    onClick={() => setModalItem(item)}
                    className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                    aria-label={`Uvećaj sliku: ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </button>
                  <div className="flex min-h-[56px] items-center justify-between gap-3 p-4">
                    <h3 className="line-clamp-2 font-serif text-sm font-semibold uppercase leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => setModalItem(item)}
                      className="text-xs font-medium uppercase tracking-widest text-primary transition-colors hover:text-[#ff2a3d]"
                    >
                      Uvećaj
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
                className="rounded-lg border border-primary/40 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
              >
                Prikaži još
              </button>
            </div>
          )}
        </div>
      </section>

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
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={modalItem.image}
                alt={modalItem.title}
                width={1600}
                height={1200}
                priority
                className="h-full w-full object-cover"
                sizes="min(100vw, 1280px)"
              />
            </div>
            <p className="mt-4 text-center font-serif text-lg font-semibold text-foreground">
              {modalItem.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
