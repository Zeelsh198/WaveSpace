import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import aboutUs from "./AboutUsAssets/aboutus.webp";
import logo1 from "../../components/TrustedBy/companyAssets/logo1.webp";
import logo2 from "../../components/TrustedBy/companyAssets/logo2.webp";
import logo3 from "../../components/TrustedBy/companyAssets/logo3.webp";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import ButtonArrow from "../../components/Button/ButtonArrow";
import s1 from "../../components/TrustedBy/companyAssets/s1.webp";
import s2 from "../../components/TrustedBy/companyAssets/s2.webp";
import s3 from "../../components/TrustedBy/companyAssets/s3.webp";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import StatCard from "../../components/StatusCard/StatCard";
import ContactForm from "../../Form/ContactForm";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ContentImageBlock from "../../components/ContentImageBlock/ContentImageBlock";
import teamImage1 from "../../components/ContentImageBlock/ContentImageBlockAssets/teamImage1.webp";
import teamImage2 from "../../components/ContentImageBlock/ContentImageBlockAssets/teamImage2.webp";
import teamImage3 from "../../components/ContentImageBlock/ContentImageBlockAssets/teamImage3.webp";
import AnimatedAdSection from "../../components/AnimatedWrapper/AnimatedAdSection";
import TeamScroller from "../../components/TeamScroller/TeamScroller";
import HaveAProject from "../../components/HaveAProject/HaveAProject";

const AboutUs = () => {
  return (
    <>
      {/* Header Section */}

      <section className="w-full">
        {/* Header Section */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-20">
          <TextBox
            text="We create design for businesses with our"
            classes="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] leading-[1.2] font-bold"
          />
          <TextBox
            text="elevated digital experiences"
            classes="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] leading-[1.2] font-bold"
          />
        </div>

        {/* Background split with image in the middle */}
        <div className="relative w-full">
          {/* White top section */}

          <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[420px] bg-white" />

          {/* Gray bottom section */}
          <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[420px] bg-gray-200" />

          {/* Image - centered vertically between the white and gray */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[700px] lg:w-[90%] xl:w-[1350px] z-10">
            <img
              src={aboutUs}
              alt="About Us"
              className="w-full h-auto object-contain "
            />
          </div>
        </div>

        {/* Text Content Below */}
        <div className="bg-gray-200 pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 lg:pb-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10 lg:mb-12 ">
              <TextBox
                text="Our secret sauce ensures scalability and attracts talented, creative people who aspire to achieve incredible things together—while having some fun along the way."
                classes="text-2xl md:text-3xl lg:text-5xl font-light leading-snug text-black max-w-full sm:max-w-5xl lg:max-w-4xl"
              />
            </div>
            <div>
              <TextBox
                text="We're a global multi-specialty design experts of strategists, designers, and engineers building unicorn brands and creating people-friendly experiences."
                classes="text-2xl md:text-3xl lg:text-5xl font-light leading-snug text-black max-w-full sm:max-w-5xl lg:max-w-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 py-20">
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
      <ImageMarquee
        scrollSpeed={300}
        width="w-[300px] pb-20"
        height="h-[450px]"
        gap="mx-1"
        images={[
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
          logo3,
          logo1,
          logo2,
        ]}
      />
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
            images={[
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
              s2,
              s3,
              s1,
            ]}
            height=" sm:h-[200px] md:h-[300px]"
            width=" sm:w-[200px] md:w-[300px]"
            gap="mx-0"
          />
        </div>

        {/* StatCards visible on laptop and above only (hidden on sm & md) */}
        <div className="hidden lg:flex max-w-7xl mx-auto flex-wrap justify-center">
          <StatCard index={1} line1="500+ Happy" line2="clients" />
          <StatCard index={2} line1="10+ Design" line2="awards" />
          <StatCard index={3} line1="$600 M+" line2="funding" />
          <StatCard index={4} line1="x5 Growth of" line2="brand" />
        </div>
      </div>
      <div className="relative">
        {/* Sticky Title */}
        <div className="bg-[#1b1b1b] sticky top-0 z-[10]">
          <TextBox
            text={"Why wavespace"}
            classes="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-3xl md:text-6xl text-white pt-20 "
          />
        </div>

        {/* Animated Sections */}
        <div className="bg-[#1b1b1b] relative py-30">
          <AnimatedAdSection top="top-60" zIndex={0}>
            <ContentImageBlock
              number="1"
              title="Founded by designer"
              paragraphs={[
                "We value open communication and transparency, keeping you involved from start to finish. Our clear communication fosters trust and alignment, enriching collaboration.",
                "Our experience with both startups and enterprises lets us adapt to your needs, ensuring a smooth and successful design process.",
              ]}
              imageSrc={teamImage1}
            />
          </AnimatedAdSection>
          <AnimatedAdSection top="top-60" zIndex={1}>
            <ContentImageBlock
              number="2"
              title="Collaboration Is Key"
              paragraphs={[
                "We value open communication and transparency, keeping you involved from start to finish. Our clear communication fosters trust and alignment, enriching collaboration.",
                "Our experience with both startups and enterprises lets us adapt to your needs, ensuring a smooth and successful design process.",
              ]}
              imageSrc={teamImage2}
            />
          </AnimatedAdSection>
          <AnimatedAdSection top="top-60" zIndex={2}>
            <ContentImageBlock
              number="3"
              title="Full freedom & responsibility"
              paragraphs={[
                "We value open communication and transparency, keeping you involved from start to finish. Our clear communication fosters trust and alignment, enriching collaboration.",
                "Our experience with both startups and enterprises lets us adapt to your needs, ensuring a smooth and successful design process.",
              ]}
              imageSrc={teamImage3}
            />
          </AnimatedAdSection>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-30 pb-10 text-center">
        <ScrollColorShiftText
          text="Make some noise for our talented"
          fromColor="#29242469"
          toColor="black"
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />
        <ScrollColorShiftText
          text="coders, and strategists!"
          fromColor="#ffffffbf"
          toColor="#29242469 "
          className="text-left"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          fontWeight="font-extrabold"
        />
      </div>

      <TeamScroller
        teamMembers={[
          { image: logo1, name: "Shahid Miah", role: "Founder & CEO" },
          { image: logo2, name: "Alina Roy", role: "Creative Director" },
          { image: logo3, name: "Jared Lee", role: "Design Lead" },
          { image: logo1, name: "Nina Patel", role: "Product Strategist" },
          { image: logo2, name: "Marco Lin", role: "UX Researcher" },
          { image: logo3, name: "Shahid Miah", role: "Founder & CEO" },
          { image: logo1, name: "Alina Roy", role: "Creative Director" },
          { image: logo2, name: "Jared Lee", role: "Design Lead" },
          { image: logo3, name: "Nina Patel", role: "Product Strategist" },
          { image: logo1, name: "Marco Lin", role: "UX Researcher" },
        ]}
      />

      <div className="bg-gray-200 pt-30">
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



    </>
  );
};

export default AboutUs;
