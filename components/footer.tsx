import { Instagram, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Početna", href: "#pocetna" },
  { label: "Usluge", href: "#usluge" },
  { label: "Galerija", href: "#galerija" },
  { label: "O Nama", href: "#o-nama" },
  { label: "Kontakt", href: "#kontakt" },
];

const serviceLinks = [
  "Carbonsko presvlačenje",
  "Presvlačenje volana",
  "Presvlačenje sedišta",
  "Farbanje enterijera",
  "Presvlačenje ručice menjača",
  "Presvlačenje neba",
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-xl font-bold tracking-wide text-foreground">
              ENTERIJERI{" "}
              <span className="text-primary">KUKI</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium presvlačenje i restauracija auto enterijera. Više od 10
              godina iskustva u transformaciji vozila.
            </p>
            <a
              href="https://instagram.com/enterijeri.kuki"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @enterijeri.kuki
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
              Brzi Linkovi
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
              Usluge
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#usluge"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
              Kontakt
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+381649534534"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                064/9-534-534
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Palih Boraca 12, Novi Pazar
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Enterijeri Kuki. Sva prava
            zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
