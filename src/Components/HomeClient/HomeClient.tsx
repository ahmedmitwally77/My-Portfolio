"use client";
import dynamic from "next/dynamic";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Experience from "../Experience/Experience";
import Approach from "../Approach/Approach";
import Footer from "../Footer/Footer";

const Grid = dynamic(() => import("@/Components/Grid/Grid"), { ssr: false });

export default function HomeClient() {
  return (
    <div className="w-full h-full text-white">
      <Hero />
      <Grid />
      <Projects />
      <Testimonials />
      <Experience />
      <Approach />
      <Footer />
    </div>
  );
}
