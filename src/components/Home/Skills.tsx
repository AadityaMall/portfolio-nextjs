import Image from "next/image";
const Skills = () => {
  const codeSkills = [
    {
      name: "C++",
      image: "/svgs/cpp.svg",
    },
    {
      name: "CSS",
      image: "/svgs/css.svg",
    },
    {
      name: "HTML",
      image: "/svgs/html.svg",
    },
    {
      name: "JavaScript",
      image: "/svgs/javascript.svg",
    },
    {
      name: "PHP",
      image: "/svgs/php.svg",

    },
    {
      name: "Python",
      image: "/svgs/python.svg",
    },
    {
      name: "Java",
      image: "/svgs/java.svg",
    },
    {
      name: "TypeScript",
      image: "/svgs/typescript.svg",
    },
  ];
  const frontendFrameworks = [
    {
      name: "React",
      image: "/svgs/react.svg",
    },
    {
      name: "Next.js",
      image: "/svgs/nextjs.svg",
    },
    {
      name: "Tailwind CSS",
      image: "/svgs/tailwindcss.svg",
    },
    {
      name: "Bootstrap",
      image: "/svgs/bootstrap.svg",
    },
    {
      name: "Codeigniter",
      image: "/svgs/codeigniter.svg",
    },
  ];
  const backendFrameworks = [
    {
      name: "Node.js",
      image: "/svgs/nodejs.svg",
    },
    {
      name: "Express",
      image: "/svgs/express.svg",
    },
    {
      name: "Fastify",
      image: "/svgs/fastify.svg",
    },
    {
      name: "Spring Boot",
      image: "/svgs/springboot.svg",
    },
    {
      name: "FastAPI",
      image: "/svgs/fastapi.svg",
    }
  ];
  const databases = [
    {
      name: "MySQL",
      image: "/svgs/mysql.svg",
    },
    {
      name: "MongoDB",
      image: "/svgs/mongo.svg",
    },
    {
      name: "PostgreSQL",
      image: "/svgs/postgres.svg",
    },
    {
      name:"Redis",
      image:"/svgs/redis.svg",
    }
  ];
  const tools = [
    {
      name: "Git",
      image: "/svgs/git.svg",
    },
        {
      name: "Razorpay",
      image: "/svgs/razorpay.svg",
    },
    {
      name: "RabbitMQ",
      image: "/svgs/rabbitmq.svg",
    },
    {
      name: "Docker",
      image: "/svgs/docker.svg"
    },
    {
      name:"Devcontainer",
      image:"/svgs/devcontainer.svg"
    },
    {
      name: "Postman",
      image: "/svgs/postman.svg",
    },
    {
      name: "VS Code",
      image: "/svgs/vscode.svg",
    },
    {
      name: "Intellij IDEA",
      image: "/svgs/intellij.svg",
    },
    {
      name: "Eclipse",
      image: "/svgs/eclipse.svg",
    }

  ];
  return (
    <div className="m-3 mb-0 flex flex-col justify-center items-center">
      <h1 className="text-white text-center my-4">
        My <strong className="text-brandColor">Skillset</strong>
      </h1>
      <h3 className="text-white text-center my-4">
        Programming <strong className="text-brandColor">Languages</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {codeSkills.map((skill, index) => (
          <div
            className="flex flex-col items-center justify-center
            border border-brandColor rounded-xl shadow-lg hover:scale-105 transition-transform duration-200
            p-6"
            key={index}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2 h-full md:w-32"
            />
            <span className="text-brandColor text-xs font-semibold mt-2 tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <h3 className="mt-10 text-white text-center my-4">
        Frameworks <strong className="text-brandColor">and Libraries</strong>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <h3 className="text-center my-4">Frontend Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {frontendFrameworks.map((skill, index) => (
              <div
                className="flex flex-col items-center justify-center
            border border-brandColor rounded-xl shadow-lg hover:scale-105 transition-transform duration-200
            p-6"
                key={index}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-2 h-full md:w-32"
                />
                <span className="text-brandColor text-xs font-semibold mt-2 tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center my-4">Backend Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {backendFrameworks.map((skill, index) => (
              <div
                className="flex flex-col items-center justify-center
            border border-brandColor rounded-xl shadow-lg hover:scale-105 transition-transform duration-200
            p-6"
                key={index}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-2 h-full md:w-32"
                />
                <span className="text-brandColor text-xs font-semibold mt-2 tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-white text-center my-8">
        Known <strong className="text-brandColor">Databases</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {databases.map((skill, index) => (
          <div
            className="flex flex-col items-center justify-center
            border border-brandColor rounded-xl shadow-lg hover:scale-105 transition-transform duration-200
            p-6"
            key={index}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2 h-full md:w-32"
            />
            <span className="text-brandColor text-xs font-semibold mt-2 tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <h3 className="text-white text-center my-8">
        Platforms <strong className="text-brandColor">and Tools</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {tools.map((skill, index) => (
          <div
            className="flex flex-col items-center justify-center
            border border-brandColor rounded-xl shadow-lg hover:scale-105 transition-transform duration-200
            p-6"
            key={index}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2 h-full md:w-32"
            />
            <span className="text-brandColor text-xs font-semibold mt-2 tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
