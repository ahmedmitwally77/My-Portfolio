import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export default function Loading() {
  return (
    <div className="w-screen dark:bg-main-10 dark:text-white bg-white text-black z-[99] h-screen fixed top-0 left-0 flex items-center justify-center">
      <ClimbingBoxLoader className="dark:text-white text-black"  />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
