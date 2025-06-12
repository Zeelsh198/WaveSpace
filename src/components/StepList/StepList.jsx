import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";

const StepList = ({ steps }) => {
  return (
    <div className="w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#1E1E1E]  py-10 px-6 sm:px-8  transition-colors duration-200 border-b border-gray-600"
        >
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400 font-semibold w-6">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base sm:text-lg lg:text-2xl font-semibold text-white">
              {step}
            </span>
          </div>
          <ArrowOutwardSharpIcon
            style={{ fontSize: "30px" }}
            className="text-white"
          />
        </div>
      ))}
    </div>
  );
};

export default StepList;
