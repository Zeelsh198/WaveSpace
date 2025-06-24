import AdWithPhoto from "./AdWithPhoto";
import "../../App"; // Tailwind or global styles
import adImg1 from "../../public/Images/AdWithPhotoAssets/ad1.webp";

export default {
  title: "Components/AdWithPhoto",
  component: AdWithPhoto,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["design1", "design2"],
    },
    cursorText: { control: "text" },
    bgColor: { control: "color" },
    color: { control: "color" },
    src: { control: "text" },
    alt: { control: "text" },
    imageHeight: { control: "text" },
    imageWidth: { control: "text" },
    txt1: { control: "text" },
    txt2: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

const Template = (args) => <AdWithPhoto {...args} />;

// ✅ Story for Design 1
export const Design1 = Template.bind({});
Design1.args = {
  variant: "design1",
  cursorText: "Play",
  bgColor: "white",
  color: "black",
  src: adImg1,
  alt: "Ad image",
  imageHeight: "400px",
  imageWidth: "100%",
  txt1: "Behind the UI - How We Rebuilt Kodezi's Product Experience",
  txt2: "Startup: /kodezi",
};

// ✅ Story for Design 2
export const Design2 = Template.bind({});
Design2.args = {
  variant: "design2",
  cursorText: "See More",
  bgColor: "#fffc1a",
  color: "black",
  src: adImg1,
  alt: "Ad image",
  title: "Kodezi - AI-powered code generator",
  subtitle: "SaaS Web Design • Branding • Design System",
};
