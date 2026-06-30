"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages, Check, ChevronDown } from "lucide-react";
import { LANGS, type Lang } from "@/lib/content";

const META: Record<Lang, { label: string; short: string; flag: string }> = {
  en: { label: "English", short: "EN", flag: "🇺🇸" },
  es: { label: "Español", short: "ES", flag: "🇪🇸" },
};

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const switchTo = (code: Lang) => {
    if (code === lang) return setOpen(false);
    const segments = pathname.split("/");
    segments[1] = code; // replace the locale segment
    const next = segments.join("/") || `/${code}`;
    router.push(next);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
      >
        <Languages className="h-4 w-4 text-accent-soft" />
        <span className="font-mono text-xs">{META[lang].short}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 p-1 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {LANGS.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === lang}
                onClick={() => switchTo(code)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 ${
                  code === lang
                    ? "bg-white/5 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden>{META[code].flag}</span>
                  {META[code].label}
                </span>
                {code === lang ? (
                  <Check className="h-3.5 w-3.5 text-accent-soft" />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
