// src/components/ImageStrip.jsx
const ImageStrip = ({ src, alt = "scrolling-image" }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: "40px", // control vertical size
        marginRight: "4rem", // spacing between logos
        filter: "grayscale(100%)", // make it gray
        opacity: 0.7,
      }}
    />
  );
};

export default ImageStrip;
