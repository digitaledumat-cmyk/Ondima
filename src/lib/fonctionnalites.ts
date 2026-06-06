export interface TechPillar {
  id: string;
  icon: string;
  title: string;
  summary: string;
  details: string[];
}

export const techPillars: TechPillar[] = [
  {
    id: "vps",
    icon: "🖥️",
    title: "Serveurs VPS dédiés haute disponibilité",
    summary:
      "Infrastructure OTT distribuée sur des nœuds VPS premium pour un Serveur IPTV stable à 99,9 % de disponibilité.",
    details: [
      "Chaque flux Ondima transite par des serveurs VPS dédiés, isolés des pics de charge publics. Cette architecture garantit un routage direct vers les bouquets sport, cinéma et information sans saturation.",
      "Les nœuds sont répartis entre l'Europe et le Maghreb pour offrir le Meilleur IPTV Maroc avec une latence inférieure à 40 ms sur les connexions fibre marocaines.",
      "Bascule automatique entre serveurs miroirs en cas de maintenance planifiée — votre session reste active, sans coupure visible.",
    ],
  },
  {
    id: "h265",
    icon: "✨",
    title: "Codec H.265 (HEVC) — IPTV 4K Maroc fluide",
    summary:
      "Compression intelligente H.265 pour diffuser la 4K UHD avec 40 % de bande passante en moins qu'en H.264.",
    details: [
      "Le codec H.265 (HEVC) réduit la charge réseau tout en préservant la netteté des matchs en direct et des blockbusters VOD. Idéal pour l'IPTV 4K Maroc sur fibre 25 Mbps+.",
      "Fallback automatique vers H.264 sur les appareils plus anciens ou les débits limités, sans intervention manuelle.",
      "Synchronisation audio-vidéo optimisée pour éliminer les décalages sur Smart TV et Firestick.",
    ],
  },
  {
    id: "antifreeze",
    icon: "⚡",
    title: "Anti-freeze 2.2 — zéro coupure en direct",
    summary:
      "Notre système Anti-freeze 2.2 de pointe prédit et corrige les micro-coupures avant qu'elles n'impactent votre écran.",
    details: [
      "L'Anti-freeze 2.2 analyse en temps réel la qualité du flux, pré-charge les segments critiques et réalloue dynamiquement le buffer selon votre débit.",
      "Technologie éprouvée lors des grands événements sportifs : Ligue des Champions, Botola Pro, CAN et compétitions internationales.",
      "Ajustement serveur à distance par notre support WhatsApp 24/7 si votre FAI applique une limitation de débit.",
    ],
  },
  {
    id: "epg",
    icon: "📋",
    title: "EPG dynamique — Guide des programmes intelligent",
    summary:
      "Un EPG (Electronic Program Guide) complet, mis à jour quotidiennement sur +45 000 chaînes.",
    details: [
      "Naviguez par date, heure et catégorie : sport, info, jeunesse, cinéma, chaînes arabes et bouquets européens.",
      "Rappels de programmes et accès direct au Replay sur les chaînes compatibles.",
      "Interface EPG optimisée pour télécommande Smart TV, mobile et box Android.",
    ],
  },
  {
    id: "smart-ott",
    icon: "🌐",
    title: "Routage Smart-OTT adaptatif",
    summary:
      "La technologie Smart-OTT sélectionne automatiquement le meilleur chemin réseau selon votre appareil et votre localisation.",
    details: [
      "Algorithme de routage multi-CDN : le flux emprunte le chemin le plus rapide entre votre box internet et nos serveurs VPS.",
      "Compatible IPTV France, IPTV UK et bouquets maghrébins avec un seul abonnement Ondima.",
      "Détection automatique du type d'appareil (TV, mobile, MAG, Firestick) pour calibrer la résolution et le débit optimal.",
    ],
  },
];

export const fonctionnalitesSeoIntro = {
  title: "Pourquoi Ondima est le Meilleur IPTV Maroc en 2026",
  paragraphs: [
    "Ondima.ma ne se contente pas de proposer un catalogue XXL : nous avons conçu une stack technique de niveau broadcast pour délivrer un Serveur IPTV stable, une IPTV 4K Maroc fluide et une expérience utilisateur sans compromis sur tous vos écrans.",
    "Notre infrastructure repose sur des serveurs VPS dédiés, le codec H.265 pour la compression 4K, le système Anti-freeze 2.2 de pointe, un EPG dynamique mis à jour en continu et un routage Smart-OTT qui adapte chaque flux à votre connexion et à votre appareil.",
    "Que vous regardiez un derby de la Botola, un film en 4K UHD ou un journal en direct depuis Paris, Londres ou Casablanca, Ondima garantit une qualité d'image constante, un zéro buffering sur les événements live et un support WhatsApp disponible 24h/24 pour ajuster vos paramètres à distance.",
  ],
};
