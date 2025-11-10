import ProjectCard from "@/components/Project/ProjectCard";
import { Suspense } from "react";
import Loader from "@/app/loading";

const projectsData = [
  {
  title: "GreenMind – Adaptive Mental-Health Assessment & Emotion-Aware Support System",
  subtitle: "AI-Powered Polyglot Microservices Platform",
  image: "/images/greenmind.png",
  iconChips: [
    "/svgs/springboot.svg",
    "/svgs/fastapi.svg",
    "/svgs/nextjs.svg",
    "/svgs/docker.svg",
    "/svgs/devcontainer.svg",
    "/svgs/python.svg",
    "/svgs/java.svg",
    "/svgs/git.svg"
  ],
  hosted: false,
  githubOnlyProject: [
    {
      title: "Github",
      link: "https://github.com/program-guru/green-mind",
    },
  ],
  description: `An <span class="text-brandColor">AI-driven mental-health platform</span> combining 
  <span class="text-brandColor">adaptive psychometric testing, emotion-aware journaling, and empathetic AI chatbot</span>
  built on a polyglot microservices system.`,
  bulletPoints: [
    "Developed a <span class='text-brandColor'>Polyglot Microservices Architecture</span> using <span class='text-brandColor'>Spring Boot (Java)</span> for core services, <span class='text-brandColor'>FastAPI (Python)</span> for AI modules, and <span class='text-brandColor'>Next.js</span> for the frontend interface.",
    "Containerized all services using <span class='text-brandColor'>Dev-containers & Docker</span> for reproducible multi-language environments and smooth local-to-cloud deployment.",
    "Integrated <span class='text-brandColor'>Computerized Adaptive Testing (CAT)</span> with <span class='text-brandColor'>Item Response Theory (IRT)</span> for precise, data-driven mental-health assessments using validated scales such as <span class='text-brandColor'>PHQ-9, DASS-42, GAD-7, and SWL-5</span>.",
    "Implemented a <span class='text-brandColor'>RAG (Retrieval-Augmented Generation)</span> based chatbot fine-tuned on <span class='text-brandColor'>CBT and empathy-grounded datasets</span> using <span class='text-brandColor'>Mistral-7B / Llama-3.1</span> for safe and contextual conversations.",
    "Deployed <span class='text-brandColor'>ModernBERT-Large (GoEmotions)</span> model for <span class='text-brandColor'>emotion journaling analytics</span> — enabling users to reflect on emotion trends via real-time charts and <span class='text-brandColor'>interactive Word Clouds</span>.",
    "Designed and visualized personalized dashboards showing <span class='text-brandColor'>CAT θ-scores, emotional trends, and reflection metrics</span> for progress tracking.",
    "Added <span class='text-brandColor'>Breathing Buddy</span> module implementing <span class='text-brandColor'>Box Breathing, 4-7-8, and Coherent Breathing</span> exercises for physiological stress regulation and engagement.",
    "Architected a <span class='text-brandColor'>secure and modular system</span> with <span class='text-brandColor'>Eureka Service Discovery, API Gateway</span> routing, and asynchronous inter-service communication pipelines.",
    "Delivered a <span class='text-brandColor'>clinically aligned, scalable system</span> improving psychological assessment efficiency by nearly <span class='text-brandColor'>90%</span> while maintaining high reliability and interpretability."
  ],
}
,
  {
    title: "Aviation Ticketing System",
    subtitle: "Full Stack Microservices Application",
    image: "/images/aviation-ticketing-system.png",
    iconChips: [
      "/svgs/mongo.svg",
      "/svgs/tailwindcss.svg",
      "/svgs/razorpay.svg",
      "/svgs/nextjs.svg",
      "/svgs/springboot.svg",
      "/svgs/docker.svg",
      "/svgs/rabbitmq.svg",
      "/svgs/git.svg",
      "/svgs/mysql.svg",
    ],
    hosted: false,
    githubOnlyProject: [
      {
        title: "Backend",
        link: "https://github.com/program-guru/aviation-ticketing-system",
      },
      {
        title: "Frontend",
        link: "https://github.com/AadityaMall/on-board",
      },
    ],
    description: `A Complete <span class="text-brandColor">Microservice Architecture Full Stack Application</span> `,
    bulletPoints: [
      "The application is built using <span class='text-brandColor'>Microservice Architecture</span>",
      "The application uses <span class='text-brandColor'>Spring Boot</span> for the backend and <span class='text-brandColor'>NextJS</span> for the frontend.",
      "The application uses <span class='text-brandColor'>MongoDB and MySQL</span> for the database.",
      "The application uses <span class='text-brandColor'>Websockets</span> for realtime seat blocking and booking.",
      "The application uses <span class='text-brandColor'>Spring Security and JWT</span> for authentication and authorization.",
      "The application has complete <span class='text-brandColor'>CI/CD Pipeline</span> using <span class='text-brandColor'>Docker</span> and <span class='text-brandColor'>Github Actions</span>.",
      "The application has both <span class='text-brandColor'>Synchronus ( OpenFeign )</span> and <span class='text-brandColor'>Asynchronus ( RabbitMQ )</span> communication between microservices.",
    ],
  },
  {
    title: "SoleStore Ecommerce",
    subtitle: "MERN Stack Website",
    image: "/images/solestore.png",
    iconChips: [
      "/svgs/mongo.svg",
      "/svgs/react.svg",
      "/svgs/javascript.svg",
      "/svgs/nodejs.svg",
      "/svgs/bootstrap.svg",
      "/svgs/tailwindcss.svg",
      "/svgs/express.svg",
      "/svgs/razorpay.svg",
    ],
    previewLink: "https://sole-store.vercel.app/",
    githubLink: "https://github.com/AadityaMall/SoleStore-Ecommerce",
    description: `A Complete <span class="text-brandColor">MERN Stack ecommerce website</span> which has various pages and functionalities, example Cart, Wishlist, Checkout, Dashboard for Admin etc `,
  },
  {
    title: "CertiMail - Automated Certificate Sender",
    subtitle: "Full Stack Application",
    image: "/images/certimail.png",
    iconChips: [
      "/svgs/react.svg",
      "/svgs/javascript.svg",
      "/svgs/nodejs.svg",
      "/svgs/bootstrap.svg",
      "/svgs/tailwindcss.svg",
    ],
    previewLink: "https://certi-mail.vercel.app/",
    githubLink: "https://github.com/AadityaMall/Certi-Mail",
    description: `CertiMail is a streamlined and efficient <span class="text-brandColor">full stack web application</span> designed to automate certificate generation, distribution, and mass emailing. CertiMail simplifies workflows by enabling users to send personalized certificates and mass emails in just a few clicks. `,
  },
  {
    title: "Personal Portfolio",
    subtitle: "React Website",
    image: "/images/portfolio.png",
    iconChips: [
      "/svgs/nextjs.svg",
      "/svgs/javascript.svg",
      "/svgs/bootstrap.svg",
      "/svgs/tailwindcss.svg",
    ],
    previewLink: "https://aadityamall.tech/",
    githubLink: "https://github.com/AadityaMall/portfolio-nextjs",
    description: 'A personal portfolio website built on <span class = "text-brandColor"> NextJS Framework</span>  and Tailwind CSS',
  },
  {
    title: "Advanced Calculator",
    subtitle: "Python - Tkinter",
    image: "/images/calculator.png",
    iconChips: ["/svgs/python.svg"],
    hosted: false,
    githubOnlyProject: [
      {
        title: "Github",
        link: "https://github.com/AadityaMall/ScientificCalculator",
      },
    ],
    description: `Calculator that performs some basic and advanced functions. This calculator is created with the help of language python.This calculator when started pops up on a screen where we can calculate basic commands like add, subtract, multiply, divide and percentage. There are three other modes added to this calculator, namely - Scientific Salculator , Audio Calculator and Voice Operated Calculator.`,
    bulletPoints: [
      "Scientific Calculator mode enables functions like permutations, Combinations, power, cuberoot, factorial etc.",
      "Audio calculator reads out whatever calculation we enter as well as its answer.",
      "Voice operated Calculator enables user to use his/her own voice to give commands to calculator which then provides the answer.",
    ],
  },
  {
    title: "Contact Book System",
    subtitle: "CPP File Management System",
    image: "/images/CppProject.png",
    iconChips: ["/svgs/cpp.svg"],
    hosted: false,
    githubOnlyProject: [
      {
        title: "Github",
        link: "https://github.com/AadityaMall/PhoneBook-System",
      },
    ],
    description: `This is a demonstration as well as a layout of famous just dial app and its interface where a user can access contacts database of different genre.User can search as well as browse all the contacts from the database.Only admins can add or delete contacts from database.To access the admin abilities, valid user email and password is required.`,
    bulletPoints: [
      'This project is built on concepts of <span class="text-brandColor">OOPS (Object Oriented Programming)</span>',
      'Leveraged <span class="text-brandColor"> File Management System </span> and .txt files to store and use data according to needs',
    ],
  },
];

const ProjectsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="mt-[100px] mx-10">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My <span className="text-brandColor">Projects</span>
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Here are some of the projects that I have worked on. These projects
          showcase my skills in web development, problem-solving, and creativity.
          Each project is a testament to my dedication to building impactful and
          user-centric solutions.
        </p>
        {/* Project Cards */}
        <div className="flex-row justify-center items-start">
          {projectsData.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default ProjectsPage;
