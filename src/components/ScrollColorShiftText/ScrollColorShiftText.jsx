import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ScrollColorShiftText = ({
  text = "",
  fromColor = "#ccc",
  toColor = "#000",
  scrollContainerRef,
  className = "text-left",
  fontSize = "text-4xl",
  fontWeight = "font-semibold",
  lineHeight = "leading-tight",
  highlightWords = [],
  highlightColor = "#2CA9E1",
  animationStart = "top bottom",
  animationEnd = "center center",
}) => {
  const containerRef = useRef(null);

  // Break text into individual <span> per letter
  const letters = useMemo(() => {
    const words = typeof text === "string" ? text.split(" ") : [];
    const elements = [];

    words.forEach((word, wordIndex) => {
      word.split("").forEach((char, charIndex) => {
        const isHighlighted = highlightWords.includes(word);
        elements.push(
          <span
            key={`${wordIndex}-${charIndex}`}
            className="letter inline-block whitespace-pre transition-all"
            style={isHighlighted ? { color: highlightColor } : undefined}
          >
            {char}
          </span>
        );
      });

      // Space between words
      elements.push(
        <span key={`space-${wordIndex}`} className="letter inline-block">
          &nbsp;
        </span>
      );
    });

    return elements;
  }, [text, highlightWords, highlightColor]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const letterEls = el.querySelectorAll(".letter");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letterEls,
        {
          color: fromColor,
          opacity: 0,
        },
        {
          color: (i, target) => {
            const char = target.textContent?.trim();
            const word = target.parentNode?.textContent?.trim();
            return highlightWords.includes(word) ? highlightColor : toColor;
          },
          opacity: 1,
          duration: 1.5, // slower fade
          stagger: 0.1, // slower reveal across letters
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: animationStart,
            end: animationEnd,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [
    fromColor,
    toColor,
    scrollContainerRef,
    animationStart,
    animationEnd,
    highlightWords,
    highlightColor,
  ]);

  return (
    <div className="w-full  mx-auto">
      <div
        ref={containerRef}
        className={cn("text-left py-4 md:py-2 lg:py-1", className)}
        aria-label="Scroll-based animated text"
      >
        <p className={cn(fontSize, fontWeight, lineHeight)}>{letters}</p>
      </div>
    </div>
  );
};

export default ScrollColorShiftText;
