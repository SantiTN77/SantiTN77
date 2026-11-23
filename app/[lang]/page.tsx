import { getContent, isLang, DEFAULT_LANG, type Lang } from "@/lib/content";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GcpArchitecture } from "@/components/GcpArchitecture";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Automations } from "@/components/Automations";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { ScrollProgress, SmoothScroll } from "@/components/motion";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safe: Lang = isLang(lang) ? lang : DEFAULT_LANG;
  const c = getContent(safe);

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar lang={safe} t={c.nav} />
      <main className="relative">
        <Hero t={c.hero} />
        <GcpArchitecture t={c.gcp} />
        <FeaturedProject t={c.featured} />
        <Projects t={c.projects} />
        <Experience t={c.experience} />
        <Automations t={c.automations} viewLabel={safe === "es" ? "Ver arquitectura" : "View architecture"} />
        <TechStack t={c.techStack} />
      </main>
      <Footer t={c.footer} />
    </>
  );
}
