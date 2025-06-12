// src/components/bgVideo/BgVideo.jsx

import { useRef } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
import bgVideo1 from "./bgVideoAssets/ZoFtvx5LeNNTwqF2_Wavespace-UI_UXDesignAgencyhover-1-.mp4";

const BgVideo = ({ video = bgVideo1, cursorText = "Play", bgColor = "white", color = "black" }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="max-w-[1440px] mx-auto relative  w-full h-auto overflow-hidden">
      <video autoPlay loop muted className="w-full h-auto">
        <source src={video} type="video/mp4" />
      </video>
      <CustomCursor text={cursorText} bgColor={bgColor} color={color} targetRef={containerRef} />
    </div>
  );
};

export default BgVideo;
