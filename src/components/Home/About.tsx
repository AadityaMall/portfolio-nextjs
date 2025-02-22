import Image from "next/image";
const About = () => {
  return (
    <div className="flex justify-center items-center m-3 mt-0 mb-0 md:w-[80%] w-full">
      <div className="flex flex-row justify-center items-center grid grid-cols-4 gap-4mt-[80px]">
        <div className="flex justify-center items-center">
          <Image
            src="/images/Aaditya.JPG"
            alt="Aaditya Mall"
            className="img-fluid max-h-80 z-100 rounded"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-column justify-center items-center col-span-3">
          <h1 className="text-brandColor">About Me</h1>

          <p className="text-white m-3 text-justify text-xl">
            I am currently pursuing a Bachelor of Technology degree in Computer
            Science from SVKMs NMIMS University, specializing in Artificial
            Intelligence. I am a creative and motivated individual with strong
            skills in mathematics, logic, and coding. My academic and personal
            experiences have instilled in me a passion for technology and
            innovation. <br />
            <br /> I am actively expanding my knowledge and expertise in the{" "}
            <strong className="text-brandColor">
              MERN stack (MongoDB, Express.js, React, Node.js){" "}
            </strong>{" "}
            , which is enhancing my capabilities in full-stack web development.
            My enthusiasm for data science drives me to continuously explore and
            learn new techniques and methodologies to analyze and interpret
            complex data sets. <br />
            <br /> I am eager to apply my skills in real-world projects and look
            forward to embracing new challenges and opportunities in the field
            of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
