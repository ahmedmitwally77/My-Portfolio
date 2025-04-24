import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import MagicButton from "../ui/MagicButton";
import { socialMedia } from "../../../data";

const Footer = () => {
  return (
    <footer
      className="md:w-3/4 relative z-10 px-2 md:px-0 mx-auto pt-20 pb-10"
      id="contact"
      style={{
        backgroundImage: "url(/footer-grid.svg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center dark:text-white text-black">
        <h1 className="heading text-center md:text-5xl text-3xl font-bold lg:max-w-[45vw]">
          to take <span className="text-purple-300">your </span>
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and explore how I can help you build high-quality,
          responsive, and scalable web solutions.
        </p>
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.mitwally.essa@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center dark:text-white text-black">
        <p className="md:text-base text-sm md:font-normal font-light mb-6 md:mb-0 text-white-200">
          Copyright © 2025 Ahmed Mitwally Essa
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex  justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.id === 1 && (
                <FaLinkedin className="w-5 h-5 dark:text-white text-black hover:text-blue-600 dark:hover:text-blue-500 transition" />
              )}
              {info.id === 2 && (
                <FaGithub className="w-5 h-5 dark:text-white text-black hover:text-gray-600 dark:hover:text-gray-600 transition" />
              )}
              {info.id === 3 && (
                <FaWhatsapp className="w-5 h-5 dark:text-white text-black hover:text-green-600 dark:hover:text-green-600 transition" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
