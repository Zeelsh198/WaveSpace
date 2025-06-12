// src/components/HoverCardDetails/HoverCardDetails.stories.jsx
import React from "react";
import HoverCardDetails from "./HoverCardDetails";
import ad1 from "./HoverCardDetailsAssets/h1.webp"
export default {
    title: "Components/HoverCardDetails",
    component: HoverCardDetails,
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        imageSrc: { control: "text" },
        cardHeight: { control: "text" },
        cardWidth: { control: "text" },
    },
};

const Template = (args) => <HoverCardDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Finance & Fintech",
    description:
        "We create digital products that are both secure and easy to trust with tidy dashboards and simple steps.",
    imageSrc: ad1,
    cardHeight: "lg:h-[420px]",
    cardWidth: "w-full",
};
