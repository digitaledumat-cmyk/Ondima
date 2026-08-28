import Accordion from "@/components/ui/Accordion";
import {
  formatStepsList,
  ninoPlayerAndroidApkSteps,
  ninoPlayerAndroidSteps,
  ninoPlayerFirestickSteps,
} from "@/lib/iptv-apps";

const quickGuideItems = [
  {
    id: "nino-android-play",
    title: "Nino Player sur Android — via Google Play",
    content: formatStepsList(ninoPlayerAndroidSteps),
  },
  {
    id: "nino-android-apk",
    title: "Nino Player sur Android — via Downloader (APK)",
    content: formatStepsList(ninoPlayerAndroidApkSteps),
  },
  {
    id: "nino-firestick",
    title: "Nino Player sur Firestick / Fire TV — via Downloader",
    content: formatStepsList(ninoPlayerFirestickSteps),
  },
];

export default function NinoPlayerQuickGuide() {
  return (
    <section className="mb-10">
      <div className="mb-6 text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-violet-400 uppercase">
          Nino Player
        </p>
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Installation rapide — Android &amp; Firestick
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-500">
          Tutoriels pas à pas pour installer Nino Player et connecter votre
          abonnement Ondima en quelques minutes.
        </p>
      </div>
      <Accordion items={quickGuideItems} defaultOpen="nino-android-play" />
    </section>
  );
}
