"use client";
import Image from "next/image";
import SectionReveal from "@/components/Layout/SectionReveal";

const stats = [
  { value: "3.77", label: "CGPA", unit: "/4" },
  { value: "3+", label: "Years building", unit: "" },
  { value: "3", label: "Clients delivered for", unit: "" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-5 md:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="section-label mb-4 block">About</span>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/images/AADITYA.JPG"
              alt="Aaditya Mall"
              width={200}
              height={300}
              className="relative rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700"
              priority
            />

          </div>
          <div>
            <SectionReveal delay={100}>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Engineer by training.
                <br />
                <span style={{ color: "var(--color-primary)" }} className="block mt-2">Builder by instinct.</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p
                className="text-base md:text-lg leading-relaxed max-w-2xl mb-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                I&apos;m a Computer Engineering (AI) student at NMIMS University who builds real,
                production-grade systems — not academic exercises. My stack spans Spring Boot
                microservices, Next.js, Node.js, and data science tooling.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
                style={{ color: "var(--color-text-muted)" }}
              >
                I&apos;ve delivered freelance web applications for three clients, interned in data
                science working on credit risk ML, and built complex systems involving AI, RAG,
                and psychometric assessment. I care about code that ships and systems that scale.
              </p>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={300}>

              <div className="flex flex-wrap gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="surface-card px-6 py-5 flex flex-col gap-1 min-w-[140px]"
                  >
                    <div className="flex items-baseline gap-0.5">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
