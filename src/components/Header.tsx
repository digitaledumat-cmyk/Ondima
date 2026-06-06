"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/constants";
import { legalNav, mainNav } from "@/lib/navigation";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  if (href === "/fonctionnalites") return pathname === "/fonctionnalites";
  if (href === "/guide") return pathname === "/guide" || pathname === "/guide-installation";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [plusOpen, setPlusOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "AR">("FR");

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo size="md" />
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {mainNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(pathname, link.href)
                    ? "nav-active font-medium text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
              onClick={() => setPlusOpen(!plusOpen)}
              aria-expanded={plusOpen}
            >
              Plus
              <svg className={`h-3.5 w-3.5 transition-transform ${plusOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {plusOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-white/10 bg-void-elevated py-2 shadow-2xl">
                {legalNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-xs text-zinc-400 hover:bg-white/5 hover:text-white"
                    onClick={() => setPlusOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/sitemap-html"
                  className="block px-4 py-2 text-xs text-zinc-400 hover:bg-white/5 hover:text-white"
                  onClick={() => setPlusOpen(false)}
                >
                  Plan du site
                </Link>
              </div>
            )}
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex overflow-hidden rounded-lg border border-white/10 text-xs font-medium">
            {(["FR", "AR"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 transition-colors ${
                  lang === l ? "bg-cta-orange text-white" : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden lg:inline">Essai 24h gratuit</span>
            <span className="lg:hidden">Essai 24h</span>
          </a>
          <Link href="/abonnement-iptv" className="btn-orange rounded-full px-5 py-2 text-sm font-semibold text-white">
            Commencer
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-void/95 px-4 py-4 xl:hidden">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    isActive(pathname, link.href) ? "bg-white/5 font-medium text-white" : "text-zinc-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white">
              <WhatsAppIcon className="h-4 w-4" /> Essai 24h gratuit
            </a>
            <Link href="/abonnement-iptv" className="btn-orange rounded-full py-3 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Commencer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
