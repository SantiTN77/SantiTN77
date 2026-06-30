import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { getContent, isLang, LANGS, DEFAULT_LANG, type Lang } from "@/lib/content";

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

const SITE_URL = "https://santi-tn-77-danitafur77-gmailcoms-projects.vercel.app";

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
  themeColor: "#09090b",
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
    <html lang={safe} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
