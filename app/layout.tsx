import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const SITE_URL = "https://daniel-tafur.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Daniel Tafur — Full Stack AI Developer & Automation Architect",
  description:
    "I design and ship autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes through advanced LLM orchestration.",
  keywords: [
    "Daniel Tafur",
    "AI Developer",
    "AI Automation",
    "Autonomous Agents",
    "RAG",
    "LLM Orchestration",
    "Full Stack",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Daniel Tafur" }],
  creator: "Daniel Tafur",
  openGraph: {
    title: "Daniel Tafur — Full Stack AI Developer & Automation Architect",
    description:
      "Autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes.",
    url: SITE_URL,
    siteName: "Daniel Tafur",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Tafur — Full Stack AI Developer & Automation Architect",
    description:
      "Autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
