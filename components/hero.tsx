import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Mobile background (no crop, show full artwork) */}
      <Image
        src="/images/kuki-cover-2560.jpg"
        alt="Enterijeri Kuki cover"
        fill
        className="object-contain object-center scale-[0.9] sm:hidden"
        priority
        quality={80}
        sizes="100vw"
      />
      {/* Desktop background */}
      <Image
        src="/images/kuki-cover-2560.jpg"
        alt="Enterijeri Kuki cover"
        fill
        className="hidden object-cover object-[50%_20%] sm:block sm:object-center"
        priority
        quality={80}
        sizes="100vw"
      />

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
