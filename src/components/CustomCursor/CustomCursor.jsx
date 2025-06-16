/**
 * @component CustomCursor
 *
 * `CustomCursor` is a reusable component that creates a custom-styled cursor with text
 * and appears only when the user hovers over a specific DOM element (provided via `targetRef`).
 * The cursor follows the mouse pointer inside the target area and disappears when it leaves.
 *
 * @example
 * const ref = useRef();
 * <div ref={ref}>
 *   <CustomCursor text="Play" bgColor="#fff" color="#000" targetRef={ref} />
 * </div>
 *
 * @param {Object} props - Component props
 * @param {string} [props.text=""] - Text to be displayed inside the cursor
 * @param {string} [props.color="white"] - Text color of the cursor
 * @param {string} [props.bgColor="black"] - Background color of the cursor
 * @param {React.RefObject} props.targetRef - React ref to the DOM element the cursor should appear over
 *
 * @returns {JSX.Element|null} A styled cursor element that tracks mouse movement, or null when not visible
 */


import React, { useState, useEffect } from "react";

const CustomCursor = ({
  text = "",
  color = "white",
  bgColor = "black",
  targetRef,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = targetRef?.current;
    if (!target) return;

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseMove = (e) => {
      const rect = target.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    target.addEventListener("mouseenter", handleMouseEnter);
    target.addEventListener("mouseleave", handleMouseLeave);
    target.addEventListener("mousemove", handleMouseMove);

    return () => {
      target.removeEventListener("mouseenter", handleMouseEnter);
      target.removeEventListener("mouseleave", handleMouseLeave);
      target.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetRef]);

  if (!visible) return null;

  const cursorEvent = () => {
    console.log(` cursor event ${text}`); // Replace with your desired action or logging logic
  };

  return (
    <div
      onClick={cursorEvent}
      className="absolute z-50 pointer-events-auto flex items-center justify-center text-xs font-semibold rounded-full transition-transform duration-150 ease-out"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        color,
        fontSize: "1rem",
        backgroundColor: bgColor,
        width: "170px",
        height: "170px",
      }}
    >
      {text}
    </div>
  );
};

export default CustomCursor;
