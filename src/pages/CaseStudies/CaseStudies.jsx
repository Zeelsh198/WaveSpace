import React from "react";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import BrandingAds from "../../components/Branding/BrandingAds";
import AdWithPhoto2 from "../../components/AdWithPhoto/AdWithPhoto2";
import StepList from "../../components/StepList/StepList";
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import ButtonArrow from "../../components/Button/ButtonArrow";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ContactForm from "../../Form/ContactForm";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import HoverPreviewList from "../../components/HoverPreviewList/HoverPreviewList";
import {
  adWithPhotoData2,
  hoverPreviewListData,
} from "../../utils/caseStudiesDummyData";
import { steps, stepListTestimonial } from "../../utils/homeDummyData";

const CaseStudies = () => {
  return (
    <>
      <section>
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
      </section>
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-6  py-10">
        {adWithPhotoData2.map((ad, index) => (
          <AdWithPhoto2 key={index} {...ad} />
        ))}
      </section>
      <section className="bg-black text-white py-30">
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
              <StepList steps={steps} />
            </div>

            {/* Testimonial + Button */}
            <div className="w-full lg:w-1/3 flex flex-col items-start gap-8">
              <TestimonialHighlightCard {...stepListTestimonial} />
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
      </section>
      <section className="bg-gray-200 text-white pt-40">
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
        <HoverPreviewList list={hoverPreviewListData} heading="What We Offer" />
      </section>
    </>
  );
};

export default CaseStudies;
