import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import { YouTubeFacade } from "./YouTubeFacade";
import type { Content } from "@/lib/content";

export function FeaturedProject({ t }: { t: Content["featured"] }) {
  return (
    <Section id="work">
      <SectionHeading index="02" label={t.badge} title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          {t.youtubeId ? <YouTubeFacade id={t.youtubeId} title={t.title} /> : null}
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <h3 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight">{t.title}</h3>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="mt-5 text-pretty text-[15px] leading-relaxed text-ink-muted">{t.description}</p>
            </FadeIn>
            <ul className="mt-7">
              {t.highlights.map((h, i) => (
                <FadeIn as="li" key={h} delay={0.1 + i * 0.06} className="flex gap-4 border-t border-line py-3 text-sm text-ink-soft">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {h}
                </FadeIn>
              ))}
            </ul>
            <FadeIn delay={0.3}>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper"
              >
                {t.visit}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
