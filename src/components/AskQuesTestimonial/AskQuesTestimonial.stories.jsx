import AskQuesTestimonial from "./AskQuesTestimonial";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/AskQuesTestimonial",
  component: AskQuesTestimonial,
  argTypes: {
    question: { control: "text" },
  },
};

const Template = (args) => <AskQuesTestimonial {...args} />;

export const Default = Template.bind({
    
});
