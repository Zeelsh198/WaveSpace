import StatCard from "./StatCard";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/StatCard",
  component: StatCard,
  argTypes: {
    index: { control: "number" },
    line1: { control: "text" },
    line2: { control: "text" },
  },
};

const Template = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  index: 1,
  line1: "500+ Happy",
  line2: "clients",
};
