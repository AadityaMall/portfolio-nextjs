"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const Chip = ({ label, icon }: { label: string; icon?: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 border border-brandColor rounded-full bg-white/5 backdrop-blur-sm text-sm text-white">
        {icon && <Image src={icon} alt={label} width={18} height={18} />}
        <span>{label}</span>
    </div>
);

const WorkCard = ({
    image,
    company,
    role,
    duration,
    location,
    points,
    skills,
    link,
}: {
    image: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    points: string[];
    skills: { label: string; icon?: string }[];
    link?: string;
}) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-brandColor/40 transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row gap-6"
    >
        <BorderBeam borderWidth={2} />

        {/* Left: Company Logo */}
        <div className="flex justify-center items-center md:w-1/3">
            <div className="bg-white/10 p-4 rounded-2xl">
                <Image
                    src={image}
                    alt={company}
                    width={150}
                    height={150}
                    className="object-contain rounded-lg"
                />
            </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center text-white md:w-2/3 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold">{company}</h3>
                <p className="text-sm text-gray-300">{duration}</p>
            </div>
            <p className="text-lg">
                Role:{" "}
                <span className="text-brandColor font-semibold">{role}</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-400">
                <FontAwesomeIcon icon={faLocationDot} className="text-brandColor" />
                {location}
            </p>

            <ul className="list-disc marker:text-brandColor text-gray-200 text-sm pl-5 space-y-1">
                {points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                {link && (
                    <li>
                        <a href={link} className="text-brandColor">
                            View Project
                        </a>
                    </li>
                )}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill, i) => (
                    <Chip key={i} label={skill.label} icon={skill.icon} />
                ))}
            </div>
        </div>
    </motion.div>
);

const WorkExperience = () => {
    const experiences = [
        {
            image: "/images/aambaazaar.svg",
            company: "Aambaazaar",
            role: "Freelance Full Stack Developer",
            duration: "April 2025 – June 2025",
            location: "Remote",
            points: [
                "Designed and developed an Admin Panel and Ecommerce Marketplace using Next.js and Node.js.",
                "Integrated Razorpay for secure payment processing with production-level checkout flow.",
                "Implemented server-side rendering and SEO optimization for high performance.",
            ],
            link: "https://aambaazaar.com/",
            skills: [
                { label: "Next.js", icon: "/svgs/nextjs.svg" },
                { label: "Node.js", icon: "/svgs/nodejs.svg" },
                { label: "Razorpay", icon: "/svgs/razorpay.svg" },
                { label: "Tailwind CSS", icon: "/svgs/tailwindcss.svg" },
            ],
        },

        {
            image: "/images/nobrokerage.png",
            company: "Nobrokerage.com",
            role: "Full Stack Developer Intern",
            duration: "June 2024 – July 2024",
            location: "In Office, Mumbai",
            points: [
                "Developed 2 full MERN stack websites in 45 days.",
                "Worked with PHP and CodeIgniter 4 Model initially before migrating to MERN.",
                "Built a dual React-Node.js architecture with admin and client dashboards for smooth data control and UI experience.",
            ],
            skills: [
                { label: "MongoDB", icon: "/svgs/mongo.svg" },
                { label: "JavaScript", icon: "/svgs/javascript.svg" },
                { label: "NodeJS", icon: "/svgs/nodejs.svg" },
                { label: "React", icon: "/svgs/react.svg" },
                { label: "PHP", icon: "/svgs/php.svg" },
                { label: "CodeIgniter 4", icon: "/svgs/codeigniter.svg" },
            ],
        },
        {
            image: "/images/rbl.png",
            company: "RBL Bank",
            role: "Product Intern",
            duration: "June 2023 – July 2023",
            location: "In Office, Mumbai",
            points: [
                "Conducted competition analysis for the proposed RBL Super App merging MOBank and MyCard.",
                "Designed Information Architecture and Flowcharts to map user interaction and optimize flow.",
                "Contributed to UI/UX design improvements through data-driven insights and benchmarking.",
            ],
            skills: [
                { label: "Information Architecture" },
                { label: "Flow Charting" },
                { label: "Competition Analysis" },
                { label: "UX Research" },
            ],
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-brandColor mb-12">
                Work Experience
            </h2>
            <div className="flex flex-col gap-10 w-full max-w-6xl">
                {experiences.map((exp, i) => (
                    <WorkCard key={i} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
