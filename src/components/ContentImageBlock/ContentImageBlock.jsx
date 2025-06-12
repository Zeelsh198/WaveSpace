import React from "react";

const ContentImageBlock = ({
  number = "1",
  title = "Title Goes Here",
  paragraphs = [],
  imageSrc = "",
  imageAlt = "content image",
  reverse = false,
}) => {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-col md:flex-row mb-100 ${
        reverse ? "lg:flex-row-reverse" : ""
      } bg-[#1b1b1b] text-white`}
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <p className="text-3xl text-gray-500 font-semibold mb-2">{number}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-gray-300 mb-4 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContentImageBlock;
