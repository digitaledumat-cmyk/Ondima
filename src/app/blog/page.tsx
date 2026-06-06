import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { blogSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "Best IPTV Services 2026 | IPTV Subscription UK & Guides - Ondima",
  description:
    "Blog IPTV : comparatifs best IPTV services, IPTV subscription UK, IPTV service providers et guides techniques. Expertise Ondima pour le streaming international.",
  path: "/blog",
  keywords: ["IPTV subscription UK", "best IPTV services", "IPTV service providers", "best IPTV"],
});

export default function BlogPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          label="Blog"
          title="Guides & actualités IPTV"
          description="Comparatifs best IPTV services, IPTV subscription UK et analyses des IPTV service providers. Le blog expert pour identifier le best IPTV en 2026."
        />
        <SeoContentBlock
          title={blogSeoIntro.title}
          paragraphs={blogSeoIntro.paragraphs}
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="glow-border group glass-panel flex flex-col rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-white/[0.06]"
                >
                  <span className="mb-3 inline-flex w-fit rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {post.category}
                  </span>
                  <p className="mb-2 text-lg font-bold text-white group-hover:text-violet-200">
                    {post.title}
                  </p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-zinc-600">
                    <span>{post.date}</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-zinc-600">
              Articles à venir régulièrement.{" "}
              <Link href="/abonnement-iptv" className="text-violet-400 hover:text-violet-300">
                Voir nos forfaits
              </Link>
              {" · "}
              <Link href="/faq" className="text-violet-400 hover:text-violet-300">
                FAQ technique
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
