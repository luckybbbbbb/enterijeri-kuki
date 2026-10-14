import type { FinishedItem } from "@/lib/gallery-items";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Naziv usluge (h1, kartice, breadcrumb) */
  name: string;
  /** <title> — bez sufiksa brenda, template ga dodaje */
  metaTitle: string;
  metaDescription: string;
  /** Kratak opis za karticu na početnoj */
  cardDescription: string;
  intro: string;
  paragraphs: string[];
  includes: string[];
  galleryCategory?: FinishedItem["category"];
  faq: ServiceFaq[];
}

/** Gradovi i zemlje iz kojih dolaze mušterije — koriste se u tekstu i u strukturiranim podacima. */
export const SERVICE_CITIES = [
  "Novi Pazar",
  "Beograd",
  "Novi Sad",
  "Niš",
  "Kragujevac",
  "Kraljevo",
  "Čačak",
];

export const SERVICE_COUNTRIES = ["Srbija", "Nemačka", "Austrija"];

const commonFaq: ServiceFaq[] = [
  {
    question: "Da li radite za mušterije van Novog Pazara?",
    answer:
      "Da. Mušterije nam dolaze iz cele Srbije — Beograda, Novog Sada, Niša, Kragujevca, Kraljeva, Čačka i drugih gradova — kao i iz inostranstva, najčešće iz Nemačke i Austrije. Termin dogovorite unapred telefonom, preko WhatsApp-a ili Vibera.",
  },
  {
    question: "Kako da saznam cenu?",
    answer:
      "Cena zavisi od modela vozila, obima posla i izabranog materijala. Pozovite nas na 064/9-534-534 ili pošaljite fotografije na WhatsApp ili Viber i dobićete procenu.",
  },
];

