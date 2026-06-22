import ProjectCard from "@/components/Project/ProjectCard";

const projectsData = [
  {
    title: "GreenMind – Adaptive Mental-Health Assessment & Emotion-Aware Support System",
    subtitle: "AI-Powered Polyglot Microservices Platform",
    image: "/images/greenmind.png",
    iconChips: [
      "/svgs/springboot.svg","/svgs/fastapi.svg","/svgs/nextjs.svg",
      "/svgs/docker.svg","/svgs/devcontainer.svg","/svgs/python.svg",
      "/svgs/java.svg","/svgs/git.svg","/svgs/postgres.svg","/svgs/redis.svg",
    ],
    hosted: false,
    githubOnlyProject: [{ title: "Github", link: "https://github.com/program-guru/green-mind" }],
    description: `An <span class="text-[#00f5ff]">AI-driven mental-health platform</span> combining <span class="text-[#00f5ff]">adaptive psychometric testing, emotion-aware journaling, and empathetic AI chatbot</span> built on a polyglot microservices system.`,
    bulletPoints: [
      "Developed a <span class='text-[#00f5ff]'>Polyglot Microservices Architecture</span> using <span class='text-[#00f5ff]'>Spring Boot (Java)</span> for core services, <span class='text-[#00f5ff]'>FastAPI (Python)</span> for AI modules, and <span class='text-[#00f5ff]'>Next.js</span> for the frontend interface.",
      "Containerized all services using <span class='text-[#00f5ff]'>Dev-containers & Docker</span> for reproducible multi-language environments and smooth local-to-cloud deployment.",
      "Integrated <span class='text-[#00f5ff]'>Computerized Adaptive Testing (CAT)</span> with <span class='text-[#00f5ff]'>Item Response Theory (IRT)</span> for precise, data-driven mental-health assessments.",
      "Implemented a <span class='text-[#00f5ff]'>RAG (Retrieval-Augmented Generation)</span> chatbot fine-tuned on CBT datasets using <span class='text-[#00f5ff]'>Mistral-7B / Llama-3.1</span>.",
      "Deployed <span class='text-[#00f5ff]'>ModernBERT-Large</span> for <span class='text-[#00f5ff]'>emotion journaling analytics</span> with real-time charts and Word Clouds.",
      "Delivered a clinically aligned system improving psychological assessment efficiency by nearly <span class='text-[#00f5ff]'>90%</span>.",
    ],
  },
  {
    title: "Aviation Ticketing System",
    subtitle: "Full Stack Microservices Application",
    image: "/images/aviation-ticketing-system.png",
    iconChips: [
      "/svgs/mongo.svg","/svgs/tailwindcss.svg","/svgs/razorpay.svg",
      "/svgs/nextjs.svg","/svgs/springboot.svg","/svgs/docker.svg",
      "/svgs/rabbitmq.svg","/svgs/git.svg","/svgs/mysql.svg",
    ],
    hosted: false,
    githubOnlyProject: [
      { title: "Backend", link: "https://github.com/program-guru/aviation-ticketing-system" },
      { title: "Frontend", link: "https://github.com/AadityaMall/on-board" },
    ],
    description: `A Complete <span class="text-[#00f5ff]">Microservice Architecture Full Stack Application</span> with real-time seat booking, payment integration, and CI/CD.`,
    bulletPoints: [
      "Built using <span class='text-[#00f5ff]'>Microservice Architecture</span> with Spring Boot and Next.js.",
      "Uses <span class='text-[#00f5ff]'>WebSockets</span> for real-time seat blocking and booking.",
      "Implements <span class='text-[#00f5ff]'>Spring Security & JWT</span> for authentication.",
      "Complete <span class='text-[#00f5ff]'>CI/CD Pipeline</span> using Docker and GitHub Actions.",
      "Both <span class='text-[#00f5ff]'>Synchronous (OpenFeign)</span> and <span class='text-[#00f5ff]'>Asynchronous (RabbitMQ)</span> inter-service communication.",
    ],
  },
  {
    title: "SoleStore Ecommerce",
    subtitle: "MERN Stack Website",
    image: "/images/solestore.png",
    iconChips: [
      "/svgs/mongo.svg","/svgs/react.svg","/svgs/javascript.svg",
      "/svgs/nodejs.svg","/svgs/bootstrap.svg","/svgs/tailwindcss.svg",
      "/svgs/express.svg","/svgs/razorpay.svg",
    ],
    previewLink: "https://sole-store.vercel.app/",
    githubLink: "https://github.com/AadityaMall/SoleStore-Ecommerce",
    description: `A Complete <span class="text-[#00f5ff]">MERN Stack ecommerce website</span> with Cart, Wishlist, Checkout, Razorpay payments, and an Admin Dashboard.`,
  },
  {
    title: "CertiMail – Automated Certificate Sender",
    subtitle: "Full Stack Application",
    image: "/images/certimail.png",
    iconChips: [
      "/svgs/react.svg","/svgs/javascript.svg","/svgs/nodejs.svg",
      "/svgs/bootstrap.svg","/svgs/tailwindcss.svg",
    ],
    previewLink: "https://certi-mail.vercel.app/",
    githubLink: "https://github.com/AadityaMall/Certi-Mail",
    description: `CertiMail automates <span class="text-[#00f5ff]">certificate generation, distribution, and mass emailing</span> — send personalized certificates in just a few clicks.`,
  },
  {
    title: "Personal Portfolio",
    subtitle: "Next.js Website",
    image: "/images/portfolio.png",
    iconChips: ["/svgs/nextjs.svg","/svgs/javascript.svg","/svgs/tailwindcss.svg"],
    previewLink: "https://aadityamall.tech/",
    githubLink: "https://github.com/AadityaMall/portfolio-nextjs",
    description: `A personal portfolio website built on <span class="text-[#00f5ff]">Next.js</span> and Tailwind CSS with cinematic dark aesthetics.`,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-10"
    >
      {/* Section number */}
      <span className="section-number absolute top-10 right-6 md:right-16 select-none pointer-events-none">
        05
      </span>

      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 reveal">
          <div className="flex items-center gap-3">
            <span className="glow-dot" />
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest uppercase">Selected work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-white/40 max-w-lg">
            From microservices platforms to AI systems — every project ships with production-grade architecture.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 reveal delay-200">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
