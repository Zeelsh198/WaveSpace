import ServiceDetails from './ServiceDetails';
import image from '../AdWithPhoto/AdWithPhotoAssets/ad1.webp';

export default {
  title: 'Components/ServiceDetails',
  component: ServiceDetails,
};

const Template = (args) => <ServiceDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: image,
  title: 'UI/UX Design',
  description:
    'Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.',
  services: [
    'UI UX Design',
    'UX Audit',
    'Design System',
    'UI UX Consulting',
    'UX Research',
    'Usability Testing',
    'Wireframe & UI Prototyping',
  ],
  imageOnLeft: true,
};

export const ImageOnRight = Template.bind({});
ImageOnRight.args = {
  ...Default.args,
  imageOnLeft: false,
};