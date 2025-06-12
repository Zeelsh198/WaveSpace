import React from "react";
import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SubNavbar = ({ navLinks = [], searchPlaceholder = "Search..." }) => {
  return (
    <div className="border-t border-b border-gray-200 bg-white ">
      <div className="max-w-[1430px] mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Nav Tabs */}
        <div className="flex gap-8">
          {navLinks.map(({ label, link }) => (
            <NavLink
              key={label}
              to={link}
              className={({ isActive }) =>
                `relative text-md font-bold transition-colors duration-300 group ${
                  isActive
                    ? "text-blue-600"
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span 
                    className={`absolute left-1/2 -translate-x-1/2 bottom-[-21px] h-[4px] bg-blue-600 transition-all duration-600 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative rounded-full border border-gray-300 px-4 py-2 flex items-center gap-2 w-[120px] lg:w-[250px]">
          <MagnifyingGlassIcon className="w-4 h-4 text-black" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-black outline-none placeholder-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;