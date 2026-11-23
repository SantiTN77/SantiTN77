import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { getContent, isLang, LANGS, DEFAULT_LANG, type Lang } from "@/lib/content";

const sans = Geist({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const SITE_URL = "https://danieltafur.vercel.app";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : DEFAULT_LANG;
  const c = getContent(safe);

  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${safe}`,
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${SITE_URL}/${safe}`,
      siteName: "Daniel Tafur",
      type: "website",
      locale: safe === "es" ? "es_CO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#F3F1EA",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : DEFAULT_LANG;

  return (
    <html lang={safe} className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="grain bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
