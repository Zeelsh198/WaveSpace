import ScrollColorShiftText from "./ScrollColorShiftText";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/ScrollColorShiftText",
  component: ScrollColorShiftText,
  argTypes: {
    text: { control: "text" },
    fromColor: { control: "color" },
    toColor: { control: "color" },
    className: { control: "text" },
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    lineHeight: { control: "text" },
    highlightWords: { control: "array" },
    highlightColor: { control: "color" },
  },
};

const Template = (args) => <ScrollColorShiftText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Find your best design into us.",
  fromColor: "#29242469",
  toColor: "black",
  className: "text-left",
  fontSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  fontWeight: "font-extrabold",
  lineHeight: "leading-tight",
  highlightWords: [],
  highlightColor: "#2CA9E1",
};


