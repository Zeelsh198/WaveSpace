import ImageStrip from "./ImageStrip";
import "../../App"; // If this includes Tailwind or global styles

import src from "../../../public/Images/companyAssets/679b761bdd06dbd924b42ab6_Kodezi.webp";

export default {
  title: "Components/ImageStrip",
  component: ImageStrip,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
  },
};

const Template = (args) => <ImageStrip {...args} />;

export const Default = Template.bind({});
Default.args = {
  src,
  alt: "placeholder",
};
