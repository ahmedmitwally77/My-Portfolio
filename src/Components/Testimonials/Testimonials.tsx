import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { testimonials } from "../../../data";
import MainHeading from "../MainHeading/MainHeading";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-2 md:px-20 py-8 relative">
      <h3 className="heading py-18 text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        Kind Words From
        <MainHeading title="Satisfied Clients" />
      </h3>

      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="testimonials"
      >
        <InfiniteMovingCards items={testimonials} />
      </motion.div>
    </section>
  );
}
