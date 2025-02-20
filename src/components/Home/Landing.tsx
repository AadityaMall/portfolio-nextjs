import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import TypeWriter from "./TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faWhatsapp, faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  return (
    <>
      <Container className="flex flex-col justify-evenly items-center h-[90%]">
        <Image
          src="/images/HomePage.png"
          alt="home pic"
          width={200}
          height={300}
          className="img-fluid w-auto h-auto"
          priority={true}
        />
        <h1 className="heading text-white">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1>
          I am <span className="text-brandColor">Aaditya Mall</span>
        </h1>
        <TypeWriter />
        <div className="flex items-center justify-center">
          <Link href={"https://www.instagram.com/aaditya.mall"}>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white w-[40px] h-[40px] hover:text-brandColor"
          />
          </Link>
          <Link href={"https://www.hackerrank.com/aadityarmall"}>
          <FontAwesomeIcon icon={faHackerrank} className="text-white w-[50px] h-[50px] hover:text-brandColor" />
          </Link>
          <Link href={"https://www.linkedin.com/in/aaditya-mall-b45a48216/"}>
          <FontAwesomeIcon icon={faLinkedin} className="text-white w-[50px] h-[50px] hover:text-brandColor"/>
          </Link>
          <Link href={"https://github.com/aadityamall/"}>
          <FontAwesomeIcon icon={faGithub} className="text-white w-[50px] h-[50px] hover:text-brandColor"/>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Landing;
