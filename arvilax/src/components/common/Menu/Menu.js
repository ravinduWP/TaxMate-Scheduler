import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSticky from "../../../hooks/use-sticky";
import Menus from "./Menus";
import OffCanvas from "./OffCanvas";

const Menu = ({ header_style_2 }) => {
  const [isToggleSearch, setToggleSearch] = useState(false);
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
          } header-sticky-active ${sticky ? "header-sticky" : ""}`}
        >
          <div className="header__main" id="header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-4 col-7">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={
                          header_style_2
                            ? "assets/img/logo/logo-black.png"
                            : "assets/img/logo/logo.png"
                        }
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-7 col-md-4 d-none d-md-block">
                  <div
                    className={`main-menu ${
                      header_style_2 ? "normal-menu" : ""
                    } text-center`}
                  >
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <Menus/>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-5">
                  <div className="header__main_right d-flex justify-content-end align-items-center">
                  
                  <Link className="tp-btn-sm mr-25" to="/">
                  <span>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="36"
                      height="8"
                      viewBox="0 0 36 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Make An Apointment
                </Link>
             
                     <div className="mt-45 mb-30">
                  
                </div>
                    <div className="tp-header-search-icons normal-search mr-80 p-relative ">
                      <div
                        className={`search-btn-wrap ${
                          isToggleSearch ? "header_search-open" : ""
                        }`}
                      >
                        <button
                          onClick={() => setToggleSearch(!isToggleSearch)}
                          className="button-search-toggle position-relative"
                        >
                          <i
                            className={`header_search-button ${
                              header_style_2 ? "" : "text-white"
                            } far fa-search`}
                          ></i>
                          <i
                            className={`header_search-close ${
                              header_style_2 ? "" : "text-white"
                            } far fa-times`}
                          ></i>
                        </button>
                        <div className="tp-search-form p-relative">
                          <form action="#">
                            <input type="text" placeholder="Search ..." />
                            <button
                              type="submit"
                              className="search-submit-icon"
                            >
                              <i className="far fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
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
