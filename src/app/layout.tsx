import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ondima.ma"),
  title: "IPTV Maroc Premium 2026 | +45 000 Chaînes HD/4K - Ondima",
  description:
    "Découvrez la nouvelle expérience IPTV Maroc avec Ondima.ma. Profitez d'un accès premium stable, +45k chaînes, VOD 4K/UHD, serveurs VPS ultra-rapides et un support 24/7.",
  alternates: {
    canonical: "https://ondima.ma",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://ondima.ma",
    siteName: "Ondima",
    title: "IPTV Maroc Premium 2026 | +45 000 Chaînes HD/4K - Ondima",
    description:
      "Découvrez la nouvelle expérience IPTV Maroc avec Ondima.ma. Profitez d'un accès premium stable, +45k chaînes, VOD 4K/UHD, serveurs VPS ultra-rapides et un support 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "144x144", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
  keywords: [
    "IPTV Maroc",
    "abonnement IPTV Maroc",
    "meilleur IPTV Maroc",
    "fournisseur IPTV Maroc",
    "acheter IPTV Maroc",
    "recharge IPTV Maroc",
    "IPTV 4K Maroc",
    "IPTV HD Maroc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-void antialiased">{children}</body>
    </html>
  );
}
