"use client";

import { usePathname } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";
import { HOME_PATH, PRICING_PATH } from "@/lib/constants";
import { breadcrumbsFor } from "@/lib/geo";
import {
  breadcrumbJsonLd,
  contactJsonLd,
  faqJsonLd,
  homeWebPageJsonLd,
  offerCatalogJsonLd,
  serviceJsonLd,
} from "@/lib/json-ld";

export default function PageJsonLd() {
  const pathname = usePathname();
  if (!pathname) return null;

  const graph: object[] = [];

  if (pathname !== HOME_PATH && pathname !== "/") {
    graph.push(breadcrumbJsonLd(breadcrumbsFor(pathname)));
  }

  if (pathname === HOME_PATH) graph.push(homeWebPageJsonLd());
  if (pathname === "/iptv-maroc") graph.push(serviceJsonLd());
  if (pathname === PRICING_PATH) graph.push(offerCatalogJsonLd());
  if (pathname === HOME_PATH || pathname === "/faq") graph.push(faqJsonLd());
  if (pathname === "/contact") graph.push(contactJsonLd());

  if (graph.length === 0) return null;

  return (
    <>
      {graph.map((data, index) => (
        <JsonLd key={`${pathname}-${index}`} data={data} />
      ))}
    </>
  );
}
