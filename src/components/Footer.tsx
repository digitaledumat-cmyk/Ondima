import Link from "next/link";

import Logo from "@/components/Logo";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import { legalNav, mainNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void-elevated/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Logo size="md" showDomain />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              IPTV Maroc Premium 2026 — +45 000 chaînes, VOD 4K/UHD et serveurs VPS
              ultra-rapides. Le divertissement réinventé par Ondima.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">Navigation</p>
            <ul className="space-y-2.5">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sitemap-html" className="text-sm text-zinc-500 transition-colors hover:text-white">
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">Légal</p>
            <ul className="space-y-2.5">
              {legalNav.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">Contact</p>
            <p className="text-sm text-zinc-500">WhatsApp 24h/24</p>
            <p className="mt-1 text-sm font-medium text-cyan-400">{WHATSAPP_DISPLAY}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="neon-cta mt-4 inline-flex rounded-full px-5 py-2.5 text-xs font-semibold text-white">
              Commander maintenant
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Ondima.ma — Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-zinc-600 hover:text-zinc-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
