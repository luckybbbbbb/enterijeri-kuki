"use client";

import { useRef, useEffect, useState } from "react";
import {
  Layers,
  CircleDot,
  Armchair,
  Paintbrush,
  Grip,
  CloudSun,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Carbonsko presvlačenje",
    description:
      "Transformišite enterijer vašeg automobila premium carbon fiber oblogama. Sportski izgled i zaštita originalnih delova.",
  },
  {
    icon: CircleDot,
    title: "Presvlačenje volana",
    description:
      "Profesionalno presvlačenje volana kožom ili alcantarom. Savršen grip i luksuzan izgled.",
  },
  {
    icon: Armchair,
    title: "Presvlačenje sedišta",
    description:
      "Kompletna restauracija i presvlačenje sedišta premium materijalima. Vraćamo vaša sedišta u fabričko stanje ili bolje.",
  },
  {
    icon: Paintbrush,
    title: "Farbanje enterijera",
    description:
      "Profesionalno farbanje plastičnih i kožnih delova enterijera. Osvežite ili potpuno promenite boju.",
  },
  {
    icon: Grip,
    title: "Presvlačenje ručice menjača",
    description:
      "Presvucite ručicu menjača premium kožom sa šavovima po vašem izboru. Detalj koji pravi razliku.",
  },
  {
    icon: CloudSun,
    title: "Presvlačenje neba",
    description:
      "Zamena oštećenog ili opuštenog neba (tavanice) novim materijalima. Čist i profesionalan završetak.",
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="usluge" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {"Šta Radimo"}
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {"Na\u0161e"}{" "}
            <span className="text-primary">Usluge</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Od presvlačenja sedišta do carbon fiber instalacija - pružamo
            kompletnu transformaciju enterijera vašeg automobila.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
                className={`glass gold-glow-hover group cursor-pointer rounded-xl p-8 transition-all duration-500 hover:border-primary/30 ${
                  isVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : undefined,
                }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
