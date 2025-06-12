import BookCallButton from "./BookCallButton";
import "../../App";

export default {
  title: 'Components/BookCallButton',
  component: BookCallButton,
  argTypes: {
    label: { control: 'text' },
    imgPath: { control: 'text' },
    onClick: { action: 'clicked' },
    height: { control: 'text' },
    padding: { control: 'text' },
    textColor: { control: 'text' },
    bgColor: { control: 'text' },
    hoverBgColor: { control: 'text' },
    hoverTextColor: { control: 'text' },
    customStyles: { control: 'text' },
  },
};

const Template = (args) => <BookCallButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Book a free call',
  imgPath: '/images/avatar.png',
  height: 'h-15',
  padding: 'px-2',
  textColor: 'text-white',
  bgColor: 'bg-black',
  hoverBgColor: 'hover:bg-blue-800',
  hoverTextColor: 'hover:text-white',
  customStyles: '',
};

