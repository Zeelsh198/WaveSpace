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
