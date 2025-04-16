import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { testimonials } from "../../../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-2 md:px-4">
      <h3 className="heading py-18 text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        Kind Words From
        <span className="text-purple-300"> Satisfied Clients</span>
      </h3>

      <div className="testimonials">
        <InfiniteMovingCards items={testimonials} />
      </div>
    </section>
  );
}
