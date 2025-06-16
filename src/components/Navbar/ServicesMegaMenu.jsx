/**
 * @component ServicesMegaMenu
 *
 * `ServicesMegaMenu` is a full-width dropdown menu component designed to showcase a list of service offerings
 * in a clean, structured format with icons and labels, along with a subscription card on the right.
 * 
 * It uses `framer-motion` for entry/exit animations and is intended to appear on hover or click under a nav item.
 *
 * @returns {JSX.Element} A fixed-position mega menu with service icons/labels and a call-to-action card.
 */


import {
  MdDesktopMac,
  MdPhoneIphone,
  MdWeb,
  MdDesignServices,
  MdRocketLaunch,
  MdShoppingCart,
  MdBuild,
  MdSearch,
  MdStyle,
  MdCloudQueue,
  MdAutoAwesome, // Placeholder for Webflow, Branding
} from 'react-icons/md';
import ButtonArrow from '../Button/ButtonArrow'; // Assuming ButtonArrow is suitable
import Logo from './Logo'; // For the 'W' icon on the card
import { motion } from 'framer-motion';

const serviceItemsList = [
  { icon: <MdDesktopMac size={24} className="text-blue-600 " />, label: 'UI UX Design' },
  { icon: <MdWeb size={24} className="text-blue-600" />, label: 'Web Design' },
  { icon: <MdAutoAwesome size={24} className="text-blue-600" />, label: 'Product Design' }, // Placeholder icon
  { icon: <MdCloudQueue size={24} className="text-blue-600" />, label: 'SaaS Design' },
  { icon: <MdStyle size={24} className="text-blue-600" />, label: 'Branding' }, // Placeholder icon
  { icon: <MdSearch size={24} className="text-blue-600" />, label: 'UX Audit' },
  { icon: <MdPhoneIphone size={24} className="text-blue-600" />, label: 'Mobile App' },
  { icon: <MdDesignServices size={24} className="text-blue-600" />, label: 'Design System' },
  { icon: <MdWeb size={24} className="text-blue-600"  />, label: 'Webflow' }, // Using Logo for W
  { icon: <MdRocketLaunch size={24} className="text-blue-600" />, label: 'Build Product (MVP)' },
  { icon: <MdShoppingCart size={24} className="text-blue-600" />, label: 'Conversion Rate. (CRO)' },
];

const ServicesMegaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-[88px] left-0 w-full bg-white shadow-2xl z-50"
    >
    <div className="fixed top-[88px] left-0 w-full bg-white shadow-2xl z-50">
      <div className="max-w-[1440px] mx-auto p-6">
        <div className="flex justify-center gap-30">
          {/* Left Side: Service Items in 2 columns */}
          <div className="grid grid-cols-2 gap-x-30 gap-y-4" style={{ minWidth: '400px' }}>
            {serviceItemsList.map((item, index) => (
              <div key={index} className="group relative flex items-center gap-3 p-2 rounded-md cursor-pointer w-fit">
                {item.icon}
                <span className="text-lg text-black">{item.label}</span>
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-full scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out bg-black" />
              </div>
            ))}
          </div>

          {/* Right Side: Subscription Card */}
          <div className="bg-blue-200 p-6 rounded-lg flex flex-col items-start justify-between" style={{ width: '250px' }}>
            <div>
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-md mb-3">
                <Logo textSize="text-xl" textColor="text-white" text="W" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscription Services</h3>
              <p className="text-xs text-gray-600 mb-4">
                One subscription, unlimited design requests for your business.
              </p>
            </div>
            <ButtonArrow
              label="Contact Us"
              arrow={true}
              height="h-10"
              width="w-35"
              padding="px-3 py-1.5"
              textColor="text-white"
              bgColor="bg-blue-600" // Matching the button in the image
              hoverTextColor="hover:text-white"
              hoverBgColor="hover:bg-black"
              textSize="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default ServicesMegaMenu;