import type { MetadataRoute } from "next";

import { legalNav, mainNav } from "@/lib/navigation";

const BASE_URL = "https://ondima.ma";

type SitemapEntry = MetadataRoute.Sitemap[number];

type PriorityRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<SitemapEntry["changeFrequency"]>;
};

const PRIORITY_ROUTES: PriorityRoute[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/abonnement-iptv", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fonctionnalites", priority: 0.8, changeFrequency: "weekly" },
  { path: "/guide", priority: 0.8, changeFrequency: "weekly" },
];

function toAbsoluteUrl(path: string): string {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priorityPaths = new Set(PRIORITY_ROUTES.map((route) => route.path));

  const secondaryPaths = [
    ...mainNav.map((item) => item.href).filter((href) => !href.includes("#")),
    "/sitemap-html",
    ...legalNav.map((item) => item.href),
  ].filter((path) => !priorityPaths.has(path));

  const uniqueSecondary = [...new Set(secondaryPaths)];

  const priorityEntries: MetadataRoute.Sitemap = PRIORITY_ROUTES.map(
    (route) => ({
      url: toAbsoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const secondaryEntries: MetadataRoute.Sitemap = uniqueSecondary.map(
    (path) => ({
      url: toAbsoluteUrl(path),
      lastModified: now,
      changeFrequency: path.includes("/legal") ? "yearly" : "monthly",
      priority: path.includes("/legal") ? 0.3 : 0.7,
    }),
  );

  return [...priorityEntries, ...secondaryEntries];
}
