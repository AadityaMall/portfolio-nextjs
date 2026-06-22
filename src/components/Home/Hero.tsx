"use client";

import { ArrowDown, Briefcase, FolderOpen, FileText } from "lucide-react";
import TypeWriter from "@/components/Home/TypeWriter";

import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/ui/grid-pattern"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 pt-20 pb-12 overflow-hidden text-center"
    >
      {/* Teal radial glow — behind text */}
      <GridPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
        variant="overlappingCircles"
        size={40}
        strokeWidth={0.65}
      />
      <div
        className="teal-glow"
        aria-hidden="true"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: "700px",
          maxHeight: "700px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Availability pill */}
        <div
          className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: "color-mix(in oklch, var(--color-primary) 10%, transparent)",
            border: "1px solid color-mix(in oklch, var(--color-primary) 30%, transparent)",
            color: "var(--color-primary)",
          }}
        >
          <span
            className="relative flex size-2"
          >
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--color-primary)" }}
            />
            <span
              className="relative inline-flex rounded-full size-2"
              style={{ background: "var(--color-primary)" }}
            />
          </span>
          Available for freelance projects
        </div>

        {/* Name */}
        <h1
          className="hero-animate hero-animate-2 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          Aaditya Mall
        </h1>

        {/* Title */}
        <div
          className="hero-animate hero-animate-3 text-xl md:text-2xl font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          <TypeWriter />
        </div>

        {/* Tagline */}
        <p
          className="hero-animate hero-animate-4 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          I build production-grade web applications — from microservices backends
          to pixel-perfect frontends. Three clients delivered. Real systems, not side projects.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-animate-5 flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#freelance" className="btn-primary">
            <FolderOpen size={16} strokeWidth={2} />
            View Work
          </a>
          <a href="mailto:aadityarmall@gmail.com" className="btn-outline">
            <Briefcase size={16} strokeWidth={2} />
            Hire for Freelance
          </a>
          <a
            href="/AadityaMallResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
            }}
          >
            <FileText size={15} strokeWidth={2} />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors duration-200"
        style={{ color: "var(--color-text-muted)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
