import React from "react";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import ContactInfo from "./ContactInfo";
import ContactUsBanner from "./ContactUsBanner";

const ContactUs = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ContactUsBanner />
      <ContactInfo />
      <Footer/>
    </>
  );
};

export default ContactUs;
