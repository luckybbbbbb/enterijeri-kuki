"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Početna", href: "#pocetna" },
  { label: "Usluge", href: "#usluge" },
  { label: "Pre i Posle", href: "#pre-i-posle" },
  { label: "Galerija", href: "#galerija-gotovih-radova" },
  { label: "O Nama", href: "#o-nama" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#pocetna" className="flex items-center gap-3" aria-label="Enterijeri Kuki - Početna">
          <Image
            src="/images/logo_color.svg"
            alt="Enterijeri Kuki logo"
            width={163}
            height={160}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+381649534534"
          className="hidden items-center gap-2 rounded-lg bg-[#e30016] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ff2a3d] lg:flex"
        >
          <Phone className="h-4 w-4" />
          064/9-534-534
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-foreground lg:hidden"
          aria-label={isMobileOpen ? "Zatvori meni" : "Otvori meni"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="glass-nav border-t border-border/50 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="border-b border-border/30 py-4 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+381649534534"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#e30016] px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              064/9-534-534
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
