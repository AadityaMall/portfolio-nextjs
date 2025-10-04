"use client";
import { DynaPuff } from 'next/font/google';

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adjust weights as needed
  display: 'swap',
});

const TypeWriter = () => {

  return (

      <h1 className="underline underline-offset-8 decoration-brandColor font-bold font-['DynaPuff'] md:text-4xl text-2xl">
          <Typewriter
            words={['Full Stack Developer','Aspiring SDE', 'Student', 'Freelancer']}
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
