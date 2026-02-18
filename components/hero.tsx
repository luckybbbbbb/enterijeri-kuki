import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.svg"
        alt="Premium auto enterijer"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Premium Auto Enterijeri
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {"Va\u0161 Automobil."}
          <br />
          <span className="text-primary">{"Va\u0161 Stil."}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Premium presvlačenje i restauracija auto enterijera.
          <br className="hidden sm:block" />
          Kvalitet koji se vidi i oseti.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#usluge"
            className="gold-glow-hover w-full rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light sm:w-auto"
          >
            {"Na\u0161e Usluge"}
          </a>
          <a
            href="#kontakt"
            className="w-full rounded-lg border border-primary/40 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 sm:w-auto"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#usluge"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Skroluj dole"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Skroluj</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
