import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import { createMetadata } from "@/lib/metadata";
import { sitemapSections } from "@/lib/navigation";

export const metadata: Metadata = createMetadata({
  title: "Plan du site Ondima.ma | Navigation complète",
  description:
    "Plan du site HTML Ondima.ma pour une navigation optimale : pages principales, blog, FAQ, contact et pages légales.",
  path: "/sitemap-html",
});

export default function SitemapHtmlPage() {
  return (
    <SiteShell showFab={false}>
      <main>
        <PageHero
          label="Navigation"
          title="Plan du site"
          description="Accédez rapidement à toutes les pages d'Ondima.ma pour une expérience de navigation optimale."
        />
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {sitemapSections.map((section) => (
                <div key={section.title}>
                  <p className="mb-4 text-lg font-semibold text-white">{section.title}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-violet-400 transition-colors hover:text-cyan-400"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
