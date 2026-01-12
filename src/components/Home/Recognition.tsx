"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Achievement {
    title: string;
    description: string;
    year?: string;
    organization?: string;
    image?: string;
}

interface Publication {
    title: string;
    description: string;
    conference?: string;
    year?: string;
    status: "accepted" | "published" | "submitted";
    image?: string;
}

interface Certification {
    name: string;
    issuer: string;
    year?: string;
    credentialId?: string;
    link?: string;
    image: string;
}

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative group overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md shadow-lg hover:shadow-brandColor/50 transition-all duration-300 p-6"
    >
        <BorderBeam borderWidth={2} />
        <div className="flex flex-col md:flex-row gap-4 items-start">
            {achievement.image && (
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 p-2 group-hover:bg-white/20 transition-colors">
                    <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>
            )}
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-brandColor transition-colors">
                        {achievement.title}
                    </h4>
                    {achievement.year && (
                        <span className="text-sm text-brandColor font-semibold bg-brandColor/10 px-3 py-1 rounded-full">
                            {achievement.year}
                        </span>
                    )}
                </div>
                <p className="text-gray-300 leading-relaxed mb-2">{achievement.description}</p>
                {achievement.organization && (
                    <p className="text-sm text-brandColor font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brandColor rounded-full"></span>
                        {achievement.organization}
                    </p>
                )}
            </div>
        </div>
    </motion.div>
);

