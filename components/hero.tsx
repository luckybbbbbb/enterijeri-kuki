import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* <picture>: jedan resurs po širini ekrana, bez dva paralelna priority učitavanja */}
      <div className="absolute inset-0">
        <picture className="relative block h-full min-h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="/images/mobile-phone-background.jpeg"
          />
          <Image
            src="/images/kuki-cover-2560.jpg"
            alt="Enterijeri Kuki cover"
            fill
            className="object-cover object-center sm:object-[50%_20%] sm:object-center"
            priority
            quality={80}
            sizes="100vw"
          />
        </picture>
      </div>

      {/* No dark overlay (keep original look) */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#usluge"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Skroluj dole"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80">
            Skroluj
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
