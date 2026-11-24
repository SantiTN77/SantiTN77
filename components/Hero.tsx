"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Content } from "@/lib/content";
import { EASE, Magnetic, SplitText } from "./motion";

const MARQUEE = [
  "Google ADK",
  "A2A",
  "Model Context Protocol",
  "Vertex AI · Gemini",
  "Cloud Run",
  "Firestore Vector Search",
  "Hybrid RAG",
  "LLMOps",
  "Terraform",
  "Cloud Workflows",
  "Secret Manager",
  "FinOps",
];

export function Hero({ t, stack }: { t: Content["hero"]; stack?: string[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const headY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const items = stack ?? MARQUEE;

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* meta row */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted"
        >
          <span>{t.role}</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.badge}
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          style={{ y: headY }}
          className="mt-10 text-[13vw] leading-[0.92] tracking-tightest sm:text-[10.5vw] lg:text-[136px]"
        >
          <SplitText text={t.headline.pre} className="block font-medium" immediate />
          <SplitText
            text={t.headline.em}
            className="block font-serif italic text-accent"
            immediate
          />
          <SplitText text={t.headline.post} className="block font-medium" immediate />
        </motion.h1>

        {/* lower grid */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 pb-16 md:mt-20 md:pb-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="col-span-12 md:col-span-6 lg:col-span-5"
          >
            <p className="text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">{t.bio}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#gcp"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-paper shadow-[0_10px_30px_-12px_rgba(31,79,152,0.6)] transition-colors hover:bg-navy"
                >
                  {t.ctaWork}
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-[-45deg]" />
                </a>
              </Magnetic>
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-3.5 text-sm text-ink transition-colors duration-300 hover:border-ink"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-3.5 text-sm text-ink transition-colors duration-300 hover:border-ink"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          <div className="col-span-12 grid grid-cols-3 content-end gap-4 md:col-span-6 lg:col-span-4">
            {t.facts.map((f, i) => (
              <motion.div
                key={f.v}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.85 + i * 0.1 }}
                className="border-t border-ink pt-3"
              >
                <div className="text-4xl font-medium leading-none tracking-tight text-accent md:text-5xl">{f.k}</div>
                <div className="mt-2 text-xs leading-snug text-ink-muted md:text-sm">{f.v}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.4 }}
            className="relative col-span-6 hidden aspect-[4/5] overflow-hidden rounded-[18px] bg-paper-deep lg:col-span-3 lg:block"
          >
            <motion.div style={{ y: photoY }} className="absolute -inset-y-16 inset-x-0">
              <Image
                src="/profile.jpg"
                alt={t.name}
                fill
                priority
                sizes="(min-width: 1024px) 300px, 50vw"
                className="object-cover grayscale-[35%]"
              />
            </motion.div>
            <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink">
              {t.location}
            </span>
          </motion.div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="relative border-y border-line bg-paper-deep/60 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-ink-muted hover:[animation-play-state:paused]">
          {[...items, ...items].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span className="text-accent">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
