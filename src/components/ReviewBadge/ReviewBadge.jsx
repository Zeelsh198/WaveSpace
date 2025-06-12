import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewBadge = ({
  stars = 5,
  reviewCount = 6,
  platform = "Clutch",
  reviewedText = "REVIEWED ON",
}) => {
  const maxStars = 5;
  const starElements = Array.from({ length: maxStars }, (_, index) => (
    <FaStar
      key={index}
      className={index < stars ? "text-red-600" : "text-gray-300"}
      aria-hidden="true"
    />
  ));

  return (
    <div
      className="flex items-center space-x-4 text-sm font-medium cursor-pointer"
      role="group"
      aria-label={`${reviewCount} reviews on ${platform}`}
    >
      <div className="flex flex-col items-start leading-tight">
        <span className="text-gray-500 text-xs">{reviewedText}</span>
        <span className="text-[#0A1F2F] font-bold text-lg sm:text-xl">
          {platform}
        </span>
      </div>

      <div className="flex flex-col space-y-1 sm:space-y-2">
        <div className="flex" aria-label={`${stars} out of ${maxStars} stars`}>
          {starElements}
        </div>
        <span className="text-green-700 text-xs">{reviewCount} REVIEWS</span>
      </div>
    </div>
  );
};

export default ReviewBadge;
