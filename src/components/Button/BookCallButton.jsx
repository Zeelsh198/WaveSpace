import { Avatar } from "@mui/material";
import bookCallImg from "../AvatarFounders/FoundersAssets/67877f9495e27059b10a6435_ef5fd2a467fb1a0143aaf268d7342b19_ceo image.webp";

const BookCallButton = ({
  label = "Book a free call",
  imgPath = bookCallImg,
  onClick,
  height = "h-12 sm:h-14 md:h-16 lg:h-18", // Responsive height
  padding = "px-3 sm:px-4 md:px-5 lg:px-6", // Responsive padding
  textColor = "text-white",
  bgColor = "bg-black",
  hoverBgColor = "hover:bg-blue-800",
  hoverTextColor = "hover:text-white",
  customStyles = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex items-center gap-2 sm:gap-3 transition-all duration-300 cursor-pointer
        ${height} ${padding} ${textColor} ${bgColor} ${hoverTextColor} ${hoverBgColor} ${customStyles} w-auto`}
    >
      {imgPath && (
        <Avatar
          alt="avatar"
          src={imgPath}
          sx={{
            width: { xs: 32, sm: 36, md: 40, lg: 44 }, // Responsive avatar sizes
            height: { xs: 32, sm: 36, md: 40, lg: 44 },
          }}
        />
      )}
      <span className="font-medium text-xs sm:text-sm md:text-base lg:text-lg mx-2 sm:mx-3 md:mx-4">
        {label}
      </span>
    </button>
  );
};

export default BookCallButton;