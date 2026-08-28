import Accordion from "@/components/ui/Accordion";
import NinoPlayerQuickGuide from "@/components/NinoPlayerQuickGuide";
import RecommendedApps from "@/components/RecommendedApps";
import { installationSteps } from "@/lib/installation";

export default function InstallationGuide() {
  const items = installationSteps.map((step) => ({
    id: step.id,
    title: step.title,
    content: step.devices
      ? `${step.content} Appareils compatibles : ${step.devices.join(", ")}.`
      : step.content,
  }));

  return (
    <section id="guide" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
            Guide d&apos;installation
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Guide de Configuration : Comment installer IPTV Smarters Maroc et autres lecteurs
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">
            Nino Player recommandé — tutoriels Android (Google Play) et Firestick
            (Downloader). Suivez chaque étape pour une installation fluide.
          </p>
        </div>
        <RecommendedApps />
        <NinoPlayerQuickGuide />
        <Accordion items={items} defaultOpen="step-1" />
      </div>
    </section>
  );
}
