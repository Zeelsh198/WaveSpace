/**
 * @component StatCard
 *
 * `StatCard` is a stylized, responsive statistics or feature card component that displays
 * a numeric index, two lines of bold content, and a hover-activated icon.
 * It adapts to various screen sizes and includes smooth transition effects for hover states.
 *
 * @param {Object} props - Component props
 * @param {number} props.index - The index number displayed at the top-left corner of the card.
 * @param {string} props.line1 - The first line of the main content displayed at the bottom.
 * @param {string} props.line2 - The second line of the main content displayed below `line1`.
 *
 * @returns {JSX.Element} A stat/feature card with index, content, and animated hover icon.
 *
 * @example
 * <StatCard
 *   index={1}
 *   line1="Design"
 *   line2="Excellence"
 * />
 */


import { useState } from 'react';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';

const StatCard = ({ index, line1, line2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-[250px] sm:h-[300px] md:h-[350px] relative p-4 sm:p-6 border border-gray-200 transition-all duration-300 group cursor-pointer flex flex-col justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top-left index */}
      <span className="absolute top-4 sm:top-6 left-4 sm:left-6 text-gray-500 text-base sm:text-lg font-medium">
        {index.toString().padStart(2, '0')}
      </span>

      {/* Top-right arrow icon */}
      <div
        className={`absolute top-4 sm:top-6 right-4 sm:right-6 transition-all duration-300 ease-in-out transform ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        <div className="bg-[#3c26f0] p-2 rounded-full">
          <ArrowOutwardSharpIcon className="text-white" style={{ fontSize: '30px' }} />
        </div>
      </div>

      {/* Bottom content */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
        {line1} <br /> {line2}
      </div>
    </div>
  );
};

export default StatCard;
