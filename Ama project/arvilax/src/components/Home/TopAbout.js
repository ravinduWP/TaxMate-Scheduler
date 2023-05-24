import React from "react";
import { Link } from "react-router-dom";

const TopAbout = () => {
  return (
    <>
      {/* <!-- about area start --> */}
      <div className="tp-about-area pt-140">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="tp-about-left pr-90">
                <div className="tp-section-wrapper pt-5">
                  <span className="tp-section-subtitle">
                    we increase your business
                  </span>
                  <h2 className="tp-section-title pt-25 mb-30">
                    Don’t worry Your project in the right hands
                  </h2>
                  <p>
                    Neque volutpat ac tincidunt vitae semper quis lectus nulla
                    at. Nibh nisl id venenatis a condimentum. Libero justo
                    laoreet sit amet. Nisl nisi scelerisque eu ultrices vitae.
                    Dolor sit amet consectetur adipiscing elit pellentesque.
                    Phasellus egestas tellus rutrum
                  </p>
                  <p className="pt-10">
                    Sed ullamcorper morbi tincidunt ornare massa potenti nullam
                    ac tortor vitae purus. faucibus ornare suspendisse. Donec
                    enim diam vulputate ut pharetra sit amet aliquam id. Eu mi
                    bibendum neque egestas congue purus non enim praesent.
                  </p>
                </div>
                <div className="mt-45 mb-30">
                  <Link to="/about">
                    <div className="tp-theme-btn d-flex align-items-center">
                      <div className="tp-btn-inner">
                        <p className="mb-0">Let’t Talk</p>
                        <b>Get in Touch</b>
                        <span className="d-inline-block">
                          <svg
                            width="46"
                            height="8"
                            viewBox="0 0 46 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                          <svg
                            width="46"
                            height="8"
                            viewBox="0 0 46 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-right p-relative">
                <div className="about-img text-md-end">
                  <img src="assets/img/about/about.png" alt="" />
                </div>
                <div className="tp-about-info text-center grey-bg-4">
                  <h3>24</h3>
                  <h4>
                    Year of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about about end--> */}
    </>
  );
};

export default TopAbout;
