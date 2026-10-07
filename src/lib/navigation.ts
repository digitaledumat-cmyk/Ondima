import { HOME_PATH, PRICING_PATH } from "@/lib/constants";

export const mainNav = [
  { label: "Accueil", href: HOME_PATH },
  { label: "IPTV Maroc", href: "/iptv-maroc" },
  { label: "Tarifs", href: PRICING_PATH },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Guide", href: "/guide" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [
  { label: "Mentions légales", href: "/legal/mentions-legales" },
  { label: "Conditions d'utilisation", href: "/legal/conditions-utilisation" },
  { label: "Politique d'utilisation acceptable", href: "/legal/politique-utilisation-acceptable" },
  { label: "Conformité RGPD", href: "/legal/conformite-rgpd" },
  { label: "Politique DMCA", href: "/legal/politique-dmca" },
  { label: "Politique de confidentialité", href: "/legal/politique-confidentialite" },
  { label: "Remboursement et retour", href: "/legal/remboursement-et-retour" },
];

export const sitemapSections = [
  {
    title: "Pages principales",
    description: "Navigation essentielle du site Ondima.ma",
    links: [
      { label: "Accueil TV", href: HOME_PATH },
      { label: "IPTV Maroc — Abonnement stable", href: "/iptv-maroc" },
      { label: "Tarifs — Packs & forfaits", href: PRICING_PATH },
      { label: "Fonctionnalités techniques", href: "/fonctionnalites" },
      { label: "Guide d'installation", href: "/guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Ressources SEO, GEO & support",
    description: "Maillage interne et fichiers pour moteurs et assistants IA",
    links: [
      { label: "IPTV Maroc — Abonnement stable", href: "/iptv-maroc" },
      { label: "Abonnement IPTV Maroc — Tarifs", href: PRICING_PATH },
      { label: "Guide d'installation Nino Player", href: "/guide" },
      { label: "Fonctionnalités 4K & Anti-freeze", href: "/fonctionnalites" },
      { label: "Accueil TV IPTV Maroc", href: HOME_PATH },
      { label: "FAQ abonnement Ondima", href: "/faq" },
      { label: "Plan du site HTML", href: "/sitemap-html" },
      { label: "llms.txt — résumé pour les LLM", href: "/llms.txt" },
    ],
  },
  {
    title: "Informations légales",
    description: "Conformité, confidentialité et conditions d'utilisation",
    links: legalNav,
  },
];
