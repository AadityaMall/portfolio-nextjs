"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";


const TypeWriter = () => {

  return (

    <h1 className={`font-bold md:text-3xl text-2xl`}>
          <Typewriter
            words={['Full Stack Developer','Aspiring SDE','Aspiring Data Scientist','Student', 'Freelancer']}
            loop={20}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>
  );
};

export default TypeWriter;
