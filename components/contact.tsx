"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, MessageCircle, Instagram } from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="kontakt"
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
            Kontakt
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl lg:text-5xl">
            {"Javite Nam"}{" "}
            <span className="text-primary">Se</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Kontaktirajte nas direktno - najbrže odgovaramo na poziv i poruke.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="glass rounded-xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground uppercase">Brz kontakt</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Odaberite kanal koji vam najviše odgovara.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="tel:+381649534534"
                  className="gold-glow-hover flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light sm:col-span-2"
                >
                  <Phone className="h-4 w-4" />
                  Pozovi odmah
                </a>
                <a
                  href="https://wa.me/381649534534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  WhatsApp
                </a>
                <a
                  href="viber://chat?number=%2B381649534534"
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Viber
                </a>
                <a
                  href="https://instagram.com/enterijeri.kuki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 sm:col-span-2"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  Instagram
                </a>
              </div>
              <p className="mt-5 text-center text-sm text-muted-foreground">
                064/9-534-534
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
