import { ArrowUpRight } from "lucide-react";
import { FadeIn, Magnetic, SplitText } from "./motion";
import type { Content } from "@/lib/content";

export function Footer({ t }: { t: Content["footer"] }) {
  return (
    <footer id="contact" className="blueprint-dark relative overflow-hidden bg-navy-deep text-paper">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-24 sm:px-8 md:pt-36">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">{t.sub}</p>

        <h2 className="mt-6 text-[12vw] leading-[0.95] tracking-tightest md:text-[110px]">
          <SplitText text={t.headline} className="font-medium" emClassName="font-serif italic font-light text-accent-bright" em={t.headline.split(" ").slice(-1)} />
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={t.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-base font-medium text-navy transition-colors hover:bg-accent-soft"
            >
              {t.getInTouch}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </a>
          </Magnetic>
          <a
            href={t.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-base text-paper/80 hover:text-paper"
          >
            github.com/SantiTN77 ↗
          </a>
        </div>

        <FadeIn className="mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6 font-mono text-[11px] text-paper/50">
          <span>
            © {new Date().getFullYear()} {t.name}. {t.built}
          </span>
          <a href="#top" className="link-underline hover:text-paper">
            ↑ Top
          </a>
        </FadeIn>
      </div>
    </footer>
  );
}
