import type { Metadata } from "next";

import SiteShell from "@/components/layout/SiteShell";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InstallationGuide from "@/components/InstallationGuide";
import LocalSeo from "@/components/LocalSeo";
import Pricing from "@/components/Pricing";
import WhyChooseIptv from "@/components/WhyChooseIptv";
import Reviews from "@/components/Reviews";
import Support from "@/components/Support";
import TrialForm from "@/components/TrialForm";
import { createMetadata, HOME_KEYWORDS } from "@/lib/metadata";

const HOME_TITLE = "Abonnement IPTV Maroc 4K Stable & Sans Coupure | Ondima";
const HOME_DESCRIPTION =
  "Abonnement IPTV Maroc Premium. Chaînes live, sport, VOD 4K ultra-stable, anti-freeze et support WhatsApp 24/7. Packs dès 300 DH/an, garantie 45 jours.";
const HOME_CANONICAL = "https://ondima.ma/pro";

export const metadata: Metadata = {
  ...createMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/pro",
    keywords: HOME_KEYWORDS,
  }),
  alternates: { canonical: HOME_CANONICAL },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOME_CANONICAL,
  },
  twitter: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <SiteShell>
      <main id="contenu">
        <Hero />
        <Benefits />
        <Features />
        <Pricing />
        <WhyChooseIptv />
        <TrialForm />
        <Reviews />
        <InstallationGuide />
        <Support />
        <FAQ />
        <LocalSeo />
      </main>
    </SiteShell>
  );
}
