import StepList from "./StepList";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/StepList",
  component: StepList,
  argTypes: {
    steps: { control: "array" },
  },
};

const Template = (args) => <StepList {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ["Onboard in <1 day"],
};
