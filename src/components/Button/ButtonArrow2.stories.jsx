import ButtonArrow2 from './ButtonArrow2';
import "../../App"

export default {
  title: 'Components/ButtonArrow2',
  component: ButtonArrow2,
  argTypes: {
    text: { control: 'text' },
    btnBgColor: { control: 'text' },
    btnHoverBgColor: { control: 'text' },
    btnTextColor: { control: 'text' },
    arrowBgColor: { control: 'text' },
    arrowColor: { control: 'text' },
    padding: { control: 'text' },
    rounded: { control: 'text' },
    textSize: { control: 'text' },
  },
};

const Template = (args) => <ButtonArrow2 {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Book a call',
    btnBgColor: 'bg-[#E4FF53]',
    btnHoverBgColor: 'hover:bg-white',
    btnTextColor: 'text-black',
    arrowBgColor: 'bg-black',
    arrowColor: 'text-white',
    padding: 'py-3 px-6',
    rounded: 'rounded-full',
    textSize: 'text-base md:text-lg',
    
};
