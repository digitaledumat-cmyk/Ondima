"use client";

import { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpen,
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article
            key={item.id}
            className="glow-border overflow-hidden rounded-2xl glass-panel transition-all duration-300 hover:bg-white/[0.05]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-white sm:text-base">
                {item.title}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600/10 text-violet-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">
                  {item.content}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
