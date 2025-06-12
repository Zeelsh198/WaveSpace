import React from "react";
import { useRef } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
const AdWithPhoto = ({
  cursorText = "Play",
  bgColor = "white",
  color = "black",
  src,
  imageHeight = "auto",
  imageWidth = "100%",
  txt1,
  txt2,
  alt = "Advertisement",
  txt1Class = "text-2xl lg:text-4xl sm:text-sm md:text-3xl font-bold text-gray-800 my-8",
  txt2Class = "text-xl lg:text-2xl md:text-2xl sm:text-base font-medium text-gray-800 ",
}) => {
  const containerRef = useRef(null);

  return (
    <div className="w-full    flex flex-col items-start gap-4">
      <div className="overflow-hidden w-full relative" ref={containerRef}>
        <CustomCursor
          text={cursorText}
          bgColor={bgColor}
          color={color}
          targetRef={containerRef}
        />
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-fill"
          style={{
            maxHeight: imageHeight,
            maxWidth: imageWidth,
          }}
        />
      </div>

      <div>
        <h2
          className={` ${txt1Class} text-2xl lg:text-4xl sm:text-sm md:text-3xl font-bold text-gray-800 my-8`}
        >
          {txt1}
        </h2>
        <p
          className={` ${txt2Class}text-xl lg:text-2xl md:text-2xl sm:text-base font-medium text-gray-800 `}
        >
          {txt2}
        </p>
      </div>
    </div>
  );
};

export default AdWithPhoto;
