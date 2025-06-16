/**
 * @component DoneWithText
 *
 * `DoneWithText` is a simple UI component that displays a Material UI checkmark icon
 * (`DoneIcon`) followed by customizable text. It's typically used to indicate a
 * completed task, feature, or checklist item.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="enter text"] - The text displayed next to the check icon
 * @param {string} [props.classes] - Optional Tailwind CSS or custom class names for layout/styling
 *
 * @returns {JSX.Element} A flex container with a check icon and accompanying text
 */


import DoneIcon from "@mui/icons-material/Done";

const DoneWithText = ({text ="enter text" , classes}) => {
  return <div className={`flex gap-3 ${classes}`}><DoneIcon /> {text}</div>;
};

export default DoneWithText;
