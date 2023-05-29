import React from "react";
import Contact from "../../common/Contact/Contact";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import ServiceDetailsAbout from "./ServiceDetailsAbout";
import ServiceDetailsBanner from "./ServiceDetailsBanner";

const ServiceDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceDetailsBanner />
      <ServiceDetailsAbout />
      <Contact />
      <Footer/>
    </>
  );
};

export default ServiceDetails;
