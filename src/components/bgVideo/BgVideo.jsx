/**
 * `BgVideo` is a reusable background video component that supports a custom hover cursor
 * using the `CustomCursor` component. It plays a video in a loop, muted and autoplayed,
 * ideal for full-width hero sections or backgrounds.
 *
 * @component `BgVideo`
 * @example
 * <BgVideo
 *   video="/assets/hero-video.mp4"
 *   cursorText="Watch"
 *   bgColor="#ffffff"
 *   color="#000000"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} [props.video=bgVideo1] - Video source URL or imported path
 * @param {string} [props.cursorText="Play"] - Text displayed inside the custom cursor
 * @param {string} [props.bgColor="white"] - Background color for the custom cursor
 * @param {string} [props.color="black"] - Text color for the custom cursor
 *
 * @returns {JSX.Element} Rendered background video with a custom hover cursor
 */

import { useRef } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
import bgVideo1 from "../../../public/Videos/bgVideoAssets/ZoFtvx5LeNNTwqF2_Wavespace-UI_UXDesignAgencyhover-1-.mp4"

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
