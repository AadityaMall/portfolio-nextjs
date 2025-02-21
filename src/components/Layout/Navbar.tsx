"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { usePathname } from "next/navigation";

function NavBar() {
  const [expand, updateExpanded] = useState(false); // Handles whether navbar is expanded
  const [navColour, updateNavbar] = useState(false); // Handles background color change on scroll
  const location = usePathname(); // Detect route changes

  // Handle scroll event to update navbar background color
  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  // Collapse the navbar when changing route
  useEffect(() => {
    updateExpanded(false); // Collapse navbar after route change
  }, [location]); // Triggers when the location (route) changes

  const handleToggleClick = () => {
    updateExpanded(!expand); // Toggle the navbar state
  };

  return (
    <Navbar
      expanded={expand} // Control the collapse/expand state
      fixed="top"
      expand="md"
      className={`transition-all duration-300 ease-out p-1 py-1.5 px-8 text-lg 
        ${navColour ? "backdrop-blur-md shadow-teal" : ""}
      `}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center justify-content-center"
        >
          <h1 className="text-brandColor text-3xl">{`<Aaditya Mall/>`}</h1>
        </Navbar.Brand>

        {/* Bootstrap's Navbar.Toggle for toggle button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleClick}
          className="relative bg-transparent border-transparent p-2 focus:outline-none focus:ring-2 focus:ring-brandColor focus:p-1"
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
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Item>
              <NavLink to="/" pathname={location}>
                Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/experience" pathname={location}>
                Experience
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/project" pathname={location}>
                Projects
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/cv" pathname={location}>
                CV
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/#contact" pathname={location}>
                Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
