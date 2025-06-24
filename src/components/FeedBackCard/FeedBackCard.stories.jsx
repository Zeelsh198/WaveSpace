import FeedbackCard from "./FeedBackCard";
import "../../App"; // If this includes Tailwind or global styles
import avatar from "../../../public/Images/TestimonialHighlightCardAssets/679b3952bb097c70167c5b01_452500e36ed7da4a9f80de5e410345cf_image-2 (2).webp"
export default {
  title: "Components/FeedBackCard",
  component: FeedbackCard,
  argTypes: {
    company: { control: "text" },
    feedback: { control: "text" },
    name: { control: "text" },
    role: { control: "text" },
    avatar: { control: "text" },
  },
};

const Template = (args) => <FeedbackCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  company: "ABC Inc.",
  feedback:
    "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
  name: "John Doe",
  role: "CEO",
  avatar: avatar,
};

