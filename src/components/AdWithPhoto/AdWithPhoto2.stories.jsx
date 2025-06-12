import AdWithPhoto2 from "./AdWithPhoto2";
import "../../App"; // If this includes Tailwind or global styles
import adImg7 from "./AdWithPhotoAssets/ad7.webp";

export default {
  title: "Components/AdWithPhoto2",
  component: AdWithPhoto2,
  argTypes: {
    imgSrc: { control: "text" },
    imgAlt: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

const Template = (args) => <AdWithPhoto2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: adImg7,
  imgAlt: "Advertisement",
  title: "Behind the UI - How We Rebuilt Kodezi's Product Experience",
  subtitle: "Startup:/kodezi",
};

