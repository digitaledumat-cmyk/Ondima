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
import { HOME_PATH } from "@/lib/constants";
import {
  createMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  HOME_KEYWORDS,
} from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: HOME_PATH,
  keywords: HOME_KEYWORDS,
});

export default function Home() {
  return (
    <SiteShell>
      <main>
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
