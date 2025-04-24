import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="w-screen dark:bg-main-100 dark:text-white bg-white text-black z-[99] h-screen fixed top-0 left-0 flex items-center justify-center">
      <ClimbingBoxLoader />
    </div>
  );
}
