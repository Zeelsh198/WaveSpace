import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";

const ButtonArrow2 = ({
  text = "Book a call",
  btnBgColor = "bg-[#4339F2]",
  btnHoverBgColor = "hover:bg-[#4339F2]/90",
  btnTextColor = "text-white",
  arrowBgColor = "bg-white",
  arrowColor = "text-black",
  padding = "py-2 px-4",
  rounded = "rounded-full",
  textSize = " font-semibold",
}) => {
  return (
    <button
      className={`flex items-center justify-between gap-4 ${btnBgColor} ${btnHoverBgColor} ${btnTextColor} ${padding} ${rounded} ${textSize} transition duration-300`}
    >
      {text}
      <div className={`p-2 sm:p-2.5 ${arrowBgColor} ${rounded} flex items-center justify-center`}>
        <ArrowOutwardSharpIcon className={`${arrowColor} text-sm sm:text-base`} />
      </div>
    </button>
  );
};

export default ButtonArrow2;
