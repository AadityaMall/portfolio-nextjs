"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ── Types ──────────────────────────────────────────────────────────── */
interface Achievement {
  title: string;
  description: string;
  year?: string;
  organization?: string;
  image?: string;
}
interface Publication {
  title: string;
  description: string;
  conference?: string;
  year?: string;
  status: "accepted" | "published" | "submitted";
}
interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialId?: string;
  link?: string;
  image: string;
}

/* ── Achievement Card ───────────────────────────────────────────────── */
const AchievementCard = ({ a }: { a: Achievement }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card group rounded-2xl p-6 flex gap-4 items-start hover:border-[rgba(0,245,255,0.2)] transition-all duration-500"
  >
    {a.image && (
      <div className="shrink-0 size-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden p-2">
        <Image src={a.image} alt={a.title} width={48} height={48} className="object-contain" />
      </div>
    )}
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h4 className="font-bold text-white group-hover:text-[#00f5ff] transition-colors">{a.title}</h4>
        {a.year && (
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00f5ff]">
            {a.year}
          </span>
        )}
      </div>
      <p className="text-sm text-white/50 leading-relaxed">{a.description}</p>
      {a.organization && (
        <p className="text-xs font-medium text-[#00f5ff]/70 flex items-center gap-1.5">
          <span className="size-1 rounded-full bg-[#00f5ff]" />
          {a.organization}
        </p>
      )}
    </div>
  </motion.div>
);

