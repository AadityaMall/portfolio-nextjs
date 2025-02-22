"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeClient = () => {
  const [iframeHeight, setIframeHeight] = useState("500px");

  useEffect(() => {
    setIframeHeight(`${window.innerHeight * 0.7}px`);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AadityaMallResume.pdf";
    link.download = "Aaditya Mall Resume.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center md:mt-[30px] items-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-screen">
        <iframe
          src={`/AadityaMallResume.pdf`}
          width="80%"
          height={iframeHeight}
          title="AadityaResume"
        />
        <Button
          variant="contained"
          className="w-full max-w-[500px] m-2 normal-case bg-brandColor text-black font-bold my-4"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default ResumeClient;
