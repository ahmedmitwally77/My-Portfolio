/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <>
      <div className="social-media hidden after:content-['']   after:absolute after:bottom-0 after:translate-y-[100%] after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-40 pb-8 dark:after:bg-white after:bg-black after:animate-pulse md:fixed bottom-40 left-0 md:flex flex-col dark:text-white text-black  gap-6 text-xl p-4 z-50 rounded-full ">
        <a
          href="https://github.com/ahmedmitwally77"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          aria-label="GitHub Profile"
          className="hover:text-purple-300 p-2 transition-all duration-300  hover:-translate-y-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-mitwally-284538286/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
          className="hover:text-purple-300 p-2 transition-all duration-300  hover:-translate-y-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/ahmed.mitwally.essa"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook Profile"
          aria-label="Facebook Profile"
          className="hover:text-purple-300 p-2 transition-all duration-300  hover:-translate-y-2"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/ahmed__mitwally/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Profile"
          aria-label="Instagram Profile"
          className="hover:text-purple-300 p-2 transition-all duration-300  hover:-translate-y-2"
        >
          <FaInstagram />
        </a>
        <a href="https://codeforces.com/profile/ahmedmitwally7" target="_blank" title="Codeforces Profile" rel="noopener noreferrer">
          <img
          width="24"
          height="24"
          rel="noopener noreferrer"
          aria-label="Codeforces Profile"
          className="hover:scale-110 transition-all ml-2  duration-300 cursor-pointer"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png"
          alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo"
        />
        </a>
      </div>
      <div className="Gmail after:content-[''] rotate-90  hidden md:flex after:absolute after:bottom-0 after:rotate-90  after:left-[132%]  after:top-[-52px]  after:w-[1px] after:h-40 pb-8 dark:after:bg-white after:bg-black after:animate-pulse fixed bottom-60 -right-20  dark:text-white text-black text-sm p-4 z-50 rounded-full ">
        <h4 className="hover:text-purple-300 transition-all duration-300 cursor-pointer hover:-translate-x-2">
          <a href="mailto:ahmed.mitwally.essa@gmail.com">
            ahmed.mitwally.essa@gmail.com
          </a>
        </h4>
      </div>
    </>
  );
}
