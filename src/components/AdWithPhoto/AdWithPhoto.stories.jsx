import AdWithPhoto from "./AdWithPhoto";
import "../../App"; // If this includes Tailwind or global styles
import adImg1 from "./AdWithPhotoAssets/ad1.webp";

export default {
  title: "Components/AdWithPhoto",
  component: AdWithPhoto,
  argTypes: {
    src: { control: "text" },
    imageHeight: { control: "text" },
    imageWidth: { control: "text" },
    txt1: { control: "text" },
    txt2: { control: "text" },
    alt: { control: "text" },
  },
};

const Template = (args) => <AdWithPhoto {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: adImg1,
  imageHeight: "400px",
  imageWidth: "100%",
  txt1: "Behind the UI - How We Rebuilt Kodezi's Product Experince ",
  txt2: "Startup:/kodezi",
  alt: "Advertisement",
};

