/**
 * @component LogoMarquee
 *
 * `LogoMarquee` is a horizontally scrolling component used to showcase a continuous strip
 * of company logos. It includes a centered heading and a smoothly animated marquee that
 * loops infinitely from right to left.
 *
 * Ideal for displaying partner, client, or sponsor logos in a visually appealing,
 * minimalistic way.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="Trusted by 500+ global companies"] - Optional heading text displayed above the logo strip.
 * @param {string[]} [props.logos=[]] - An array of image URLs (or imported assets) representing company logos.
 *
 * @returns {JSX.Element} A section with an animated horizontal logo marquee and a heading.
 *
 * @example
 * <LogoMarquee
 *   text="Trusted by 1000+ brands worldwide"
 *   logos={[logo1, logo2, logo3]}
 * />
 */


// src/components/LogoMarquee.jsx
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ImageStrip from "./ImageStrip";
import "../../App";

import logo1 from "../../../public/Images/companyAssets/679b761bdd06dbd924b42ab6_Kodezi.webp";
import logo2 from "../../../public/Images/companyAssets/679b761c7282e0a9ae19291d_Door2day-7.webp";
import logo3 from "../../../public/Images/companyAssets/679b761cd11c374c8ab434c8_Door2day-5.webp";
import logo4 from "../../../public/Images/companyAssets/679b76198416189108165afa_Mavis-1.webp";
// add as many logos as needed...

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  background: "#fff",
  padding: "1.5rem 0",
});

const MarqueeTrack = styled(Box)({
  display: "flex",
  animation: `${scroll} 25s linear infinite`,
  width: "max-content",
});


const LogoMarquee = ({ text = "Trusted by 500+ global companies"  , logos = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4,]}) => {
  return (
    <MarqueeWrapper>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-center my-10">
        {text}
      </div>

      <MarqueeTrack>
        {logos.map((logo, idx) => (
          <ImageStrip key={idx} src={logo} />
        ))}
      </MarqueeTrack>
    </MarqueeWrapper>
  );
};

export default LogoMarquee;
