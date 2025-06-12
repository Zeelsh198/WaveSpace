import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import img1 from "./AskQuesTestimonialAssets/1.webp";

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
