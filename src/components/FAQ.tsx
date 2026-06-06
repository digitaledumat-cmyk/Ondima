import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/faq";

export default function FAQ({ compact = false }: { compact?: boolean }) {
  const items = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className={`relative ${compact ? "py-12" : "py-20 lg:py-24"}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Foire Aux Questions : Tout savoir sur le Best IPTV Service
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-500">
              Tout ce que vous devez savoir avant de choisir votre forfait Ondima.
            </p>
          </div>
        )}
        <Accordion items={items} defaultOpen={faqItems[0]?.id} />
      </div>
    </section>
  );
}
