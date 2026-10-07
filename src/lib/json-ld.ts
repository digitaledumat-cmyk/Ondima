import {
  GEO_EMAIL,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/geo";
import {
  HOME_PATH,
  PRICING_PATH,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { faqItems } from "@/lib/faq";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/metadata";
import { pricingPlans } from "@/lib/pricing";

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icon.png"),
        },
        email: GEO_EMAIL,
        telephone: `+${WHATSAPP_NUMBER}`,
        areaServed: ["MA", "FR", "ES", "GB"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: `+${WHATSAPP_NUMBER}`,
          email: GEO_EMAIL,
          availableLanguage: ["French", "Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "fr-MA",
        publisher: { "@id": ORG_ID },
        about: {
          "@type": "Thing",
          name: "Abonnement IPTV Maroc",
        },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function offerCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Tarifs abonnement IPTV Maroc Ondima 2026",
    url: absoluteUrl(PRICING_PATH),
    itemListElement: pricingPlans.flatMap((plan, index) => [
      {
        "@type": "Offer",
        name: `${plan.name} (Maroc)`,
        description: plan.tagline,
        url: absoluteUrl(PRICING_PATH),
        price: String(plan.price),
        priceCurrency: "MAD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        position: index * 2 + 1,
      },
      {
        "@type": "Offer",
        name: `${plan.name} (Europe)`,
        description: plan.tagline,
        url: absoluteUrl(PRICING_PATH),
        price: String(plan.priceEur),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        position: index * 2 + 2,
      },
    ]),
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Abonnement IPTV Maroc Ondima",
    serviceType: "IPTV / abonnement TV en streaming",
    provider: { "@id": ORG_ID },
    areaServed: ["MA", "FR", "ES"],
    url: absoluteUrl("/iptv-maroc"),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "300",
      highPrice: "600",
      priceCurrency: "MAD",
      offerCount: pricingPlans.length,
      url: absoluteUrl(PRICING_PATH),
    },
  };
}

export function homeWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(HOME_PATH),
    url: absoluteUrl(HOME_PATH),
    name: "Abonnement TV IPTV Maroc 2026 — Ondima",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: absoluteUrl("/ondima.webp"),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };
}

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: "Contact Ondima",
    mainEntity: {
      "@type": "Organization",
      "@id": ORG_ID,
      email: GEO_EMAIL,
      telephone: WHATSAPP_DISPLAY,
    },
  };
}
