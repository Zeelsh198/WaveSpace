import React from "react";
import RatingBadge from "../../components/RatingBadge/RatingBadge";
import TextBox from "../../components/TextBox/TextBox";
import ButtonArrow from "../../components/Button/ButtonArrow";
import servicesHeaderImg from "./ServicesAssets/services header.png";
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import HoverCardDetails from "../../components/HoverCardDetails/HoverCardDetails";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import InfoCard from "../../components/InfoCard/InfoCard";
import DoneWithText from "../../components/DoneWithText/DoneWithText";
import {
  serviceDetails,
  hoverCardDetails,
  infoCards,
  trialPills,
} from "../../utils/servicesDummyData";
import { imageMarqueeData1, statCardsData } from "../../utils/homeDummyData";

const Services = () => {
  return (
    <>
      <div className="bg-[#0c005b] w-full py-16 sm:py-20 sm:pb-40">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-20">
          {/* LEFT SECTION */}
          <section className="w-full lg:w-1/2 flex flex-col gap-6">
            <RatingBadge
              text="Clutch"
              rating={5}
              borderColor="border-white"
              bgColor="bg-[#0c005b]"
            />

            <TextBox
              text="Digital product & UI UX design services"
              classes="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight"
            />

            <TextBox
              text="Are you struggling to turn your ideas into something users love? Wavespace designs digital products for the US, UK, Europe, and Central Asia that are clean, fast, and ready to develop, built with smart UX and clean UI."
              classes="text-base sm:text-lg text-white font-medium"
            />

            <TextBox
              text="“Design is the bridge between user intent and product impact..”"
              classes="text-white italic text-sm sm:text-base"
            />

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-4">
              <ButtonArrow
                label="Consult an expert"
                arrow={true}
                bgColor="bg-[#d9fd51]"
                textColor="text-black"
                hoverBgColor="hover:bg-white"
                hoverTextColor="hover:text-black"
              />

              {/* Hidden on mobile, visible on sm and up */}
              <div className="hidden sm:block">
                <ButtonArrow
                  label="See our works"
                  arrow={false}
                  height="h-15 xs:h-14"
                  textColor="text-white"
                  bgColor="bg-[#0c005b]"
                  hoverTextColor="hover:text-black"
                  hoverBgColor="hover:bg-white"
                  borderColor="border border-white"
                />
              </div>
            </div>
          </section>

          {/* RIGHT IMAGE - hidden on small screens */}
          <section className="w-full lg:w-1/2 hidden lg:flex justify-center">
            <img
              src={servicesHeaderImg}
              alt="services"
              className="w-full max-w-[700px] object-contain"
            />
          </section>
        </div>
      </div>
      <section className="max-w-[1440px] bg-white mx-auto  px-4 sm:px-6 lg:px-8 gap-10">
        <LogoMarquee
          scrollspeed={25}
          backgroundColor="#f5f5f5"
          padding="1rem sm:1.5rem"
        />
      </section>
      <section>
        {serviceDetails.map((service, index) => (
          <ServiceDetails key={index} {...service} />
        ))}
      </section>
      <section className="max-w-[1440px]  mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-end justify-between gap-6 md:gap-0 pt-25 ">
        <div>
          {" "}
          <ScrollColorShiftText
            text="Industry expertise"
            fromColor="#29242469"
            toColor="black"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
          />
          <ScrollColorShiftText
            text="across globally"
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
            label="Choose a plan"
          />
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {hoverCardDetails.map((card, index) => (
          <div
            key={index}
            className={
              index === 0 || index === 2
                ? "lg:self-end"
                : index === 4
                  ? "lg:self-start"
                  : ""
            }
          >
            <HoverCardDetails {...card} />
          </div>
        ))}
      </section>
      <section className="bg-gray-200 py-15">
        <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-end justify-between gap-6 md:gap-0 ">
          <div>
            {" "}
            <ScrollColorShiftText
              text="Industry expertise"
              fromColor="#29242469"
              toColor="black"
              className="text-left"
              fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              fontWeight="font-bold"
            />
            <ScrollColorShiftText
              text="across globally"
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
              label="Choose a plan"
            />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col  lg:flex-row gap-8 justify-center items-start">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="w-full bg-[#5d9ab6] py-20">
        <ScrollRevealLines
          line1Class="text-white"
          line2Class="text-white"
          line1="our award &"
          line2="achievements"
          containerClass="px-4 sm:py-12 md:px-16 text-center"
        />

        {/* ImageMarquee visible on mobile & tablet only (hidden on lg and above) */}
        {/* Visible on mobile & tablet only */}
        <div className="block lg:hidden">
          <ImageMarquee
            scrollSpeed={100}
            images={imageMarqueeData1}
            height=" sm:h-[200px] md:h-[300px]"
            width=" sm:w-[200px] md:w-[300px]"
            gap="mx-0"
          />
        </div>

        {/* StatCards visible on laptop and above only (hidden on sm & md) */}
        <div className="hidden lg:flex max-w-7xl mx-auto flex-wrap justify-center">
          {statCardsData.map((card) => (
            <StatCard key={card.index} {...card} />
          ))}
        </div>
      </section>
      <section className="bg-gray-200 py-30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  text-center">
          <ScrollColorShiftText
            text="Find your best design into us."
            fromColor="#29242469"
            toColor="black"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-extrabold"
          />
          <ScrollColorShiftText
            text="We guarantee next success is yours!"
            fromColor="#ffffffbf"
            toColor="#29242469 "
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-extrabold"
          />
        </div>
        <TestimonialsSection />
      </section>
      <section className="w-full  sm:px-6">
        <div
          className="bg-[#0c005b] w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 rounded-none sm:rounded-[28px] mt-[60px] md:mt-[100px] mb-[80px] md:mb-[120px] text-white font-inter relative overflow-hidden"
        >
          {/* 🔥 Top Badge */}
          <div className="inline-block bg-[#150973] text-white text-[14px] leading-[20px] px-4 py-1 rounded-full mb-8 border border-white border-opacity-20">
            🔥 Only 4 seats pre month
          </div>

          {/* 🧠 Headings */}
          <TextBox
            text="Test our product & UI UX design expertise."
            classes="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-semibold mb-2"
          />
          <TextBox
            text="Start a one-week trial for $500"
            classes="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-semibold mb-10"
          />

          {/* ℹ️ Subheading */}
          <TextBox
            text="... and get the answers on:"
            classes="text-white text-sm opacity-60 mb-6 tracking-wide"
          />

          {/* ✅ Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {trialPills.map((text, index) => (
              <DoneWithText
                key={index}
                classes="flex items-center gap-2 rounded-full border border-white border-opacity-20 bg-[#150973] px-4 py-[10px] text-sm font-medium leading-tight"
                text={text}
              />
            ))}
          </div>

          {/* 🟡 CTA Button */}
          <div>
            <ButtonArrow
              arrow={true}
              label="Start the trial week"
              bgColor="bg-[#d9fd51]"
              textColor="text-black"
              hoverBgColor="hover:bg-white"
              hoverTextColor="hover:text-black"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
