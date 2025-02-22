import Landing from "@/components/Home/Landing";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Contact from "@/components/Home/Contact";
const page = () => {
  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center custom-animated-appear"
      >
        <Landing />
      </section>

        <section
          id="about"
          className="h-auto flex flex-col justify-start items-center custom-animated-appear"
        >
          <About />
        </section>
      <section className="min-h-screen flex flex-col justify-start items-center bg-[#181a27] mt-[100px] pb-5 custom-animated-appear">
        <Skills />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center custom-animated-appear"
      >
        <Contact />
      </section>
    </>
  );
};

export default page;
