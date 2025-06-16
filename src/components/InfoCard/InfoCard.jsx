/**
 * @component InfoCard
 *
 * `InfoCard` is a reusable component that displays a feature block with an icon,
 * title, description, and a list of bullet-pointed features. It’s ideal for service
 * highlights, feature sections, or informational content blocks.
 *
 * @param {Object} props - Component props
 * @param {JSX.Element} props.icon - React icon or custom element shown at the top.
 * @param {string} props.title - The main title or heading of the card.
 * @param {string} props.description - A brief paragraph describing the content.
 * @param {Array<string>} props.features - List of features or bullet points.
 *
 * @returns {JSX.Element} A styled content card with icon, heading, description, and features list.
 */


import React from "react";

const InfoCard = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 w-full  min-h-[496px] text-left ">
      <div className="my-6 mx-3">{icon}</div>

      <h3 className="text-3xl font-bold text-black mb-2 pt-15">{title}</h3>

      <p className="text-xl text-gray-500 leading-8 mb-4">
        {description}
      </p>

      <ul className="list-disc pl-5 space-y-[7px]">
        {features?.map((feature, i) => (
          <li key={i} className="text-xl text-black">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
