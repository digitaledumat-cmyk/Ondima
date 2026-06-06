import { pricingPlans } from "@/lib/pricing";
import TrustBadge from "./TrustBadge";
import PricingCard from "./PricingCard";
import PricingCompare from "./PricingCompare";

interface PricingProps {
  showHeader?: boolean;
  showTrustBadge?: boolean;
  sectionId?: string;
}

export default function Pricing({
  showHeader = true,
  showTrustBadge = true,
  sectionId = "tarifs",
}: PricingProps) {
  return (
    <section
      id={sectionId || undefined}
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTrustBadge && (
          <div className="mb-8 flex justify-center">
            <TrustBadge />
          </div>
        )}
        {showHeader && (
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
              Nos Tarifs
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nos Formules d&apos;Abonnement IPTV Maroc : Choisissez Votre Pack
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500">
              Trois formules Ondima, une activation via WhatsApp. Pas de
              mensualité cachée — choisissez le pack adapté à votre foyer.
            </p>
          </div>
        )}

        <div className="grid items-center gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <PricingCompare />
      </div>
    </section>
  );
}
