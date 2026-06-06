import type { Metadata } from "next";
import Link from "next/link";

import Pricing from "@/components/Pricing";
import TrustBadge from "@/components/TrustBadge";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { WHATSAPP_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import {
  abonnementPricingSeo,
  abonnementSeoIntro,
} from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title:
    "Abonnement IPTV Maroc Premium | Tarifs & Formules 2026 - Ondima",
  description:
    "Tarifs IPTV Maroc 2026 : Accès Essentiel 249 dhs, Expérience Ultra 349 dhs, VIP 449 dhs/an. Acheter IPTV Maroc avec serveurs VPS OTT, garantie 45 jours et activation WhatsApp 24/7.",
  path: "/abonnement-iptv",
  keywords: [
    "abonnement IPTV Maroc",
    "tarifs IPTV Maroc",
    "acheter IPTV Maroc",
    "prix IPTV",
    "IPTV 4K Maroc",
  ],
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function AbonnementPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-12 lg:pb-16">
          <div className="hero-grid hero-glow-left hero-glow-right absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-violet-400 uppercase">
              Nos offres · 2026
            </p>
            <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Abonnement IPTV Maroc Premium : Nos Tarifs &amp; Formules 2026
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Trois packs annuels Ondima — Accès Essentiel, Expérience Ultra et
              Exclusif Suprême VIP — avec serveurs VPS OTT, activation WhatsApp
              immédiate et garantie 45 jours satisfait ou remboursé.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <TrustBadge />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Activer mon abonnement
              </a>
            </div>
          </div>
        </section>

        <SeoContentBlock
          title={abonnementSeoIntro.title}
          paragraphs={abonnementSeoIntro.paragraphs}
          className="py-10"
        />

        <Pricing showHeader={false} showTrustBadge={false} sectionId="" />

        <SeoContentBlock
          title={abonnementPricingSeo.title}
          paragraphs={abonnementPricingSeo.paragraphs}
        />

        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="glow-border-purple rounded-3xl glass-panel p-8 sm:p-10">
              <p className="mb-2 text-xl font-bold text-white">
                Prêt à commander votre abonnement IPTV Maroc ?
              </p>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Choisissez votre pack, contactez-nous sur WhatsApp et recevez vos
                identifiants en moins de 5 minutes. Essai 24h gratuit disponible
                avant tout achat.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Commander via WhatsApp
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-emerald-500/40 hover:text-white"
                >
                  Essai 24h gratuit
                </a>
              </div>
            </div>
            <p className="mt-8 text-sm text-zinc-600">
              <Link href="/guide" className="text-violet-400 hover:text-violet-300">
                Guide d&apos;installation
              </Link>
              {" · "}
              <Link
                href="/fonctionnalites"
                className="text-violet-400 hover:text-violet-300"
              >
                Fonctionnalités techniques
              </Link>
              {" · "}
              <Link href="/" className="text-violet-400 hover:text-violet-300">
                Retour à l&apos;accueil
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
