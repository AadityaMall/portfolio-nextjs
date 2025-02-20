import Landing from "@/components/Home/Landing";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";

const page = () => {
  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <Landing />
      </section>

        <section
          id="about"
          className="h-auto flex flex-col justify-start items-center"
        >
          <About />
        </section>
      <section className="min-h-screen flex flex-col justify-start items-center bg-[#181a27] mt-[100px]">
        <Skills />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-start items-center"
      >
        <h1>hello</h1>
      </section>
    </>
  );
};

export default page;
