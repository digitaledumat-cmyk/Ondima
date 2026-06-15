import type { Metadata } from "next";

export const SITE_URL = "https://ondima.ma";
export const SITE_NAME = "Ondima";

export const DEFAULT_TITLE =
  "IPTV Maroc Premium 2026 | +45 000 Chaînes HD/4K - Ondima";

export const DEFAULT_DESCRIPTION =
  "Découvrez OnDima, le leader de l'abonnement IPTV Maroc Premium. Profitez d'un accès 4K ultra-stable, anti-freeze et d'un support 24/7 sur tous vos écrans.";

export const OG_IMAGE = {
  url: "/ondima.webp",
  width: 1672,
  height: 941,
  alt: "Ondima IPTV Maroc Premium — Streaming 4K stable et abonnement IPTV 2026",
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

export const rootMetadataExtensions: Pick<
  Metadata,
  "openGraph" | "twitter" | "alternates"
> = {
  alternates: { canonical: SITE_URL },
  ...buildSocialMetadata(DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_URL),
};
