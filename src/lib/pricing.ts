export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  isFeatured?: boolean;
  accent: "violet" | "cyan" | "featured";
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "essentiel",
    name: "Pack Pro",
    tagline:
      "Le pack idéal pour démarrer avec l'application PRO activée dès la souscription.",
    price: 300,
    currency: "dhs",
    period: "/ an",
    accent: "violet",
    features: [
      "+20 000 canaux mondiaux en direct",
      "+90 000 films (VOD)",
      "+50 000 séries (VOD)",
      "Serveur OTT Standard",
      "Qualité HD & FHD stable",
      "Anti-freeze intégré",
      "1 Appareil unique",
      "Activation de l'Application PRO incluse",
      "Support 24/7",
    ],
  },
  {
    id: "ultra",
    name: "Expérience Ultra",
    tagline:
      "Haute technologie et catalogue XXL. Installation sur 2 appareils, connexion non simultanée.",
    price: 450,
    currency: "dhs",
    period: "/ an",
    accent: "cyan",
    features: [
      "+29 000 chaînes internationales",
      "+129 000 contenus VOD",
      "Serveur OTT Haute Disponibilité",
      "Qualité HD, FHD & 4K",
      "Anti-freeze 2.0",
      "Multi-Appareils (Installation sur 2 écrans : Salon, Chambre)",
      "Installation sur 2 appareils (Connexion non simultanée)",
      "Activation immédiate",
      "Support client prioritaire 24/7",
    ],
  },
  {
    id: "vip",
    name: "Exclusif Suprême VIP",
    tagline:
      "L'élite du divertissement mondial. Installation sur 3 appareils, connexion non simultanée.",
    price: 600,
    currency: "dhs",
    period: "/ an",
    accent: "featured",
    isFeatured: true,
    features: [
      "Master catalogue de +45 000 flux TV Premium",
      "+180 000 films et séries (VOD)",
      "Serveur OTT VPS dédié",
      "Résolution 4K UHD authentique",
      "Anti-freeze 2.2 de pointe",
      "Multi-Appareils (Installation sur 3 écrans : Salon, Chambre, Mobile)",
      "Installation sur 3 appareils (Connexion non simultanée)",
      "Activation de l'Application PRO incluse",
      "Ligne d'assistance VIP 24/7",
    ],
  },
];

export const compareRows = [
  { label: "Chaînes Live", essentiel: "+20 000", ultra: "+29 000", vip: "+45 000" },
  { label: "Films (VOD)", essentiel: "+90 000", ultra: "+129 000", vip: "+180 000" },
  { label: "Séries (VOD)", essentiel: "+50 000", ultra: "+129 000", vip: "+180 000" },
  { label: "Qualité Max", essentiel: "HD & FHD", ultra: "HD, FHD & 4K", vip: "4K UHD" },
  { label: "Serveur", essentiel: "OTT Standard", ultra: "Haute Dispo.", vip: "VPS Dédié" },
  { label: "Anti-freeze", essentiel: "v1.0", ultra: "v2.0", vip: "v2.2" },
  {
    label: "Appareils",
    essentiel: "1 en ligne",
    ultra: "2 appareils",
    vip: "3 appareils",
  },
  { label: "Support", essentiel: "24/7", ultra: "Prioritaire", vip: "VIP Instantané" },
  {
    label: "Application PRO",
    essentiel: "Incluse",
    ultra: "—",
    vip: "Incluse",
  },
];
