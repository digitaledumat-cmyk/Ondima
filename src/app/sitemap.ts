import type { MetadataRoute } from "next";

import { HOME_PATH, PRICING_PATH } from "@/lib/constants";
import { legalNav } from "@/lib/navigation";
import { absoluteUrl } from "@/lib/metadata";

type SitemapEntry = MetadataRoute.Sitemap[number];

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<SitemapEntry["changeFrequency"]>;
};

/**
 * URLs indexables uniquement.
 * La racine `/` redirige en 301 vers `/tv`.
 * `/abonnement-iptv` et `/tarifs` redirigent en 301 vers `/abonnement-iptv-maroc`.
 */
const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: HOME_PATH, priority: 1, changeFrequency: "daily" },
  { path: "/iptv-maroc", priority: 0.95, changeFrequency: "weekly" },
  { path: PRICING_PATH, priority: 0.9, changeFrequency: "weekly" },
  { path: "/fonctionnalites", priority: 0.8, changeFrequency: "weekly" },
  { path: "/guide", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sitemap-html", priority: 0.7, changeFrequency: "monthly" },
  ...legalNav.map((item) => ({
    path: item.href,
    priority: 0.3,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return SITEMAP_ROUTES.filter(
    (route) =>
      route.path !== "/" &&
      route.path !== "/abonnement-iptv" &&
      route.path !== "/tarifs",
  ).map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
