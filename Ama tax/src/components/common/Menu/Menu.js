import React, { useState } from "react";
import useSticky from "../../../hooks/use-sticky";
import Menus from "./Menus";
import OffCanvas from "./OffCanvas";
import { Link } from "react-router-dom";

const Menu = ({ header_style_2 }) => {
  // const [isToggleSearch, setToggleSearch] = useState(false);
  const [isOffCanvas, setOffCanvas] = useState(false);
  const { sticky } = useSticky();
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area ${
            header_style_2
              ? "header__area-2 pl-110 pr-110"
              : "header__transparent pr-90 pl-90"
          } header-active ${sticky ? "header-sticky" : ""}`}
        >
         

          <div className="header__main mb-0" id="header-sticky">
          <p className={`text-center mt-20 fs-6 ${header_style_2 ? 'text-black' : 'text-white'}`} >
            <a className="px-30 " href={"tel:0881234362"}><i className="fas fa-phone px-2 "></i>(08) 8123 4362</a>
            <a className="px-30 ml-60" href={"tel:0425491977"}><i className="fas fa-mobile px-2"></i>0425 491 977</a>
            <a className="px-30 ml-90" href={"mailto:ama@taxsa.com.au"}><i className="fas fa-envelope px-2"></i>ama@taxsa.com.au</a>
          </p>
            <div className="container-fluid py-0">
            
              <div className="row align-items-center">
              
                <div className="col-lg-2 col-md-4 col-7">
                  
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={
                          header_style_2
                            ? "https://amataxaccountants.com.au/assets/img/logo/logo-black.png"
                            : "assets/img/logo/logo.png"
                        }
                        alt="logo"
                        style={{ width: "420px",height:"100px" }}
                      />
                    </Link>
                  
                  </div>
                </div>
                <div className="col-lg-9 col-md-4 d-none d-md-block">
                  <div
                    className={`main-menu ${
                      header_style_2 ? "normal-menu" : ""
                    } text-center`}
                  >
                    <nav id="mobile-menu" className="d-none d-xl-block" >
                      <Menus/>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-1 col-md-4 col-5">
                  <div className="header__main_right d-flex justify-content-end align-items-center">
                  
                  
             
                     
                    <div
                      className={`tp-bar-icon ${
                        header_style_2 ? "tp-bar-icon-dark" : ""
                      }`}
                    >
                      <button
                        onClick={() => setOffCanvas(true)}
                        className="offcanvas-toggle-btn"
                      >
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvas isOffCanvas={isOffCanvas} setOffCanvas={setOffCanvas} />
      {/* off canvas end */}
    </>
  );
};

export default Menu;
