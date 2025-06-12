import ContactInfoSection from "./ContactInfoSection";
import "../../App"

export default {
  title: "Components/ContactInfoSection",
  component: ContactInfoSection,
};

const Template = (args) => <ContactInfoSection {...args} />;

export const Default = Template.bind({});
Default.args = {

};
