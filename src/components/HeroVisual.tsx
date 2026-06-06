import Image from "next/image";
import heroImage from "@/public/ondima.webp";

export default function HeroVisual() {
  return (
    <div className="glow-border-purple relative isolate overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] min-h-[320px] w-full overflow-hidden rounded-2xl sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src={heroImage}
          alt="Ondima IPTV Maroc Premium — Streaming 4K stable et abonnement IPTV 2026"
          fill
          priority
          className="rounded-2xl object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
