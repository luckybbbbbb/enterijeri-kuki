"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Anchor navigacija (#usluge, #kontakt…): novi GA4 page_view pri promeni hasha.
 * Inicijalni hit (uključujući direktan ulazak na /#sekcija) u google-analytics.tsx.
 */
export function GaHashTracker() {
  useEffect(() => {
    if (!GA_ID) return;

    const send = () => {
      if (typeof window.gtag !== "function") return;
      window.gtag("config", GA_ID, {
        page_path: `${window.location.pathname}${window.location.hash || ""}`,
      });
    };

    window.addEventListener("hashchange", send);
    return () => window.removeEventListener("hashchange", send);
  }, []);

  return null;
}
