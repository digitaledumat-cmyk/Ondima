export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "garantie-remboursement",
    question: "Proposez-vous une garantie satisfait ou remboursé ?",
    answer:
      "Oui. Tous nos forfaits annuels incluent une garantie satisfait ou remboursé de 45 jours à compter de l'activation. Si le service ne vous convient pas, vous pouvez demander un remboursement intégral via WhatsApp ou contact@ondima.ma dans ce délai, conformément à notre politique de remboursement.",
  },
  {
    id: "garantie-service",
    question: "Le service est-il garanti pendant toute la période d'abonnement ?",
    answer:
      "Oui. Ondima garantit la continuité du service sur toute la durée de votre abonnement. Nos serveurs VPS sont monitorés 24h/24. En cas de panne ou d'indisponibilité, nous basculons automatiquement votre accès vers un serveur de secours pour maintenir votre streaming sans interruption prolongée.",
  },
  {
    id: "internet",
    question: "Quelle connexion Internet est recommandée pour Ondima ?",
    answer:
      "Pour une expérience fluide, nous recommandons 10 Mbps minimum en HD et 25 Mbps ou plus pour profiter du 4K UHD sans interruption. Une connexion fibre ou 4G/5G stable est idéale pour les grands matchs en direct.",
  },
  {
    id: "appareils",
    question: "Puis-je utiliser mon abonnement sur plusieurs appareils ?",
    answer:
      "Oui, selon votre pack : 1 appareil pour l'Accès Essentiel. L'Expérience Ultra : installation sur 2 appareils (connexion non simultanée). L'Exclusif Suprême VIP : installation sur 3 appareils (connexion non simultanée). Smart TV, Firestick, Android Box et smartphones sont compatibles.",
  },
  {
    id: "nino-player",
    question: "Quelle application IPTV recommandez-vous pour Ondima ?",
    answer:
      "Nino Player est notre lecteur recommandé pour Android et Fire TV. Sur Android, installez-le via Google Play (com.nino.player) ou via Downloader avec le code 2929561. Sur Firestick, utilisez Downloader avec le code 1029712. Ouvrez Nino Player, choisissez Xtream Codes API et entrez vos identifiants Ondima. IPTV Smarters Pro, NetIPTV et SetIPTV restent également compatibles.",
  },
  {
    id: "activation",
    question: "Comment se déroule l'activation de mon forfait ?",
    answer:
      "Après votre commande via WhatsApp, notre équipe vous envoie vos identifiants et vous guide pas à pas pour l'installation. L'activation est immédiate sur les packs Ultra et VIP, avec configuration de l'application PRO incluse sur le pack VIP.",
  },
  {
    id: "garantie",
    question: "Existe-t-il une garantie satisfait ou remboursé ?",
    answer:
      "Ondima propose une garantie satisfait ou remboursé de 45 jours sur tous les forfaits annuels. Vous pouvez demander un remboursement intégral dans les 45 premiers jours si le service ne répond pas à vos attentes. Par ailleurs, la continuité du service est garantie sur toute la période d'abonnement grâce à nos serveurs de secours.",
  },
  {
    id: "contenu",
    question: "Quels types de contenus sont inclus dans l'abonnement ?",
    answer:
      "Chaque forfait donne accès à des chaînes live internationales, du sport en direct, des films, séries et documentaires en VOD. Le catalogue est mis à jour quotidiennement, avec une couverture premium maximale sur le pack VIP.",
  },
  {
    id: "uk",
    question: "Ondima est-il compatible avec une IPTV subscription UK ?",
    answer:
      "Oui. Ondima figure parmi les best IPTV services accessibles depuis le Royaume-Uni grâce à un routage CDN européen optimisé. Les bouquets anglophones, sport premium et VOD internationale sont disponibles avec une latence minimale depuis Londres, Manchester ou Birmingham.",
  },
  {
    id: "providers",
    question: "Pourquoi Ondima se distingue-t-il des autres IPTV service providers ?",
    answer:
      "Contrairement à de nombreux IPTV service providers, Ondima combine serveurs VPS dédiés, technologie Anti-freeze 2.2, uptime proche de 99.9 % et un support WhatsApp humain 24/7. Notre positionnement best IPTV repose sur la transparence des forfaits et une garantie satisfait 45 jours.",
  },
  {
    id: "routage",
    question: "Comment fonctionne le routage réseau pour le streaming international ?",
    answer:
      "Nos nœuds OTT sont répartis entre l'Afrique du Nord et l'Europe pour minimiser la latence. Le trafic IPTV subscription UK et IPTV France est acheminé via des chemins BGP optimisés, garantissant une lecture fluide même aux heures de pointe des grands événements sportifs.",
  },
];
