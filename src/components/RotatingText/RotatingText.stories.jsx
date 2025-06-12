import RotatingText from "./RotatingText";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/RotatingText",
  component: RotatingText,
  argTypes: {
    texts: { control: "array" },
    firstColor: { control: "color" },
    secondGradient: { control: "text" },
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    lineHeight: { control: "text" },
    interval: { control: "number" },
    text1: { control: "text" },
    text2: { control: "text" },
    text3: { control: "text" },
  },
};

const Template = (args) => <RotatingText {...args} />;

export const Default = Template.bind({});
Default.args = {
  texts: [
    { first: "AI/ML", second: "solutions." },
    { first: "SaaS", second: "companies." },
    { first: "future", second: "unicorns." },
    { first: "", second: "startups." },
  ],
  firstColor: "text-[#2CA9E1]",
  secondGradient: "bg-gradient-to-r from-[#A566FF] to-[#CE9FFC] bg-clip-text text-transparent",
  fontSize: "text-4xl md:text-7xl",
  fontWeight: "font-bold",
  lineHeight: "leading-tight",
  interval: 3000,
  text1: "Global UI UX design",
  text2: "agency digital partner",
  text3: "for",
};


