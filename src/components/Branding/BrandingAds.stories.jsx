import BrandingAds from "./BrandingAds";
import "../../App"; // If this includes Tailwind or global styles
import brandingImg1 from "./BrandingAdsAssets/ad1.webp";

export default {
  title: "Components/BrandingAds",
  component: BrandingAds,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
    heading: { control: "text" },
    description: { control: "text" },
    bulletPoints: { control: "text" },
    imageSrc: { control: "text" },
  },
};

const Template = (args) => <BrandingAds {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: "bg-gray-200",
  textColor: "text-gray-900",
  heading: "Branding Identity",
  description: "Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.",
  bulletPoints: "Visual Identity Design,Brand Experience,Brand Audits,Rebranding,Brand Guidelines,Brand Strategy,Brand Collaterals",
  imageSrc: brandingImg1,
};

