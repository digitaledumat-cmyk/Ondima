import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { WHATSAPP_URL } from "@/lib/constants";
import {
  fonctionnalitesSeoIntro,
  techPillars,
} from "@/lib/fonctionnalites";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Fonctionnalités IPTV | Meilleur IPTV Maroc, Serveur Stable & 4K - Ondima",
  description:
    "Infrastructure Ondima : serveurs VPS dédiés, codec H.265 4K, Anti-freeze 2.2, EPG dynamique et routage Smart-OTT. Le Meilleur IPTV Maroc avec Serveur IPTV stable et IPTV 4K Maroc fluide.",
  path: "/fonctionnalites",
  keywords: [
    "Meilleur IPTV Maroc",
    "Serveur IPTV stable",
    "IPTV 4K Maroc",
    "Anti-freeze 2.2",
    "abonnement IPTV Maroc",
  ],
});

export default function FonctionnalitesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          label="Infrastructure technique"
          title="Fonctionnalités Ondima — Technologie IPTV Premium"
          description="Serveurs VPS dédiés, codec H.265, Anti-freeze 2.2, EPG dynamique et routage Smart-OTT : découvrez pourquoi Ondima est le Meilleur IPTV Maroc en 2026."
        />

        <SeoContentBlock
          title={fonctionnalitesSeoIntro.title}
          paragraphs={fonctionnalitesSeoIntro.paragraphs}
        />

        <section className="border-t border-white/5 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
                Stack technique
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                5 piliers pour un{" "}
                <span className="neon-text">Serveur IPTV stable</span>
              </h2>
            </div>

            <div className="space-y-8">
              {techPillars.map((pillar, i) => (
                <article
                  key={pillar.id}
                  className={`glow-border-purple glass-panel rounded-3xl p-8 sm:p-10 ${
                    i % 2 === 1 ? "lg:ml-8" : "lg:mr-8"
                  }`}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-600/10 text-2xl">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-violet-300 sm:text-base">
                        {pillar.summary}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 border-t border-white/5 pt-6">
                    {pillar.details.map((detail, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-zinc-400 sm:text-base"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-lg font-semibold text-white">
              Testez l&apos;Anti-freeze 2.2 gratuitement pendant 24h
            </p>
            <p className="mb-8 text-sm leading-relaxed text-zinc-400">
              Activez votre essai via WhatsApp et comparez la stabilité Ondima
              lors du prochain grand match en direct.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp rounded-full px-8 py-3.5 text-sm font-bold text-white"
              >
                Essai 24h gratuit
              </a>
              <Link
                href="/#tarifs"
                className="btn-orange rounded-full px-8 py-3.5 text-sm font-bold text-white"
              >
                Voir les forfaits
              </Link>
            </div>
            <p className="mt-8 text-sm text-zinc-600">
              <Link
                href="/guide"
                className="text-violet-400 hover:text-violet-300"
              >
                Guide d&apos;installation
              </Link>
              {" · "}
              <Link href="/faq" className="text-violet-400 hover:text-violet-300">
                FAQ
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
