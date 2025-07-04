/**
 * @component RatingSummary
 *
 * `RatingSummary` is a static display component that showcases an overall rating score,
 * star icons, total review count, and logos of rating platforms like Clutch, Fiverr, and Upwork.
 * Commonly used in testimonial or trust sections to build credibility.
 *
 * @returns {JSX.Element} A visual summary block with rating stars, a numeric score, and review platform logos.
 */


import React from "react";
import { FaStar } from "react-icons/fa";
import Clutch from "../../../public/Images/RatingSummaryAssets/clutch.webp";
import fiverrpro from "../../../public/Images/RatingSummaryAssets/fiverrpro.webp";
import upwork from "../../../public/Images/RatingSummaryAssets/upwork.webp";

const RatingSummary = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white w-full max-w-[410px] h-[500px] ">
      <h1 className="text-8xl font-bold text-gray-400 mt-25">4.9</h1>
      <div className="flex text-red-500 my-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-6">200+ reviews</p>
      <div className="flex gap-6 mt-auto p-6">
        <img src={Clutch} alt=""  className="w-30 h-5"/>
        <img src={fiverrpro} alt="" className="w-30 h-5"/>
        <img src={upwork} alt="" className="w-30 h-5"/>
      </div>
    </div>
  );
};

export default RatingSummary;
