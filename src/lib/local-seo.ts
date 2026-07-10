export const localRegions = [
  {
    country: "Maroc",
    flag: "🇲🇦",
    cities: ["Casablanca", "Marrakech", "Tanger", "Agadir", "Rabat", "Fès"],
    intro:
      "Ondima déploie des serveurs OTT optimisés pour le Maroc, garantissant une latence minimale et une qualité HD/4K stable dans toutes les grandes métropoles.",
  },
  {
    country: "France",
    flag: "🇫🇷",
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes"],
    intro:
      "Notre infrastructure VPS européenne assure une connexion stable à Paris, Marseille et dans toute la France hexagonale, idéale pour la diaspora marocaine.",
  },
  {
    country: "Espagne",
    flag: "🇪🇸",
    cities: ["Madrid", "Barcelone", "Valence", "Séville", "Malaga"],
    intro:
      "Les utilisateurs en Espagne bénéficient d'un routage CDN premium pour le sport, le cinéma et les chaînes internationales en direct.",
  },
];

export function buildLocalSeoParagraph(city: string, country: string): string {
  const templates = [
    `À ${city}, Ondima assure une connexion OTT stable pour le sport live, la VOD 4K et un support WhatsApp disponible 24/7.`,
    `Les foyers de ${city} (${country}) profitent de serveurs haute disponibilité, d'une faible latence et d'un streaming sans buffering.`,
    `Couverture Ondima à ${city} : forfaits annuels dès 249 dhs, essai 24h gratuit et garantie 45 jours satisfait ou remboursé.`,
  ];
  const idx = city.length % templates.length;
  return templates[idx];
}
