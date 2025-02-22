"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const [expand, updateExpanded] = useState(false); // Handles whether navbar is expanded
  const [navColour, updateNavbar] = useState(false); // Handles background color change on scroll
  const location = usePathname(); // Detect route changes

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    updateExpanded(false);
  }, [location]);

  const handleToggleClick = () => {
    updateExpanded(!expand);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ease-out p-1 py-1.5 px-8 text-lg 
        ${navColour ? "backdrop-blur-md shadow-teal" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-15 items-center">
          <Link href="/" className="flex items-center no-underline">
            <h1 className="text-brandColor text-3xl">{`<Aaditya Mall/>`}</h1>
          </Link>
          <button
            onClick={handleToggleClick}
            className="relative bg-transparent border-transparent p-2 focus:outline-none focus:ring-2 focus:ring-brandColor focus:p-1 md:hidden"
          >
            {/* Custom Hamburger icon */}
            <span
              className={`block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-300 ease-in-out ${
                expand ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-300 ease-in-out ${
                expand ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-300 ease-in-out ${
                expand ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
          <div className={`hidden md:flex space-x-6`}>
            <NavLink to="/" pathname={location}>
              Home
            </NavLink>

            <NavLink to="/experience" pathname={location}>
              Experience
            </NavLink>

            <NavLink to="/project" pathname={location}>
              Projects
            </NavLink>

            <NavLink to="/cv" pathname={location}>
              CV
            </NavLink>

            <NavLink to="/#contact" pathname={location}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-15 left-0 w-full backdrop-blur-md shadow-teal transition-all duration-300 ease-in-out overflow-hidden ${
          expand ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <NavLink to="/" pathname={location}>
            Home
          </NavLink>

          <NavLink to="/experience" pathname={location}>
            Experience
          </NavLink>

          <NavLink to="/project" pathname={location}>
            Projects
          </NavLink>

          <NavLink to="/cv" pathname={location}>
            CV
          </NavLink>

          <NavLink to="/#contact" pathname={location}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
// Reusable NavLink component (to avoid repeating active class logic)
function NavLink({
  to,
  pathname,
  children,
}: {
  to: string;
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      className={
        pathname === to
          ? "nav-link-tw text-brandColor font-bold"
          : "nav-link-tw text-white"
      }
    >
      {children}
    </Link>
  );
}
