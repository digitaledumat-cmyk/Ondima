export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "prix-maroc",
    question: "Combien coûte un abonnement IPTV Ondima au Maroc ?",
    answer:
      "Les tarifs sont annuels et affichés en dirhams. Le Pack Pro est à 300 dhs (HD et FHD, 1 appareil). L'Expérience Ultra est à 450 dhs (HD, FHD et 4K, 2 appareils, connexion non simultanée). L'Exclusif Suprême VIP est à 600 dhs (4K UHD, 3 appareils, connexion non simultanée). Hors Maroc, les mêmes packs sont indiqués à 35 €, 45 € et 60 €. Il n'y a pas de paiement caché sur le site : la commande se confirme sur WhatsApp.",
  },
  {
    id: "chaines",
    question: "Combien de chaînes sont incluses selon le pack ?",
    answer:
      "Le catalogue dépend du forfait. Le Pack Pro comprend plus de 20 000 canaux en direct, plus de 90 000 films et plus de 50 000 séries. L'Ultra monte à plus de 29 000 chaînes et plus de 129 000 contenus VOD. Le VIP ouvre le catalogue premium : plus de 45 000 flux TV et plus de 180 000 films et séries. Les bouquets couvrent le Maroc, le Maghreb, le sport et les chaînes internationales.",
  },
  {
    id: "villes",
    question: "Ondima fonctionne-t-il dans toutes les villes du Maroc ?",
    answer:
      "Oui. Le service passe par votre connexion internet, pas par une antenne locale. Il est utilisé à Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, Meknès, Oujda, Kénitra, Tétouan, Safi, El Jadida, Nador et Mohammedia, ainsi que dans les autres villes dès que la ligne est stable. La qualité dépend du débit chez vous, que vous soyez en fibre ou en 4G.",
  },
  {
    id: "operateurs",
    question: "Quelle connexion faut-il avec Maroc Telecom, Orange ou Inwi ?",
    answer:
      "Comptez au moins 10 Mbps pour la HD et 25 Mbps ou plus pour la 4K. La fibre Maroc Telecom, Orange ou Inwi convient très bien. Une 4G ou 5G stable suffit aussi pour un match, à condition que le signal ne tombe pas. Évitez le Wi-Fi saturé : branchez la box ou le téléviseur en câble quand c'est possible, surtout le soir.",
  },
  {
    id: "matchs",
    question: "Les matchs coupent-ils au Maroc aux heures de pointe ?",
    answer:
      "Les serveurs sont surveillés 24h/24, avec Anti-freeze selon le pack (intégré sur le Pro, 2.0 sur l'Ultra, 2.2 sur le VIP) et une bascule vers un serveur de secours en cas de panne. Une coupure vient souvent du débit local, pas du forfait. Pour un grand match, fermez les autres téléchargements et gardez 25 Mbps libres si vous regardez en 4K.",
  },
  {
    id: "smart-tv",
    question: "Comment installer Ondima sur une Smart TV au Maroc ?",
    answer:
      "Sur Samsung, LG ou Android TV, le lecteur recommandé est Nino Player. Sur Android, installez-le depuis Google Play (com.nino.player) ou avec Downloader et le code 2929561. Sur Firestick, le code Downloader est 1029712. Ouvrez Nino Player, choisissez Xtream Codes API, puis entrez l'adresse serveur, le login et le mot de passe envoyés par WhatsApp. IPTV Smarters Pro, NetIPTV et SetIPTV restent compatibles.",
  },
  {
    id: "appareils",
    question: "Sur combien d'appareils puis-je installer mon abonnement ?",
    answer:
      "Le Pack Pro s'installe sur 1 appareil. L'Ultra s'installe sur 2 appareils (salon et chambre, par exemple) et le VIP sur 3, toujours en connexion non simultanée : un seul écran lit le flux à la fois. Smart TV, Firestick, box Android et téléphone sont compatibles.",
  },
  {
    id: "activation",
    question: "Comment se passe la commande et l'activation au Maroc ?",
    answer:
      "Écrivez au +212 600-184186 sur WhatsApp, choisissez le pack, puis suivez les instructions de paiement du support. Il n'y a pas de paiement automatique sur le site. Après validation, vous recevez vos identifiants et un accompagnement pour l'installation. L'activation est immédiate. L'application PRO est incluse sur le Pack Pro et le VIP. Le support répond en français et en darija.",
  },
  {
    id: "garantie-remboursement",
    question: "Y a-t-il une garantie satisfait ou remboursé ?",
    answer:
      "Oui. Tous les forfaits annuels incluent 45 jours satisfait ou remboursé à partir de l'activation. Si le service ne convient pas, demandez le remboursement intégral sur WhatsApp ou à contact@ondima.ma dans ce délai. Le remboursement est traité sous 7 à 14 jours ouvrés, par le même moyen de paiement. Il n'y a pas d'essai gratuit séparé : la garantie de 45 jours tient ce rôle.",
  },
  {
    id: "garantie-service",
    question: "Le service est-il garanti pendant les 12 mois ?",
    answer:
      "Oui. La continuité du service est prévue sur toute la durée de l'abonnement. Les serveurs VPS sont monitorés en continu. En cas d'indisponibilité, l'accès bascule vers un serveur de secours pour limiter l'interruption.",
  },
  {
    id: "contenu-maroc",
    question: "Quelles chaînes marocaines et quels sports sont disponibles ?",
    answer:
      "Vous avez des chaînes en direct, le sport, des films, des séries et des documentaires en VOD. Le catalogue est mis à jour tous les jours. Le volume exact dépend du pack : le Pro reste en HD et FHD, l'Ultra et le VIP ajoutent la 4K, et le VIP a le plus grand catalogue. Le guide des programmes (EPG) aide à retrouver le direct du jour.",
  },
  {
    id: "mre",
    question: "Les Marocains résidant à l'étranger peuvent-ils utiliser Ondima ?",
    answer:
      "Oui. Les mêmes identifiants fonctionnent au Maroc et depuis l'Europe, notamment en France, en Espagne et en Belgique. Les nœuds sont répartis entre l'Afrique du Nord et l'Europe pour limiter la latence. Depuis l'étranger, les prix affichés en euros correspondent aux mêmes trois packs.",
  },
];
