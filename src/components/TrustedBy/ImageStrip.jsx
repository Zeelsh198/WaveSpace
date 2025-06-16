/**
 * @component ImageStrip
 *
 * `ImageStrip` is a small, reusable component that renders a single image
 * (typically a logo) in a horizontally scrolling logo strip. It applies
 * consistent styling such as grayscale filter, opacity, and spacing.
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Source URL or import path for the image.
 * @param {string} [props.alt="scrolling-image"] - Alternate text for the image.
 *
 * @returns {JSX.Element} A styled `<img>` element designed for use in image carousels or marquees.
 *
 * @example
 * <ImageStrip src="/logos/amazon.png" alt="Amazon Logo" />
 */


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
