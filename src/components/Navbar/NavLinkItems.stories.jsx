import NavLinkItems from "./NavLinkItems";
import { MemoryRouter } from "react-router-dom";
import "../../App"; // If this includes Tailwind or global styles

export default {
  title: "Components/NavLinkItems",
  component: NavLinkItems,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    label: { control: "text" },
    showIcon: { control: "boolean" },
    link: { control: "text" },
    textSize: { control: "text" },
    textColor: { control: "text" },
    underlineColor: { control: "text" },
  },
};

const Template = (args) => <NavLinkItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Case studies",
  showIcon: false,
  link: "/case-studies",
  textSize: "text-base sm:text-lg md:text-xl",
  textColor: "text-black",
  underlineColor: "bg-black",
};
