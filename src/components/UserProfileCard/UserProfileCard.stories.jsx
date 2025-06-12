import UserProfileCard from "./UserProfileCard";
import "../../App"; // If this includes Tailwind or global styles
import image1 from "../AskQuesTestimonial/AskQuesTestimonialAssets/1.webp";

export default {
  title: "Components/UserProfileCard",
  component: UserProfileCard,
  argTypes: {
    name: { control: "text" },
    title: { control: "text" },
    image: { control: "text" },
  },
};

const Template = (args) => <UserProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Shahid Miah",
  title: "Founder & CEO",
  image: image1,
};
