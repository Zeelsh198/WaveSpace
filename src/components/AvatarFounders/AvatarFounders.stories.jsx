import AvatarFounders from "./AvatarFounders";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/AvatarFounders",
  component: AvatarFounders,
  argTypes: {},
};

const Template = (args) => <AvatarFounders {...args} />;

export const Default = Template.bind({});
Default.args = {};
