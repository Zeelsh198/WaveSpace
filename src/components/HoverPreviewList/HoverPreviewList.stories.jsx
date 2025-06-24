import React from "react";
import HoverPreviewList from "./HoverPreviewList";
import "../../App.css"; // Ensure global Tailwind is imported here
import adImg12 from "../../public/Images/AdWithPhotoAssets/ad12.webp";

export default {
  title: "Components/HoverPreviewList",
  component: HoverPreviewList,
  argTypes: {
    list: { control: "array" },
  },
};

const Template = (args) => <HoverPreviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      id: 1,
      title: "Logo & branding",
      img: adImg12,
    },
    {
      id: 2,
      title: "Web design",
      img: adImg12,
    },
    {
      id: 3,
      title: "Product design",
      img: adImg12,
    },
    {
      id: 4,
      title: "UX design",
      img: adImg12,
    },
    
    
  ],
};
