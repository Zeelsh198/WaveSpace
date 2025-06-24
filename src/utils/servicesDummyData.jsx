import service1 from "../../public/Images/ServiceDetailsAssets/s1.webp";
import service2 from  "../../public/Images/ServiceDetailsAssets/s2.webp";
import service3 from  "../../public/Images/ServiceDetailsAssets/s3.webp";
import service4 from  "../../public/Images/ServiceDetailsAssets/s4.webp";
import service5 from  "../../public/Images/ServiceDetailsAssets/s5.webp";
import hoverCardDetailsImage1 from "../../public/Images/HoverCardDetailsAssets/h1.webp";
import hoverCardDetailsImage2 from "../../public/Images/HoverCardDetailsAssets/h2.webp";
import hoverCardDetailsImage3 from "../../public/Images/HoverCardDetailsAssets/h3.webp";
import hoverCardDetailsImage4 from "../../public/Images/HoverCardDetailsAssets/h4.webp";
import hoverCardDetailsImage5 from "../../public/Images/HoverCardDetailsAssets/h5.webp";
import hoverCardDetailsImage6 from "../../public/Images/HoverCardDetailsAssets/h6.webp";
import rocket from "../pages/Services/ServicesAssets/rocket.svg";
import notes from "../pages/Services/ServicesAssets/notes.png";
import monitor from "../pages/Services/ServicesAssets/monitor.png";

export const serviceDetails = [
    {
        title: "UI/UX Design",
        description:
            "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
        services: [
            "UI UX Design",
            "UX Audit",
            "Design System",
            "UI UX Consulting",
            "UX Research",
            "Usability Testing",
            "Wireframe & UI Prototyping",
        ],
        image: service1,
    },
    {
        imageOnLeft: false,
        title: "Web Design",
        description:
            "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
        services: [
            "UI UX Design",
            "UX Audit",
            "Design System",
            "UI UX Consulting",
            "UX Research",
            "Usability Testing",
            "Wireframe & UI Prototyping",
        ],
        image: service2,
    },
    {
        title: "Mobile App Design",
        description:
            "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
        services: [
            "UI UX Design",
            "UX Audit",
            "Design System",
            "UI UX Consulting",
            "UX Research",
            "Usability Testing",
            "Wireframe & UI Prototyping",
        ],
        image: service3,
    },
    {
        imageOnLeft: false,
        title: "Branding & Identity",
        description:
            "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
        services: [
            "UI UX Design",
            "UX Audit",
            "Design System",
            "UI UX Consulting",
            "UX Research",
            "Usability Testing",
            "Wireframe & UI Prototyping",
        ],
        image: service4,
    },
    {
        title: "Design & Development",
        description:
            "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
        services: [
            "UI UX Design",
            "UX Audit",
            "Design System",
            "UI UX Consulting",
            "UX Research",
            "Usability Testing",
            "Wireframe & UI Prototyping",
        ],
        image: service5,
    },
];

export const hoverCardDetails = [
    {
        imageSrc: hoverCardDetailsImage1,
        title: "Finance & Fintech",
        description:
            "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
        cardHeight: "h-[570px]",
    },
    {
        imageSrc: hoverCardDetailsImage2,
        title: "E-Commerce & DTC",
        description:
            "Building powerful online stores and direct-to-consumer platforms that drive sales and engagement.",
        cardHeight: "h-[570px]", // Tall center
    },
    {
        imageSrc: hoverCardDetailsImage3,
        title: "SaaS & B2B Platforms",
        description:
            "Developing scalable software solutions that streamline business operations and enhance productivity.",
        cardHeight: "h-[570px]",
    },
    {
        imageSrc: hoverCardDetailsImage4,
        title: "Web3, AI & Emerging Tech",
        description:
            "Revolutionary solutions with AI technology to boost efficiency, improve accuracy, and stay competitive.",
        cardHeight: "h-[570px]", // Tall left
    },
    {
        imageSrc: hoverCardDetailsImage5,
        title: "EdTech & HealthTech",
        description:
            "Innovative educational and healthcare technology solutions for better learning and patient outcomes.",
        cardHeight: "h-[570px]", // Short center
    },
    {
        imageSrc: hoverCardDetailsImage6,
        title: "Hospitality & Legal Services",
        description:
            "Digital transformation for hospitality and legal industries with user-friendly interfaces and automation.",
        cardHeight: "h-[570px]", // Tall right
    },
];

export const infoCards = [
    {
        icon: <img src={rocket} alt="startup" className="w-12 h-12" />,
        title: "For startups",
        description: "We assist early-stage teams in turning their ideas into MVPs more quickly. Get actual user input, win over investors, and release your app stress-free.",
        features: [
            "Launch MVPs fast",
            "Validate with users",
            "Build investor decks",
        ],
    },
    {
        icon: <img src={notes} alt="product" className="w-12 h-12" />,
        title: "For Product Teams",
        description: "We become a part of your internal process, handling the main tasks for you. Support, design systems, and an easy transition of your project.",
        features: [
            "Full-cycle UX/UI",
            "Design systems",
            "Cross-platform support",
        ],
    },
    {
        icon: <img src={monitor} alt="founder" className="w-12 h-12" />,
        title: "For Founders",
        description: "Design that helps you reach your targets. We care about how things work and how they help, using hard information, not guesswork.",
        features: [
            "Growth-focused UX",
            "Landing page design",
            "A/B testing assets",
        ],
    }
]

export const trialPills = [
    "See how we plan, design and build",
    "Get a full view of our UX process, made for you",
    "Track how we work, communicate and stay on schedule",
    "Know if we’re the right fit before you commit",
]