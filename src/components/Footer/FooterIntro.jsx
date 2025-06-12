import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import ButtonArrow2 from "../Button/ButtonArrow2";

const FooterIntro = () => {
  return (
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Logo */}
      <h2 className="text-white text-5xl font-semibold">wavespace</h2>

      {/* Description */}
      <p className="text-lg text-[#D1D1D1] leading-[1.6] max-w-[300px]">
        Wavespace is a global UI/UX design agency that boosts brand value with
        user-friendly, effective designs for web, mobile, and SaaS platforms.
      </p>

      {/* Button */}
      <ButtonArrow2
        text="Company Deck"
        btnBgColor="bg-[#E4FF53]"
        btnHoverBgColor="hover:bg-white"
        btnTextColor="text-black"
        arrowBgColor="bg-black"
        arrowColor="text-white"
        padding="py-2 px-4 w-58"
        textSize="text-xl md:text-xl"
      />
      {/* <button className="flex items-center justify-between bg-[#E4FF53] hover:bg-white text-black py-2 px-3  rounded-full w-fit font-medium group transition-all duration-300 mt-6 ">
        <span className="font-bold">Company Deck</span>
        <span className="ml-4 bg-black text-white p-3 rounded-full">
          <ArrowOutwardSharpIcon size={14} />
        </span>
      </button> */}
    </div>
  );
};

export default FooterIntro;
