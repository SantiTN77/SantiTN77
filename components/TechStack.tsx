import { Cpu, Server, Layers } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

const icons = [Cpu, Server, Layers];

export function TechStack({ t }: { t: Content["techStack"] }) {
  return (
    <Section id="stack">
      <SectionHeading
        index="04"
        title={t.sectionTitle}
        subtitle={t.sectionSubtitle}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.groups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.category} variant="up" delay={i * 110}>
              <div className="group h-full rounded-2xl border border-white/10 bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-soft transition-colors duration-300 group-hover:border-white/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    {group.category}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
