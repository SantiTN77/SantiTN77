# Daniel Tafur — Portfolio

A minimalist, ultra-modern, dark-mode portfolio for **Daniel Tafur**, Full Stack AI Developer & AI Automation Architect. Inspired by midudev's aesthetic: premium typography, clean borders, subtle gradients and absolute mobile responsiveness.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)** (icons)
- **TypeScript**
- Package manager: **pnpm**

## Sections

1. **Hero** — name, role, bio and minimalist GitHub / LinkedIn actions.
2. **Featured Project (Tafvox)** — polished video card ready to embed the YouTube demo.
3. **Enterprise Experience & Automations** — MetaBiblioteca engineering outcomes.
4. **Tech Stack, Tools & Paradigms** — clean grid of tools and integrations.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Build for production:

```bash
pnpm build
pnpm start
```

## Configuration

All content lives in **`lib/config.ts`** so you can edit copy without touching components.

To wire up the Tafvox demo video, paste the YouTube video ID (the part after `?v=` in the URL) into `tafvox.youtubeId`:

```ts
export const tafvox = {
  // ...
  youtubeId: "dQw4w9WgXcQ", // 👈 your video ID
};
```

When empty, the project renders a polished "coming soon" placeholder card instead.

## Deploy on Vercel

This project is Vercel-ready with zero configuration:

1. Push this repository to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — just deploy.

Or use the Vercel CLI:

```bash
pnpm dlx vercel
```

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Single-page composition
  globals.css       # Tailwind + base styles
components/
  Navbar.tsx
  Hero.tsx
  FeaturedProject.tsx
  Experience.tsx
  TechStack.tsx
  Footer.tsx
  Section.tsx       # Shared section heading + wrapper
lib/
  config.ts         # All editable content & placeholders
```