/* ── Publication Card ───────────────────────────────────────────────── */
const statusStyle: Record<Publication["status"], string> = {
  published: "bg-green-500/10 text-green-400 border-green-500/30",
  accepted:  "bg-blue-500/10 text-blue-400 border-blue-500/30",
  submitted: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

const PublicationCard = ({ p }: { p: Publication }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card group rounded-2xl p-6 flex flex-col gap-3 hover:border-[rgba(168,85,247,0.25)] transition-all duration-500"
  >
    <div className="flex items-start justify-between gap-3 flex-wrap">
      <div className="flex flex-col gap-0.5">
        <h4 className="font-bold text-white group-hover:text-[#a855f7] transition-colors leading-snug">{p.title}</h4>
        {p.conference && <p className="text-xs text-[#a855f7]/70 italic">{p.conference}</p>}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {p.year && <span className="text-xs text-white/30 font-mono">{p.year}</span>}
        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wide ${statusStyle[p.status]}`}>
          {p.status}
        </span>
      </div>
    </div>
    <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
  </motion.div>
);

/* ── Certification Card ─────────────────────────────────────────────── */
const CertificationCard = ({ c }: { c: Certification }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="glass-card group h-full rounded-2xl p-5 flex flex-col gap-4 hover:border-[rgba(0,245,255,0.2)] transition-all duration-500"
  >
    {/* Logo */}
    <div className="h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3 overflow-hidden group-hover:bg-white/10 transition-colors">
      <Image
        src={c.image}
        alt={c.name}
        width={90}
        height={90}
        className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
        onError={(e) => { (e.target as HTMLImageElement).src = "/images/infosys.webp"; }}
      />
    </div>
    {/* Details */}
    <div className="flex flex-col gap-1 flex-1">
      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#00f5ff] transition-colors">{c.name}</h4>
      <p className="text-xs text-white/40">{c.issuer}</p>
      {c.year && <p className="text-xs text-white/25 font-mono">Issued {c.year}</p>}
    </div>
    {c.link && (
      <a
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: "none" }}
        className="flex items-center gap-1.5 text-xs text-[#00f5ff] font-semibold hover:gap-2.5 transition-all duration-300"
      >
        Verify credential
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    )}
  </motion.div>
);

/* ── Recognition Section ────────────────────────────────────────────── */
export default function Recognition() {
  const achievements: Achievement[] = [
    {
      title: "Specialist Programmer Selection",
      description: "Selected as a Specialist Programmer through HackWithInfy, recognising exceptional coding talent and problem-solving abilities.",
      year: "2025",
      organization: "HackWithInfy",
      image: "/images/infosys.webp",
    },
  ];

  const publications: Publication[] = [
    {
      title: "Research Paper",
      description: "GreenMind: Adaptive Mental Health Assessment and Emotion-Aware Support System",
      conference: "ICAIIE2026 — 2nd International Conference on Academic & Industrial Innovations in Engineering",
      year: "2026",
      status: "accepted",
    },
  ];

  const certifications: Certification[] = [
    { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", year: "2026", link: "https://www.credly.com/badges/dcb26bdd-fbd1-4a05-a518-cdc75a0ebe09", image: "/images/cloud_practitioner.png" },
    { name: "AWS Academy Graduate – Cloud Architecting", issuer: "Amazon Web Services", year: "2026", link: "https://www.credly.com/badges/a580c798-67db-43f4-8970-a8eff1e97054/linked_in_profile", image: "/images/cloud_architecting.png" },
    { name: "Data Analysis & Visualization with Power BI", issuer: "Microsoft", year: "2025", credentialId: "J1ZKOKPNUT2D", link: "https://coursera.org/share/41249295fd2ec9da065a2d0c146d9ab0", image: "/images/microsoft.jpeg" },
    { name: "MongoDB and the Document Model", issuer: "MongoDB", year: "2024", credentialId: "MDBplkd8afg37", link: "https://learn.mongodb.com/c/PUP_s1jKRjyct9b3I1CmMA", image: "/svgs/mongo.svg" },
    { name: "Problem Solving (Basic)", issuer: "HackerRank", year: "2022", credentialId: "56a7fd1a6755", link: "https://www.hackerrank.com/certificates/56a7fd1a6755", image: "/images/hackerrank.webp" },
    { name: "Python (Basic)", issuer: "HackerRank", year: "2022", link: "https://www.hackerrank.com/certificates/56a7fd1a6755", image: "/images/hackerrank.webp" },
    { name: "Python 101 for Data Science", issuer: "IBM", year: "2022", credentialId: "a24971e3c182443ea34ebc2c973a9c59", link: "https://courses.cognitiveclass.ai/certificates/a24971e3c182443ea34ebc2c973a9c59", image: "/images/ibm.webp" },
  ];

  return (
    <section
      id="recognition"
      className="relative py-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number absolute top-10 left-6 md:left-16 select-none pointer-events-none">
        04
      </span>

      {/* Subtle glow */}
      <div aria-hidden="true" className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 reveal">
          <div className="flex items-center gap-3">
            <span className="glow-dot" style={{ background: "#a855f7", boxShadow: "0 0 8px #a855f7" }} />
            <span className="font-mono text-xs text-[#a855f7] tracking-widest uppercase">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Awards &{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-white/40 max-w-lg">
            Achievements, publications, and certifications that reflect continuous learning and real-world impact.
          </p>
        </div>

        {/* Achievements + Publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-200">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white/60 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#00f5ff]" />
              Achievements
            </h3>
            {achievements.map((a, i) => <AchievementCard key={i} a={a} />)}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white/60 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#a855f7]" />
              Publications
            </h3>
            {publications.map((p, i) => <PublicationCard key={i} p={p} />)}
          </div>
        </div>

        {/* Certifications carousel */}
        <div className="flex flex-col gap-6 reveal delay-300">
          <h3 className="font-semibold text-white/60 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#00f5ff]" />
            Certifications
          </h3>
          <div className="relative px-6 md:px-14">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-4">
                {certifications.map((c, i) => (
                  <CarouselItem key={i} className="pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <CertificationCard c={c} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                style={{ cursor: "none" }}
                className="hidden md:flex -left-5 md:-left-10 border border-white/15 bg-[rgba(2,2,6,0.8)] text-white hover:bg-[rgba(0,245,255,0.1)] hover:border-[rgba(0,245,255,0.4)] hover:text-[#00f5ff] transition-all"
              />
              <CarouselNext
                style={{ cursor: "none" }}
                className="hidden md:flex -right-5 md:-right-10 border border-white/15 bg-[rgba(2,2,6,0.8)] text-white hover:bg-[rgba(0,245,255,0.1)] hover:border-[rgba(0,245,255,0.4)] hover:text-[#00f5ff] transition-all"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
