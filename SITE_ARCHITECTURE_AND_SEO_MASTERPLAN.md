# ONDIMA.MA — SITE ARCHITECTURE & SEO MASTERPLAN

**Document type:** Exhaustive architectural + technical SEO specification  
**Project:** Ondima.ma (IPTV Maroc Premium)  
**Codebase root:** `/Users/mac/Desktop/Ondima`  
**Production domain:** `https://ondima.ma`  
**Generated from:** Full repository audit (App Router, libs, components, configs)  
**Version snapshot:** Post-commit `d3f2f33` (homepage moved to `/tv`, 301 from `/`)

---

## Table of contents

1. [Global project architecture & tech stack](#1-global-project-architecture--tech-stack)
2. [Complete page-by-page audit & blueprint](#2-complete-page-by-page-audit--blueprint)
3. [Internal SEO & site linking strategy](#3-internal-seo--site-linking-strategy)
4. [Targeted keywords master matrix](#4-targeted-keywords-master-matrix)
5. [External SEO & backlinking framework](#5-external-seo--backlinking-framework-recommended-strategy)
6. [Reusable template / boilerplate checklist](#6-reusable-template--boilerplate-checklist)

---

## 1. GLOBAL PROJECT ARCHITECTURE & TECH STACK

### 1.1 Framework & core libraries

| Layer | Technology | Version / notes |
|---|---|---|
| Framework | **Next.js** (App Router) | `^15.3.3` |
| UI library | **React** / **React DOM** | `^19.1.0` |
| Language | **TypeScript** | `^5.8.3` — `strict: true` |
| Styling | **Tailwind CSS v4** | `^4.1.8` via `@tailwindcss/postcss` |
| Fonts | **next/font/google** → Inter | `display: "swap"`, CSS variable `--font-inter` |
| Linting | ESLint + `eslint-config-next` | `^9.27.0` / `^15.3.3` |
| Hosting | **Vercel** | `vercel.json` + GitHub auto-deploy |
| Package manager | npm | `package-lock.json` present |

**No** additional UI kits (no shadcn/MUI), **no** CMS, **no** i18n framework (FR primary; AR lang toggle in Header is UI-only state), **no** analytics SDK in repo, **no** JSON-LD schema implementation yet.

### 1.2 Next.js configuration (`next.config.ts`)

```ts
trailingSlash: false          // Canonical URLs without trailing slash
images.formats: ["image/webp", "image/avif"]
images.remotePatterns: ninoplayer.com (Nino Player logo)
redirects:
  - /guide-installation → /guide (308/permanent)
  - / → /tv (301)
  - www.ondima.ma/ → https://ondima.ma/tv (301)
  - www.ondima.ma/* → https://ondima.ma/:path* (permanent)
allowedDevOrigins: localhost, 127.0.0.1, LAN IP
```

**Duplicate www handling** also in `vercel.json` (edge redirects).

### 1.3 Path aliases (`tsconfig.json`)

| Alias | Maps to |
|---|---|
| `@/*` | `./src/*` |
| `@/public/*` | `./public/*` |

### 1.4 Project folder structure & roles

```
Ondima/
├── public/
│   └── ondima.webp              # Hero + OG social image (1672×941)
├── src/
│   ├── app/                     # App Router routes + root layout + SEO files
│   │   ├── layout.tsx           # Root metadata, font, html lang="fr"
│   │   ├── tv/page.tsx          # Homepage /tv (canonical home)
│   │   ├── globals.css          # Design tokens, utilities, animations
│   │   ├── sitemap.ts           # Dynamic /sitemap.xml
│   │   ├── robots.ts            # Dynamic /robots.txt
│   │   ├── icon.png / apple-icon.png / favicon.ico
│   │   ├── iptv-maroc/          # SEO landing
│   │   ├── tarifs/              # Product / pricing page
│   │   ├── fonctionnalites/
│   │   ├── guide/
│   │   ├── faq/
│   │   ├── blog/                # Listing only (no /blog/[slug] routes)
│   │   ├── contact/
│   │   ├── sitemap-html/
│   │   └── legal/*/             # 7 legal pages
│   ├── components/              # UI sections + layout shell
│   │   ├── layout/              # SiteShell, PageHero
│   │   ├── seo/                 # SeoContentBlock
│   │   ├── legal/               # LegalPageContent
│   │   └── ui/                  # Accordion
│   └── lib/                     # Content, pricing, metadata, nav, FAQ data
├── next.config.ts
├── vercel.json
├── package.json
└── postcss.config.mjs
```

### 1.5 Routing system

- **File-based App Router** under `src/app/**/page.tsx`.
- Shared chrome via `SiteShell` → `AmbientBackground` + `Header` + `Footer` + optional `WhatsAppFab`.
- Navigation source of truth: `src/lib/navigation.ts` (`mainNav`, `legalNav`, `sitemapSections`).
- Metadata factory: `src/lib/metadata.ts` → `createMetadata({ title, description, path, keywords? })`.

### 1.6 Rendering strategy per route

Build output marks all marketing pages as **○ Static (prerendered)**.

| Route pattern | Strategy | Notes |
|---|---|---|
| All `page.tsx` routes | **SSG / Static** | Generated at `next build` |
| `/sitemap.xml`, `/robots.txt` | **Static MetadataRoute** | From `sitemap.ts` / `robots.ts` |
| Client islands | **CSR islands** inside SSG pages | `"use client"`: Header, Accordion, TrialForm, PricingCard, WhatsAppReviews |
| Blog articles | **Not implemented as routes** | `blogPosts` are cards linking to `#` / listing only — **no** `/blog/[slug]` |

**No ISR** (`revalidate`) and **no dynamic `force-dynamic`** found.

### 1.7 Performance & Core Web Vitals implementations

| Technique | Implementation |
|---|---|
| Font optimization | `next/font` Inter with `display: "swap"` |
| Image formats | WebP/AVIF preference in Next config |
| Hero LCP | `HeroVisual` uses `next/image` with `priority` + responsive `sizes` |
| Trailing slash | Disabled → single URL form |
| WWW consolidation | 301 to apex domain |
| CSS | Tailwind purged utilities; cinematic tokens in `globals.css` |
| JS weight | Minimal deps (Next + React only) |
| Motion | CSS keyframes; WhatsApp chat pauses on hover; `prefers-reduced-motion` respected |
| Icons | Inline SVG (no icon font) |
| Favicons | App Router file conventions (`icon.png` 192×192, `apple-icon.png`, `favicon.ico`) |

### 1.8 Design system (visual architecture)

- Brand theme: **Cinematic Cyber-Premium**, void background `#0a0a0c`.
- Accents: violet/cyan neon, WhatsApp green CTAs, orange secondary CTA.
- Components: glass panels, glow borders, TrustBadge, Logo (“On” power switch + “Dima”).
- Primary conversion channel: **WhatsApp** (`WHATSAPP_NUMBER = 212600184186`).

### 1.9 Business / offer model reflected in UI

| Pack | Price | Key features (source: `pricing.ts`) |
|---|---|---|
| Pack Pro | 300 dhs/an | HD & FHD, +90k films, +50k séries, 1 device, App PRO included |
| Expérience Ultra | 450 dhs/an | HD/FHD/4K, 2 devices **non-simultaneous** |
| Exclusif Suprême VIP | 600 dhs/an | 4K UHD, VPS, 3 devices **non-simultaneous**, App PRO |

**Guarantees (no free trial):**  
`Satisfait ou remboursé sous 45 jours — serveurs garantis durant toute la période de l'abonnement`

### 1.10 Critical SEO engine files

| File | Role |
|---|---|
| `src/lib/constants.ts` | `HOME_PATH = "/tv"`, WhatsApp, guarantee tagline |
| `src/lib/metadata.ts` | SITE_URL, DEFAULT_TITLE/DESCRIPTION, OG image, `createMetadata`, `absoluteUrl` |
| `src/app/layout.tsx` | Root metadata + robots index/follow + keywords + icons |
| `src/app/sitemap.ts` | Explicit indexable routes; `/tv` priority 1; `/` excluded |
| `src/app/robots.ts` | Allow `/`, disallow `/api/`, sitemap pointer |
| `src/lib/navigation.ts` | Crawlable internal graph |

### 1.11 Gaps observed (for masterplan honesty)

- **No Schema.org / JSON-LD** anywhere in codebase.
- **No breadcrumbs** component.
- **Blog posts are not real pages** (listing + excerpts only).
- **Single OG image** reused site-wide (`/ondima.webp`).
- **Only one content `<Image>`** (hero); Nino logo is remote Image; most “visuals” are CSS/emoji.
- AR language toggle does not switch content locale.

---

## 2. COMPLETE PAGE-BY-PAGE AUDIT & BLUEPRINT

> Convention: Canonical = `https://ondima.ma{path}` with **no trailing slash**.  
> OG/Twitter: generated by `createMetadata` / root layout → `type=website`, `locale=fr_MA`, `card=summary_large_image`, image `/ondima.webp`.

---

### 2.1 Homepage — `/tv`

| Field | Detail |
|---|---|
| **File** | `src/app/tv/page.tsx` |
| **Layout** | Page-level `createMetadata` (`DEFAULT_TITLE` / `DEFAULT_DESCRIPTION` / `HOME_KEYWORDS`, path `/tv`) |
| **Purpose** | Brand + conversion homepage for TV / IPTV Maroc Premium |
| **Audience / Intent** | Commercial + transactional (discover → WhatsApp / pricing) |
| **Rendering** | Static SSG + client Header / Accordion / TrialForm / PricingCard |
| **Redirect** | `/` → `/tv` (301); `www.ondima.ma/` → `https://ondima.ma/tv` (301) |

**Title:** `Abonnement TV IPTV Maroc 2026 | +45 000 Chaînes HD/4K - Ondima`  
**Meta description:** `Ondima.ma/tv : abonnement TV et IPTV Maroc Premium. Chaînes live, sport, VOD 4K ultra-stable, anti-freeze et support WhatsApp 24/7. Packs dès 300 DH/an, garantie 45 jours.`  
**Canonical:** `https://ondima.ma/tv`  
**Robots:** `index, follow`  
**Keywords:** IPTV Maroc, abonnement IPTV Maroc, meilleur IPTV Maroc, fournisseur IPTV Maroc, acheter IPTV Maroc, recharge IPTV Maroc, IPTV 4K Maroc, IPTV HD Maroc, TV Maroc, abonnement TV

**UI sections (in order):**

1. `Header` — mainNav, FR/AR toggle, WhatsApp CTA, Commencer → `/tarifs`
2. `Hero` — H1, pills, CTAs (WhatsApp, Commencer, Voir forfaits), guarantee line, `HeroVisual` image
3. `Benefits` — value props + 3 steps H3
4. `Features` — 6 feature cards H3
5. `Pricing` — TrustBadge, 3 cards, compare table
6. `WhyChooseIptv` — long SEO prose H2
7. `TrialForm` (`#commander`) — order form → WhatsApp deep link
8. `Reviews` — review cards grid
9. `InstallationGuide` — accordion steps + RecommendedApps + NinoPlayerQuickGuide
10. `Support` — perks + WhatsApp
11. `FAQ` — accordion from `faq.ts`
12. `LocalSeo` — countries/cities coverage
13. `Footer` + `WhatsAppFab`

**Heading structure:**

- **H1:** « Abonnement TV Maroc 2026 : IPTV Premium HD/4K sans coupure » (`Hero`)
- **H2:** Benefits, Features, Pricing, WhyChooseIptv, TrialForm, Reviews, InstallationGuide, Support, FAQ, LocalSeo
- **H3:** Benefit steps, feature titles, compare label, LocalSeo countries

**Images:**

- Hero: `public/ondima.webp` via `next/image`, `priority`, alt SEO-optimized, sizes `(max-width: 1024px) 100vw, 50vw`
- Nino logo (in InstallationGuide subtree): remote PNG, alt `Logo Nino Player`

**Structured data:** None.

---

### 2.2 IPTV Maroc SEO landing — `/iptv-maroc`

| Field | Detail |
|---|---|
| **File** | `src/app/iptv-maroc/page.tsx` + `src/lib/iptv-maroc.ts` + WhatsApp reviews libs |
| **Purpose** | Independent SEO landing (keyword hub) — **does not replace** `/tv` or `/tarifs` |
| **Audience / Intent** | Informational → commercial (city + “meilleur IPTV” queries) |
| **Rendering** | Static + client WhatsAppReviews / PricingCard / Accordion |

**Title:** `IPTV Maroc | Meilleur Abonnement Stable & Sans Coupure – Ondima`  
**Meta description:** `IPTV Maroc premium Ondima : abonnement stable, HD/FHD/4K, Anti-freeze, support WhatsApp rapide. Pack Pro 300 dhs, Ultra 450 dhs, VIP 600 dhs. Garantie 45 jours.`  
**Canonical:** `https://ondima.ma/iptv-maroc`  
**Keywords:** IPTV Maroc, meilleur IPTV Maroc, abonnement IPTV Maroc, abonnement IPTV stable, IPTV sans coupure, support IPTV WhatsApp, IPTV 4K Maroc  
**Sitemap priority:** `0.95` weekly

**UI sections:**

1. `PageHero` H1  
2. TrustBadge + WhatsApp + link to `/tarifs`  
3. `SeoContentBlock` intro  
4. Points forts (4× H3 cards)  
5. Appareils compatibles (4× H3)  
6. Formules (`Pricing`) + link product page  
7. `WhatsAppReviews` (phone mockup scrolling chats)  
8. FAQ accordion (page-specific)  
9. CTA block  
10. **Long SEO guide** `#guide-iptv-maroc` (~780 words) + city chips (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, Meknès, Oujda, Kénitra, Tétouan, Safi, El Jadida, Nador, Mohammedia)

**H1:** « IPTV Maroc : le meilleur abonnement stable & sans coupure »  
**Structured data:** None.

---

### 2.3 Product / pricing — `/tarifs`

| Field | Detail |
|---|---|
| **File** | `src/app/tarifs/page.tsx` |
| **Purpose** | Dedicated commercial product page (tariffs & packs) |
| **Audience / Intent** | Transactional |
| **Rendering** | Static + PricingCard client |
| **Redirect** | `/abonnement-iptv` → `/tarifs` (301) |

**Title:** `Tarifs Ondima | Packs TV & Formules 2026`  
**Meta description:** `Tarifs Ondima 2026 : Pack Pro 300 dhs, Expérience Ultra 450 dhs, VIP 600 dhs/an. Packs TV avec serveurs VPS OTT, garantie 45 jours et activation WhatsApp 24/7.`  
**Canonical:** `https://ondima.ma/tarifs`  
**Keywords:** tarifs Ondima, tarifs IPTV Maroc, packs TV Maroc, prix IPTV, formules TV 4K  
**Sitemap:** priority `0.9` weekly

**UI:** Custom hero H1 → `SeoContentBlock` intro → `Pricing` (no header) → SEO pricing paragraphs → CTA WhatsApp + link `/tv#commander` → footer links Guide / Fonctionnalités / Accueil (`/tv`)  

**H1:** « Tarifs Ondima : packs TV & formules 2026 »  
**Structured data:** None (Opportunity: Product / Offer schema).

---

### 2.4 Features — `/fonctionnalites`

| Field | Detail |
|---|---|
| **File** | `src/app/fonctionnalites/page.tsx` + `src/lib/fonctionnalites.ts` |
| **Purpose** | Technical authority page (VPS, H.265, Anti-freeze, EPG, Smart-OTT) |
| **Intent** | Informational / commercial investigation |

**Title:** `Fonctionnalités IPTV | Meilleur IPTV Maroc, Serveur Stable & 4K - Ondima`  
**Description:** Infrastructure Ondima : serveurs VPS dédiés, codec H.265 4K, Anti-freeze 2.2, EPG dynamique et routage Smart-OTT…  
**Canonical:** `https://ondima.ma/fonctionnalites`  
**Keywords:** Meilleur IPTV Maroc, Serveur IPTV stable, IPTV 4K Maroc, Anti-freeze 2.2, abonnement IPTV Maroc  
**Sitemap:** `0.8` weekly

**UI:** PageHero → SeoContentBlock → 5 tech pillars (H3) → CTA WhatsApp + forfaits  

**H1:** « Fonctionnalités Ondima — Technologie IPTV Premium »  
**Structured data:** None (Opportunity: FAQPage / TechArticle).

---

### 2.5 Installation guide — `/guide`

| Field | Detail |
|---|---|
| **File** | `src/app/guide/page.tsx` + `seo-content.ts` + `installation.ts` + Nino components |
| **Purpose** | Device-by-device install tutorials |
| **Intent** | Informational / post-purchase support |

**Title:** `Guide IPTV Maroc | Smart TV, Android, Firestick & Smarters - Ondima`  
**Description:** Tutoriels Smart TV (NetIPTV/SetIPTV), Android, Firestick, Smarters, MAG…  
**Canonical:** `https://ondima.ma/guide`  
**Keywords:** IPTV Smart TV Maroc, IPTV Android Maroc, IPTV Firestick Maroc, IPTV Smarters Maroc, guide installation IPTV  
**Redirect:** `/guide-installation` → `/guide` (301)  
**Sitemap:** `0.8` weekly

**UI:** PageHero → Seo intro → RecommendedApps → NinoPlayerQuickGuide → Accordion by device → Accordion universal steps → WhatsApp assist CTA  

**H1:** « Guide d'installation IPTV — Tous appareils »  
**Structured data:** None (Opportunity: HowTo).

---

### 2.6 FAQ — `/faq`

| Field | Detail |
|---|---|
| **File** | `src/app/faq/page.tsx` + `src/lib/faq.ts` + `FAQ` component |
| **Purpose** | Central Q&A (guarantees, devices, Nino, UK/international) |
| **Intent** | Informational |

**Title:** `FAQ Best IPTV | IPTV Subscription UK & Service Providers - Ondima`  
**Description:** FAQ on best IPTV services, UK subscription, providers, garantie 45 jours, débit 4K…  
**Canonical:** `https://ondima.ma/faq`  
**Keywords:** IPTV subscription UK, best IPTV services, IPTV service providers, best IPTV  

**UI:** PageHero → SeoContentBlock → `FAQ compact` accordion → links Contact / Blog  

**H1:** « Foire aux questions »  
**Structured data:** None (**high priority gap** — FAQPage JSON-LD).

---

### 2.7 Blog listing — `/blog`

| Field | Detail |
|---|---|
| **File** | `src/app/blog/page.tsx` + `src/lib/blog.ts` |
| **Purpose** | Content hub listing 8 article cards |
| **Intent** | Informational / topical authority |
| **Gap** | Cards do **not** route to `/blog/[slug]` — no article pages exist |

**Title:** `Best IPTV Services 2026 | IPTV Subscription UK & Guides - Ondima`  
**Description:** Blog comparatifs best IPTV, UK, providers, guides techniques…  
**Canonical:** `https://ondima.ma/blog`  

**Listed posts (content inventory in `blog.ts` — cards only, no `/blog/[slug]` routes):**

| Slug | Title | Category |
|---|---|---|
| `choisir-abonnement-iptv-maroc-2026` | Comment choisir son abonnement IPTV au Maroc en 2026 | Guide |
| `installer-iptv-firestick-samsung` | Installer l'IPTV Ondima sur Firestick et Smart TV Samsung | Installation |
| `debit-internet-4k-iptv` | Quel débit internet pour l'IPTV 4K stable ? | Technique |
| `iptv-casablanca-paris-madrid` | IPTV premium : Casablanca, Paris et Madrid comparés | International |
| `garantie-45-jours-ondima` | Garantie satisfait ou remboursé 45 jours : comment ça marche ? | Offres |
| `vod-180000-contenus-ondima` | VOD XXL : +180 000 films et séries sur le pack VIP | Divertissement |
| `iptv-subscription-uk-comparatif` | IPTV subscription UK : comment Ondima rivalise avec les leaders | International |
| `best-iptv-services-2026` | Best IPTV services 2026 : le guide des IPTV service providers | Comparatif |

**H1:** « Guides & actualités IPTV »  
**Structured data:** None.

---

### 2.8 Contact — `/contact`

| Field | Detail |
|---|---|
| **File** | `src/app/contact/page.tsx` |
| **Purpose** | Contact + order form |
| **Intent** | Navigational / transactional |

**Title:** `Contact Ondima | Support WhatsApp 24/7 & Garantie 45 jours`  
**Description:** Contact WhatsApp/email, support 24/7, garantie 45 jours, activation guidée…  
**Canonical:** `https://ondima.ma/contact`  

**UI:** PageHero → WhatsApp / email / TrustBadge cards → `TrialForm` (#commander)  

**H1:** « Support & contact Ondima »  
**Structured data:** None (Opportunity: ContactPage / Organization).

---

### 2.9 HTML sitemap — `/sitemap-html`

| Field | Detail |
|---|---|
| **File** | `src/app/sitemap-html/page.tsx` |
| **Purpose** | Human-readable site map + SEO internal links |
| **Intent** | Navigational / crawl assist |

**Title:** `Plan du site Ondima.ma | Accueil TV, tarifs et pages 2026`  
**Meta description:** `Plan du site HTML Ondima.ma : accueil ondima.ma/tv, IPTV Maroc, tarifs, fonctionnalités, guide, FAQ, blog, contact et pages légales pour un maillage interne SEO optimal.`  
**Canonical:** `https://ondima.ma/sitemap-html`  
**FAB:** Disabled (`SiteShell showFab={false}`)

**UI:**  
1. PageHero (label « Navigation »)  
2. Callout linking to `/sitemap.xml`  
3. Three sections from `sitemapSections` with visible URLs (`ondima.ma/tv`, etc.)  

**H1:** « Plan du site Ondima.ma »  
**Structured data:** None.

---

### 2.10 Legal pages (×7)

All use `LegalPageContent` + `createMetadata` + data in `src/lib/legal.ts`.

| Path | Title pattern | Meta description | H2 sections |
|---|---|---|---|
| `/legal/mentions-legales` | Mentions légales \| Ondima.ma | Informations légales relatives au site Ondima.ma | Éditeur du site · Hébergement · Propriété intellectuelle · Responsabilité |
| `/legal/conditions-utilisation` | Conditions d'utilisation \| Ondima.ma | Conditions générales d'utilisation du service Ondima.ma | Objet · Services proposés · Obligations de l'utilisateur · Durée et résiliation |
| `/legal/politique-utilisation-acceptable` | Politique d'utilisation acceptable \| Ondima.ma | Règles d'usage acceptable du service IPTV Ondima | Usage autorisé · Usages interdits · Sanctions |
| `/legal/conformite-rgpd` | Conformité RGPD \| Ondima.ma | Politique de conformité au Règlement Général sur la Protection des Données | Responsable du traitement · Données collectées · Base légale et finalités · Droits des personnes |
| `/legal/politique-dmca` | Politique DMCA \| Ondima.ma | Procédure de notification et retrait de contenu | Engagement Ondima · Procédure de notification · Contre-notification |
| `/legal/politique-confidentialite` | Politique de confidentialité \| Ondima.ma | Protection et traitement de vos données personnelles | Collecte des informations · Conservation · Sécurité · Transferts internationaux |
| `/legal/remboursement-et-retour` | Remboursement et retour \| Ondima.ma | Politique de garantie satisfait et remboursement Ondima | Garantie 45 jours · Conditions d'éligibilité · Procédure et délais · Garantie de continuité de service |

**Layout each:** `LegalPageContent` → PageHero H1 = legal title → each section as **H2** → paragraphs from `legal.ts`  
**Sitemap:** priority `0.3`, `changeFrequency: yearly`  
**Structured data:** None.

---

### 2.11 System routes (non-HTML pages)

| URL | Generator | Behavior |
|---|---|---|
| `/sitemap.xml` | `src/app/sitemap.ts` | All indexable URLs with priorities |
| `/robots.txt` | `src/app/robots.ts` | `Allow: /`, `Disallow: /api/`, Sitemap absolute URL |
| `/icon.png`, `/apple-icon.png`, `/favicon.ico` | App Router file metadata | Favicon / PWA-style icons |

### 2.12 Shared chrome components (every SiteShell page)

| Component | Role |
|---|---|
| `AmbientBackground` | Decorative orbs/grid |
| `Header` | Sticky nav, mobile menu, WhatsApp + Commencer |
| `Footer` | Brand blurb, mainNav, legal slice, contact, full legal row |
| `WhatsAppFab` | Fixed bottom-right « Commander » |

### 2.13 Client vs server components map

| Client (`"use client"`) | Server (default) |
|---|---|
| Header, Accordion, TrialForm, PricingCard, WhatsAppReviews | Almost all pages, Pricing shell, Hero, Features, etc. |

---

## 3. INTERNAL SEO & SITE LINKING STRATEGY

### 3.1 Information architecture (topic silo)

```
                    ┌─────────────────────┐
                    │   Brand hub: /tv    │
                    │  (commercial home)  │
                    └──────────┬──────────┘
           ┌───────────────────┼───────────────────┐
           ▼                   ▼                   ▼
   ┌───────────────┐  ┌────────────────┐  ┌────────────────┐
   │ /iptv-maroc   │  │    /tarifs     │  │ /fonctionnalites│
   │ SEO keyword   │  │ transactional  │  │ tech authority  │
   │ hub + cities  │  │ pricing        │  │                 │
   └───────┬───────┘  └───────┬────────┘  └────────┬───────┘
           │                  │                    │
           └────────┬─────────┴──────────┬─────────┘
                    ▼                    ▼
             ┌────────────┐       ┌──────────┐
             │   /guide   │       │   /faq   │
             │  HowTo     │       │  Q&A     │
             └─────┬──────┘       └────┬─────┘
                   │                   │
                   ▼                   ▼
             ┌────────────┐     ┌────────────┐
             │   /blog    │     │ /contact   │
             │  (listing) │     │  convert   │
             └────────────┘     └────────────┘
                   │
                   ▼
             /legal/*  +  /sitemap-html
```

**Cluster logic:**

- **Money cluster:** `/tarifs`, homepage pricing, `/iptv-maroc` formules  
- **Trust cluster:** FAQ, reviews, WhatsApp social proof, legal refund  
- **Support cluster:** `/guide`, Nino Player, Support section  
- **Authority cluster:** `/fonctionnalites`, long SEO on `/iptv-maroc`, blog listing  
- **Local cluster:** LocalSeo + city chips on `/iptv-maroc`

### 3.2 Primary navigation (Header + Footer)

From `mainNav`:

1. Accueil `/tv`  
2. IPTV Maroc `/iptv-maroc`  
3. Tarifs `/tarifs`  
4. Fonctionnalités `/fonctionnalites`  
5. Guide `/guide`  
6. FAQ `/faq`  
7. Blog `/blog`  
8. Contact `/contact`

Footer also exposes Plan du site + legal links.

### 3.3 Anchor text patterns (observed)

| Pattern type | Examples in code |
|---|---|
| Exact / branded | « IPTV Maroc », « Ondima », Logo home |
| Exact commercial | « Voir les forfaits », « Comparer les packs », « Commander via WhatsApp » |
| Descriptive SEO | « Guide d'installation », « Fonctionnalités techniques », « Page produit complète » |
| Sitemap SEO labels | « Accueil TV », « Meilleur IPTV Maroc — Accueil TV », « IPTV Smart TV Maroc — Guide » |

### 3.4 Breadcrumbs

**Not implemented.** Recommendation: add BreadcrumbList JSON-LD + visible crumbs on inner pages.

### 3.5 Orphan page prevention

| Mechanism | Status |
|---|---|
| mainNav coverage | Strong for core pages |
| Footer legal links | All 7 legal pages linked |
| `/sitemap-html` | Extra crawl paths + SEO labels |
| `/sitemap.xml` | All routes included |
| Blog article URLs | **Orphan risk N/A** — pages don’t exist; listing cards only |

### 3.6 Crawl budget optimization

- Static pages → fast crawl  
- `trailingSlash: false` + www→apex → no duplicate hosts/paths  
- `robots.txt` blocks only `/api/` (no API routes currently, defensive)  
- Legal pages low priority (`0.3` yearly) to save crawl emphasis for money pages  
- Homepage `/tv` `priority: 1.0` daily; `/iptv-maroc` `0.95` weekly; `/` is omitted (301)

### 3.7 Sitemap configuration detail

**Priority tier:**

| Priority | Paths |
|---|---|
| 1.0 daily | `/tv` (`/` excluded — 301) |
| 0.95 weekly | `/iptv-maroc` |
| 0.9 weekly | `/tarifs` (`/abonnement-iptv` excluded — 301) |
| 0.8 weekly | `/fonctionnalites`, `/guide` |
| 0.7 monthly | remaining mainNav + `/sitemap-html` |
| 0.3 yearly | `/legal/*` |

`lastModified`: `new Date()` at build time for all entries.

### 3.8 robots.txt

```
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: https://ondima.ma/sitemap.xml
```

### 3.9 Canonical & social consistency

- Every `createMetadata` page sets matching `alternates.canonical`, `openGraph.url`, title, description.  
- Root layout + `/tv` page set homepage canonical to `https://ondima.ma/tv`.  
- OG image shared: `/ondima.webp` (absolute via `metadataBase`).

---

## 4. TARGETED KEYWORDS MASTER MATRIX

### 4.1 Global primary keywords (root layout)

| Keyword | Intent |
|---|---|
| IPTV Maroc | Commercial |
| abonnement IPTV Maroc | Transactional |
| meilleur IPTV Maroc | Commercial |
| fournisseur IPTV Maroc | Commercial |
| acheter IPTV Maroc | Transactional |
| recharge IPTV Maroc | Transactional |
| IPTV 4K Maroc | Commercial |
| IPTV HD Maroc | Commercial |

### 4.2 By page

#### `/tv` Homepage

| Type | Keywords |
|---|---|
| Primary | abonnement TV Maroc, IPTV Maroc Premium, abonnement IPTV Maroc |
| Secondary | +45 000 chaînes, 4K, anti-freeze, WhatsApp, Smart TV, Firestick, TV Maroc |
| LSI | streaming premium, VOD, serveurs VPS, forfaits annuels, garantie 45 jours |
| Intent | Commercial → Transactional |

#### `/iptv-maroc`

| Type | Keywords |
|---|---|
| Primary | IPTV Maroc, meilleur abonnement stable, sans coupure |
| Secondary | abonnement IPTV stable, IPTV 4K Maroc, support WhatsApp |
| Local / LSI | IPTV Casablanca, IPTV Rabat, IPTV Marrakech, IPTV Tanger, IPTV Fès, IPTV Agadir, Meknès, Oujda, Kénitra, Tétouan, Safi, El Jadida, Nador, Mohammedia |
| Intent | Informational + Commercial |

#### `/tarifs`

| Type | Keywords |
|---|---|
| Primary | abonnement IPTV Maroc, tarifs IPTV Maroc, acheter IPTV Maroc |
| Secondary | prix IPTV, Pack Pro, Ultra, VIP, 300/450/600 dhs |
| Intent | Transactional |

#### `/fonctionnalites`

| Type | Keywords |
|---|---|
| Primary | Meilleur IPTV Maroc, Serveur IPTV stable, IPTV 4K Maroc |
| Secondary | Anti-freeze 2.2, H.265, EPG, Smart-OTT, VPS |
| Intent | Informational / Commercial |

#### `/guide`

| Type | Keywords |
|---|---|
| Primary | guide installation IPTV, IPTV Smart TV Maroc |
| Secondary | IPTV Android Maroc, IPTV Firestick Maroc, IPTV Smarters Maroc, Nino Player, MAG |
| Intent | Informational |

#### `/faq`

| Type | Keywords |
|---|---|
| Primary | best IPTV, IPTV subscription UK, IPTV service providers |
| Secondary | garantie 45 jours, multi-appareils, Nino Player, débit 4K |
| Intent | Informational |

#### `/blog`

| Type | Keywords |
|---|---|
| Primary | best IPTV services 2026, IPTV subscription UK |
| Secondary | IPTV service providers, guides Firestick/Samsung, VOD VIP |
| Intent | Informational |

#### `/contact`

| Type | Keywords |
|---|---|
| Primary | contact Ondima, support WhatsApp IPTV |
| Secondary | garantie 45 jours, activation |
| Intent | Navigational / Transactional |

#### `/legal/*`

| Type | Keywords |
|---|---|
| Primary | brand + policy names (DMCA, RGPD, remboursement) |
| Intent | Navigational / Trust |

### 4.3 Intent classification summary

| Intent | Pages |
|---|---|
| **Navigational** | `/tv`, `/contact`, `/sitemap-html`, `/legal/*` |
| **Informational** | `/guide`, `/faq`, `/blog`, `/fonctionnalites`, long SEO on `/iptv-maroc` |
| **Commercial** | `/tv`, `/iptv-maroc`, `/fonctionnalites` |
| **Transactional** | `/tarifs`, `/contact` (TrialForm), WhatsApp CTAs sitewide |

---

## 5. EXTERNAL SEO & BACKLINKING FRAMEWORK (RECOMMENDED STRATEGY)

> Off-page recommendations tailored to **IPTV Maroc / streaming subscription** niche. Execute only with **compliant, non-deceptive** marketing. Avoid spammy PBNs and copyright-infringing claims.

### 5.1 Positioning for digital PR

- Brand entity: **Ondima** as Moroccan premium IPTV subscription service.  
- Differentiating angles: Anti-freeze, VPS, WhatsApp activation, 45-day refund, multi-device non-simultaneous clarity, Nino Player guides.  
- Assets to promote: `/iptv-maroc` (city SEO), `/guide` (HowTo), `/fonctionnalites` (tech), pricing comparison.

### 5.2 Recommended backlink avenues

| Channel | Tactics | Priority |
|---|---|---|
| **Local / niche directories** | High-quality Maroc business listings (NAP consistency: ondima.ma, WhatsApp) | High |
| **Guest posts** | FR tech/lifestyle blogs on Smart TV, fibre Maroc, diaspora streaming setup | High |
| **Digital PR** | Data-led pieces: “débit recommandé 4K”, “comparatif packs 2026” pitched to media | Medium |
| **YouTube / TikTok embeds** | Install tutorials linking to `/guide` | High |
| **Partner apps** | Nino Player ecosystem mentions / affiliate-style resource pages | Medium |
| **Community Q&A** | Answer installation questions with links to `/guide` (no spam) | Medium |
| **Tiered linking** | Tier-1: editorial; Tier-2: social/docs supporting Tier-1 URLs only | Low–Medium |
| **Avoid** | Mass directory spam, paid link networks, cloaking, DMCA-risk content mirrors | — |

### 5.3 Social signals & distribution playbook

1. **WhatsApp** — primary owned channel (already productized).  
2. **Facebook / Instagram** — pack creatives + Stories using pricing visuals (keep off-site assets out of `/public` if private).  
3. **YouTube** — device install series → describe `/guide` + `/tarifs`.  
4. **LinkedIn / diaspora groups** — softer brand/trust content (garantie, support).  
5. **Search Console** — submit `sitemap.xml`, monitor Coverage, Enhancement, Removals.  
6. **Brand SERP** — ensure knowledge consistency: ondima.ma, WhatsApp, guarantee wording.

### 5.4 Measurement KPIs

- Impressions/clicks for: `IPTV Maroc`, `abonnement IPTV Maroc`, city modifiers  
- Conversion: WhatsApp clicks (add event tracking if/when analytics installed)  
- Index coverage of `/iptv-maroc` and `/tarifs`  
- Referring domains growth monthly  

### 5.5 Technical off-page hygiene

- Prefer apex HTTPS links only.  
- After major content updates, request indexing for money URLs.  
- Do **not** create near-duplicate domains to “bypass” removals; fix content/legal issues instead.

---

## 6. REUSABLE TEMPLATE / BOILERPLATE CHECKLIST

Use this checklist to replicate the **Ondima architecture** for a future site.

### Phase A — Scaffold

- [ ] Next.js 15 App Router + TypeScript strict  
- [ ] Tailwind v4 + design tokens in `globals.css`  
- [ ] `src/app/layout.tsx` with `metadataBase`, default title/description, robots, icons, `lang`  
- [ ] Alias `@/*` → `src/*`  
- [ ] `trailingSlash: false`  
- [ ] Apex domain redirects (www → non-www)  
- [ ] Deploy on Vercel (or equivalent) with Git push  

### Phase B — SEO engine

- [ ] `src/lib/metadata.ts`: `SITE_URL`, `absoluteUrl`, OG defaults, `createMetadata`  
- [ ] `src/app/sitemap.ts` with priority tiers  
- [ ] `src/app/robots.ts` with sitemap absolute URL  
- [ ] One H1 per page via `PageHero` or custom hero  
- [ ] Canonical + OG + Twitter on every page  
- [ ] Human HTML sitemap page  
- [ ] **Add JSON-LD** (Organization, WebSite, FAQPage, Product, HowTo, BreadcrumbList) — *recommended upgrade vs current Ondima gap*  

### Phase C — Layout system

- [ ] `SiteShell` = Background + Header + Footer + optional FAB  
- [ ] `mainNav` / `legalNav` single source of truth  
- [ ] Sticky header + mobile drawer  
- [ ] Primary CTA channel (WhatsApp / Calendly / checkout) centralized in `constants.ts`  
- [ ] Trust badge component for guarantee messaging  

### Phase D — Page types to clone

| Type | Template files to copy |
|---|---|
| Homepage | `src/app/tv/page.tsx` + Hero/Benefits/Features/Pricing/FAQ/LocalSeo |
| SEO landing | `/iptv-maroc` pattern: PageHero + strengths + devices + pricing + long SEO |
| Product | `/tarifs` pattern: H1 + SEO blocks + Pricing + CTA |
| Authority | `/fonctionnalites` pillars |
| HowTo | `/guide` accordions + recommended apps |
| FAQ | `/faq` + Accordion |
| Contact | cards + form → messaging deep link |
| Legal | `LegalPageContent` + `legal.ts` dictionary |

### Phase E — Content & conversion

- [ ] Pricing data module (`pricing.ts`)  
- [ ] FAQ module  
- [ ] Installation steps module  
- [ ] Reviews / social proof (cards and/or chat UI)  
- [ ] No free-trial claims unless true; sync legal + UI copy  
- [ ] Device policy wording (non-simultaneous) consistent everywhere  

### Phase F — Performance

- [ ] `next/font` with swap  
- [ ] `next/image` for LCP assets + `priority` on hero  
- [ ] Prefer WebP/AVIF  
- [ ] Minimize client components  
- [ ] Respect `prefers-reduced-motion` for decorative animations  

### Phase G — Launch QA

- [ ] Build succeeds (`npm run build`)  
- [ ] All nav links 200  
- [ ] Canonicals match live URLs  
- [ ] Sitemap lists every public page once  
- [ ] robots.txt allows public content  
- [ ] One H1 check per page  
- [ ] Mobile CTA reachable (FAB + header)  
- [ ] Search Console property + sitemap submit  
- [ ] OG debugger preview  

### Phase H — Post-launch SEO ops

- [ ] Expand blog into real `[slug]` SSG articles  
- [ ] Add breadcrumbs + schema  
- [ ] Unique OG images per money page  
- [ ] Track WhatsApp CTA clicks  
- [ ] Quarterly keyword refresh of long SEO sections  

---

## APPENDIX A — Full public URL inventory

| URL | Priority tier |
|---|---|
| https://ondima.ma/tv | 1.0 |
| https://ondima.ma | 301 → /tv (not in sitemap) |
| https://ondima.ma/iptv-maroc | 0.95 |
| https://ondima.ma/tarifs | 0.9 |
| https://ondima.ma/abonnement-iptv | 301 → /tarifs (not in sitemap) |
| https://ondima.ma/fonctionnalites | 0.8 |
| https://ondima.ma/guide | 0.8 |
| https://ondima.ma/faq | 0.7 |
| https://ondima.ma/blog | 0.7 |
| https://ondima.ma/contact | 0.7 |
| https://ondima.ma/sitemap-html | 0.7 |
| https://ondima.ma/legal/mentions-legales | 0.3 |
| https://ondima.ma/legal/conditions-utilisation | 0.3 |
| https://ondima.ma/legal/politique-utilisation-acceptable | 0.3 |
| https://ondima.ma/legal/conformite-rgpd | 0.3 |
| https://ondima.ma/legal/politique-dmca | 0.3 |
| https://ondima.ma/legal/politique-confidentialite | 0.3 |
| https://ondima.ma/legal/remboursement-et-retour | 0.3 |
| https://ondima.ma/sitemap.xml | system |
| https://ondima.ma/robots.txt | system |

## APPENDIX B — Component inventory (marketing)

`AmbientBackground`, `Header`, `Footer`, `Logo`, `WhatsAppFab`, `Hero`, `HeroVisual`, `Benefits`, `Features`, `Pricing`, `PricingCard`, `PricingCompare`, `TrustBadge`, `WhyChooseIptv`, `TrialForm`, `Reviews`, `InstallationGuide`, `RecommendedApps`, `NinoPlayerQuickGuide`, `Support`, `FAQ`, `LocalSeo`, `CTA` (present, unused on homepage), `PageHero`, `SiteShell`, `SeoContentBlock`, `LegalPageContent`, `Accordion`, `WhatsAppReviews`.

## APPENDIX C — Lib / content modules

`constants`, `metadata`, `navigation`, `pricing`, `faq`, `reviews`, `installation`, `fonctionnalites`, `seo-content`, `legal`, `blog`, `local-seo`, `iptv-apps`, `iptv-maroc`, `whatsapp-reviews`.

---

**End of masterplan.**  
This document is the single source of truth for reproducing Ondima’s architecture and SEO system, including known gaps (JSON-LD, blog article routes, breadcrumbs) to prioritize in future iterations.
