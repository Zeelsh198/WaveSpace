import React from "react";

const TestimonialCard = ({
  image,
  name,
  position,
  company,
  testimonial,
  imageHeight = "360px",
  imageWidth = "100%",
}) => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div className="overflow-hidden   w-full">
        <img
          src={image}
          alt={name}
          style={{
            height: imageHeight,
            width: imageWidth,
            objectFit: "fill",
          }}
        />
      </div >
      <div className="">
      <div className="font-bold text-xl text-gray-800">/ {name}</div>
      <div className="text-xs text-gray-700">
        {position} @{company}
      </div>
      <p className="text-sm font-semibold text-gray-500 text-justify my-8 ">“{testimonial}”</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
