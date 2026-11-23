import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { FadeIn } from "./motion";
import { Expandable } from "./Expandable";
import type { Content } from "@/lib/content";

function Frame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="overflow-hidden rounded-[14px] bg-ink">
      <figcaption className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 font-mono text-[11px] text-white/60">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </span>
        {label}
      </figcaption>
      <Image src={src} alt={alt} width={1180} height={560} unoptimized className="h-auto w-full" />
    </figure>
  );
}

export function Automations({ t, viewLabel }: { t: Content["automations"]; viewLabel: string }) {
  return (
    <Section id="automations">
      <SectionHeading index="05" label={t.metaBadge} title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <FadeIn>
        <p className="mb-14 max-w-3xl border-l-2 border-accent pl-5 text-pretty text-sm leading-relaxed text-ink-muted">
          {t.note}
        </p>
      </FadeIn>

      <div className="border-b border-line">
        {t.projects.map((project, i) => (
          <FadeIn key={project.title}>
            <article className="grid grid-cols-12 gap-x-6 gap-y-5 border-t border-line py-10">
              <div className="col-span-12 md:col-span-4">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-balance text-2xl font-medium leading-tight tracking-tight">{project.title}</h3>
                {project.live ? (
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t.productionBadge}
                  </span>
                ) : null}
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-pretty text-[15px] leading-relaxed text-ink-soft">{project.description}</p>
                <p className="mt-4 font-mono text-[11px] text-ink-faint">{project.stack.join("  /  ")}</p>

                {project.live ? (
                  <div className="mt-6">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{t.deployHeading}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      {t.deployments.map((dep) => (
                        <a
                          key={dep.url}
                          href={dep.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-2 border-t border-line py-3 pr-3 sm:border-r sm:pl-3 sm:first:pl-0 sm:last:border-r-0"
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium">{dep.name}</span>
                            <span className="block truncate text-xs text-ink-muted">{dep.label}</span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-6">
                  <Expandable label={viewLabel}>
                    <div className="flex flex-col gap-4">
                      <Frame src={project.flow} alt={`n8n — ${project.title}`} label={t.flowLabel} />
                      {project.live && project.mockup ? (
                        <Frame src={project.mockup} alt={t.mockupLabel} label={t.mockupLabel} />
                      ) : null}
                    </div>
                  </Expandable>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
