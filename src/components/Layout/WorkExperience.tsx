"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Chip = ({ label, icon }: { label: string; icon?: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60">
    {icon && <Image src={icon} alt={label} width={14} height={14} className="object-contain" />}
    <span>{label}</span>
  </div>
);

const experiences = [
  {
    image: "/images/protium.png",
    company: "Protium Finance Limited",
    role: "Data Science Intern",
    imageClass: "bg-white p-2 rounded-xl",
    duration: "Jan 2026 – Jul 2026",
    location: "On-site, Mumbai",
    points: [
      "Working in risk and analytics team to analyse data and extract insights.",
      "Credit Risk Analysis and Prediction using Machine Learning Algorithms.",
      "Data wrangling and analysis with Python to drive data-driven decisions.",
    ],
    skills: [{ label: "Python", icon: "/svgs/python.svg" }],
    link: undefined,
  },
  {
    image: "/images/aambaazaar.svg",
    company: "Aambaazaar",
    imageClass: "bg-white p-2 rounded-xl",
    role: "Freelance Full Stack Developer",
    duration: "Apr 2025 – Jun 2025",
    location: "Remote",
    points: [
      "Designed and developed an Admin Panel and Ecommerce Marketplace using Next.js and Node.js.",
      "Integrated Razorpay for secure payment processing with production-level checkout flow.",
      "Implemented server-side rendering and SEO optimization for high performance.",
    ],
    link: "https://aambaazaar.com/",
    skills: [
      { label: "Next.js", icon: "/svgs/nextjs.svg" },
      { label: "Node.js", icon: "/svgs/nodejs.svg" },
      { label: "Razorpay", icon: "/svgs/razorpay.svg" },
      { label: "Tailwind", icon: "/svgs/tailwindcss.svg" },
    ],
  },
  {
    image: "/images/nobrokerage.png",
    company: "Nobrokerage.com",
    imageClass: "bg-white p-2 rounded-xl",
    role: "Full Stack Developer Intern",
    duration: "Jun 2024 – Jul 2024",
    location: "In Office, Mumbai",
    points: [
      "Developed 2 full MERN stack websites in 45 days.",
      "Worked with PHP and CodeIgniter 4 before migrating to MERN.",
      "Built dual React-Node.js architecture with admin and client dashboards.",
    ],
    skills: [
      { label: "MongoDB", icon: "/svgs/mongo.svg" },
      { label: "React",   icon: "/svgs/react.svg"  },
      { label: "Node.js", icon: "/svgs/nodejs.svg" },
      { label: "PHP",     icon: "/svgs/php.svg"    },
    ],
    link: undefined,
  },
  {
    image: "/images/rbl.png",
    company: "RBL Bank",
    imageClass: "bg-white p-2 rounded-xl",
    role: "Product Intern",
    duration: "Jun 2023 – Jul 2023",
    location: "In Office, Mumbai",
    points: [
      "Competition analysis for the proposed RBL Super App.",
      "Designed Information Architecture and Flowcharts to map user interactions.",
      "Contributed to UI/UX design improvements through data-driven insights.",
    ],
    skills: [
      { label: "UX Research" },
      { label: "Information Architecture" },
      { label: "Flow Charting" },
    ],
    link: undefined,
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number absolute top-10 right-6 md:right-16 select-none pointer-events-none">
        03
      </span>

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 reveal">
          <div className="flex items-center gap-3">
            <span className="glow-dot" />
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest uppercase">Where I&apos;ve worked</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, #00f5ff40, #a855f740, transparent)" }}
          />

          {experiences.map((exp, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} pl-14 md:pl-20 relative`}>
              {/* Timeline dot */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 md:left-6 top-6 size-3.5 rounded-full border-2 border-[#00f5ff] bg-[#020206]"
                style={{ boxShadow: "0 0 8px #00f5ff" }}
              />

              <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 group hover:border-[rgba(0,245,255,0.2)] transition-all duration-500">

                {/* Logo */}
                <div className="shrink-0 flex items-start justify-center">
                  <div className={`size-16 md:size-20 overflow-hidden rounded-xl ${exp.imageClass}`}>
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00f5ff] transition-colors">{exp.company}</h3>
                      <p className="text-sm font-medium text-[#a855f7]">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="shrink-0 mt-1.5 size-1 rounded-full bg-[#00f5ff]" />
                        {point}
                      </li>
                    ))}
                    {exp.link && (
                      <li className="flex items-start gap-2">
                        <span className="shrink-0 mt-1.5 size-1 rounded-full bg-[#00f5ff]" />
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ cursor: "none" }} className="text-sm text-[#00f5ff] hover:underline">
                          View Project →
                        </a>
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.skills.map((s, k) => (
                      <Chip key={k} {...s} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
