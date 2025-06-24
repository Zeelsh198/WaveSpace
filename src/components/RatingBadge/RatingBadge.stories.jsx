import "../../App"
import clutch from "../../../public/Images/RatingSummaryAssets/Clutch.webp"
import RatingBadge from "./RatingBadge";

export default {
    title:"Components/RatingBadge",
    components: RatingBadge,
    argTypes:{

    }
}

const Template = (args) => <RatingBadge{...args}/>;

export const Default = Template.bind({});

Default.args={
    logo : clutch, // string (URL)
      text : "Clutch",
      rating : 5,
      bgColor : "bg-black",
      textColor : "text-white",
      borderColor : "border-white",
}
