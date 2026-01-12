  "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe , faCodeBranch} from "@fortawesome/free-solid-svg-icons";

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
  githubOnlyProject?: any[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
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
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-black/20 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-brandColor/40 transition-transform duration-300 mb-10 hover:-translate-y-1">
<div className="md:w-2/5 w-full relative h-64 md:h-auto flex-shrink-0 rounded-l-2xl overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    style={{ objectFit: "contain" }}
    className={`rounded-l-2xl`}
    priority
  />
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/20 rounded-l-2xl pointer-events-none"></div>
</div>
      {/* Right: Content */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold text-brandColor">{title}</h3>
          <h5 className="text-gray-300 font-semibold mb-4">{subtitle}</h5>

          <p
            className={`text-gray-200 text-sm leading-relaxed transition-all duration-300 ${
              expanded ? "max-h-[1000px]" : "max-h-16 overflow-hidden"
            }`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          {bulletPoints && bulletPoints.length > 0 && (
            <div className="mt-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-brandColor font-semibold text-sm flex items-center gap-1"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>

              {expanded && (
                <ul className="list-disc pl-5 mt-2 text-gray-200 space-y-1">
                  {bulletPoints.map((point, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: point }}
                    ></li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div className="flex gap-2 flex-wrap">
            {iconChips.map((icon, idx) => (
              <Image key={idx} src={icon} alt="tech icon" width={35} height={35} />
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            {!hosted && githubOnlyProject.length > 0
              ? githubOnlyProject.map((proj, idx) => (
                  <Link
                    key={idx}
                    href={proj.link}
                    className="bg-brandColor px-4 py-2 rounded text-black font-semibold text-sm hover:bg-brandColor/80 transition-colors flex items-center gap-1"
                  >
                    <FontAwesomeIcon icon={faCodeBranch} />
                    {proj.title}
                  </Link>
                ))
              : (
                  <>
                    {previewLink && (
                      <Link
                        href={previewLink}
                        className="bg-brandColor px-4 py-2 rounded text-black font-semibold text-sm hover:bg-brandColor/80 transition-colors flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                        Live Preview
                      </Link>
                    )}
                    {githubLink && (
                      <Link
                        href={githubLink}
                        className="bg-brandColor px-4 py-2 rounded text-black font-semibold text-sm hover:bg-brandColor/80 transition-colors flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faCodeBranch} />
                        Github
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
};

export default ProjectCard;
