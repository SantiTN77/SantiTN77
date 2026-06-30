import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

export function OtherProjects({ t }: { t: Content["otherProjects"] }) {
  return (
    <Section id="projects">
      <SectionHeading
        index="02"
        title={t.sectionTitle}
        subtitle={t.sectionSubtitle}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {t.items.map((project, i) => (
          <Reveal key={project.title} variant="up" delay={i * 90}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/50 sm:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-balance text-sm leading-relaxed text-zinc-400">
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

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  {t.visit}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  {t.code}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
