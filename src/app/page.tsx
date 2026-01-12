"use client"
import Landing from "@/components/Home/Landing";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Contact from "@/components/Home/Contact";
import Recognition from "@/components/Home/Recognition";
import { Suspense } from "react";
import Loader from "./loading";
import Projects from "@/components/Project/Projects";
import Positions from "@/components/Layout/Positions";
import WorkExperience from "@/components/Layout/WorkExperience";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <>
        <section
          className="min-h-screen flex justify-center items-center"
        >
          <Landing />
        </section>
        <section
          id="about"
          className="h-auto flex flex-col justify-start items-center"
        >
          <About />
        </section>
        <section id="skills" className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-black via-gray-900 to-black mt-[100px] pb-5">
          <Skills />
        </section>
        <section
          id="experience"
          className="min-h-screen flex flex-col justify-start items-center"
        >
          <WorkExperience />

        </section>


        <section
          id="experience"
          className="min-h-screen flex flex-col justify-start items-center"
        >
          <Positions />

        </section>
        <section
          id="recognition"
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <Recognition />
        </section>
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="mt-10 flex flex-col justify-center items-center"
        >
          <Contact />
        </section>
      </>
    </Suspense>
  );
};

export default page;
