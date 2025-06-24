/**
 * @component UserProfileCard
 *
 * `UserProfileCard` is a compact user profile summary card that displays a user's
 * image, name, title, and an action button. It is suitable for testimonial sections,
 * author cards, or team member highlights.
 *
 * @param {Object} props - Component props
 * @param {string} [props.name="Shahid Miah"] - Name of the user.
 * @param {string} [props.title="Founder & CEO"] - Job title or role of the user.
 * @param {string} [props.image=image1] - Source URL or import path for the user image.
 *
 * @returns {JSX.Element} A responsive horizontal card with an avatar, name, title, and icon button.
 *
 * @example
 * <UserProfileCard
 *   name="Jane Doe"
 *   title="Design Director"
 *   image="/images/team/jane.jpg"
 * />
 */


import React from "react";
import image1 from "../../../public/Images/AskQuesTestimonialAssets/1.webp";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const UserProfileCard = ({
  name = "Shahid Miah",
  title = "Founder & CEO",
  image = image1,
}) => {
  return (
    <div className="flex items-center bg-white border border-gray-200  p-3 sm:p-4 w-full max-w-sm">
      {/* Profile Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-12 h-12 sm:w-14 sm:h-14  object-cover mr-3 sm:mr-4"
      />

      {/* Name and Title */}
      <div className="flex-1">
        <h3 className="text-base sm:text-2xl font-bold text-black">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{title}</p>
      </div>

      {/* Action Button */}
      <button className="w-12 h-12 hover:h-14 hover:w-14 transition-all duration-300  bg-indigo-600 rounded-full flex items-center justify-center">
        <CalendarMonthIcon className="text-white" style={{ fontSize: '25px' }} />
      </button>
    </div>
  );
};

export default UserProfileCard;
