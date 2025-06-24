import React from "react";
import { BrowserRouter } from "react-router-dom"; // for <Link>
import BlogCard from "./BlogCard";
import blog1 from "../../../public/Images/BlogCardAssets/blog1.webp";
import authorImg from "../../../public/Images/AskQuesTestimonialAssets/1.webp";

export default {
  title: "Components/BlogCard",
  component: BlogCard,
  decorators: [
    (Story) => <BrowserRouter><Story /></BrowserRouter>, // to enable <Link>
  ],
  argTypes: {
    layout: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

const Template = (args) => <BlogCard {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  image: blog1,
  tag: "Design",
  timeToRead: "4",
  title: "How We Reimagined the SaaS Dashboard",
  authorName: "Shahid",
  authorAvatar: authorImg,
  authorLink: "#",
  publishDate: "June 16, 2025",
  layout: "vertical",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Vertical.args,
  layout: "horizontal",
};
