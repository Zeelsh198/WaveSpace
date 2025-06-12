import React from "react";
import RatingBadge from "../../components/RatingBadge/RatingBadge";
import TextBox from "../../components/TextBox/TextBox";
import ButtonArrow from "../../components/Button/ButtonArrow";
import ButtonArrow2 from "../../components/Button/ButtonArrow2";
import servicesHeaderImg from "./ServicesAssets/services header.png";
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import service1 from "../../components/ServiceDetails/ServiceDetailsAssets/s1.webp";
import service2 from "../../components/ServiceDetails/ServiceDetailsAssets/s2.webp";
import service3 from "../../components/ServiceDetails/ServiceDetailsAssets/s3.webp";
import service4 from "../../components/ServiceDetails/ServiceDetailsAssets/s4.webp";
import service5 from "../../components/ServiceDetails/ServiceDetailsAssets/s5.webp";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import HoverCardDetails from "../../components/HoverCardDetails/HoverCardDetails";
import hoverCardDetailsImage1 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h1.webp";
import hoverCardDetailsImage2 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h2.webp";
import hoverCardDetailsImage3 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h3.webp";
import hoverCardDetailsImage4 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h4.webp";
import hoverCardDetailsImage5 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h5.webp";
import hoverCardDetailsImage6 from "../../components/HoverCardDetails/HoverCardDetailsAssets/h6.webp";
import s1 from "../../components/TrustedBy/companyAssets/s1.webp";
import s2 from "../../components/TrustedBy/companyAssets/s2.webp";
import s3 from "../../components/TrustedBy/companyAssets/s3.webp";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import InfoCard from "../../components/InfoCard/InfoCard";
import rocket from "./ServicesAssets/rocket.svg";
import notes from "./ServicesAssets/notes.png";
import monitor from "./ServicesAssets/monitor.png";
import DoneWithText from "../../components/DoneWithText/DoneWithText";

const Services = () => {
  return (
    <>
      <div className="bg-[#0c005b] w-full py-16 sm:py-20 sm:pb-40">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-20">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
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
          </div>

          {/* RIGHT IMAGE - hidden on small screens */}
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
            <img
              src={servicesHeaderImg}
              alt="services"
              className="w-full max-w-[700px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] bg-white mx-auto  px-4 sm:px-6 lg:px-8 gap-10">
        <LogoMarquee
          scrollspeed={25}
          backgroundColor="#f5f5f5"
          padding="1rem sm:1.5rem"
        />
      </div>

      <ServiceDetails
        title={"UI/UX Design"}
        description={
          "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        }
        services={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        image={service1}
      />
      <ServiceDetails
        imageOnLeft={false}
        title={"Web Design"}
        description={
          "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        }
        services={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        image={service2}
      />
      <ServiceDetails
        title={"Mobile App Design"}
        description={
          "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        }
        services={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        image={service3}
      />
      <ServiceDetails
        imageOnLeft={false}
        title={"Branding & Identity"}
        description={
          "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        }
        services={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        image={service4}
      />
      <ServiceDetails
        title={"Design & Development"}
        description={
          "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        }
        services={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        image={service5}
      />
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-end justify-between gap-6 md:gap-0 pt-25 ">
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {/* Row 1 */}
        <div className="lg:self-end">
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage1}
            title="Finance & Fintech"
            description="We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps."
            cardHeight="h-[570px]"
          />
        </div>

        <div>
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage2}
            title="E-Commerce & DTC"
            description="Building powerful online stores and direct-to-consumer platforms that drive sales and engagement."
            cardHeight="h-[570px]" // Tall center
          />
        </div>

        <div className="lg:self-end">
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage3}
            title="SaaS & B2B Platforms"
            description="Developing scalable software solutions that streamline business operations and enhance productivity."
            cardHeight="h-[570px]"
          />
        </div>

        {/* Row 2 */}
        <div>
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage4}
            title="Web3, AI & Emerging Tech"
            description="Revolutionary solutions with AI technology to boost efficiency, improve accuracy, and stay competitive."
            cardHeight="h-[570px]" // Tall left
          />
        </div>

        <div className="lg:self-start">
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage5}
            title="EdTech & HealthTech"
            description="Innovative educational and healthcare technology solutions for better learning and patient outcomes."
            cardHeight="h-[570px]" // Short center
          />
        </div>

        <div>
          <HoverCardDetails
            imageSrc={hoverCardDetailsImage6}
            title="Hospitality & Legal Services"
            description="Digital transformation for hospitality and legal industries with user-friendly interfaces and automation."
            cardHeight="h-[570px]" // Tall right
          />
        </div>
      </div>

      <div className="bg-gray-200 py-15">
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
          <InfoCard
            icon={<img src={rocket} alt="startup" className="w-12 h-12" />}
            title="For startups"
            description="We assist early-stage teams in turning their ideas into MVPs more quickly. Get actual user input, win over investors, and release your app stress-free."
            features={[
              "Launch MVPs fast",
              "Validate with users",
              "Build investor decks",
            ]}
          />

          <InfoCard
            icon={<img src={notes} alt="product" className="w-12 h-12" />}
            title="For Product Teams"
            description="We become a part of your internal process, handling the main tasks for you. Support, design systems, and an easy transition of your project."
            features={[
              "Full-cycle UX/UI",
              "Design systems",
              "Cross-platform support",
            ]}
          />

          <InfoCard
            icon={<img src={monitor} alt="founder" className="w-12 h-12" />}
            title="For Founders"
            description="Design that helps you reach your targets. We care about how things work and how they help, using hard information, not guesswork."
            features={[
              "Growth-focused UX",
              "Landing page design",
              "A/B testing assets",
            ]}
          />
        </div>
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
      <div className="w-full  sm:px-6">
        <div
          className="
      bg-[#0c005b] 
      w-full max-w-[1440px] 
      mx-auto 
      px-4 sm:px-6 md:px-12 lg:px-20 
      py-16 
      rounded-none sm:rounded-[28px] 
      mt-[60px] md:mt-[100px] 
      mb-[80px] md:mb-[120px] 
      text-white 
      font-inter 
      relative 
      overflow-hidden
    "
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
            <DoneWithText
              classes="flex items-center gap-2 rounded-full border border-white border-opacity-20 bg-[#150973] px-4 py-[10px] text-sm font-medium leading-tight"
              text="See how we plan, design and build"
            />
            <DoneWithText
              classes="flex items-center gap-2 rounded-full border border-white border-opacity-20 bg-[#150973] px-4 py-[10px] text-sm font-medium leading-tight"
              text="Get a full view of our UX process, made for you"
            />
            <DoneWithText
              classes="flex items-center gap-2 rounded-full border border-white border-opacity-20 bg-[#150973] px-4 py-[10px] text-sm font-medium leading-tight"
              text="Track how we work, communicate and stay on schedule"
            />
            <DoneWithText
              classes="flex items-center gap-2 rounded-full border border-white border-opacity-20 bg-[#150973] px-4 py-[10px] text-sm font-medium leading-tight"
              text="Know if we’re the right fit before you commit"
            />
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
      </div>
    </>
  );
};

export default Services;
