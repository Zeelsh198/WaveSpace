// components/AdWithPhoto2.jsx
import React, { useRef } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";

const AdWithPhoto2 = ({
  cursorText = "See More",
  bgColor = "#fffc1a",
  color = "black",
  imgSrc,
  imgAlt,
  title,
  subtitle, 
}) => {
  const containerRef = useRef(null);

  return (
    <div className="w-full">
      <div className="overflow-hidden relative " ref={containerRef}>
        <CustomCursor
          text={cursorText}
          bgColor={bgColor}
          color={color}
          targetRef={containerRef}
        />
        <img
          src={imgSrc}
          alt={imgAlt || "Ad image"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 sm:mt-5">
        <h3 className="text-lg sm:text-xl font-semibold text-black leading-snug">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdWithPhoto2;
