import Link from "next/link";
import { ArrowUpRight, Trophy, ExternalLink, Github } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

export function Projects({ t }: { t: Content["projects"] }) {
  return (
    <Section id="projects">
      <SectionHeading index="02" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="flex flex-col gap-6">
        {t.items.map((item, i) => (
          <Reveal key={item.title} variant="up" delay={i * 90}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-white/20 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {item.badge ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-[11px] font-medium text-amber-300">
                    <Trophy className="h-3 w-3" />
                    {item.badge}
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  {t.liveBadge}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  >
                    {item.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                  {item.githubUrl ? (
                    <Link
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      {t.codeCta}
                    </Link>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 max-w-3xl text-balance text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {item.pages.length > 0 ? (
                <>
                  <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-widest text-accent-soft/80">
                    {item.pagesLabel}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {item.pages.map((page, idx) => (
                      <Reveal as="div" key={page.url} variant="up" delay={idx * 90}>
                        <Link
                          href={page.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/page flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
                        >
                          <span className="truncate text-sm font-medium text-white">{page.name}</span>
                          <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-hover/page:-translate-y-0.5 group-hover/page:translate-x-0.5 group-hover/page:text-accent-soft" />
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
