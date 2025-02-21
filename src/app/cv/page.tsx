"use client";
import React from "react";
import { Button } from "@mui/material";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Resume = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AadityaMallResume.pdf";
    link.download = "Aaditya Mall Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex justify-center md:mt-[30px] items-center h-screen">
      <div className="flex flex-column justify-center items-center w-screen">
        <iframe
          src={`/AadityaMallResume.pdf`}
          width="80%"
          height={`${window.innerHeight * 0.7}px`}
          title="AadityaResume"
        />
        <Button
          variant="contained"
          className="w-full max-w-[500px] m-2 normal-case bg-brandColor text-black font-bold my-4"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faDownload} />
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Resume;