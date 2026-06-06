import type { MetadataRoute } from "next";

import { legalNav, mainNav } from "@/lib/navigation";

const WEEKLY_PATHS = ["/fonctionnalites", "/guide", "/abonnement-iptv"];
const HIGH_PRIORITY_PATHS = ["/abonnement-iptv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ondima.ma";
  const now = new Date();

  const pages = [
    "/",
    ...mainNav.map((n) => n.href).filter((h) => !h.includes("#")),
    "/sitemap-html",
    ...legalNav.map((n) => n.href),
  ];

  const unique = [...new Set(pages)];

  return unique.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency:
      path === "/" || WEEKLY_PATHS.includes(path) ? "weekly" : "monthly",
    priority: path === "/"
      ? 1
      : HIGH_PRIORITY_PATHS.includes(path)
        ? 0.9
        : path.includes("/legal")
          ? 0.3
          : 0.8,
  }));
}
