import NavLinkItems from "../Navbar/NavLinkItems";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import { Avatar, AvatarGroup } from "@mui/material";
import avtrImg from "../AvatarFounders/FoundersAssets/67877f9495e27059b10a6435_ef5fd2a467fb1a0143aaf268d7342b19_ceo image.webp";

const FooterBottomBar = () => {
  const footerLinks = [
    { label: "Instagram", link: "/case-studies" },
    { label: "Facebook", link: "/pricing" },
    { label: "Linkedin", link: "/services" },
    { label: "Twitter", link: "/about" },
  ];

  return (
    <div className="bg-black text-white w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-10 pb-6">
      {/* Top Social Links & CTA */}
      <div className="max-w-[1440px] mt-20 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#1E1E1E] pb-10 gap-6 md:gap-10">
        {/* Social Links */}
        <div className="flex  gap-4 md:gap-4 lg:gap-6 ">
          {footerLinks.map((link, index) => (
            <NavLinkItems
              key={index}
              label={link.label}
              link={link.link}
              textColor="text-[#BDBDBD]"
              underlineColor="bg-white"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <p className="text-white text-lg md:text-md lg:text-2xl leading-none">
              Let's work together
            </p>
            <p className="text-[#E4FF53] font-bold text-xl md:text-2xl lg:text-4xl leading-tight">
              Call wavespace
            </p>
          </div>

          <div className="bg-[#E4FF53] text-black p-4 md:p-4 lg:p-5 rounded-full hover:bg-white transition duration-300">
            <ArrowOutwardSharpIcon fontSize="medium" />
          </div>
        </div>
      </div>

      {/* Bottom Info & Avatars */}
      <div className="max-w-[1440px] mx-auto mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
        {/* Left */}
        <p className="text-[#BDBDBD] text-sm">wavespace LLC © 2025</p>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-20 items-start sm:items-center">
          <p className="text-[#BDBDBD] text-sm text-center sm:text-left">
            Wavespace is a limited liability company based in{" "}
            <span role="img" aria-label="flags"></span>
          </p>

          <AvatarGroup spacing={15} max={9}>
            <Avatar src={avtrImg} alt="Remy Sharp" />
            <Avatar src={avtrImg} alt="Travis Howard" />
            <Avatar src={avtrImg} alt="Cindy Baker" />
            <Avatar src={avtrImg} alt="Remy Sharp" />
            <Avatar src={avtrImg} alt="Travis Howard" />
            <Avatar src={avtrImg} alt="Cindy Baker" />
            <Avatar src={avtrImg} alt="Remy Sharp" />
            <Avatar src={avtrImg} alt="Travis Howard" />
            <Avatar src={avtrImg} alt="Cindy Baker" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBar;
