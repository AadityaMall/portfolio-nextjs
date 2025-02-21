"use client";
import dynamic from "next/dynamic";

// Dynamically import ResumeClient and disable SSR
const Resume = dynamic(() => import("@/components/Layout/CV"), { ssr: false });

const ResumePage = () => {
  return <Resume />;
};

export default ResumePage;
