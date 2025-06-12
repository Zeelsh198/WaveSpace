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
