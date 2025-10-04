"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faFileLines } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "@/components/Home/TypeWriter";
import { BorderBeam } from "@/components/ui/border-beam";

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden mb-4">
      {/* Animated gradient background */}
      <div className="absolute top-0 inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10 animate-gradient-slow"></div>

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-end h-full w-full md:max-w-7xl mx-auto px-6 md:px-16 gap-6 md:gap-12">

        {/* Left content */}
        <div className="md:flex-1 h-fit flex flex-col md:justify-center gap-4 md:gap-6 backdrop-blur-sm bg-white/10 p-6 md:p-10 rounded-3xl shadow-lg w-full max-h-[85vh] overflow-hidden">

          <h1 className="text-xl md:text-3xl font-extrabold text-white">
            Hi There!{" "}
            <span className="wave inline-block animate-wave" role="img" aria-label="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="text-2xl md:text-4xl font-bold text-white">
            I am <span className="text-brandColor font-['DynaPuff']">Aaditya Mall</span>
          </h1>

          {/* Morphing Text */}
          <TypeWriter />

          {/* Social Icons */}
          <div className="flex justify-start md:justify-start gap-4 md:gap-6 my-4">
            {[
              {
                icon: faInstagram,
                link: "https://www.instagram.com/aaditya.mall",
              },
              {
                icon: faHackerrank,
                link: "https://www.hackerrank.com/aadityarmall",
              },
              {
                icon: faLinkedin,
                link: "https://www.linkedin.com/in/aaditya-mall-b45a48216/",
              },
              {
                icon: faGithub,
                link: "https://github.com/aadityamall/",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:text-brandColor transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 md:w-7 md:h-7" />
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="#contact" className="no-underline">
              <span className="flex relative overflow-hidden items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <BorderBeam borderWidth={2}/>
                <FontAwesomeIcon icon={faPhone} /> Contact Me
              </span>
            </Link>
            <Link href="/cv" className="no-underline">
              <span className="relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <BorderBeam borderWidth={2}/>
                <FontAwesomeIcon icon={faFileLines} /> View Resume
              </span>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="pt-[100px] md:pt-0 flex justify-center md:justify-end items-center h-auto md:h-auto">
          <Image
            src="/images/HomePage.png"
            alt="home pic"
            width={300}
            height={300}
            className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
