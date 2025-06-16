/**
 * @component HoverCardDetails
 *
 * `HoverCardDetails` is a visually engaging card component that reveals additional content
 * on hover. It displays a background image with a title always visible, and a description 
 * that animates into view when hovered. Ideal for showcasing services, categories, or features.
 *
 * @param {Object} props - Component props
 * @param {string} props.imageSrc - Source URL for the background image.
 * @param {string} [props.title="Finance & Fintech"] - Title text always visible on the card.
 * @param {string} [props.description] - Description text that appears on hover.
 * @param {string} [props.cardHeight="lg:h-[420px]"] - Tailwind CSS height class for card responsiveness.
 * @param {string} [props.cardWidth="w-full"] - Tailwind CSS width class for layout control.
 * @param {React.ReactNode} [props.children] - Additional content to render inside the description area.
 *
 * @returns {JSX.Element} A responsive, hoverable card with title and description content.
 */


import React from "react";

const HoverCardDetails = ({
  imageSrc,
  title = "Finance & Fintech",
  description = "We create digital products that are both secure and easy to trust with tidy dashboards and simple steps",
  cardHeight = "lg:h-[420px]",
  cardWidth = "w-full",
  children,
}) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden ${cardWidth} ${cardHeight} flex flex-col justify-end`}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/60" />

      {/* Content Container */}
      <div className="relative z-20 text-white p-6 transition-transform duration-500 ease-out group-hover:-translate-y-8">
        {/* Title - Always visible */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          {title}
        </h1>

        {/* Description - Slides up on hover */}
        <div className="transform transition-all duration-700 ease-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden">
          <p className="text-sm md:text-base font-medium leading-relaxed">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HoverCardDetails;
