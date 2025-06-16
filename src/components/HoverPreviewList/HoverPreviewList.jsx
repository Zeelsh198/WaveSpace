/**
 * @component HoverPreviewList
 *
 * `HoverPreviewList` is a two-column list component where each list item reveals a large image
 * preview when hovered. Ideal for use cases like project showcases, blog indexes, or visual menus.
 * It supports alternating column logic and responsive hover previews with smooth animations.
 *
 * @param {Object} props - Component props
 * @param {Array<Object>} props.list - Array of list items, each containing at least an `id`, `title`, and optional `img`.
 * @param {string} [props.containerClass] - Optional Tailwind CSS classes to customize the outer container.
 *
 * @returns {JSX.Element} A responsive grid list with image hover previews.
 */


import React, { useState } from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";

const HoverPreviewList = ({ list = [], containerClass = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`max-w-[1440px] mx-auto bg-[#f2f2f2] mt-40 relative ${containerClass}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {list.map((item, index) => {
          // Determine if item is in left or right column
          const isLeftColumn = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="flex  items-center justify-between border-t border-r border-gray-200 py-7 cursor-pointer group relative z-10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-base sm:text-lg text-black font-medium">
                <span className="text-neutral-400 mr-6 ml-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </span>
              <span className="text-neutral-400 group-hover:translate-x-1 transition-transform duration-200 mr-10">
                <ArrowOutwardSharpIcon />
              </span>

              {/* Image Preview */}
              {hoveredIndex === index && item.img && (
                <div
                  className={`absolute top-[-30px] z-[10] ${
                    isLeftColumn ? "right-[-600px]" : "left-[-600px]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[600px] rounded-xl shadow-2xl transition-all duration-500  ease-in-out pointer-events-none"
                    style={{
                      opacity:1,
                      transform:
                        hoveredIndex === index
                          ? "scale(1) rotate(10deg)"
                          : "scale(0.9) rotate(0deg)",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverPreviewList;
