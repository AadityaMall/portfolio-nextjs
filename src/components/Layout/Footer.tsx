import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  let year = "2024";

  return (
    <Container fluid className="footer bg-[#181a27] h-auto text-white">
      <Row>
        <Col md="4" className="flex justify-center items-center">
          <span>Designed and Developed by Aaditya Mall</span>
        </Col>
        <Col md="4" className="flex justify-center items-center">
          <span>Copyright © {year}</span>
        </Col>
        <Col md="4" className="flex justify-center items-center">
          <ul className="flex justify-center items-center mb-0 px-0 p-3">
            <li className="ml-[10px] mr-[10px]">
              <Link
                href="https://github.com/aadityamall"
              >
                <FontAwesomeIcon icon={faGithub} className="text-white w-[20px] h-[20px] hover:text-brandColor"/>
              </Link>
            </li>
            <li className="ml-[10px] mr-[10px]">
              <Link
                className="text-white"
                href="https://wa.me/+919326430750"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-white w-[20px] h-[20px] hover:text-brandColor"/>
              </Link>
            </li>

            <li className=" ml-[10px] mr-[10px]">
              <Link
                href="https://www.linkedin.com/in/aaditya-mall-b45a48216/"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white w-[20px] h-[20px] hover:text-brandColor"/>
              </Link>
            </li>
            <li className=" ml-[10px] mr-[10px]">
              <Link
                href="https://www.instagram.com/aaditya.mall"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white w-[20px] h-[20px] hover:text-brandColor"/>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
