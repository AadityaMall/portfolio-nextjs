import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
const Skills = () => {
  const codeSkills = [
    {
      name: "C++",
      image: "/svgs/cpp.svg",
      level: "Beginner",
    },
    {
      name: "CSS",
      image: "/svgs/css.svg",
      level: "Intermediate",
    },
    {
      name: "HTML",
      image: "/svgs/html.svg",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      image: "/svgs/javascript.svg",
      level: "Advanced",
    },
    {
      name: "PHP",
      image: "/svgs/php.svg",
      level: "Beginner",
    },
    {
      name: "Python",
      image: "/svgs/python.svg",
      level: "Intermediate",
    },
    {
      name: "Java",
      image: "/svgs/java.svg",
      level: "Intermediate",
    },
    {
      name: "TypeScript",
      image: "/svgs/typescript.svg",
      level: "Beginner",
    },
  ];
  const frontendFrameworks = [
    {
      name: "React",
      image: "/svgs/react.svg",
      level: "Advanced",
    },
    {
      name: "Next.js",
      image: "/svgs/nextjs.svg",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      image: "/svgs/tailwindcss.svg",
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      image: "/svgs/bootstrap.svg",
      level: "Advanced",
    },
    {
      name: "Codeigniter",
      image: "/svgs/codeigniter.svg",
      level: "Beginner",
    },
  ];
  const backendFrameworks = [
    {
      name: "Node.js",
      image: "/svgs/nodejs.svg",
      level: "Intermediate",
    },
    {
      name: "Express",
      image: "/svgs/express.svg",
      level: "Intermediate",
    },
    {
      name: "Fastify",
      image: "/svgs/fastify.svg",
      level: "Beginner",
    },
    {
      name: "Spring Boot",
      image: "/svgs/springboot.svg",
      level: "Beginner",
    },
  ];
  const databases = [
    {
      name: "MySQL",
      image: "/svgs/mysql.svg",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      image: "/svgs/mongo.svg",
      level: "Intermediate",
    },
  ];
  const tools = [
    {
      name: "Git",
      image: "/svgs/git.svg",
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
    },
    {
      name: "Razorpay",
      image: "/svgs/razorpay.svg",
    },
  ];
  return (
    <div className="m-3 mb-0 flex flex-column justify-center items-center">
      <h1 className="text-white text-center my-4">
        My <strong className="text-brandColor">Skillset</strong>
      </h1>
      <h3 className="text-white text-center my-4">
        Programming <strong className="text-brandColor">Languages</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {codeSkills.map((skill, index) => (
          <div
            className="w-full relative text-4xl p-[20px] md:m-[15px] flex flex-col justify-center items-center
              sm:m-[6px] border border-brandColor rounded-lg my-2"
            key={index}
          >
            <Tooltip title={skill.name}>
              <Image
                src={skill.image}
                alt={skill.name}
                width={100}
                height={100}
              />
            </Tooltip>
            <Tooltip title={skill.level}>
              <div className="absolute w-full bottom-0 left-0">
                <div
                  className="h-[8px] bg-brandColor"
                  style={{
                    width:
                      skill.level === "Beginner"
                        ? "50%"
                        : skill.level === "Intermediate"
                        ? "80%"
                        : "100%",
                  }}
                ></div>
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
      <h3 className="text-white text-center my-4">
        Frameworks <strong className="text-brandColor">and Libraries</strong>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <h3 className="text-center my-4">Frontend Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {frontendFrameworks.map((skill, index) => (
              <div
                className="w-full relative text-4xl p-[20px] md:m-[15px] flex flex-col justify-center items-center
              sm:m-[6px] border border-brandColor rounded-lg my-2 md:my-0"
                key={index}
              >
                <Tooltip title={skill.name}>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip title={skill.level}>
                  <div className="absolute w-full bottom-0 left-0">
                    <div
                      className="h-[8px] bg-brandColor"
                      style={{
                        width:
                          skill.level === "Beginner"
                            ? "50%"
                            : skill.level === "Intermediate"
                            ? "80%"
                            : "100%",
                      }}
                    ></div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center my-4">Backend Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {backendFrameworks.map((skill, index) => (
              <div
                className="w-full relative text-4xl p-[20px] md:m-[15px] flex flex-col justify-center items-center
              sm:m-[6px] border border-brandColor rounded-lg my-2 md:my-0"
                key={index}
              >
                <Tooltip title={skill.name}>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                </Tooltip>
                <Tooltip title={skill.level}>
                  <div className="absolute w-full bottom-0 left-0">
                    <div
                      className="h-[8px] bg-brandColor"
                      style={{
                        width:
                          skill.level === "Beginner"
                            ? "50%"
                            : skill.level === "Intermediate"
                            ? "80%"
                            : "100%",
                      }}
                    ></div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-white text-center my-4">
        Known <strong className="text-brandColor">Databases</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <div></div>
        {databases.map((skill, index) => (
          <div
            className="w-full relative text-4xl p-[20px] md:m-[15px] flex flex-col justify-center items-center
              sm:m-[6px] border border-brandColor rounded-lg my-2"
              key={index}
          >
            <Tooltip title={skill.name}>
              <Image
                src={skill.image}
                alt={skill.name}
                width={100}
                height={100}
              />
            </Tooltip>
            <Tooltip title={skill.level}>
              <div className="absolute w-full bottom-0 left-0">
                <div
                  className="h-[8px] bg-brandColor"
                  style={{
                    width:
                      skill.level === "Beginner"
                        ? "50%"
                        : skill.level === "Intermediate"
                        ? "80%"
                        : "100%",
                  }}
                ></div>
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
      <h3 className="text-white text-center my-8">
        Platforms <strong className="text-brandColor">and Tools</strong>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {tools.map((skill, index) => (
            <div
              className="w-full text-4xl min-h-[90%] p-[20px] md:m-[15px] flex flex-col justify-center items-center
              sm:m-[6px] border border-brandColor rounded-lg my-2"
              key={index}
            >
              <Tooltip title={skill.name}>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                />
              </Tooltip>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
