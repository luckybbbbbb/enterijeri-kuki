"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Category = "sve" | "volani" | "menjaci" | "sedista" | "nebo";

interface FinishedItem {
  image: string;
  title: string;
  category: Category;
}

const finishedItems: FinishedItem[] = [
  { image: "/images/volan-real-01.jpeg", title: "Volan - carbon i alcantara", category: "volani" },
  { image: "/images/volan-real-02.jpeg", title: "Volan - carbon sa crvenim šavom", category: "volani" },
  { image: "/images/volan-real-03.jpeg", title: "Volan - R stil", category: "volani" },
  { image: "/images/volan-real-04.jpeg", title: "Volan - AMG koža", category: "volani" },
  { image: "/images/volan-real-05.jpeg", title: "Volan - sportski detalj", category: "volani" },
  { image: "/images/volan-real-06.jpeg", title: "Volan - VW alcantara", category: "volani" },
  { image: "/images/volan-real-07.jpeg", title: "Volan - Audi S line", category: "volani" },
  { image: "/images/volan-real-08.jpeg", title: "Volan - set modela", category: "volani" },
  { image: "/images/volan-real-09.jpeg", title: "Volan - BMW dvobojni", category: "volani" },
  { image: "/images/volan-real-10.jpeg", title: "Volan - premium završnica", category: "volani" },
  { image: "/images/volan-real-11.jpeg", title: "Volan - Audi crveno-crni", category: "volani" },
  { image: "/images/volan-real-12.jpeg", title: "Volan - detalj šava", category: "volani" },
  { image: "/images/volan-real-13.jpeg", title: "Volan - premium koža", category: "volani" },
  { image: "/images/volan-real-14.jpeg", title: "Volan - carbon detalji", category: "volani" },
  { image: "/images/menjac-real-01.jpeg", title: "Ručica menjača - DSG", category: "menjaci" },
  { image: "/images/menjac-real-02.jpeg", title: "Ručica menjača - bočni detalj", category: "menjaci" },
  { image: "/images/menjac-real-03.jpeg", title: "Ručica menjača - prednji ugao", category: "menjaci" },
  { image: "/images/menjac-real-04.jpeg", title: "Ručica menjača - top detalj", category: "menjaci" },
  { image: "/images/menjac-real-05.jpeg", title: "Menjač sa kožnom manžetnom", category: "menjaci" },
  { image: "/images/sedista-real-01.jpeg", title: "Sedišta - klasika bež", category: "sedista" },
  { image: "/images/sedista-real-02.jpeg", title: "Sedišta - komplet enterijer", category: "sedista" },
  { image: "/images/sedista-real-03.jpeg", title: "Set sedišta - Audi S7", category: "sedista" },
  { image: "/images/sedista-real-04.jpeg", title: "Sedišta - komplet pogled", category: "sedista" },
  { image: "/images/sedista-real-05.jpeg", title: "Sedišta - AMG par", category: "sedista" },
  { image: "/images/sedista-real-06.jpeg", title: "Sedišta - bočni profil", category: "sedista" },
  { image: "/images/sedista-real-07.jpeg", title: "Sedišta - Audi S linija", category: "sedista" },
  { image: "/images/sedista-real-08.jpeg", title: "Komplet sedišta - dijamant šav", category: "sedista" },
  { image: "/images/sedista-real-09.jpeg", title: "Sedišta - bočni prikaz", category: "sedista" },
  { image: "/images/sedista-real-10.jpeg", title: "Sedište - close-up detalj", category: "sedista" },
  { image: "/images/sedista-real-11.jpeg", title: "Sedište - restauracija klasika", category: "sedista" },
  { image: "/images/sedista-real-12.jpeg", title: "Sedišta - detalj enterijera", category: "sedista" },
  { image: "/images/sedista-real-13.jpeg", title: "Sedišta - premium enterijer", category: "sedista" },
  { image: "/images/sedista-real-14.jpeg", title: "Sedišta i panoramski krov", category: "sedista" },
  { image: "/images/nebo-real-01.jpeg", title: "Crno nebo - alcantara", category: "nebo" },
  { image: "/images/nebo-real-02.jpeg", title: "Nebo - A stub i detalji", category: "nebo" },
  { image: "/images/nebo-real-03.jpeg", title: "Nebo - prednji deo kabine", category: "nebo" },
  { image: "/images/nebo-real-04.jpeg", title: "Nebo - zadnja klupa", category: "nebo" },
  { image: "/images/nebo-real-05.jpeg", title: "Nebo - štitnik za sunce", category: "nebo" },
  { image: "/images/nebo-real-06.jpeg", title: "Nebo - bočni ugao", category: "nebo" },
  { image: "/images/nebo-real-07.jpeg", title: "Nebo - panoramski otvor", category: "nebo" },
  { image: "/images/nebo-real-08.jpeg", title: "Nebo i detalji enterijera", category: "nebo" },
  { image: "/images/nebo-real-09.jpeg", title: "Nebo - centralni panel", category: "nebo" },
  { image: "/images/nebo-real-10.jpeg", title: "Nebo - bočni vent", category: "nebo" },
  { image: "/images/nebo-real-11.jpeg", title: "Nebo - zadnji deo kabine", category: "nebo" },
  { image: "/images/nebo-real-12.jpeg", title: "Nebo - centralni ventilacioni deo", category: "nebo" },
  { image: "/images/nebo-real-13.jpeg", title: "Nebo - desna strana", category: "nebo" },
  { image: "/images/nebo-real-14.jpeg", title: "Alcantara - zadnji deo krova", category: "nebo" },
  { image: "/images/nebo-real-15.jpeg", title: "Alcantara - završni detalj", category: "nebo" },
];

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
                <div className="glass overflow-hidden rounded-xl transition-all duration-300 brand-glow-hover hover:border-primary/30">
                  <button
                    onClick={() => setModalItem(item)}
                    className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                    aria-label={`Uvećaj sliku: ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </button>
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-serif text-sm font-semibold text-foreground uppercase">{item.title}</h3>
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
                fill
                className="object-cover"
                sizes="100vw"
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
