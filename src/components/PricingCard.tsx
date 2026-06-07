"use client";

import type { PricingPlan } from "@/lib/pricing";
import { WHATSAPP_URL } from "@/lib/constants";

const accentMap = {
  violet: {
    gradient: "from-violet-600/25 to-violet-900/10",
    price: "text-violet-400",
    dot: "bg-violet-500",
    check: "text-violet-400",
  },
  cyan: {
    gradient: "from-cyan-600/25 to-cyan-900/10",
    price: "text-cyan-400",
    dot: "bg-cyan-500",
    check: "text-cyan-400",
  },
  featured: {
    gradient: "from-violet-600/30 via-cyan-600/20 to-violet-900/10",
    price: "neon-text",
    dot: "bg-gradient-to-r from-violet-500 to-cyan-400",
    check: "text-cyan-400",
  },
};

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const accent = accentMap[plan.accent];

  return (
    <article
      className={`glow-border group relative flex flex-col rounded-3xl transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] ${
        plan.isFeatured
          ? "z-10 bg-gradient-to-b from-violet-600/[0.12] via-void-elevated to-void-elevated shadow-2xl shadow-violet-500/15 lg:-translate-y-4 lg:scale-[1.03]"
          : "glass-panel"
      }`}
    >
      {plan.isFeatured && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <span className="featured-badge inline-flex items-center gap-1.5 rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Featured · VIP
          </span>
        </div>
      )}

      <div className={`rounded-t-3xl bg-gradient-to-br ${accent.gradient} p-8 pb-6`}>
        <p className="mb-1 text-xs font-medium tracking-widest text-zinc-500 uppercase">
          Pack {plan.id === "essentiel" ? "1" : plan.id === "ultra" ? "2" : "3"}
        </p>
        <p className="mb-2 text-xl font-bold text-white">{plan.name}</p>
        <p className="text-sm leading-relaxed text-zinc-400">{plan.tagline}</p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className={`text-5xl font-bold ${accent.price}`}>
            {plan.price}
          </span>
          <span className="text-lg text-zinc-500">
            {plan.currency}
            <span className="text-sm">{plan.period}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8 pt-6">
        <ul className="mb-8 flex-1 space-y-3">
          {plan.features.map((feature) => {
            const isWarning = feature.includes("Connexion non simultanée");
            return (
              <li
                key={feature}
                className={`flex items-start gap-3 text-sm ${
                  isWarning
                    ? "rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-amber-200/90"
                    : "text-zinc-400"
                }`}
              >
                {isWarning ? (
                  <span className="text-xs font-semibold leading-relaxed">{feature}</span>
                ) : (
                  <>
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${accent.check}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
            plan.isFeatured
              ? "neon-cta text-white"
              : "border border-white/15 bg-white/5 text-zinc-200 hover:border-violet-500/40 hover:bg-violet-600/10 hover:text-white"
          }`}
        >
          Commander — {plan.price} dhs
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-violet-600/8 via-transparent to-cyan-500/8" />
      </div>
    </article>
  );
}
