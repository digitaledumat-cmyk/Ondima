interface SeoContentBlockProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

export default function SeoContentBlock({
  title,
  paragraphs,
  className = "",
}: SeoContentBlockProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-panel p-6 sm:p-8">
          <p className="mb-5 text-lg font-semibold text-white">{title}</p>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
