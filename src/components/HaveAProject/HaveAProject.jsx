/**
 * @component HaveAProject
 *
 * `HaveAProject` is a call-to-action (CTA) component that invites users to initiate contact for new projects.
 * It displays a heading, a list of service features, and a profile card to schedule a call.
 * Typically used in contact or service inquiry sections.
 *
 * @returns {JSX.Element} A section with a project inquiry prompt, feature highlights, and user profile CTA.
 */


import React from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

const features = [
  "NDA? Absolutely just ask",
  "We'll respond in 24 hours fast & focused",
  "Work with senior UX experts, not juniors",
];

const HaveAProject = () => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Have a Project? <br />
        <span className="text-gray-700">Let's talk!</span>
      </h1>

      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-base sm:text-lg text-gray-700"
          >
            <svg
              className="w-5 h-5 mr-2 text-green-500 bg-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Schedule a Call Section */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-10 mb-3">
          Schedule a call:
        </h3>
        <UserProfileCard name="Shahid Miah" title="Founder & CEO" />
      </div>
    </div>
  );
};

export default HaveAProject;
