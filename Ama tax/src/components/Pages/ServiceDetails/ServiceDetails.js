import React from "react";
import Contact from "../../common/Contact/Contact";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import ServiceDetailsAbout from "./ServiceDetailsAbout";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {


  return (
    <>
      <Menu header_style_2={true} />
      <ServiceDetailsBanner id={useParams().id} />
      <ServiceDetailsAbout id={useParams().id}/>
      <Contact />
      <Footer/>
    </>
  );
};

export default ServiceDetails;
