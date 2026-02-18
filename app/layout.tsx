import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Enterijeri Kuki | Premium Auto Enterijeri - Novi Pazar",
  description:
    "Premium presvlačenje i restauracija auto enterijera. Carbonsko presvlačenje, presvlačenje volana, sedišta, neba i farbanje enterijera. Novi Pazar, Srbija.",
  keywords:
    "auto enterijer, presvlačenje sedišta, carbon fiber, auto tapetarija, Novi Pazar, enterijeri kuki",
  openGraph: {
    title: "Enterijeri Kuki | Premium Auto Enterijeri",
    description:
      "Premium presvlačenje i restauracija auto enterijera u Novom Pazaru.",
    type: "website",
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
