/**
 * @component Navbar
 *
 * `Navbar` is a responsive navigation bar component designed for desktop and mobile views.
 * It includes a logo, navigation links with optional mega menu (e.g., Services), and a styled contact button.
 * For mobile devices, it opens a fullscreen sliding menu with navigation and a contact CTA.
 *
 * @param {Object} props - Component props
 * @param {string} [props.bgColor="bg-white"] - Tailwind background color class for the navbar.
 * @param {string} [props.txtColor="text-black"] - Tailwind text color for navbar links and text.
 * @param {string} [props.underlineColor] - Tailwind class for the underline hover effect of nav links.
 * @param {string} [props.arrowColor] - Tailwind background color class for nav link arrow container.
 * @param {string} [props.arrowIconColor] - Tailwind text color class for the arrow icon itself.
 * @param {string} [props.btnBgColor] - Tailwind class for the contact button background.
 * @param {string} [props.btnTextColor] - Tailwind class for the contact button text.
 *
 * @returns {JSX.Element} A responsive navigation bar with dynamic props, mega menu, and mobile toggle menu.
 */


import { useState } from "react";
import ButtonArrow from "../Button/ButtonArrow";
import Logo from "./Logo";
import NavLinkItems from "./NavLinkItems";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import ButtonArrow2 from "../Button/ButtonArrow2";
import ServicesMegaMenu from "./ServicesMegaMenu"; // Import the new component
import { AnimatePresence } from "framer-motion";

const Navbar = ({
  bgColor = "bg-white",
  txtColor = "text-black",
  underlineColor,
  arrowColor,
  arrowIconColor,
  btnBgColor,
  btnTextColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // State for services mega menu

  const navLinks = [
    { label: "Case studies", link: "/case-studies" },
    { label: "Pricing", link: "/pricing" },
    { label: "Services", showIcon: true, link: "/services", isServices: true }, // Add a flag for Services
    { label: "About us", link: "/aboutUs" },
    { label: "Blog", link: "/blog" },
  ];

  return (
    <nav className={` ${bgColor} z-50`}>
      <div className="max-w-[1440px] mx-auto py-4 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo and Desktop Menu */}
        <div className={`flex items-center gap-6 lg:gap-8 ${txtColor}`}>
          <Logo
            text="wavespace"
            textSize="text-3xl"
            textWeight="font-semibold"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 lg:gap-8 items-center ml-20 ">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative" // Needed for absolute positioning of mega menu
                onMouseEnter={() =>
                  link.isServices && setIsServicesMenuOpen(true)
                }
                onMouseLeave={() =>
                  link.isServices && setIsServicesMenuOpen(false)
                }
              >
                <NavLinkItems
                  textSize="  sm:text-lg md:text-xl"
                  label={link.label}
                  showIcon={link.showIcon}
                  link={link.link}
                  textColor={txtColor}
                  underlineColor ={underlineColor}
                  arrowBgColor={arrowColor}
                  arrowIconColor={arrowIconColor}
                />
                <AnimatePresence>
                  {link.isServices && isServicesMenuOpen && <ServicesMegaMenu />}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <ButtonArrow
            label="Contact us"
            arrow={true}
            height="h-12 md:h-14"
            width="w-36 md:w-40"
            padding="px-3 py-1.5 md:px-4 md:py-2"
            textColor={btnTextColor}
            bgColor={btnBgColor}
            hoverTextColor="hover:text-white"
            hoverBgColor="hover:bg-black"
            handleButtonClick={() => console.log("Clicked!")}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Toggle Menu">
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 xs:p-5 sm:p-6 pb-24 overflow-y-auto">
          {/* Top Row: Logo + Close Button */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <Logo
              text="wavespace"
              textSize=" text-2xl "
              textWeight="font-semibold"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 xs:px-3 xs:py-1.5 rounded-full text-sm font-medium"
            >
              <HiX className="w-8 h-8 p-1" />
              Close
            </button>
          </div>

          {/* Nav Links Left Aligned */}
          <div className="flex flex-col items-start gap-4 text-black text-3xl font-bold mt-8 xs:mt-10 sm:mt-12">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Contact Button Fixed at Bottom */}
          <div className="fixed bottom-4 left-4 right-4 z-50">
            <ButtonArrow2
              textSize=" text-3xl"
              text="Contact us"
              btnBgColor="bg-[#433BFF] "
              btnTextColor="text-white w-full"
              arrowColor="text-black m-1"
              padding="py-2 px-3"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
