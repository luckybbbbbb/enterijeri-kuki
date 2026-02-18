"use client";

import { useRef, useEffect, useState } from "react";
import { Users, Gem, ShieldCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 14000,
    suffix: "+",
    label: "Instagram pratilaca",
    description: "Zajednica koja nam veruje",
  },
  {
    icon: Gem,
    value: 100,
    suffix: "%",
    label: "Kvalitetni materijali",
    description: "Samo premium koža i materijali",
  },
  {
    icon: ShieldCheck,
    value: 5,
    suffix: " god.",
    label: "Garancija na rad",
    description: "Stojimo iza svakog projekta",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Godina iskustva",
    description: "Dekada u industriji",
  },
];

function AnimatedCounter({
  value,
  suffix,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldAnimate, value]);

  return (
    <span className="font-serif text-4xl font-bold text-primary sm:text-5xl">
      {shouldAnimate ? count.toLocaleString("sr-Latn") : "0"}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-nama" ref={sectionRef} className="relative py-24 sm:py-32">
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
            {"Za\u0161to Mi"}
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Razlozi za{" "}
            <span className="text-primary">Poverenje</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass gold-glow-hover rounded-xl p-8 text-center transition-all duration-700 hover:border-primary/30 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${200 + index * 150}ms`
                    : "0ms",
                }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  shouldAnimate={isVisible}
                />
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
