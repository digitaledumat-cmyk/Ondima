const features = [
  {
    icon: "📡",
    title: "+45 000 Chaînes Live",
    description:
      "Un panorama mondial de chaînes thématiques : sport, info, cinéma, divertissement et chaînes arabes premium.",
  },
  {
    icon: "🎬",
    title: "VOD XXL",
    description:
      "Des centaines de milliers de films, séries et documentaires mis à jour quotidiennement, accessibles à la demande.",
  },
  {
    icon: "✨",
    title: "4K UHD Authentique",
    description:
      "Qualité d'image cinématographique sur le pack VIP — du HD stable au Full HD et 4K selon votre forfait.",
  },
  {
    icon: "⚡",
    title: "Anti-Freeze Avancé",
    description:
      "Stabilisation intelligente des flux pour éliminer les coupures pendant les matchs et événements live critiques.",
  },
  {
    icon: "🖥️",
    title: "Multi-Écrans",
    description:
      "Smart TV, Firestick, Box Android et mobile — connectez 1 à 3 appareils selon le pack choisi.",
  },
  {
    icon: "💬",
    title: "Support WhatsApp 24/7",
    description:
      "Assistance technique en français, installation guidée et réponse prioritaire sur les forfaits Ultra et VIP.",
  },
];

export default function Features() {
  return (
    <section id="avantages" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
            Fonctionnalités
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Les Avantages d&apos;un Service IPTV Smart TV Maroc &amp; Android Premium
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500">
            Infrastructure OTT premium, serveurs VPS et technologie Anti-freeze —
            le divertissement sans compromis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={`glow-border group glass-panel rounded-2xl p-6 transition-all duration-400 hover:scale-[1.03] hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] ${
                i % 3 === 1 ? "lg:-translate-y-2" : ""
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 text-xl transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <p className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
