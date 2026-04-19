import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GaHashTracker } from "@/components/ga-hash-tracker";
import "./globals.css";

const SITE_URL = "https://enterijerikuki.rs";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enterijeri Kuki | Premium Auto Enterijeri - Novi Pazar",
    template: "%s | Enterijeri Kuki",
  },
  description:
    "Enterijer kola Novi Pazar — Enterijeri Kuki (Palih Boraca 12). Presvlačenje sedišta, kožni volan, nebo (crno/zvezdano) i detalji.",
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
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
    icon: [
      { url: "/images/favicon-logo.svg", type: "image/svg+xml" },
      { url: "/images/logo_black.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/logo_color.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon.ico" },
    ],
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
    <html lang="sr" className={inter.variable}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <GaHashTracker />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
