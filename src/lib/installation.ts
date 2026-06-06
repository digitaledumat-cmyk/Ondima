export interface InstallStep {
  id: string;
  title: string;
  content: string;
  devices?: string[];
}

export const installationSteps: InstallStep[] = [
  {
    id: "step-1",
    title: "Étape 1 — Recevez vos identifiants Ondima",
    content:
      "Après validation de votre essai ou abonnement via WhatsApp, notre équipe vous envoie vos identifiants (URL serveur, login et mot de passe) ainsi que le lien de téléchargement de l'application recommandée pour votre appareil.",
    devices: ["Smart TV", "Firestick", "Android Box", "Smartphone"],
  },
  {
    id: "step-2",
    title: "Étape 2 — Installez l'application IPTV",
    content:
      "Sur Firestick ou Android Box : téléchargez l'application Ondima PRO depuis le lien fourni ou via le store alternatif indiqué par le support. Sur Smart TV Samsung/LG : utilisez l'application compatible IPTV Smarters ou l'app dédiée selon votre modèle.",
    devices: ["Firestick", "Android", "Smart TV"],
  },
  {
    id: "step-3",
    title: "Étape 3 — Configurez votre playlist",
    content:
      "Ouvrez l'application, sélectionnez « Connexion Xtream Codes » ou « Login M3U » selon le mode fourni. Entrez l'URL du serveur, votre nom d'utilisateur et mot de passe. Sauvegardez et attendez le chargement du catalogue (30 à 90 secondes).",
  },
  {
    id: "step-4",
    title: "Étape 4 — Optimisez la qualité d'image",
    content:
      "Dans les paramètres de l'app, activez le lecteur externo recommandé (ExoPlayer/VLC) pour une meilleure fluidité. Sélectionnez la qualité HD ou 4K selon votre forfait et votre débit internet (10 Mbps HD, 25 Mbps+ pour 4K).",
  },
  {
    id: "step-5",
    title: "Étape 5 — Profitez de votre contenu",
    content:
      "Naviguez entre Live TV, VOD, Replay et favoris. Ajoutez vos chaînes préférées en favoris pour un accès rapide. En cas de freeze, contactez le support WhatsApp — nous ajustons le serveur en temps réel.",
  },
  {
    id: "step-6",
    title: "Dépannage rapide",
    content:
      "Buffering ? Redémarrez votre box/routeur et l'application. Vérifiez que vous n'avez pas dépassé le nombre d'appareils autorisés. Mettez à jour l'application. Si le problème persiste, notre support 24/7 résout 95 % des cas en moins de 15 minutes.",
  },
];
