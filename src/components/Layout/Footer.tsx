"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black/50 backdrop-blur-sm border-t border-brandColor/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left text-gray-400 text-sm"
        >
          Designed & Developed by <span className="text-brandColor font-semibold">Aaditya Mall</span> | © 2024
        </motion.div>

        {/* Right: Social Icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {[
            { icon: faGithub, link: "https://github.com/aadityamall" },
            { icon: faLinkedin, link: "https://www.linkedin.com/in/aaditya-mall-b45a48216/" },
            { icon: faWhatsapp, link: "https://wa.me/+919326430750" },
            { icon: faInstagram, link: "https://www.instagram.com/aaditya.mall" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              whileHover={{ scale: 1.2, color: "#00ffe0" }}
              whileTap={{ scale: 0.9 }}
              className="text-white text-lg hover:text-brandColor transition-colors duration-300"
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
