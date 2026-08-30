import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import VolunteerWork from "@/components/VolunteerWork";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" className="relative min-h-[100dvh]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <VolunteerWork />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
