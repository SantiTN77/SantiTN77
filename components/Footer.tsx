import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-[480px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div>
          <p className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Let&rsquo;s build something autonomous.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Open to AI automation and full-stack engineering collaborations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>

        <Link
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <p className="mt-4 font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
