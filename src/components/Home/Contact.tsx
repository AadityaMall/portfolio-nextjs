"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import SectionReveal from "@/components/Layout/SectionReveal";

const links = [
  {
    icon: <Mail size={20} strokeWidth={2} />,
    label: "Email",
    value: "aadityarmall@gmail.com",
    href: "mailto:aadityarmall@gmail.com",
  },
  {
    icon: <Linkedin size={20} strokeWidth={2} />,
    label: "LinkedIn",
    value: "AadityaMall",
    href: "https://www.linkedin.com/in/aaditya-mall-b45a48216/",
  },
  {
    icon: <Github size={20} strokeWidth={2} />,
    label: "GitHub",
    value: "AadityaMall",
    href: "https://github.com/aadityamall/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-5 md:px-8 min-h-[80vh]"
    >
      {/* Subtle teal glow at bottom */}
      <div
        className="teal-glow pointer-events-none"
        aria-hidden="true"
        style={{
          width: "60vw",
          height: "40vw",
          maxWidth: "600px",
          maxHeight: "400px",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.1,
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-10">
        {/* Header */}
        <div>
          <SectionReveal>
            <span className="section-label mb-4 block justify-center">Contact</span>
          </SectionReveal>

          <SectionReveal delay={100}>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-5"
              style={{ color: "var(--color-text)" }}
            >
              Have a website in mind?
            </h2>
          </SectionReveal>

          <SectionReveal delay={200}>
            <a
              href="mailto:aadityarmall@gmail.com"
              className="btn-primary inline-flex text-base px-8 py-3.5"
            >
              <Mail size={17} strokeWidth={2} />
              Let&apos;s talk
            </a>
          </SectionReveal>
        </div>

        {/* Divider */}
        <SectionReveal delay={300} className="w-full max-w-xs">
          <div className="divider-teal" />
        </SectionReveal>

        {/* Direct links */}
        <SectionReveal delay={350}>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="surface-card flex items-center gap-3 px-5 py-3.5 rounded-xl"
              >
                <span style={{ color: "var(--color-primary)" }}>
                  {link.icon}
                </span>
                <div className="flex flex-col items-start">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
