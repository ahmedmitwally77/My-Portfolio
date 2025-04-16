"use client";

import dynamic from "next/dynamic";
import Projects from "../Projects/Projects";

const Hero = dynamic(() => import("@/Components/Hero/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/Components/Grid/Grid"), { ssr: false });

export default function HomeClient() {
  return (
    <div className="w-full h-full text-white">
      <Hero />
      <Grid />
      <Projects/>
    </div>
  );
}
