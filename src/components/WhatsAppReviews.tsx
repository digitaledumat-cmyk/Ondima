"use client";

import { whatsappReviewBubbles } from "@/lib/whatsapp-reviews";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Bubble({
  from,
  name,
  text,
  time,
}: {
  from: "client" | "ondima";
  name?: string;
  text: string;
  time: string;
}) {
  const isOndima = from === "ondima";

  return (
    <div
      className={`flex w-full ${isOndima ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[88%] rounded-xl px-3 py-2 shadow-sm ${
          isOndima
            ? "rounded-tr-sm bg-[#005c4b] text-[#e9edef]"
            : "rounded-tl-sm bg-[#202c33] text-[#e9edef]"
        }`}
      >
        {!isOndima && name && (
          <p className="mb-0.5 text-[11px] font-semibold text-[#53bdeb]">
            {name}
          </p>
        )}
        {isOndima && (
          <p className="mb-0.5 text-[11px] font-semibold text-[#25d366]">
            Ondima Support
          </p>
        )}
        <p className="text-[13px] leading-snug whitespace-pre-wrap">{text}</p>
        <p className="mt-1 text-right text-[10px] text-[#8696a0]">{time}</p>
      </div>
    </div>
  );
}

export default function WhatsAppReviews() {
  const loop = [...whatsappReviewBubbles, ...whatsappReviewBubbles];

  return (
    <section
      id="avis-whatsapp"
      className="relative overflow-hidden border-t border-white/5 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Avis WhatsApp
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Ce que disent nos clients sur{" "}
            <span className="text-emerald-400">WhatsApp</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500">
            Extraits de conversations via WhatsApp. Laissez défiler comme sur un
            téléphone.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
          {/* Phone frame */}
          <div className="wa-phone relative shrink-0">
            <div className="wa-phone-bezel mx-auto w-[280px] overflow-hidden rounded-[2.25rem] border-[6px] border-[#1a1a1c] bg-[#0b141a] shadow-[0_0_0_2px_#333,0_25px_60px_rgba(0,0,0,0.55)] sm:w-[300px]">
              {/* Dynamic island / status */}
              <div className="relative flex h-7 items-end justify-center bg-[#0b141a] pt-1">
                <div className="h-4 w-20 rounded-full bg-black" />
              </div>

              {/* WhatsApp header */}
              <div className="flex items-center gap-3 bg-[#1f2c34] px-3 py-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a884]">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#e9edef]">
                    Ondima.ma Support
                  </p>
                  <p className="text-[11px] text-[#00a884]">en ligne</p>
                </div>
                <span className="text-xs text-[#8696a0]">⋮</span>
              </div>

              {/* Chat wallpaper + scrolling bubbles */}
              <div className="wa-chat-viewport relative h-[420px] overflow-hidden sm:h-[460px]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, #25d366 0%, transparent 40%), radial-gradient(circle at 80% 70%, #128c7e 0%, transparent 35%)",
                  }}
                  aria-hidden
                />
                <div className="wa-chat-track absolute inset-x-0 top-0 space-y-3 px-3 py-4">
                  {loop.map((bubble, i) => (
                    <Bubble
                      key={`${bubble.id}-${i}`}
                      from={bubble.from}
                      name={bubble.name}
                      text={bubble.text}
                      time={bubble.time}
                    />
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0b141a] to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b141a] to-transparent"
                  aria-hidden
                />
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 bg-[#1f2c34] px-3 py-2.5">
                <div className="flex-1 rounded-full bg-[#2a3942] px-4 py-2 text-[12px] text-[#8696a0]">
                  Message…
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a884]">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center bg-[#0b141a] py-2">
                <div className="h-1 w-28 rounded-full bg-white/25" />
              </div>
            </div>
          </div>

          {/* Side copy */}
          <div className="max-w-md text-center lg:text-left">
            <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
              Activation &amp; avis clients sur WhatsApp
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">✓</span>
                Retours clients authentiques sur WhatsApp
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">✓</span>
                Support rapide, installation guidée, packs Pro / Ultra / VIP
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">✓</span>
                Défilement automatique — survolez le téléphone pour mettre en pause
              </li>
            </ul>
            <p className="mt-6 text-xs text-zinc-600">
              Avis illustratifs basés sur les retours clients WhatsApp. L&apos;expérience
              peut varier selon la connexion internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
