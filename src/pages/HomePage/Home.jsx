
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import RotatingText from "../../components/RotatingText/RotatingText";
import ReviewBadge from "../../components/ReviewBadge/ReviewBadge";
import AvatarFounders from "../../components/AvatarFounders/AvatarFounders";
import BgVideo from "../../components/bgVideo/BgVideo";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import TestimonialCard from "../../components/TestiMonialCard/TestiMonialCard"
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import AdWithPhoto from "../../components/AdWithPhoto/AdWithPhoto";
import ButtonArrow from "../../components/Button/ButtonArrow";
import StepList from "../../components/StepList/StepList";
import BrandingAds from "../../components/Branding/BrandingAds";
import AnimatedAdSection from "../../components/AnimatedWrapper/AnimatedAdSection";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import Questions from "../../components/Questions/Questions";
import AskQuesTestimonial from "../../components/AskQuesTestimonial/AskQuesTestimonial";
import ContactInfoSection from "../../components/ContactInfo/ContactInfoSection";

import {
  steps,
  rotatingTexts,
  testimonialCards,
  adWithPhotoData,
  testimonialHighlightCardData,
  stepListTestimonial,
  brandingAdsData,
  imageMarqueeData1,
  statCardsData,
  imageMarqueeData2,
  questionsData,
} from "../../utils/homeDummyData";

const Home = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <RotatingText
              texts={rotatingTexts}
              // firstColor="text-[#2CA9E1]"
              // secondGradient="bg-gradient-to-r from-[#A566FF] to-[#CE9FFC] bg-clip-text text-transparent"
              fontSize="text-[41px] sm:text-4xl md:text-6xl lg:text-7xl"
              fontWeight="font-bold"
              lineHeight="leading-tight"
              interval={2000}
            />
          </div>
          <div className="flex flex-col gap-10 justify-end py-4 sm:py-5 ">
            <div className=" text-lg sm:text-xl md:text-xl">
              <p>We deliver globally UI, UX & web design</p>
              <p>smoothly, without delay, saving your time</p>
              <p>and money with an efficient process.</p>
            </div>
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <AvatarFounders />
              <ReviewBadge
                stars={5}
                reviewCount={6}
                platform="Clutch"
                reviewedText="REVIEWED ON"
                customStyles="max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]"
              />
            </div>
          </div>
        </div>
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 flex flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center">
          {/* Book a strategy call — shown only on tablet and up */}
          <div className="hidden sm:block">
            <ButtonArrow
              label="Book a strategy call"
              arrow={true}
              height="h-15 xs:h-14"
              textColor="text-white"
              bgColor="bg-black"
              hoverBgColor="hover:bg-[#433BFF]"
            />
          </div>

          {/* Get a custom quote — shown only on tablet and up */}
          <div className="hidden sm:block">
            <ButtonArrow
              label="Get a custom quote"
              arrow={false}
              height="h-15 xs:h-14"
              textColor="text-black"
              bgColor="bg-white"
              hoverTextColor="hover:text-black"
              hoverBgColor="hover:bg-yellow-200"
              borderColor="border border-black"
            />
          </div>

          {/* Contact us — shown only on mobile */}
          <div className="block sm:hidden">
            <ButtonArrow arrow={true} label="Contact us" />
          </div>
        </div>

        <div className="py-6">
          <LogoMarquee
            scrollspeed={25}
            backgroundColor="#f5f5f5"
            padding="1rem sm:1.5rem"
          />
        </div>
        <BgVideo cursorText="Play" bgColor="#fffc1a" color="black" />
      </section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-20 text-left">
        <ScrollColorShiftText
          text="500+ Founders trusted us. Get return  on"
          fromColor="#29242469"
          toColor="black"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />

        <ScrollColorShiftText
          text="your investment, multiplied!"
          fromColor="#ffffffbf"
          toColor="#29242469"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />
      </div>
      <section>
        <div className="w-full ">
          <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-20 ">
            {testimonialCards.map((card, index) => (
              <TestimonialCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-60 text-center">
          <ScrollColorShiftText
            text="Turn your ideas into impactful"
            fromColor="#29242469"
            toColor="black"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-extrabold"
          />
          <ScrollColorShiftText
            text="solutions like them!"
            fromColor="#ffffffbf"
            toColor="#29242469"
            className="text-left"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-extrabold"
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
          {/* Top 2 Ads Side by Side on Large Screens, Stack on Mobile */}
          <div className="flex flex-col lg:flex-row ">
            <AdWithPhoto {...adWithPhotoData[0]} />
            <AdWithPhoto {...adWithPhotoData[1]} />
          </div>

          {/* Testimonial Highlight (centered) */}
          <div className="flex justify-left">
            <TestimonialHighlightCard {...testimonialHighlightCardData} />
          </div>

          <div className="w-full flex justify-end my-30">
            <div className="flex flex-col items-end gap-12 max-w-5xl w-full ">
              <AdWithPhoto {...adWithPhotoData[2]} />
              <TestimonialHighlightCard {...testimonialHighlightCardData} />
            </div>
          </div>

          <div className="w-full flex">
            <div className="flex flex-col lg:flex-row items-end gap-10 w-full">
              <AdWithPhoto {...adWithPhotoData[3]} />
              <TestimonialHighlightCard {...testimonialHighlightCardData} />
            </div>
          </div>

          <div className="w-full flex justify-end my-30 ">
            <AdWithPhoto {...adWithPhotoData[4]} />
          </div>
        </div>
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

          {/* Bottom Heading */}
          <div className="mt-40">
            <div className="flex flex-col lg:items-start text-center lg:text-left">
              <ScrollColorShiftText
                text="From startup to , grow your business"
                fromColor="#dadada "
                toColor="#ffffff"
                className="text-left"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-extrabold"
              />
              <ScrollColorShiftText
                text="with fast and creative designs!"
                fromColor="#e5e5e5 "
                toColor="#d1d1d1 "
                className="text-left"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-extrabold"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        {brandingAdsData.map((ad, index) => (
          <AnimatedAdSection zIndex={index} key={index}>
            <BrandingAds {...ad} />
          </AnimatedAdSection>
        ))}
      </div>
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
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 py-10">
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
      </section>
      <section>
        <ImageMarquee
          scrollSpeed={100}
          width="w-[250px]"
          height="h-[350px]"
          gap="mx-1"
          images={imageMarqueeData2}
        />
      </section>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6">
          Frequently asked{" "}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          questions
        </p>

        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="flex-1 space-y-3">
            {questionsData.map((question, index) => (
              <Questions key={index} question={question} />
            ))}
          </div>

          <div className="w-full lg:max-w-sm">
            <AskQuesTestimonial />
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 py-10">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-tight">
          Got a project in mind? <br className="hidden lg:block" /> Let’s talk.
        </h2>
        <div>
          <ButtonArrow
            height="h-14"
            width="w-40"
            arrow={true}
            label="Book a call"
          />
        </div>
      </section>
      <ContactInfoSection />
    </>
  );
};

export default Home;
