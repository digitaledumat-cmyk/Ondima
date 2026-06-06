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
    `Meilleur IPTV à ${city} : Ondima propose un accès premium stable avec +45 000 chaînes, VOD 4K et support WhatsApp 24/7 pour les foyers de ${city}.`,
    `Connexion stable à ${city} (${country}) grâce à nos serveurs OTT haute disponibilité — idéal pour le sport en direct et le streaming sans buffering.`,
    `Abonnement IPTV ${city} 2026 : forfaits annuels dès 249 dhs, essai 24h gratuit et garantie satisfait 45 jours via Ondima.ma.`,
  ];
  const idx = city.length % templates.length;
  return templates[idx];
}
