import Image from "next/image";
import heroImage from "@/public/ondima.webp";

export default function HeroVisual() {
  return (
    <div className="glow-border-purple w-full overflow-hidden rounded-2xl">
      <Image
        src={heroImage}
        alt="Ondima IPTV Maroc Premium — Streaming 4K stable et abonnement IPTV 2026"
        width={heroImage.width}
        height={heroImage.height}
        priority
        className="block h-auto w-full rounded-2xl"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
