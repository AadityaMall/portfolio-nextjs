"use client"
import Link from "next/link";
import Image from "next/image";
import TypeWriter from "./TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faPhone, faFileLines } from "@fortawesome/free-solid-svg-icons";
const Landing = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center h-[90vh]">
        <Image
          src="/images/HomePage.png"
          alt="home pic"
          width={200}
          height={300}
          className="img-fluid w-auto h-auto"
          priority={true}
        />
        <h1 className="text-white font-bold">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="text-white font-bold">
          I am <span className="text-brandColor">Aaditya Mall</span>
        </h1>
        <div className="my-2">
          <TypeWriter />
        </div>
        <div className="flex items-center justify-center gap-4 my-4 md:w-[50%] w-full">
          <Link href={"https://www.instagram.com/aaditya.mall"}>
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white w-[40px] h-[40px] hover:text-brandColor"
            />
          </Link>
          <Link href={"https://www.hackerrank.com/aadityarmall"}>
            <FontAwesomeIcon
              icon={faHackerrank}
              className="text-white w-[50px] h-[50px] hover:text-brandColor"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/aaditya-mall-b45a48216/"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white w-[50px] h-[50px] hover:text-brandColor"
            />
          </Link>
          <Link href={"https://github.com/aadityamall/"}>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white w-[50px] h-[50px] hover:text-brandColor"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 md:flex-row flex-col">
          <Link href={"#contact"} className="no-underline">
            <span className="flex items-center justify-center gap-2 bg-brandColor px-4 py-2 rounded-md text-black min-w-48">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-[20px] h-[20px]"
              />{" "}
              Contact Me
            </span>
          </Link>
          <Link href={"/cv"} className="no-underline">
            <span className="flex items-center justify-center gap-2 bg-brandColor px-4 py-2 rounded-md text-black min-w-48">
              <FontAwesomeIcon
                icon={faFileLines}
                className="w-[20px] h-[20px]"
              />{" "}
              View CV
            </span>
          </Link>
        </div>
        <Link href={"#about"} className="flex items-center justify-center mt-5">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-white w-[50px] h-[50px] hover:text-brandColor animate-bounce"
          />
        </Link>
      </div>
    </>
  );
};

export default Landing;
