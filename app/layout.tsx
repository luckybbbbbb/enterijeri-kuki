import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const SITE_URL = "https://enterijerikuki.rs";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enterijeri Kuki | Premium Auto Enterijeri - Novi Pazar",
    template: "%s | Enterijeri Kuki",
  },
  description:
    "Premium presvlačenje i restauracija auto enterijera u Novom Pazaru. Carbonsko presvlačenje, presvlačenje volana, sedišta, neba i farbanje enterijera. Više od 10 godina iskustva.",
  keywords: [
    "auto enterijer",
    "presvlačenje sedišta",
    "presvlačenje volana",
    "carbon fiber",
    "auto tapetarija",
    "presvlačenje neba",
    "farbanje enterijera",
    "Novi Pazar",
    "enterijeri kuki",
    "restauracija auto enterijera",
    "alcantara",
    "presvlačenje ručice menjača",
    "premium auto enterijer Srbija",
    "enterijeri Beograd",
    "enterijeri Novi Sad",
    "enterijeri Čačak",
    "enterijeri Šabac",
    "enterijeri Raška",
    "enterijeri Kragujevac",
    "enterijeri Niš",
    "enterijeri Kraljevo",
    "enterijeri Užice",
    "enterijeri Kruševac",
    "enterijeri Subotica",
    "enterijeri Zrenjanin",
    "enterijeri Leskovac",
    "enterijeri Smederevo",
    "enterijeri Valjevo",
    "enterijeri Vranje",
    "enterijeri Pirot",
    "enterijeri Sremska Mitrovica",
    "tapetarija auto Srbija",
  ],
  authors: [{ name: "Enterijeri Kuki" }],
  creator: "Enterijeri Kuki",
  publisher: "Enterijeri Kuki",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Enterijeri Kuki | Premium Auto Enterijeri - Novi Pazar",
    description:
      "Premium presvlačenje i restauracija auto enterijera u Novom Pazaru. Carbonsko presvlačenje, volani, sedišta, nebo i farbanje.",
    url: SITE_URL,
    siteName: "Enterijeri Kuki",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/background-enterier.jpg",
        width: 1200,
        height: 630,
        alt: "Enterijeri Kuki - Premium Auto Enterijeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterijeri Kuki | Premium Auto Enterijeri",
    description:
      "Premium presvlačenje i restauracija auto enterijera u Novom Pazaru.",
    images: ["/images/background-enterier.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
