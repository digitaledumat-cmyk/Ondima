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
