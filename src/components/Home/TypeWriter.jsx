"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {

  return (

      <h1 className="underline underline-offset-8 decoration-brandColor">
          <Typewriter
            words={['Full Stack Developer', 'Student', 'Freelancer']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>
  );
};

export default TypeWriter;
