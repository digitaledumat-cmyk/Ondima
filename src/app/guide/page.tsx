import type { Metadata } from "next";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import SeoContentBlock from "@/components/seo/SeoContentBlock";
import { WHATSAPP_URL } from "@/lib/constants";
import { installationSteps } from "@/lib/installation";
import { createMetadata } from "@/lib/metadata";
import { guideDeviceBlocks, guideSeoIntro } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title:
    "Guide IPTV Maroc | Smart TV, Android, Firestick & Smarters - Ondima",
  description:
    "Tutoriels IPTV Smart TV Maroc (NetIPTV/SetIPTV), IPTV Android Maroc, IPTV Firestick Maroc, IPTV Smarters Maroc et boîtiers MAG. Installation pas à pas avec support WhatsApp 24/7.",
  path: "/guide",
  keywords: [
    "IPTV Smart TV Maroc",
    "IPTV Android Maroc",
    "IPTV Firestick Maroc",
    "IPTV Smarters Maroc",
    "guide installation IPTV",
  ],
});

export default function GuidePage() {
  const deviceItems = guideDeviceBlocks.map((block) => ({
    id: block.id,
    title: block.title,
    content: block.content,
  }));

  const generalSteps = installationSteps.map((step) => ({
    id: step.id,
    title: step.title,
    content: step.devices
      ? `${step.content} Appareils concernés : ${step.devices.join(", ")}.`
      : step.content,
  }));

  return (
    <SiteShell>
      <main>
        <PageHero
          label="Installation"
          title="Guide d'installation IPTV — Tous appareils"
          description="Tutoriels détaillés IPTV Smart TV Maroc, IPTV Android Maroc, IPTV Firestick Maroc et IPTV Smarters Maroc. Configuration étape par étape, assistance WhatsApp incluse."
        />

        <SeoContentBlock
          title={guideSeoIntro.title}
          paragraphs={guideSeoIntro.paragraphs}
        />

        <section className="border-t border-white/5 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400 uppercase">
                Par appareil
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Choisissez votre support
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                Cliquez sur chaque appareil pour afficher le tutoriel complet.
              </p>
            </div>
            <Accordion items={deviceItems} defaultOpen="smart-tv" />
          </div>
        </section>

        <section className="border-t border-white/5 py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium tracking-widest text-violet-400 uppercase">
                Étapes universelles
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                De l&apos;activation au premier match
              </h2>
            </div>
            <Accordion items={generalSteps} defaultOpen="step-1" />
          </div>
        </section>

        <section className="border-t border-white/5 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="glow-border-purple rounded-3xl glass-panel p-8 text-center sm:p-10">
              <p className="mb-2 text-lg font-semibold text-white">
                Installation à distance par WhatsApp
              </p>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Notre équipe configure NetIPTV, SetIPTV, Smarters, Firestick ou
                MAG à distance. Réponse en moins de 15 minutes, 24h/24.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex rounded-full px-8 py-3.5 text-sm font-bold text-white"
              >
                Assistance installation
              </a>
            </div>
            <p className="mt-8 text-center text-sm text-zinc-600">
              <Link
                href="/fonctionnalites"
                className="text-violet-400 hover:text-violet-300"
              >
                Fonctionnalités techniques
              </Link>
              {" · "}
              <Link href="/faq" className="text-violet-400 hover:text-violet-300">
                FAQ
              </Link>
              {" · "}
              <Link
                href="/abonnement-iptv"
                className="text-violet-400 hover:text-violet-300"
              >
                Voir les forfaits
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
