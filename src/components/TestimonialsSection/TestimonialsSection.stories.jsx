import TestimonialsSection from "./TestimonialsSection";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/TestimonialsSection",
  component: TestimonialsSection,
};

const Template = (args) => <TestimonialsSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
