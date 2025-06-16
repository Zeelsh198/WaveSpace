/**
 * `BenefitsCard` is a flexible UI component that displays a title, description,
 * and either an image or video media. It's useful for showcasing features,
 * product benefits, or promotional content.
 *
 * @component `BenefitsCard`
 * @example
 * <BenefitsCard
 *   title="Seamless Integration"
 *   description="Our tool integrates with your workflow effortlessly."
 *   mediaUrl="/assets/benefit-video.mp4"
 *   mediaType="video"
 *   className="w-full md:w-1/2"
 *   titleDescriptionclasses="mb-6 text-left"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title text displayed at the top of the card
 * @param {string} props.description - Descriptive text supporting the title
 * @param {string} props.mediaUrl - URL or path to the media (image or video)
 * @param {string} [props.mediaType="video"] - Type of media ("image" or "video")
 * @param {string} [props.className=""] - Optional additional Tailwind or custom class names
 * @param {string} [props.titleDescriptionclasses] - Optional custom class names for title + description container
 *
 * @returns {JSX.Element} Rendered benefits card component
 */

import React from "react";

const BenefitsCard = ({
  title,
  description,
  mediaUrl,
  mediaType = "video",
  className = "",
  titleDescriptionclasses
}) => {
  return (
    <div
      className={`bg-white  rounded-2xl p-6  flex  items-center text-center ${className}`}
      style={{ Width: "400px" }}
    ><div className={titleDescriptionclasses}>
        {title && <h3 className="text-2xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 text-lg">{description}</p>}
      </div>
      {mediaUrl && (
        <div className="mb-4 w-full">
          {mediaType === "image" ? (
            <img
              src={mediaUrl}
              alt={title}
              className="max-h-48 w-auto mx-auto object-contain"
            />
          ) : mediaType === "video" ? (
            <video
              src={mediaUrl}
              loop
              muted
              autoPlay
              className="max-h-52 w-full mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default BenefitsCard;
