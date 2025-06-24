/**
 * `AskQuesTestimonial` is a promotional testimonial block designed to invite users
 * to reach out via WhatsApp or ask questions. It includes an image, a brief intro,
 * and a call-to-action button.
 *
 * @component `AskQuesTestimonial`
 * @example
 * <AskQuesTestimonial
 *   img="/assets/avatar.png"
 *   name="Jane Doe"
 *   designation="Founder & CEO of Startup"
 *   message="Feel free to connect with me!"
 *   buttonText="Chat Now"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} [props.img=img1] - URL or path to the testimonial image
 * @param {string} [props.name="Shahid"] - Name of the person giving the testimonial
 * @param {string} [props.designation="CEO and <>Founder of Wavespace"] - Person's role or title
 * @param {string} [props.message="Don't hesitate to reach out to me anytime – I'm here to answer all your questions!"] - Custom message text
 * @param {string} [props.buttonText="Ask Questions"] - Text displayed on the call-to-action button
 *
 * @returns {JSX.Element} Rendered testimonial component
 */

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import img1 from "../../../public/Images/AskQuesTestimonialAssets/1.webp";

const AskQuesTestimonial = ({
  img = img1,
  name = "Shahid",
  designation = "CEO and <>Founder of Wavespace",
  message = "Don't hesitate to reach out to me anytime – I'm here to answer all your questions!",
  buttonText = "Ask Questions",
}) => {
  return (
    <div className="bg-[#111] text-white px-6 py-8   w-[350px] flex flex-col items-start gap-5">
      <img
        src={img}
        alt={name}
        className="w-15 h-15 object-cover "
      />

      <p className="text-[18px] leading-[1.6]">
        Hi, I'm <strong>{name}</strong>, the {designation}.{" "}
        {message}
      </p>

      <button className="flex items-center gap-2 px-6 py-4 bg-[#D9FF00] text-black hover:bg-white hover:text-black rounded-full text-xl  transition-all duration-300">
        {buttonText}
        <FaWhatsapp className="text-lg" />
      </button>
    </div>
  );
};

export default AskQuesTestimonial;
