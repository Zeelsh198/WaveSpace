
import SubNavbar from "../../components/Navbar/SubNavbar";

import TextBox from "../../components/TextBox/TextBox";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogDummyData, { blogNavLinks } from "../../utils/blogDummyData";

const Blog = () => {
  return (
    <>
      <section>
        <SubNavbar navLinks={blogNavLinks} searchPlaceholder="Search" />
      </section>
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <TextBox text={"Wavespace Blog"} classes="text-4xl md:text-6xl font-bold pt-15" />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <BlogCard layout="horizontal" {...blogDummyData[5]} />
      </section>

      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 p-[0.5px] my-15" />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-10 pb-20">
        {blogDummyData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </section>


    </>
  );
};

export default Blog;
