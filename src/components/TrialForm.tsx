"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import TrustBadge from "./TrustBadge";

const plans = [
  { id: "essentiel", label: "Accès Essentiel — 249 dhs/an" },
  { id: "ultra", label: "Expérience Ultra — 349 dhs/an" },
  { id: "vip", label: "Exclusif Suprême VIP — 449 dhs/an" },
];

const countryCodes = [
  { code: "+212", country: "Maroc", flag: "🇲🇦" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+34", country: "Espagne", flag: "🇪🇸" },
  { code: "+32", country: "Belgique", flag: "🇧🇪" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+39", country: "Italie", flag: "🇮🇹" },
  { code: "+49", country: "Allemagne", flag: "🇩🇪" },
];

function detectDefaultCode(): string {
  if (typeof navigator === "undefined") return "+212";
  const lang = navigator.language.toLowerCase();
  if (lang.includes("fr")) return "+33";
  if (lang.includes("es")) return "+34";
  if (lang.includes("ma") || lang.includes("ar")) return "+212";
  return "+212";
}

export default function TrialForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+212");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("ultra");

  useEffect(() => {
    setCountryCode(detectDefaultCode());
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const planLabel = plans.find((p) => p.id === plan)?.label ?? plan;
    const message = [
      "Bonjour Ondima 👋",
      "Je souhaite activer mon *essai 24h gratuit*.",
      "",
      `*Prénom :* ${firstName}`,
      `*Nom :* ${lastName}`,
      `*Téléphone :* ${countryCode} ${phone}`,
      `*Formule souhaitée :* ${planLabel}`,
      "",
      "Merci de m'envoyer les identifiants d'accès.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="essai" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
              Essai 24h Gratuit
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Demandez Votre Test IPTV 24h Gratuit et Sans Coupure
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Remplissez le formulaire et envoyez votre demande directement sur
              WhatsApp. Notre équipe active votre essai en quelques minutes.
            </p>
            <TrustBadge />
          </div>

          <form
            onSubmit={handleSubmit}
            className="glow-border rounded-3xl glass-panel p-6 sm:p-8"
          >
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Prénom *
                </label>
                <input
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Nom *
                </label>
                <input
                  id="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-zinc-400">
                Numéro de téléphone *
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-28 shrink-0 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-sm text-white outline-none focus:border-violet-500/50 sm:w-32"
                  aria-label="Indicatif pays"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code} className="bg-void">
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d\s]/g, ""))}
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  placeholder="6XX XXX XXX"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="plan" className="mb-1.5 block text-xs font-medium text-zinc-400">
                Formule souhaitée *
              </label>
              <select
                id="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-500/50"
              >
                {plans.map((p) => (
                  <option key={p.id} value={p.id} className="bg-void">
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn-whatsapp flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-sm font-bold text-white sm:text-base"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Envoyer via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-zinc-600">
              Activation instantanée · Aucun paiement requis pour l&apos;essai
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
