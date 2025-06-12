// src/components/DoneWithText/DoneWithText.stories.jsx
import React from "react";
import DoneWithText from "./DoneWithText";

export default {
  title: "Components/DoneWithText",
  component: DoneWithText,
  argTypes: {
    text: { control: "text" },
    classes: { control: "text" },
  },
};

const Template = (args) => <DoneWithText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "NDA? Absolutely just ask",
  classes: "text-gray-700 text-base",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: "We'll respond in 24 hours fast & focused",
  classes: "text-white bg-black rounded-xl font-medium",
};
