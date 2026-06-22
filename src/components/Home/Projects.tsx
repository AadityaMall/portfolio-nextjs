"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/Layout/SectionReveal";

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "GreenMind — Mental Health Assessment Platform",
    description:
      "AI-driven polyglot microservices system with adaptive psychometric testing (IRT/CAT), emotion-aware journaling, and a RAG chatbot fine-tuned on CBT datasets using Mistral-7B.",
    image: "/images/greenmind.png",
    stack: ["Spring Boot", "FastAPI", "Next.js", "Docker", "Mistral-7B", "ModernBERT", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/program-guru/green-mind",
  },
  {
    title: "Aviation Ticketing System",
    description:
      "Microservices-based flight booking with real-time seat blocking via WebSockets, JWT auth, Razorpay payments, and a full CI/CD pipeline with GitHub Actions.",
    image: "/images/aviation-ticketing-system.png",
    stack: ["Spring Boot", "Next.js", "RabbitMQ", "Docker", "GitHub Actions", "MySQL", "MongoDB"],
    githubUrl: "https://github.com/program-guru/aviation-ticketing-system",
  },
  {
    title: "SoleStore — E-commerce Platform",
    description:
      "Complete MERN stack e-commerce store with cart, wishlist, Razorpay checkout, and an admin dashboard for product and order management.",
    image: "/images/solestore.png",
    stack: ["MongoDB", "React", "Node.js", "Express", "Razorpay", "Tailwind CSS"],
    githubUrl: "https://github.com/AadityaMall/SoleStore-Ecommerce",
    demoUrl: "https://sole-store.vercel.app/",
  },
  {
    title: "CertiMail — Automated Certificate Sender",
    description:
      "Automates personalized certificate generation and bulk email delivery — send hundreds of certificates in just a few clicks.",
    image: "/images/certimail.png",
    stack: ["React", "Node.js", "Nodemailer", "Tailwind CSS"],
    githubUrl: "https://github.com/AadityaMall/Certi-Mail",
    demoUrl: "https://certi-mail.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <SectionReveal delay={200 + index * 80}>
      <div className="surface-card overflow-hidden flex flex-col md:flex-row group h-full">
        {/* Project image */}
        <div
          className="relative shrink-0 overflow-hidden md:w-56 lg:w-64"
          style={{ minHeight: "180px", background: "var(--color-surface-hover)" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 256px"
          />
          {/* Gradient overlay on mobile */}
          <div
            className="md:hidden absolute inset-0"
            style={{
              background: "linear-gradient(to top, var(--color-surface) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="text-base font-bold leading-snug"
              style={{ color: "var(--color-text)" }}
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  <Github size={15} strokeWidth={2} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  <ExternalLink size={15} strokeWidth={2} />
                </a>
              )}
            </div>
          </div>

          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="skill-pill"
                style={{ fontSize: "0.7rem", padding: "0.2rem 0.55rem" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="section-label mb-4 block">Projects</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-text)" }}
          >
            Things I&apos;ve built
          </h2>
        </SectionReveal>
        <SectionReveal delay={150}>
          <p
            className="text-base md:text-lg mb-12 max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Academic and personal projects — production-grade architecture, not just tutorials.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
