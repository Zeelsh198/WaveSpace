import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';

const ButtonArrow = ({
  label = "Enter label",
  height = "h-12 sm:h-12 md:h-14 lg:h-16", // responsive height
  width = "w-full sm:w-40 md:w-48 lg:w-56", // responsive width
  padding = "px-4 py-2", // reasonable default padding
  textColor = "text-white",
  bgColor = "bg-indigo-700",
  hoverTextColor = "hover:text-white",
  hoverBgColor = "hover:bg-black",
  arrow = false,
  handleButtonClick,
  borderColor = "",
}) => {
  return (
    <button
      onClick={handleButtonClick}
      className={`cursor-pointer text-base sm:text-lg ${height} ${width} ${padding} ${textColor} ${bgColor} ${hoverTextColor} ${hoverBgColor} ${borderColor} rounded-full transition-all duration-500 flex items-center justify-center gap-2 whitespace-nowrap`}
    >
      {label}
      {arrow && <ArrowOutwardSharpIcon fontSize="small" />}
    </button>
  );
};

export default ButtonArrow;