export const services: ServicePage[] = [
  {
    slug: "presvlacenje-volana",
    name: "Presvlačenje volana",
    metaTitle: "Presvlačenje volana — koža i alcantara | Novi Pazar",
    metaDescription:
      "Presvlačenje volana kožom ili alcantarom za automobile i kamione. Originalni materijali, šav po izboru. Enterijeri Kuki, Novi Pazar — mušterije iz cele Srbije i Evrope.",
    cardDescription:
      "Presvlačenje volana za automobile i kamione prirodnom kožom ili alcantarom. Idealno za privatna i flotna vozila, sa naglaskom na udobnost, grip i dugotrajnost.",
    intro:
      "Volan je deo enterijera koji držite u rukama svaki dan — i prvi koji pokazuje tragove korišćenja. Presvlačimo volane automobila i kamiona prirodnom kožom ili alcantarom, u originalnim materijalima i sa šavom po vašem izboru.",
    paragraphs: [
      "Radimo volane svih marki — od svakodnevnih automobila do sportskih modela (Mercedes-AMG, Audi S line, VW R, BMW) i kamiona. Možete zadržati fabrički izgled ili napraviti kombinaciju: koža i alcantara, carbon detalji, dvobojni volan ili kontrastni šav u boji.",
      "Presvlačenje volana je isplativo i za flotna vozila i kamione, gde je volan izložen najvećem habanju — vraća grip i udoban osećaj u vožnji.",
    ],
    includes: [
      "Prirodna koža ili alcantara",
      "Kombinacije koža + alcantara + carbon",
      "Šav u boji po izboru",
      "Automobili i kamioni",
    ],
    galleryCategory: "volani",
    faq: [
      {
        question: "Da li mogu da izaberem boju šava i kombinaciju materijala?",
        answer:
          "Da. Boja šava, kombinacija kože i alcantare i detalji (npr. carbon ili dvobojni volan) biraju se po vašoj želji.",
      },
      {
        question: "Da li presvlačite i volane kamiona?",
        answer:
          "Da, presvlačimo volane automobila i kamiona, za privatna i flotna vozila.",
      },
      ...commonFaq,
    ],
  },
  {
    slug: "presvlacenje-sedista",
    name: "Presvlačenje sedišta",
    metaTitle: "Presvlačenje sedišta automobila | Novi Pazar",
    metaDescription:
      "Presvlačenje i restauracija auto sedišta kožom i alcantarom, originalni materijali. Enterijeri Kuki, Novi Pazar — radimo za mušterije iz cele Srbije, Nemačke i Austrije.",
    cardDescription:
      "Kompletna restauracija i presvlačenje sedišta premium materijalima. Vraćamo vaša sedišta u fabričko stanje ili bolje.",
    intro:
      "Pocepana, izlizana ili ispucala sedišta najviše kvare utisak o enterijeru. Radimo kompletno presvlačenje i restauraciju sedišta originalnim materijalima — da vrate fabrički izgled ili dobiju potpuno novi stil.",
    paragraphs: [
      "Presvlačimo prednja i zadnja sedišta, pojedinačna sedišta ili kompletan enterijer. Moguće su kombinacije kože i alcantare, dijamant šav, kontrastni šavovi i restauracija sedišta klasičnih automobila.",
      "Radili smo sedišta za Audi, Mercedes-AMG i druge marke — pogledajte fotografije završenih radova ispod.",
    ],
    includes: [
      "Prednja, zadnja ili sva sedišta",
      "Koža, alcantara i kombinacije",
      "Dijamant i kontrastni šav",
      "Restauracija klasičnih vozila",
    ],
    galleryCategory: "sedista",
    faq: [
      {
        question: "Da li mogu da presvučem samo jedno sedište?",
        answer:
          "Da, radimo pojedinačna sedišta (npr. vozačevo, koje se najviše haba), ali i kompletan set sedišta.",
      },
      ...commonFaq,
    ],
  },
  {
    slug: "presvlacenje-neba",
    name: "Presvlačenje neba",
    metaTitle: "Presvlačenje neba automobila — crno i zvezdano nebo | Novi Pazar",
    metaDescription:
      "Presvlačenje neba (plafona) automobila: zamena opuštenog neba, crno nebo u alcantari i zvezdano nebo. Enterijeri Kuki, Novi Pazar — mušterije iz cele Srbije i Evrope.",
    cardDescription:
      "Zamena oštećenog ili opuštenog neba (tavanice) novim materijalima. Čist i profesionalan završetak.",
    intro:
      "Opušteno ili umrljano nebo (plafon) je čest problem kod starijih automobila. Menjamo ga novim materijalom — a ako želite sportski izgled, radimo i crno nebo u alcantari ili zvezdano nebo.",
    paragraphs: [
      "Pored samog neba presvlačimo i prateće delove: A, B i C stubove, štitnike za sunce i okvire panoramskog krova, tako da ceo plafon izgleda ujednačeno.",
      "Crno nebo u alcantari daje enterijeru premium izgled kakav imaju sportske verzije automobila.",
    ],
    includes: [
      "Zamena opuštenog neba",
      "Crno nebo u alcantari",
      "Zvezdano nebo",
      "Stubovi, štitnici za sunce, panorama",
    ],
    galleryCategory: "nebo",
    faq: [
      {
        question: "Da li se uz nebo presvlače i stubovi i štitnici za sunce?",
        answer:
          "Može. Stubove, štitnike za sunce i okvir panoramskog krova presvlačimo u istom materijalu da bi ceo plafon bio ujednačen.",
      },
      ...commonFaq,
    ],
  },
  {
    slug: "presvlacenje-rucice-menjaca",
    name: "Presvlačenje ručice menjača",
    metaTitle: "Presvlačenje ručice menjača i manžetne | Novi Pazar",
    metaDescription:
      "Presvlačenje ručice menjača i kožne manžetne, šav po izboru, originalni materijali. Enterijeri Kuki, Novi Pazar — radimo za mušterije iz cele Srbije i inostranstva.",
    cardDescription:
      "Presvucite ručicu menjača premium kožom sa šavovima po vašem izboru. Detalj koji pravi razliku.",
    intro:
      "Ručica menjača je mali detalj koji se stalno vidi i stalno dodiruje. Presvlačimo ručice manuelnih i automatskih (DSG) menjača i manžetne, kožom i šavom po vašem izboru.",
    paragraphs: [
      "Ručicu menjača najčešće radimo u kompletu sa volanom, sa istim materijalom i istom bojom šava — tako enterijer dobija usklađen izgled.",
    ],
    includes: [
      "Manuelni i automatski (DSG) menjači",
      "Kožna manžetna",
      "Šav u boji po izboru",
      "Komplet sa volanom",
    ],
    galleryCategory: "menjaci",
    faq: [...commonFaq],
  },
  {
    slug: "carbonsko-presvlacenje",
    name: "Carbonsko presvlačenje",
    metaTitle: "Carbon obloge za enterijer automobila | Novi Pazar",
    metaDescription:
      "Carbonsko presvlačenje enterijera — carbon fiber obloge za instrument tablu, konzolu i lajsne. Enterijeri Kuki, Novi Pazar — mušterije iz cele Srbije i Evrope.",
    cardDescription:
      "Transformišite enterijer vašeg automobila premium carbon fiber oblogama. Sportski izgled i zaštita originalnih delova.",
    intro:
      "Carbon fiber obloge daju enterijeru sportski izgled i istovremeno štite originalne delove od ogrebotina i habanja.",
    paragraphs: [
      "Carbon obloge postavljamo na lajsne, centralnu konzolu, instrument tablu i druge plastične delove enterijera. Odlično se slažu sa volanom u kombinaciji kože, alcantare i carbona.",
    ],
    includes: [
      "Lajsne i dekorativni paneli",
      "Centralna konzola",
      "Instrument tabla",
      "Usklađivanje sa volanom",
    ],
    faq: [...commonFaq],
  },
  {
    slug: "farbanje-enterijera",
    name: "Farbanje enterijera",
    metaTitle: "Farbanje sedišta i enterijera — automobili i autobusi | Novi Pazar",
    metaDescription:
      "Farbanje i obnova kožnih sedišta i plastike enterijera za automobile i autobuse. Enterijeri Kuki, Novi Pazar — radimo za privatna vozila, prevoznike i firme iz cele Srbije.",
    cardDescription:
      "Farbanje i obnova sedišta, plastika i kožnih delova enterijera za automobile i autobuse. Pogodno za privatna vozila, prevoznike i firme.",
    intro:
      "Izbledela koža i izgrebana plastika ne moraju odmah da se menjaju. Farbanjem i obnovom vraćamo boju i svež izgled sedištima i delovima enterijera — za automobile i autobuse.",
    paragraphs: [
      "Ova usluga je pogodna i za prevoznike i firme sa više vozila, gde je obnova enterijera brže i povoljnije rešenje od kompletnog presvlačenja.",
    ],
    includes: [
      "Farbanje kožnih sedišta",
      "Obnova plastičnih delova",
      "Automobili i autobusi",
      "Privatna i flotna vozila",
    ],
    faq: [...commonFaq],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
