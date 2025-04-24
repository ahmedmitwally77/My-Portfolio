import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import meImage from "@/imgs/me.jpg";
import HeroTyping from "../HeroTypeing/HeroTypeing";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicButton from "../ui/MagicButton";
import { RiFolderUserLine } from "react-icons/ri";


export function SpotlightPreview() {
  return (
    <div
      // className="relative px-2 md:px-4 dark:text-white text-black flex h-full w-full overflow-hidden rounded-md  after:absolute dark:after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,3,25,0.6))] after:w-full after:h-full  antialiased md:items-center justify-center"
      className="relative px-2 md:px-4 dark:text-white text-black flex h-full w-full overflow-hidden rounded-md   antialiased md:items-center justify-center"
    >
      <div
      // className={cn(
      //   "pointer-events-none absolute inset-0 [background-size:100px_100px] select-none",
      //   "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
      // )}
      />

      <Spotlight
        className="-top-40 -left-10 md:-top-50 md:-left-50"
        fill="white"
      />

      <Spotlight
        className="-top-20 w-100 md:w-[84%] left-60 md:-top-10 md:left-120"
        fill="blue"
      />
      <Spotlight
        className="-top-0 left-0 md:-top-70 md:left-200"
        fill="purple"
      />
      <div className="data z-20 flex flex-col text-center items-center justify-center">
        <Image
          src={meImage}
          alt={"Ahmed Mitwally Portfolio img"}
          width={0}
          height={0}
          className="rounded-full  w-[200px] h-[200px] object-cover"
        />
        <h1 className="text-center relative md:tracking-wider dark:text-white text-black my-2 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Ahmed Mitwally,a professional
          <HeroTyping />
        </h1>
        <TextGenerateEffect
          className="xl:w-5/9 md:w-7/9 w-3/4 text-white  font-bold text-center"
          words="Building modern, responsive, and interactive user interfaces."
        />
        <p className="uppercase tracking-widest text-xs mt-3 text-center dark:text-white text-black max-w-80">
          Dynamic Web Magic with Next.js
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-4">
          <a  href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <a  href="https://drive.google.com/uc?export=download&id=1HStSBYUIZ_dgB7XM0cgO9AECSRekjUm_"  target="_blank" download="Ahmed Mitwally CV">
            <MagicButton
              title="Download CV"
              icon={ <RiFolderUserLine />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpotlightPreview;
