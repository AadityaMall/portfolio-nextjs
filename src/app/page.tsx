import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import FreelanceWork from "@/components/Home/FreelanceWork";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Achievements from "@/components/Home/Achievements";
import Contact from "@/components/Home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FreelanceWork />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
