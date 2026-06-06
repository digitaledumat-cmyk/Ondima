import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/metadata";
import { sitemapSections } from "@/lib/navigation";

export const metadata: Metadata = createMetadata({
  title: "Plan du site Ondima.ma | Navigation complète 2026",
  description:
    "Plan du site HTML Ondima.ma : pages principales, fonctionnalités IPTV, guide d'installation, FAQ, blog, contact et pages légales pour un maillage interne SEO optimal.",
  path: "/sitemap-html",
});

export default function SitemapHtmlPage() {
  return (
    <SiteShell showFab={false}>
      <main>
        <PageHero
          label="Navigation"
          title="Plan du site Ondima.ma"
          description="Index complet des pages pour une navigation optimale et un maillage interne parfait pour les robots d'indexation en 2026."
        />
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-2xl border border-violet-500/20 bg-violet-600/5 px-6 py-4 text-center">
              <p className="text-sm text-zinc-400">
                Sitemap XML pour les moteurs de recherche :{" "}
                <Link
                  href="/sitemap.xml"
                  className="font-medium text-violet-400 hover:text-cyan-400"
                >
                  ondima.ma/sitemap.xml
                </Link>
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapSections.map((section) => (
                <article
                  key={section.title}
                  className="glow-border-purple glass-panel flex flex-col rounded-2xl p-6 sm:p-7"
                >
                  <h2 className="mb-1 text-lg font-bold text-white">
                    {section.title}
                  </h2>
                  {"description" in section && section.description && (
                    <p className="mb-5 text-xs leading-relaxed text-zinc-500">
                      {section.description}
                    </p>
                  )}
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.href}`}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                          <span
                            className="h-1 w-1 shrink-0 rounded-full bg-violet-500 transition-all group-hover:w-2 group-hover:bg-cyan-400"
                            aria-hidden
                          />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-zinc-600">
                <Link href="/" className="text-violet-400 hover:text-violet-300">
                  Retour à l&apos;accueil
                </Link>
                {" · "}
                <Link
                  href="/fonctionnalites"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Fonctionnalités
                </Link>
                {" · "}
                <Link href="/guide" className="text-violet-400 hover:text-violet-300">
                  Guide installation
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
