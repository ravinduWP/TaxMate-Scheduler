import React from "react";
import Footer from "../common/Footer/Footer";
import Menu from "../common/Menu/Menu";
import Brands from "../common/Brands/Brands";
import TopAbout from "./TopAbout";
import TopCtaArea from "./TopCtaArea";
import HomeSlider from "./HomeSlider";
import Services from "./Services";


const Home = () => {
  return (
    <>
      <Menu />
      <HomeSlider />
      <TopAbout />
      <TopCtaArea />
      <Services/>
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
