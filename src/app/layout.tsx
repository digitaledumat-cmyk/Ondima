import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  rootMetadataExtensions,
  SITE_URL,
} from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  ...rootMetadataExtensions,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
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
