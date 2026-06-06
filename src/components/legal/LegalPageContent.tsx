import type { LegalPage } from "@/lib/legal";
import PageHero from "@/components/layout/PageHero";

interface LegalPageContentProps {
  page: LegalPage;
}

export default function LegalPageContent({ page }: LegalPageContentProps) {
  return (
    <>
      <PageHero label="Informations légales" title={page.title} description={page.description} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-xs text-zinc-600">
            Dernière mise à jour : {page.lastUpdated}
          </p>
          <div className="space-y-10">
            {page.sections.map((section) => (
              <article key={section.title}>
                <p className="mb-4 text-lg font-semibold text-white">{section.title}</p>
                <div className="space-y-3">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-zinc-400">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
