import React from "react";
import { Cover } from "../ui/cover";

export default function MainHeading({ title }: { title: string }) {
  return (
    <span className="ms-2">
    <Cover>{title}</Cover>

    </span>
  );
}
