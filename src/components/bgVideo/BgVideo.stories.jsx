import BgVideo from "./BgVideo";
import "../../App";
import bgVideo from  "../../../public/Videos/bgVideoAssets/ZoFtvx5LeNNTwqF2_Wavespace-UI_UXDesignAgencyhover-1-.mp4"

export default {
  bgVideo,
  title: "Components/BgVideo",
  component: BgVideo,
  argTypes: {
    video: { control: "text" },
  },
};

export const Default = {
  args: {
    video: bgVideo,
  },
};
