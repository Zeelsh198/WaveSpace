import PricingToggleGroup from "../../components/PricingToggleGroup/PricingToggleGroup";
import RatingBadge from "../../components/RatingBadge/RatingBadge";
import TextBox from "../../components/TextBox/TextBox";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ContactForm from "../../Form/ContactForm";
import AskQuesTestimonial from "../../components/AskQuesTestimonial/AskQuesTestimonial";
import Questions from "../../components/Questions/Questions";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import AnimatedAdSection from "../../components/AnimatedWrapper/AnimatedAdSection";
import BrandingAds from "../../components/Branding/BrandingAds";
import PricingCard from "../../components/PricingCard/PricingCard";
import DoneWithText from "../../components/DoneWithText/DoneWithText";
import ButtonArrow from "../../components/Button/ButtonArrow";
import BenefitsCard from "../../components/BenefitsCard/BenefitsCard";
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import HoverPreviewList from "../../components/HoverPreviewList/HoverPreviewList";
import {
  pricingPlans,
  currencies,
  pricingCards,
  includedInAllPackages,
  benefitsCards,
  testimonialData,
  imageMarqueeData3,
  pricingQuestions,
} from "../../utils/pricingDummyData";
import { brandingAdsData, imageMarqueeData1, statCardsData } from "../../utils/homeDummyData";
import { hoverPreviewListData } from "../../utils/caseStudiesDummyData";

const Pricing = () => {
  return (
    <>
      <div className="bg-[#101010] flex flex-col items-center justify-center text-center px-4 py-20">
        <RatingBadge text="Clutch" rating={5} borderColor="border-gray-700" />

        <div className="mt-6">
          <TextBox
            text="Your on-demand design team on call,"
            classes="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          />
          <TextBox
            text="for one flat monthly price"
            classes="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          />
        </div>

        <div className="mt-6 space-y-1">
          <TextBox
            text="All-in-one product design plan. No hourly rates, no hidden fees, just fast,"
            classes="text-white text-sm sm:text-base md:text-lg"
          />
          <TextBox
            text="expert work and unlimited requests for one fixed monthly price."
            classes="text-white text-sm sm:text-base md:text-lg"
          />
        </div>

        <div className="w-full px-4 py-10">
          <PricingToggleGroup plans={pricingPlans} currencies={currencies} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {pricingCards.map((card, index) => (
              <PricingCard key={index} {...card} />
            ))}
          </div>
          <div className="bg-[#242424] w-full text-white flex flex-col items-start max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 p-5 py-10 rounded-xl gap-5">
            <TextBox
              text={"Included in all package"}
              classes="text-2xl font-semibold"
            />

            {/* ✅ Responsive wrap */}
            <div className="flex flex-wrap gap-3">
              {includedInAllPackages.map((text, index) => (
                <DoneWithText
                  key={index}
                  classes="rounded-full border border-gray-500 py-2 px-3"
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 font">
        <LogoMarquee
          scrollspeed={25}
          backgroundColor="#f5f5f5"
          padding="1rem sm:1.5rem"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-20 text-center">
        <ScrollColorShiftText
          text="Our comprehensive services for"
          fromColor="#29242469"
          toColor="black"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />
        <ScrollColorShiftText
          text="Global businesses"
          fromColor="#ffffffbf"
          toColor="#29242469"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />
      </div>

      <div className="relative bg-gray-200">
        {brandingAdsData.map((ad, index) => (
          <AnimatedAdSection zIndex={index} key={index}>
            <BrandingAds {...ad} />
          </AnimatedAdSection>
        ))}
      </div>
      <div className="bg-gray-200">
        <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 pt-25 ">
          <div>
            {" "}
            <ScrollColorShiftText
              text="Our membership"
              fromColor="#29242469"
              toColor="black"
              className="text-left"
              fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              fontWeight="font-bold"
            />
            <ScrollColorShiftText
              text="benefits."
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
      </div>
      <div className="bg-gray-200 space-y-10 py-30">
        {/* Top Benefit Row */}
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-4 px-4 sm:px-6 lg:px-8">
          {benefitsCards.slice(0, 3).map((card, index) => (
            <BenefitsCard key={index} {...card} />
          ))}
        </div>

        {/* Bottom Benefit Row */}
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-4 px-4 sm:px-6 lg:px-8">
          {benefitsCards.slice(3, 5).map((card, index) => (
            <BenefitsCard key={index} {...card} />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-10 p-10 bg-white rounded-xl">
          <img src={testimonialData.image} alt="" className="h-16 w-16" />
          <TextBox
            classes="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl text-center"
            text={testimonialData.text}
          />
          <TestimonialHighlightCard
            name={testimonialData.name}
            position={testimonialData.position}
            image={testimonialData.testimonialImage}
          />
        </div>
      </div>
      <div className="py-35">
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={imageMarqueeData3}
          scrollSpeed={10}
          height="h-80"
          width="w-120"
          direction="left" // or "left"
        />
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={imageMarqueeData3}
          scrollSpeed={40}
          height="h-80"
          width="w-120"
          direction="right" // or "left"
        />
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={imageMarqueeData3}
          scrollSpeed={25}
          height="h-80"
          width="w-120"
          direction="left" // or "left"
        />
      </div>
      <div className="bg-gray-200 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 pt-20 ">
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

      <div className="w-full bg-[#5d9ab6] py-20">
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
      </div>

      <div className="bg-gray-200 py-30">
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
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6">
          Frequently asked{" "}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          questions
        </p>

        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="flex-1 space-y-3">
            {pricingQuestions.map((question, index) => (
              <Questions key={index} question={question} />
            ))}
          </div>

          <div className="w-full lg:max-w-sm">
            <AskQuesTestimonial />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Pricing;
