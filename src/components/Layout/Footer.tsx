import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full bg-[#181a27] h-auto text-white">
      <div className="container w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center py-2">
          <div className="flex justify-center items-center">
            <span>Designed and Developed by Aaditya Mall</span>
          </div>

          <div className="flex justify-center items-center">
            <span>Copyright © 2024</span>
          </div>

          <div className="flex justify-center items-center gap-x-4">

                <Link href="https://github.com/aadityamall">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white w-5 h-5 hover:text-brandColor"
                  />
              </Link>

              <Link href="https://wa.me/+919326430750">
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-white w-5 h-5 hover:text-brandColor"
                  />
              </Link>

              <Link href="https://www.linkedin.com/in/aaditya-mall-b45a48216/">
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white w-5 h-5 hover:text-brandColor"
                  />
              </Link>

              <Link href="https://www.instagram.com/aaditya.mall">
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white w-5 h-5 hover:text-brandColor"
                  />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
