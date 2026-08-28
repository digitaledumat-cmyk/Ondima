import Image from "next/image";
import Link from "next/link";

import {
  ninoPlayer,
  otherRecommendedApps,
} from "@/lib/iptv-apps";

export default function RecommendedApps() {
  return (
    <section className="mb-10">
      <div className="mb-6 text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400 uppercase">
          Applications recommandées
        </p>
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Lecteurs IPTV compatibles Ondima
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-500">
          Nino Player est notre application recommandée. Smarters, NetIPTV et
          SetIPTV restent également compatibles.
        </p>
      </div>

      <div className="glow-border-purple mb-6 overflow-hidden rounded-2xl glass-panel p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-violet-500/30 bg-violet-600/10">
              <Image
                src={ninoPlayer.logo}
                alt={`Logo ${ninoPlayer.name}`}
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-white">{ninoPlayer.name}</p>
              <span className="mt-1 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                Recommandé
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <p className="text-sm leading-relaxed text-zinc-400">
              {ninoPlayer.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={ninoPlayer.googlePlayUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-violet-500/40 hover:text-white"
              >
                Google Play
              </Link>
              <span className="inline-flex items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-200">
                APK Downloader : {ninoPlayer.androidDownloaderCode}
              </span>
              <span className="inline-flex items-center rounded-full border border-violet-500/25 bg-violet-600/10 px-3 py-2 text-xs font-medium text-violet-200">
                Fire TV Downloader : {ninoPlayer.fireTvDownloaderCode}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {otherRecommendedApps.map((app) => (
          <span
            key={app}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-400"
          >
            {app}
          </span>
        ))}
      </div>
    </section>
  );
}
