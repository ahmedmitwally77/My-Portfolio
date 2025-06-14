import React from "react";
import { workExperience } from "../../../data";
import { BorderButton } from "../ui/MovingBorder";
import Image from "next/image";
import MainHeading from "../MainHeading/MainHeading";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <section id="experience" className="md:py-20 py-12 px-4  md:px-8">
      <h3 className="heading text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        My
        <MainHeading title="Work Experience" />
      </h3>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="cards md:w-4/5 mx-auto mt-12 grid justify-center md:grid-cols-2 grid-cols-1 gap-8"
      >
        {workExperience.map((exp, index) => (
          <BorderButton
            borderClassName="bg-purple-400"
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 1000}
            className="flex-1 dark:text-white  dark:bg-transparent bg-gray-100 text-black border border-slate-200 dark:border-slate-800 "
            key={index}
          >
            <div className="p-3 md:p-5  lg:p-10 gap-2 flex flex-col lg:items-center lg:flex-row  ">
              <Image
                src={exp.thumbnail}
                className="lg:w-32 md:w-24 w-16 md:mx-0 mx-auto"
                alt={exp.title}
                width={0}
                height={0}
                loading="lazy"
              ></Image>
              <div className="text lg:ms-5 md:text-start">
                <h4 className="font-semibold text-lg mx-auto md:mx-0 font-serif dark:text-slate-100 text-slate-900">
                  {exp.title}
                </h4>
                <p className="text-sm mt-2 dark:text-slate-400 text-slate-600">
                  {exp.desc}
                </p>
              </div>
            </div>
          </BorderButton>
        ))}
      </motion.div>
    </section>
  );
}
