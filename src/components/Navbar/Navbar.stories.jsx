import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "../../App.css";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    isOpen: { control: "boolean" },
    navLinks: { control: "array" },
    
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  navLinks: [
    { label: "Case studies", link: "/case-studies" },
    { label: "Pricing", link: "/pricing" },
    { label: "Services", showIcon: true, link: "/services" },
    { label: "About us", link: "/about" },
    { label: "Blog", link: "/blog" },
  ],
};
