"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../loading";

// Dynamically import ResumeClient and disable SSR
const Resume = dynamic(() => import("@/components/Layout/CV"), { ssr: false });

const ResumePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Resume />
    </Suspense>
  );
};

export default ResumePage;
