import { Building2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

export function Experience({ t }: { t: Content["experience"] }) {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title={t.sectionTitle}
        subtitle={t.sectionSubtitle}
      />

      <div className="flex flex-col gap-5">
        {t.items.map((item, i) => (
          <Reveal key={item.company} variant="up" delay={i * 90}>
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/50 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-soft transition-colors duration-300 group-hover:border-white/20">
                  <Building2 className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {item.company}
                    </h3>
                    <span className="font-mono text-xs text-accent-soft/80">
                      {item.role}
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl text-balance text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
