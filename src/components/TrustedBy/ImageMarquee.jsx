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
