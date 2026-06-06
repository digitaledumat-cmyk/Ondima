import type { MetadataRoute } from "next";

import { legalNav, mainNav } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ondima.ma";
  const now = new Date();

  const pages = [
    ...mainNav.map((n) => n.href.replace("/#avantages", "/")),
    "/sitemap-html",
    ...legalNav.map((n) => n.href),
  ];

  const unique = [...new Set(pages)];

  return unique.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/legal") ? 0.3 : 0.8,
  }));
}
