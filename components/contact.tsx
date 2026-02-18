"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MapPin, Clock, Instagram, Send, CheckCircle } from "lucide-react";

const services = [
  "Carbonsko presvlačenje",
  "Presvlačenje volana",
  "Presvlačenje sedišta",
  "Farbanje enterijera",
  "Presvlačenje ručice menjača",
  "Presvlačenje neba",
  "Ostalo",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Ime je obavezno";
    if (!formData.phone.trim()) newErrors.phone = "Telefon je obavezan";
    else if (!/^[0-9/\-+\s]{6,20}$/.test(formData.phone))
      newErrors.phone = "Unesite validan broj telefona";
    if (!formData.service) newErrors.service = "Odaberite uslugu";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

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
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {"Javite Nam"}{" "}
            <span className="text-primary">Se</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Imate pitanje ili želite zakazati termin? Kontaktirajte nas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Phone */}
            <a
              href="tel:+381649534534"
              className="glass gold-glow-hover group flex items-center gap-5 rounded-xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pozovite nas</p>
                <p className="font-serif text-xl font-semibold text-foreground">
                  064/9-534-534
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="glass flex items-center gap-5 rounded-xl p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Adresa</p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  Palih Boraca 12, Novi Pazar
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://instagram.com/enterijeri.kuki"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gold-glow-hover group flex items-center gap-5 rounded-xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Instagram className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  @enterijeri.kuki
                </p>
                <p className="text-sm text-primary">14K+ pratilaca</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="glass flex items-center gap-5 rounded-xl p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Radno vreme</p>
                <p className="font-serif text-base font-semibold text-foreground">
                  Pon - Pet: 08:00 - 18:00
                </p>
                <p className="font-serif text-base font-semibold text-foreground">
                  Sub: 09:00 - 15:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="glass rounded-xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Hvala!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {"Va\u0161a poruka je uspešno poslata. Kontaktiraćemo vas uskoro."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Ime i prezime
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Unesite vaše ime"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="06X/XXX-XXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Odaberite uslugu
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full appearance-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="" disabled>
                        Izaberite uslugu...
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Poruka{" "}
                      <span className="text-muted-foreground">(opciono)</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Opišite šta vam je potrebno..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="gold-glow-hover flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light"
                  >
                    <Send className="h-4 w-4" />
                    {"Po\u0161aljite Poruku"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
