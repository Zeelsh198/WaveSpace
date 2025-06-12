import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const locations = [
  {
    country: "Bangladesh",
    email: "hello@wavespace.agency",
    phone: "+880 1785 0871 48",
    address: "Oriental Gofur Tower,\n88/KA, Mohammadpur,\nDhaka, Bangladesh.",
  },
  {
    country: "Indonesia",
    email: "hello@wavespace.agency",
    phone: "+62 8211 6925 169",
    address: "Podomoro Park,\nPadmagriya 15/6 Bandung,\nIndonesia.",
  },
  {
    country: "USA",
    email: "hello@wavespace.agency",
    phone: "+1 470 504 3155",
    address: "75 E 3rd St Sheridan, WY 82801,\nUSA.",
  },
  
];

const ContactInfoSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-25">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
        {locations.map((loc, index) => (
          <div key={index}>
            <h4 className="text-[20px] font-semibold mb-9">{loc.country}</h4>

            <div className="flex items-center gap-2 text-sm font-semibold mb-1">
              <FaEnvelope className="text-[15px]" />
              <span>{loc.email}</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium mb-9">
              <FaWhatsapp className="text-[15px]" />
              <a
                href={`https://wa.me/${loc.phone.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="border-b border-black"
              >
                {loc.phone}
              </a>
            </div>

            <p className="whitespace-pre-line text-[17px] leading-[22px] text-black">
              {loc.address}
            </p>
          </div>
        ))}

        {/* Vertical Divider */}
        <div className="hidden lg:block border-l border-gray-300 mx-auto" />

        {/* Business Inquiry & Career */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-[20px] font-semibold mb-2">Business Inquiry</h4>
            <p className="text-md text-gray-500 mb-[6px]">Email</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaEnvelope className="text-[15px]" />
              <span>hello@wavespace.agency</span>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-[22px]  mb-2">Career</h4>
            <p className="text-md text-gray-500 mb-[6px]">Join Us</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaEnvelope className="text-[15px]" />
              <span>career@wavespace.agency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
