"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGlobe,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  previewLink?: string;
  githubLink: string;
  iconChips: string[];
  bulletPoints?: string[];
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
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="m-2">
      <div className="bg-black text-white border-2 border-brandColor rounded-lg overflow-hidden">
        <div className="p-4 pb-0">
          <h4 className="font-bold text-3xl truncate">{title}</h4>
          <h6 className="text-brandColor font-bold">{subtitle}</h6>
        </div>
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt="project pic"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className="p-4 pt-0">
          <p className="truncate" dangerouslySetInnerHTML={{ __html: description }}></p>
          <div className="flex space-x-2 mt-4">
            {previewLink && (
              <Link
                href={previewLink}
                className="flex items-center no-underline font-bold bg-brandColor text-black px-4 py-2 rounded"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span className="ml-2">Live Preview</span>
              </Link>
            )}
            <Link
              href={githubLink}
              className="flex items-center no-underline font-bold bg-brandColor text-black px-4 py-2 rounded"
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              <span className="ml-2">Github</span>
            </Link>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {iconChips.map((icon, index) => (
              <Image key={index} src={icon} alt="tech icon" width={35} height={35} />
            ))}
          </div>
          <button onClick={() => setExpanded(!expanded)} className="text-white">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        {expanded && (
          <div className="p-4 transition-all duration-300">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <ul className="list-disc pl-5 mt-2">
              {bulletPoints?.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
