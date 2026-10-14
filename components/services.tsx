"use client";

import {
  Layers,
  Armchair,
  Paintbrush,
  Grip,
  CloudSun,
  Truck,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/services";

const icons: Record<string, LucideIcon> = {
  "carbonsko-presvlacenje": Layers,
  "presvlacenje-volana": Truck,
  "presvlacenje-sedista": Armchair,
  "farbanje-enterijera": Paintbrush,
  "presvlacenje-rucice-menjaca": Grip,
  "presvlacenje-neba": CloudSun,
};

/** Redosled kartica na početnoj */
const order = [
  "carbonsko-presvlacenje",
  "presvlacenje-volana",
  "presvlacenje-sedista",
  "farbanje-enterijera",
  "presvlacenje-rucice-menjaca",
  "presvlacenje-neba",
];
const homeServices = order.map((slug) => services.find((s) => s.slug === slug)!);

export function Services() {
  return (
    <section id="usluge" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {"Šta Radimo"}
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl lg:text-5xl">
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
          {homeServices.map((service) => {
            const Icon = icons[service.slug];
            return (
              <a
                key={service.slug}
                href={`/usluge/${service.slug}`}
                className="glass brand-glow-hover group block rounded-xl p-8 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground uppercase">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.cardDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Saznaj više
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
