export type WhatsAppBubble = {
  id: string;
  from: "client" | "ondima";
  name?: string;
  text: string;
  time: string;
};

export const whatsappReviewBubbles: WhatsAppBubble[] = [
  {
    id: "1",
    from: "client",
    name: "Youssef · Casa",
    text: "Salam khouya, l'IPTV khaddam mzyan bzaf 🔥 Match lbareh bla buffering, image HD nqiya.",
    time: "21:14",
  },
  {
    id: "2",
    from: "ondima",
    text: "Merci Youssef 🙌 Content que tout soit fluide. Besoin d'aide pour la Smart TV ?",
    time: "21:15",
  },
  {
    id: "3",
    from: "client",
    name: "Sara · Rabat",
    text: "Activation en moins de 10 min via WhatsApp. Pack Pro nickel, films et séries au top.",
    time: "18:42",
  },
  {
    id: "4",
    from: "client",
    name: "Karim · Marrakech",
    text: "Wallah service top. Ultra f 2 appareils (pas en même temps) — salon o chambre. Support jayb m3ana.",
    time: "14:03",
  },
  {
    id: "5",
    from: "ondima",
    text: "Parfait Karim ! N'hésitez pas si vous changez de Firestick, on vous guide.",
    time: "14:05",
  },
  {
    id: "6",
    from: "client",
    name: "Mehdi · Tanger",
    text: "Khdit VIP, 4K f TV kbir. Makaynch coupure f match. Merci Ondima 💚",
    time: "22:31",
  },
  {
    id: "7",
    from: "client",
    name: "Nadia · Paris",
    text: "Enfin un IPTV stable depuis la France. Chaînes + sport, support réactif.",
    time: "12:18",
  },
  {
    id: "8",
    from: "ondima",
    text: "Merci Nadia ! Bon visionnage ✨",
    time: "12:20",
  },
  {
    id: "9",
    from: "client",
    name: "Amine · Fès",
    text: "Kan khayef men les freezes… Anti-freeze khaddam. Nino Player + WhatsApp = facile.",
    time: "19:55",
  },
  {
    id: "10",
    from: "client",
    name: "Léa · Lyon",
    text: "Garantie 45 jours rassurante. Image FHD/4K selon le pack, SAV au top. Je recommande.",
    time: "16:07",
  },
  {
    id: "11",
    from: "client",
    name: "Hicham · Agadir",
    text: "300 dhs Pack Pro, app PRO incluse. Worth it. Chokran l'équipe 👏",
    time: "11:29",
  },
  {
    id: "12",
    from: "ondima",
    text: "Marhba bik Hicham ! Ila bghiti upgrade Ultra/VIP, goulina f WhatsApp.",
    time: "11:31",
  },
];
