import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Experience } from "@/components/Experience";
import { Automations } from "@/components/Automations";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Experience />
      <Automations />
      <TechStack />
      <Footer />
    </main>
  );
}
