import Questions from "./Questions";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/Questions",
  component: Questions,
  argTypes: {
    question: { control: "text" },
  },
};

const Template = (args) => <Questions {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: "What is your refund policy?",
};
