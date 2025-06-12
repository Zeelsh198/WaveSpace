import React from "react";
import InfoCard from "./InfoCard";
import { FaLightbulb } from "react-icons/fa";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
};

const Template = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
  title: "Creative Solutions",
  description:
    "We deliver innovative and scalable digital solutions tailored to your business needs.",
  features: [
    "User-centered design",
    "Responsive layout",
    "Cross-platform support",
    "Fast performance",
  ],
};
