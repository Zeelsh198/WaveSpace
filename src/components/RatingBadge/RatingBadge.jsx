/**
 * @component RatingBadge
 *
 * `RatingBadge` is a compact badge component that displays a rating source label,
 * a star-based rating, and the numerical value. It is commonly used to highlight
 * review scores (e.g., from Clutch, Google, etc.) with customizable styles.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="Clutch"] - The label or source of the rating (e.g., "Clutch").
 * @param {number} [props.rating=5] - The number of stars to display. Should be a number between 0 and 5.
 * @param {string} [props.bgColor="bg-[#101010]"] - Tailwind background color class for the badge.
 * @param {string} [props.textColor="text-white"] - Tailwind text color class for the badge content.
 * @param {string} [props.borderColor="border-white"] - Tailwind border color class for the badge.
 *
 * @returns {JSX.Element} A styled badge with rating stars and a label.
 */


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
