import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechArsenal } from "@/components/TechArsenal";
import { Projects } from "@/components/Projects";
import { YouTubeFeed } from "@/components/YouTubeFeed";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechArsenal />
      <Projects />
      <YouTubeFeed />
      <Contact />
      <Footer />
    </main>
  );
}
