import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <div className="opacity-0-start animate-fade-up relative mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-white/15 ring-4 ring-accent/20 sm:h-28 sm:w-28">
          <Image
            src="/profile.jpg"
            alt="Daniel Tafur"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="opacity-0-start animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
          <Sparkles className="h-3.5 w-3.5 text-accent-soft" />
          Available for AI automation projects
        </div>

        <h1 className="opacity-0-start animate-fade-up delay-1 mt-7 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          {site.name}
        </h1>

        <p className="opacity-0-start animate-fade-up delay-2 mt-5 text-balance text-lg font-medium text-zinc-300 sm:text-xl md:text-2xl">
          {site.role}
        </p>

        <p className="opacity-0-start animate-fade-up delay-3 mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          {site.bio}
        </p>

        <div className="opacity-0-start animate-fade-up delay-4 mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200 sm:w-auto"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
