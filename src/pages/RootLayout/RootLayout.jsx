import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SmoothScrollWrapper from "../../components/SmoothScrollWrapper/SmoothScrollWrapper";

const RootLayout = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";
  const isServicesPage = location.pathname === "/services";

  let navbarBgColor = "bg-white";
  let navbarTextColor = "text-black";
  let navbarUnderlineColor = "bg-black";
  let navbarArrow = "bg-black";
  let arrowIconColor = "text-white";
  let btnBgColor = "bg-[#3f2fee]";
  let btnTextColor = "text-white";

  if (isPricingPage || isServicesPage) {
    navbarBgColor = isPricingPage ? "bg-[#101010]" : "bg-[#0c005b]";
    navbarTextColor = "text-white";
    navbarUnderlineColor = "bg-white";
    navbarArrow = "bg-white";
    arrowIconColor = "text-black";
    btnBgColor = "bg-[#d9fd51]";
    btnTextColor = "text-black";
  }

  return (
    <>
      {/* <SmoothScrollWrapper> */}
        {" "}
        <Navbar
          bgColor={navbarBgColor}
          txtColor={navbarTextColor}
          underlineColor={navbarUnderlineColor}
          arrowColor={navbarArrow}
          arrowIconColor={arrowIconColor}
          btnBgColor={btnBgColor}
          btnTextColor={btnTextColor}
        />
        <Outlet />
        <Footer />
      {/* </SmoothScrollWrapper> */}
    </>
  );
};

export default RootLayout;
