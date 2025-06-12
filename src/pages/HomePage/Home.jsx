import BookCallButton from "../../components/Button/BookCallButton";
import LogoMarquee from "../../components/TrustedBy/LogoMarqee";
import RotatingText from "../../components/RotatingText/RotatingText";
import ReviewBadge from "../../components/ReviewBadge/ReviewBadge";
import AvatarFounders from "../../components/AvatarFounders/AvatarFounders";
import BgVideo from "../../components/bgVideo/BgVideo";
import ScrollColorShiftText from "../../components/ScrollColorShiftText/ScrollColorShiftText";
import TestimonialCard from "../../components/TestiMonialCard/TestiMonialCard.Jsx";
import TestimonialImg3 from "../../components/TestiMonialCard/TestiMonialAssets/6795bfcf60dbd390d6edee04_1ef034f4c36b38ceee42be8e99eee2b8_review image (1)-p-500.webp";
import TestimonialImg1 from "../../components/TestiMonialCard/TestiMonialAssets/67877f9495e27059b10a6422_96f7f37762eb6a222ca8aafae632defd_review image-1-p-500.webp";
import TestimonialImg2 from "../../components/TestiMonialCard/TestiMonialAssets/67877f9495e27059b10a6430_b60b4273447225993e1fe6f4b9fb8c20_review image-p-800.webp";
import TestimonialHighlightCard from "../../components/TestimonialHighlightCard/TestimonialHighlightCard";
import AdWithPhoto from "../../components/AdWithPhoto/AdWithPhoto";
import adImg1 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad1.webp";
import adImg2 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad2.webp";
import adImg3 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad3.webp";
import adImg4 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad4.webp";
import adImg5 from "../../components/AdWithPhoto/AdWithPhotoAssets/ad5.webp";
import ButtonArrow from "../../components/Button/ButtonArrow";
import StepList from "../../components/StepList/StepList";
import BrandingAds from "../../components/Branding/BrandingAds";
import brandingImg1 from "../../components/Branding/BrandingAdsAssets/ad1.webp";
import brandingImg2 from "../../components/Branding/BrandingAdsAssets/ad2.webp";
import brandingImg3 from "../../components/Branding/BrandingAdsAssets/ad3.webp";
import brandingImg4 from "../../components/Branding/BrandingAdsAssets/ad4.webp";
import brandingImg5 from "../../components/Branding/BrandingAdsAssets/ad5.webp";
import AnimatedAdSection from "../../components/AnimatedWrapper/AnimatedAdSection";
import ScrollRevealLines from "../../components/ScrollColorShiftText/ScrollRevealLines";
import StatCard from "../../components/StatusCard/StatCard";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import logo1 from "../../components/TrustedBy/companyAssets/logo1.webp";
import logo2 from "../../components/TrustedBy/companyAssets/logo2.webp";
import logo3 from "../../components/TrustedBy/companyAssets/logo3.webp";
import s1 from "../../components/TrustedBy/companyAssets/s1.webp";
import s2 from "../../components/TrustedBy/companyAssets/s2.webp";
import s3 from "../../components/TrustedBy/companyAssets/s3.webp";
// import s4 from "../../components/TrustedBy/companyAssets/s4.webp";
import ImageMarquee from "../../components/TrustedBy/ImageMarquee";
import Questions from "../../components/Questions/Questions";
import AskQuesTestimonial from "../../components/AskQuesTestimonial/AskQuesTestimonial";
import ContactInfoSection from "../../components/ContactInfo/ContactInfoSection";
import ContactForm from "../../Form/ContactForm";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const steps = [
    "Onboard in <1 day",
    "Understand Scope & Strategy",
    "First designs in 4–5 days",
  ];

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <RotatingText
              texts={[
                { first: "AI/ML", second: "solutions." },
                { first: "SaaS", second: "companies." },
                { first: "future", second: "unicorns." },
                { first: "", second: "startups." },
              ]}
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
      </div>
      <BgVideo cursorText="Play" bgColor="#fffc1a" color="black" />
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
      <div className="w-full ">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-20 ">
          <TestimonialCard
            image={TestimonialImg1}
            name="Matt Kabus"
            position="CEO & Founder"
            company="LifeTales"
            testimonial="Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended"
            imageHeight="400px"
            imageWidth="100%"
          />

          <TestimonialCard
            image={TestimonialImg2}
            name="Ishraq Khan"
            position="CEO"
            company="Kodezi"
            testimonial="Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive. An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!"
            imageHeight="470px"
            imageWidth="450px"
          />

          <TestimonialCard
            image={TestimonialImg3}
            name="Nikita Ribakovs"
            position="Founder & CEO"
            company="Tournated"
            testimonial="Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication"
            imageHeight="400px"
            imageWidth="100%"
          />
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
          <AdWithPhoto
            src={adImg1}
            txt1="Behind the UI - How We Rebuilt Kodezi's Product Experience"
            txt2="Startup:/kodezi"
            cursorText="See More"
            bgColor="#fffc1a"
            color="black"
          />
          <AdWithPhoto
            cursorText="See More"
            bgColor="#fffc1a"
            color="black"
            src={adImg2}
            txt1="Designing a financial management for a secure transaction"
            txt2="Startup:/Quicky"
          />
        </div>

        {/* Testimonial Highlight (centered) */}
        <div className="flex justify-left">
          <TestimonialHighlightCard
            testimonial="We had the pleasure of working with Wavespace for our prototype, and he has been exceptional from start to finish. His creativity brought our ideas to life in ways we hadn't even imagined."
            image={TestimonialImg1}
            name="Michael Amar"
            position="Uni AI Travel, Marketing | UX Design"
          />
        </div>

        <div className="w-full flex justify-end my-30">
          <div className="flex flex-col items-end gap-12 max-w-5xl w-full ">
            <AdWithPhoto
              cursorText="See More"
              bgColor="#fffc1a"
              color="black"
              src={adImg3}
              txt1="Spacebooks - Smart Accounting & Financial for Businesses"
              txt2="SaaS Platform : /tournated"
              imageHeight="100%" // adjust if needed, e.g., "500px"
              imageWidth="100%" // make image fully use container width
            />
            <TestimonialHighlightCard
              testimonial="We had the pleasure of working with Wavespace for our prototype, and he has been exceptional from start to finish. His creativity brought our ideas to life in ways we hadn't even imagined."
              image={TestimonialImg1}
              name="Michael Amar"
              position="Uni AI Travel, Marketing | UX Design"
            />
          </div>
        </div>

        <div className="w-full flex">
          <div className="flex flex-col lg:flex-row items-end gap-10 w-full">
            <AdWithPhoto
              cursorText="See More"
              bgColor="#fffc1a"
              color="black"
              src={adImg4}
              txt1="E-commerce website & mobile app design for luxury fashion brand. (coming soon)"
              txt2="E-Commerce Platform : /off-white"
              imageHeight="100%"
              imageWidth="100%"
            />

            <TestimonialHighlightCard
              testimonial="We had the pleasure of working with Wavespace for our prototype, and he has been exceptional from start to finish. His creativity brought our ideas to life in ways we hadn't even imagined."
              image={TestimonialImg1}
              name="Michael Amar"
              position="Uni AI Travel, Marketing | UX Design"
            />
          </div>
        </div>

        <div className="w-full flex justify-end my-30 ">
          <AdWithPhoto
            cursorText="See More"
            bgColor="#fffc1a"
            color="black"
            src={adImg5}
            txt1="Designing a financial management for a secure transaction"
            txt2="Startup:/Quicky"
            imageHeight="100%"
            imageWidth="100%"
          />
        </div>
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
              <StepList steps={steps} />
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

          {/* Bottom Heading */}
          <div className="mt-40">
            <div className="flex flex-col lg:items-start text-center lg:text-left">
              <ScrollColorShiftText
                text="From startup to , grow your business
"
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
      </div>
      <div className="relative">
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
            bgColor="bg-black"
            textColor="text-white"
            heading="Webflow"
            description="Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly."
            bulletPoints="Webflow Development, Responsive Design, CMS, Animation, SEO Setup"
            imageSrc={brandingImg5}
          />
        </AnimatedAdSection>
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 py-10">
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
        scrollSpeed={100}
        width="w-[250px]"
        height="h-[350px]"
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
            <Questions question="Do you work with startups or only with B2B/enterprise companies?" />
            <Questions question="How do you ensure the quality of your design work?" />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
            <Questions />
          </div>

          <div className="w-full lg:max-w-sm">
            <AskQuesTestimonial />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col  md:flex-row items-start lg:items-center justify-between gap-6 md:gap-0 py-10">
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
      </div>

      <ContactInfoSection />

 

      {/* <Footer /> */}
    </>
  );
};

export default Home;
