import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedAdSection = ({ children, zIndex , top = "top-22" }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        y: -100, // Move all cards up together
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current.parentElement, // Use parent as trigger
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sticky top-22 ${top}`}
      style={{ 
        zIndex,
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedAdSection;

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedAdSection = ({ children, zIndex = 1 }) => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     const el = sectionRef.current;

//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: el,
//         start: "top top",
//         end: "+=100%", // adjust how long it's pinned
//         pin: true,
//         pinSpacing: false, // this prevents adding extra scroll space
//         scrub: false,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen sticky top-0"
//       style={{
//         zIndex,
//         background: "white", // Or use props if dynamic
//         transform: "translateZ(0)",
//         backfaceVisibility: "hidden",
//         perspective: "1000px",
//       }}
//     >
//       {children}
//     </section>
//   );
// };

// export default AnimatedAdSection;
