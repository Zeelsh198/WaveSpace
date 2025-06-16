/**
 * @component FooterLinksColumn
 *
 * `FooterLinksColumn` is a reusable footer section that displays a list of links under a common title.
 * It's typically used in website footers for organized navigation.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the column (e.g., "Company", "Services")
 * @param {string[]} props.links - Array of link labels to display in the column
 *
 * @returns {JSX.Element} A vertical list of footer links with a title
 */


import React from "react";

const FooterLinksColumn = ({ title, links }) => {
  return (
    <div className="min-w-[200px] space-y-5">
      <h4 className="text-white font-semibold text-xl">{title}</h4>
      <ul className="space-y-5">
        {links.map((link, index) => (
          <li key={index} className="text-[#D1D1D1] sm:text-lg   hover:border-b  hover:text-white cursor-pointer transition ">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksColumn;
