import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealLines = ({
  line1,
  line2,
  line1Class = "",
  line2Class = "",
  containerClass = "",
}) => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: line1Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(
            line1Ref.current,
            { x: "-100%" },
            {
              x: "-20%", // ends slightly left
              duration: 1.5,
              ease: "power2.out",
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            line1Ref.current,
            { x: "-100%" },
            {
              x: "-20%", // ends slightly left
              duration: 1.5,
              ease: "power2.out",
            }
          );
        },
      });

      ScrollTrigger.create({
        trigger: line2Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(
            line2Ref.current,
            { x: "100%" },
            {
              x: "10%", // ends slightly right
              duration: 1.5,
              ease: "power2.out",
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            line2Ref.current,
            { x: "100%" },
            {
              x: "10%", // ends slightly right
              duration: 1.5,
              ease: "power2.out",
            }
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`flex flex-col items-center ${containerClass}`}>
      <div
        ref={line1Ref}
        className={`text-center font-bold text-[52px] md:text-[84px] lg:text-[100px] xl:text-[170px]  ${line1Class}`}
      >
        {line1}
      </div>
      <div
        ref={line2Ref}
        className={`text-center font-bold text-[52px] md:text-[84px] lg:text-[100px] xl:text-[170px]   lg:-mt-16 ${line2Class}`}
      >
        {line2}
      </div>
    </div>
  );
};

export default ScrollRevealLines;
