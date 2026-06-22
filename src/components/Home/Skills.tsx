"use client";

import Image from "next/image";
import { Code2, BrainCircuit, Cloud } from "lucide-react";
import SectionReveal from "@/components/Layout/SectionReveal";

interface Skill {
  name: string;
  icon?: string; // path to /svgs/
}

interface SkillBucket {
  lucideIcon: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
}

const buckets: SkillBucket[] = [
  {
    lucideIcon: <Code2 size={20} strokeWidth={2} />,
    title: "Development",
    description: "Languages, frameworks, and backend systems for building full-stack applications end-to-end.",
    skills: [
      { name: "TypeScript",  icon: "/svgs/typescript.svg"  },
      { name: "JavaScript",  icon: "/svgs/javascript.svg"  },
      { name: "Java",        icon: "/svgs/java.svg"        },
      { name: "Python",      icon: "/svgs/python.svg"      },
      { name: "C++",         icon: "/svgs/cpp.svg"         },
      { name: "Next.js",     icon: "/svgs/nextjs.svg"      },
      { name: "React",       icon: "/svgs/react.svg"       },
      { name: "Spring Boot", icon: "/svgs/springboot.svg"  },
      { name: "Node.js",     icon: "/svgs/nodejs.svg"      },
      { name: "Express",     icon: "/svgs/express.svg"     },
      { name: "FastAPI",     icon: "/svgs/fastapi.svg"     },
      { name: "PostgreSQL",  icon: "/svgs/postgres.svg"    },
      { name: "MongoDB",     icon: "/svgs/mongo.svg"       },
      { name: "MySQL",       icon: "/svgs/mysql.svg"       },
      { name: "Redis",       icon: "/svgs/redis.svg"       },
      { name: "RabbitMQ",    icon: "/svgs/rabbitmq.svg"    },
      { name: "Tailwind CSS",icon: "/svgs/tailwindcss.svg" },
    ],
  },
  {
    lucideIcon: <BrainCircuit size={20} strokeWidth={2} />,
    title: "AI & Data",
    description: "Machine learning tooling, data pipelines, and LLM integration for intelligent systems.",
    skills: [
      { name: "Python",        icon: "/svgs/python.svg"   },
      { name: "FastAPI",       icon: "/svgs/fastapi.svg"  },
      { name: "Pandas"                                     },
      { name: "NumPy"                                      },
      { name: "Scikit-learn"                               },
      // { name: "BERT / ModernBERT"                          },
      // { name: "Mistral-7B"                                 },
      // { name: "Llama 3.1"                                  },
      { name: "RAG Pipelines"                              },
      // { name: "LangChain"                                  },
      { name: "Credit Risk ML"                             },
      { name: "IRT / CAT"                                  },
      { name: "Power BI"                                   },
    ],
  },
  {
    lucideIcon: <Cloud size={20} strokeWidth={2} />,
    title: "Cloud & DevOps",
    description: "Infrastructure, containerization, CI/CD, and cloud platforms for production deployments.",
    skills: [
      { name: "Docker",        icon: "/svgs/docker.svg"       },
      { name: "Dev Containers",icon: "/svgs/devcontainer.svg" },
      { name: "Git",           icon: "/svgs/git.svg"          },
      { name: "Postman",       icon: "/svgs/postman.svg"      },
      { name: "GitHub Actions"                                 },
      { name: "AWS EC2 / S3"                                   },
      { name: "AWS Architecting"                               },
      { name: "Firebase"                                       },
      { name: "Vercel"                                         },
      { name: "Linux"                                          },
      { name: "Nginx"                                          },
      { name: "Microservices"                                  },
    ],
  },
];

/* ── Skill chip with optional SVG icon ───────────────────────────── */
function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 group"
      style={{
        background: "color-mix(in oklch, var(--color-primary) 5%, transparent)",
        borderColor: "color-mix(in oklch, var(--color-primary) 18%, var(--color-border))",
      }}
    >
      {skill.icon && (
        <Image
          src={skill.icon}
          alt={skill.name}
          width={18}
          height={18}
          className="object-contain shrink-0"
          style={{ filter: "saturate(1.1) brightness(0.95)" }}
        />
      )}
      <span
        className="text-sm font-medium leading-none"
        style={{ color: "var(--color-text)" }}
      >
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <span className="section-label mb-4 block">Skills</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-text)" }}
          >
            What I work with
          </h2>
        </SectionReveal>
        <SectionReveal delay={150}>
          <p
            className="text-base md:text-lg mb-14 max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Three technology domains — each battle-tested on real projects, not tutorials.
          </p>
        </SectionReveal>

        {/* Buckets */}
        <div className="flex flex-col gap-6">
          {buckets.map((bucket, i) => (
            <SectionReveal key={bucket.title} delay={200 + i * 100}>
              <div className="surface-card p-6 md:p-8">
                {/* Bucket header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                    style={{
                      background: "color-mix(in oklch, var(--color-primary) 12%, transparent)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {bucket.lucideIcon}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {bucket.title}
                    </h3>
                    <p
                      className="text-xs mt-0.5 hidden sm:block"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {bucket.description}
                    </p>
                  </div>
                </div>

                {/* Description on mobile */}
                <p
                  className="text-xs mb-4 sm:hidden"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {bucket.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-5"
                  style={{ background: "var(--color-border)" }}
                />

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {bucket.skills.map(skill => (
                    <SkillChip key={skill.name} skill={skill} />
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
