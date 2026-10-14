/** Fotografije završenih radova — koriste ih galerija na početnoj i stranice usluga. */
export type Category = "sve" | "volani" | "menjaci" | "sedista" | "nebo";

export interface FinishedItem {
  image: string;
  title: string;
  category: Exclude<Category, "sve">;
}

export const finishedItems: FinishedItem[] = [
  { image: "/images/volan-real-01.jpeg", title: "Volan - carbon i alcantara", category: "volani" },
  { image: "/images/volan-real-02.jpeg", title: "Volan - carbon sa crvenim šavom", category: "volani" },
  { image: "/images/volan-real-03.jpeg", title: "Volan - R stil", category: "volani" },
  { image: "/images/volan-real-04.jpeg", title: "Volan - AMG koža", category: "volani" },
  { image: "/images/volan-real-05.jpeg", title: "Volan - sportski detalj", category: "volani" },
  { image: "/images/volan-real-06.jpeg", title: "Volan - VW alcantara", category: "volani" },
  { image: "/images/volan-real-07.jpeg", title: "Volan - Audi S line", category: "volani" },
  { image: "/images/volan-real-08.jpeg", title: "Volan - set modela", category: "volani" },
  { image: "/images/volan-real-09.jpeg", title: "Volan - BMW dvobojni", category: "volani" },
  { image: "/images/volan-real-10.jpeg", title: "Volan - premium završnica", category: "volani" },
  { image: "/images/volan-real-11.jpeg", title: "Volan - Audi crveno-crni", category: "volani" },
  { image: "/images/volan-real-12.jpeg", title: "Volan - detalj šava", category: "volani" },
  { image: "/images/volan-real-13.jpeg", title: "Volan - premium koža", category: "volani" },
  { image: "/images/volan-real-14.jpeg", title: "Volan - carbon detalji", category: "volani" },
  { image: "/images/menjac-real-01.jpeg", title: "Ručica menjača - DSG", category: "menjaci" },
  { image: "/images/menjac-real-02.jpeg", title: "Ručica menjača - bočni detalj", category: "menjaci" },
  { image: "/images/menjac-real-03.jpeg", title: "Ručica menjača - prednji ugao", category: "menjaci" },
  { image: "/images/menjac-real-04.jpeg", title: "Ručica menjača - top detalj", category: "menjaci" },
  { image: "/images/menjac-real-05.jpeg", title: "Menjač sa kožnom manžetnom", category: "menjaci" },
  { image: "/images/sedista-real-01.jpeg", title: "Sedišta - klasika bež", category: "sedista" },
  { image: "/images/sedista-real-02.jpeg", title: "Sedišta - komplet enterijer", category: "sedista" },
  { image: "/images/sedista-real-03.jpeg", title: "Set sedišta - Audi S7", category: "sedista" },
  { image: "/images/sedista-real-04.jpeg", title: "Sedišta - komplet pogled", category: "sedista" },
  { image: "/images/sedista-real-05.jpeg", title: "Sedišta - AMG par", category: "sedista" },
  { image: "/images/sedista-real-06.jpeg", title: "Sedišta - bočni profil", category: "sedista" },
  { image: "/images/sedista-real-07.jpeg", title: "Sedišta - Audi S linija", category: "sedista" },
  { image: "/images/sedista-real-08.jpeg", title: "Komplet sedišta - dijamant šav", category: "sedista" },
  { image: "/images/sedista-real-09.jpeg", title: "Sedišta - bočni prikaz", category: "sedista" },
  { image: "/images/sedista-real-10.jpeg", title: "Sedište - close-up detalj", category: "sedista" },
  { image: "/images/sedista-real-11.jpeg", title: "Sedište - restauracija klasika", category: "sedista" },
  { image: "/images/sedista-real-12.jpeg", title: "Sedišta - detalj enterijera", category: "sedista" },
  { image: "/images/sedista-real-13.jpeg", title: "Sedišta - premium enterijer", category: "sedista" },
  { image: "/images/sedista-real-14.jpeg", title: "Sedišta i panoramski krov", category: "sedista" },
  { image: "/images/nebo-real-01.jpeg", title: "Crno nebo - alcantara", category: "nebo" },
  { image: "/images/nebo-real-02.jpeg", title: "Nebo - A stub i detalji", category: "nebo" },
  { image: "/images/nebo-real-03.jpeg", title: "Nebo - prednji deo kabine", category: "nebo" },
  { image: "/images/nebo-real-04.jpeg", title: "Nebo - zadnja klupa", category: "nebo" },
  { image: "/images/nebo-real-05.jpeg", title: "Nebo - štitnik za sunce", category: "nebo" },
  { image: "/images/nebo-real-06.jpeg", title: "Nebo - bočni ugao", category: "nebo" },
  { image: "/images/nebo-real-07.jpeg", title: "Nebo - panoramski otvor", category: "nebo" },
  { image: "/images/nebo-real-08.jpeg", title: "Nebo i detalji enterijera", category: "nebo" },
  { image: "/images/nebo-real-09.jpeg", title: "Nebo - centralni panel", category: "nebo" },
  { image: "/images/nebo-real-10.jpeg", title: "Nebo - bočni vent", category: "nebo" },
  { image: "/images/nebo-real-11.jpeg", title: "Nebo - zadnji deo kabine", category: "nebo" },
  { image: "/images/nebo-real-12.jpeg", title: "Nebo - centralni ventilacioni deo", category: "nebo" },
  { image: "/images/nebo-real-13.jpeg", title: "Nebo - desna strana", category: "nebo" },
  { image: "/images/nebo-real-14.jpeg", title: "Alcantara - zadnji deo krova", category: "nebo" },
  { image: "/images/nebo-real-15.jpeg", title: "Alcantara - završni detalj", category: "nebo" },
];
