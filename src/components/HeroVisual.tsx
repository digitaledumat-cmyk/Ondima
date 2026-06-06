import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="glow-border-purple relative overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] min-h-[320px] w-full sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="/ondima.webp"
          alt="Ondima IPTV Maroc Premium — Streaming 4K stable et abonnement IPTV 2026"
          fill
          priority
          className="h-full w-full object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0c]/80" />
      </div>
    </div>
  );
}
