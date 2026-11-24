import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { FadeIn, Rule } from "./motion";
import { VideoStage } from "./VideoStage";
import type { Content } from "@/lib/content";

export function GcpArchitecture({ t }: { t: Content["gcp"] }) {
  return (
    <Section id="gcp">
      <SectionHeading index="01" label="Google Cloud" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="flex flex-col gap-28 md:gap-40">
        {t.items.map((item, i) => (
          <article key={item.repo} className="grid grid-cols-12 gap-x-6 gap-y-8">
            {/* title block */}
            <div className="col-span-12 grid grid-cols-12 items-end gap-x-6 gap-y-4">
              <FadeIn className="col-span-12 md:col-span-3">
                <span className="block font-mono text-[72px] font-light leading-[0.8] text-accent md:text-[96px]">
                  0{i + 1}
                </span>
              </FadeIn>
              <div className="col-span-12 md:col-span-9">
                <FadeIn>
                  <h3 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                    {item.title}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.08}>
                  <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
                    {item.tagline}
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* stage */}
            <div className="col-span-12">
              <VideoStage src={item.video} poster={item.poster} title={item.title} playLabel={t.play} />
            </div>

            {/* details */}
            <div className="col-span-12 md:col-span-3">
              <FadeIn className="flex flex-col gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-ink py-3 text-sm font-medium"
                >
                  {t.live}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-line-strong py-3 text-sm text-ink-soft"
                >
                  {t.code}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </FadeIn>
            </div>

            <div className="col-span-12 md:col-span-6">
              <FadeIn>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {t.highlightsLabel}
                </p>
              </FadeIn>
              <ol className="flex flex-col">
                {item.highlights.map((h, j) => (
                  <FadeIn as="li" key={h} delay={j * 0.07} className="flex gap-4 border-t border-line py-3.5 text-[15px] leading-snug text-ink-soft">
                    <span className="font-mono text-xs text-accent">{String(j + 1).padStart(2, "0")}</span>
                    {h}
                  </FadeIn>
                ))}
              </ol>
            </div>

            <div className="col-span-12 md:col-span-3">
              <FadeIn>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{t.stackLabel}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {i < t.items.length - 1 ? <Rule className="col-span-12 mt-10 md:hidden" /> : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
