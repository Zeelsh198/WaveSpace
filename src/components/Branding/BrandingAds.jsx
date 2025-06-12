import React from "react";

const BrandingAds = ({
  bgColor = "bg-white",
  textColor = "text-black",
  heading = "",
  description = "",
  bulletPoints = "",
  imageSrc = "",
}) => {
  const points = bulletPoints.split(",").filter((item) => item.trim() !== "");

  return (
    <div className={`w-full ${bgColor}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left: Text content */}
          <div className="flex-1">
            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl font-bold ${textColor} mb-6`}>
              {heading}
            </h1>

            {/* Description and bullet points */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              {/* Description */}
              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed font-bold ${textColor} max-w-md`}
              >
                {description}
              </p>

              {/* Bullet points */}
              <ul
                className={`text-sm sm:text-base ${textColor}  space-y-2 sm:space-y-2`}
              >
                {points.map((point, idx) => (
                  <li key={idx} className="whitespace-nowrap">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={imageSrc}
              alt="Brand Visual"
              className="w-full max-w-md lg:max-w-[400px] xl:max-w-[460px] h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingAds;


