import React, { useRef, useState, useEffect } from "react";

const TeamScroller = ({ teamMembers = [] }) => {
  const scrollContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Responsive check
  const isDesktop = window.innerWidth >= 1024;

  const handleCardClick = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.firstChild.offsetWidth + 8; // Card width + gap
    const maxScroll = container.scrollWidth - container.clientWidth;

    // If at end, reset to start
    if (container.scrollLeft + cardWidth >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      setScrolled(false);
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
      setScrolled(true);
    }
  };

  return (
    <div className="overflow-hidden w-full px-8 py-16">
      <div
        ref={scrollContainerRef}
        className={`flex space-x-2 overflow-x-auto scroll-smooth no-scrollbar transition-all duration-500
          ${isDesktop && !scrolled ? "ml-[220px]" : "ml-0"}
        `}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onClick={handleCardClick}
            className="min-w-[250px] lg:min-w-[300px] cursor-pointer shrink-0 text-white p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[350px] h-[420px] object-cover mb-6"
            />
            <h3 className="text-2xl text-black">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamScroller;
