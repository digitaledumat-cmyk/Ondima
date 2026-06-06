interface LogoProps {
  size?: "sm" | "md" | "lg";
  showDomain?: boolean;
  className?: string;
}

function PowerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v6" />
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    </svg>
  );
}

const sizeMap = {
  sm: {
    on: "h-6 gap-1 px-1.5 text-[10px]",
    icon: "h-2.5 w-2.5",
    dima: "text-sm",
    domain: "text-[10px]",
  },
  md: {
    on: "h-7 gap-1 px-2 text-xs",
    icon: "h-3 w-3",
    dima: "text-lg sm:text-xl",
    domain: "text-xs",
  },
  lg: {
    on: "h-9 gap-1.5 px-2.5 text-sm",
    icon: "h-3.5 w-3.5",
    dima: "text-2xl sm:text-3xl",
    domain: "text-sm",
  },
};

export default function Logo({
  size = "md",
  showDomain = false,
  className = "",
}: LogoProps) {
  const s = sizeMap[size];

  return (
    <span
      className={`group/logo inline-flex items-center gap-1.5 sm:gap-2 ${className}`}
      aria-label="OnDima"
    >
      {/* "On" — interrupteur allumé */}
      <span
        className={`logo-on-switch relative inline-flex items-center rounded-md border font-black tracking-tight uppercase ${s.on}`}
      >
        <span className="logo-on-glow absolute inset-0 rounded-md" aria-hidden />
        <PowerIcon className={`logo-on-icon relative z-10 shrink-0 ${s.icon}`} />
        <span className="logo-on-text relative z-10 leading-none">On</span>
        <span className="logo-on-dot absolute -top-0.5 -right-0.5 z-10 h-1.5 w-1.5 rounded-full" aria-hidden />
      </span>

      {/* "Dima" — premium argenté */}
      <span className={`logo-dima font-semibold tracking-tight ${s.dima}`}>
        Dima
      </span>

      {showDomain && (
        <span className={`logo-domain font-medium ${s.domain}`}>.ma</span>
      )}
    </span>
  );
}
