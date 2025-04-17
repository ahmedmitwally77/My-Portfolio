/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/Components/ui/canvas-reveal-effect";
import { BorderButton } from "../ui/MovingBorder";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 lg:space-y-0 space-y-8 space-x-0 lg:space-x-6 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          pargraph="We start by defining project goals, target users, and key features. I focus on user experience, ensuring a smooth and scalable structure before diving into development."
          icon={
            <BorderButton
              duration={2000}
              borderRadius="1rem"
              className="bg-white dark:bg-slate-900 p-4 px-6 rounded-none text-xl font-sans font-semibold text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Phase 1
            </BorderButton>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          pargraph="With a clear roadmap, I bring ideas to life using React and modern front-end tools. You'll get regular updates, ensuring alignment with the project vision."
          icon={
            <BorderButton
              duration={2000}
              borderRadius="1rem"
              className="bg-white dark:bg-slate-900 p-4 px-6 rounded-none text-xl font-sans font-semibold text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Phase 2
            </BorderButton>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            // dotSize={2}
          />
        </Card>
        <Card
          title="Testing & Launch"
          pargraph="Before launch, I optimize performance, ensure responsiveness, and fix any issues. The result? A smooth, high-quality web experience ready for users."
          icon={
            <BorderButton
              duration={2000}
              borderRadius="1rem"
              className="bg-white dark:bg-slate-900 p-4 px-6 rounded-none text-xl font-sans font-semibold text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Phase 3
            </BorderButton>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  pargraph,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  pargraph?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border cursor-pointer bg-gray-300 dark:bg-transparent border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem]  md:h-[35rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative text-center px-8 z-20">
        <div className="text-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-gray-400 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {pargraph}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
