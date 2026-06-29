import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

/** Consistent, minimalist section heading with a monospaced index marker. */
export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs text-accent-soft/70">{index}</span>
        <span className="h-px w-8 bg-white/15" />
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-xl text-balance text-sm text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
