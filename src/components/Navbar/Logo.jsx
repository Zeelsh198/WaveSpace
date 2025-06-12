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
