import type { Metadata } from "next";
import Link from "next/link";

import FAQ from "@/components/FAQ";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { createMetadata } from "@/lib/metadata";
import { faqSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "FAQ IPTV Maroc | Prix, débit, Smart TV et garantie - Ondima",
  description:
    "FAQ abonnement IPTV au Maroc : packs dès 300 dhs, chaînes selon le forfait, fibre Maroc Telecom, Orange et Inwi, installation Smart TV et garantie 45 jours.",
  path: "/faq",
  keywords: [
    "FAQ IPTV Maroc",
    "abonnement IPTV Maroc",
    "prix IPTV Maroc",
    "IPTV Smart TV Maroc",
    "IPTV fibre Maroc",
    "garantie IPTV Ondima",
  ],
});

export default function FaqPage() {
  return (
    <SiteShell>
      <main id="contenu">
        <PageHero
          label="Support"
          title="Foire aux questions"
          description="Prix en dirhams, chaînes selon le pack, débit fibre ou 4G, installation Smart TV et garantie 45 jours pour un abonnement IPTV au Maroc."
        />
        <SeoContentBlock
          title={faqSeoIntro.title}
          paragraphs={faqSeoIntro.paragraphs}
        />
        <FAQ compact />
        <div className="pb-16 text-center">
          <p className="text-sm text-zinc-500">
            Une autre question ?{" "}
            <Link href="/contact" className="text-violet-400 hover:text-violet-300">
              Contactez-nous
            </Link>
            {" · "}
            <Link href="/blog" className="text-violet-400 hover:text-violet-300">
              Lire le blog
            </Link>
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
