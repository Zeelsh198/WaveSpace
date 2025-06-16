/**
 * @component RotatingText
 *
 * `RotatingText` is a dynamic heading component that cycles through a list of animated text pairs
 * with smooth transitions using Framer Motion. It's ideal for hero sections or taglines where
 * emphasis on evolving text helps grab attention.
 *
 * @param {Object} props - Component props
 * @param {Array<{first: string, second: string}>} [props.texts] - An array of text objects to rotate between.
 * @param {string} [props.firstColor="text-[#6A11CB]"] - Tailwind text color class for the first word in the pair.
 * @param {string} [props.secondGradient="bg-gradient-to-r from-[#6A11CB] to-[#FC6076] bg-clip-text text-transparent"] - Tailwind classes for gradient styling of the second word.
 * @param {string} [props.fontSize="text-3xl sm:text-5xl md:text-6xl lg:text-7xl"] - Tailwind font size classes for the heading.
 * @param {string} [props.fontWeight="font-bold"] - Tailwind font weight class.
 * @param {string} [props.lineHeight="leading-tight"] - Tailwind line height class.
 * @param {number} [props.interval=3000] - Time in milliseconds to wait before rotating to the next text pair.
 * @param {string} [props.text1="Global UI UX design"] - Static first line of the heading.
 * @param {string} [props.text2="agency digital partner"] - Static second line of the heading.
 * @param {string} [props.text3="for "] - Static prefix for the animated text line.
 *
 * @returns {JSX.Element} A multi-line heading with animated rotating text.
 */


import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RotatingText = ({
  texts = [
    { first: " AI/ML", second: "solutions." },
    { first: " SaaS", second: "companies." },
    { first: " future", second: "unicorns." },
    { first: "", second: "startups." },
  ],
  firstColor = "text-[#6A11CB]",
  secondGradient = "bg-gradient-to-r from-[#6A11CB] to-[#FC6076]  bg-clip-text text-transparent",
  fontSize = "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
  fontWeight = "font-bold",
  lineHeight = "leading-tight",
  interval = 3000,
  text1 = "Global UI UX design",
  text2 = "agency digital partner",
  text3 = "for ",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, interval]);

  const current = texts[index];

  return (
    <div className="w-full">
      <h1 className={`${fontSize} ${fontWeight} ${lineHeight}`}>
        <div>{text1}</div>
        <div>{text2}</div>
        <div className="flex h-[1.2em] overflow-hidden relative mt-1 sm:mt-2">
          <span className="mr-2 whitespace-nowrap">{text3}</span>
          <div className="relative w-fit min-w-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0.3, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -40 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 whitespace-nowrap"
              >
                <span className={`${firstColor} mr-2`}>{current.first}</span>
                <span className={secondGradient}>{current.second}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default RotatingText;
