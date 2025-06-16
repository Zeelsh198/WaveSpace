/**
 * @component ContentImageBlock
 *
 * `ContentImageBlock` is a flexible content section used to present textual content
 * alongside an image. The layout can optionally be reversed to alternate text-image flow.
 * Ideal for showcasing features, case studies, or storytelling blocks on a landing page.
 *
 * @example
 * <ContentImageBlock
 *   number="02"
 *   title="We Design for Impact"
 *   paragraphs={[
 *     "Our approach blends creativity with strategy to ensure real results.",
 *     "We focus on business goals, not just visuals."
 *   ]}
 *   imageSrc="/assets/design-visual.webp"
 *   imageAlt="Design Process Visual"
 *   reverse={true}
 * />
 *
 * @param {Object} props - Component props
 * @param {string} props.number - Section number or label to display above the title
 * @param {string} props.title - Main heading/title of the block
 * @param {string[]} props.paragraphs - Array of paragraph strings to render
 * @param {string} props.imageSrc - Source path for the right-side image
 * @param {string} props.imageAlt - Alternative text for the image
 * @param {boolean} props.reverse - Whether to reverse the layout (text on right, image on left)
 *
 * @returns {JSX.Element} Rendered content block with text and image
 */


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
