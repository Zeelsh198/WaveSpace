import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    // Only create if not already initialized
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    }

    return () => {
      // Optional: clean up on unmount (e.g. during route change in SPA)
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="h-full w-full overflow-hidden"
    >
      <div
        id="smooth-content"
        className="min-h-screen w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;
