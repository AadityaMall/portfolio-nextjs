"use client"
import Landing from "@/components/Home/Landing";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Contact from "@/components/Home/Contact";
import { Suspense } from "react";
import Loader from "./loading";
import Projects from "@/components/Project/Projects";
import Resume from "@/components/Layout/CV";
import Experience from "@/components/Layout/Experience";
const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <>
        <section
          className="min-h-screen flex justify-center items-center custom-animated-appear"
        >
          <Landing />
        </section>
        <section
          id="about"
          className="h-auto flex flex-col justify-start items-center custom-animated-appear"
        >
          <About />
        </section>
        <section
          id="experience"
          className="min-h-screen flex flex-col justify-start items-center custom-animated-appear"
        >
          <Experience />
        </section>
        <section className="min-h-screen flex flex-col justify-start items-center bg-[#181a27] mt-[100px] pb-5 custom-animated-appear">
          <Skills />
        </section>
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center custom-animated-appear"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center custom-animated-appear"
        >
          <Contact />
        </section>
        <section id="cv" className="w-full h-auto custom-animated-appear">
          <Resume />

        </section>
      </>
    </Suspense>
  );
};

export default page;
