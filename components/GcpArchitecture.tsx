import Link from "next/link";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

export function GcpArchitecture({ t }: { t: Content["gcp"] }) {
  return (
    <Section id="gcp">
      <SectionHeading index="01" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <div className="flex flex-col gap-8">
        {t.items.map((item, i) => (
          <Reveal key={item.repo} variant="up" delay={i * 90}>
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 transition-all duration-300 hover:border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="relative bg-black lg:col-span-3">
                  <video
                    className="aspect-video h-full w-full object-cover"
                    controls
                    preload="none"
                    playsInline
                    poster={item.poster}
                    aria-label={`${t.watch}: ${item.title}`}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                <div className="flex flex-col p-5 sm:p-7 lg:col-span-2">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-[11px] font-medium text-sky-300">
                    <PlayCircle className="h-3 w-3" />
                    {t.watch}
                  </span>
                  <h3 className="mt-4 text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.tagline}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-zinc-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                    >
                      {t.live}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                    <Link
                      href={item.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      {t.code}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4 sm:px-7">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
