import React from "react";
import { Timeline } from "../../Components/ui/timeline";
import { Cover } from "../ui/cover";
import { motion } from "framer-motion";

export function TimelineResume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-18">
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>MERN Stack Developer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              Apr 2024 - Oct 2024
            </span>
            <p className="text-lg text-black dark:text-white font-semibold">
              Digital Egypt Pioneers Initiative (DEPI)
            </p>
          </div>
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>Frontend Developer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              Aug 2024 - Dec 2024
            </span>
            <p className="text-lg font-semibold text-black dark:text-white">
              Route Academy
            </p>
          </div>

          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>ICPC Participant</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1"> Aug 2024</span>
            <p className="text-lg font-semibold text-black dark:text-white">
              Egyptian Collegiate Programming Contest in ALX
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-18">
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>Software Engineer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              Oct 2022 - Oct 2026
            </span>
            <p className="text-lg text-black dark:text-white font-semibold">
              Higher Technological Institute
            </p>
            <span className="text-sm text-gray-400">10th of Ramadan City</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      id="resume"
    className="relative w-full overflow-clip px-4 md:px-8 py-12 md:py-20">
      <Timeline data={data} />
    </motion.div>
  );
}
