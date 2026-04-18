"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";

export function Gallery() {
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
      id="pre-i-posle"
      ref={sectionRef}
      className="relative bg-muted py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl lg:text-5xl">
            {"Na\u0161i Radovi"} -{" "}
            <span className="text-primary">Pre i Posle</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Prave fotografije iz radionice stižu uskoro — klizač ostaje, samo
            sadržaj još{" "}
            <span className="text-foreground/90">„šiva“</span> u pozadini.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-xl border-primary/25 brand-glow">
            {/* Diagonal "tape" — endless strip */}
            <div
              className="pointer-events-none absolute -left-[15%] top-1/2 z-20 w-[130%] -translate-y-1/2 -rotate-[8deg] overflow-hidden py-2 opacity-[0.92]"
              aria-hidden
            >
              <div className="gallery-coming-soon-tape flex w-max bg-primary py-2 font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-primary-foreground shadow-[0_0_24px_rgba(227,0,22,0.45)]">
                {[0, 1].map((dup) => (
                  <div
                    key={dup}
                    className="flex shrink-0 items-center whitespace-nowrap"
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span key={`${dup}-${i}`} className="px-8">
                        Coming soon · Uskoro · Pre i posle ·
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative grid min-h-[280px] grid-cols-2 sm:min-h-[340px]">
              {/* PRE */}
              <div className="relative flex flex-col items-center justify-center border-r border-border/80 bg-gradient-to-br from-card via-muted/40 to-card px-4 py-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-12deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)",
                  }}
                />
                <span className="relative font-serif text-4xl font-bold uppercase tracking-tight text-muted-foreground/40 sm:text-5xl">
                  Pre
                </span>
                <p className="relative mt-3 max-w-[12rem] text-center text-xs uppercase tracking-widest text-muted-foreground">
                  Još uvek u koferu
                </p>
              </div>

              {/* POSLE */}
              <div className="relative flex flex-col items-center justify-center bg-gradient-to-bl from-card via-primary/[0.06] to-card px-4 py-10">
                <span className="relative font-serif text-4xl font-bold uppercase tracking-tight text-primary/35 sm:text-5xl">
                  Posle
                </span>
                <p className="relative mt-3 max-w-[12rem] text-center text-xs uppercase tracking-widest text-muted-foreground">
                  Spremno za reveal
                </p>
              </div>

              {/* Center handle + label (slider "fora") */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 flex w-0 -translate-x-1/2 flex-col items-center justify-center">
                <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent shadow-[0_0_12px_rgba(227,0,22,0.5)]" />
                <div className="gallery-coming-soon-handle absolute flex flex-col items-center gap-2">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-card shadow-[0_0_20px_rgba(227,0,22,0.35)]"
                    aria-hidden
                  >
                    <ArrowLeftRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Uskoro
                  </div>
                </div>
              </div>
            </div>

            <p className="relative z-30 border-t border-border/60 bg-card/80 px-4 py-4 text-center text-sm text-muted-foreground backdrop-blur-sm">
              Kad budu gotove, ovde ćeš moći da{" "}
              <span className="font-medium text-foreground">prevučeš</span> i
              vidiš transformaciju kao uživo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
