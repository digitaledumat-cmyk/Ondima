import {
  GUARANTEE_TAGLINE,
  HOME_PATH,
  PRICING_PATH,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";
import { faqItems } from "@/lib/faq";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/metadata";
import { pricingPlans } from "@/lib/pricing";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const GEO_EMAIL = "contact@ondima.ma";

export interface RelatedLink {
  href: string;
  label: string;
  hint: string;
}

export const pageTitles: Record<string, string> = {
  [HOME_PATH]: "Accueil TV",
  "/iptv-maroc": "IPTV Maroc",
  [PRICING_PATH]: "Abonnement IPTV Maroc",
  "/fonctionnalites": "Fonctionnalités",
  "/guide": "Guide d'installation",
  "/faq": "FAQ",
  "/blog": "Blog",
  "/contact": "Contact",
  "/sitemap-html": "Plan du site",
  "/legal/mentions-legales": "Mentions légales",
  "/legal/conditions-utilisation": "Conditions d'utilisation",
  "/legal/politique-utilisation-acceptable": "Politique d'utilisation acceptable",
  "/legal/conformite-rgpd": "Conformité RGPD",
  "/legal/politique-dmca": "Politique DMCA",
  "/legal/politique-confidentialite": "Politique de confidentialité",
  "/legal/remboursement-et-retour": "Remboursement et retour",
};

const cluster: RelatedLink[] = [
  {
    href: HOME_PATH,
    label: "Accueil TV IPTV Maroc",
    hint: "Offre 2026, packs et activation WhatsApp",
  },
  {
    href: "/iptv-maroc",
    label: "IPTV Maroc stable & sans coupure",
    hint: "Landing SEO : couverture, appareils, garantie",
  },
  {
    href: PRICING_PATH,
    label: "Tarifs abonnement IPTV Maroc",
    hint: "Pack Pro 300 dhs / 35 €, Ultra 450 dhs / 45 €, VIP 600 dhs / 60 €",
  },
  {
    href: "/fonctionnalites",
    label: "Fonctionnalités 4K, Anti-freeze & VPS",
    hint: "Serveurs OTT, qualité d'image, multi-écrans",
  },
  {
    href: "/guide",
    label: "Guide d'installation Nino Player",
    hint: "Smart TV, Android, Firestick, codes Downloader",
  },
  {
    href: "/faq",
    label: "FAQ abonnement IPTV Ondima",
    hint: "Garantie 45 jours, débit, appareils, activation",
  },
  {
    href: "/contact",
    label: "Contact & support WhatsApp 24/7",
    hint: `${WHATSAPP_DISPLAY} · ${GEO_EMAIL}`,
  },
  {
    href: "/blog",
    label: "Guides et comparatifs IPTV",
    hint: "Conseils pour choisir un forfait au Maroc",
  },
];

const relatedByPath: Record<string, string[]> = {
  [HOME_PATH]: ["/iptv-maroc", PRICING_PATH, "/guide", "/faq"],
  "/iptv-maroc": [PRICING_PATH, "/guide", "/fonctionnalites", "/faq", HOME_PATH],
  [PRICING_PATH]: ["/iptv-maroc", "/fonctionnalites", "/guide", "/faq", "/contact"],
  "/fonctionnalites": ["/guide", PRICING_PATH, "/iptv-maroc", "/faq"],
  "/guide": ["/fonctionnalites", PRICING_PATH, "/faq", "/contact"],
  "/faq": [PRICING_PATH, "/guide", "/contact", "/iptv-maroc"],
  "/blog": [PRICING_PATH, "/iptv-maroc", "/faq", "/guide"],
  "/contact": [PRICING_PATH, "/faq", "/guide", HOME_PATH],
  "/sitemap-html": [HOME_PATH, "/iptv-maroc", PRICING_PATH, "/faq"],
};

export function relatedLinksFor(pathname: string): RelatedLink[] {
  const keys = relatedByPath[pathname] ?? [HOME_PATH, "/iptv-maroc", PRICING_PATH, "/faq"];
  const byHref = new Map(cluster.map((item) => [item.href, item]));
  return keys
    .filter((href) => href !== pathname)
    .map((href) => byHref.get(href))
    .filter((item): item is RelatedLink => Boolean(item));
}

export function breadcrumbsFor(pathname: string): { href: string; label: string }[] {
  if (!pathname || pathname === HOME_PATH || pathname === "/") {
    return [{ href: HOME_PATH, label: "Accueil TV" }];
  }

  const crumbs = [{ href: HOME_PATH, label: "Accueil TV" }];
  if (pathname.startsWith("/legal/")) {
    crumbs.push({
      href: pathname,
      label: pageTitles[pathname] ?? "Légal",
    });
    return crumbs;
  }

  crumbs.push({
    href: pathname,
    label: pageTitles[pathname] ?? pathname.replace(/^\//, ""),
  });
  return crumbs;
}

export const footerHubLinks: RelatedLink[] = cluster.slice(0, 7);

export function buildLlmsTxt(): string {
  const packs = pricingPlans
    .map(
      (plan) =>
        `- ${plan.name} : ${plan.price} MAD / ${plan.priceEur} EUR par an — ${plan.tagline}`,
    )
    .join("\n");

  const faq = faqItems
    .slice(0, 8)
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join("\n\n");

  return `# ${SITE_NAME}

> Abonnement TV et IPTV Maroc premium (Ondima.ma). Chaînes live HD/4K, VOD, serveurs VPS OTT, Anti-freeze, activation WhatsApp 24/7, garantie 45 jours.

Ondima est un fournisseur d'abonnement TV / IPTV basé au Maroc (ondima.ma). L'accueil canonique est ${absoluteUrl(HOME_PATH)}. La racine https://ondima.ma redirige en 301 vers /tv. La page tarifs canonique est ${absoluteUrl(PRICING_PATH)}.

${GUARANTEE_TAGLINE}.

Contact : WhatsApp ${WHATSAPP_DISPLAY} (${WHATSAPP_URL}) · e-mail ${GEO_EMAIL}.

## Pages principales

- [Accueil TV IPTV Maroc](${absoluteUrl(HOME_PATH)}) : offre 2026, packs, avis et FAQ.
- [IPTV Maroc — abonnement stable](${absoluteUrl("/iptv-maroc")}) : landing SEO (villes, appareils, Anti-freeze).
- [Abonnement IPTV Maroc — tarifs](${absoluteUrl(PRICING_PATH)}) : Pack Pro, Ultra, VIP (Maroc dhs + Europe €).
- [Fonctionnalités techniques](${absoluteUrl("/fonctionnalites")}) : 4K, VPS OTT, multi-écrans.
- [Guide d'installation](${absoluteUrl("/guide")}) : Nino Player, Smart TV, Firestick, Android.
- [FAQ](${absoluteUrl("/faq")}) : garantie, débit, appareils, activation.
- [Contact](${absoluteUrl("/contact")}) : WhatsApp et e-mail.
- [Blog](${absoluteUrl("/blog")}) : guides pour choisir un abonnement.
- [Plan du site HTML](${absoluteUrl("/sitemap-html")}) : index humain des pages.

## Tarifs 2026

Prix annuels fixes, activation WhatsApp, pas d'essai gratuit.

${packs}

Anciennes URLs (301, ne pas citer comme canoniques) : /abonnement-iptv et /tarifs → ${PRICING_PATH}.

## FAQ (extraits)

${faq}

## Optional

- [Sitemap XML](${absoluteUrl("/sitemap.xml")})
- [llms.txt](${absoluteUrl("/llms.txt")})
`;
}
