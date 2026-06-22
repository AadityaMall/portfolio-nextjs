"use client";

import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import SectionReveal from "@/components/Layout/SectionReveal";

interface Experience {
  company: string;
  logo: string;
  role: string;
  type: "Internship" | "Full-time" | "Freelance";
  duration: string;
  isCurrent: boolean;
  location: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Protium Finance Limited",
    logo: "/images/protium.png",
    role: "Data Science Intern",
    type: "Internship",
    isCurrent: true,
    duration: "Jan 2026 – Present",
    location: "On-site · Mumbai",
    highlights: [
      "Working in the risk and analytics team to analyse data and extract insights.",
      "Credit risk analysis and prediction using machine learning algorithms.",
      "Data wrangling and analysis with Python to drive data-driven decisions.",
    ],
    skills: ["Python", "Machine Learning", "Pandas", "Credit Risk", "Analytics"],
  },
  {
    company: "Nobrokerage.com",
    logo: "/images/nobrokerage.png",
    role: "Full Stack Developer Intern",
    type: "Internship",
    isCurrent: false,
    duration: "Jun 2024 – Jul 2024",
    location: "In-office · Mumbai",
    highlights: [
      "Developed 2 complete MERN stack websites in 45 days.",
      "Worked with PHP and CodeIgniter 4 before migrating to MERN.",
      "Built dual React/Node.js architecture with admin and client dashboards.",
    ],
    skills: ["MongoDB", "React", "Node.js", "Express", "PHP", "CodeIgniter"],
  },
  {
    company: "RBL Bank",
    logo: "/images/rbl.png",
    role: "Product Intern",
    type: "Internship",
    isCurrent: false,
    duration: "Jun 2023 – Jul 2023",
    location: "In-office · Mumbai",
    highlights: [
      "Competitor analysis for the proposed RBL Super App.",
      "Designed information architecture and flowcharts to map user interactions.",
      "Contributed to UI/UX improvements through data-driven insights.",
    ],
    skills: ["UX Research", "Information Architecture", "Flowcharting", "Product Strategy"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="section-label mb-4 block">Experience</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-text)" }}
          >
            Professional experience
          </h2>
        </SectionReveal>
        <SectionReveal delay={150}>
          <p
            className="text-base md:text-lg mb-12 max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Internships and professional roles — real teams, real codebases, real impact.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company} delay={200 + i * 100}>
              <div className="surface-card p-6 md:p-7 flex flex-col gap-4">
                {/* Top row */}
                <div className="flex items-start gap-4">
                  {/* Company logo */}
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center p-2 bg-white"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3
                            className="text-base font-bold"
                            style={{ color: "var(--color-text)" }}
                          >
                            {exp.company}
                          </h3>
                          {/* Current badge */}
                          {exp.isCurrent && (
                            <span
                              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                              style={{
                                background: "color-mix(in oklch, var(--color-primary) 12%, transparent)",
                                color: "var(--color-primary)",
                              }}
                            >
                              <span
                                className="relative flex size-1.5"
                              >
                                <span
                                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                  style={{ background: "var(--color-primary)" }}
                                />
                                <span
                                  className="relative inline-flex rounded-full size-1.5"
                                  style={{ background: "var(--color-primary)" }}
                                />
                              </span>
                              Current
                            </span>
                          )}
                          {/* Type badge */}
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: "var(--color-surface-hover)",
                              color: "var(--color-text-muted)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p
                          className="text-sm font-semibold mt-0.5"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {exp.role}
                        </p>
                      </div>

                      {/* Duration + location */}
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <Calendar size={11} strokeWidth={2} />
                          {exp.duration}
                        </span>
                        <span
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <MapPin size={11} strokeWidth={2} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 pl-0">
                  {exp.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span
                        className="shrink-0 mt-1.5 size-1.5 rounded-full"
                        style={{ background: "var(--color-primary)" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.skills.map(skill => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
