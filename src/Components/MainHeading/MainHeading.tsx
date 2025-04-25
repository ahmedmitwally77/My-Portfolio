import React from "react";
import { Cover } from "../ui/cover";

export default function MainHeading({ title }: { title: string }) {
  return (
    <span className="ms-3 md:mt-0 mt-4 md:inline-block block  mx-auto">
      <Cover>{title}</Cover>
    </span>
  );
}
