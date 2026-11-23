import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import type { Content } from "@/lib/content";

export function Projects({ t }: { t: Content["projects"] }) {
  return (
    <Section id="projects">
      <SectionHeading index="03" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="border-b border-line">
        {t.items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <article className="group relative grid grid-cols-12 gap-x-6 gap-y-4 border-t border-line py-9 transition-colors duration-500 hover:bg-paper-deep/60 md:px-4">
              <div className="col-span-12 flex items-start gap-4 md:col-span-5">
                <span className="mt-1.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-balance text-2xl font-medium leading-tight tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-1.5">
                    {item.title}
                  </h3>
                  {item.badge ? (
                    <span className="mt-3 inline-block rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-ink">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="col-span-12 md:col-span-5">
                <p className="text-pretty text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
                <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-faint">{item.stack.join("  /  ")}</p>
                {item.pages.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {item.pages.map((page) => (
                      <a
                        key={page.url}
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-ink-soft hover:text-ink"
                      >
                        {page.name} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="col-span-12 flex gap-2 md:col-span-2 md:flex-col md:items-end">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/l inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm text-paper"
                >
                  {item.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-expo group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
                </a>
                {item.githubUrl ? (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {t.codeCta}
                  </a>
                ) : null}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
