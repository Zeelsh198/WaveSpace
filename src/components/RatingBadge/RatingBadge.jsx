import StarIcon from "@mui/icons-material/Star";

const RatingBadge = ({
  text = "Clutch",
  rating = 5,
  bgColor = "bg-[#101010]",
  textColor = "text-white",
  borderColor = "border-white",
}) => {
  const starsArray = Array.from({ length: rating });

  return (
    <div
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-[13px] font-medium w-fit ${bgColor} ${textColor} ${borderColor}`}
    >
      <span>{text}</span>
      <div className="flex items-center">
        {starsArray.map((_, idx) => (
          <StarIcon
            key={idx}
            className="text-red-500"
            style={{ fontSize: "15px" }}
          />
        ))}
      </div>
      <span className="ml-1 text-md">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingBadge;
