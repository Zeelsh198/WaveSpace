
/**
 * @component TestimonialHighlightCard
 *
 * `TestimonialHighlightCard` displays a compact testimonial card featuring a quote,
 * the user's image, name, and position. It's designed to be used in highlight or carousel sections.
 * Custom colors for text, name, and position are supported via props.
 *
 * @param {Object} props - Component props
 * @param {string} props.testimonial - The testimonial or quote from the user.
 * @param {string} props.image - URL of the user's image.
 * @param {string} props.name - Name of the person giving the testimonial.
 * @param {string} props.position - The role or position of the person.
 * @param {string} [props.textColor="text-gray-700"] - Tailwind class for testimonial text color.
 * @param {string} [props.nameColor="text-black"] - Tailwind class for name text color.
 * @param {string} [props.positionColor="text-gray-600"] - Tailwind class for position text color.
 *
 * @returns {JSX.Element} A stylized testimonial card component.
 *
 * @example
 * <TestimonialHighlightCard
 *   testimonial="Working with this team was an absolute pleasure."
 *   image="/assets/person1.jpg"
 *   name="Jane Doe"
 *   position="Founder, BrightTech"
 * />
 */

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
