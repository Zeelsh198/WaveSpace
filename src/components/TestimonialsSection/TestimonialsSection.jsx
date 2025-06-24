/**
 * @component TestimonialsSection
 *
 * `TestimonialsSection` is a horizontally scrollable carousel section that showcases
 * client testimonials alongside an aggregated `RatingSummary`. It displays 4 cards at a time
 * and includes dot-based navigation to slide between groups of testimonials.
 *
 * The section supports smooth scrolling, auto-alignment via scroll snapping, and dynamic active dot
 * tracking based on scroll position. Cards include a combination of one static `RatingSummary` component
 * and multiple dynamic `FeedbackCard` components built from the `feedbackData` array.
 *
 * @returns {JSX.Element} A testimonial carousel section with rating summary, feedback cards,
 * and navigation dots.
 *
 * @example
 * <TestimonialsSection />
 */


import { useEffect, useRef, useState } from "react";
import FeedbackCard from "../FeedBackCard/FeedBackCard";
import RatingSummary from "../RatingSummary/RatingSummary";

import f1 from "../../../public/Images/FeedBackCardAssets/f1.webp";
import f2 from "../../../public/Images/FeedBackCardAssets/f2.webp";
import f3 from "../../../public/Images/FeedBackCardAssets/f3.webp";

const feedbackData = [
  {
    company: "Kodezi",
    feedback: (
      <>
        Wavespace very{" "}
        <strong className="font-bold text-black">reliable</strong> at all times
        and we have enjoyed working & designs are{" "}
        <strong className="font-bold text-black">truly impressive</strong>
      </>
    ),
    name: "Israqh Khan",
    role: "CEO",
    avatar: f1,
  },
  {
    company: "tournated",
    feedback: (
      <>
        <strong className="font-bold text-black">Highly happy</strong> with a
        design delivered by Wavespace.{" "}
        <strong className="font-bold text-black">
          Definitely will keep working
        </strong>{" "}
        with Wavespace. Great and quality smooth communication.
      </>
    ),
    name: "Nick Fisher",
    role: "CEO",
    avatar: f2,
  },
  {
    company: "ActiveSync",
    feedback: (
      <>
        Wavespace brought my{" "}
        <strong className="font-bold text-black">idea to life</strong>. Taken
        great care of my business & implement{" "}
        <strong className="font-bold text-black">best user experience</strong>{" "}
        possible
      </>
    ),
    name: "Abraham Ajayi",
    role: "CEO",
    avatar: f3,
  },
  {
    company: "LifeTales",
    feedback: (
      <>
        Wavespace is a{" "}
        <strong className="font-bold text-black">fantastic design team</strong>,
        with a healthy blend of UI and UX skills.{" "}
        <strong className="font-bold text-black">Highly recommended</strong>
      </>
    ),
    name: "Matt Kabus",
    role: "CEO & Founder",
    avatar: f1,
  },
  {
    company: "Uni AI Travel",
    feedback: (
      <>
        Wavespace has been{" "}
        <strong className="font-bold text-black">exceptional</strong> from start
        to finish. His creativity brought our ideas to life in ways we hadn't
        even imagined.
      </>
    ),
    name: "Michael Amar",
    role: "Marketing | UX Design",
    avatar: f2,
  },
  {
    company: "Off White",
    feedback: (
      <>
        Wavespace is a{" "}
        <strong className="font-bold text-black">fantastic design team</strong>,
        with a healthy blend of UI and UX skills.{" "}
        <strong className="font-bold text-black">Highly recommended</strong>
      </>
    ),
    name: "John Doe",
    role: "CEO",
    avatar: f3,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Create all cards array (RatingSummary + FeedbackCards)
  const allCards = [
    { type: 'rating', component: <RatingSummary />, id: 'rating' },
    ...feedbackData.map((item, index) => ({
      type: 'feedback',
      component: <FeedbackCard {...item} />,
      id: `feedback-${index}`,
      data: item
    }))
  ];

  // Calculate how many dot positions we need
  // We show 4 cards at a time, so we need (totalCards - 4 + 1) positions
  const totalDots = Math.max(1, allCards.length - 4 + 1);

  // Get visible cards for current position
  const getVisibleCards = () => {
    return allCards.slice(activeIndex, activeIndex + 4);
  };

  // Handle dot click
  const scrollToPosition = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = 410; // Based on your FeedbackCard max-w-[410px]
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Update active dot based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = 410;
        const currentIndex = Math.round(scrollLeft / cardWidth);
        if (currentIndex !== activeIndex && currentIndex < totalDots) {
          setActiveIndex(currentIndex);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, totalDots]);

  const visibleCards = getVisibleCards();

  return (
   <div className="py-16 ml-0 md:ml-[250px] px-4 sm:px-6">
  <div className="flex flex-col items-center justify-center">
    
    {/* Cards Container */}
    <div className="w-full max-w-[1640px] overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide transition-all duration-500 ease-in-out "
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {visibleCards.map((card, index) => (
          <div 
            key={`${card.id}-${activeIndex}-${index}`}
            className="flex-shrink-0 w-[90%] sm:w-[400px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            {card.type === 'rating' ? (
              <RatingSummary />
            ) : (
              <FeedbackCard {...card.data} />
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Dot Navigation */}
    <div className="flex items-center justify-center mt-8 space-x-2">
      {Array.from({ length: totalDots }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollToPosition(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeIndex === index 
              ? 'bg-gray-800' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</div>
  );
};

export default TestimonialsSection;