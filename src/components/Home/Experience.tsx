"use client";

import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import SectionReveal from "@/components/Layout/SectionReveal";

interface Role {
  title: string;
  type: "Internship" | "Full-time" | "Freelance";
  duration: string;
  isCurrent: boolean;
  highlights: string[];
  skills: string[];
}

interface CompanyExperience {
  company: string;
  logo: string;
  location: string;
  roles: Role[];
}

const experiences: CompanyExperience[] = [
  {
    company: "Protium Finance Limited",
    logo: "/images/protium.png",
    location: "On-site · Mumbai",
    roles: [
      {
        title: "Data Scientist",
        type: "Full-time",
        isCurrent: true,
        duration: "Jul 2026 – Present",
        highlights: [
          "Maintaining and developing a FastAPI microservice powering the Business Rule Engine (BRE) used across lending workflows.",
          "Building production APIs, data pipelines, and rule evaluation logic for credit decisioning systems.",
        ],
        skills: ["Python", "FastAPI", "Microservices", "Machine Learning", "Pandas", "Credit Risk", "Analytics"],
      },
      {
        title: "Data Science Intern",
        type: "Internship",
        isCurrent: false,
        duration: "Jan 2026 – Jul 2026",
        highlights: [
          "Worked in the risk and analytics team to analyse data and extract insights.",
          "Credit risk analysis and prediction using machine learning algorithms.",
          "Data wrangling and analysis with Python to drive data-driven decisions.",
        ],
        skills: ["Python", "Machine Learning", "Pandas", "Credit Risk", "Analytics"],
      },
    ],
  },
  {
    company: "Nobrokerage.com",
    logo: "/images/nobrokerage.png",
    location: "In-office · Mumbai",
    roles: [
      {
        title: "Full Stack Developer Intern",
        type: "Internship",
        isCurrent: false,
        duration: "Jun 2024 – Jul 2024",
        highlights: [
          "Developed 2 complete MERN stack websites in 45 days.",
          "Worked with PHP and CodeIgniter 4 before migrating to MERN.",
          "Built dual React/Node.js architecture with admin and client dashboards.",
        ],
        skills: ["MongoDB", "React", "Node.js", "Express", "PHP", "CodeIgniter"],
      },
    ],
  },
  {
    company: "RBL Bank",
    logo: "/images/rbl.png",
    location: "In-office · Mumbai",
    roles: [
      {
        title: "Product Intern",
        type: "Internship",
        isCurrent: false,
        duration: "Jun 2023 – Jul 2023",
        highlights: [
          "Competitor analysis for the proposed RBL Super App.",
          "Designed information architecture and flowcharts to map user interactions.",
          "Contributed to UI/UX improvements through data-driven insights.",
        ],
        skills: ["UX Research", "Information Architecture", "Flowcharting", "Product Strategy"],
      },
    ],
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
            Real teams, real codebases, real impact — from internships to full-time engineering.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company} delay={200 + i * 100}>
              <div className="surface-card p-6 md:p-7 flex flex-col gap-4">
                {/* Company header */}
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
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="text-base font-bold"
                          style={{ color: "var(--color-text)" }}
                        >
                          {exp.company}
                        </h3>
                        {/* Current badge — shown if any role is current */}
                        {exp.roles.some(r => r.isCurrent) && (
                          <span
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              background: "color-mix(in oklch, var(--color-primary) 12%, transparent)",
                              color: "var(--color-primary)",
                            }}
                          >
                            <span className="relative flex size-1.5">
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
                      </div>

                      {/* Location */}
                      <span
                        className="flex items-center gap-1.5 text-xs shrink-0"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <MapPin size={11} strokeWidth={2} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Roles timeline */}
                <div className="relative ml-1.5 pl-6">
                  {/* Vertical connecting line — only if multiple roles */}
                  {exp.roles.length > 1 && (
                    <div
                      className="absolute left-[5px] top-3 bottom-3 w-px"
                      style={{ background: "var(--color-border)" }}
                    />
                  )}

                  <div className="flex flex-col gap-6">
                    {exp.roles.map((role, ri) => (
                      <div key={ri} className="relative">
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-6 top-1 size-[11px] rounded-full border-2"
                          style={{
                            borderColor: role.isCurrent ? "var(--color-primary)" : "var(--color-border)",
                            background: role.isCurrent ? "var(--color-primary)" : "var(--color-surface)",
                          }}
                        />

                        {/* Role header */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p
                              className="text-sm font-semibold"
                              style={{ color: "var(--color-primary)" }}
                            >
                              {role.title}
                            </p>
                            {/* Type badge */}
                            <span
                              className="text-xs font-medium px-2 py-0.5 rounded-full"
                              style={{
                                background: "var(--color-surface-hover)",
                                color: "var(--color-text-muted)",
                                border: "1px solid var(--color-border)",
                              }}
                            >
                              {role.type}
                            </span>
                          </div>
                          <span
                            className="flex items-center gap-1.5 text-xs shrink-0"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            <Calendar size={11} strokeWidth={2} />
                            {role.duration}
                          </span>
                        </div>

                        {/* Highlights */}
                        <ul className="flex flex-col gap-1.5 mb-3">
                          {role.highlights.map((point, j) => (
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
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map(skill => (
                            <span key={skill} className="skill-pill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
