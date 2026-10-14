import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { FACEBOOK_URL, GOOGLE_MAPS_URL, INSTAGRAM_URL } from "@/lib/site";
import { services } from "@/lib/services";

const quickLinks = [
  { label: "Početna", href: "/#pocetna" },
  { label: "Usluge", href: "/#usluge" },
  { label: "Pre i Posle", href: "/#pre-i-posle" },
  { label: "Galerija", href: "/#galerija-gotovih-radova" },
  { label: "O Nama", href: "/#o-nama" },
  { label: "Kontakt", href: "/#kontakt" },
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
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @enterijeri.kuki
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              EnterijeriKuki
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
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/usluge/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
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
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Palih Boraca 12, Novi Pazar
              </a>
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
