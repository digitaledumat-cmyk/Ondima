"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HOME_PATH } from "@/lib/constants";
import { breadcrumbsFor } from "@/lib/geo";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === HOME_PATH || pathname === "/") return null;

  const crumbs = breadcrumbsFor(pathname);
  if (crumbs.length < 2) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={`${crumb.href}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-zinc-700" aria-hidden>
                  /
                </span>
              )}
              {last ? (
                <span className="font-medium text-zinc-300" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-violet-300"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
