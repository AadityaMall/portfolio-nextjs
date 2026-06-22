"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionReveal from "@/components/Layout/SectionReveal";

interface FreelanceProject {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  year: string;

}

const freelanceProjects: FreelanceProject[] = [
  {
    name: "Aambaazaar",
    description:
      "Full e-commerce marketplace with admin panel, Razorpay payments, SSR, and SEO — built and shipped in production.",
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://aambaazaar.com/",
    year: "2025",

  },
  {
    name: "Movira Industries",
    description:
      "Full Stack Web Solution for Movira Industries along with comprehensive dashboard and management system for their products.",
    stack: ["Next.js", "Firebase", "Firestore", "Tailwind CSS"],
    liveUrl: "https://moviraindustries.in/",
    year: "2026",

  },
  {
    name: "PECaS - Precision Electromagnetic Certification and Solution Pvt. Ltd.",
    description:
      "Complete Portfolio Website with full control CMS Panel",
    stack: ["Next.js", "Firebase", "Firestore", "Tailwind CSS"],
    liveUrl: "https://pecas-frontend-website.vercel.app/",
    year: "2024",

  },
];

function FreelanceCard({
  project,
  index,
}: {
  project: FreelanceProject;
  index: number;
}) {
  const hasLiveLink = project.liveUrl !== "#";

  return (
    <SectionReveal delay={200 + index * 100}>
      <div className="surface-card overflow-hidden flex flex-col h-full group">
        {/* Preview image */}
          {/* Overlay on hover with live link */}
          {hasLiveLink && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "color-mix(in oklch, var(--color-primary) 80%, transparent)",
              }}
            >
              <span className="flex items-center gap-2 text-white font-semibold text-sm px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <ExternalLink size={14} strokeWidth={2.5} />
                Visit site
              </span>
            </a>
          )}

          {/* Year badge */}
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
            style={{ background: "var(--color-primary)" }}
          >
            {project.year}
          </span>


        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1 mt-10">
          <h3
            className="text-base font-bold leading-snug"
            style={{ color: "var(--color-text)" }}
          >
            {project.name}
          </h3>
          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(tech => (
              <span key={tech} className="skill-pill" style={{ fontSize: "0.72rem" }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Live link */}
          {hasLiveLink && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link mt-auto pt-1"
              style={{ color: "var(--color-primary)" }}
            >
              Visit live site
              <ExternalLink
                size={13}
                strokeWidth={2.5}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          )}
        </div>
      </div>
    </SectionReveal>
  );
}

export default function FreelanceWork() {
  return (
    <section id="freelance" className="relative py-24 px-5 md:px-8">
      {/* Teal tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "color-mix(in oklch, var(--color-primary) 2%, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        <SectionReveal>
          <span className="section-label mb-4 block">Freelance Work</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-text)" }}
          >
            Client projects
          </h2>
        </SectionReveal>
        <SectionReveal delay={150}>
          <p
            className="text-base md:text-lg mb-12 max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Production applications delivered for real clients — shipped, live, and working.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {freelanceProjects.map((project, i) => (
            <FreelanceCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
