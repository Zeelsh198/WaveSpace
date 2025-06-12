import ReviewBadge from "./ReviewBadge";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/ReviewBadge",
  component: ReviewBadge,
  argTypes: {
    stars: { control: "number" },
    reviewCount: { control: "number" },
    platform: { control: "text" },
    reviewedText: { control: "text" },
  },
};
    
const Template = (args) => <ReviewBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  stars: 5,
  reviewCount: 6,
  platform: "Clutch",
  reviewedText: "REVIEWED ON",
};
