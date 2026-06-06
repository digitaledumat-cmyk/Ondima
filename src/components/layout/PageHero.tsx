interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative border-b border-white/5 pt-28 pb-14">
      <div className="hero-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-violet-400 uppercase">
          {label}
        </p>
        <p className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </p>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
