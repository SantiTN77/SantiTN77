import Image from "next/image";
import Link from "next/link";
import { Workflow, ShieldCheck, ExternalLink, Globe } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

function FlowCanvas({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2">
        <Workflow className="h-3.5 w-3.5 text-accent-soft" />
        <span className="font-mono text-[11px] text-zinc-400">{label}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1180}
        height={560}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}

export function Automations({ t }: { t: Content["automations"] }) {
  return (
    <Section id="automations">
      <SectionHeading
        index="04"
        title={t.sectionTitle}
        subtitle={t.sectionSubtitle}
      />

      {/* Confidentiality note */}
      <Reveal variant="up">
        <div className="mb-10 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/[0.06] p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
          <p className="text-balance text-sm leading-relaxed text-zinc-300">
            {t.note}
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-6">
        {t.projects.map((project) => (
          <Reveal key={project.title} variant="up">
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-white/20 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium text-accent-soft">
                  <Workflow className="h-3 w-3" />
                  {t.metaBadge}
                </span>
                {project.live ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {t.productionBadge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-3xl text-balance text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* n8n flow diagram */}
              <div className="mt-6">
                <FlowCanvas
                  src={project.flow}
                  alt={`n8n — ${project.title}`}
                  label={t.flowLabel}
                />
              </div>

              {/* Live proof for the RAG chatbot */}
              {project.live && project.mockup ? (
                <div className="mt-6">
                  <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2">
                      <Globe className="h-3.5 w-3.5 text-accent-soft" />
                      <span className="font-mono text-[11px] text-zinc-400">
                        {t.mockupLabel}
                      </span>
                    </div>
                    <Image
                      src={project.mockup}
                      alt={t.mockupLabel}
                      width={1180}
                      height={640}
                      unoptimized
                      className="h-auto w-full"
                    />
                  </div>

                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-soft/80">
                    {t.deployHeading}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {t.deployments.map((dep, i) => (
                      <Reveal as="div" key={dep.url} variant="up" delay={i * 90}>
                        <Link
                          href={dep.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/dep flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium text-white">
                              {dep.name}
                            </span>
                            <span className="block truncate text-xs text-zinc-500">
                              {dep.label}
                            </span>
                          </span>
                          <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-hover/dep:-translate-y-0.5 group-hover/dep:translate-x-0.5 group-hover/dep:text-accent-soft" />
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
