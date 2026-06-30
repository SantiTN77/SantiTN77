import Link from "next/link";
import { ArrowUpRight, Play, Mic, ScanEye } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import type { Content } from "@/lib/content";

function VideoPlayer({ t }: { t: Content["featured"] }) {
  if (t.youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
          title="Tafvox demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="group/play relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover/play:scale-105 group-hover/play:border-white/30">
          <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
        </div>
        <p className="font-mono text-xs text-zinc-400">{t.comingSoon}</p>
      </div>
    </div>
  );
}

export function FeaturedProject({ t }: { t: Content["featured"] }) {
  return (
    <Section id="work">
      <SectionHeading index="01" title={t.sectionTitle} subtitle={t.sectionSubtitle} />

      <Reveal variant="scale">
        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-2 transition-all duration-300 hover:border-white/20">
          <div className="rounded-xl bg-zinc-950/40 p-5 sm:p-7 md:p-9">
            {/* Video container card */}
            <div className="relative rounded-2xl border border-white/10 bg-black/40 p-2.5 shadow-2xl shadow-black/50">
              <VideoPlayer t={t} />
              {t.youtubeId ? (
                <p className="mt-2.5 px-1 font-mono text-[11px] text-zinc-500">
                  * {t.videoNote}
                </p>
              ) : null}
            </div>

            {/* Project meta */}
            <div className="mt-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-soft/80">
                    {t.badge}
                  </span>
                  <h3 className="mt-2 text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {t.title}
                  </h3>
                </div>

                <Link
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  {t.visit}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>

              <p className="max-w-3xl text-balance text-sm leading-relaxed text-zinc-400 sm:text-base">
                {t.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {t.highlights.map((highlight, i) => (
                  <Reveal as="span" key={highlight} variant="up" delay={i * 80}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-300 hover:border-white/20 hover:text-white">
                      {i === 0 ? (
                        <Mic className="h-3 w-3 text-accent-soft" />
                      ) : i === 1 ? (
                        <ScanEye className="h-3 w-3 text-accent-soft" />
                      ) : null}
                      {highlight}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
