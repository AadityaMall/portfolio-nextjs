"use client";

import Image from "next/image";

const positions = [
  {
    image: "/images/IET.png",
    organization: "IET MPSTME",
    steps: [
      { label: "Student Mentor",          period: "2025–2026" },
      { label: "Chairperson",             period: "2024–2025" },
      { label: "Head – Public Relations", period: "2023–2024" },
      { label: "Executive – CP",          period: "2022–2023" },
    ],
  },
  {
    image: "/images/GDSC.png",
    organization: "Google Developers Student Club",
    steps: [
      { label: "Executive – Competitive Programming", period: "2022–2023" },
    ],
  },
  {
    image: "/images/tq.jpg",
    organization: "Taqeeq – Annual Techfest NMIMS",
    steps: [
      { label: "Sub-Head – Publicity", period: "2023–2024" },
      { label: "Executive – Publicity",period: "2022–2023" },
    ],
  },
];

export default function Positions() {
  return (
    <section
      id="positions"
      className="relative py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 reveal">
          <div className="flex items-center gap-3">
            <span className="glow-dot" />
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest uppercase">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Positions of <span className="gradient-text">Responsibility</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 reveal delay-200">
          {positions.map((pos, i) => (
            <div
              key={i}
              className="glass-card group rounded-2xl p-6 flex flex-col gap-4 hover:border-[rgba(0,245,255,0.2)] transition-all duration-500"
            >
              {/* Org */}
              <div className="flex items-center gap-4">
                <div className="size-14 shrink-0 rounded-xl bg-white/10 flex items-center justify-center p-2 overflow-hidden">
                  <Image
                    src={pos.image}
                    alt={pos.organization}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#00f5ff] transition-colors">
                  {pos.organization}
                </h3>
              </div>

              {/* Steps */}
              <div className="relative flex flex-col gap-0">
                {pos.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-3 relative">
                    {/* connector line */}
                    {j < pos.steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-[6px] top-4 bottom-0 w-px bg-[rgba(0,245,255,0.15)]"
                      />
                    )}
                    {/* dot */}
                    <div
                      className="shrink-0 mt-1.5 size-3 rounded-full border-2 z-10"
                      style={{
                        borderColor: j === 0 ? "#00f5ff" : "rgba(255,255,255,0.2)",
                        background: j === 0 ? "#00f5ff" : "transparent",
                        boxShadow: j === 0 ? "0 0 6px #00f5ff" : "none",
                      }}
                    />
                    <div className="pb-3">
                      <p className="text-sm font-medium text-white/80">{step.label}</p>
                      <p className="text-xs font-mono text-white/35">{step.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
