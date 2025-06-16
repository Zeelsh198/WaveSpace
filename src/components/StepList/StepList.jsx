/**
 * @component StepList
 *
 * `StepList` renders a vertical list of steps, each prefixed with a numbered index.
 * It displays each step with a left-aligned index and label, and a right-aligned arrow icon.
 * The component is styled with a dark background and responsive typography.
 *
 * @param {Object} props - Component props
 * @param {string[]} props.steps - An array of step titles to display in the list.
 *
 * @returns {JSX.Element} A styled vertical list of steps with index numbers and arrow icons.
 *
 * @example
 * <StepList
 *   steps={[
 *     "Understand client needs",
 *     "Design wireframes",
 *     "Develop UI components",
 *     "Deploy to production"
 *   ]}
 * />
 */


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
