import TestimonialHighlightCard from "./TestimonialHighlightCard";
import "../../App"; // If this includes Tailwind or global styles
import image from "../../../public/Images/TestimonialHighlightCardAssets/679b3952bb097c70167c5b01_452500e36ed7da4a9f80de5e410345cf_image-2 (2).webp";

export default {
  title: "Components/TestimonialHighlightCard",
  image,
  component: TestimonialHighlightCard,
  argTypes: {
    testimonial: { control: "text" },
    image: { control: "text" },
    name: { control: "text" },
    position: { control: "text" },
  },
};

const Template = (args) => <TestimonialHighlightCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  testimonial:
    "We had the pleasure of working with Wavespace for our prototype, and he has been exceptional from start to finish. His creativity brought our ideas to life in ways we hadn't even imagined.",
  image: image,
  name: "Michael Amar",
  position: "Uni AI Travel, Marketing | UX Design",
};
