import type { Metadata } from "next";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import Pricing from "@/components/Pricing";
import TrustBadge from "@/components/TrustBadge";
import WhatsAppReviews from "@/components/WhatsAppReviews";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { GUARANTEE_TAGLINE, WHATSAPP_URL } from "@/lib/constants";
import {
  iptvMarocCities,
  iptvMarocDevices,
  iptvMarocFaq,
  iptvMarocLongSeo,
  iptvMarocSeoIntro,
  iptvMarocStrengths,
} from "@/lib/iptv-maroc";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "IPTV Maroc | Meilleur Abonnement Stable & Sans Coupure – Ondima",
  description:
    "IPTV Maroc premium Ondima : abonnement stable, HD/FHD/4K, Anti-freeze, support WhatsApp rapide. Pack Pro 300 dhs, Ultra 450 dhs, VIP 600 dhs. Garantie 45 jours.",
  path: "/iptv-maroc",
  keywords: [
    "IPTV Maroc",
    "meilleur IPTV Maroc",
    "abonnement IPTV Maroc",
    "abonnement IPTV stable",
    "IPTV sans coupure",
    "support IPTV WhatsApp",
    "IPTV 4K Maroc",
  ],
});

export default function IptvMarocPage() {
  const faqItems = iptvMarocFaq.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <SiteShell>
      <main>
        <PageHero
          label="IPTV Maroc · 2026"
          title="IPTV Maroc : le meilleur abonnement stable & sans coupure"
          description="Découvrez Ondima — abonnement IPTV Maroc premium, image HD/FHD/4K, Anti-freeze, activation WhatsApp et support rapide. Formules dès 300 dhs/an."
        />

        <section className="border-b border-white/5 py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
            <TrustBadge />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white"
            >
              Commander via WhatsApp
            </a>
            <Link
              href="/abonnement-iptv"
              className="btn-orange inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white"
            >
              Voir les tarifs détaillés
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-2xl px-4 text-center text-xs text-zinc-600">
            {GUARANTEE_TAGLINE}
          </p>
        </section>

        <SeoContentBlock
          title={iptvMarocSeoIntro.title}
          paragraphs={iptvMarocSeoIntro.paragraphs}
        />

        <section className="border-t border-white/5 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
                Points forts
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Stabilité, qualité et support : les piliers d&apos;un{" "}
                <span className="neon-text">IPTV Maroc</span> premium
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-500">
                Un abonnement IPTV stable, une image nette et un SAV réactif —
                ce que recherchent les utilisateurs du meilleur IPTV Maroc.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {iptvMarocStrengths.map((item) => (
                <article
                  key={item.id}
                  className="glow-border-purple glass-panel rounded-3xl p-6 sm:p-8"
                >
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-violet-300">
                    {item.summary}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.details}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                Compatibilité
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Appareils compatibles avec votre IPTV Maroc
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500">
                Smart TV, Android, Firestick et multi-écrans — installation
                guidée par WhatsApp.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {iptvMarocDevices.map((device) => (
                <article
                  key={device.title}
                  className="glass-panel rounded-2xl p-5 transition-colors hover:bg-white/[0.04]"
                >
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {device.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {device.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-zinc-600">
              Tutoriels complets :{" "}
              <Link
                href="/guide"
                className="text-violet-400 hover:text-violet-300"
              >
                Guide d&apos;installation
              </Link>
              {" · "}
              <Link
                href="/fonctionnalites"
                className="text-violet-400 hover:text-violet-300"
              >
                Fonctionnalités techniques
              </Link>
            </p>
          </div>
        </section>

        <section className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
            <div className="mb-4 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
                Formules
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Nos formules d&apos;abonnement IPTV Maroc
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500">
                Pack Pro, Ultra et VIP — prix annuels fixes, activation WhatsApp,
                garantie 45 jours.
              </p>
            </div>
          </div>
          <Pricing showHeader={false} showTrustBadge sectionId="formules" />
          <div className="pb-8 text-center">
            <Link
              href="/abonnement-iptv"
              className="text-sm text-violet-400 hover:text-violet-300"
            >
              Page produit complète — détails &amp; comparatif →
            </Link>
          </div>
        </section>

        <WhatsAppReviews />

        <section className="border-t border-white/5 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                FAQ IPTV Maroc
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Questions fréquentes sur l&apos;abonnement Ondima
              </h2>
            </div>
            <Accordion items={faqItems} defaultOpen="meilleur" />
          </div>
        </section>

        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="glow-border-purple rounded-3xl glass-panel p-8 sm:p-10">
              <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Prêt pour un IPTV Maroc stable et sans coupure ?
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Activez votre abonnement Ondima via WhatsApp. Support rapide,
                installation guidée et {GUARANTEE_TAGLINE.toLowerCase()}.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex rounded-full px-8 py-3.5 text-sm font-bold text-white"
                >
                  Commander via WhatsApp
                </a>
                <Link
                  href="/abonnement-iptv"
                  className="btn-orange inline-flex rounded-full px-8 py-3.5 text-sm font-bold text-white"
                >
                  Comparer les packs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="guide-iptv-maroc"
          className="border-t border-white/5 py-16 lg:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
                {iptvMarocLongSeo.label}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {iptvMarocLongSeo.title}
              </h2>
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {iptvMarocCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-violet-500/25 bg-violet-600/10 px-3.5 py-1.5 text-xs font-medium text-violet-200"
                >
                  IPTV {city}
                </span>
              ))}
            </div>

            <div className="space-y-10 rounded-3xl glass-panel p-6 sm:p-10">
              {iptvMarocLongSeo.sections.map((block) => (
                <article key={block.heading}>
                  <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                    {block.heading}
                  </h3>
                  <div className="space-y-4">
                    {block.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-sm leading-[1.85] text-zinc-400 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-zinc-600">
              <Link
                href="/abonnement-iptv"
                className="text-violet-400 hover:text-violet-300"
              >
                Voir les tarifs IPTV Maroc
              </Link>
              {" · "}
              <Link href="/guide" className="text-violet-400 hover:text-violet-300">
                Guide d&apos;installation
              </Link>
              {" · "}
              <Link
                href="/fonctionnalites"
                className="text-violet-400 hover:text-violet-300"
              >
                Fonctionnalités
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
