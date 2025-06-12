import React from "react";
import PricingCard from "./PricingCard";
import { FaCheck } from "react-icons/fa";

export default {
  title: "Components/PricingCard",
  component: PricingCard,
};

const Template = (args) => <PricingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Startup Plan",
  price: "$49/month",
  subText: "Billed annually",
  label1: "Get Started",
  label2: "Book a Call",
  bgColor: "bg-[#d9fd51]",
  badge: "Best Value",
  border: "border-2",
  highlightColor: "#d9fd51",
  features: [
    `<span class='flex items-center gap-2'><FaCheck class='text-[#d9fd51]' /> 10+ Components</span>`,
    `<span class='flex items-center gap-2'><FaCheck class='text-[#d9fd51]' /> Email Support</span>`,
    `<span class='flex items-center gap-2'><FaCheck class='text-[#d9fd51]' /> Community Access</span>`,
  ],
  viewAllLink: "#",
  bottomNoteHighlight: "Cancel anytime.",
  bottomNote: "Cancel anytime. No hidden charges.",
};
