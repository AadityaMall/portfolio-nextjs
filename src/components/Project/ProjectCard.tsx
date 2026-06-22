"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCodeBranch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  previewLink?: string;
  githubLink?: string;
  iconChips: string[];
  bulletPoints?: string[];
  hosted?: boolean;
  githubOnlyProject?: { title: string; link: string }[];
};

export default function ProjectCard({
  title,
  subtitle,
  image,
  description,
  previewLink,
  githubLink,
  iconChips,
  bulletPoints,
  hosted = true,
  githubOnlyProject = [],
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  /* 3-D tilt on mouse move */
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
  };
  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      className="tilt-card glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row mb-8 group"
      style={{ transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)", willChange: "transform" }}
    >
      {/* ── Image ────────────────────────────────────────────────── */}
      <div className="relative md:w-2/5 w-full h-56 md:h-auto flex-shrink-0 overflow-hidden bg-black/40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(2,2,6,0.7)] md:block hidden pointer-events-none" />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-3">
          {/* Subtitle chip */}
          <span className="w-fit text-xs font-mono px-3 py-1 rounded-full border border-[rgba(0,245,255,0.25)] text-[#00f5ff] bg-[rgba(0,245,255,0.05)]">
            {subtitle}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#00f5ff] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-sm text-white/55 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Bullet points */}
          {bulletPoints && bulletPoints.length > 0 && (
            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                style={{ cursor: "none" }}
                className="flex items-center gap-2 text-xs font-semibold text-[#00f5ff] hover:text-[#a855f7] transition-colors mt-1"
              >
                {expanded ? "Show Less" : "Read More"}
                <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} className="w-3 h-3" />
              </button>
              {expanded && (
                <ul className="mt-3 space-y-2">
                  {bulletPoints.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/50 leading-relaxed">
                      <span className="shrink-0 mt-1.5 size-1.5 rounded-full bg-[#00f5ff]" />
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* ── Footer ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-white/5">
          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {iconChips.map((icon, i) => (
              <div
                key={i}
                className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[rgba(0,245,255,0.3)] hover:bg-[rgba(0,245,255,0.06)] transition-all duration-300"
              >
                <Image src={icon} alt="tech" width={18} height={18} className="object-contain" />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 flex-wrap">
            {!hosted && githubOnlyProject.length > 0
              ? githubOnlyProject.map((proj, i) => (
                  <Link
                    key={i}
                    href={proj.link}
                    target="_blank"
                    style={{ cursor: "none" }}
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-[rgba(0,245,255,0.3)] text-[#00f5ff] hover:bg-[rgba(0,245,255,0.08)] transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faCodeBranch} className="w-3 h-3" />
                    {proj.title}
                  </Link>
                ))
              : (
                <>
                  {previewLink && (
                    <Link
                      href={previewLink}
                      target="_blank"
                      style={{ cursor: "none" }}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#a855f7] text-black hover:opacity-90 transition-opacity duration-300"
                    >
                      <FontAwesomeIcon icon={faGlobe} className="w-3 h-3" />
                      Live Preview
                    </Link>
                  )}
                  {githubLink && (
                    <Link
                      href={githubLink}
                      target="_blank"
                      style={{ cursor: "none" }}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-white/15 text-white/60 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faCodeBranch} className="w-3 h-3" />
                      GitHub
                    </Link>
                  )}
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
