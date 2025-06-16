/**
 * `AdWithPhoto` is a reusable image + text component with a custom cursor.
 * It supports two layouts using the `variant` prop: "design1" and "design2".
 *
 * @component `AdWithPhoto`
 * @param {Object} props
 * @param {string} [props.variant="design1"] - Layout style: "design1" or "design2"
 * @param {string} [props.cursorText="Play"] - Text shown in the custom cursor
 * @param {string} [props.bgColor="white"] - Cursor background color
 * @param {string} [props.color="black"] - Cursor text color
 * @param {string} [props.src] - Image source (shared)
 * @param {string} [props.alt="Advertisement"] - Alt text for image
 * @param {string} [props.imageHeight="auto"] - Max image height (only for design1)
 * @param {string} [props.imageWidth="100%"] - Max image width (only for design1)
 * @param {string} [props.txt1] - Title (design1)
 * @param {string} [props.txt2] - Subtitle (design1)
 * @param {string} [props.title] - Title (design2)
 * @param {string} [props.subtitle] - Subtitle (design2)
 * @param {string} [props.txt1Class] - ClassName for txt1
 * @param {string} [props.txt2Class] - ClassName for txt2
 */
import React, { useRef } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";

const AdWithPhoto = ({
  variant = "design1",
  cursorText = "Play",
  bgColor = "white",
  color = "black",
  src,
  alt = "Advertisement",
  imageHeight = "auto",
  imageWidth = "100%",
  txt1,
  txt2,
  title,
  subtitle,
  txt1Class = "text-2xl lg:text-4xl sm:text-sm md:text-3xl font-bold text-gray-800 my-8",
  txt2Class = "text-xl lg:text-2xl md:text-2xl sm:text-base font-medium text-gray-800 ",
}) => {
  const containerRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="overflow-hidden relative w-full" ref={containerRef}>
        <CustomCursor
          text={cursorText}
          bgColor={bgColor}
          color={color}
          targetRef={containerRef}
        />
        <img
          src={src}
          alt={alt}
          className={`w-full object-${variant === "design1" ? "fill" : "cover"} h-auto`}
          style={variant === "design1" ? {
            maxHeight: imageHeight,
            maxWidth: imageWidth,
          } : {}}
        />
      </div>

      {variant === "design1" ? (
        <div>
          <h2 className={`${txt1Class}`}>{txt1}</h2>
          <p className={`${txt2Class}`}>{txt2}</p>
        </div>
      ) : (
        <div className="mt-4 sm:mt-5">
          <h3 className="text-lg sm:text-xl font-semibold text-black leading-snug">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-500 mt-1">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdWithPhoto;