const PublicationCard = ({ publication }: { publication: Publication }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative group overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 via-white/5 to-transparent backdrop-blur-xl shadow-lg hover:shadow-brandColor/40 transition-all duration-300 p-6"
    >
        <BorderBeam borderWidth={2} />
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-white group-hover:text-brandColor transition-colors line-clamp-2">
                        {publication.title}
                    </h4>
                    {publication.conference && (
                        <p className="text-sm text-brandColor/90 font-medium italic">
                            {publication.conference}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-3 self-start md:self-auto">
                    {publication.year && (
                        <span className="text-sm text-gray-400">{publication.year}</span>
                    )}
                    <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase ${
                            publication.status === "published"
                                ? "bg-green-500/15 text-green-400 border border-green-500/40"
                                : publication.status === "accepted"
                                ? "bg-blue-500/15 text-blue-400 border border-blue-500/40"
                                : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/40"
                        }`}
                    >
                        {publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
                    </span>
                </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {publication.description}
            </p>
        </div>
    </motion.div>
);

const CertificationCard = ({
    certification,
}: {
    certification: Certification;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative group h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md shadow-lg hover:shadow-brandColor/50 transition-all duration-300 p-6 flex flex-col"
    >
        <BorderBeam borderWidth={2} />

        {/* Certification Logo */}
        <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 flex items-center justify-center border border-white/10">
            <Image
                src={certification.image}
                alt={certification.name}
                width={120}
                height={120}
                className="object-contain filter group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/infosys.webp";
                }}
            />
        </div>

        {/* Certification Details */}
        <div className="flex-1 flex flex-col">
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brandColor transition-colors line-clamp-2">
                {certification.name}
            </h4>
            <p className="text-sm text-gray-400 mb-3">{certification.issuer}</p>

            <div className="mt-auto space-y-2">
                {certification.year && (
                    <p className="text-xs text-gray-500">Issued: {certification.year}</p>
                )}
                {certification.credentialId && (
                    <p className="text-xs text-gray-500 font-mono">
                        ID: {certification.credentialId}
                    </p>
                )}
                {certification.link && (
                    <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-brandColor hover:text-brandColor/80 font-semibold transition-colors group/link"
                    >
                        <span>Verify Credential</span>
                        <svg
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Recognition = () => {
    // Modular data arrays - easily add/remove items
    const achievements: Achievement[] = [
        {
            title: "Specialist Programmer Selection",
            description:
                "Selected as a Specialist Programmer through HackWithInfy, a competitive national selection program that recognizes exceptional coding talent and problem-solving abilities.",
            year: "2025",
            organization: "HackWithInfy",
            image: "/images/infosys.webp",
        },
    ];

    const publications: Publication[] = [
        {
            title: "Research Paper",
            description:
                "GreenMind: Adaptive Mental Health Assessment and Emotion-Aware Support System",
            conference: "ICAIIE2026 (2nd International Conference On Academic And Industrial Innovations in Engineering)",
            year: "[2026]",
            status: "accepted",
        },
    ];

    const certifications: Certification[] = [
        {
            name: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
            issuer: "Amazon Web Services",
            year: "[2026]",
            link: "https://www.credly.com/badges/dcb26bdd-fbd1-4a05-a518-cdc75a0ebe09",
            image: "/images/cloud_practitioner.png",
        },
        {
            name: "AWS Academy Graduate - Cloud Architecting - Training Badge",
            issuer: "Amazon Web Services",
            year: "[2026]",
            link: "https://www.credly.com/badges/a580c798-67db-43f4-8970-a8eff1e97054/linked_in_profile",
            image: "/images/cloud_architecting.png",
        },
        {
            name: "Data Analysis and Visualization with Power BI",
            issuer: "Microsoft",
            year: "[2025]",
            credentialId: "J1ZKOKPNUT2D",
            link: "https://coursera.org/share/41249295fd2ec9da065a2d0c146d9ab0",
            image: "/images/microsoft.jpeg",
        },
        {
            name: "MongoDB and the Document Model",
            issuer: "MongoDB",
            year: "[2024]",
            credentialId: "MDBplkd8afg37",
            link: "https://learn.mongodb.com/c/PUP_s1jKRjyct9b3I1CmMA",
            image: "/svgs/mongo.svg",
        },
        {
            name: "Problem Solving (Basic)",
            issuer: "HackerRank",
            year: "[2022]",
            credentialId: "56a7fd1a6755",
            link: "https://www.hackerrank.com/certificates/56a7fd1a6755",
            image: "/images/hackerrank.webp",
        },
        {
            name: "Python(Basic)",
            issuer: "HackerRank",
            year: "[2022]",
            credentialId: "56a7fd1a6755",
            link: "https://www.hackerrank.com/certificates/56a7fd1a6755",
            image: "/images/hackerrank.webp",
        },
        {
            name: "Python 101 for Data Science",
            issuer: "IBM",
            year: "[2022]",
            credentialId: "a24971e3c182443ea34ebc2c973a9c59",
            link: "https://courses.cognitiveclass.ai/certificates/a24971e3c182443ea34ebc2c973a9c59",
            image: "/images/ibm.webp",
        },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brandColor/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brandColor/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Recognition
                    </h2>
                    <div className="w-24 h-1 bg-brandColor mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Achievements, publications, and professional certifications that
                        demonstrate my commitment to continuous learning and excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
                    <div className="w-full">
                        {/* Achievements Section */}
                        {achievements.length > 0 && (
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-brandColor mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-brandColor rounded-full"></span>
                                    Achievements
                                </h3>
                                <div className="space-y-4">
                                    {achievements.map((achievement, index) => (
                                        <AchievementCard key={index} achievement={achievement} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="w-full">
                        {/* Publications Section */}
                        {publications.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-brandColor mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-brandColor rounded-full"></span>
                                    Publications
                                </h3>
                                <div className="space-y-4">
                                    {publications.map((publication, index) => (
                                        <PublicationCard key={index} publication={publication} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Certifications Section with Carousel */}
                {certifications.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-brandColor mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-brandColor rounded-full"></span>
                            Certifications
                        </h3>
                        <div className="relative px-8 md:px-16">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {certifications.map((certification, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                                        >
                                            <CertificationCard certification={certification} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 border-2 border-brandColor/50 bg-black/60 backdrop-blur-sm text-brandColor hover:bg-brandColor hover:text-black hover:border-brandColor transition-all duration-300 shadow-lg shadow-brandColor/20" />
                                <CarouselNext className="hidden md:flex -right-4 md:-right-12 border-2 border-brandColor/50 bg-black/60 backdrop-blur-sm text-brandColor hover:bg-brandColor hover:text-black hover:border-brandColor transition-all duration-300 shadow-lg shadow-brandColor/20" />
                            </Carousel>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Recognition;
