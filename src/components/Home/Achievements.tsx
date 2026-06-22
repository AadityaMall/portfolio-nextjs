"use client";

import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SectionReveal from "@/components/Layout/SectionReveal";

/* ── Data ─────────────────────────────────────────────────────────── */

const achievements = [
  {
    title: "Specialist Programmer — HackWithInfy",
    description:
      "Selected as a Specialist Programmer through HackWithInfy, recognising exceptional coding talent and problem-solving abilities.",
    year: "2025",
    org: "Infosys",
    image: "/images/infosys.webp",
  },
  {
    title: "Research Paper Accepted — ICAIIE 2026",
    description:
      "GreenMind: Adaptive Mental Health Assessment and Emotion-Aware Support System. Accepted at the 2nd International Conference on Academic & Industrial Innovations in Engineering.",
    year: "2026",
    org: "ICAIIE",
    image: null,
  },
];

const leadership = [
  {
    org: "IET MPSTME",
    image: "/images/IET.png",
    roles: [
      { label: "Student Mentor",          period: "2025–2026" },
      { label: "Chairperson",             period: "2024–2025" },
      { label: "Head – Public Relations", period: "2023–2024" },
      { label: "Executive – CP",          period: "2022–2023" },
    ],
  },
  {
    org: "Google Developers Student Club",
    image: "/images/GDSC.png",
    roles: [
      { label: "Executive – Competitive Programming", period: "2022–2023" },
    ],
  },
  {
    org: "Taqeeq – Annual Techfest NMIMS",
    image: "/images/tq.jpg",
    roles: [
      { label: "Sub-Head – Publicity",  period: "2023–2024" },
      { label: "Executive – Publicity", period: "2022–2023" },
    ],
  },
];

const certifications = [
  { name: "AWS Cloud Quest: Cloud Practitioner",        issuer: "Amazon Web Services", year: "2026", link: "https://www.credly.com/badges/dcb26bdd-fbd1-4a05-a518-cdc75a0ebe09",               image: "/images/cloud_practitioner.png" },
  { name: "AWS Academy Graduate – Cloud Architecting",  issuer: "Amazon Web Services", year: "2026", link: "https://www.credly.com/badges/a580c798-67db-43f4-8970-a8eff1e97054",               image: "/images/cloud_architecting.png" },
  { name: "Data Analysis & Visualization with Power BI",issuer: "Microsoft",           year: "2025", link: "https://coursera.org/share/41249295fd2ec9da065a2d0c146d9ab0",                     image: "/images/microsoft.jpeg"        },
  { name: "MongoDB and the Document Model",             issuer: "MongoDB",             year: "2024", link: "https://learn.mongodb.com/c/PUP_s1jKRjyct9b3I1CmMA",                              image: "/svgs/mongo.svg"               },
  { name: "Problem Solving (Basic)",                    issuer: "HackerRank",          year: "2022", link: "https://www.hackerrank.com/certificates/56a7fd1a6755",                             image: "/images/hackerrank.webp"       },
  { name: "Python (Basic)",                             issuer: "HackerRank",          year: "2022", link: "https://www.hackerrank.com/certificates/56a7fd1a6755",                             image: "/images/hackerrank.webp"       },
  { name: "Python 101 for Data Science",                issuer: "IBM",                 year: "2022", link: "https://courses.cognitiveclass.ai/certificates/a24971e3c182443ea34ebc2c973a9c59", image: "/images/ibm.webp"              },
];

/* ── Achievement Card ─────────────────────────────────────────────── */
function AchievementCard({ a }: { a: typeof achievements[0] }) {
  return (
    <div className="surface-card p-5 flex items-start gap-4">
      {a.image && (
        <div
          className="shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white p-1.5"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <Image src={a.image} alt={a.org} width={40} height={40} className="object-contain" />
        </div>
      )}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--color-text)" }}>
            {a.title}
          </h3>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full shrink-0"
            style={{
              background: "color-mix(in oklch, var(--color-primary) 10%, transparent)",
              color: "var(--color-primary)",
            }}
          >
            {a.year}
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {a.description}
        </p>
        <p className="text-xs font-semibold" style={{ color: "var(--color-primary)" }}>
          {a.org}
        </p>
      </div>
    </div>
  );
}

/* ── Leadership Card ──────────────────────────────────────────────── */
function LeadershipCard({ pos }: { pos: typeof leadership[0] }) {
  return (
    <div className="surface-card p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div
          className="shrink-0 w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white p-1"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <Image src={pos.image} alt={pos.org} width={32} height={32} className="object-contain" />
        </div>
        <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--color-text)" }}>
          {pos.org}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {pos.roles.map((role, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className="shrink-0 size-1.5 rounded-full"
                style={{
                  background: i === 0 ? "var(--color-primary)" : "var(--color-border)",
                }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)" }}
              >
                {role.label}
              </span>
            </div>
            <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
              {role.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Certification tile ───────────────────────────────────────────── */
function CertTile({ cert }: { cert: typeof certifications[0] }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card flex items-center gap-3 p-4 group"
    >
      <div
        className="shrink-0 w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <Image
          src={cert.image}
          alt={cert.issuer}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span
          className="text-xs font-semibold leading-snug truncate"
          style={{ color: "var(--color-text)" }}
        >
          {cert.name}
        </span>
        <div className="flex items-center justify-between gap-1">
          <span className="text-xs truncate" style={{ color: "var(--color-text-muted)" }}>
            {cert.issuer}
          </span>
          <span className="text-xs font-mono shrink-0" style={{ color: "var(--color-text-muted)" }}>
            {cert.year}
          </span>
        </div>
      </div>
      <ExternalLink
        size={12}
        strokeWidth={2}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "var(--color-primary)" }}
      />
    </a>
  );
}

/* ── Main Section ─────────────────────────────────────────────────── */
export default function Achievements() {
  const [certsExpanded, setCertsExpanded] = useState(false);
  const visibleCerts = certsExpanded ? certifications : certifications.slice(0, 4);

  return (
    <section id="achievements" className="relative py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div>
          <SectionReveal>
            <span className="section-label mb-4 block">Achievements</span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              Recognition &amp; leadership
            </h2>
          </SectionReveal>
        </div>

        {/* Awards + Leadership */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionReveal delay={150}>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                Awards &amp; Recognition
              </h3>
              {achievements.map(a => <AchievementCard key={a.title} a={a} />)}
            </div>
          </SectionReveal>
          <SectionReveal delay={250}>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                Positions of Responsibility
              </h3>
              {leadership.map(pos => <LeadershipCard key={pos.org} pos={pos} />)}
            </div>
          </SectionReveal>
        </div>

        {/* Certifications */}
        <SectionReveal delay={300}>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {visibleCerts.map(cert => (
                <CertTile key={cert.name} cert={cert} />
              ))}
            </div>
            {certifications.length > 4 && (
              <button
                onClick={() => setCertsExpanded(!certsExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold self-start transition-colors duration-200"
                style={{ color: "var(--color-primary)" }}
              >
                {certsExpanded
                  ? <><ChevronUp size={13} /> Show less</>
                  : <><ChevronDown size={13} /> Show all {certifications.length} certifications</>
                }
              </button>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
