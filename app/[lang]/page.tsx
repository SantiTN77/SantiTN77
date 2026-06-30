import { getContent, isLang, DEFAULT_LANG, type Lang } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Experience } from "@/components/Experience";
import { Automations } from "@/components/Automations";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : DEFAULT_LANG;
  const c = getContent(safe);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar lang={safe} t={c.nav} />
      <Hero t={c.hero} />
      <FeaturedProject t={c.featured} />
      <Experience t={c.experience} />
      <Automations t={c.automations} />
      <TechStack t={c.techStack} />
      <Footer t={c.footer} />
    </main>
  );
}
