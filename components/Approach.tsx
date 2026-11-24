import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import type { Content } from "@/lib/content";

export function Approach({ t }: { t: Content["approach"] }) {
  return (
    <Section id="approach">
      <SectionHeading index="03" title={t.sectionTitle} subtitle={t.sectionSubtitle} />
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, i) => (
          <FadeIn key={item.k} delay={i * 0.08} className="group border-t border-ink pb-10 pt-5">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-serif text-3xl leading-[1.05] transition-colors duration-500 group-hover:text-accent">
              {item.k}
            </h3>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-muted">{item.d}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
