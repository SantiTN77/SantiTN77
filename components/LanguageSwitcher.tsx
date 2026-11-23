"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LANGS, type Lang } from "@/lib/content";

/** Segmented EN / ES toggle with a sliding indicator. */
export function LanguageSwitcher({ lang }: { lang: Lang }) {
  return (
    <div className="relative flex rounded-full border border-line bg-paper-card/70 p-0.5 font-mono text-[11px]">
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <Link
            key={code}
            href={`/${code}`}
            scroll={false}
            aria-current={active ? "true" : undefined}
            className={`relative z-10 rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors duration-300 ${
              active ? "text-paper" : "text-ink-muted hover:text-ink"
            }`}
          >
            {active ? (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            {code}
          </Link>
        );
      })}
    </div>
  );
}
