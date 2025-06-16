/**
 * @component FeedbackCard
 *
 * `FeedbackCard` is a UI component that displays a customer's testimonial or review,
 * including the company name, feedback text, and reviewer information (avatar, name, role).
 * Commonly used in testimonial sections on websites.
 *
 * @param {Object} props - Component props
 * @param {string} props.company - Name of the company giving the feedback
 * @param {string} props.feedback - Feedback or testimonial text
 * @param {string} props.name - Name of the person giving the feedback
 * @param {string} props.role - Role or designation of the reviewer
 * @param {string} props.avatar - URL of the avatar image
 *
 * @returns {JSX.Element} A styled card showing feedback content and user info
 */


import React from "react";

const FeedbackCard = ({ company, feedback, name, role, avatar }) => {
  return (
    <div className="flex flex-col justify-between p-8 bg-white w-full max-w-[410px] h-[500px] border-l border-gray-200">
      {/* Company Name */}
      <p className="text-lg text-gray-400 mb-2">{company}</p>

      {/* Feedback */}
      <p className="text-2xl font-extrabold text-gray-400 leading-relaxed mb-6">
        {feedback}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-15 h-15 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-semibold text-black">{name}</p>
          <p className="text-xl text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
