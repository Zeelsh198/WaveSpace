import React, { useRef } from "react";
import CustomCursor from "./CustomCursor";
import "../../App"; // Assuming Tailwind/global styles are imported here

export default {
  title: "Components/CustomCursor",
  component: CustomCursor,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    bgColor: { control: "color" },
  },
};

const Template = (args) => {
  const targetRef = useRef(null);

  return (
    <div
      ref={targetRef}
      className="w-full h-[400px] bg-gray-600 flex items-center justify-center relative"
    >
      <p className="text-lg text-white font-semibold text-700">Hover inside this area</p>
      <CustomCursor {...args} targetRef={targetRef} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Play",
  color: "black",
  bgColor: "white",
  targetRef: null,
};
