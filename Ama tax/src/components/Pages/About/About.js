import React from "react";
import Brands from "../../common/Brands/Brands";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import Services from "../../Home/Services";
import AboutBanner from "./AboutBanner";
import AboutCompany from "./AboutCompany";

const About = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <AboutBanner />
      <AboutCompany />
      <Services />
      <Brands />
      <Footer />
    </>
  );
};

export default About;
