import React from 'react';
import BenefitsCard from './BenefitsCard';
import vd1 from "./BenefitsCardAssets/bAd1.mp4"
export default {
  title: 'Components/BenefitsCard',
  component: BenefitsCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    mediaUrl: { control: 'text' },
    mediaType: { control: 'select', options: ['image', 'video'] },
    className: { control: 'text' },
  },
};

const Template = (args) => <BenefitsCard {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  title: 'Flat monthly fee',
  description: 'Our pricing remains same each month — no guesswork, no surprises.',
  mediaUrl: vd1, // Replace with actual image URL from assets if available
  mediaType: 'image',
  className: 'shadow-xl',
};

export const WithVideo = Template.bind({});
WithVideo.args = {
  title: 'Fast turnaround',
  description: 'Our team creates stunning designs tailored to your needs, ready in just a few days.',
  // Example video URL, replace with an actual one if you have it.
  // For local videos, you might need to import them or place them in the public folder.
  mediaUrl: vd1,
  mediaType: 'video',
  className: 'border-2 border-blue-500',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  title: 'Unlimited revisions',
  description: 'Change it, swap it, until you love it — as per as design need changes.',
  mediaUrl: vd1,
  mediaType: 'image', // mediaType is irrelevant if mediaUrl is empty
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: 'Full design service',
  description: 'We offer full-service design, covering every aspect to meet all your needs.',
  mediaUrl: vd1, // Replace with actual image URL
  mediaType: 'image',
  className: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white',
};

export const NoMedia = Template.bind({});
NoMedia.args = {
  title: 'No contracts, no headaches',
  description: 'Top-notch designs without any tricky rules or paperwork. It simple and straightforward.',
};