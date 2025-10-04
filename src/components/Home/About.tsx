"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";

const About = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center w-full md:max-w-6xl mx-auto px-6 md:px-16 py-20">

      {/* Left: Profile Image */}
      <div className="md:flex-1 flex justify-center items-center mb-10 md:mb-0">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <BorderBeam borderWidth={2} />
          <Image
            src="/images/Aaditya.JPG"
            alt="Aaditya Mall"
            width={320}
            height={320}
            className="w-auto h-64 md:h-80 object-contain rounded-3xl z-10"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right: About Content */}
      <div className="md:flex-1 flex flex-col justify-center backdrop-blur-sm bg-gradient-to-br from-black via-gray-900 to-black p-6 md:p-10 rounded-3xl shadow-lg text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-brandColor mb-4">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I am currently pursuing a <strong className="text-brandColor">Bachelor of Technology in Computer Engineering</strong> at NMIMS University. I am a motivated and creative problem-solver with strong leadership skills, driven by a deep passion for technology and innovation.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-4">
          My expertise lies in <strong className="text-brandColor">full-stack development</strong>, building scalable, efficient applications using <strong>Spring Boot, Microservices, React.js, and Node.js</strong>. I also have hands-on experience in <strong>DevOps</strong> workflows with Docker, Git, and GitHub Actions for streamlined CI/CD pipelines. My database skills cover both <strong>MySQL and MongoDB</strong>, and I am constantly expanding my knowledge in <strong>data analysis</strong> with certifications in Power BI and Python for Data Science.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          I thrive on solving real-world problems and am always eager to embrace new challenges that push me to innovate and grow in the field of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
