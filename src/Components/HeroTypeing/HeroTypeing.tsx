'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroTyping() {
  return (
    <div className="text-center mt-1 dark:text-white text-black relative md:tracking-wider text-sm md:text-lg lg:text-2xl">
      <TypeAnimation
        sequence={[
          'Software Engineer.', 1000,
          'Next Developer.', 1000,
          'Front-End Developer.', 1000,
          'React Developer.', 1000,
          'Problem Solver.', 1000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        cursor={true}
        className="dark:text-white text-black"
      />
    </div>
  );
}
