// src/components/ContentImageBlock/ContentImageBlock.stories.jsx

import React from "react";
import image from "./ContentImageBlockAssets/teamImage1.webp"
import ContentImageBlock from "./ContentImageBlock";

export default {
  title: "Components/ContentImageBlock",
  component: ContentImageBlock,
  argTypes: {
    number: { control: "text" },
    title: { control: "text" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    reverse: { control: "boolean" },
  },
};

const Template = (args) => <ContentImageBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: "1",
  title: "Transforming Ideas into Reality",
  paragraphs: [
    "We believe in building exceptional digital experiences.",
    "Our team of skilled developers, designers, and strategists are here to help you scale.",
  ],
  imageSrc: image,
  imageAlt: "Sample Image",
  reverse: false,
};

export const ReversedLayout = Template.bind({});
ReversedLayout.args = {
  ...Default.args,
  reverse: true,
};
