/**
 * @component TestimonialCard
 *
 * `TestimonialCard` displays a user testimonial with their image, name, position, company, 
 * and feedback. It supports customizable image dimensions and is typically used in testimonial sections.
 *
 * @param {Object} props - Component props
 * @param {string} props.image - URL of the testimonial giver's image.
 * @param {string} props.name - Name of the person providing the testimonial.
 * @param {string} props.position - Job title or role of the person.
 * @param {string} props.company - Company name where the person works.
 * @param {string} props.testimonial - The testimonial or feedback text.
 * @param {string} [props.imageHeight="360px"] - Custom height for the image.
 * @param {string} [props.imageWidth="100%"] - Custom width for the image.
 *
 * @returns {JSX.Element} A styled card showing testimonial information.
 *
 * @example
 * <TestimonialCard
 *   image="/assets/john.jpg"
 *   name="John Doe"
 *   position="Product Manager"
 *   company="TechCorp"
 *   testimonial="This service exceeded our expectations in every way!"
 * />
 */


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
