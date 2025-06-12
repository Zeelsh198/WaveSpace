import React from "react";
import SubNavbar from "../../components/Navbar/SubNavbar";
import ContactForm from "../../Form/ContactForm";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import TextBox from "../../components/TextBox/TextBox";
import BlogCard from "../../components/BlogCard/BlogCard";
import blog1 from "../../components/BlogCard/BlogCardAssets/blog1.webp"
import blog1Author from "../../components/AskQuesTestimonial/AskQuesTestimonialAssets/1.webp"
import blog2 from "../../components/BlogCard/BlogCardAssets/blog2.webp"
import blog3 from "../../components/BlogCard/BlogCardAssets/blog3.webp"
import blog4 from "../../components/BlogCard/BlogCardAssets/blog4.webp"
import blog5 from "../../components/BlogCard/BlogCardAssets/blog5.webp"
import blog6 from "../../components/BlogCard/BlogCardAssets/blog6.webp"
import blog7 from "../../components/BlogCard/BlogCardAssets/blog7.webp"
import blog8 from "../../components/BlogCard/BlogCardAssets/blog8.webp"
import blog9 from "../../components/BlogCard/BlogCardAssets/blog9.webp"
const Blog = () => {
  return (
    <>
      <SubNavbar navLinks={[
        { label: "All Blogs", link: "/AllBlogs" },
        { label: "UI UX", link: "/ui-ux" },
      ]} searchPlaceholder="Search" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <TextBox text={"Wavespace Blog"} classes="text-4xl md:text-6xl font-bold pt-15" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <BlogCard
          layout="horizontal"
          image={blog6}
          tag="UX STRATEGY,US SERVICES"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />

      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 p-[0.5px] my-15" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-10 pb-20">
        <BlogCard

          image={blog1}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog2}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog3}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog4}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog5}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog6}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog7}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog8}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />
        <BlogCard
          image={blog9}
          tag="UI UX"
          timeToRead="9 MINUTES"
          title="Top 20 UI/UX Design Agencies in the USA - May 2025 Rankings"
          authorName="Shahid Miah"
          authorAvatar={blog1Author}
          authorLink="/authors/shahid"
          date="26 MAY, 2025"
        />

      </div>

    </>
  );
};

export default Blog;
