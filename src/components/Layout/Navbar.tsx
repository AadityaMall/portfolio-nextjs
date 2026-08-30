"use client";

import { useState, useEffect } from "react";
import { Menu, X, Briefcase, FileText } from "lucide-react";
import { AnimatedThemeToggler as ThemeToggle } from "@/components/ui/animated-theme-toggler";
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Freelance", href: "#freelance" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];


// /* ── Mobile Drawer ────────────────────────────────────────────────── */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="lg:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />
      {/* Drawer */}
      <div
        className="lg:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[82vw] flex flex-col shadow-2xl transition-transform duration-300 ease-out"
        style={{
          background: "var(--color-surface)",
          borderLeft: "1px solid var(--color-border)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <span className="text-base font-bold" style={{ color: "var(--color-primary)" }}>
            Aaditya
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{ color: "var(--color-text-muted)" }}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--color-primary)";
                    e.currentTarget.style.background = "color-mix(in oklch, var(--color-primary) 8%, transparent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span className="text-xs font-mono opacity-30" style={{ color: "var(--color-primary)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 pb-6 pt-2 flex flex-col gap-2">
          <a
            href="/AadityaMallResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
            onClick={onClose}
          >
            <FileText size={14} strokeWidth={2} />
            Resume
          </a>
          <a
            href="mailto:aadityarmall@gmail.com"
            className="hire-pill w-full justify-center"
            onClick={onClose}
          >
            <Briefcase size={13} strokeWidth={2.5} />
            Hire for Freelance
          </a>
        </div>
      </div>
    </>
  );
}

/* ── Main Navbar ──────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const ids = navItems.map(n => n.href.replace("#", ""));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
        Floating pill navbar:
        - Fixed, centered, max-width so it never spans the full viewport
        - Pill shape with rounded-full (large radius)
        - Frosted glass always on (iOS-style) — intensifies slightly after scroll
        - Soft teal border, subtle shadow
      */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-4 px-6 py-3 transition-all duration-500"
          style={{
            background: scrolled
              ? "color-mix(in oklch, var(--color-background) 72%, transparent)"
              : "color-mix(in oklch, var(--color-background) 60%, transparent)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderRadius: "100px",
            border: "1px solid color-mix(in oklch, var(--color-primary) 20%, var(--color-border))",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px color-mix(in oklch, var(--color-primary) 10%, transparent) inset"
              : "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Name */}
          <a
            href="#"
            className="text-base font-bold tracking-tight shrink-0 transition-colors duration-200 px-1"
            style={{ color: "var(--color-text)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text)")}
          >
            Aaditya
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map(item => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="relative px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200"
                    style={{
                      color: isActive ? "var(--color-primary)" : "var(--color-text-muted)",
                      background: isActive
                        ? "color-mix(in oklch, var(--color-primary) 10%, transparent)"
                        : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--color-text)";
                        e.currentTarget.style.background = "color-mix(in oklch, var(--color-primary) 6%, transparent)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--color-text-muted)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />

            {/* Resume link */}
            <a
              href="/AadityaMallResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.background = "color-mix(in oklch, var(--color-primary) 6%, transparent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <FileText size={14} strokeWidth={2} />
              Resume
            </a>

            {/* Hire CTA */}
            <a
              href="mailto:aadityarmall@gmail.com"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white transition-all duration-200"
              style={{ background: "var(--color-primary)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-primary-light)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <Briefcase size={13} strokeWidth={2.5} />
              Hire
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}