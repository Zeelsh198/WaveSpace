import ImageMarquee from "./ImageMarquee";
import "../../App"; // If this includes Tailwind or global styles
import logo1 from "./companyAssets/logo1.webp";
import logo2 from "./companyAssets/logo2.webp";
import logo3 from "./companyAssets/logo3.webp";

export default {
  title: "Components/ImageMarquee",
  component: ImageMarquee,
  argTypes: {
    images: { control: "array" },
    scrollSpeed: { control: "number" },
  },
};

const Template = (args) => <ImageMarquee {...args} />;

export const Default = Template.bind({});
Default.args = {
  scrollSpeed: 100,
  images: [
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,
        logo1,
        logo2,
        logo3,

  ],
};




