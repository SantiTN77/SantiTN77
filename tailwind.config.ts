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
        paper: { DEFAULT: "#F3F1EA", deep: "#EAE6DB", card: "#FAF9F5" },
        ink: { DEFAULT: "#151412", soft: "#3B3934", muted: "#6E6A60", faint: "#9A958A" },
        line: { DEFAULT: "#D8D3C6", strong: "#BDB6A6" },
        accent: { DEFAULT: "#D4471C", soft: "#F2D5C9", ink: "#A9330F" },
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
