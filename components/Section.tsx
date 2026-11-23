import type { ReactNode } from "react";
import { FadeIn, Rule, SplitText } from "./motion";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  label?: string;
}

/** Editorial section header: index column + serif title + hairline. */
export function SectionHeading({ index, title, subtitle, label }: SectionHeadingProps) {
  return (
    <header className="mb-14 md:mb-20">
      <Rule />
      <div className="mt-5 grid grid-cols-12 gap-x-6 gap-y-4">
        <FadeIn className="col-span-12 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted md:col-span-3">
          <span className="text-accent">{index}</span>
          {label ? <span>{label}</span> : null}
        </FadeIn>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-balance text-4xl leading-[1.02] tracking-tightest text-ink sm:text-5xl md:text-6xl">
            <SplitText text={title} className="font-medium" />
          </h2>
          {subtitle ? (
            <FadeIn delay={0.15}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
                {subtitle}
              </p>
            </FadeIn>
          ) : null}
        </div>
      </div>
    </header>
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
      className={`mx-auto w-full max-w-[1240px] scroll-mt-24 px-5 py-24 sm:px-8 md:py-36 ${className}`}
    >
      {children}
    </section>
  );
}
