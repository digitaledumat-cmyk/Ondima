import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import { HOME_PATH } from "@/lib/constants";
import { absoluteUrl, createMetadata } from "@/lib/metadata";
import { sitemapSections } from "@/lib/navigation";

export const metadata: Metadata = createMetadata({
  title: "Plan du site Ondima.ma | Accueil TV, tarifs et pages 2026",
  description:
    "Plan du site HTML Ondima.ma : accueil ondima.ma/tv, IPTV Maroc, tarifs, fonctionnalités, guide, FAQ, blog, contact et pages légales pour un maillage interne SEO optimal.",
  path: "/sitemap-html",
});

export default function SitemapHtmlPage() {
  return (
    <SiteShell showFab={false}>
      <main>
        <PageHero
          label="Navigation"
          title="Plan du site Ondima.ma"
          description="Index complet des pages indexables. L'accueil du site est ondima.ma/tv — la racine ondima.ma redirige en 301 vers cette URL."
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
                          className="group flex items-start gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500 transition-all group-hover:w-2 group-hover:bg-cyan-400"
                            aria-hidden
                          />
                          <span className="min-w-0">
                            <span className="block">{link.label}</span>
                            <span className="mt-0.5 block text-xs text-zinc-600 group-hover:text-zinc-500">
                              {absoluteUrl(link.href).replace(/^https:\/\//, "")}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-zinc-600">
                <Link href={HOME_PATH} className="text-violet-400 hover:text-violet-300">
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
