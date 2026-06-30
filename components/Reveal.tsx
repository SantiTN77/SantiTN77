"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
  /** Re-trigger every time it enters the viewport (default: once). */
  repeat?: boolean;
}

/**
 * Scroll-reveal wrapper. Uses IntersectionObserver to toggle a `.is-visible`
 * class; the actual motion is defined in globals.css and respects
 * `prefers-reduced-motion`. Safe to wrap server components as children.
 */
export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as,
  repeat = false,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
