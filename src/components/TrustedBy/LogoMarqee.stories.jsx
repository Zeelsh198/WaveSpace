import LogoMarquee from "./LogoMarqee";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/LogoMarquee",
  component: LogoMarquee,
  argTypes: {
    logos: { control: "array" },
    scrollspeed: { control: "number" },
    logoheight: { control: "number" },
    logomargin: { control: "number" },
    backgroundColor: { control: "color" },
    padding: { control: "text" },
    maxWidth: { control: "text" },
    width: { control: "text" },
  },
};

const Template = (args) => <LogoMarquee {...args} />;

export const Default = Template.bind({});
Default.args = {
  scrollspeed: 20,
  logoheight: 30,
  logomargin: 40,
  backgroundColor: "#fff",
  padding: "1rem 0",
  maxWidth: "1440px",
  width: "100%",
};
