import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Content, Lang } from "@/lib/content";

export function Navbar({ lang, t }: { lang: Lang; t: Content["nav"] }) {
  const links = [
    { href: "#work", label: t.work },
    { href: "#experience", label: t.experience },
    { href: "#automations", label: t.automations },
    { href: "#stack", label: t.stack },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-5 py-2.5 backdrop-blur-xl">
        <Link
          href="#top"
          className="font-mono text-sm font-medium text-white transition-colors duration-300 hover:text-accent-soft"
        >
          DT<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} />
          <Link
            href={t.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:inline-flex"
          >
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}
