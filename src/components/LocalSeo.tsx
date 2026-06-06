import { buildLocalSeoParagraph, localRegions } from "@/lib/local-seo";

export default function LocalSeo() {
  return (
    <section id="villes" className="relative border-t border-white/5 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">
            Couverture internationale
          </p>
          <p className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            IPTV premium disponible au{" "}
            <span className="neon-text">Maroc, en France et en Espagne</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Ondima.ma dessert les principales métropoles avec des serveurs OTT
            optimisés localement. Connexion stable, faible latence et qualité
            4K UHD partout où vous vous trouvez.
          </p>
        </div>

        <div className="space-y-10">
          {localRegions.map((region) => (
            <div key={region.country}>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">{region.flag}</span>
                <p className="text-xl font-bold text-white">{region.country}</p>
              </div>
              <p className="mb-4 text-sm text-zinc-400">{region.intro}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {region.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-violet-500/25 bg-violet-600/10 px-3.5 py-1.5 text-xs font-medium text-violet-200"
                  >
                    IPTV {city}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {region.cities.map((city) => (
                  <article
                    key={`${region.country}-${city}`}
                    className="glass-panel rounded-xl p-4 transition-colors hover:bg-white/[0.04]"
                  >
                    <p className="mb-1 text-sm font-semibold text-white">
                      Meilleur IPTV à {city}
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {buildLocalSeoParagraph(city, region.country)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
