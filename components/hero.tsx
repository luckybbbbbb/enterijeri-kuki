import { ChevronDown, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* <picture>: jedan resurs po širini ekrana, bez dva paralelna priority učitavanja */}
      <div className="relative min-h-[45svh] flex-1">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="/images/mobile-phone-background.jpeg"
          />
          <img
            src="/images/kuki-cover-2560.jpg"
            alt="Presvučen enterijer automobila — Enterijeri Kuki, Novi Pazar"
            width={2560}
            height={2253}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Vidljiv naslov (h1) ispod slike — bitno za SEO, Google slabije vrednuje skriveni tekst */}
      <div className="relative z-10 border-t border-border/50 bg-background px-4 pt-8 pb-10 text-center sm:pt-10 sm:pb-12">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
          Palih Boraca 12 · Novi Pazar
        </p>
        <h1 className="font-serif text-3xl font-bold text-foreground uppercase sm:text-5xl">
          Enterijer kola <span className="text-primary">Novi Pazar</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Presvlačenje sedišta, volana, neba i ručice menjača — originalni
          materijali. Mušterije iz cele Srbije i Evrope.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+381649534534"
            className="brand-glow-hover flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-[#e30016] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff2a3d] sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            064/9-534-534
          </a>
          <a
            href="#usluge"
            className="flex w-full max-w-xs items-center justify-center gap-1 rounded-lg border border-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 sm:w-auto"
          >
            Pogledaj usluge
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
