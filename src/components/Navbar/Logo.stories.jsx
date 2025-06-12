import Logo from "./Logo";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    text: { control: "text" },
    textSize: { control: "text" },
    textWeight: { control: "text" },
    link: { control: "text" },
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "wavespace",
  textSize: "text-lg sm:text-xl",
  textWeight: "font-semibold",
};
