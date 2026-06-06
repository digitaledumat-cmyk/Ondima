import { WHATSAPP_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glow-border relative overflow-hidden rounded-3xl glass-panel">
          <div className="absolute top-0 right-0 left-0 h-px shimmer-line" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            <p className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à activer votre accès{" "}
              <span className="neon-text">Ondima</span> ?
            </p>
            <p className="mx-auto mb-8 max-w-lg text-zinc-400">
              Contactez notre équipe pour une activation guidée et immédiate.
              Configuration complète incluse sur les packs Ultra et VIP.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-cta inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Commander via WhatsApp
              </a>
              <a
                href="mailto:contact@ondima.ma"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
              >
                contact@ondima.ma
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
