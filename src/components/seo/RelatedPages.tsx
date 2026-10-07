"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { relatedLinksFor } from "@/lib/geo";

export default function RelatedPages() {
  const pathname = usePathname();
  if (!pathname || pathname.startsWith("/legal/")) return null;

  const links = relatedLinksFor(pathname);
  if (links.length === 0) return null;

  return (
    <section
      aria-labelledby="related-pages-heading"
      className="relative border-t border-white/5 py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium tracking-[0.2em] text-violet-400 uppercase">
          Maillage interne
        </p>
        <h2
          id="related-pages-heading"
          className="mb-6 text-xl font-bold text-white sm:text-2xl"
        >
          Pages connexes Ondima
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="glow-border glass-panel group flex h-full flex-col rounded-2xl p-4 transition-colors hover:bg-white/[0.04]"
              >
                <span className="text-sm font-semibold text-white group-hover:text-violet-200">
                  {link.label}
                </span>
                <span className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {link.hint}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
