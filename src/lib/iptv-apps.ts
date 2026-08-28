export interface IptvApp {
  id: string;
  name: string;
  logo: string;
  googlePlayUrl?: string;
  androidDownloaderCode?: string;
  fireTvDownloaderCode?: string;
  tagline?: string;
}

export const ninoPlayer: IptvApp = {
  id: "nino-player",
  name: "Nino Player",
  logo: "https://ninoplayer.com/apple-touch-icon.png",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.nino.player",
  androidDownloaderCode: "2929561",
  fireTvDownloaderCode: "1029712",
  tagline: "Lecteur IPTV recommandé par Ondima — interface fluide, Xtream Codes et 4K.",
};

export const otherRecommendedApps = [
  "IPTV Smarters Pro",
  "NetIPTV",
  "SetIPTV",
  "Ondima PRO",
];

export const ninoPlayerAndroidSteps = [
  "Ouvrez Google Play Store sur votre smartphone, tablette ou box Android.",
  "Recherchez « Nino Player » ou accédez directement à la fiche officielle sur le Play Store.",
  "Installez l'application, puis ouvrez Nino Player.",
  "Appuyez sur « Ajouter un abonnement » et choisissez « Xtream Codes API ».",
  "Saisissez l'URL serveur, l'identifiant et le mot de passe fournis par Ondima via WhatsApp.",
  "Enregistrez et patientez 30 à 60 secondes — votre catalogue Live TV et VOD se charge automatiquement.",
];

export const ninoPlayerAndroidApkSteps = [
  "Installez l'application Downloader sur votre appareil Android.",
  "Ouvrez Downloader et entrez le code 2929561 pour télécharger l'APK Nino Player.",
  "Autorisez l'installation depuis des sources inconnues si demandé, puis installez l'application.",
  "Lancez Nino Player et configurez vos identifiants Xtream Codes Ondima.",
];

export const ninoPlayerFirestickSteps = [
  "Sur Fire TV : Paramètres → Ma Fire TV → Options pour les développeurs → activez « Applications de sources inconnues ».",
  "Installez l'application Downloader depuis l'Amazon Appstore.",
  "Ouvrez Downloader, sélectionnez « Browser » ou « Home », puis entrez le code Downloader 1029712.",
  "Téléchargez et installez Nino Player lorsque le téléchargement est terminé.",
  "Ouvrez Nino Player → « Ajouter un abonnement » → « Xtream Codes API ».",
  "Entrez vos identifiants Ondima (URL, login, mot de passe) et profitez du streaming en HD/4K.",
];

export function formatStepsList(steps: string[]): string {
  return steps.map((step, index) => `${index + 1}. ${step}`).join(" ");
}
