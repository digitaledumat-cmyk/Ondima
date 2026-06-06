import type { Metadata } from "next";
import Link from "next/link";

import FAQ from "@/components/FAQ";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { createMetadata } from "@/lib/metadata";
import { faqSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "FAQ Best IPTV | IPTV Subscription UK & Service Providers - Ondima",
  description:
    "FAQ IPTV : best IPTV services, IPTV subscription UK, IPTV service providers et routage streaming. Réponses techniques sur essai 24h, débit 4K et multi-écrans.",
  path: "/faq",
  keywords: ["IPTV subscription UK", "best IPTV services", "IPTV service providers", "best IPTV"],
});

export default function FaqPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          label="Support"
          title="Foire aux questions"
          description="Réponses sur le best IPTV, l'IPTV subscription UK, les IPTV service providers et nos protocoles de streaming haute performance."
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
