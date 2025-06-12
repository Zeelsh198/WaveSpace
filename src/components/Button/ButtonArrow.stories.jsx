import ButtonArrow from './ButtonArrow';
import "../../App"

export default {
  title: 'Components/ButtonArrow',
  component: ButtonArrow,
  argTypes: {
    label: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
    padding: { control: 'text' },
    textColor: { control: 'text' },
    bgColor: { control: 'text' },
    hoverTextColor: { control: 'text' },
    hoverBgColor: { control: 'text' },
    arrow: { control: 'boolean' },
    handleButtonClick: { action: 'clicked' },
  },
};

const Template = (args) => <ButtonArrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  height: 'h-12',
  width: 'w-40',
  padding: 'px-3 py-2',
  textColor: 'text-white',
  bgColor: 'bg-blue-700',
  hoverTextColor: 'hover:text-white',
  hoverBgColor: 'hover:bg-black',
  arrow: true,
};
