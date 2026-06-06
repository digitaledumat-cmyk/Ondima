import type { Metadata } from "next";

import LegalPageContent from "@/components/legal/LegalPageContent";
import SiteShell from "@/components/layout/SiteShell";
import { legalPages } from "@/lib/legal";
import { createMetadata } from "@/lib/metadata";

const page = legalPages["remboursement-et-retour"];

export const metadata: Metadata = createMetadata({
  title: `${page.title} | Ondima.ma`,
  description: page.description,
  path: "/legal/remboursement-et-retour",
});

export default function RemboursementPage() {
  return (
    <SiteShell showFab={false}>
      <main><LegalPageContent page={page} /></main>
    </SiteShell>
  );
}
