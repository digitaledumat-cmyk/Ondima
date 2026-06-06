import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";
import SiteShell from "@/components/layout/SiteShell";
import TrialForm from "@/components/TrialForm";
import TrustBadge from "@/components/TrustBadge";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Ondima | Support WhatsApp 24/7 & Essai Gratuit",
  description:
    "Contactez l'équipe Ondima via WhatsApp ou e-mail. Support technique 24/7, essai 24h gratuit et activation guidée de votre abonnement IPTV.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          label="Contact"
          title="Support & contact Ondima"
          description="Notre équipe est disponible 24h/24 sur WhatsApp pour l'essai gratuit, l'activation et le support technique en français."
        />
        <section className="border-b border-white/5 py-12">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-4 sm:px-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border glass-panel rounded-2xl p-6 text-center transition-transform hover:scale-[1.02]"
            >
              <p className="mb-1 text-sm text-zinc-500">WhatsApp</p>
              <p className="text-xl font-bold text-whatsapp">{WHATSAPP_DISPLAY}</p>
              <p className="mt-2 text-xs text-zinc-600">Réponse en moins de 15 min</p>
            </a>
            <div className="glow-border glass-panel rounded-2xl p-6 text-center">
              <p className="mb-1 text-sm text-zinc-500">E-mail</p>
              <p className="text-xl font-bold text-white">contact@ondima.ma</p>
              <p className="mt-2 text-xs text-zinc-600">Support & facturation</p>
            </div>
            <TrustBadge />
          </div>
        </section>
        <TrialForm />
      </main>
    </SiteShell>
  );
}
