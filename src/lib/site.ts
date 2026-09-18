// Single source of truth for domain + identity data used across metadata,
// sitemap, robots, manifest, and structured data. Update `url` here when
// the site moves to a custom domain — nothing else needs to change.
export const siteConfig = {
  name: "Aaditya Mall",
  url: "https://aadityamall.vercel.app",
  titleDefault: "Aaditya Mall — Software Engineer & Data Scientist",
  titleTemplate: "%s | Aaditya Mall",
  description:
    "Aaditya Mall is a Software Engineer and Data Scientist building production-grade systems — Spring Boot microservices, Next.js applications, FastAPI backends, and data science tooling. Full-stack developer available for freelance work.",
  keywords: [
    "Aaditya Mall",
    "Aaditya Mall software engineer",
    "Aaditya Mall data scientist",
    "Aaditya Mall NMIMS",
    "Aaditya Mall developer",
    "software engineer",
    "data scientist",
    "full stack developer",
    "backend engineer",
    "Next.js developer",
    "Spring Boot developer",
    "freelance developer",
    "portfolio",
  ],
  author: "Aaditya Mall",
  email: "aadityarmall@gmail.com",
  profileImage: "/images/aaditya-mall.jpg",
  icon192: "/images/aaditya-192.png",
  icon512: "/images/aaditya-512.png",
  googleSiteVerification: "DzHbZRucAAGkezwM3uRsioNaHtevfW5BoQk-iNPSO6s",
  social: {
    linkedin: "https://www.linkedin.com/in/aaditya-mall-b45a48216/",
    github: "https://github.com/aadityamall/",
    twitter: "@AadityaMall",
  },
  jobTitles: [
    "Software Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Backend Engineer",
  ],
  alumniOf: "NMIMS University",
} as const;
