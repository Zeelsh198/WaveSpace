/**
 * @component Footer
 *
 * `Footer` is a comprehensive website footer section combining various subcomponents like
 * an introduction, service links, case studies, contact options, a contact form, and a bottom bar.
 * It is designed to provide navigation, branding, and user engagement through CTA and forms.
 *
 * @returns {JSX.Element} A responsive footer layout with multiple columns, a contact form, 
 * call-to-action section, and a decorative footer image.
 */


import FooterIntro from "./FooterIntro";
import FooterLinksColumn from "./FooterLinksColumn";
import footerimg from "./FooterAssets/footer.webp";
import FooterBottomBar from "./FooterBottomBar";
import ContactForm from "../../Form/ContactForm";
import HaveAProject from "../HaveAProject/HaveAProject";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="bg-gray-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-30">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 w-full">
            {/* Left Side: Text + Profile Card */}
            <div className="w-full lg:w-1/2 flex items-center">
              <HaveAProject />
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white w-full h-full p-6 sm:p-8 md:p-10 shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col pt-25 lg:flex-row flex-wrap px-4 sm:px-8 gap-y-12 lg:gap-y-0">
        {/* Top left intro section */}
        <div className="w-full lg:w-1/3">
          <FooterIntro />
        </div>

        {/* Right side links */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <FooterLinksColumn
              title="Services"
              links={[
                "Branding",
                "UI UX Design",
                "Web Design",
                "SaaS Design",
                "Webflow",
                "View all services",
              ]}
            />
            <FooterLinksColumn
              title="Agency"
              links={[
                "About us",
                "Pricing",
                "Service",
                "Case studies",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ]}
            />
            <FooterLinksColumn
              title="Case studies"
              links={[
                "Kodezi",
                "Solon Network",
                "Quicky",
                "Oppa travel",
                "View all work",
              ]}
            />
            <FooterLinksColumn
              title="Contact"
              links={["Clutch", "Behance", "Dribbble", "Awwwards"]}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <FooterBottomBar />

      {/* Footer image */}
      <img src={footerimg} alt="Footer visual" className="w-full h-auto mt-10" />
    </footer>
  );
};

export default Footer;
