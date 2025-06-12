import PricingToggleGroup from "../../components/PricingToggleGroup/PricingToggleGroup";
import RatingBadge from "../../components/RatingBadge/RatingBadge";
import TextBox from "../../components/TextBox/TextBox";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ContactForm from "../../Form/ContactForm";
import AskQuesTestimonial from "../../components/AskQuesTestimonial/AskQuesTestimonial";
import Questions from "../../components/Questions/Questions";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import s1 from "../../components/TrustedBy/companyAssets/s1.webp";
import s2 from "../../components/TrustedBy/companyAssets/s2.webp";
import s3 from "../../components/TrustedBy/companyAssets/s3.webp";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import AnimatedAdSection from "../../components/AnimatedWrapper/AnimatedAdSection";
import BrandingAds from "../../components/Branding/BrandingAds";
import brandingImg1 from "../../components/Branding/BrandingAdsAssets/ad1.webp";
import brandingImg2 from "../../components/Branding/BrandingAdsAssets/ad2.webp";
import brandingImg3 from "../../components/Branding/BrandingAdsAssets/ad3.webp";
import brandingImg4 from "../../components/Branding/BrandingAdsAssets/ad4.webp";
import brandingImg5 from "../../components/Branding/BrandingAdsAssets/ad5.webp";
import PricingCard from "../../components/PricingCard/PricingCard";
import DoneWithText from "../../components/DoneWithText/DoneWithText";
import ButtonArrow from "../../components/Button/ButtonArrow";
import BenefitsCard from "../../components/BenefitsCard/BenefitsCard";
import benefitsVideo1 from "../../components/BenefitsCard/BenefitsCardAssets/bAd1.mp4";
import benefitsVideo2 from "../../components/BenefitsCard/BenefitsCardAssets/bAd2.mp4";
import benefitsVideo3 from "../../components/BenefitsCard/BenefitsCardAssets/bAd3.mp4";
import benefitsVideo4 from "../../components/BenefitsCard/BenefitsCardAssets/bAd4.mp4";
import benefitsVideo5 from "../../components/BenefitsCard/BenefitsCardAssets/bAd5.mp4";
import benefitImage1 from "../../components/BenefitsCard/BenefitsCardAssets/benefitImage1.webp";
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import benefitImage2 from "../../components/TestimonialHighlightCard/TestimonialHighlightCardAssets/679b3952bb097c70167c5b01_452500e36ed7da4a9f80de5e410345cf_image-2 (2).webp";
import t1 from "../../components/TrustedBy/companyAssets/t1.webp";
import t2 from "../../components/TrustedBy/companyAssets/t2.webp";
import t3 from "../../components/TrustedBy/companyAssets/t3.webp";
import t4 from "../../components/TrustedBy/companyAssets/t4.webp";
import t5 from "../../components/TrustedBy/companyAssets/t5.webp";
import t6 from "../../components/TrustedBy/companyAssets/t6.webp";
import t7 from "../../components/TrustedBy/companyAssets/t7.webp";
import HoverPreviewList from "../../components/HoverPreviewList/HoverPreviewList";
import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import adImg12 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad12.webp";
import adImg13 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad13.webp";

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
          <PricingToggleGroup
            plans={[
              { label: "Monthly" },
              { label: "Quarterly", badge: "-10%" },
              { label: "Yearly", badge: "2 Months free", highlighted: true },
            ]}
            currencies={[
              { label: "USD", icon: <AttachMoneyIcon fontSize="30px"/>, active: true },
              { label: "Euro", icon: <EuroIcon/>, active: false },
            ]}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <PricingCard
              label1="Get start today"
              label2="Book a call"
              bgColor="bg-white"
              title="Standard"
              price="$22,000/yearly"
              subText="Billed annually — cancel anytime"
              cta={{ text: "Get start today", variant: "outline" }}
              showBookCall={true}
              features={[
                "✅ 40 hours of per month",
                "✅ Dedicated design team",
                '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
                "✅ 2 meetings per month",
                "✅ Daily communication Slack + Loom",
                "✅ Weekly updates and monthly ",
              ]}
              bottomNote="2 Spots left this year"
              bottomNoteHighlight="2 Spots"
            />

            <PricingCard
              border="border"
              badge="Popular"
              label1="Get start today"
              label2="Book a call"
              bgColor="bg-[#d9fd51]"
              title="Standard"
              price="$22,000/yearly"
              subText="Billed annually — cancel anytime"
              cta={{ text: "Get start today", variant: "outline" }}
              showBookCall={true}
              features={[
                "✅ 40 hours of per month",
                "✅ Dedicated design team",
                '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
                "✅ 2 meetings per month",
                "✅ Daily communication Slack + Loom",
                "✅ Weekly updates and monthly ",
              ]}
              bottomNote="2 Spots left this year"
              bottomNoteHighlight="2 Spots"
            />

            <PricingCard
              badge="Unlimited talent"
              label1="Contact us"
              label2=""
              bgColor="bg-white"
              title="Standard"
              price="$22,000/yearly"
              subText="Billed annually — cancel anytime"
              cta={{ text: "Get start today", variant: "outline" }}
              showBookCall={true}
              features={[
                "✅ 40 hours of per month",
                "✅ Dedicated design team",
                '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
                "✅ 2 meetings per month",
                "✅ Daily communication Slack + Loom",
                "✅ Weekly updates and monthly ",
              ]}
              bottomNote="2 Spots left this year"
              bottomNoteHighlight="2 Spots"
            />
          </div>
          <div className="bg-[#242424] w-full text-white flex flex-col items-start max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 p-5 py-10 rounded-xl gap-5">
            <TextBox
              text={"Included in all package"}
              classes="text-2xl font-semibold"
            />

            {/* ✅ Responsive wrap */}
            <div className="flex flex-wrap gap-3">
              <DoneWithText
                classes="rounded-full border border-gray-500 py-2 px-3"
                text={`Hours rollover`}
              />
              <DoneWithText
                classes="rounded-full border border-gray-500 py-2 px-3"
                text={`Unlimited requests`}
              />
              <DoneWithText
                classes="rounded-full border border-gray-500 py-2 px-3"
                text={`Same-day response time`}
              />
              <DoneWithText
                classes="rounded-full border border-gray-500 py-2 px-3"
                text={`DVLFSHub`}
              />
              <DoneWithText
                classes="rounded-full border border-gray-500 py-2 px-3"
                text={`1 Active request per team member`}
              />
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
        <AnimatedAdSection zIndex={0}>
          <BrandingAds
            bgColor="bg-[#3c26f0]"
            textColor="text-white"
            heading="Branding Identity"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="Visual Identity Design,Brand Experience,Brand Audits,Rebranding,Brand Guidelines,Brand Strategy,Brand Collaterals"
            imageSrc={brandingImg1}
          />
        </AnimatedAdSection>

        <AnimatedAdSection zIndex={1}>
          <BrandingAds
            bgColor="bg-white"
            textColor="text-black"
            heading="UI UX Design"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="User Research,Wireframe & Prototyping,UX Design,Mobile App,Web App Design,Interaction Design,Design System"
            imageSrc={brandingImg2}
          />
        </AnimatedAdSection>

        <AnimatedAdSection zIndex={2}>
          <BrandingAds
            bgColor="bg-[#ebfe5b]"
            textColor="text-black"
            heading="Web Design"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="Visual Identity Design,Brand Experience,Brand Audits,Rebranding,Brand Guidelines,Brand Strategy,Brand Collaterals"
            imageSrc={brandingImg3}
          />
        </AnimatedAdSection>

        <AnimatedAdSection zIndex={3}>
          <BrandingAds
            bgColor="bg-[#ff531a]"
            textColor="text-white"
            heading="Build Product (MVP)"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="Strategy, Design, Development, Testing, Launch, Feedback Integration"
            imageSrc={brandingImg4}
          />
        </AnimatedAdSection>

        <AnimatedAdSection zIndex={4}>
          <BrandingAds
            bgColor="bg-[#101010]"
            textColor="text-white"
            heading="Webflow"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="Webflow Development, Responsive Design, CMS, Animation, SEO Setup"
            imageSrc={brandingImg5}
          />
        </AnimatedAdSection>
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
          <BenefitsCard
            title={"Flat monthly fee"}
            description={`Our pricing remains same each month — no guesswork, no surprises.`}
            mediaType="video"
            mediaUrl={benefitsVideo1}
            className="w-full md:w-full lg:w-[25%] flex-col text-start"
            titleDescriptionclasses="flex flex-col"
          />
          <BenefitsCard
            title={"Flat monthly fee"}
            description={`Our pricing remains same each month — no guesswork, no surprises.`}
            mediaType="video"
            mediaUrl={benefitsVideo2}
            className="w-full md:w-full lg:w-[47.5%] flex-col lg:flex-row-reverse p-4 lg:p-15 gap-5 lg:gap-10"
            titleDescriptionclasses="text-start"
          />
          <BenefitsCard
            title={"Flat monthly fee"}
            description={`Our pricing remains same each month — no guesswork, no surprises.`}
            mediaType="video"
            mediaUrl={benefitsVideo3}
            className="w-full md:w-full lg:w-[25%] flex-col text-start"
            titleDescriptionclasses="flex flex-col"
          />
        </div>

        {/* Bottom Benefit Row */}
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-4 px-4 sm:px-6 lg:px-8">
          <BenefitsCard
            title={"Flat monthly fee"}
            description={`Our pricing remains same each month — no guesswork, no surprises.`}
            mediaType="video"
            mediaUrl={benefitsVideo4}
            className="w-full md:w-full lg:w-[49%] flex-col lg:flex-row-reverse p-4 lg:p-15 gap-5 lg:gap-10"
            titleDescriptionclasses="text-start"
          />
          <BenefitsCard
            title={"Flat monthly fee"}
            description={`Our pricing remains same each month — no guesswork, no surprises.`}
            mediaType="video"
            mediaUrl={benefitsVideo5}
            className="w-full md:w-full lg:w-[49.5%] flex-col lg:flex-row p-4 lg:p-15 gap-5 lg:gap-10"
            titleDescriptionclasses="text-start"
          />
        </div>

        {/* Testimonial Section */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-10 p-10 bg-white rounded-xl">
          <img src={benefitImage1} alt="" className="h-16 w-16" />
          <TextBox
            classes="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl text-center"
            text={`"Transforming visions into top-notch digital experiences solutions"`}
          />
          <TestimonialHighlightCard
            name={"Ishraq Khan"}
            position={"Founder & CEO @Kodezi"}
            image={benefitImage2}
          />
        </div>
      </div>
      <div className="py-35">
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={[t1, t2, t3, t4, t5, t6, t7]}
          scrollSpeed={10}
          height="h-80"
          width="w-120"
          direction="left" // or "left"
        />
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={[t1, t2, t3, t4, t5, t6, t7]}
          scrollSpeed={40}
          height="h-80"
          width="w-120"
          direction="right" // or "left"
        />
        <ImageMarquee
          imageClass={"rounded-xl"}
          images={[t1, t2, t3, t4, t5, t6, t7]}
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6">
          Frequently asked{" "}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          questions
        </p>

        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="flex-1 space-y-3">
            <Questions question="What are your focus areas as a UI/UX design agency?" />
            <Questions question="Why is UI/UX design important for your business growth?" />
            <Questions question="How do you ensure the quality of your design work?" />
            <Questions question="What is your design process like?" />
            <Questions question="How could you help us redesign our app, website, or enterprise/B2B software?" />
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
