interface TrustBadgeProps {
  className?: string;
  compact?: boolean;
}

export default function TrustBadge({ className = "", compact = false }: TrustBadgeProps) {
  return (
    <div
      className={`glow-border inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-600/10 to-cyan-600/5 px-5 py-3.5 ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
        <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <p className={`font-bold text-white ${compact ? "text-sm" : "text-base"}`}>
          Garantie 45 jours
        </p>
        <p className={`text-emerald-400/90 ${compact ? "text-xs" : "text-sm"}`}>
          Satisfait ou Remboursé Totalement
        </p>
      </div>
    </div>
  );
}
