import RatingSummary from "./RatingSummary";
import "../../App"; // If this includes Tailwind or global styles
import Clutch from "./RatingSummaryAssets/clutch.webp";
import fiverrpro from "./RatingSummaryAssets/fiverrpro.webp";
import upwork from "./RatingSummaryAssets/upwork.webp";

export default {
  title: "Components/RatingSummary",
  component: RatingSummary,
  argTypes: {
    rating: { control: "text" },
    reviewText: { control: "text" },
    logos: { control: "array" },
  },
};

const Template = (args) => <RatingSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: "4.9",
  reviewText: "200+ reviews",
  logos: [Clutch, fiverrpro, upwork],
};
