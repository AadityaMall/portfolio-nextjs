"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const positions = [
  {
    image: "/images/IET.png",
    organization: "IET (Institution of Engineering and Technology) MPSTME",
    steps: [
      "Student Mentor A.Y 2025 - 2026",  
      "Chairperson A.Y 2024 - 2025",
      "Head - Public Relations A.Y 2023 - 2024",
      "Executive - Competitive Programming A.Y 2022 - 2023",
    ],
    currentStep: 0,
  },
  {
    image: "/images/GDSC.png",
    organization: "Google Developers Student Club MPSTME",
    steps: ["Executive - Competitive Programming (Sep 2022 - Aug 2023)"],
    currentStep: 0,
  },
  {
    image: "/images/tq.jpg",
    organization: "Taqeeq (Annual Techfest, NMIMS MPSTME)",
    steps: [
      "Sub-Head - Publicity (Sep 2023 - Aug 2024)",
      "Executive - Publicity (Sep 2022 - Aug 2023)",
    ],
    currentStep: 0,
  },
];

const CustomStepper = ({ steps, currentStep }: { steps: string[]; currentStep: number }) => {
  return (
    <div className="flex flex-col relative ml-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start relative">
          {/* Dot */}
          <div
            className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
              index <= currentStep ? "bg-brandColor" : "bg-gray-600"
            }`}
          ></div>
          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 left-1.5 w-0.5 h-full ${
                index < currentStep ? "bg-brandColor" : "bg-gray-600"
              }`}
            ></div>
          )}
          {/* Label */}
          <p className="ml-4 text-gray-200 py-1 text-sm">{step}</p>
        </div>
      ))}
    </div>
  );
};

const Positions = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-20 px-6 md:px-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-brandColor mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Positions of <span className="text-white"> Responsibility</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl w-full">
        {positions.map((pos, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-lg p-6 shadow-lg hover:shadow-brandColor/30 transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <Image
                src={pos.image}
                alt={pos.organization}
                width={100}
                height={100}
                className="rounded-2xl object-contain bg-white/10 p-2"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col text-white w-full">
              <h3 className="text-2xl font-semibold text-brandColor mb-2">
                {pos.organization}
              </h3>

              {/* Stepper */}
              <CustomStepper steps={pos.steps} currentStep={pos.currentStep} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Positions;
