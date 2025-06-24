"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, memo } from "react";
import WelcomeScreen from "../WelcomePage/WelcomePage";
import { useCallback } from "react";
import SecLoading from "../SecLoading/SecLoading";
import SocialMedia from "../SocialMedia/SocialMedia";

const Projects = dynamic(() => import("../Projects/Projects"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

const Hero = dynamic(() => import("../Hero/Hero"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

const Testimonials = dynamic(() => import("../Testimonials/Testimonials"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

const Experience = dynamic(() => import("../Experience/Experience"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

const Approach = dynamic(() => import("../Approach/Approach"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

const Footer = dynamic(() => import("../Footer/Footer"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <SecLoading />
    </div>
  ),
  ssr: true,
});

// const Grid = dynamic(() => import("@/Components/Grid/Grid"), {
//   loading: () => (
//     <div className="h-screen flex items-center justify-center">
//       <SecLoading />
//     </div>
//   ),
//   ssr: false,
// });

const TimelineResume = dynamic(
  () => import("../Resume/Resume").then((mod) => mod.TimelineResume),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        <SecLoading />
      </div>
    ),
    ssr: true,
  }
);

const ShootingStars = dynamic(
  () => import("../ui/shooting-stars").then((mod) => mod.ShootingStars),
  {
    ssr: false,
  }
);

const StarsBackground = dynamic(
  () => import("../ui/stars-background").then((mod) => mod.StarsBackground),
  {
    ssr: false,
  }
);

const LoadingComponent = memo(() => (
  <div className="flex justify-center  fixed items-center h-screen w-full flex-col gap-4">
    <WelcomeScreen />
  </div>
));

LoadingComponent.displayName = "LoadingComponent";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const handleLoad = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    setMounted(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [handleLoad]);

  if (!mounted) return null;
  if (loading) return <LoadingComponent />;

  return (
    <div className="w-full h-full text-white">
      <div className="relative z-[5]">
        <Hero />
        {/* <Grid /> */}
        <Projects />
        <TimelineResume />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
        <SocialMedia />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
