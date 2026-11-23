"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Content, Lang } from "@/lib/content";
import { EASE } from "./motion";

export function Navbar({ lang, t }: { lang: Lang; t: Content["nav"] }) {
  const links = [
    { href: "#gcp", label: t.gcp },
    { href: "#work", label: t.work },
    { href: "#experience", label: t.experience },
    { href: "#automations", label: t.automations },
    { href: "#stack", label: t.stack },
  ];

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    if (y < 400) setActive(null);
    setHidden(y > 480 && y > prev && !open);
  });

  useEffect(() => {
    const ids = ["gcp", "work", "projects", "experience", "automations", "stack"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id === "projects" ? "work" : e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const pill = hover ?? active;

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -90 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? "border-b border-line bg-paper/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="group flex items-baseline gap-1.5 text-[15px] font-medium tracking-tight">
            Daniel Tafur
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          </a>

          <div className="hidden items-center md:flex" onMouseLeave={() => setHover(null)}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHover(link.href)}
                className={`relative px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  active === link.href ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {pill === link.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-paper-deep"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm text-paper transition-transform duration-300 hover:-translate-y-px sm:inline-flex"
            >
              {t.contact}
            </a>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-paper md:hidden"
            >
              <motion.span animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-ink" />
              <motion.span animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-ink" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-14 text-paper md:hidden"
          >
            {[...links, { href: "#contact", label: t.contact }].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease: EASE }}
                className="flex items-baseline gap-4 border-b border-white/10 py-4 font-serif text-4xl"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
