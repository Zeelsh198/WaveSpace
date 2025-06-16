/**
 * @component ImageMarquee
 *
 * `ImageMarquee` is a horizontally scrolling image strip component used to showcase logos,
 * product thumbnails, or brand visuals. It accepts custom scroll speed, direction, dimensions,
 * and gap spacing between images. The marquee duplicates the image array for seamless looping.
 *
 * @param {Object} props - Component props
 * @param {string[]} [props.images=[]] - Array of image URLs to display in the marquee.
 * @param {number} [props.scrollSpeed=700] - Duration (in seconds) of one full scroll cycle.
 * @param {string} [props.height=""] - Optional Tailwind classes for image height (e.g., `h-20`).
 * @param {string} [props.width=""] - Optional Tailwind classes for image width (e.g., `w-40`).
 * @param {string} [props.gap="mx-2"] - Horizontal margin between images (e.g., `mx-4`).
 * @param {string} [props.direction="left"] - Direction of scroll: `"left"` or `"right"`.
 * @param {string} [props.imageClass] - Additional Tailwind classes for each `<img>` element.
 *
 * @returns {JSX.Element} A responsive, animated marquee of images scrolling horizontally.
 *
 * @example
 * <ImageMarquee
 *   images={[img1, img2, img3]}
 *   scrollSpeed={40}
 *   height="h-20"
 *   width="w-32"
 *   gap="mx-4"
 *   direction="right"
 *   imageClass="rounded-lg"
 * />
 */


import React from "react";

const ImageMarquee = ({
  images = [],
  scrollSpeed = 700,
  height = '',
  width = '',
  gap = 'mx-2',
  direction = 'left', // ✅ New prop
  imageClass
}) => {
  const animationClass =
    direction === 'right' ? 'animate-image-marquee-right' : 'animate-image-marquee-left';

  return (
    <div className="w-full overflow-hidden py-5">
      <div
        className={`flex w-max ${animationClass}`}
        style={{ animationDuration: `${scrollSpeed}s` }}
      >
        {[...images, ...images].map((img, idx) => (
          <div key={idx} className={`${gap} ${width} ${height}`}>
            <img src={img} alt={`marquee-img-${idx}`} className={`object-cover w-full h-full ${imageClass}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Inject animation keyframes only once
const styleId = "image-marquee-style";
if (typeof document !== "undefined" && !document.getElementById(styleId)) {
  const style = document.createElement("style");
  style.id = styleId;
  style.innerHTML = `
    @keyframes image-marquee-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    @keyframes image-marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    .animate-image-marquee-left {
      animation-name: image-marquee-left;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .animate-image-marquee-right {
      animation-name: image-marquee-right;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `;
  document.head.appendChild(style);
}

export default ImageMarquee;
