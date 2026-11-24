"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { EASE } from "./motion";

/**
 * Poster-first video: a cursor-following play badge on hover, a clip reveal on
 * scroll, and the real <video> only mounted after the visitor asks for it.
 */
export function VideoStage({
  src,
  poster,
  title,
  playLabel,
}: {
  src: string;
  poster: string;
  title: string;
  playLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [36, 18]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 28 });
  const y = useSpring(my, { stiffness: 300, damping: 28 });

  return (
    <motion.div
      ref={ref}
      style={{ scale, borderRadius: radius }}
      className="relative aspect-video w-full overflow-hidden bg-navy-deep shadow-[0_40px_80px_-40px_rgba(17,54,109,0.45)]"
    >
      {playing ? (
        <video
          className="h-full w-full"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set(e.clientX - r.left);
            my.set(e.clientY - r.top);
          }}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-none text-left max-md:cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.035]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

          {/* resting badge (touch + no-hover) */}
          <motion.span
            animate={{ opacity: hovering ? 0 : 1 }}
            className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full bg-paper px-4 py-2.5 text-sm font-medium text-ink"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
              <Play className="h-3 w-3 translate-x-px fill-paper text-paper" />
            </span>
            {playLabel}
          </motion.span>

          {/* cursor-follow badge */}
          <motion.span
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            initial={false}
            animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="pointer-events-none absolute left-0 top-0 hidden h-28 w-28 items-center justify-center rounded-full bg-accent font-mono text-[11px] uppercase tracking-widest text-paper md:flex"
          >
            {playLabel}
          </motion.span>
        </button>
      )}
    </motion.div>
  );
}
