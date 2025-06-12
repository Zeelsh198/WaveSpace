import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import benefitsVideo1 from "../components/BenefitsCard/BenefitsCardAssets/bAd1.mp4";
import benefitsVideo2 from "../components/BenefitsCard/BenefitsCardAssets/bAd2.mp4";
import benefitsVideo3 from "../components/BenefitsCard/BenefitsCardAssets/bAd3.mp4";
import benefitsVideo4 from "../components/BenefitsCard/BenefitsCardAssets/bAd4.mp4";
import benefitsVideo5 from "../components/BenefitsCard/BenefitsCardAssets/bAd5.mp4";
import benefitImage1 from "../components/BenefitsCard/BenefitsCardAssets/benefitImage1.webp";
import benefitImage2 from "../components/TestimonialHighlightCard/TestimonialHighlightCardAssets/679b3952bb097c70167c5b01_452500e36ed7da4a9f80de5e410345cf_image-2 (2).webp";
import t1 from "../components/TrustedBy/companyAssets/t1.webp";
import t2 from "../components/TrustedBy/companyAssets/t2.webp";
import t3 from "../components/TrustedBy/companyAssets/t3.webp";
import t4 from "../components/TrustedBy/companyAssets/t4.webp";
import t5 from "../components/TrustedBy/companyAssets/t5.webp";
import t6 from "../components/TrustedBy/companyAssets/t6.webp";
import t7 from "../components/TrustedBy/companyAssets/t7.webp";

export const pricingPlans = [
  { label: "Monthly" },
  { label: "Quarterly", badge: "-10%" },
  { label: "Yearly", badge: "2 Months free", highlighted: true },
];

export const currencies = [
  { label: "USD", icon: <AttachMoneyIcon fontSize="30px"/>, active: true },
  { label: "Euro", icon: <EuroIcon/>, active: false },
];

export const pricingCards = [
  {
    label1: "Get start today",
    label2: "Book a call",
    bgColor: "bg-white",
    title: "Standard",
    price: "$22,000/yearly",
    subText: "Billed annually — cancel anytime",
    cta: { text: "Get start today", variant: "outline" },
    showBookCall: true,
    features: [
      "✅ 40 hours of per month",
      "✅ Dedicated design team",
      '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
      "✅ 2 meetings per month",
      "✅ Daily communication Slack + Loom",
      "✅ Weekly updates and monthly ",
    ],
    bottomNote: "2 Spots left this year",
    bottomNoteHighlight: "2 Spots",
  },
  {
    border: "border",
    badge: "Popular",
    label1: "Get start today",
    label2: "Book a call",
    bgColor: "bg-[#d9fd51]",
    title: "Standard",
    price: "$22,000/yearly",
    subText: "Billed annually — cancel anytime",
    cta: { text: "Get start today", variant: "outline" },
    showBookCall: true,
    features: [
      "✅ 40 hours of per month",
      "✅ Dedicated design team",
      '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
      "✅ 2 meetings per month",
      "✅ Daily communication Slack + Loom",
      "✅ Weekly updates and monthly ",
    ],
    bottomNote: "2 Spots left this year",
    bottomNoteHighlight: "2 Spots",
  },
  {
    badge: "Unlimited talent",
    label1: "Contact us",
    label2: "",
    bgColor: "bg-white",
    title: "Standard",
    price: "$22,000/yearly",
    subText: "Billed annually — cancel anytime",
    cta: { text: "Get start today", variant: "outline" },
    showBookCall: true,
    features: [
      "✅ 40 hours of per month",
      "✅ Dedicated design team",
      '✅ All design services included <a href="#" class="underline text-[#d9fd51]">view all</a>',
      "✅ 2 meetings per month",
      "✅ Daily communication Slack + Loom",
      "✅ Weekly updates and monthly ",
    ],
    bottomNote: "2 Spots left this year",
    bottomNoteHighlight: "2 Spots",
  },
];

export const includedInAllPackages = [
    "Hours rollover",
    "Unlimited requests",
    "Same-day response time",
    "DVLFSHub",
    "1 Active request per team member",
]

export const benefitsCards = [
    {
        title: "Flat monthly fee",
        description: "Our pricing remains same each month — no guesswork, no surprises.",
        mediaType: "video",
        mediaUrl: benefitsVideo1,
        className: "w-full md:w-full lg:w-[25%] flex-col text-start",
        titleDescriptionclasses: "flex flex-col",
    },
    {
        title: "Flat monthly fee",
        description: "Our pricing remains same each month — no guesswork, no surprises.",
        mediaType: "video",
        mediaUrl: benefitsVideo2,
        className: "w-full md:w-full lg:w-[47.5%] flex-col lg:flex-row-reverse p-4 lg:p-15 gap-5 lg:gap-10",
        titleDescriptionclasses: "text-start",
    },
    {
        title: "Flat monthly fee",
        description: "Our pricing remains same each month — no guesswork, no surprises.",
        mediaType: "video",
        mediaUrl: benefitsVideo3,
        className: "w-full md:w-full lg:w-[25%] flex-col text-start",
        titleDescriptionclasses: "flex flex-col",
    },
    {
        title: "Flat monthly fee",
        description: "Our pricing remains same each month — no guesswork, no surprises.",
        mediaType: "video",
        mediaUrl: benefitsVideo4,
        className: "w-full md:w-full lg:w-[49%] flex-col lg:flex-row-reverse p-4 lg:p-15 gap-5 lg:gap-10",
        titleDescriptionclasses: "text-start",
    },
    {
        title: "Flat monthly fee",
        description: "Our pricing remains same each month — no guesswork, no surprises.",
        mediaType: "video",
        mediaUrl: benefitsVideo5,
        className: "w-full md:w-full lg:w-[49.5%] flex-col lg:flex-row p-4 lg:p-15 gap-5 lg:gap-10",
        titleDescriptionclasses: "text-start",
    }
]

export const testimonialData = {
    image: benefitImage1,
    text: '"Transforming visions into top-notch digital experiences solutions"',
    name: "Ishraq Khan",
    position: "Founder & CEO @Kodezi",
    testimonialImage: benefitImage2,
}

export const imageMarqueeData3 = [t1, t2, t3, t4, t5, t6, t7];

export const pricingQuestions = [
    "What are your focus areas as a UI/UX design agency?",
    "Why is UI/UX design important for your business growth?",
    "How do you ensure the quality of your design work?",
    "What is your design process like?",
    "How could you help us redesign our app, website, or enterprise/B2B software?",
]