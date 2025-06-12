import { NavLink } from "react-router-dom";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";

const NavLinkItems = ({
  label = "Link",
  showIcon = false,
  link = "/",
  textSize = "text-base sm:text-lg md:text-xl",
  textColor = "text-black",
  underlineColor = "bg-black",
  arrowBgColor = "bg-black",
  arrowIconColor = "text-black",
}) => {
  return (
    <NavLink
      to={link}
      className={`group relative inline-flex items-center gap-2 ${textSize} ${textColor} font-medium transition duration-300`}
    >
      <span>{label}</span>

      {showIcon && (
        <span
          className={`m-1 rounded-full ${arrowBgColor} flex items-center justify-center transform transition-transform duration-600 group-hover:rotate-180`}
        >
          <ArrowOutwardSharpIcon
            className={arrowIconColor}
            style={{ fontSize: "14px" }}
          />
        </span>
      )}

      {/* Underline animation */}
      <span
        className={`absolute left-0 -bottom-1 h-[1.5px] w-full scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out ${underlineColor}`}
      />
    </NavLink>
  );
};

export default NavLinkItems;
