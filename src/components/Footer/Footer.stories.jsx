import Footer from "./Footer";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
