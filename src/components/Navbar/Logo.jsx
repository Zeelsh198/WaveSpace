/**
 * @component Logo
 *
 * `Logo` is a flexible logo component that displays an image, optional text, and links to a specified route.
 * It's commonly used in navigation bars or footers.
 *
 * @param {Object} props - Component props
 * @param {string} [props.src] - Source URL for the logo image.
 * @param {string} [props.alt="Logo"] - Alt text for the logo image.
 * @param {string} [props.text] - Optional text to display next to the logo image.
 * @param {string} [props.textSize] - Tailwind text size classes for the logo text.
 * @param {string} [props.textWeight="font-bold"] - Tailwind font weight class for the logo text.
 * @param {string} [props.link="/"] - URL path the logo redirects to when clicked.
 *
 * @returns {JSX.Element} A styled anchor link containing an image and optional text.
 */


import React from "react";

const Logo = ({
  src,
  alt = "Logo",
  text,
  textSize ,
  textWeight = "font-bold",
  link = "/",
}) => {
  return (
    <a href={link} className="flex items-center gap-2">
      {src && (
        <img
          src={src}
          alt={alt}
          className="h-5 w-auto sm:h-6 md:h-7 lg:h-8 transition-all duration-300"
        />
      )}
      {text && (
        <span className={`${textSize} ${textWeight} font-display transition-all duration-300`}>
          {text}
        </span>
      )}
    </a>
  );
};

export default Logo;
