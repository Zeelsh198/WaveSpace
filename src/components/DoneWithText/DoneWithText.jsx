import DoneIcon from "@mui/icons-material/Done";

const DoneWithText = ({text ="enter text" , classes}) => {
  return <div className={`flex gap-3 ${classes}`}><DoneIcon /> {text}</div>;
};

export default DoneWithText;
