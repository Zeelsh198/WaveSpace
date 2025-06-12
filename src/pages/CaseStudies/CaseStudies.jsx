import React from "react";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import BrandingAds from "../../components/Branding/BrandingAds";
import AdWithPhoto2 from "../../components/AdWithPhoto/AdWithPhoto2";
import adImg6 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad6.webp";
import adImg7 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad7.webp";
import adImg8 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad8.webp";
import adImg9 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad9.webp";
import adImg10 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad10.webp";
import adImg11 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad11.webp";
import adImg12 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad12.webp";
import adImg13 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad13.webp";
import StepList from "../../components/StepList/StepList";
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import TestimonialImg1 from "../../components/TestiMonialCard/TestiMonialAssets/67877f9495e27059b10a6422_96f7f37762eb6a222ca8aafae632defd_review image-1-p-500.webp";
import ButtonArrow from "../../components/Button/ButtonArrow";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ContactForm from "../../Form/ContactForm";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import HoverPreviewList from "../../components/HoverPreviewList/HoverPreviewList";

const CaseStudies = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  text-center my-15">
        <ScrollColorShiftText
          text="Turn your ideas into impactful"
          fromColor="#29242469"
          toColor="black"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-bold"
        />

        <ScrollColorShiftText
          text="solutions like them!"
          fromColor="#ffffffbf"
          toColor="#29242469"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-bold"
        />
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-6  py-10">
        <AdWithPhoto2
          imgSrc={adImg6}
          imgAlt="Spacebook ad"
          title="Spacebook - Business Accounting dashboard design"
          subtitle="Web Design • Visual Identity • SaaS Dashboard"
        />
        <AdWithPhoto2
          imgSrc={adImg7}
          imgAlt="Kodezi ad"
          title="Kodezi - AI-powered code generator"
          subtitle="SaaS Web Design • Branding • Design System"
        />
        <AdWithPhoto2
          imgSrc={adImg8}
          imgAlt="Quicky ad"
          title="Quicky - Mobile finance app design"
          subtitle="User Research • UI UX Design • Workflow"
        />
        <AdWithPhoto2
          imgSrc={adImg9}
          imgAlt="Solon ad"
          title="Solon - Crypto trading platform UX"
          subtitle="UI/UX Design • Branding • Design System"
        />
        <AdWithPhoto2
          imgSrc={adImg10}
          imgAlt="Oppa ad"
          title="Oppa - Travel app design"
          subtitle="UI/UX Design • Branding • Design System"
        />
        <AdWithPhoto2
          imgSrc={adImg11}
          imgAlt="Tournated ad"
          title="Tournated - Sports betting app design"
          subtitle="UI/UX Design • Branding • Design System"
        />
        <AdWithPhoto2
          imgSrc={adImg12}
          imgAlt="Off White ad"
          title="Off White - E-commerce website & mobile app design"
          subtitle="E-Commerce Platform • Web Design • Branding"
        />
        <AdWithPhoto2
          imgSrc={adImg13}
          imgAlt="Uni AI Travel ad"
          title="Uni AI Travel - AI-powered travel platform"
          subtitle="UI/UX Design • Branding • Design System"
        />
      </div>
      <div className="bg-black text-white py-30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="mt-16">
            <div className="flex flex-col lg:items-start text-center lg:text-left">
              <ScrollColorShiftText
                text="We deliver on time, in days and weeks"
                fromColor="#dadada "
                toColor="#ffffff"
                className="text-left"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-extrabold"
              />
              <ScrollColorShiftText
                text="—not months."
                fromColor="#e5e5e5 "
                toColor="#d1d1d1 "
                className="text-left"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-extrabold"
              />
            </div>
          </div>

          {/* Step List + Testimonial Section */}
          <div className="flex flex-col lg:flex-row gap-22 items-start mt-16">
            {/* Step List */}
            <div className="w-full lg:w-2/3">
              <StepList
                steps={[
                  "Onboard in <1 day",
                  "Understand Scope & Strategy",
                  "First designs in 4–5 days",
                ]}
              />
            </div>

            {/* Testimonial + Button */}
            <div className="w-full lg:w-1/3 flex flex-col items-start gap-8">
              <TestimonialHighlightCard
                testimonial="Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended"
                textColor="text-white"
                nameColor="text-white"
                image={TestimonialImg1}
                name=" Matt Kabus"
                position="CEO & Founder @LifeTales"
              />
              <ButtonArrow
                arrow={true}
                label="Book a call"
                height="h-14"
                width="w-40"
                textColor="text-black"
                bgColor="bg-yellow-300"
                hoverBgColor="hover:bg-white"
                hoverTextColor="hover:text-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-white pt-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  text-center ">
          <ScrollColorShiftText
            text="Find your best design into us."
            fromColor="#29242469"
            toColor="black"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
          />

          <ScrollColorShiftText
            text="We guarantee next success is yours!"
            fromColor="#ffffffbf"
            toColor="#29242469"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
          />
        </div>
        <TestimonialsSection />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 pt-40 ">
          <div>
            {" "}
            <ScrollColorShiftText
              text="One subscription. all the creative"
              fromColor="#29242469"
              toColor="black"
              className="text-left"
              fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              fontWeight="font-bold"
            />
            <ScrollColorShiftText
              text="services you need"
              fromColor="#29242469"
              toColor="black"
              className="text-left"
              fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              fontWeight="font-bold"
            />
          </div>

          <div>
            <ButtonArrow
              height="h-14"
              width="w-46"
              arrow={true}
              label="Start Designing"
            />
          </div>
        </div>
        <HoverPreviewList
          list={[
            { id: 1, title: "Logo & branding", img: adImg12 },
            { id: 2, title: "Web design", img: adImg13 },
            { id: 3, title: "Product design", img: adImg12 },
            { id: 4, title: "UX design", img: adImg13 },
            { id: 5, title: "Design system", img: adImg12 },
            { id: 6, title: "Graphic design", img: adImg13 },
            { id: 7, title: "Animation", img: adImg12 },
            { id: 8, title: "Pitch decks", img: adImg13 },
            { id: 9, title: "Email template design", img: adImg12 },
            { id: 10, title: "UI UX design", img: adImg13 },
            { id: 11, title: "SaaS design", img: adImg12 },
            { id: 12, title: "Mobile app", img: adImg13 },
            { id: 13, title: "Interaction design", img: adImg12 },
            { id: 14, title: "Lottie & web animation", img: adImg13 },
            { id: 15, title: "MVP development", img: adImg12 },
            { id: 16, title: "Website design", img: adImg13 },
            { id: 17, title: "User research", img: adImg12 },
            {
              id: 18,
              title: "Conversation rate optimization (CRO)",
              img: adImg13,
            },
          ]}
          heading="What We Offer"
        />

      </div>
    </>
  );
};

export default CaseStudies;
