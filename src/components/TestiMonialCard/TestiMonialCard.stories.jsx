import "../../App"; // If this includes Tailwind or global styles
import image from "../../../public/Images/TestiMonialAssets/67877f9495e27059b10a6422_96f7f37762eb6a222ca8aafae632defd_review image-1-p-500.webp";
import TestimonialCard from "./TestiMonialCard.Jsx";

export default {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  argTypes: {
    image,
    name: { control: "text" },
    position: { control: "text" },
    company: { control: "text" },
    testimonial: { control: "text" },
    imageHeight: { control: "text" },
    imageWidth: { control: "text" },
  },
};

const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: image,
  name: "John Doe",
  position: "CEO",
  company: "ABC Inc.",
  testimonial:
    "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
  imageHeight: "400px",
  imageWidth: "100%",
};
