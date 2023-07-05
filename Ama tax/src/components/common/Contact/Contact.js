import React from "react";
import Contactform from "./Contactform";
const Contact = () => {
  return (
    <>
      <div className="tp-sv-contact grey-bg-4 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center pb-40">
                <span className="tp-section-subtitle mb-25">
                Direct Contact
                </span>
                <h2 className="tp-section-title">
                  Can’t find what are you <br />
                  looking for?
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-0">
            
            <div className="col-lg-8">
            <Contactform/>
            </div>
            <div className="col-lg-4">
              <div className="tp-ct-info-box black-bg">
                <div className="tp-ct-info tp-ct-info-border pt-50 pl-50 pb-35">
                  <h3 className="tp-ct-info__title text-white mb-35">
                    <span>
                      <i className="fal fa-address-book"></i>
                    </span>{" "}
                    Online Contact
                  </h3>
                  <p>
                  6 Gething Crescent, Bowden South Australia <br />
                  (08) 8123 4362
                  </p>
                  <p>
                  197A Ladywood Rd, Modbury Heights South Australia<br />
                  0425 491 977
                  </p>
                </div>
                <div className="tp-ct-info pt-60 pl-50 pb-35">
                  <h3 className="tp-ct-info__title text-white mb-35">
                    <span>
                      <i className="fal fa-address-book"></i>
                    </span>{" "}
                    Opening Hours
                  </h3>
                  <p>
                  Office hours:<br/>
                   9 AM - 5 PM  Monday – Friday <br />
                  July - October:<br/> 9 AM - 5 PM Monday -Sunday <br/>
                    <br/>
                  </p>
                </div>
                <div className="tp-ct-info pt-60 pl-50 pb-50 black-bg-2">
                  <div className="tp-ct-info-icons">
                   
                    <span>
                      <a href="https://web.facebook.com/p/Ama-Tax-Accountants-100050855595067/?_rdc=2&_rdr" target='_blank' >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.instagram.com/amataxaccountants/" target='_blank'>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.youtube.com/@AMATAXACCOUNTANTS" target='_blank'>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://au.linkedin.com/in/ama-abeywickrama-9242b574" target='_blank'>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
