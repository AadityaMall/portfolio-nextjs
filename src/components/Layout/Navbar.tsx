"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare, faEnvelope, faBars, faXmark,faFileLines, faDiagramProject, faCode } from "@fortawesome/free-solid-svg-icons";
interface NavbarItem {
  name: string;
  link: string;
  icon: any;
}

export default function NavbarDemo() {
  const navItems: NavbarItem[] = [
    { name: "Skills", link: "/#skills", icon: faCodeCompare },
    { name: "Experience", link: "/#experience", icon: faDiagramProject },
    { name: "Projects", link: "/#projects", icon: faCode },
    { name: "Contact", link: "/#contact", icon: faEnvelope },
    { name: "Resume", link: "/AadityaMallResume.pdf", icon: faFileLines },

  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50">
      <div
        className="
          md:mx-auto max-w-5xl mx-4
          bg-black/60 dark:bg-black/80
          backdrop-blur-xl rounded-full px-6 py-3
          flex items-center justify-between shadow-teal transition-colors
          border border-brandColor/30
          ring-1 ring-brandColor/10
        "
        style={{
          boxShadow: "0 8px 32px 0 rgba(47, 203, 224, 0.25)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 font-bold text-2xl text-brandColor drop-shadow-lg"
        >
          {`<AadityaMall/>`}
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="px-4 py-2 rounded-full text-sm font-semibold
            text-white dark:text-brandColor
            hover:text-brandColor
            hover:bg-brandColor/10 dark:hover:bg-brandColor/20
            shadow-sm transition duration-200 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={item.icon} className="text-xs" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 text-brandColor rounded-full
              transition-all duration-300
              ${isMobileMenuOpen 
                ? 'bg-brandColor/20 shadow-inner' 
                : 'hover:bg-brandColor/10 hover:shadow-sm'}`}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="text-lg" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="absolute top-full left-0 right-0 lg:hidden mt-3 mx-auto w-[94%] max-w-md
              bg-black/75 dark:bg-black/85
              backdrop-blur-xl rounded-2xl overflow-hidden
              flex flex-col shadow-teal transition-colors
              border border-brandColor/30
              ring-1 ring-brandColor/20"
            style={{
              boxShadow: "0 10px 25px -5px rgba(47, 203, 224, 0.2)",
            }}
          >
            <div className="w-full py-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-5 py-3 mx-2 my-1
                      text-white hover:text-brandColor
                      hover:bg-brandColor/10 rounded-xl
                      transition-all duration-200 ease-out"
                  >
                    <div className="w-9 h-9 rounded-full bg-brandColor/10 
                                  flex items-center justify-center shadow-inner">
                      <FontAwesomeIcon icon={item.icon} className="text-brandColor text-sm" />
                    </div>
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </Link>
                  {idx < navItems.length - 1 && (
                    <div className="h-px w-[85%] mx-auto bg-gradient-to-r from-transparent via-brandColor/20 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}