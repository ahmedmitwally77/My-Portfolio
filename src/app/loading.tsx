import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="w-screen bg-red-500 z-[99] h-screen fixed top-0 left-0 flex items-center justify-center">
      <ClimbingBoxLoader />
    </div>
  );
}
