import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";

const ServiceDetails = ({
  image,
  title,
  description,
  services = [
    "UI UX Design",
    "UX Audit",
    "Design System",
    "UI UX Consulting",
    "UX Research",
    "Usability Testing",
    "Wireframe & UI Prototyping",
  ],
  imageOnLeft = true,
}) => {
  const flexDirection = imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div
      className={`flex flex-col ${flexDirection} items-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-12 lg:gap-28`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[600px]  h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-2 sm:px-0">
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold leading-tight mb-4 text-left">
          {title}
        </h2>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold mb-8 sm:mb-10 max-w-xl text-left mx-auto lg:mx-0">
          {description}
        </p>

        <div className="flex flex-col divide-y divide-[#E0E0E0]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 group cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#999999] text-[14px] sm:text-[16px] font-medium min-w-[24px]">{`0${index + 1}`}</span>
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-black transition duration-200">
                  {service}
                </span>
              </div>
              <ArrowOutwardSharpIcon className="text-black group-hover:translate-x-1 transition duration-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
