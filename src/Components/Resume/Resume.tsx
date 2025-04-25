import React from "react";
import { Timeline } from "../../Components/ui/timeline";
import { Cover } from "../ui/cover";

export function TimelineResume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-18">
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>MERN Stack Developer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              Apr 2024 - Oct 2024
            </span>
            <p className="text-lg font-semibold">
              Digital Egypt Pioneers Initiative (DEPI)
            </p>
          </div>
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>Frontend Developer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              Aug 2024 - Dec 2024
            </span>
            <p className="text-lg font-semibold">Route Academy</p>
          </div>

          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>ICPC Participant</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1"> Aug 2024</span>
            <p className="text-lg font-semibold">ICPC 2024</p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-18">
          <div className="course flex flex-col gap-2">
            <h4 className="font-semibold text-2xl">
              <Cover>Software Engineer</Cover>
            </h4>
            <span className="text-sm text-blue-400 py-1">
              {" "}
              oct 2022 - Oct 2026
            </span>
            <p className="text-lg font-semibold">
              Higher Technological Institute
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
