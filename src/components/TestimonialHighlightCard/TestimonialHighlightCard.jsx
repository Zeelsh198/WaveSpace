import React from "react";

const TestimonialHighlightCard = ({
  testimonial,
  image,
  name,
  position,
  textColor = "text-gray-700",
  nameColor = "text-black",
  positionColor = "text-gray-600",
}) => {
  return (
    <div className="max-w-sm w-full flex flex-col md:flex-row items-start gap-4 p-4 lg:p-0 sm:p-6">
      <div className="flex-1 text-left">
        <p className={`${textColor} sm:text-lg font-medium`}>
          {testimonial}
        </p>
        <div className="mt-6 flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover"
          />
          <div>
            <div className={`font-bold text-sm sm:text-base ${nameColor}`}>
              / {name}
            </div>
            <div className={`text-xs sm:text-sm ${positionColor}`}>
              {position}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHighlightCard;
