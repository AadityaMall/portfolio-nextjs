"use client";

import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-brandColor mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-white">Me</span>
      </motion.h2>

      <motion.div
        className="w-full max-w-5xl grid md:grid-cols-2 grid-cols-1 gap-8 backdrop-blur-sm bg-white/5 border border-white/20 rounded-3xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Bitmoji */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/aadityaBitmoji.png"
            alt="Bitmoji"
            width={200}
            height={200}
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Right: Contact Buttons */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4">
          <motion.a
            href="https://wa.me/919326430750"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[300px] flex items-center justify-center gap-4 bg-[#25d366] text-black font-bold py-3 rounded-xl shadow-md hover:shadow-[#25d366]/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </motion.a>

          <motion.a
            href="mailto:aadityarmall@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[300px] flex items-center justify-center gap-4 bg-[#DB4437] text-black font-bold py-3 rounded-xl shadow-md hover:shadow-[#DB4437]/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </motion.a>

          <motion.a
            href="tel:+919326430750"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[300px] flex items-center justify-center gap-4 bg-brandColor text-black font-bold py-3 rounded-xl shadow-md hover:shadow-brandColor/50 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faPhone} /> +91 9326430750
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
