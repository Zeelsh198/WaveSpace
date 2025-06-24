/**
 * @component BlogCard
 *
 * `BlogCard` displays a blog post preview in either vertical or horizontal layout.
 * It includes an image, tag, estimated read time, title, author details, and publish date.
 * This card is typically used on a blog listing page or news section.
 *
 * @example
 * <BlogCard
 *   image="/blog1.webp"
 *   tag="Design"
 *   timeToRead="5"
 *   title="How We Redesigned the Dashboard"
 *   authorName="John Doe"
 *   authorAvatar="/author.jpg"
 *   authorLink="/author/john"
 *   date="June 16, 2025"
 *   layout="vertical"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} props.image - Blog image URL
 * @param {string} props.tag - Blog tag/category
 * @param {string|number} props.timeToRead - Estimated read time in minutes
 * @param {string} props.title - Blog title
 * @param {string} props.authorName - Author's name
 * @param {string} [props.authorAvatar] - Author image (optional)
 * @param {string} [props.authorLink="#"] - URL to author's profile
 * @param {string} props.date - Date string (optional fallback)
 * @param {string} [props.publishDate] - Preferred publish date to display
 * @param {string} [props.layout="vertical"] - Layout style: "vertical" or "horizontal"
 *
 * @returns {JSX.Element} Rendered blog card component
 */


import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../public/Images/BlogCardAssets/blog1.webp"
import authorImg from "../../../public/Images/AskQuesTestimonialAssets/1.webp"

const BlogCard = ({
  image = blog1,
  tag,
  timeToRead,
  title,
  authorName,
  authorAvatar = authorImg,
  authorLink = "#",
  date,
  publishDate,
  layout = "vertical", // "vertical" or "horizontal"
}) => {

  if (layout === "horizontal") {
    return (
      <div className="w-full flex flex-col lg:flex-row gap-6 group cursor-pointer bg-white pt-10">
        {/* Image Container - Horizontal Layout */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Content Section - Horizontal Layout */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
          <div className="flex flex-col gap-6">
            {/* Tag and read time */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="uppercase text-sm text-blue-600 font-semibold tracking-wide">
                {tag}
              </p>
              <span className="text-sm text-gray-500 uppercase">
                {timeToRead} MINUTES TO READ
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 transition-colors duration-300">
              {title}
            </h3>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={authorAvatar}
                  alt={authorName}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-base md:text-lg text-gray-700">
                  by{" "}
                  <Link
                    to={authorLink}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {authorName}
                  </Link>
                </span>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-500">Publish Date:</p>
                <p className="text-sm font-semibold text-gray-700 uppercase">
                  {publishDate || date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical Layout (default)
  return (
    <div className="w-full flex flex-col gap-4 group cursor-pointer">
      {/* Image Container - Vertical Layout */}
      <div className="w-full h-[240px] md:h-[280px] overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Tag and read time */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="uppercase text-sm text-blue-600 font-semibold tracking-wide">
          {tag}
        </p>
        <span className="text-sm text-gray-500 uppercase">
          {timeToRead} MINUTES
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300">
        {title}
      </h3>

      {/* Author Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={authorAvatar}
            alt={authorName}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-base md:text-lg text-gray-700">
            by{" "}
            <Link
              to={authorLink}
              className="text-blue-600 font-semibold hover:underline"
            >
              {authorName}
            </Link>
          </span>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-sm font-semibold text-gray-700 uppercase">
            {publishDate || date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;