import type { Metadata } from "next";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import { installationSteps } from "@/lib/installation";
import { createMetadata } from "@/lib/metadata";
import { guideDeviceBlocks } from "@/lib/seo-content";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "IPTV Smart TV Maroc | Android, Firestick & Smarters - Ondima",
  description:
    "Guide IPTV Smart TV Maroc, IPTV Android Maroc, IPTV Firestick Maroc et IPTV Smarters Maroc. Installation pas à pas sur tous vos appareils avec support WhatsApp 24/7.",
  path: "/guide-installation",
  keywords: ["IPTV Smart TV Maroc", "IPTV Android Maroc", "IPTV Firestick Maroc", "IPTV Smarters Maroc"],
});

export default function GuideInstallationPage() {
  const generalSteps = installationSteps.map((step) => ({
    id: step.id,
    title: step.title,
    content: step.devices
      ? `${step.content} Appareils : ${step.devices.join(", ")}.`
      : step.content,
  }));

  const deviceItems = guideDeviceBlocks.map((block) => ({
    id: block.id,
    title: block.title,
    content: block.content,
  }));

  return (
    <SiteShell>
      <main>
        <PageHero
          label="Installation"
          title="Guide d'installation Ondima"
          description="Tutoriels IPTV Smart TV Maroc, IPTV Android Maroc, IPTV Firestick Maroc et IPTV Smarters Maroc — configuration étape par étape sur chaque appareil."
        />
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-center text-sm font-medium tracking-widest text-cyan-400 uppercase">
              Par appareil
            </p>
            <Accordion items={deviceItems} defaultOpen="smart-tv" />
          </div>
        </section>
        <section className="border-t border-white/5 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-center text-sm font-medium tracking-widest text-violet-400 uppercase">
              Étapes générales
            </p>
            <Accordion items={generalSteps} defaultOpen="step-1" />
            <div className="mt-10 rounded-2xl glass-panel p-6 text-center">
              <p className="mb-4 text-sm text-zinc-400">
                Besoin d&apos;aide ? Notre équipe configure votre appareil à distance via WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-cta inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Assistance installation
              </a>
            </div>
            <p className="mt-6 text-center text-sm text-zinc-600">
              <Link href="/faq" className="text-violet-400 hover:text-violet-300">FAQ</Link>
              {" · "}
              <Link href="/abonnement-iptv" className="text-violet-400 hover:text-violet-300">Voir les forfaits</Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
