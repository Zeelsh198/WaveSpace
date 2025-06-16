/**
 * @component NavLinkItems
 *
 * `NavLinkItems` is a customizable navigation link component used within a navigation bar.
 * It supports optional arrow icons, hover underline animation, and flexible styling through props.
 *
 * @param {Object} props - Component props
 * @param {string} [props.label="Link"] - The text label of the navigation item.
 * @param {boolean} [props.showIcon=false] - Whether to show an arrow icon beside the label.
 * @param {string} [props.link="/"] - The route path to navigate to on click.
 * @param {string} [props.textSize="text-base sm:text-lg md:text-xl"] - Tailwind text size classes.
 * @param {string} [props.textColor="text-black"] - Tailwind text color class for the label.
 * @param {string} [props.underlineColor="bg-black"] - Tailwind background color for the hover underline.
 * @param {string} [props.arrowBgColor="bg-black"] - Tailwind background color for the arrow icon container.
 * @param {string} [props.arrowIconColor="text-black"] - Tailwind text color for the arrow icon itself.
 *
 * @returns {JSX.Element} A styled and optionally animated `NavLink` component.
 */


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
