"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { EASE } from "./motion";

/** Lightweight YouTube embed: thumbnail until clicked, then the nocookie iframe. */
export function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <motion.div
      initial={{ clipPath: "inset(8% 8% 8% 8% round 28px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 18px)" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.2, ease: EASE }}
      className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-ink"
    >
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} aria-label={`Play: ${title}`} className="group absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.04]"
          />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-500 ease-expo group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-ink text-ink" />
          </span>
        </button>
      )}
    </motion.div>
  );
}
