import React from "react";
import { CanvasRevealEffectDemo } from "../CanvasEffect/CanvasEffect";
import MainHeading from "../MainHeading/MainHeading";

export default function Approach() {
  return (
    <section id="approach" className="py-8 px-4  md:px-8">
      <h3 className="heading text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        My
        <MainHeading title="Approach" />
      </h3>
      <CanvasRevealEffectDemo />
    </section>
  );
}
