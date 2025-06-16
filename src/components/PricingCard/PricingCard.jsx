/**
 * @component PricingCard
 *
 * `PricingCard` is a reusable UI card component for displaying pricing plans, feature lists, and CTAs.
 * It supports customization for title, price, description, button labels, badge, features, and bottom notes.
 *
 * @param {Object} props - Component props
 * @param {string} props.label1 - Label for the main call-to-action button.
 * @param {string} props.label2 - Label for the secondary "Book a Call" button.
 * @param {string} props.bgColor - Tailwind background color class for the main button.
 * @param {string} props.title - Title of the pricing plan.
 * @param {string} props.price - Price text to be displayed prominently.
 * @param {string} props.subText - Smaller subtext under the price.
 * @param {boolean} [props.showBookCall=true] - Whether to show the secondary "Book a Call" button.
 * @param {string} [props.badge] - Optional badge text displayed next to the title.
 * @param {string[]} [props.features=[]] - List of HTML-formatted features included in the plan.
 * @param {string} [props.viewAllLink] - Optional link to view all features or details.
 * @param {string} [props.bottomNote] - Full bottom note text displayed under the card.
 * @param {string} [props.bottomNoteHighlight] - Substring within the bottom note to highlight.
 * @param {string} [props.highlightColor="#d9fd51"] - Hex color used for highlight elements like badge and links.
 * @param {string} [props.border] - Tailwind class for optional border styling.
 *
 * @returns {JSX.Element} A styled pricing card component with customizable call-to-actions and features.
 */


import ButtonArrow from "../Button/ButtonArrow";
const PricingCard = ({
  label1,
  label2,
  bgColor,
  title,
  price,
  subText,
  showBookCall = true,
  badge,
  features = [],
  viewAllLink,
  bottomNote,
  bottomNoteHighlight,
  highlightColor = "#d9fd51",
  border,
}) => {
  return (
    <div
      className={`flex flex-col justify-between bg-[#242424] text-white rounded-xl px-6 py-8 w-[400px]  ${border
      }`}
      style={border ? { borderColor: highlightColor } : {}}
    >
      <div>
        {/* Title + Badge */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {badge && (
            <span
              className="text-xs px-2 py-1 rounded bg-[#d9fd51] text-black font-semibold"
              style={{ backgroundColor: highlightColor }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex flex-col text-left">
          <h2 className="text-4xl font-bold">{price}</h2>
          <p className="text-sm text-gray-400">{subText}</p>
        </div>

        {/* CTA Button */}
        <div className="mt-5">
          <ButtonArrow
            label={label1}
            arrow={true}
            width="w-full"
            bgColor={bgColor}
            hoverBgColor="hover:bg-[#d9fd51]"
            textColor="text-black"
            hoverTextColor="hover:text-black"
          />
        </div>

        {/* Book a Call */}
        {showBookCall && (
          <div className="text-center mb-4">
            <ButtonArrow
              label={label2}
              width="w-full"
              text="Book A Call"
              bgColor="bg:black"
              hoverBgColor="hover:bg-black"
              hoverTextColor="hover:text-[#d9fd51]"
            />
          </div>
        )}

        {/* Features */}
        <div >
          <h4 className="font-semibold mb-3 flex ">What’s included</h4>
          <ul className="space-y-4 text-lg">
            {features.map((item, index) => (
              <li key={index} className="flex items-start">
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>

          {/* View All */}
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="text-xs text-[#d9fd51] mt-1 inline-block"
            >
              view all
            </a>
          )}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 border-t border-gray-700 pt-8 text-lg text-center">
        <span className="text-[#d9fd51]  font-semibold">
          {bottomNoteHighlight}
        </span>{" "}
        {bottomNote.replace(bottomNoteHighlight, "")}
      </div>
    </div>
  );
};

export default PricingCard;
