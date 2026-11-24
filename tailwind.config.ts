import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: { DEFAULT: "#F7F9FC", deep: "#EDF2FA", card: "#FFFFFF" },
        ink: { DEFAULT: "#0E1B33", soft: "#2A3852", muted: "#5B6880", faint: "#94A0B8" },
        line: { DEFAULT: "#DBE3F3", strong: "#BFD2F2" },
        accent: { DEFAULT: "#1F4F98", soft: "#E3ECFB", ink: "#11366D", bright: "#4F7CFF" },
        navy: { DEFAULT: "#11366D", deep: "#0B2247" },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
