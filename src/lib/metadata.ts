import type { Metadata } from "next";

import { HOME_PATH } from "@/lib/constants";

export const SITE_URL = "https://ondima.ma";
export const SITE_NAME = "Ondima";

export const DEFAULT_TITLE =
  "Abonnement TV IPTV Maroc 2026 | +45 000 Chaînes HD/4K - Ondima";

export const DEFAULT_DESCRIPTION =
  "Ondima.ma/tv : abonnement TV et IPTV Maroc Premium. Chaînes live, sport, VOD 4K ultra-stable, anti-freeze et support WhatsApp 24/7. Packs dès 300 DH/an, garantie 45 jours.";

export const OG_IMAGE = {
  url: "/ondima.webp",
  width: 1672,
  height: 941,
  alt: "Ondima.ma/tv — Abonnement TV IPTV Maroc Premium, streaming 4K stable 2026",
};

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/+$/, "")}`;
}

function buildSocialMetadata(
  title: string,
  description: string,
  url: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    ...buildSocialMetadata(title, description, url),
  };
}

export const HOME_KEYWORDS = [
  "IPTV Maroc",
  "abonnement IPTV Maroc",
  "meilleur IPTV Maroc",
  "fournisseur IPTV Maroc",
  "acheter IPTV Maroc",
  "recharge IPTV Maroc",
  "IPTV 4K Maroc",
  "IPTV HD Maroc",
  "TV Maroc",
  "abonnement TV",
];

export const rootMetadataExtensions: Pick<
  Metadata,
  "openGraph" | "twitter" | "alternates"
> = {
  alternates: { canonical: absoluteUrl(HOME_PATH) },
  ...buildSocialMetadata(
    DEFAULT_TITLE,
    DEFAULT_DESCRIPTION,
    absoluteUrl(HOME_PATH),
  ),
};
