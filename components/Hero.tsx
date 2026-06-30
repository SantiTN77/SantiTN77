import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import type { Content } from "@/lib/content";

export function Hero({ t }: { t: Content["hero"] }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <div className="opacity-0-start animate-fade-up mb-5">
          <div className="animate-bob relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/15 ring-4 ring-accent/20 sm:h-28 sm:w-28">
            <Image
              src="/profile.jpg"
              alt={t.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="opacity-0-start animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-accent-soft" />
          {t.badge}
        </div>

        <h1 className="opacity-0-start animate-fade-up delay-1 mt-7 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          {t.name}
        </h1>

        <p className="opacity-0-start animate-fade-up delay-2 mt-5 text-balance text-lg font-medium text-zinc-300 sm:text-xl md:text-2xl">
          {t.role}
        </p>

        <p className="opacity-0-start animate-fade-up delay-3 mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          {t.bio}
        </p>

        <div className="opacity-0-start animate-fade-up delay-4 mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href={t.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200 sm:w-auto"
          >
            <Github className="h-4 w-4" />
            {t.github}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={t.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            <Linkedin className="h-4 w-4" />
            {t.linkedin}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
