import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Accordion from "@/components/ui/Accordion";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import JsonLd from "@/components/seo/JsonLd";
import { HOME_PATH, PRICING_PATH, WHATSAPP_URL } from "@/lib/constants";
import { getPostBySlug, isPublishedPost, publishedPosts } from "@/lib/blog";
import { articleJsonLd, faqArticleJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPublishedPost(post)) return {};

  return createMetadata({
    title: `${post.title} | Ondima`,
    description: post.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPublishedPost(post)) notFound();

  const faqItems = (post.faq ?? []).map((item, index) => ({
    id: `blog-faq-${index}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <SiteShell>
      <main id="contenu">
        <JsonLd data={articleJsonLd(post)} />
        {post.faq?.length ? <JsonLd data={faqArticleJsonLd(post.faq)} /> : null}

        <PageHero
          label={`${post.category} · ${post.date}`}
          title={post.h1 ?? post.title}
          description={post.excerpt}
        />

        <article className="border-b border-white/5 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-10 text-xs text-zinc-500">
              {post.readTime} de lecture
              {post.source ? (
                <>
                  {" · "}
                  Référence :{" "}
                  <a
                    href={post.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    {post.source.label}
                  </a>
                </>
              ) : null}
            </p>

            {post.intro?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mb-5 text-base leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}

            {post.sections?.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mb-4 text-base leading-relaxed text-zinc-400"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2 border-l border-violet-500/30 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-zinc-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-zinc-300">
                Prêt pour un <strong className="text-white">IPTV Maroc</strong> au
                prix clair, 4K et support WhatsApp ?
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={PRICING_PATH}
                  className="btn-orange inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
                >
                  Voir les tarifs IPTV Maroc
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
                >
                  Commander
                </a>
              </div>
            </div>
          </div>
        </article>

        {faqItems.length > 0 ? (
          <section className="border-b border-white/5 py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                FAQ IPTV Maroc
              </h2>
              <Accordion items={faqItems} defaultOpen={faqItems[0]?.id} />
            </div>
          </section>
        ) : null}

        <section className="py-10">
          <div className="mx-auto flex max-w-3xl flex-wrap gap-x-4 gap-y-2 px-4 text-sm text-zinc-500 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-violet-400 hover:text-violet-300">
              ← Tous les articles
            </Link>
            <Link href="/iptv-maroc" className="hover:text-white">
              IPTV Maroc
            </Link>
            <Link href={PRICING_PATH} className="hover:text-white">
              Tarifs
            </Link>
            <Link href="/guide" className="hover:text-white">
              Guide d&apos;installation
            </Link>
            <Link href={HOME_PATH} className="hover:text-white">
              Accueil IPTV
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
