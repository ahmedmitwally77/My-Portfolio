"use client";
import dynamic from "next/dynamic";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Experience from "../Experience/Experience";
import Approach from "../Approach/Approach";
import Footer from "../Footer/Footer";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import { useEffect, useState } from "react";
import WelcomeScreen from "../WelcomePage/WelcomePage";
import { TimelineResume } from "../Resume/Resume";

const Grid = dynamic(() => import("@/Components/Grid/Grid"), { ssr: false });

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      // لو الصفحة كلها محملة خلاص
      handleLoad();
    } else {
      // لو لسه في تحميل، استنى الحدث
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full flex-col gap-4">
        <WelcomeScreen />
      </div>
    );
  }

  return (
    <div className="w-full h-full text-white">
      <Hero />
      <Grid />
      <Projects />
      <TimelineResume/>
      <Testimonials />
      <Experience />
      <Approach />
      <Footer />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
