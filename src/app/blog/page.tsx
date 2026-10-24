import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { blogPosts, isPublishedPost } from "@/lib/blog";
import { PRICING_PATH } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { blogSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "Blog IPTV Maroc 2027 | Abonnement légal, guides & comparatifs - Ondima",
  description:
    "Blog IPTV Maroc : abonnement 2027, guides Smart TV et comparatifs. Expertise Ondima pour choisir un IPTV Maroc stable.",
  path: "/blog",
  keywords: [
    "iptv maroc",
    "abonnement iptv maroc",
    "iptv maroc légal",
    "IPTV subscription UK",
    "best IPTV services",
  ],
});

export default function BlogPage() {
  return (
    <SiteShell>
      <main id="contenu">
        <PageHero
          label="Blog"
          title="Guides & actualités IPTV"
          description="IPTV Maroc 2027 : abonnement légal, guides Smart TV, comparatifs et actualités. Le blog Ondima pour choisir un IPTV Maroc stable et 4K."
        />
        <SeoContentBlock
          title={blogSeoIntro.title}
          paragraphs={blogSeoIntro.paragraphs}
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => {
                const published = isPublishedPost(post);
                const card = (
                  <>
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
                      <span>
                        {published ? `${post.readTime} de lecture` : "Bientôt"}
                      </span>
                    </div>
                  </>
                );

                return published ? (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="glow-border group glass-panel flex flex-col rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-white/[0.06]"
                  >
                    {card}
                  </Link>
                ) : (
                  <article
                    key={post.slug}
                    className="glow-border group glass-panel flex flex-col rounded-2xl p-6 transition-all duration-400"
                  >
                    {card}
                  </article>
                );
              })}
            </div>
            <p className="mt-10 text-center text-sm text-zinc-600">
              Guide IPTV Maroc 2027.{" "}
              <Link href="/blog/iptv-maroc-abonnement-legal-2027" className="text-violet-400 hover:text-violet-300">
                Lire l&apos;article
              </Link>
              {" · "}
              <Link href={PRICING_PATH} className="text-violet-400 hover:text-violet-300">
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
