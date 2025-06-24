import RatingSummary from "./RatingSummary";
import "../../App"; // If this includes Tailwind or global styles
import Clutch from "../../../public/Images/RatingSummaryAssets/clutch.webp";
import fiverrpro from "../../../public/Images/RatingSummaryAssets/fiverrpro.webp";
import upwork from "../../../public/Images/RatingSummaryAssets/upwork.webp";

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
