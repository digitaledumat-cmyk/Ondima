import type { Metadata } from "next";

const SITE_URL = "https://ondima.ma";

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
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url,
      siteName: "Ondima",
      title,
      description,
    },
  };
}
