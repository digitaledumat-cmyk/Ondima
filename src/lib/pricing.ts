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
    name: "Accès Essentiel",
    tagline:
      "L'essentiel de la TV numérique au meilleur prix du marché.",
    price: 249,
    currency: "dhs",
    period: "/ an",
    accent: "violet",
    features: [
      "+20 000 canaux mondiaux en direct",
      "+25 000 blockbusters & séries (VOD)",
      "Serveur OTT Standard",
      "Qualité HD stable",
      "Anti-freeze intégré",
      "1 Appareil unique",
      "Support 24/7",
    ],
  },
  {
    id: "ultra",
    name: "Expérience Ultra",
    tagline:
      "Le compromis parfait entre haute technologie et catalogue XXL pour toute la famille.",
    price: 349,
    currency: "dhs",
    period: "/ an",
    accent: "cyan",
    features: [
      "+29 000 chaînes internationales",
      "+129 000 contenus VOD",
      "Serveur OTT Haute Disponibilité",
      "Résolution FHD (Full HD) cristalline",
      "Anti-freeze 2.0",
      "2 Appareils simultanés",
      "Activation immédiate",
      "Support client prioritaire 24/7",
    ],
  },
  {
    id: "vip",
    name: "Exclusif Suprême VIP",
    tagline:
      "L'élite du divertissement mondial sans aucune restriction. Le fleuron technique d'Ondima.",
    price: 449,
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
      "Multi-écrans 3 Appareils",
      "Activation de l'Application PRO incluse",
      "Ligne d'assistance VIP 24/7",
    ],
  },
];

export const compareRows = [
  { label: "Chaînes Live", essentiel: "+20 000", ultra: "+29 000", vip: "+45 000" },
  { label: "Bibliothèque VOD", essentiel: "+25 000", ultra: "+129 000", vip: "+180 000" },
  { label: "Qualité Max", essentiel: "HD", ultra: "Full HD", vip: "4K UHD" },
  { label: "Serveur", essentiel: "OTT Standard", ultra: "Haute Dispo.", vip: "VPS Dédié" },
  { label: "Anti-freeze", essentiel: "v1.0", ultra: "v2.0", vip: "v2.2" },
  { label: "Appareils", essentiel: "1", ultra: "2", vip: "3" },
  { label: "Support", essentiel: "24/7", ultra: "Prioritaire", vip: "VIP Instantané" },
];
