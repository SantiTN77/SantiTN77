import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import type { Content } from "@/lib/content";

export function TechStack({ t }: { t: Content["techStack"] }) {
  return (
    <Section id="stack">
      <SectionHeading index="06" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-3">
        {t.groups.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08} className="border-t border-ink pt-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{group.category}</h3>
            <ul className="mt-5 pb-10">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between border-b border-line py-2.5 text-[15px] text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1">{item}</span>
                  <span className="h-1.5 w-1.5 scale-0 rounded-full bg-accent transition-transform duration-500 ease-expo group-hover:scale-100" />
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
