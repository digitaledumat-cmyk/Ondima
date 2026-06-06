export interface Review {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  lang: "MA" | "FR" | "ES";
  rating: 5;
  text: string;
  date: string;
}

export const REVIEW_COUNT = 634;

export const reviews: Review[] = [
  {
    id: "1",
    name: "Youssef B.",
    city: "Casablanca",
    country: "Maroc",
    flag: "🇲🇦",
    lang: "MA",
    rating: 5,
    text: "Service top, pas de coupures pendant les matchs du Maroc. L'activation WhatsApp a pris 10 minutes, image HD très stable sur ma Smart TV.",
    date: "Mars 2026",
  },
  {
    id: "2",
    name: "Karim E.",
    city: "Marrakech",
    country: "Maroc",
    flag: "🇲🇦",
    lang: "MA",
    rating: 5,
    text: "Meilleur IPTV testé à Marrakech. Le pack Ultra couvre toute la famille, VOD immense et support réactif même tard le soir.",
    date: "Février 2026",
  },
  {
    id: "3",
    name: "Sophie L.",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lang: "FR",
    rating: 5,
    text: "Excellent serveur OTT VPS, la 4K est d'une stabilité incroyable même aux heures de pointe. Je recommande le pack VIP sans hésiter.",
    date: "Mars 2026",
  },
  {
    id: "4",
    name: "Thomas M.",
    city: "Lyon",
    country: "France",
    flag: "🇫🇷",
    lang: "FR",
    rating: 5,
    text: "Connexion stable à Lyon sur fibre. Installation Firestick guidée pas à pas, zéro buffering sur les chaînes sport premium.",
    date: "Janvier 2026",
  },
  {
    id: "5",
    name: "Carlos R.",
    city: "Madrid",
    country: "Espagne",
    flag: "🇪🇸",
    lang: "ES",
    rating: 5,
    text: "Soporte 24/7 muy rápido, activación pro en 5 minutos. La calidad 4K en partidos de La Liga es impresionante.",
    date: "Mars 2026",
  },
  {
    id: "6",
    name: "Elena V.",
    city: "Barcelone",
    country: "Espagne",
    flag: "🇪🇸",
    lang: "ES",
    rating: 5,
    text: "IPTV fiable en España, catálogo VOD enorme y anti-freeze perfecto en eventos en directo. Garantía de 45 días muy tranquilizadora.",
    date: "Février 2026",
  },
  {
    id: "7",
    name: "Fatima Z.",
    city: "Rabat",
    country: "Maroc",
    flag: "🇲🇦",
    lang: "MA",
    rating: 5,
    text: "Essai 24h validé en un clic WhatsApp. Qualité HD nickel sur Box Android, chaînes arabes et françaises au top.",
    date: "Mars 2026",
  },
  {
    id: "8",
    name: "Julien P.",
    city: "Marseille",
    country: "France",
    flag: "🇫🇷",
    lang: "FR",
    rating: 5,
    text: "Meilleur rapport qualité-prix IPTV 2026. Le comparatif des forfaits est clair, le VIP vaut chaque dirham pour le 4K UHD.",
    date: "Février 2026",
  },
  {
    id: "9",
    name: "Miguel A.",
    city: "Valence",
    country: "Espagne",
    flag: "🇪🇸",
    lang: "ES",
    rating: 5,
    text: "Servicio premium en Valencia, multi-pantalla funciona perfecto en 3 dispositivos. Equipo Ondima muy profesional.",
    date: "Janvier 2026",
  },
];
