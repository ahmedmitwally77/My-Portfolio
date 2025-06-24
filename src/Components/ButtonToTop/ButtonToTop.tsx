"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ButtonToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed hover:animate-bounce duration-300 bottom-6 cursor-pointer right-10 z-[400] p-3 rounded-full dark:bg-gray-200  dark:text-black bg-gray-800 text-white  shadow-md transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp />
    </button>
  );
}
