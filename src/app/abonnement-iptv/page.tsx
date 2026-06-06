import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import Pricing from "@/components/Pricing";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import TrialForm from "@/components/TrialForm";
import { createMetadata } from "@/lib/metadata";
import { abonnementSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "IPTV 4K Maroc & IPTV HD Maroc | Abonnement IPTV France - Ondima",
  description:
    "Forfaits IPTV 4K Maroc et IPTV HD Maroc : Essentiel, Ultra et VIP. IPTV France abonnement avec routage européen, serveurs VPS OTT et activation WhatsApp 24/7.",
  path: "/abonnement-iptv",
  keywords: ["IPTV 4K Maroc", "IPTV HD Maroc", "IPTV France abonnement", "IPTV France", "abonnement IPTV Maroc"],
});

export default function AbonnementPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          label="Nos offres"
          title="Abonnement IPTV Maroc — 3 formules premium"
          description="IPTV 4K Maroc, IPTV HD Maroc et IPTV France abonnement : comparez nos packs Essentiel, Ultra et Suprême VIP. Serveurs VPS OTT, activation WhatsApp et garantie 45 jours."
        />
        <SeoContentBlock
          title={abonnementSeoIntro.title}
          paragraphs={abonnementSeoIntro.paragraphs}
        />
        <Pricing />
        <TrialForm />
        <div className="pb-12 text-center">
          <p className="text-sm text-zinc-600">
            <Link href="/guide-installation" className="text-violet-400 hover:text-violet-300">
              Guide d&apos;installation
            </Link>
            {" · "}
            <Link href="/" className="text-violet-400 hover:text-violet-300">
              Retour à l&apos;accueil
            </Link>
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
