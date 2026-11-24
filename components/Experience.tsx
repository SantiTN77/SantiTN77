import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import type { Content } from "@/lib/content";

export function Experience({ t }: { t: Content["experience"] }) {
  return (
    <Section id="experience">
      <SectionHeading index="04" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="border-b border-line">
        {t.items.map((item) => (
          <FadeIn key={item.company}>
            <article className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-line py-10">
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-3xl font-medium leading-none tracking-tight md:text-4xl">{item.company}</h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.role}</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">{item.description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-ink-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
