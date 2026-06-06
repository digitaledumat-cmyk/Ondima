const steps = [
  {
    step: "01",
    title: "Choisissez votre forfait",
    text: "Sélectionnez parmi nos 3 packs annuels Ondima selon vos besoins : essentiel, famille ou expérience VIP 4K.",
  },
  {
    step: "02",
    title: "Commandez via WhatsApp",
    text: "Contactez notre équipe en un clic. Pas de paiement caché sur le site — activation transparente et rapide.",
  },
  {
    step: "03",
    title: "Profitez immédiatement",
    text: "Recevez vos accès, installez l'application et lancez vos chaînes, films et matchs en HD ou 4K UHD.",
  },
];

const highlights = [
  "Télé live, sport & VOD sur Smart TV, Firestick ou Box Android",
  "Forfaits annuels dès 249 DH — sans mensualité surprise",
  "Essai 24h gratuit & garantie satisfait 45 jours",
  "Serveurs VPS ultra-rapides avec technologie Anti-freeze",
];

export default function Benefits() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
              Abonnement IPTV Maroc
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ce que vous obtenez avec{" "}
              <span className="neon-text">Ondima</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-400">
              Un abonnement IPTV Maroc premium, c&apos;est la télé en direct, le
              sport et une VOD colossale sur tous vos écrans. Trois formules
              annuelles, activation via WhatsApp et accompagnement technique en
              français 24h/24.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-xs text-violet-400">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {steps.map((item) => (
              <article
                key={item.step}
                className="glow-border group glass-panel flex gap-5 rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-white/[0.06]"
              >
                <span className="text-3xl font-black text-violet-500/40 transition-colors group-hover:text-violet-400">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
