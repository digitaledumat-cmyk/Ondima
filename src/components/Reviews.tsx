import { REVIEW_COUNT, reviews } from "@/lib/reviews";

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-amber-400" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

const langLabels = { MA: "🇲🇦 Maroc", FR: "🇫🇷 France", ES: "🇪🇸 Espagne" };

export default function Reviews() {
  return (
    <section id="avis" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2">
            <Stars />
            <span className="text-sm font-bold text-white">
              {REVIEW_COUNT} avis · 5 étoiles
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Avis de nos Clients : Pourquoi nous sommes le Fournisseur IPTV Maroc de Confiance
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">
            Avis clients internationaux — Maroc, France et Espagne
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="glow-border group glass-panel rounded-2xl p-6 transition-all duration-400 hover:scale-[1.02] hover:bg-white/[0.06]"
            >
              <div className="mb-3 flex items-center justify-between">
                <Stars />
                <span className="text-xs text-zinc-600">{review.date}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-zinc-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                <span className="text-lg">{review.flag}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-zinc-500">
                    {review.city} · {langLabels[review.lang]}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
